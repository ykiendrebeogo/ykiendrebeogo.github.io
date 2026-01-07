---
layout: post
title: "What Directed Acyclic Graphs (DAGs) Teach Us About Choosing Covariates"
categories: Research
tag: Research

---



In applied research, a common impulse is to **include a vast array of control variables** in a regression model. The logic seems sound: the more variables we control for, the more likely we are to mitigate omitted variable bias. But this raises a fundamental question: How do we know if the "no unmeasured confounders" assumption holds? That is, how do we rigorously decide which covariates $X$ we need to condition on to satisfy the **selection on observables** assumption, $\{Y(1), Y(0)\} \perp D \mid X$?

The central challenge is that the assumption itself doesn't prescribe a method for its own fulfillment; it merely states a condition that must be met. This creates a somewhat circular problem where we need to select the right controls to justify our causal claims, but we lack a formal language to guide that selection. This is where **Directed Acyclic Graphs (DAGs)** offer a powerful solution. Revived by the work of Judea Pearl as a non-parametric alternative to the older paradigm of structural equation modeling, DAGs provide a formal language for making our causal assumptions explicit. They allow us to move beyond intuition and rigorously defend our choice of control variables based on the underlying causal structure of the data-generating process.

---

## Three Counterintuitive Lessons from Causal Graphs

DAGs force us to confront our statistical intuitions, some of which can be misleading. By visualizing causal relationships, we learn that the path to an unbiased estimate is not always paved with *more* control variables.

### Conditioning on a common effect can create spurious associations.

One of the most fundamental and surprising lessons from DAGs involves the **"collider."** A collider is a variable that is a common effect of two other variables (e.g., $D \rightarrow X \leftarrow Y$). In this structure, the two causes, $D$ and $Y$, are **unconditionally independent** of each other. However, once you condition on the collider $X$, they become **conditionally dependent**. Controlling for a common effect can actively introduce a spurious association that did not previously exist.



An intuitive example is a system with two independent light switches controlling a single light bulb. The state of one switch (on/off) is independent of the state of the other. However, if we only look at instances where the light is *on* (i.e., we condition on the collider), a new relationship emerges. If the light is on and we observe that the first switch is off, we can immediately deduce that the second switch *must* be on. By conditioning on the common effect, we've created a statistical association between two previously independent variables.

This phenomenon is not just a toy example. Consider a social science case where **Education ($D$)** and **prior Work Experience ($Y$)** are two independent predictors of **being hired for a job ($X$)**. Among the general population, there's no reason to think education levels and experience are correlated. However, if we analyze only the sample of people who were hired (conditioning on the collider $X$), a negative correlation will likely appear. A person with low education who got hired must have had high experience, and a person with low experience must have had high education. Conditioning on being hired creates a spurious trade-off between two otherwise independent variables.

### The goal is to block non-causal paths, not just add controls.

The primary source of confounding bias is the presence of **"backdoor paths"**—non-causal pathways that connect the treatment $D$ to the outcome $Y$. The classic confounder structure, $D \leftarrow X \rightarrow Y$, is a prime example. In this scenario, $X$ is a common cause of both $D$ and $Y$, creating a non-causal association between them.

The purpose of conditioning on covariates is to **"block"** all such backdoor paths. This insight is formalized by the **Backdoor Criterion**, a remarkably powerful diagnostic tool that tells us: (1) if confounding exists in our assumed causal model, (2) if it is possible to remove that confounding with observed variables, and (3) precisely which set of variables we must condition on to do so. The criterion has two simple conditions:

*   The chosen covariates $X$ block every backdoor path between the treatment $D$ and the outcome $Y$.
*   No variable in $X$ is a descendant of the treatment $D$.

The second condition prevents **"post-treatment bias."** This occurs when we control for a variable that is caused by the treatment itself (a mediator), effectively blocking part of the causal effect we are trying to measure. The Backdoor Criterion provides a clear prescription for not only what we must control for (variables that block backdoor paths) but also what we must *not* control for (descendants of the treatment and, as we will see, certain other variables).

### Even pre-treatment variables can be harmful controls.

Perhaps the most controversial lesson from DAGs is that even pre-treatment variables can be problematic controls. In fact, not all backdoor paths induce confounding. This is illustrated by a structure known as **"M-bias."** 

Consider a scenario where an unobserved variable $U_1$ causes both the treatment $D$ and a pre-treatment covariate $X$, and a second unobserved variable $U_2$ causes both $X$ and the outcome $Y$. The structure is $D \leftarrow U_1 \rightarrow X \leftarrow U_2 \rightarrow Y$.

In this case, the backdoor path from $D$ to $Y$ runs through $X$. However, because $X$ is a **collider** on this path, the path is already **blocked by default**. $D$ and $Y$ are not confounded. But if a researcher controls for the pre-treatment variable $X$, this action **"opens"** the non-causal path and induces a spurious association between $D$ and $Y$, creating confounding where none existed before. This possibility challenges the common heuristic that pre-treatment variables are inherently safe adjustments.

This tension exposes a deeper methodological divide between major causal inference traditions. One often-cited view from the potential outcomes framework—prominently associated with scholars like Donald Rubin—is that concerns like M-bias are largely a theoretical distraction, sometimes characterized as a “mathematical curiosity,” and that researchers should control for all pretreatment variables.

What this reveals is not a minor technical disagreement, but a fundamental difference in how causal validity is assessed. In the DAG framework, conditioning on a collider is problematic regardless of whether it occurs before or after treatment. In contrast, the potential outcomes tradition has often emphasized temporal ordering, treating “pretreatment” status as a sufficient criterion for adjustment. M-bias is precisely the case where this logic breaks down. It illustrates why causal structure, not timing alone, must guide covariate selection.

---

## From Statistical Ritual to Causal Reasoning

Directed Acyclic Graphs shift the practice of covariate selection from a statistical ritual of "controlling for everything" to a deliberate process of **causal reasoning**. They provide a clear, visual language for articulating and defending the assumed data-generating process that underpins any causal claim. 

By focusing our attention on blocking non-causal backdoor paths while avoiding the creation of new biases through conditioning on colliders or post-treatment variables, DAGs offer a rigorous roadmap for achieving identification. Ultimately, the primary value of DAGs is not just in helping us find the right adjustment set, but in forcing us to make our causal assumptions **transparent, testable, and debatable** with practical tools like [DAGitty](http://www.dagitty.net/).
