/* Beyond the Elements Discovery Lab. No external libraries required.
   Place in Static/js/interactive-learning.js. */
(() => {
    "use strict";
    function init() {
        const lab = document.getElementById("discovery-lab");
        if (!lab || lab.dataset.ready === "true") return;
        lab.dataset.ready = "true";
        const $ = id => document.getElementById(id);
        const text = (tag, value, parent) => {
            const node = document.createElement(tag);
            node.textContent = value;
            if (parent) parent.append(node);
            return node;
        };
        const readJSON = id => {
            try { return JSON.parse($(id)?.textContent || "{}"); }
            catch { return {}; }
        };
        const links = readJSON("lab-links");
        const pageLink = topic => links[topic] || ({bonding: links.atomic, reactions: links.states, elements: links.atomic})[topic];
        const focus = node => node?.focus({preventScroll: true});
        const showPanel = name => {
            const target = $("lab-" + name);
            if (!target) return;
            lab.querySelectorAll(".lab-panel").forEach(panel => { panel.hidden = panel !== target; });
            lab.querySelectorAll("[data-open]").forEach(button => {
                button.setAttribute("aria-expanded", String(button.dataset.open === name));
            });
            focus(target.querySelector("h2"));
            target.scrollIntoView({behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start"});
        };
        lab.querySelectorAll("[data-open]").forEach(button => {
            button.addEventListener("click", () => showPanel(button.dataset.open));
        });

        // Notebook: explicit save, guarded storage and download of current fields.
        const notebookKey = "bte.discovery-lab.notebook.v1";
        const missionKey = "bte.discovery-lab.missions.v1";
        const fields = ["topic", "ideas", "evidence", "questions", "connections"];
        const labels = ["Topic", "Key ideas", "Observations & evidence", "Questions", "Everyday connections"];
        const notebookStatus = $("notebook-status");
        const notebook = () => Object.fromEntries(fields.map(key => [key, $("notebook-" + key).value]));
        try {
            const saved = JSON.parse(localStorage.getItem(notebookKey) || "null");
            if (saved && typeof saved === "object" && !Array.isArray(saved)) {
                fields.forEach(key => { if (typeof saved[key] === "string") $("notebook-" + key).value = saved[key]; });
                notebookStatus.textContent = "Your saved notebook has been restored.";
            }
        } catch {
            notebookStatus.textContent = "Saved notes could not be read. You can still write and download notes.";
        }
        $("notebook-form").addEventListener("input", () => { notebookStatus.textContent = "Unsaved changes. Choose Save Notebook or Download Notes to keep them."; });
        $("notebook-form").addEventListener("submit", event => {
            event.preventDefault();
            try {
                localStorage.setItem(notebookKey, JSON.stringify(notebook()));
                notebookStatus.textContent = "Notebook saved in this browser on " + new Date().toLocaleString() + ".";
            } catch {
                notebookStatus.textContent = "This browser could not save your notes. Use Download Notes to keep a copy.";
            }
        });
        $("clear-notebook").addEventListener("click", () => {
            if (!window.confirm("Clear all notebook fields and the saved notebook in this browser? Download a copy first if you want to keep it.")) return;
            try { localStorage.removeItem(notebookKey); }
            catch {
                notebookStatus.textContent = "The saved copy could not be removed. Your notes have been kept on screen.";
                return;
            }
            fields.forEach(key => { $("notebook-" + key).value = ""; });
            notebookStatus.textContent = "Notebook cleared.";
        });
        $("download-notebook").addEventListener("click", () => {
            const data = notebook();
            const content = "Beyond the Elements — Discovery Notebook\n" + new Date().toLocaleString() + "\n\n" + fields.map((key,i) => labels[i] + "\n" + data[key]).join("\n\n");
            const url = URL.createObjectURL(new Blob([content], {type: "text/plain;charset=utf-8"}));
            const a = document.createElement("a");
            a.href = url;
            a.download = "discovery-notebook.txt";
            document.body.append(a);
            a.click(); a.remove();
            setTimeout(() => URL.revokeObjectURL(url), 10000);
            notebookStatus.textContent = "Notebook download requested. Check your browser’s downloads.";
        });

        // Missions are independent of the quiz bank, so they work if loading fails.
        const missions = {
            elements: [
                ["Read an element tile", "Choose an element and record its symbol, name and atomic number. Explain what the atomic number tells you."],
                ["Follow a connection", "Explore two connected elements and describe a compound containing them."],
                ["Find an everyday use", "Choose an element used in everyday life. Distinguish the pure element from a compound containing it."]
            ],
            classes: [
                ["Compare a family", "Compare two elements in one group. Identify one shared feature and one difference."],
                ["Locate a period", "Find three elements in one period. Record their atomic numbers in order."],
                ["Question a classification", "Find a metal, a nonmetal and a commonly classified metalloid. Describe a relevant property of each."]
            ],
            states: [
                ["Trace a phase change", "Describe melting, evaporation or condensation using a familiar substance. Explain what changes and what stays the same."],
                ["Separate a mixture", "Propose a way to separate a familiar mixture. Explain which physical property your method uses."],
                ["Compare particles", "Compare particle arrangement and movement in a solid, liquid and gas."]
            ],
            history: [
                ["Compare old and new ideas", "Explain how a classical element differs from a modern chemical element."],
                ["Connect evidence to a model", "Choose an atomic discovery and describe the evidence that led scientists to revise their model."],
                ["Predict with patterns", "Explain how gaps and patterns in Mendeleev’s table helped predict missing elements."]
            ]
        };
        let completed = {};
        let missionWarning = "";
        try {
            const saved = JSON.parse(localStorage.getItem(missionKey) || "{}");
            if (saved && typeof saved === "object" && !Array.isArray(saved)) completed = saved;
        } catch { missionWarning = "Saved mission progress could not be read. New progress can still be ticked."; }
        function updateMissionProgress() {
            const topic = $("mission-topic").value;
            const list = missions[topic] || [];
            const done = list.filter((_,i) => completed[topic + "-" + i] === true).length;
            $("mission-progress").textContent = done + " of " + list.length + " missions completed for this topic.";
        }
        function renderMissions() {
            const topic = $("mission-topic").value;
            $("missions").replaceChildren();
            (missions[topic] || []).forEach(([title, prompt], index) => {
                const card = text("article", "", $("missions"));
                text("h3", title, card); text("p", prompt, card);
                const href = pageLink(topic);
                if (href) {
                    const a = text("a", "Explore this learning page ↗", card);
                    a.href = href; a.target = "_blank"; a.rel = "noopener noreferrer";
                }
                const label = text("label", "", card);
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                const key = topic + "-" + index;
                checkbox.checked = completed[key] === true;
                label.append(checkbox, document.createTextNode("I completed this mission"));
                checkbox.addEventListener("change", () => {
                    completed[key] = checkbox.checked;
                    updateMissionProgress();
                    try {
                        localStorage.setItem(missionKey, JSON.stringify(completed));
                        missionWarning = "Mission progress saved in this browser.";
                    } catch { missionWarning = "Progress is available for this visit, but could not be saved in this browser."; }
                    $("mission-save-status").textContent = missionWarning;
                });
            });
            updateMissionProgress();
            $("mission-save-status").textContent = missionWarning;
        }
        $("mission-topic").addEventListener("change", renderMissions);
        renderMissions();

        // Quiz bank and session state.
        const setup = $("quiz-setup");
        const startButton = setup.querySelector('button[type="submit"]');
        const bankMessage = $("quiz-bank-count");
        bankMessage.setAttribute("role", "status");
        const retry = text("button", "Retry loading questions", setup);
        retry.type = "button"; retry.hidden = true;
        let bank = null, loading = false;
        let session = [], answers = [], index = 0, checked = false;
        function shuffle(items) {
            const copy = [...items];
            for (let i = copy.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [copy[i], copy[j]] = [copy[j], copy[i]];
            }
            return copy;
        }
        function validateBank(data) {
            if (!data || !data.topics || !Array.isArray(data.questions) || !data.questions.length) throw new Error("Missing topics or questions.");
            const ids = new Set();
            for (const q of data.questions) {
                if (typeof q.id !== "string" || ids.has(q.id) || !Object.hasOwn(data.topics, q.topic) || typeof q.question !== "string" || !q.question.trim() || !Array.isArray(q.options) || q.options.length !== 4 || !Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3 || typeof q.explanation !== "string" || !q.explanation.trim()) throw new Error("Invalid question: " + q?.id);
                if (q.options.some(o => !o || typeof o.text !== "string" || !o.text.trim() || typeof o.explanation !== "string" || !o.explanation.trim()) || new Set(q.options.map(o => o.text)).size !== 4) throw new Error("Invalid options: " + q.id);
                ids.add(q.id);
            }
            if (Object.values(data.topics).some(label => typeof label !== "string")) throw new Error("Invalid topic labels.");
            return data;
        }
        function pool() { return bank.questions.filter(q => $("quiz-topic").value === "mixed" || q.topic === $("quiz-topic").value); }
        function updateCount() {
            if (!bank) return;
            const available = pool().length;
            for (const option of $("quiz-count").options) option.disabled = Number(option.value) > available;
            if ($("quiz-count").selectedOptions[0]?.disabled) {
                const enabled = [...$("quiz-count").options].find(o => !o.disabled);
                if (enabled) $("quiz-count").value = enabled.value;
            }
            startButton.disabled = available < Number($("quiz-count").value);
            bankMessage.textContent = available + " questions available for this selection. Questions are randomly selected, with no repeats within a quiz.";
        }
        async function loadBank() {
            if (loading) return;
            loading = true; startButton.disabled = true; retry.hidden = true;
            bankMessage.textContent = "Loading question bank…";
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 15000);
            try {
                if (!lab.dataset.bankUrl) throw new Error("Missing data-bank-url on #discovery-lab.");
                const response = await fetch(lab.dataset.bankUrl, {signal: controller.signal});
                if (!response.ok) throw new Error("Question file returned HTTP " + response.status);
                bank = validateBank(await response.json());
                $("quiz-topic").replaceChildren();
                const mixed = text("option", "Mixed Topics", $("quiz-topic")); mixed.value = "mixed";
                for (const [key,label] of Object.entries(bank.topics)) {
                    const option = text("option", label, $("quiz-topic")); option.value = key;
                }
                updateCount();
            } catch (error) {
                bank = null;
                bankMessage.textContent = "The quiz questions could not be loaded. Check that discovery-lab-questions.json is saved in Static/data, then retry. Notebook and challenges remain available.";
                retry.hidden = false;
                console.error("Discovery Lab question bank:", error);
            } finally { clearTimeout(timeout); loading = false; }
        }
        retry.addEventListener("click", loadBank);
        $("quiz-topic").addEventListener("change", updateCount);
        $("quiz-count").addEventListener("change", updateCount);
        function chooseQuestions(count) {
            const available = pool();
            if ($("quiz-topic").value !== "mixed") return shuffle(available).slice(0,count);
            // Round-robin from shuffled topic pools yields a balanced mixed quiz.
            const buckets = shuffle(Object.keys(bank.topics)).map(topic => shuffle(available.filter(q => q.topic === topic)));
            const chosen = [];
            while (chosen.length < count && buckets.some(b => b.length)) {
                for (const bucket of buckets) {
                    if (bucket.length && chosen.length < count) chosen.push(bucket.pop());
                }
            }
            return shuffle(chosen);
        }
        function configureTopicLink(topic) {
            const link = $("quiz-topic-link");
            const href = pageLink(topic);
            link.hidden = !href;
            if (href) link.href = href; else link.removeAttribute("href");
            const note = $("quiz-feedback").querySelector(".lab-note");
            if (note) note.hidden = !href;
        }
        function renderQuestion() {
            checked = false;
            const q = session[index];
            $("quiz-question").textContent = q.question;
            $("quiz-progress-label").textContent = "Question " + (index + 1) + " of " + session.length + " · " + bank.topics[q.topic];
            $("quiz-progress").max = session.length;
            $("quiz-progress").value = answers.length;
            $("quiz-fieldset").disabled = false;
            $("quiz-options").replaceChildren();
            const order = shuffle(q.options.map((_,i) => i));
            order.forEach((optionIndex, position) => {
                const label = text("label", "", $("quiz-options"));
                const radio = document.createElement("input");
                radio.type = "radio"; radio.name = "answer"; radio.value = String(optionIndex);
                radio.id = "quiz-choice-" + position;
                label.append(radio, text("span", q.options[optionIndex].text));
            });
            $("quiz-validation").textContent = "";
            $("quiz-feedback").hidden = true;
            $("quiz-check").hidden = false; $("quiz-check").disabled = false;
            $("quiz-next").hidden = true;
            focus($("quiz-question"));
        }
        setup.addEventListener("submit", event => {
            event.preventDefault();
            if (!bank || startButton.disabled) return;
            const count = Number($("quiz-count").value);
            session = chooseQuestions(count); answers = []; index = 0;
            setup.hidden = true; $("quiz-results").hidden = true; $("quiz-session").hidden = false;
            $("quiz-review").replaceChildren(); $("quiz-review").hidden = true;
            $("quiz-review-toggle").setAttribute("aria-expanded", "false");
            renderQuestion();
        });
        $("quiz-answer-form").addEventListener("submit", event => {
            event.preventDefault();
            if (checked || !session.length || $("quiz-session").hidden) return;
            const selected = $("quiz-options").querySelector('input[name="answer"]:checked');
            if (!selected) {
                $("quiz-validation").textContent = "Choose an answer before checking it.";
                focus($("quiz-options").querySelector("input")); return;
            }
            checked = true;
            const q = session[index], choice = Number(selected.value);
            answers.push({q, choice, correct: choice === q.answer});
            $("quiz-fieldset").disabled = true;
            $("quiz-validation").textContent = "";
            $("quiz-check").disabled = true;
            $("quiz-feedback-title").textContent = choice === q.answer ? "Correct!" : "Let’s explore that answer";
            $("quiz-explanation").textContent = "Your answer: " + q.options[choice].text + ". " + q.options[choice].explanation + (choice !== q.answer ? " Correct answer: " + q.options[q.answer].text + "." : "");
            // Expandable explanations cover all distractors, including after a correct response.
            $("quiz-feedback").querySelector("details")?.remove();
            const detail = document.createElement("details");
            text("summary", "Why each answer is right or wrong", detail);
            for (const [i,option] of q.options.entries()) text("p", (i === q.answer ? "Correct — " : "Incorrect — ") + option.text + ": " + option.explanation, detail);
            $("quiz-feedback").append(detail);
            configureTopicLink(q.topic);
            $("quiz-feedback").hidden = false;
            $("quiz-progress").value = answers.length;
            $("quiz-next").textContent = index === session.length - 1 ? "See My Results →" : "Next Question →";
            $("quiz-next").hidden = false;
            focus($("quiz-next"));
        });
        function finish() {
            $("quiz-session").hidden = true; $("quiz-results").hidden = false;
            const right = answers.filter(a => a.correct).length;
            const unanswered = session.length - answers.length;
            $("quiz-score").textContent = right + " / " + answers.length + " answered correctly";
            $("quiz-results-summary").textContent = answers.length ? Math.round(100 * right / answers.length) + "% of answered questions correct. " + (unanswered ? unanswered + " questions left unanswered; these are not counted as wrong." : "You completed all " + session.length + " questions.") : "No answers were submitted. No score has been calculated.";
            const review = $("quiz-review"); review.replaceChildren(); review.hidden = true;
            const missed = answers.filter(a => !a.correct);
            for (const {q,choice} of missed) {
                const card = text("article", "", review);
                text("h3", q.question, card);
                text("p", "Your answer: " + q.options[choice].text + ". " + q.options[choice].explanation, card);
                text("p", "Correct answer: " + q.options[q.answer].text + ". " + q.explanation, card);
            }
            const toggle = $("quiz-review-toggle");
            toggle.disabled = !missed.length;
            toggle.textContent = missed.length ? "Review Missed Answers (" + missed.length + ")" : "No Missed Answers to Review";
            toggle.setAttribute("aria-expanded", "false");
            focus($("quiz-results-heading"));
        }
        $("quiz-next").addEventListener("click", () => {
            if (!checked) return;
            if (index === session.length - 1) finish();
            else { index++; renderQuestion(); }
        });
        $("quiz-end").addEventListener("click", () => {
            if (window.confirm("End this quiz and see results for the answers you have checked?")) finish();
        });
        $("quiz-review-toggle").addEventListener("click", () => {
            const review = $("quiz-review"); review.hidden = !review.hidden;
            $("quiz-review-toggle").setAttribute("aria-expanded", String(!review.hidden));
        });
        $("quiz-again").addEventListener("click", () => {
            $("quiz-results").hidden = true; setup.hidden = false;
            session = []; answers = []; updateCount(); focus($("quiz-topic"));
        });
        loadBank();
    }
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, {once: true});
    else init();
})();
