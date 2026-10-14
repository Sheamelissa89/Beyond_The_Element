"use strict";

(() => {
    const table = document.getElementById("periodic-table");

    if (!table) return;

    const search = document.getElementById("element-search");
    const status = document.getElementById("element-search-status");
    const dialog = document.getElementById("element-dialog");
    const closeButton = document.getElementById("element-dialog-close");

    // Elements are listed in atomic-number order.
    const elementData = `
H Hydrogen
He Helium
Li Lithium
Be Beryllium
B Boron
C Carbon
N Nitrogen
O Oxygen
F Fluorine
Ne Neon
Na Sodium
Mg Magnesium
Al Aluminium
Si Silicon
P Phosphorus
S Sulfur
Cl Chlorine
Ar Argon
K Potassium
Ca Calcium
Sc Scandium
Ti Titanium
V Vanadium
Cr Chromium
Mn Manganese
Fe Iron
Co Cobalt
Ni Nickel
Cu Copper
Zn Zinc
Ga Gallium
Ge Germanium
As Arsenic
Se Selenium
Br Bromine
Kr Krypton
Rb Rubidium
Sr Strontium
Y Yttrium
Zr Zirconium
Nb Niobium
Mo Molybdenum
Tc Technetium
Ru Ruthenium
Rh Rhodium
Pd Palladium
Ag Silver
Cd Cadmium
In Indium
Sn Tin
Sb Antimony
Te Tellurium
I Iodine
Xe Xenon
Cs Caesium
Ba Barium
La Lanthanum
Ce Cerium
Pr Praseodymium
Nd Neodymium
Pm Promethium
Sm Samarium
Eu Europium
Gd Gadolinium
Tb Terbium
Dy Dysprosium
Ho Holmium
Er Erbium
Tm Thulium
Yb Ytterbium
Lu Lutetium
Hf Hafnium
Ta Tantalum
W Tungsten
Re Rhenium
Os Osmium
Ir Iridium
Pt Platinum
Au Gold
Hg Mercury
Tl Thallium
Pb Lead
Bi Bismuth
Po Polonium
At Astatine
Rn Radon
Fr Francium
Ra Radium
Ac Actinium
Th Thorium
Pa Protactinium
U Uranium
Np Neptunium
Pu Plutonium
Am Americium
Cm Curium
Bk Berkelium
Cf Californium
Es Einsteinium
Fm Fermium
Md Mendelevium
No Nobelium
Lr Lawrencium
Rf Rutherfordium
Db Dubnium
Sg Seaborgium
Bh Bohrium
Hs Hassium
Mt Meitnerium
Ds Darmstadtium
Rg Roentgenium
Cn Copernicium
Nh Nihonium
Fl Flerovium
Mc Moscovium
Lv Livermorium
Ts Tennessine
Og Oganesson
    `;

    function getPosition(number) {
        if (number <= 2) {
            return {
                period: 1,
                column: number === 1 ? 1 : 18
            };
        }

        if (number <= 10) {
            const position = number - 2;

            return {
                period: 2,
                column: position <= 2 ? position : position + 10
            };
        }

        if (number <= 18) {
            const position = number - 10;

            return {
                period: 3,
                column: position <= 2 ? position : position + 10
            };
        }

        if (number <= 36) {
            return { period: 4, column: number - 18 };
        }

        if (number <= 54) {
            return { period: 5, column: number - 36 };
        }

        if (number <= 56) {
            return { period: 6, column: number - 54 };
        }

        if (number <= 71) {
            return { period: 6, column: number - 54 };
        }

        if (number <= 86) {
            return { period: 6, column: number - 68 };
        }

        if (number <= 88) {
            return { period: 7, column: number - 86 };
        }

        if (number <= 103) {
            return { period: 7, column: number - 86 };
        }

        return { period: 7, column: number - 100 };
    }

    const elements = elementData
        .trim()
        .split("\n")
        .map((line, index) => {
            const [symbol, name] = line.trim().split(/\s+/);
            const number = index + 1;

            return {
                number,
                symbol,
                name,
                ...getPosition(number)
            };
        });

    // Detailed entries for six featured elements.
    // All other elements retain their basic information.
    const elementDetails = {
        1: {
            category: "Nonmetal",
            state: "Gas",
            mass: "1.008",
            introduction:
                "Hydrogen is the lightest element. Its usual elemental form is H₂: two hydrogen atoms bonded together.",
            everyday:
                "Hydrogen is part of water and many compounds in living things. It also fuels stars through nuclear fusion.",
            compounds: [
                [
                    "H₂O — Water",
                    "Two hydrogen atoms and one oxygen atom per molecule."
                ],
                [
                    "CH₄ — Methane",
                    "One carbon atom and four hydrogen atoms per molecule."
                ]
            ],
            reactions: [
                {
                    title: "Connecting with oxygen",
                    equation: "2H₂ + O₂ → 2H₂O",
                    explanation:
                        "Two hydrogen molecules react with one oxygen molecule to form two water molecules.",
                    conditions:
                        "An ignition source or a suitable catalyst initiates the reaction. It releases energy rapidly; this is an explanation, not a home experiment."
                }
            ],
            related: [8, 6],
            source: "https://periodic-table.rsc.org/element/1/hydrogen"
        },

        6: {
            category: "Nonmetal",
            state: "Solid",
            mass: "12.011",
            introduction:
                "Carbon can form many different structures and compounds. Diamond and graphite are different arrangements of the same element.",
            everyday:
                "Carbon appears in pencil graphite, fuels, and the molecules that make up living things.",
            compounds: [
                [
                    "CO₂ — Carbon dioxide",
                    "One carbon atom and two oxygen atoms per molecule."
                ],
                [
                    "CH₄ — Methane",
                    "A compound containing carbon and hydrogen."
                ]
            ],
            reactions: [
                {
                    title: "Burning carbon",
                    equation: "C + O₂ → CO₂",
                    explanation:
                        "Carbon combines with oxygen to form carbon dioxide during complete combustion.",
                    conditions:
                        "Requires ignition and sufficient oxygen. Limited oxygen can produce carbon monoxide and other products."
                }
            ],
            related: [8, 1, 26],
            source: "https://periodic-table.rsc.org/element/6/carbon"
        },

        8: {
            category: "Nonmetal",
            state: "Gas",
            mass: "15.999",
            introduction:
                "The oxygen gas in air is mainly O₂: molecules containing two oxygen atoms. Ozone, O₃, is another form of elemental oxygen.",
            everyday:
                "Oxygen supports cellular respiration and is also part of water and many minerals. It supports combustion but is not itself a fuel.",
            compounds: [
                [
                    "H₂O — Water",
                    "Oxygen is bonded to hydrogen."
                ],
                [
                    "CO₂ — Carbon dioxide",
                    "Oxygen is bonded to carbon."
                ],
                [
                    "Fe₂O₃ — Iron(III) oxide",
                    "An iron oxide found in the mineral hematite."
                ]
            ],
            reactions: [
                {
                    title: "Water formation",
                    equation: "2H₂ + O₂ → 2H₂O",
                    explanation:
                        "Hydrogen and oxygen rearrange into water molecules. The atoms are conserved.",
                    conditions:
                        "Requires initiation, such as ignition or a suitable catalyst. The reaction can be explosive."
                },
                {
                    title: "Carbon combustion",
                    equation: "C + O₂ → CO₂",
                    explanation:
                        "Carbon reacts with oxygen to produce carbon dioxide.",
                    conditions:
                        "Requires ignition and enough oxygen for complete combustion."
                }
            ],
            related: [1, 6, 26],
            source: "https://periodic-table.rsc.org/element/8/oxygen"
        },

        11: {
            category: "Alkali metal",
            state: "Solid",
            mass: "22.990",
            introduction:
                "Sodium is a soft, highly reactive metal. In everyday compounds, it commonly occurs as positively charged sodium ions, Na⁺.",
            everyday:
                "Table salt contains sodium ions. Sodium metal and sodium in salt have very different properties.",
            compounds: [
                [
                    "NaCl — Sodium chloride",
                    "An ionic compound made from Na⁺ and Cl⁻ ions."
                ],
                [
                    "NaHCO₃ — Sodium hydrogen carbonate",
                    "Also called sodium bicarbonate or baking soda."
                ]
            ],
            reactions: [
                {
                    title: "Forming sodium chloride",
                    equation: "2Na + Cl₂ → 2NaCl",
                    explanation:
                        "Sodium loses electrons and chlorine gains them. The resulting ions form an ionic solid.",
                    conditions:
                        "A vigorous, energy-releasing reaction involving reactive metal and toxic chlorine gas. For conceptual study only."
                }
            ],
            related: [17, 8, 1],
            source: "https://periodic-table.rsc.org/element/11/sodium"
        },

        17: {
            category: "Halogen",
            state: "Gas",
            mass: "35.45",
            introduction:
                "Elemental chlorine normally forms Cl₂ molecules. Chloride ions, Cl⁻, are a different chemical form found in many salts.",
            everyday:
                "Chloride is part of table salt. Chlorine-containing substances are also used in water treatment.",
            compounds: [
                [
                    "NaCl — Sodium chloride",
                    "A salt containing sodium and chloride ions."
                ],
                [
                    "HCl — Hydrogen chloride",
                    "Forms hydrochloric acid when dissolved in water."
                ]
            ],
            reactions: [
                {
                    title: "Connecting with sodium",
                    equation: "2Na + Cl₂ → 2NaCl",
                    explanation:
                        "One chlorine molecule supplies two chlorine atoms, producing two formula units of sodium chloride.",
                    conditions:
                        "Chlorine gas is toxic, and sodium metal is highly reactive. This example explains chemistry rather than providing an experiment."
                }
            ],
            related: [11, 1],
            source: "https://periodic-table.rsc.org/element/17/chlorine"
        },

        26: {
            category: "Transition metal",
            state: "Solid",
            mass: "55.845",
            introduction:
                "Iron is a metal that commonly forms Fe²⁺ and Fe³⁺ ions. Its compounds can have very different properties from iron metal.",
            everyday:
                "Iron is used in steel and is part of haemoglobin, the protein that carries oxygen in blood. Steel is an alloy, not a single compound.",
            compounds: [
                [
                    "Fe₂O₃ — Iron(III) oxide",
                    "Contains iron and oxygen."
                ],
                [
                    "Fe₃O₄ — Iron(II,III) oxide",
                    "The iron oxide found in magnetite."
                ]
            ],
            reactions: [
                {
                    title: "A simplified iron oxidation equation",
                    equation: "4Fe + 3O₂ → 2Fe₂O₃",
                    explanation:
                        "This balanced equation illustrates formation of iron(III) oxide. Real rust is a mixture of hydrated oxides and oxyhydroxides, so this is not a complete rusting equation.",
                    conditions:
                        "Ordinary rusting requires oxygen and moisture. Salts can speed corrosion; the exact products depend on conditions."
                }
            ],
            related: [8, 6],
            source: "https://periodic-table.rsc.org/element/26/iron"
        }
    };

    // Import additional element descriptions
    Object.assign(
        elementDetails,
        window.additionalElementDetails || {}
    );

    let previousFocus = null;

    function addText(parent, tag, text, className = "") {
        const node = document.createElement(tag);
        node.textContent = text;

        if (className) {
            node.className = className;
        }

        parent.appendChild(node);
        return node;
    }

    function openElement(element, button) {
        // Keep the original table button for focus restoration.
        if (!dialog.open) {
            previousFocus = button;
        }

        document.getElementById("element-dialog-name").textContent =
            element.name;

        document.getElementById("element-dialog-symbol").textContent =
            element.symbol;

        document.getElementById("element-dialog-number").textContent =
            element.number;

        document.getElementById("element-dialog-symbol-text").textContent =
            element.symbol;

        document.getElementById("element-dialog-period").textContent =
            element.period;

        let content = document.getElementById("element-expanded-content");

        if (!content) {
            content = document.createElement("div");
            content.id = "element-expanded-content";

            dialog.querySelector(".element-explanation").after(content);
        }

        content.replaceChildren();

        const details = elementDetails[element.number];
        const developmentNote =
            dialog.querySelector(".element-development-note");

        developmentNote.textContent = details
            ? "Follow a related element below to explore another connection."
            : "Detailed properties, compounds, and reactions for this element are being added. Its basic information is available above.";

        function addSection(title) {
            const section = document.createElement("section");
            section.className = "element-detail-section";

            addText(section, "h3", title);
            content.appendChild(section);

            return section;
        }

        if (details) {
            const properties = addSection("Element properties");
            const facts = document.createElement("dl");
            facts.className = "element-facts";

            const propertyRows = [
                ["Category", details.category],
                ["State at 20°C", details.state],
                ["Relative atomic mass", details.mass]
            ];

            propertyRows.forEach(([label, value]) => {
                const row = document.createElement("div");

                addText(row, "dt", label);
                addText(row, "dd", value);
                facts.appendChild(row);
            });

            properties.appendChild(facts);

            addText(
                properties,
                "p",
                "Relative atomic mass is an average based on isotopes, not the number of protons plus neutrons in one particular atom.",
                "element-small-note"
            );

            const introduction = addSection("Get to know this element");
            addText(introduction, "p", details.introduction);

            const everyday = addSection("Everyday connections");
            addText(everyday, "p", details.everyday);

            const compounds = addSection("Common compounds");

            details.compounds.forEach(([name, explanation]) => {
                const card = document.createElement("article");
                card.className = "compound-card";

                addText(card, "h4", name);
                addText(card, "p", explanation);
                compounds.appendChild(card);
            });

            const reactions = addSection("Reaction examples");

            addText(
                reactions,
                "p",
                "An equation shows how atoms rearrange. The substances and conditions determine whether a reaction occurs.",
                "element-small-note"
            );

            details.reactions.forEach(reaction => {
                const card = document.createElement("article");
                card.className = "reaction-card";

                addText(card, "h4", reaction.title);
                addText(card, "p", reaction.equation, "reaction-equation");
                addText(card, "p", reaction.explanation);

                addText(
                    card,
                    "p",
                    `Conditions: ${reaction.conditions}`,
                    "reaction-conditions"
                );

                reactions.appendChild(card);
            });

            const related = addSection("Explore connected elements");
            const links = document.createElement("div");
            links.className = "related-elements";

            details.related.forEach(number => {
                const connectedElement =
                    elements.find(item => item.number === number);

                if (!connectedElement) return;

                const relatedButton = document.createElement("button");
                relatedButton.type = "button";
                relatedButton.className = "related-element-button";
                relatedButton.textContent =
                    `${connectedElement.symbol} · ${connectedElement.name}`;

                relatedButton.addEventListener("click", () => {
                    openElement(connectedElement, null);
                });

                links.appendChild(relatedButton);
            });

            related.appendChild(links);

            const source = addSection("Read more");
            const sourceLink = document.createElement("a");

            sourceLink.href = details.source;
            sourceLink.target = "_blank";
            sourceLink.rel = "noopener noreferrer";
            sourceLink.textContent =
                `${element.name} — Royal Society of Chemistry (opens in a new tab)`;

            source.appendChild(sourceLink);
        }

        if (!dialog.open) {
            dialog.showModal();
        }

        dialog.scrollTop = 0;
        closeButton.focus();
    }

    // Coordinates match the original 1672 × 941 artwork.
    // Percentages keep the clickable areas aligned when it scales.
    const artworkWidth = 1672;
    const artworkHeight = 941;

    const mainColumns = [
        [94, 174],
        [176, 255],
        [257, 336],
        [338, 419],
        [421, 502],
        [504, 586],
        [588, 669],
        [671, 753],
        [755, 837],
        [839, 923],
        [925, 1011],
        [1013, 1101],
        [1104, 1183],
        [1185, 1262],
        [1264, 1341],
        [1343, 1420],
        [1422, 1500],
        [1502, 1581]
    ];

    const mainRows = [
        [86, 167],
        [169, 251],
        [253, 335],
        [337, 420],
        [422, 505],
        [508, 590],
        [592, 674]
    ];

    const seriesColumns = [
        [318, 396],
        [399, 477],
        [480, 558],
        [561, 639],
        [642, 720],
        [723, 801],
        [804, 882],
        [885, 963],
        [966, 1044],
        [1047, 1125],
        [1128, 1206],
        [1209, 1287],
        [1290, 1368],
        [1371, 1451],
        [1454, 1532]
    ];

    function getArtworkBounds(element) {
        let horizontal;
        let vertical;

        if (element.number >= 57 && element.number <= 71) {
            horizontal = seriesColumns[element.number - 57];
            vertical = [702, 777];
        } else if (element.number >= 89 && element.number <= 103) {
            horizontal = seriesColumns[element.number - 89];
            vertical = [779, 855];
        } else {
            horizontal = mainColumns[element.column - 1];
            vertical = mainRows[element.period - 1];
        }

        return {
            left: horizontal[0],
            top: vertical[0],
            width: horizontal[1] - horizontal[0],
            height: vertical[1] - vertical[0]
        };
    }

    const tiles = elements.map(element => {
        const button = document.createElement("button");
        const bounds = getArtworkBounds(element);

        button.type = "button";
        button.className = "element-tile";

        button.style.left =
            `${bounds.left / artworkWidth * 100}%`;

        button.style.top =
            `${bounds.top / artworkHeight * 100}%`;

        button.style.width =
            `${bounds.width / artworkWidth * 100}%`;

        button.style.height =
            `${bounds.height / artworkHeight * 100}%`;

        const label =
            `${element.name}, ${element.symbol}, atomic number ${element.number}`;

        button.setAttribute("aria-label", label);
        button.setAttribute("aria-haspopup", "dialog");
        button.title = label;

        button.addEventListener("click", () => {
            openElement(element, button);
        });

        table.appendChild(button);

        return { element, button };
    });

    const aliases = {
        13: "aluminum",
        55: "cesium"
    };

    // Symbols must match the element symbols in elementData.
const searchGroups = [
    {
        terms: ["human", "humans", "body", "human body"],
        label: "Six main human-body elements",
        symbols: ["H", "C", "N", "O", "P", "Ca"]
    },
    {
        terms: ["life", "biology", "chnops"],
        label: "CHNOPS: six major elements in biological molecules",
        symbols: ["C", "H", "N", "O", "P", "S"]
    },
    {
        terms: ["water", "h2o"],
        label: "Elements in water, H₂O",
        symbols: ["H", "O"]
    },
    {
        terms: ["air", "atmosphere"],
        label: "Elements in major components of dry Earth's air",
        symbols: ["N", "O", "Ar", "C"]
    },
    {
        terms: ["ocean", "oceans", "seawater", "sea water"],
        label: "Selected elements in seawater",
        symbols: ["H", "O", "Na", "Cl", "Mg", "S", "Ca", "K"]
    },
    {
        terms: ["earth", "crust", "earth crust", "earth's crust"],
        label: "Eight major elements in Earth's crust",
        symbols: ["O", "Si", "Al", "Fe", "Ca", "Na", "K", "Mg"]
    },
    {
        terms: ["rocks", "minerals"],
        label: "Examples of elements commonly found in rock-forming minerals",
        symbols: ["O", "Si", "Al", "Fe", "Ca", "Na", "K", "Mg"]
    },
    {
        terms: ["sun", "stars", "star"],
        label: "Hydrogen and helium: the dominant elements in the Sun",
        symbols: ["H", "He"]
    },
    {
        terms: ["salt", "table salt", "sodium chloride", "nacl"],
        label: "Elements in sodium chloride, NaCl",
        symbols: ["Na", "Cl"]
    },
    {
        terms: ["carbon dioxide", "co2"],
        label: "Elements in carbon dioxide, CO₂",
        symbols: ["C", "O"]
    },
    {
        terms: ["carbon monoxide", "co"],
        label: "Elements in carbon monoxide, CO",
        symbols: ["C", "O"]
    },
    {
        terms: ["methane", "ch4"],
        label: "Elements in methane, CH₄",
        symbols: ["C", "H"]
    },
    {
        terms: ["ammonia", "nh3"],
        label: "Elements in ammonia, NH₃",
        symbols: ["N", "H"]
    },
    {
        terms: ["glucose", "c6h12o6"],
        label: "Elements in glucose, C₆H₁₂O₆",
        symbols: ["C", "H", "O"]
    },
    {
        terms: ["sucrose", "table sugar", "sugar", "c12h22o11"],
        label: "Elements in table sugar: sucrose, C₁₂H₂₂O₁₁",
        symbols: ["C", "H", "O"]
    },
    {
        terms: ["ethanol", "c2h5oh"],
        label: "Elements in ethanol, C₂H₅OH",
        symbols: ["C", "H", "O"]
    },
    {
        terms: ["baking soda", "sodium bicarbonate", "nahco3"],
        label: "Elements in sodium bicarbonate, NaHCO₃",
        symbols: ["Na", "H", "C", "O"]
    },
    {
        terms: ["calcium carbonate", "limestone", "caco3"],
        label: "Elements in calcium carbonate, the main component of limestone",
        symbols: ["Ca", "C", "O"]
    },
    {
        terms: ["quartz", "silica", "silicon dioxide", "sio2"],
        label: "Elements in silicon dioxide, SiO₂",
        symbols: ["Si", "O"]
    },
    {
        terms: ["hydrogen peroxide", "h2o2"],
        label: "Elements in hydrogen peroxide, H₂O₂",
        symbols: ["H", "O"]
    },
    {
        terms: ["sulfuric acid", "sulphuric acid", "h2so4"],
        label: "Elements in sulfuric acid, H₂SO₄",
        symbols: ["H", "S", "O"]
    },
    {
        terms: ["hydrochloric acid", "hydrogen chloride", "hcl"],
        label: "Elements in hydrogen chloride, HCl; its aqueous solution is hydrochloric acid",
        symbols: ["H", "Cl"]
    },
    {
        terms: ["sodium hydroxide", "naoh"],
        label: "Elements in sodium hydroxide, NaOH",
        symbols: ["Na", "O", "H"]
    },
    {
        terms: ["magnesium oxide", "mgo"],
        label: "Elements in magnesium oxide, MgO",
        symbols: ["Mg", "O"]
    },
    {
        terms: ["iron oxide", "iron iii oxide", "fe2o3"],
        label: "Elements in iron(III) oxide, Fe₂O₃",
        symbols: ["Fe", "O"]
    },
    {
        terms: ["brass"],
        label: "Principal elements in brass; some formulations contain additional elements",
        symbols: ["Cu", "Zn"]
    },
    {
        terms: ["bronze"],
        label: "Elements in traditional copper–tin bronze",
        symbols: ["Cu", "Sn"]
    },
    {
        terms: ["steel"],
        label: "Iron and carbon: the basis of steel; alloy steels contain additional elements",
        symbols: ["Fe", "C"]
    },
    {
        terms: ["stainless steel"],
        label: "Selected elements in many stainless steels; composition varies",
        symbols: ["Fe", "Cr", "Ni", "C"]
    },
    {
        terms: ["alkali metals", "alkali metal"],
        label: "Alkali metals",
        symbols: ["Li", "Na", "K", "Rb", "Cs", "Fr"]
    },
    {
        terms: ["alkaline earth metals", "alkaline earth"],
        label: "Alkaline earth metals",
        symbols: ["Be", "Mg", "Ca", "Sr", "Ba", "Ra"]
    },
    {
        terms: ["halogens", "halogen"],
        label: "Group 17: the halogens",
        symbols: ["F", "Cl", "Br", "I", "At", "Ts"]
    },
    {
        terms: ["noble gases", "noble gas"],
        label: "Group 18: the noble gases; the group name does not establish every member's physical state",
        symbols: ["He", "Ne", "Ar", "Kr", "Xe", "Rn", "Og"]
    },
    {
        terms: ["metalloids", "metalloid"],
        label: "Six commonly classified metalloids; reference lists can differ",
        symbols: ["B", "Si", "Ge", "As", "Sb", "Te"]
    },
    {
        terms: ["liquid", "liquids"],
        label: "Liquid elements at approximately 20°C and ordinary atmospheric pressure",
        symbols: ["Br", "Hg"]
    },
    {
        terms: ["gas", "gases"],
        label: "Gaseous elements at approximately 20°C and ordinary atmospheric pressure",
        symbols: ["H", "He", "N", "O", "F", "Ne", "Cl", "Ar", "Kr", "Xe", "Rn"]
    }
];

// Normalize names and formulas, including pasted subscript digits.
function normalizeSearch(value) {
    return value
        .trim()
        .toLowerCase()
        .replace(/[₀-₉]/g, digit =>
            String("₀₁₂₃₄₅₆₇₈₉".indexOf(digit))
        )
        .replace(/[’']/g, "")
        .replace(/[-_]/g, " ")
        .replace(/\s+/g, " ");
}

const groupLookup = new Map();

searchGroups.forEach(group => {
    group.terms.forEach(term => {
        groupLookup.set(normalizeSearch(term), group);
    });
});

function updateElementSearch() {
    const query = normalizeSearch(search.value);

    // An exact element symbol takes priority.
    // For example, "Co" means cobalt, rather than carbon monoxide.
    const exactSymbol = elements.find(element =>
        element.symbol.toLowerCase() === query
    );

    const group = exactSymbol ? null : groupLookup.get(query);
    const selectedSymbols = group ? new Set(group.symbols) : null;
    let matches = 0;

    tiles.forEach(({ element, button }) => {
        const matchesQuery = group
            ? selectedSymbols.has(element.symbol)
            : (
                !query ||
                (exactSymbol
                    ? element.number === exactSymbol.number
                    : (
                        normalizeSearch(element.name).includes(query) ||
                        String(element.number) === query ||
                        normalizeSearch(aliases[element.number] || "")
                            .includes(query)
                    ))
            );

        button.classList.toggle("is-dimmed", !matchesQuery);
        button.classList.toggle(
            "is-match",
            Boolean(query) && matchesQuery
        );

        if (matchesQuery) matches += 1;
    });

    if (group) {
        status.textContent =
            `${group.label}. ${matches} elements highlighted. ` +
            "Select a tile for details. Clear the search to show all 118.";
    } else if (query) {
        status.textContent = matches
            ? `${matches} matching element${matches === 1 ? "" : "s"}. Select a highlighted tile for details.`
            : "No matches. Try an element, human, water, air, ocean, steel, or halogens.";
    } else {
        status.textContent =
            "118 elements. Try a name, symbol, atomic number, or a topic such as human or water.";
    }
}

search.addEventListener("input", updateElementSearch);

// Supports links such as ?group=human and ?group=water.
const pageParameters = new URLSearchParams(window.location.search);
const requestedGroup = pageParameters.get("group");

if (requestedGroup && groupLookup.has(normalizeSearch(requestedGroup))) {
    search.value = requestedGroup;
}

updateElementSearch();

    closeButton.addEventListener("click", () => {
        dialog.close();
    });

    // Escape also closes the native dialog.
    dialog.addEventListener("close", () => {
        if (previousFocus) {
            previousFocus.focus();
        }
    });
})();