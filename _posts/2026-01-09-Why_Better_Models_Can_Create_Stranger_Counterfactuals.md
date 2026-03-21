---
layout: post
math: true
title: "Why Better Models Can Create Stranger Counterfactuals"
description: When AI explanations respect real-world constraints, the "what-ifs" become fewer but more meaningful.
categories: Note
tags: [Explainable AI, Machine Learning]
---



Have you ever received an explanation from an AI model that was technically correct but practically nonsensical? A common example comes from **counterfactual explanations (CEs)**, which suggest the minimum changes/perturbations needed to achieve a different outcome. An automated loan system might deny an application and suggest, "You would have been approved if your monthly income was $1,000 higher and you had one fewer child." While mathematically valid, the suggestion is absurd in the real world. These strange recommendations often highlight a fundamental flaw in how such explanations are generated.

The issue is that most CE methods are **"post-hoc,"** meaning they are bolted onto a pre-trained model. They treat the model as a black box, probing its input-output behavior without any understanding of the statistical relationships between the features it was trained on. This approach can't distinguish between a plausible change and an impossible one. But what if we built our explanations using models that inherently understand and respect the data's underlying structure? This more principled approach reveals a deeper, more interesting tension: **the more faithful a model is to the real-world data structure, the more constrained—and sometimes stranger—its plausible explanations can become.**

---

## Rethinking the Foundation: Embed Structure in the Model, Not as an Afterthought

**Takeaway:** To get sensible explanations, use a model that understands feature dependencies from the beginning.

Instead of trying to enforce real-world constraints as an afterthought, a more robust method is to use a model class that explicitly encodes feature relationships from the beginning. The **Conditional Gaussian Network Classifier (CGNC)** is one such model. It represents feature dependencies using a Directed Acyclic Graph (DAG), and its core structural assumption is that the class variable $Y$ is a parent to all feature nodes $X$. This design makes it a **generative classifier**, directly embedding the logic of how features are generated conditioned on their class.

This "structure-aware" approach is fundamentally different from post-hoc methods that try to patch over implausible suggestions after the fact. By building the model on a foundation of known feature relationships, the search for a counterfactual is naturally guided toward changes that are semantically coherent. Without this foundation, post-hoc approaches carry a significant risk:

> ...the generated explanations may not align with the model's internal structure or violate the data-generating process, compromising causal and semantic consistency.
{:.research-question}

By integrating the data's generative logic directly into the model, we can ensure that the counterfactuals it produces are consistent with the very structure it learned, leading to more reliable and trustworthy explanations.

---

## Measuring Change: Why Euclidean Distance Deceives

**Takeaway:** A meaningful distance metric must account for the data's geometry.

Because the CGNC is a generative model that defines a specific statistical distribution for each class, the choice of distance metric must respect that underlying structure to be meaningful. Most methods default to a simple Euclidean distance (a straight line), but this can be a problematic metric for correlated data. It ignores feature scales and, more importantly, the correlations that the CGNC is designed to capture.

A better approach is to use a distance metric that understands the data's underlying geometry. The **Mahalanobis distance**, based on a "whitening transformation," achieves this. In plain language, this transformation rescales and rotates the data into a new space where features are uncorrelated and have a standard scale. There is a subtle but crucial design choice here. Since the search for a counterfactual begins from an instance in class 0, the model's generative assumption implies that any derived counterfactual still follows the class 0 distribution, $P(X \mid Y = 0)$. For this reason, the whitening transformation is constructed using class 0's covariance matrix ($\Sigma_0$), keeping the distance metric consistent with the point's statistical origin. Furthermore, this whitening is applied only within the distance metric, not to the underlying data. The rationale is to maintain the model's integrity:

> By confining whitening to the metric, the original model formulation is preserved while still enabling distribution-aware proximity evaluation.
{:.research-question}

To understand this intuitively, consider the following. In the original, correlated data space, Mahalanobis $\ell_2$-balls appear as ellipses, while $\ell_1$ and $\ell_\infty$ balls appear as distorted diamonds and squares. This reflects the data's true geometry. After the whitening transformation is applied, these same shapes become a standard circle ($\ell_2$), diamond ($\ell_1$), and square ($\ell_\infty$), revealing the uniform geometric space in which the Mahalanobis metric accurately measures proximity.

---

## Building for the Real World: Robustness Through Adversarial Search

**Takeaway:** A good explanation should be resilient to small implementation errors.

When a counterfactual suggests a specific change, a user may not be able to implement it with perfect precision. A good explanation should remain valid even if the user's action deviates slightly from the recommendation. To achieve this, we can turn to **robust optimization**. The core idea is to find a counterfactual that works not just for a single point, but for all points within a small "uncertainty set" around it.

This requirement, however, introduces a major challenge: it creates a **semi-infinite program**, an optimization problem with a finite number of variables but an infinite number of constraints (one for every point in the uncertainty set), which is generally intractable to solve directly. A practical way to solve this is with a **master-adversary (or cutting-set) algorithm**. This process turns the infinite set of constraints into a manageable, finite sequence through an iterative process:

1.  The **Master problem** proposes a potential counterfactual solution, considering only a small set of known constraints.
2.  The **Adversary** then stress-tests this solution by searching for the worst-case perturbation within the uncertainty set—the one that most violates the classification constraint.
3.  If the adversary finds such a violation, that point is added as a new constraint for the master. The master must now find a solution that works for the original goal and is immune to this newly discovered failure case.

This process repeats until the master finds a solution that the adversary cannot break, resulting in a counterfactual that is robust to small implementation errors.

---

## The Paradox of Plausibility

By integrating structural knowledge directly into the model (CGNC), using a distribution-aware distance metric (Mahalanobis), and ensuring stability through a robust optimization process, we can generate counterfactuals that are far more consistent, plausible, and reliable. However, this commitment to structural fidelity reveals a final, counterintuitive paradox. **The very accuracy of a strong generative model can make finding a plausible counterfactual more difficult**, especially when the model's classes are well-separated.

Imagine a model has learned two distinct, non-overlapping distributions for "loan approved" and "loan denied." A factual point deep inside the "denied" distribution is, by definition, a large Mahalanobis distance from the center of the "approved" distribution. To generate a counterfactual, the algorithm must push this point across the decision boundary. But to do so while respecting the data's structure, it may have to move the point to the extreme statistical tail of its own distribution—a region of deep implausibility. This highlights a core conceptual tension:

> ...the more structurally faithful the generative model, the more constrained the space of feasible and interpretable counterfactuals becomes, particularly in the presence of strongly separated class distributions.
{:.research-question}

This leaves us with a critical question for the future of explainable AI. How do we best navigate the trade-off between building models that accurately reflect the world's complex correlational structure and our need for explanations that are not just technically valid, but also intuitively plausible and actionable for a human user?
