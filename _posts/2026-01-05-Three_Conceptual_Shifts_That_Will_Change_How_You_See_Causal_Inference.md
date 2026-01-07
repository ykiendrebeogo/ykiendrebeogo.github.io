---
layout: post
title: "Three Fundamental Conceptual Shifts in Causal Inference"
categories: Research
tag: Research
mermaid:
  enabled: true
---

For decades, making causal claims in the social sciences often followed a familiar pattern. Researchers would run a regression with a long list of control variables—the so-called "kitchen sink" approach—find a statistically significant coefficient, and then describe the result using causal weasel words. Phrases like "associated with," "is linked to," or "predicts" were used to hint at a causal relationship without explicitly claiming one, leaving the reader to fill in the blanks.

The modern approach to causal inference, often called the "credibility revolution," demands more. It insists that researchers move beyond ambiguous language and be transparent about the logic underpinning their causal claims. This revolution is less about mastering a specific set of statistical techniques and more about adopting a new way of thinking—a framework for asking causal questions with precision. At its heart is a simple but powerful equation from economist Charles Manski:

> "data + assumptions = conclusions"
{:.research-question}

The goal of modern causal inference is to make the "assumptions" part of this equation as explicit and defensible as possible. This post explores three fundamental conceptual shifts that are central to this new paradigm. These shifts build on one another, taking us from the foundational definition of a causal effect, to the practical constraints on the questions we can ask, and finally to the subtle traps that emerge when our interventions affect the very existence of our outcomes. Understanding them will change not just how you evaluate causal research, but how you frame causal questions in the first place.

---

## 1. Causal Inference is Fundamentally a Missing Data Problem

**All causal questions are missing data problems.**

The core insight of the modern framework is that causal inference is not, at its root, a problem of finding the right regression specification. It is fundamentally a problem of missing data. To understand this, we can turn to the Potential Outcomes framework (sometimes called the Neyman-Rubin Causal Model).

Let's imagine we want to know the effect of a treatment (like being canvassed in a political campaign) on an outcome (like voter turnout). For any individual $i$, there are two potential outcomes:

*   $Y_i(1)$: The outcome for unit $i$ if they receive the treatment.
*   $Y_i(0)$: The outcome for unit $i$ if they do not receive the treatment.

The individual causal effect is the difference between these two states: $\tau_i = Y_i(1) - Y_i(0)$. This is precisely what we want to know. But we immediately run into what is known as the "fundamental problem of causal inference": for any given person, we can only ever observe one of these potential outcomes. If they are canvassed, we see $Y_i(1)$, but $Y_i(0)$ becomes an unobserved counterfactual. If they are not canvassed, we see $Y_i(0)$, and $Y_i(1)$ is unobserved. The counterfactual is, by definition, missing data.

This reframing is profound. It shifts the focus of empirical work from "controlling for variables" to "finding a credible justification for how your control group stands in for the treatment group's missing counterfactual." It clarifies that the entire enterprise of causal inference is about developing credible strategies and making explicit assumptions to infer, or substitute for, this missing information.

---

## 2. "No Causation Without Manipulation" Changes the Questions We Can Ask

**If you can’t manipulate it, you can’t estimate its effect.**

For a potential outcome like $Y_i(d)$ to be conceptually coherent, the treatment $d$ must be something that is, at least in principle, manipulable. This idea is captured in the influential motto from [Paul Holland (1986)](https://www.jstor.org/stable/2289064):

> "No causation without manipulation"
{:.research-question}

This principle forces researchers to be disciplined in the kinds of questions they ask. For example, it poses a significant challenge when studying the effects of immutable characteristics. Consider the question, "What is the effect of being a man on my political views?" The potential outcomes framework forces us to ask: what is the hypothetical manipulation? To estimate the causal effect, we would need to observe my political views as a man and then, in a counterfactual world, observe my views if I were not a man. Defining what that manipulation even means is conceptually very tricky.

The common solution is not to abandon these important questions, but to reframe them around a manipulable variable. Instead of asking about the effect of being a certain race or gender, a researcher might ask about:

*   The effect of *perceived* race or gender on how a legislator replies to an email.
*   The effect of electing a female versus a male legislator on subsequent policy outcomes.

In each case, the focus shifts from an immutable trait to a manipulable action or perception, allowing for a well-defined causal question.

---

## 3. Sometimes the Treatment Defines the Outcome Itself

**Beware of post-treatment bias, especially when treatment affects existence.**

One of the most subtle but critical challenges in causal inference arises when the treatment itself affects whether the outcome can even be observed. This is often called a "truncation" problem (where "death" is a metaphor for the outcome being unobservable; [Zhang & Rubin 2003](https://www.jstor.org/stable/3701340)), and it creates a thorny form of post-treatment bias.

Consider a study estimating the effect of a job training program on wages. The outcome, wages ($Y_i$), is only observable for individuals who are employed. The problem is that the job training program ($D_i$) might also affect the likelihood of being employed in the first place. If the program is successful, it might help previously unemployed people find jobs, even if those jobs are at the lower end of the wage scale.

Here lies the pitfall. The program's success creates a statistical illusion. The pool of employed people in the treatment group now includes individuals who, without the program, would have been unemployed and had a wage of $0$. By bringing these low-wage earners into the employed group, the program can artificially drag down the average wage, making it look like a failure even when it's a success.

To handle this, frameworks like Principal Stratification have been developed. This approach forces researchers to define the causal effect for specific, unobserved subgroups (or strata) based on their potential employment status. In our example, there are four such strata:

1.  **The "always employed"**: people who would have a job regardless of the program.
2.  **The "never employed"**: people who would be jobless regardless of the program.
3.  **The "helped"**: people who are employed only if they take the program.
4.  **The "hurt"**: people who are employed only if they do not take the program.

The statistical illusion arises because the "helped" stratum—who likely have lower starting wages than the "always employed"—are added to the wage pool of the treatment group, but no equivalent group is added to the control group. Principal Stratification clarifies that a well-defined causal effect can only be estimated for the "always employed." The major challenge, of course, is that we cannot directly observe which stratum any given individual belongs to, requiring another set of careful assumptions.

---

## A Framework for Thinking

These three insights—framing causality as a missing data problem, demanding manipulability in our treatments, and carefully defining effects when the treatment creates the conditions for observation—are pillars of the modern approach to causal inference. They reveal that the potential outcomes framework is not just a statistical tool for generating estimates; it is a conceptual tool for clarifying thought. It forces us to move from vague associations to precise causal questions. It demands that we be transparent about our assumptions and rigorous in defining the counterfactual world we are invoking. The next time you formulate a research question, ask yourself: what are the unobserved counterfactuals, and what is the hypothetical manipulation required to reveal them? The answer will set you on the path to a more credible conclusion.
