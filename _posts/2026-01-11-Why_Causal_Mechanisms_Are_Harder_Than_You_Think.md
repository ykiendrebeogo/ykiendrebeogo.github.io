---
layout: post
title: "Why Causal Mechanisms Are Harder Than You Think"
description: The hidden costs of asking "how does it work?"—cross-world counterfactuals and heroic assumptions.
categories: Note
tags: [Causal Inference]
---

Researchers are often pushed to move beyond asking "does it work?" to explain "how does it work?". Adjudicating between competing theories that predict the same average treatment effect (ATE) requires us to investigate the causal mechanisms that drive an effect. However, when we try to formalize this inquiry, we quickly run into deep conceptual and identification challenges that are often overlooked.

The tools designed to decompose a total effect into its constituent pathways, like causal mediation, force us to confront strange new conceptual objects and rely on assumptions far stronger than those needed to estimate a simple ATE. The goal of breaking down a causal effect into its direct and indirect components is intuitive, but achieving it rigorously unveils a series of non-obvious and demanding theoretical requirements. This post explores a few of these challenges to highlight why identifying causal mechanisms is much harder than you might think.

---

## Natural mediation analysis requires "cross-world" counterfactuals.

**Takeaway:** The quantities we need are not just unobserved—they are logically impossible to ever observe.

To formally define causal mechanisms, we use potential outcomes notation. Let $D$ be the treatment, $M$ be the mediator, and $Y$ be the outcome. The potential value of the mediator if an individual receives treatment $d$ is $M_i(d)$. The potential outcome for that individual under treatment $d$ and a fixed mediator value $m$ is $Y_i(d, m)$.

Using this framework, we can define the **Natural Indirect Effect (NIE)**, which captures the effect of the treatment operating through the mediator. For a given treatment status $d$, its average is:

$$\delta(d) = E[Y_i(d, M_i(1)) - Y_i(d, M_i(0))]$$

To calculate the NIE for the untreated group ($d=0$), we need the quantity $Y_i(0, M_i(1))$. This represents the outcome for an individual who was not treated, but whose mediator is set to the value it would have taken *if they had been treated*.

This is a **"cross-world" counterfactual**. It asks what would happen in one potential world (no treatment) if a variable were set to a value from another, mutually exclusive potential world (treatment). This quantity is not just unobserved in the way that all potential outcomes are; it is logically impossible to ever observe for any single individual. This conceptual leap—relying on a quantity that can never be realized even in principle—is a foundational difficulty of mediation analysis.

This conceptual hurdle is fundamental, but even if we accept it, we immediately face another problem: what "direct effect" are we even trying to estimate?

---

## "Direct effect" can mean two very different things.

**Takeaway:** The Controlled Direct Effect and Natural Direct Effect answer different questions entirely.

When we talk about the "direct effect" of a treatment, we could be referring to two distinct estimands that answer different questions. Let's use a running example: exercise ($D$) affects weight ($Y$) through the mediator of diet ($M$, measured in calories).

The **Controlled Direct Effect (CDE)** is defined as:

$$\xi(m) = E[Y_i(1,m) - Y_i(0,m)]$$

This measures the average effect of the treatment while experimentally holding the mediator $M$ fixed at a specific level $m$. For example, it would be the effect of starting an exercise program ($D=1$ vs $D=0$) while forcing everyone to consume exactly 1500 calories ($m=1500$). The CDE is the target of an experiment where a researcher can manipulate both the treatment and the mediator, and it answers the question: *"What is the effect of the treatment if we block the mediation pathway?"*

The **Natural Direct Effect (NDE)** is defined as:

$$\zeta(d) = E[Y_i(1, M_i(d)) - Y_i(0, M_i(d))]$$

This measures the average effect of the treatment while allowing the mediator to take on its "natural" value under treatment status $d$. For instance, this would be the effect of starting an exercise program while letting people eat whatever they would naturally eat as a result of that program. It answers the question: *"What is the direct effect of the treatment if the mediator operates as it normally would?"*

These estimands are not interchangeable. The appeal of the NDE and NIE framework is that it provides an exact decomposition of the total effect:

$$\text{Total Effect} = \text{NIE}(d) + \text{NDE}(1-d)$$

This elegant formula is the primary motivation for these definitions, but identifying its components requires assumptions that are anything but elegant.

---

## The "no unobserved mediator-outcome confounding" assumption is heroic.

**Takeaway:** Sequential ignorability demands that the mediator is as-good-as-random—an untestable and often implausible requirement.

To identify the Natural Direct and Indirect Effects, we rely on an assumption called **"sequential ignorability."** It has two parts:

1. $\{Y_i(d', m), M_i(d)\} \perp D_i \mid X_i$
2. $Y_i(d, m) \perp M_i \mid X_i, D_i$

The first part is the standard "selection on observables" assumption for the treatment itself. The second part is the critical hurdle. In plain language, it requires that, once we account for pre-treatment covariates $X$ and the treatment $D$, the mediator $M$ is effectively randomly assigned with respect to the potential outcomes $Y$. This rules out any unobserved "confounder" (like individual motivation or health consciousness) that could independently influence both the mediator (e.g., adherence to a diet) and the outcome (e.g., weight loss).

This assumption is far stronger than what is required to identify a Controlled Direct Effect. CDE identification can accommodate observed post-treatment confounders ($Z$) that are affected by the treatment and in turn affect the mediator. Methods like sequential g-estimation are specifically designed to handle this $D \rightarrow Z \rightarrow M$ confounding structure. The assumption for NDEs/NIEs, by contrast, rules out any such variable, observed or unobserved. This is an untestable and heroic requirement in most research settings.

Even with our identification strategy settled, common estimation methods can introduce their own set of hidden problems.

---

## Simple estimation methods hide strong assumptions.

**Takeaway:** The classic "product of coefficients" method assumes away treatment-mediator interactions.

A common practical approach to estimating mediation effects is to use **Linear Structural Equation Models (LSEMs)**. In this framework, one regression models the effect of the treatment $D$ on the mediator $M$ (yielding a coefficient $\hat{\alpha}_1$), and a second regression models the effect of $D$ and $M$ on the outcome $Y$ (yielding a coefficient $\hat{\beta}_2$ for the mediator). The indirect effect is then calculated as the product of these coefficients: $\hat{\alpha}_1 \times \hat{\beta}_2$.

While computationally simple, this method rests on strong, often implicit, assumptions. By specifying a model like $Y_i(d, m) = \beta_0 + \beta_1 d + \beta_2 m + \varepsilon_i$, the researcher assumes that the effects of the treatment and the mediator are constant across all individuals. Crucially, this model also assumes there is **no interaction** between the treatment $D$ and the mediator $M$ in their effect on the outcome $Y$. It assumes away a more complex reality, such as $Y_i(d, m) = \beta_0 + \beta_1 d + \beta_2 m + \beta_3 dm + \varepsilon_i$, by forcing the interaction term ($\beta_3$) to be zero.

This means the direct effect of the treatment is assumed to be the same regardless of the value of the mediator. If this is wrong, the LSEM approach can produce severely biased estimates of direct and indirect effects, potentially causing a researcher to incorrectly conclude which causal pathway is dominant.

---

## The Price of Decomposition

Investigating causal mechanisms is a vital scientific endeavor, but it is conceptually and methodologically much harder than estimating a total causal effect. The desire to decompose an effect into its direct and indirect pathways leads us down a path requiring cross-world counterfactuals and heroic, untestable assumptions.

When the strong assumptions required for natural mediation are untenable, alternative methods like sequential g-estimation can be used to estimate Controlled Direct Effects, which still provide valuable information about mechanisms. However, these alternatives come at a price: the loss of the attractive total effect decomposition. With CDEs, you can get a partial answer about the mechanism (e.g., "is there any direct effect when the mediator is blocked?"), but you lose the simple and intuitive $\text{Total Effect} = \text{NDE} + \text{NIE}$ story.

This trade-off between a complete but fragile decomposition and a partial but more robust answer is central to the challenge of studying causal mechanisms. To build a convincing case, we must use all techniques at our disposal, including not just mediation but also tests for effect modification and placebo tests.

**Mechanisms are hard.**

This is not a statement of defeat, but a call for the methodological humility and pluralism required to make credible claims about the complex pathways of cause and effect.
