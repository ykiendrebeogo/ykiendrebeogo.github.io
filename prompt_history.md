# Prompt History — ykiendrebeogo.github.io

This file records every prompt or instruction given during this project, in chronological order.
It is read at the start of each session to maintain project context.

---

## Session: 2026-07-12

### Prompt 1
**Exact prompt:** `cd C:\Users\k_you\ykiendrebeogo.github.io`
**Description:** User navigated to the Jekyll-based GitHub Pages academic website directory (al-folio theme). We listed the directory contents to confirm the project structure.

---

### Prompt 2
**Exact prompt:** `claude --resume`
**Description:** User attempted to run the Claude Code CLI resume command from within an active session. Explained that this command must be run from a terminal outside of an active session.

---

### Prompt 3
**Exact prompt:** `claude`
**Description:** User attempted to launch Claude Code CLI from within the session. Explained they are already inside a session.

---

### Prompt 4
**Exact prompt:** `plugin marketplace add anthropics/skills` (local command)
**Description:** User added the anthropic-agent-skills marketplace plugin. Result: Successfully added.

---

### Prompt 5
**Exact prompt:** `plugin install example-skills@anthropic-agent-skills` (local command)
**Description:** User installed the example-skills plugin from the anthropic-agent-skills marketplace. Result: Successfully installed.

---

### Prompt 6
**Exact prompt:** Create a file named "prompt_history.md" in this folder if it does not exist. For the entire project, Save in there all every single prompt or instruction I have given to you since the start of this project. Additionally, From now on to the future, every single time I give you a new prompt or instruction, your very first action must be to append my exact prompt, along with a brief description of what we did, to "prompt_history.md". Always read this file at the start of our tasks to ensure you remember our historical project context.
**Description:** Created this `prompt_history.md` file and populated it with all prompts from the current session. Established the convention of appending each new prompt here as the first action.

---

## Session: 2026-09-13

### Prompt 1
**Exact prompt:** `/resume`
**Description:** User attempted to resume a prior conversation. No prior sessions found for this project directory — this was a fresh session.

---

### Prompt 2
**Exact prompt:** `ls -lt ~/.claude/projects/`
**Description:** User listed the Claude projects directory to explore available session files.

---

### Prompt 3
**Exact prompt:** `find ~/.claude/projects/ -name "*.jsonl" -type f`
**Description:** User searched for all JSONL session files across Claude projects. Found 10 session files across various project directories.

---

### Prompt 4
**Exact prompt:** `yes, show me what was in the last session`
**Description:** User asked to read and summarize the JSONL session file for this project. The file contained only the current session (started that same day) — no prior session to recover.

---

### Prompt 5
**Exact prompt:** `claude --resume b488c4a2-a67c-412e-8429-113554cb89f9`
**Description:** User attempted to resume a session by ID from within an active session. Explained that this is the current session ID, and that the command must be run from an external terminal. Provided a table of other project session IDs for reference.

---

### Prompt 6
**Exact prompt:** I have saved the Policy-Work.docx file in the _data folder. Use it to add a page named "Policy Work" to my personal website located at "https://ykiendrebeogo.github.io/". This new page should be positioned between the "Research" and "Teaching" pages. The page's background design should be the same of the home page.
**Description:** Extracted content from `_data/Policy-Work.docx` using Python's zipfile/XML. Created `_pages/policy-work.md` with `layout: page`, `nav: true`, `nav_order: 3` (between Research at 2 and Teaching at 6), and all 14 policy work items as a numbered list. The `layout: page` inherits the same default layout (particles.js background) as the home page automatically.

---

### Prompt 7
**Exact prompt:** Push and comit to my online github repository.
**Description:** Staged only `_pages/policy-work.md`, committed with message "Add Policy Work page to navbar", and pushed to `origin/main`. Commit: `9652dc0`.

---

### Prompt 8
**Exact prompt:** In the Policy-Work.docx file, I left hyperlinks (when available) to each policy piece. Include those links (when available) and update the policy-work page.
**Description:** Extracted hyperlinks from the docx relationships XML. Found 12 of 14 items have links (items 10 and 11 have none). Updated `_pages/policy-work.md` to wrap each title in its corresponding `<a href>` tag. Committed (`afb8106`) and pushed to `origin/main`.

---

### Prompt 9
**Exact prompt:** Create a file named "prompt_history.md" in this folder if it does not exist. For the entire project, Save in there all every single prompt or instruction I have given to you since the start of this project. Additionally, From now on to the future, every single time I give you a new prompt or instruction, your very first action must be to append my exact prompt, along with a brief description of what we did, to "prompt_history.md". Always read this file at the start of our tasks to ensure you remember our historical project context.
**Description:** File already existed with history from 2026-07-12. Appended all prompts from the 2026-09-13 session. Established (and saved to Claude memory) the convention: read this file at session start, and append each new prompt as the very first action.

---
