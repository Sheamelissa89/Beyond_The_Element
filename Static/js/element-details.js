"use strict";

// BEYOND THE ELEMENTS
// Educational Element Database

window.additionalElementDetails = {

    // HELIUM — 2
    2: {
        category: "Noble gas",
        state: "Gas",
        mass: "4.0026",

        introduction:
            "Helium is the second-lightest element in the universe. It contains two protons and normally two electrons. Its complete outer electron shell makes it exceptionally stable and chemically unreactive.",

        everyday:
            "Helium is used in balloons, MRI cooling systems, scientific instruments, and specialized industrial equipment. Unlike hydrogen, helium is not flammable.",

        compounds: [
            [
                "He — Elemental helium",
                "Helium normally exists as individual atoms rather than molecules. It does not form stable conventional compounds under ordinary conditions."
            ]
        ],

        reactions: [
            {
                title: "Electronic excitation",
                equation: "He* → He + light",
                explanation:
                    "An excited helium atom can release energy as light when an electron returns to a lower energy state.",
                conditions:
                    "This is an atomic energy transition, not a chemical reaction."
            }
        ],

        related: [1, 10, 18],
        source: "https://periodic-table.rsc.org/element/2/helium"
    },

    // LITHIUM — 3
    3: {
        category: "Alkali metal",
        state: "Solid",
        mass: "6.94",

        introduction:
            "Lithium is the lightest metallic element. It is a soft, silvery alkali metal with one electron in its outermost shell, making it highly reactive.",

        everyday:
            "Lithium compounds are used in rechargeable batteries, ceramics, glass manufacturing, and certain prescription medications.",

        compounds: [
            [
                "Li₂CO₃ — Lithium carbonate",
                "A lithium compound used in industrial applications and certain prescription medications."
            ],
            [
                "LiCl — Lithium chloride",
                "An ionic compound containing lithium and chloride ions."
            ]
        ],

        reactions: [
            {
                title: "Lithium and water",
                equation: "2Li + 2H₂O → 2LiOH + H₂",
                explanation:
                    "Lithium reacts with water to produce lithium hydroxide and hydrogen gas.",
                conditions:
                    "This reaction releases heat and produces flammable hydrogen. It requires appropriate laboratory safety precautions."
            }
        ],

        related: [1, 8, 11],
        source: "https://periodic-table.rsc.org/element/3/lithium"
    },

    // BERYLLIUM — 4
    4: {
        category: "Alkaline earth metal",
        state: "Solid",
        mass: "9.0122",

        introduction:
            "Beryllium is a lightweight, strong metal with unusual rigidity. Its low density and ability to transmit X-rays make it useful in specialized technologies.",

        everyday:
            "Beryllium is used in aerospace components, precision instruments, and specialized X-ray equipment. Its toxicity requires strict industrial safety controls.",

        compounds: [
            [
                "BeO — Beryllium oxide",
                "A ceramic material valued for thermal conductivity and electrical insulation."
            ],
            [
                "BeCl₂ — Beryllium chloride",
                "A compound used in specialized chemical processes."
            ]
        ],

        reactions: [
            {
                title: "Formation of beryllium oxide",
                equation: "2Be + O₂ → 2BeO",
                explanation:
                    "Beryllium combines with oxygen to produce beryllium oxide.",
                conditions:
                    "Beryllium dust and compounds can cause serious lung disease. This reaction is for educational study only."
            }
        ],

        related: [8, 12, 13],
        source: "https://periodic-table.rsc.org/element/4/beryllium"
    },

    // BORON — 5
    5: {
        category: "Metalloid",
        state: "Solid",
        mass: "10.81",

        introduction:
            "Boron is a metalloid with properties between those of metals and nonmetals. Its unusual bonding behavior allows it to form complex chemical structures.",

        everyday:
            "Boron compounds are used in borosilicate glass, ceramics, detergents, fertilizers, and semiconductor technology.",

        compounds: [
            [
                "B₂O₃ — Boron trioxide",
                "An oxide used in glass and ceramic manufacturing."
            ],
            [
                "H₃BO₃ — Boric acid",
                "A weak acid used in industrial and chemical applications."
            ]
        ],

        reactions: [
            {
                title: "Boron oxidation",
                equation: "4B + 3O₂ → 2B₂O₃",
                explanation:
                    "Boron combines with oxygen to form boron trioxide.",
                conditions:
                    "Heating is generally required to initiate significant oxidation."
            }
        ],

        related: [8, 6, 14],
        source: "https://periodic-table.rsc.org/element/5/boron"
    },

    // NITROGEN — 7
    7: {
        category: "Nonmetal",
        state: "Gas",
        mass: "14.007",

        introduction:
            "Nitrogen makes up approximately 78% of Earth's atmosphere. Elemental nitrogen normally exists as N₂ molecules held together by a strong triple bond.",

        everyday:
            "Nitrogen is essential for proteins and DNA. Nitrogen compounds are used in fertilizers, food preservation, and industrial manufacturing.",

        compounds: [
            [
                "NH₃ — Ammonia",
                "A compound containing one nitrogen atom and three hydrogen atoms."
            ],
            [
                "NO₂ — Nitrogen dioxide",
                "A reactive nitrogen oxide associated with air pollution."
            ]
        ],

        reactions: [
            {
                title: "Ammonia synthesis",
                equation: "N₂ + 3H₂ → 2NH₃",
                explanation:
                    "Nitrogen and hydrogen combine to produce ammonia through the Haber-Bosch process.",
                conditions:
                    "Industrial production requires elevated pressure, temperature, and an appropriate catalyst."
            }
        ],

        related: [1, 8, 15],
        source: "https://periodic-table.rsc.org/element/7/nitrogen"
    },

    // FLUORINE — 9
    9: {
        category: "Halogen",
        state: "Gas",
        mass: "18.998",

        introduction:
            "Fluorine is the most electronegative chemical element. It is an extremely reactive halogen that readily forms compounds with many other elements.",

        everyday:
            "Fluorine occurs in fluoride compounds used in toothpaste, specialized plastics, pharmaceuticals, and industrial materials.",

        compounds: [
            [
                "NaF — Sodium fluoride",
                "An ionic compound used in some dental-care products."
            ],
            [
                "CaF₂ — Calcium fluoride",
                "A naturally occurring mineral also called fluorite."
            ]
        ],

        reactions: [
            {
                title: "Hydrogen fluoride formation",
                equation: "H₂ + F₂ → 2HF",
                explanation:
                    "Hydrogen and fluorine combine to form hydrogen fluoride.",
                conditions:
                    "This reaction is extremely hazardous. Fluorine and hydrogen fluoride require specialized professional handling."
            }
        ],

        related: [1, 17, 20],
        source: "https://periodic-table.rsc.org/element/9/fluorine"
    },

    // NEON — 10
    10: {
        category: "Noble gas",
        state: "Gas",
        mass: "20.180",

        introduction:
            "Neon is a noble gas with a complete outer electron shell. It is chemically unreactive under ordinary conditions.",

        everyday:
            "Neon is famous for producing a reddish-orange glow in electrical discharge tubes. It is used in illuminated signs, indicators, and specialized equipment.",

        compounds: [
            [
                "Ne — Elemental neon",
                "Neon normally exists as individual atoms and does not form stable conventional compounds."
            ]
        ],

        reactions: [
            {
                title: "Light emission",
                equation: "Ne* → Ne + light",
                explanation:
                    "Excited neon atoms release energy as light when electrons return to lower energy states.",
                conditions:
                    "This is an electronic transition rather than a chemical reaction."
            }
        ],

        related: [2, 18, 9],
        source: "https://periodic-table.rsc.org/element/10/neon"
    },

    // =========================================
    // BATCH 2 — ELEMENTS 12–25
    // =========================================

    // MAGNESIUM — 12
    12: {
        category: "Alkaline earth metal",
        state: "Solid",
        mass: "24.305",

        introduction:
            "Magnesium is a lightweight, silvery metal with 12 protons and 12 electrons in a neutral atom. It belongs to Group 2 of the periodic table and commonly forms Mg²⁺ ions by losing its two outermost electrons. Magnesium is essential for hundreds of biochemical reactions in living organisms.",

        everyday:
            "Magnesium is found in leafy green vegetables, nuts, seeds, and whole grains. It is important for muscle function, nerve signaling, and energy production. Magnesium alloys are also used in automobiles, aircraft, electronics, and lightweight equipment.",

        compounds: [
            [
                "MgO — Magnesium oxide",
                "A compound containing magnesium and oxygen. It is used in heat-resistant materials and certain medical products."
            ],
            [
                "MgSO₄ — Magnesium sulfate",
                "A compound containing magnesium, sulfur, and oxygen. Its hydrated form is commonly known as Epsom salt."
            ]
        ],

        reactions: [
            {
                title: "Magnesium combustion",
                equation: "2Mg + O₂ → 2MgO",
                explanation:
                    "Two magnesium atoms react with one oxygen molecule to produce two formula units of magnesium oxide. This reaction releases substantial heat and bright white light.",
                conditions:
                    "Magnesium must be ignited. Burning magnesium reaches extremely high temperatures and produces intense light."
            }
        ],

        related: [8, 20, 4],
        source: "https://periodic-table.rsc.org/element/12/magnesium"
    },

    // ALUMINIUM — 13
    13: {
        category: "Post-transition metal",
        state: "Solid",
        mass: "26.982",

        introduction:
            "Aluminium is a lightweight, silvery metal containing 13 protons. It belongs to Group 13 and commonly forms Al³⁺ ions. Although aluminium is chemically reactive, it develops a thin protective oxide layer that helps prevent further corrosion.",

        everyday:
            "Aluminium is used in beverage cans, kitchen foil, aircraft, vehicles, construction materials, and electrical transmission lines. Its combination of low density, strength in alloys, and corrosion resistance makes it one of the most widely used metals.",

        compounds: [
            [
                "Al₂O₃ — Aluminium oxide",
                "A compound containing aluminium and oxygen. It occurs naturally in the mineral corundum, which includes ruby and sapphire varieties."
            ],
            [
                "AlCl₃ — Aluminium chloride",
                "A compound containing aluminium and chlorine. It is used as a catalyst in certain industrial chemical reactions."
            ]
        ],

        reactions: [
            {
                title: "Aluminium oxidation",
                equation: "4Al + 3O₂ → 2Al₂O₃",
                explanation:
                    "Four aluminium atoms combine with three oxygen molecules to form two formula units of aluminium oxide.",
                conditions:
                    "A thin protective oxide layer forms naturally when aluminium is exposed to air. Powdered aluminium can react much more vigorously."
            }
        ],

        related: [8, 14, 5],
        source: "https://periodic-table.rsc.org/element/13/aluminium"
    },

    // SILICON — 14
    14: {
        category: "Metalloid",
        state: "Solid",
        mass: "28.085",

        introduction:
            "Silicon is a metalloid containing 14 protons. It belongs to Group 14 and has four valence electrons. Silicon is the second-most abundant element in Earth's crust by mass, occurring primarily in minerals rather than as a pure element.",

        everyday:
            "Silicon is essential to modern technology because it is a semiconductor. It is used in computer processors, solar panels, electronic circuits, and sensors. Silicon compounds are also major components of glass, ceramics, and construction materials.",

        compounds: [
            [
                "SiO₂ — Silicon dioxide",
                "A compound containing one silicon atom and two oxygen atoms per formula unit. It occurs naturally in quartz and many types of sand."
            ],
            [
                "SiC — Silicon carbide",
                "A very hard compound used in abrasives, industrial ceramics, and advanced semiconductor devices."
            ]
        ],

        reactions: [
            {
                title: "Silicon oxidation",
                equation: "Si + O₂ → SiO₂",
                explanation:
                    "Silicon combines with oxygen to produce silicon dioxide.",
                conditions:
                    "Controlled oxidation at elevated temperatures is important in semiconductor manufacturing."
            }
        ],

        related: [6, 8, 32],
        source: "https://periodic-table.rsc.org/element/14/silicon"
    },

    // PHOSPHORUS — 15
    15: {
        category: "Nonmetal",
        state: "Solid",
        mass: "30.974",

        introduction:
            "Phosphorus is a reactive nonmetal containing 15 protons. It belongs to Group 15 and has five valence electrons. Phosphorus exists in several allotropes, including white, red, and black phosphorus, which have different structures and properties.",

        everyday:
            "Phosphorus is essential for life. It is found in DNA, RNA, ATP, and the minerals that strengthen bones and teeth. Phosphorus compounds are widely used in fertilizers, food production, and industrial chemistry.",

        compounds: [
            [
                "H₃PO₄ — Phosphoric acid",
                "An acid containing hydrogen, phosphorus, and oxygen. It is used in fertilizers, food processing, and manufacturing."
            ],
            [
                "Ca₃(PO₄)₂ — Calcium phosphate",
                "An ionic compound containing calcium and phosphate ions. Calcium phosphates are important components of biological mineral structures."
            ]
        ],

        reactions: [
            {
                title: "Phosphorus oxidation",
                equation: "P₄ + 5O₂ → P₄O₁₀",
                explanation:
                    "One molecule of tetrahedral phosphorus reacts with five oxygen molecules to produce phosphorus(V) oxide.",
                conditions:
                    "White phosphorus can ignite spontaneously in air and is extremely hazardous. This equation is provided for conceptual learning."
            }
        ],

        related: [8, 7, 20],
        source: "https://periodic-table.rsc.org/element/15/phosphorus"
    },

    // SULFUR — 16
    16: {
        category: "Nonmetal",
        state: "Solid",
        mass: "32.06",

        introduction:
            "Sulfur is a yellow nonmetal containing 16 protons. It belongs to Group 16 and has six valence electrons. Elemental sulfur commonly forms S₈ molecules, consisting of eight sulfur atoms arranged in a ring.",

        everyday:
            "Sulfur is found in certain amino acids and proteins. It is also used in fertilizers, rubber manufacturing, chemical processing, and sulfuric acid production. Sulfur occurs naturally near volcanic environments and in many minerals.",

        compounds: [
            [
                "SO₂ — Sulfur dioxide",
                "A gas containing one sulfur atom and two oxygen atoms. It can form during volcanic activity and the combustion of sulfur-containing fuels."
            ],
            [
                "H₂SO₄ — Sulfuric acid",
                "A strong acid containing hydrogen, sulfur, and oxygen. It is one of the most important chemicals in industrial manufacturing."
            ]
        ],

        reactions: [
            {
                title: "Sulfur combustion",
                equation: "S + O₂ → SO₂",
                explanation:
                    "Sulfur reacts with oxygen to produce sulfur dioxide. The equation shows one sulfur atom combining with one oxygen molecule.",
                conditions:
                    "Requires ignition and produces toxic, irritating sulfur dioxide gas."
            }
        ],

        related: [8, 1, 34],
        source: "https://periodic-table.rsc.org/element/16/sulfur"
    },

    // ARGON — 18
    18: {
        category: "Noble gas",
        state: "Gas",
        mass: "39.948",

        introduction:
            "Argon is a colorless, odorless noble gas containing 18 protons. It belongs to Group 18 and has a complete outer electron shell. This stable electron arrangement makes argon chemically unreactive under ordinary conditions.",

        everyday:
            "Argon makes up approximately 0.93% of Earth's atmosphere. It is used in welding, insulated windows, light bulbs, and industrial processes that require an atmosphere with minimal chemical reactivity.",

        compounds: [
            [
                "Ar — Elemental argon",
                "Argon normally exists as individual atoms rather than molecules."
            ]
        ],

        reactions: [
            {
                title: "Electronic excitation",
                equation: "Ar* → Ar + light",
                explanation:
                    "An excited argon atom releases energy as light when an electron returns to a lower energy state.",
                conditions:
                    "This is an electronic transition, not an ordinary chemical reaction."
            }
        ],

        related: [2, 10, 36],
        source: "https://periodic-table.rsc.org/element/18/argon"
    },

    // POTASSIUM — 19
    19: {
        category: "Alkali metal",
        state: "Solid",
        mass: "39.098",

        introduction:
            "Potassium is a soft, silvery alkali metal containing 19 protons. It belongs to Group 1 and has one electron in its outermost shell. Potassium readily loses this electron to form K⁺ ions.",

        everyday:
            "Potassium is an essential nutrient involved in nerve signaling, muscle contraction, and fluid balance. Potassium compounds occur in foods, fertilizers, and many biological systems. Potassium metal itself is highly reactive and is not found freely in nature.",

        compounds: [
            [
                "KCl — Potassium chloride",
                "An ionic compound containing potassium and chloride ions. It is used in fertilizers and some salt substitutes."
            ],
            [
                "KNO₃ — Potassium nitrate",
                "An ionic compound containing potassium and nitrate ions. It is used in fertilizers and specialized industrial processes."
            ]
        ],

        reactions: [
            {
                title: "Potassium and water",
                equation: "2K + 2H₂O → 2KOH + H₂",
                explanation:
                    "Two potassium atoms react with two water molecules to produce potassium hydroxide and hydrogen gas.",
                conditions:
                    "The reaction is extremely vigorous and can ignite or explode. It is not suitable for home experimentation."
            }
        ],

        related: [11, 1, 8],
        source: "https://periodic-table.rsc.org/element/19/potassium"
    },

    // CALCIUM — 20
    20: {
        category: "Alkaline earth metal",
        state: "Solid",
        mass: "40.078",

        introduction:
            "Calcium is a silvery alkaline earth metal containing 20 protons. It belongs to Group 2 and commonly forms Ca²⁺ ions. Calcium is essential for many biological functions and is one of the most abundant minerals in the human body.",

        everyday:
            "Calcium is important for bones, teeth, muscle contraction, nerve signaling, and blood clotting. Calcium compounds are found in limestone, chalk, cement, shells, and many foods.",

        compounds: [
            [
                "CaCO₃ — Calcium carbonate",
                "A compound containing calcium and carbonate ions. It occurs naturally in limestone, chalk, and many seashells."
            ],
            [
                "CaCl₂ — Calcium chloride",
                "An ionic compound used for moisture control, de-icing, and industrial applications."
            ]
        ],

        reactions: [
            {
                title: "Calcium and water",
                equation: "Ca + 2H₂O → Ca(OH)₂ + H₂",
                explanation:
                    "Calcium reacts with water to produce calcium hydroxide and hydrogen gas.",
                conditions:
                    "This reaction releases heat and produces flammable hydrogen."
            }
        ],

        related: [8, 17, 12],
        source: "https://periodic-table.rsc.org/element/20/calcium"
    },

    // SCANDIUM — 21
    21: {
        category: "Transition metal",
        state: "Solid",
        mass: "44.956",

        introduction:
            "Scandium is a lightweight, silvery metal containing 21 protons. It belongs to Group 3 and commonly forms Sc³⁺ ions. Scandium is usually classified as a transition metal, although its chemistry differs from that of many other transition metals.",

        everyday:
            "Scandium is used in specialized aluminium alloys, aerospace components, sporting equipment, and certain high-intensity lighting systems. Its relatively high cost limits widespread commercial use.",

        compounds: [
            [
                "Sc₂O₃ — Scandium oxide",
                "An oxide used in specialized ceramics, electronics, and scientific research."
            ],
            [
                "ScCl₃ — Scandium chloride",
                "A compound used in chemical research and specialized synthesis."
            ]
        ],

        reactions: [
            {
                title: "Scandium oxidation",
                equation: "4Sc + 3O₂ → 2Sc₂O₃",
                explanation:
                    "Four scandium atoms react with three oxygen molecules to produce two formula units of scandium oxide.",
                conditions:
                    "Heating promotes oxidation."
            }
        ],

        related: [8, 13, 39],
        source: "https://periodic-table.rsc.org/element/21/scandium"
    },

    // TITANIUM — 22
    22: {
        category: "Transition metal",
        state: "Solid",
        mass: "47.867",

        introduction:
            "Titanium is a strong, lightweight transition metal containing 22 protons. It belongs to Group 4 and commonly forms Ti⁴⁺ ions. Titanium is valued for its strength-to-weight ratio and resistance to corrosion.",

        everyday:
            "Titanium is used in aircraft, spacecraft, medical implants, industrial equipment, and sporting goods. Its biocompatibility makes it useful in certain surgical implants and prosthetic devices.",

        compounds: [
            [
                "TiO₂ — Titanium dioxide",
                "A white compound used as a pigment in paints, coatings, and other materials."
            ],
            [
                "TiCl₄ — Titanium tetrachloride",
                "A compound used in industrial titanium production."
            ]
        ],

        reactions: [
            {
                title: "Titanium oxidation",
                equation: "Ti + O₂ → TiO₂",
                explanation:
                    "Titanium reacts with oxygen to produce titanium dioxide.",
                conditions:
                    "A protective oxide layer forms naturally on titanium surfaces."
            }
        ],

        related: [8, 13, 40],
        source: "https://periodic-table.rsc.org/element/22/titanium"
    },

    // VANADIUM — 23
    23: {
        category: "Transition metal",
        state: "Solid",
        mass: "50.942",

        introduction:
            "Vanadium is a transition metal containing 23 protons. It belongs to Group 5 and is known for forming compounds in several oxidation states. These compounds can display different colors depending on the oxidation state of vanadium.",

        everyday:
            "Vanadium is used to strengthen steel and in certain rechargeable battery systems, including vanadium redox flow batteries. Vanadium alloys are valuable in tools, machinery, and structural materials.",

        compounds: [
            [
                "V₂O₅ — Vanadium(V) oxide",
                "An oxide used as a catalyst in industrial chemical manufacturing."
            ],
            [
                "VO₂ — Vanadium(IV) oxide",
                "A compound studied for its temperature-dependent electrical and optical properties."
            ]
        ],

        reactions: [
            {
                title: "Vanadium oxidation",
                equation: "4V + 5O₂ → 2V₂O₅",
                explanation:
                    "Four vanadium atoms react with five oxygen molecules to form two formula units of vanadium(V) oxide.",
                conditions:
                    "The reaction requires suitable heating and oxygen conditions."
            }
        ],

        related: [8, 22, 24],
        source: "https://periodic-table.rsc.org/element/23/vanadium"
    },

    // CHROMIUM — 24
    24: {
        category: "Transition metal",
        state: "Solid",
        mass: "51.996",

        introduction:
            "Chromium is a hard, silvery transition metal containing 24 protons. It belongs to Group 6 and is valued for corrosion resistance. Chromium forms compounds in several oxidation states, including chromium(III) and chromium(VI), which have very different properties.",

        everyday:
            "Chromium is an important ingredient in stainless steel and is used in metal plating, pigments, and industrial materials. Chromium(VI) compounds are hazardous and require strict environmental and occupational controls.",

        compounds: [
            [
                "Cr₂O₃ — Chromium(III) oxide",
                "A green oxide used in pigments and protective coatings."
            ],
            [
                "CrO₃ — Chromium(VI) oxide",
                "A highly hazardous compound used in certain industrial chemical processes."
            ]
        ],

        reactions: [
            {
                title: "Chromium oxidation",
                equation: "4Cr + 3O₂ → 2Cr₂O₃",
                explanation:
                    "Chromium combines with oxygen to form chromium(III) oxide.",
                conditions:
                    "A thin oxide layer protects chromium-containing surfaces from further corrosion."
            }
        ],

        related: [8, 26, 25],
        source: "https://periodic-table.rsc.org/element/24/chromium"
    },

    // MANGANESE — 25
    25: {
        category: "Transition metal",
        state: "Solid",
        mass: "54.938",

        introduction:
            "Manganese is a transition metal containing 25 protons. It belongs to Group 7 and forms compounds in several oxidation states. Manganese is important in industrial metallurgy and biological enzyme systems.",

        everyday:
            "Manganese is widely used in steel production to improve strength and durability. Manganese compounds are also used in batteries, ceramics, and industrial chemistry. Small amounts of manganese are essential for human health.",

        compounds: [
            [
                "MnO₂ — Manganese dioxide",
                "An oxide used in certain battery technologies."
            ],
            [
                "KMnO₄ — Potassium permanganate",
                "A strong oxidizing compound used in controlled chemical and industrial applications."
            ]
        ],

        reactions: [
            {
                title: "Manganese oxidation",
                equation: "3Mn + 2O₂ → Mn₃O₄",
                explanation:
                    "Three manganese atoms combine with two oxygen molecules to form manganese(II,III) oxide.",
                conditions:
                    "The exact oxide formed depends on temperature and oxygen availability."
            }
        ],

        related: [8, 24, 26],
        source: "https://periodic-table.rsc.org/element/25/manganese"
    },

    // =========================================
    // BATCH 3 — ELEMENTS 27–50
    // =========================================

    // COBALT — 27
    27: {
        category: "Transition metal",
        state: "Solid",
        mass: "58.933",

        introduction:
            "Cobalt is a hard, silvery-blue transition metal containing 27 protons. It belongs to Group 9 and commonly forms compounds with oxidation states of +2 and +3. Cobalt is ferromagnetic, meaning it can be strongly magnetized.",

        everyday:
            "Cobalt is used in rechargeable batteries, high-temperature alloys, magnets, and industrial catalysts. Cobalt compounds also produce brilliant blue colors in glass and ceramics. Cobalt is part of vitamin B12, an essential nutrient.",

        compounds: [
            [
                "CoO — Cobalt(II) oxide",
                "An oxide containing cobalt and oxygen, used in ceramics and specialized industrial materials."
            ],
            [
                "CoCl₂ — Cobalt(II) chloride",
                "A compound whose hydrated and anhydrous forms have different colors. It is used in chemical research and certain moisture indicators."
            ]
        ],

        reactions: [
            {
                title: "Cobalt oxidation",
                equation: "3Co + 2O₂ → Co₃O₄",
                explanation:
                    "Cobalt combines with oxygen to form cobalt(II,III) oxide.",
                conditions:
                    "Heating promotes oxidation. Cobalt compounds require appropriate handling because some can be hazardous."
            }
        ],

        related: [26, 28, 8],
        source: "https://periodic-table.rsc.org/element/27/cobalt"
    },

    // NICKEL — 28
    28: {
        category: "Transition metal",
        state: "Solid",
        mass: "58.693",

        introduction:
            "Nickel is a silvery transition metal containing 28 protons. It belongs to Group 10 and commonly forms Ni²⁺ ions. Nickel is resistant to corrosion and is one of the few elements that are ferromagnetic at room temperature.",

        everyday:
            "Nickel is used in stainless steel, rechargeable batteries, coins, protective coatings, and industrial catalysts. Nickel alloys are important in aircraft engines and equipment exposed to high temperatures.",

        compounds: [
            [
                "NiO — Nickel(II) oxide",
                "An oxide used in ceramics, batteries, and specialized electronic materials."
            ],
            [
                "NiCl₂ — Nickel(II) chloride",
                "A compound used in electroplating and chemical manufacturing."
            ]
        ],

        reactions: [
            {
                title: "Nickel oxidation",
                equation: "2Ni + O₂ → 2NiO",
                explanation:
                    "Nickel reacts with oxygen to form nickel(II) oxide.",
                conditions:
                    "Heating promotes oxidation. Nickel compounds can be hazardous and require appropriate industrial controls."
            }
        ],

        related: [26, 27, 29],
        source: "https://periodic-table.rsc.org/element/28/nickel"
    },

    // COPPER — 29
    29: {
        category: "Transition metal",
        state: "Solid",
        mass: "63.546",

        introduction:
            "Copper is a reddish-orange transition metal containing 29 protons. It belongs to Group 11 and is an excellent conductor of electricity and heat. Copper commonly forms compounds containing Cu⁺ or Cu²⁺ ions.",

        everyday:
            "Copper is used in electrical wiring, plumbing, electronics, motors, and renewable energy systems. Copper alloys include brass and bronze. Copper is also an essential trace nutrient in living organisms.",

        compounds: [
            [
                "CuO — Copper(II) oxide",
                "A black compound containing copper and oxygen."
            ],
            [
                "CuSO₄ — Copper(II) sulfate",
                "A compound commonly encountered as blue hydrated crystals in chemical laboratories."
            ]
        ],

        reactions: [
            {
                title: "Copper oxidation",
                equation: "2Cu + O₂ → 2CuO",
                explanation:
                    "Copper reacts with oxygen to form copper(II) oxide.",
                conditions:
                    "Heating copper in air promotes the formation of a black oxide layer."
            }
        ],

        related: [8, 30, 47],
        source: "https://periodic-table.rsc.org/element/29/copper"
    },

    // ZINC — 30
    30: {
        category: "Group 12 metal",
        state: "Solid",
        mass: "65.38",

        introduction:
            "Zinc is a bluish-silver metal containing 30 protons. It belongs to Group 12 and commonly forms Zn²⁺ ions. Zinc is important in corrosion protection and biological enzyme activity.",

        everyday:
            "Zinc is used to galvanize steel, manufacture brass, produce batteries, and make certain skin-care products. Zinc is also an essential nutrient involved in immune function and cellular processes.",

        compounds: [
            [
                "ZnO — Zinc oxide",
                "A white compound used in sunscreen, cosmetics, rubber manufacturing, and ceramics."
            ],
            [
                "ZnS — Zinc sulfide",
                "A compound used in phosphors and specialized optical materials."
            ]
        ],

        reactions: [
            {
                title: "Zinc oxidation",
                equation: "2Zn + O₂ → 2ZnO",
                explanation:
                    "Zinc reacts with oxygen to form zinc oxide.",
                conditions:
                    "Heating promotes oxidation. Zinc oxide fumes from high-temperature processes can be harmful if inhaled."
            }
        ],

        related: [8, 29, 48],
        source: "https://periodic-table.rsc.org/element/30/zinc"
    },

    // GALLIUM — 31
    31: {
        category: "Post-transition metal",
        state: "Solid",
        mass: "69.723",

        introduction:
            "Gallium is a soft, silvery metal containing 31 protons. It belongs to Group 13 and has a melting point of approximately 29.76°C. This means gallium can melt near ordinary room temperatures or when held in a warm hand.",

        everyday:
            "Gallium is used in semiconductors, light-emitting diodes, solar cells, and high-frequency electronics. Gallium-based compounds are particularly important in modern lighting and communication technologies.",

        compounds: [
            [
                "GaAs — Gallium arsenide",
                "A semiconductor compound used in electronics, solar cells, and high-frequency devices."
            ],
            [
                "GaN — Gallium nitride",
                "A semiconductor used in LEDs, power electronics, and advanced electronic devices."
            ]
        ],

        reactions: [
            {
                title: "Gallium oxidation",
                equation: "4Ga + 3O₂ → 2Ga₂O₃",
                explanation:
                    "Gallium combines with oxygen to form gallium(III) oxide.",
                conditions:
                    "Oxidation occurs at exposed surfaces and is promoted by heating."
            }
        ],

        related: [13, 7, 33],
        source: "https://periodic-table.rsc.org/element/31/gallium"
    },

    // GERMANIUM — 32
    32: {
        category: "Metalloid",
        state: "Solid",
        mass: "72.630",

        introduction:
            "Germanium is a grayish-white metalloid containing 32 protons. It belongs to Group 14 and has semiconductor properties. Its chemical behavior resembles silicon in several important ways.",

        everyday:
            "Germanium is used in fiber-optic systems, infrared optics, semiconductor devices, and specialized solar cells. It played an important role in the early development of transistor technology.",

        compounds: [
            [
                "GeO₂ — Germanium dioxide",
                "A compound used in optical fibers and specialized glass manufacturing."
            ],
            [
                "GeCl₄ — Germanium tetrachloride",
                "A compound used in producing high-purity germanium materials."
            ]
        ],

        reactions: [
            {
                title: "Germanium oxidation",
                equation: "Ge + O₂ → GeO₂",
                explanation:
                    "Germanium reacts with oxygen to produce germanium dioxide.",
                conditions:
                    "Heating promotes the oxidation reaction."
            }
        ],

        related: [14, 6, 50],
        source: "https://periodic-table.rsc.org/element/32/germanium"
    },

    // ARSENIC — 33
    33: {
        category: "Metalloid",
        state: "Solid",
        mass: "74.922",

        introduction:
            "Arsenic is a metalloid containing 33 protons. It belongs to Group 15 and occurs in several forms, including metallic-looking gray arsenic. Arsenic compounds vary considerably in chemical behavior and toxicity.",

        everyday:
            "Arsenic compounds have historically been used in pesticides and wood preservatives, although many such uses have been restricted because of toxicity. High-purity arsenic is used in certain semiconductor materials.",

        compounds: [
            [
                "As₂O₃ — Arsenic trioxide",
                "A highly toxic compound that also has carefully controlled medical applications."
            ],
            [
                "GaAs — Gallium arsenide",
                "A semiconductor compound used in specialized electronics."
            ]
        ],

        reactions: [
            {
                title: "Arsenic oxidation",
                equation: "4As + 3O₂ → 2As₂O₃",
                explanation:
                    "Arsenic reacts with oxygen to produce arsenic trioxide.",
                conditions:
                    "Heating can produce highly toxic arsenic-containing fumes. This reaction is for conceptual study only."
            }
        ],

        related: [15, 31, 51],
        source: "https://periodic-table.rsc.org/element/33/arsenic"
    },

    // SELENIUM — 34
    34: {
        category: "Nonmetal",
        state: "Solid",
        mass: "78.971",

        introduction:
            "Selenium is a nonmetal containing 34 protons. It belongs to Group 16 and is chemically related to sulfur. Selenium can exist in several allotropes with different physical properties.",

        everyday:
            "Selenium is an essential trace nutrient involved in antioxidant enzymes and thyroid hormone metabolism. Selenium compounds are also used in glass manufacturing, electronics, and specialized pigments.",

        compounds: [
            [
                "SeO₂ — Selenium dioxide",
                "A compound used in specialized chemical manufacturing."
            ],
            [
                "H₂Se — Hydrogen selenide",
                "A highly toxic gaseous compound containing hydrogen and selenium."
            ]
        ],

        reactions: [
            {
                title: "Selenium oxidation",
                equation: "Se + O₂ → SeO₂",
                explanation:
                    "Selenium combines with oxygen to form selenium dioxide.",
                conditions:
                    "Heating promotes oxidation. Selenium dioxide and its fumes require careful handling."
            }
        ],

        related: [16, 8, 52],
        source: "https://periodic-table.rsc.org/element/34/selenium"
    },

    // BROMINE — 35
    35: {
        category: "Halogen",
        state: "Liquid",
        mass: "79.904",

        introduction:
            "Bromine is a reddish-brown halogen containing 35 protons. It belongs to Group 17 and is one of only two elements that are liquids at approximately 20°C. Elemental bromine normally exists as Br₂ molecules.",

        everyday:
            "Bromine compounds are used in certain flame retardants, pharmaceuticals, photographic materials, and industrial chemical processes. Elemental bromine is corrosive and produces hazardous vapors.",

        compounds: [
            [
                "NaBr — Sodium bromide",
                "An ionic compound containing sodium and bromide ions."
            ],
            [
                "AgBr — Silver bromide",
                "A light-sensitive compound historically important in photographic film."
            ]
        ],

        reactions: [
            {
                title: "Bromide formation",
                equation: "2Na + Br₂ → 2NaBr",
                explanation:
                    "Sodium and bromine combine to form sodium bromide.",
                conditions:
                    "This reaction involves highly reactive sodium metal and hazardous bromine. It is not suitable for home experimentation."
            }
        ],

        related: [17, 9, 53],
        source: "https://periodic-table.rsc.org/element/35/bromine"
    },

    // KRYPTON — 36
    36: {
        category: "Noble gas",
        state: "Gas",
        mass: "83.798",

        introduction:
            "Krypton is a colorless noble gas containing 36 protons. It belongs to Group 18 and has a complete outer electron shell. Although relatively unreactive, krypton can form a small number of compounds under specialized conditions.",

        everyday:
            "Krypton is used in specialized lighting, photographic flash lamps, insulated windows, and scientific instruments. Its name comes from a Greek word meaning hidden.",

        compounds: [
            [
                "KrF₂ — Krypton difluoride",
                "A rare krypton compound containing krypton and fluorine."
            ]
        ],

        reactions: [
            {
                title: "Electronic excitation",
                equation: "Kr* → Kr + light",
                explanation:
                    "An excited krypton atom can emit light as an electron returns to a lower energy state.",
                conditions:
                    "This is an electronic transition rather than an ordinary chemical reaction."
            }
        ],

        related: [2, 18, 54],
        source: "https://periodic-table.rsc.org/element/36/krypton"
    },

    // RUBIDIUM — 37
    37: {
        category: "Alkali metal",
        state: "Solid",
        mass: "85.468",

        introduction:
            "Rubidium is a soft, silvery alkali metal containing 37 protons. It belongs to Group 1 and has one electron in its outermost shell. Rubidium is highly reactive and commonly forms Rb⁺ ions.",

        everyday:
            "Rubidium is used in atomic clocks, scientific research, specialized electronics, and certain optical technologies. Its strong chemical reactivity limits ordinary commercial applications.",

        compounds: [
            [
                "RbCl — Rubidium chloride",
                "An ionic compound containing rubidium and chloride ions."
            ],
            [
                "Rb₂O — Rubidium oxide",
                "An oxide containing rubidium and oxygen."
            ]
        ],

        reactions: [
            {
                title: "Rubidium and water",
                equation: "2Rb + 2H₂O → 2RbOH + H₂",
                explanation:
                    "Rubidium reacts with water to form rubidium hydroxide and hydrogen gas.",
                conditions:
                    "This reaction is extremely vigorous and potentially explosive. It is for educational discussion only."
            }
        ],

        related: [11, 19, 55],
        source: "https://periodic-table.rsc.org/element/37/rubidium"
    },

    // STRONTIUM — 38
    38: {
        category: "Alkaline earth metal",
        state: "Solid",
        mass: "87.62",

        introduction:
            "Strontium is a soft, silvery alkaline earth metal containing 38 protons. It belongs to Group 2 and commonly forms Sr²⁺ ions. Strontium compounds can produce a characteristic bright red color in flames.",

        everyday:
            "Strontium compounds are used in specialized ceramics, magnets, and certain medical technologies. Some radioactive strontium isotopes require careful environmental and health monitoring.",

        compounds: [
            [
                "SrCO₃ — Strontium carbonate",
                "A compound used in ceramics and specialized industrial materials."
            ],
            [
                "SrCl₂ — Strontium chloride",
                "An ionic compound containing strontium and chloride ions."
            ]
        ],

        reactions: [
            {
                title: "Strontium oxidation",
                equation: "2Sr + O₂ → 2SrO",
                explanation:
                    "Strontium combines with oxygen to form strontium oxide.",
                conditions:
                    "Strontium metal is reactive and oxidizes readily in air."
            }
        ],

        related: [20, 12, 56],
        source: "https://periodic-table.rsc.org/element/38/strontium"
    },

    // YTTRIUM — 39
    39: {
        category: "Transition metal",
        state: "Solid",
        mass: "88.906",

        introduction:
            "Yttrium is a silvery transition metal containing 39 protons. It belongs to Group 3 and commonly forms Y³⁺ ions. Yttrium is chemically associated with the rare-earth elements.",

        everyday:
            "Yttrium compounds are used in LED lighting, lasers, superconducting materials, ceramics, and specialized electronic devices.",

        compounds: [
            [
                "Y₂O₃ — Yttrium oxide",
                "A compound used in ceramics, phosphors, and advanced materials."
            ],
            [
                "Y₃Al₅O₁₂ — Yttrium aluminium garnet",
                "A crystalline material used in certain laser systems."
            ]
        ],

        reactions: [
            {
                title: "Yttrium oxidation",
                equation: "4Y + 3O₂ → 2Y₂O₃",
                explanation:
                    "Yttrium combines with oxygen to form yttrium oxide.",
                conditions:
                    "Heating promotes oxidation."
            }
        ],

        related: [21, 13, 57],
        source: "https://periodic-table.rsc.org/element/39/yttrium"
    },

    // ZIRCONIUM — 40
    40: {
        category: "Transition metal",
        state: "Solid",
        mass: "91.224",

        introduction:
            "Zirconium is a strong, corrosion-resistant transition metal containing 40 protons. It belongs to Group 4 and commonly forms Zr⁴⁺ ions. Its resistance to corrosion makes it useful in demanding industrial environments.",

        everyday:
            "Zirconium alloys are used in nuclear reactor components because certain grades absorb relatively few neutrons. Zirconium compounds are also used in ceramics, dental materials, and heat-resistant equipment.",

        compounds: [
            [
                "ZrO₂ — Zirconium dioxide",
                "A ceramic material also called zirconia, valued for strength and heat resistance."
            ],
            [
                "ZrCl₄ — Zirconium tetrachloride",
                "A compound used in zirconium production and chemical synthesis."
            ]
        ],

        reactions: [
            {
                title: "Zirconium oxidation",
                equation: "Zr + O₂ → ZrO₂",
                explanation:
                    "Zirconium combines with oxygen to form zirconium dioxide.",
                conditions:
                    "Bulk zirconium resists corrosion, while finely divided zirconium can be highly flammable."
            }
        ],

        related: [22, 8, 72],
        source: "https://periodic-table.rsc.org/element/40/zirconium"
    },

    // NIOBIUM — 41
    41: {
        category: "Transition metal",
        state: "Solid",
        mass: "92.906",

        introduction:
            "Niobium is a gray, ductile transition metal containing 41 protons. It belongs to Group 5 and commonly forms compounds in the +5 oxidation state. Niobium is valued for its strength and superconducting properties.",

        everyday:
            "Niobium is used in high-strength steel, superconducting magnets, particle accelerators, medical imaging equipment, and aerospace materials.",

        compounds: [
            [
                "Nb₂O₅ — Niobium(V) oxide",
                "An oxide used in optical materials, ceramics, and specialized electronics."
            ],
            [
                "NbCl₅ — Niobium(V) chloride",
                "A compound used in chemical synthesis."
            ]
        ],

        reactions: [
            {
                title: "Niobium oxidation",
                equation: "4Nb + 5O₂ → 2Nb₂O₅",
                explanation:
                    "Niobium combines with oxygen to form niobium(V) oxide.",
                conditions:
                    "Heating promotes oxidation."
            }
        ],

        related: [23, 40, 73],
        source: "https://periodic-table.rsc.org/element/41/niobium"
    },

    // MOLYBDENUM — 42
    42: {
        category: "Transition metal",
        state: "Solid",
        mass: "95.95",

        introduction:
            "Molybdenum is a silvery transition metal containing 42 protons. It belongs to Group 6 and has a high melting point. Molybdenum forms compounds in several oxidation states and is important in biological enzymes.",

        everyday:
            "Molybdenum is used in high-strength steel, industrial catalysts, aerospace materials, and equipment exposed to high temperatures. Small amounts are essential for certain enzymes in living organisms.",

        compounds: [
            [
                "MoO₃ — Molybdenum trioxide",
                "An oxide used in industrial catalysts and chemical manufacturing."
            ],
            [
                "MoS₂ — Molybdenum disulfide",
                "A layered compound used as a solid lubricant and studied in electronics."
            ]
        ],

        reactions: [
            {
                title: "Molybdenum oxidation",
                equation: "2Mo + 3O₂ → 2MoO₃",
                explanation:
                    "Molybdenum combines with oxygen to form molybdenum trioxide.",
                conditions:
                    "Heating in oxygen promotes oxidation."
            }
        ],

        related: [24, 16, 74],
        source: "https://periodic-table.rsc.org/element/42/molybdenum"
    },

    // TECHNETIUM — 43
    43: {
        category: "Transition metal",
        state: "Solid",
        mass: "[98]",

        introduction:
            "Technetium is a radioactive transition metal containing 43 protons. It belongs to Group 7 and was the first element produced artificially before being identified in nature. Every known isotope of technetium is radioactive.",

        everyday:
            "Technetium-99m is widely used in nuclear medicine for diagnostic imaging. Its radioactive properties allow medical professionals to trace biological processes using specialized imaging equipment.",

        compounds: [
            [
                "TcO₄⁻ — Pertechnetate ion",
                "An ion containing technetium and oxygen, important in technetium chemistry and medical radiopharmaceuticals."
            ],
            [
                "TcO₂ — Technetium dioxide",
                "An oxide studied in nuclear chemistry and radioactive waste research."
            ]
        ],

        reactions: [
            {
                title: "Radioactive decay",
                equation: "⁹⁹ᵐTc → ⁹⁹Tc + γ",
                explanation:
                    "Technetium-99m undergoes an isomeric transition to technetium-99, releasing gamma radiation.",
                conditions:
                    "This is a nuclear process rather than a chemical reaction. Radioactive materials require specialized handling."
            }
        ],

        related: [42, 44, 75],
        source: "https://periodic-table.rsc.org/element/43/technetium"
    },

    // RUTHENIUM — 44
    44: {
        category: "Transition metal",
        state: "Solid",
        mass: "101.07",

        introduction:
            "Ruthenium is a hard, silvery transition metal containing 44 protons. It belongs to Group 8 and is part of the platinum-group metals. Ruthenium forms compounds in several oxidation states.",

        everyday:
            "Ruthenium is used in electronic components, industrial catalysts, wear-resistant electrical contacts, and specialized alloys.",

        compounds: [
            [
                "RuO₂ — Ruthenium dioxide",
                "A conductive oxide used in electronic materials and certain electrochemical applications."
            ],
            [
                "RuCl₃ — Ruthenium(III) chloride",
                "A compound used in chemical research and catalyst preparation."
            ]
        ],

        reactions: [
            {
                title: "Ruthenium oxidation",
                equation: "Ru + O₂ → RuO₂",
                explanation:
                    "Ruthenium combines with oxygen to form ruthenium dioxide.",
                conditions:
                    "Oxidation depends on temperature and reaction conditions."
            }
        ],

        related: [26, 45, 76],
        source: "https://periodic-table.rsc.org/element/44/ruthenium"
    },

    // RHODIUM — 45
    45: {
        category: "Transition metal",
        state: "Solid",
        mass: "102.906",

        introduction:
            "Rhodium is a rare, silvery transition metal containing 45 protons. It belongs to Group 9 and is one of the platinum-group metals. Rhodium is highly resistant to corrosion and has important catalytic properties.",

        everyday:
            "Rhodium is used in vehicle catalytic converters, reflective coatings, jewelry plating, and specialized industrial catalysts.",

        compounds: [
            [
                "RhCl₃ — Rhodium(III) chloride",
                "A compound used in catalyst preparation and chemical research."
            ],
            [
                "Rh₂O₃ — Rhodium(III) oxide",
                "An oxide containing rhodium and oxygen."
            ]
        ],

        reactions: [
            {
                title: "Rhodium oxidation",
                equation: "4Rh + 3O₂ → 2Rh₂O₃",
                explanation:
                    "Rhodium can combine with oxygen to form rhodium(III) oxide.",
                conditions:
                    "Oxide formation depends on elevated temperatures and suitable oxygen conditions."
            }
        ],

        related: [27, 44, 46],
        source: "https://periodic-table.rsc.org/element/45/rhodium"
    },

    // PALLADIUM — 46
    46: {
        category: "Transition metal",
        state: "Solid",
        mass: "106.42",

        introduction:
            "Palladium is a silvery-white transition metal containing 46 protons. It belongs to Group 10 and is a platinum-group metal. Palladium is particularly notable for its ability to absorb hydrogen.",

        everyday:
            "Palladium is used in catalytic converters, electronics, jewelry, hydrogen purification systems, and industrial chemical manufacturing.",

        compounds: [
            [
                "PdCl₂ — Palladium(II) chloride",
                "A compound used in catalyst preparation and chemical synthesis."
            ],
            [
                "PdO — Palladium(II) oxide",
                "An oxide containing palladium and oxygen."
            ]
        ],

        reactions: [
            {
                title: "Palladium oxidation",
                equation: "2Pd + O₂ → 2PdO",
                explanation:
                    "Palladium can react with oxygen to form palladium(II) oxide.",
                conditions:
                    "Oxide formation depends on temperature and oxygen availability."
            }
        ],

        related: [28, 45, 78],
        source: "https://periodic-table.rsc.org/element/46/palladium"
    },

    // SILVER — 47
    47: {
        category: "Transition metal",
        state: "Solid",
        mass: "107.868",

        introduction:
            "Silver is a lustrous, white transition metal containing 47 protons. It belongs to Group 11 and has the highest electrical conductivity of any element. Silver commonly forms Ag⁺ ions in compounds.",

        everyday:
            "Silver is used in jewelry, electrical contacts, electronics, mirrors, solar technology, and specialized medical materials. Historically, silver compounds were important in photographic film.",

        compounds: [
            [
                "AgNO₃ — Silver nitrate",
                "A compound used in chemical laboratories and specialized industrial applications."
            ],
            [
                "AgBr — Silver bromide",
                "A light-sensitive compound historically used in photographic materials."
            ]
        ],

        reactions: [
            {
                title: "Silver chloride precipitation",
                equation: "Ag⁺ + Cl⁻ → AgCl",
                explanation:
                    "Silver ions and chloride ions combine in aqueous solution to form insoluble silver chloride.",
                conditions:
                    "This reaction occurs when suitable solutions containing silver and chloride ions are mixed."
            }
        ],

        related: [29, 35, 79],
        source: "https://periodic-table.rsc.org/element/47/silver"
    },

    // CADMIUM — 48
    48: {
        category: "Group 12 metal",
        state: "Solid",
        mass: "112.414",

        introduction:
            "Cadmium is a soft, bluish-white metal containing 48 protons. It belongs to Group 12 and commonly forms Cd²⁺ ions. Cadmium is chemically related to zinc but is significantly more toxic.",

        everyday:
            "Cadmium has been used in rechargeable batteries, pigments, protective coatings, and specialized electronic materials. Many applications are restricted because cadmium exposure can damage human health and the environment.",

        compounds: [
            [
                "CdS — Cadmium sulfide",
                "A yellow semiconductor compound historically used in pigments and specialized electronic devices."
            ],
            [
                "CdO — Cadmium oxide",
                "An oxide used in certain industrial materials."
            ]
        ],

        reactions: [
            {
                title: "Cadmium oxidation",
                equation: "2Cd + O₂ → 2CdO",
                explanation:
                    "Cadmium combines with oxygen to form cadmium oxide.",
                conditions:
                    "Heating cadmium can produce highly toxic fumes. This reaction is for educational study only."
            }
        ],

        related: [30, 16, 80],
        source: "https://periodic-table.rsc.org/element/48/cadmium"
    },

    // INDIUM — 49
    49: {
        category: "Post-transition metal",
        state: "Solid",
        mass: "114.818",

        introduction:
            "Indium is a soft, silvery post-transition metal containing 49 protons. It belongs to Group 13 and commonly forms In³⁺ ions. Indium has a relatively low melting point and is useful in specialized electronic materials.",

        everyday:
            "Indium is used in touchscreens, flat-panel displays, semiconductors, low-melting alloys, and specialized coatings. Indium tin oxide is an important transparent conducting material.",

        compounds: [
            [
                "In₂O₃ — Indium(III) oxide",
                "An oxide used in electronic materials and transparent conductive coatings."
            ],
            [
                "InP — Indium phosphide",
                "A semiconductor compound used in optical communications and high-speed electronics."
            ]
        ],

        reactions: [
            {
                title: "Indium oxidation",
                equation: "4In + 3O₂ → 2In₂O₃",
                explanation:
                    "Indium combines with oxygen to form indium(III) oxide.",
                conditions:
                    "Heating promotes oxidation."
            }
        ],

        related: [13, 31, 50],
        source: "https://periodic-table.rsc.org/element/49/indium"
    },

    // TIN — 50
    50: {
        category: "Post-transition metal",
        state: "Solid",
        mass: "118.710",

        introduction:
            "Tin is a soft, silvery metal containing 50 protons. It belongs to Group 14 and commonly forms compounds with oxidation states of +2 and +4. Tin has been used by humans for thousands of years.",

        everyday:
            "Tin is used in solder, protective coatings, food packaging, and metal alloys. Bronze, an alloy primarily made from copper and tin, played an important role in early human technological development.",

        compounds: [
            [
                "SnO₂ — Tin(IV) oxide",
                "An oxide used in ceramics, coatings, and electronic materials."
            ],
            [
                "SnCl₂ — Tin(II) chloride",
                "A compound used in chemical manufacturing and certain industrial processes."
            ]
        ],

        reactions: [
            {
                title: "Tin oxidation",
                equation: "Sn + O₂ → SnO₂",
                explanation:
                    "Tin combines with oxygen to form tin(IV) oxide.",
                conditions:
                    "Heating promotes oxidation. Tin develops surface oxide layers when exposed to air."
            }
        ],

        related: [29, 32, 82],
        source: "https://periodic-table.rsc.org/element/50/tin"
    },

    // =========================================
    // BATCH 4 — ELEMENTS 51–75
    // =========================================

    // ANTIMONY — 51
    51: {
        category: "Metalloid",
        state: "Solid",
        mass: "121.760",

        introduction:
            "Antimony is a brittle, silvery metalloid containing 51 protons. It belongs to Group 15 and commonly forms compounds in the +3 and +5 oxidation states. Antimony has been known since ancient times.",

        everyday:
            "Antimony compounds are used in certain flame-retardant systems, semiconductors, and industrial materials. Antimony is also added to some metal alloys to increase hardness.",

        compounds: [
            [
                "Sb₂O₃ — Antimony(III) oxide",
                "An oxide used in certain industrial flame-retardant formulations."
            ],
            [
                "SbCl₃ — Antimony(III) chloride",
                "A compound used in specialized chemical manufacturing."
            ]
        ],

        reactions: [
            {
                title: "Antimony oxidation",
                equation: "4Sb + 3O₂ → 2Sb₂O₃",
                explanation:
                    "Antimony combines with oxygen to form antimony(III) oxide.",
                conditions:
                    "Heating promotes oxidation. Antimony compounds require appropriate safety precautions."
            }
        ],

        related: [33, 50, 83],
        source: "https://periodic-table.rsc.org/element/51/antimony"
    },

    // TELLURIUM — 52
    52: {
        category: "Metalloid",
        state: "Solid",
        mass: "127.60",

        introduction:
            "Tellurium is a brittle, silvery metalloid containing 52 protons. It belongs to Group 16 and is chemically related to sulfur and selenium. Tellurium has semiconductor properties and forms compounds in several oxidation states.",

        everyday:
            "Tellurium is used in specialized solar cells, thermoelectric materials, metal alloys, and electronic devices. Cadmium telluride is particularly important in certain thin-film solar panels.",

        compounds: [
            [
                "CdTe — Cadmium telluride",
                "A semiconductor compound used in thin-film solar cells."
            ],
            [
                "TeO₂ — Tellurium dioxide",
                "An oxide used in specialized optical materials."
            ]
        ],

        reactions: [
            {
                title: "Tellurium oxidation",
                equation: "Te + O₂ → TeO₂",
                explanation:
                    "Tellurium combines with oxygen to form tellurium dioxide.",
                conditions:
                    "Heating promotes oxidation. Tellurium compounds require appropriate handling."
            }
        ],

        related: [16, 34, 48],
        source: "https://periodic-table.rsc.org/element/52/tellurium"
    },

    // IODINE — 53
    53: {
        category: "Halogen",
        state: "Solid",
        mass: "126.904",

        introduction:
            "Iodine is a dark, lustrous halogen containing 53 protons. It belongs to Group 17 and normally exists as I₂ molecules. When heated, iodine produces a distinctive violet vapor.",

        everyday:
            "Iodine is essential for thyroid hormone production. Iodide compounds are added to some table salts to help prevent iodine deficiency. Iodine-containing substances are also used in medical imaging and antiseptic products.",

        compounds: [
            [
                "KI — Potassium iodide",
                "An ionic compound containing potassium and iodide ions."
            ],
            [
                "AgI — Silver iodide",
                "A light-sensitive compound used in specialized applications."
            ]
        ],

        reactions: [
            {
                title: "Iodide formation",
                equation: "2K + I₂ → 2KI",
                explanation:
                    "Potassium and iodine combine to form potassium iodide.",
                conditions:
                    "Potassium metal is highly reactive, and iodine vapors can be irritating. This reaction is for educational study only."
            }
        ],

        related: [17, 35, 19],
        source: "https://periodic-table.rsc.org/element/53/iodine"
    },

    // XENON — 54
    54: {
        category: "Noble gas",
        state: "Gas",
        mass: "131.293",

        introduction:
            "Xenon is a colorless noble gas containing 54 protons. It belongs to Group 18 and has a complete outer electron shell. Although relatively unreactive, xenon can form compounds with highly electronegative elements such as fluorine.",

        everyday:
            "Xenon is used in specialized lighting, scientific instruments, certain medical applications, and ion propulsion systems for spacecraft.",

        compounds: [
            [
                "XeF₂ — Xenon difluoride",
                "A xenon compound used in specialized chemical processes."
            ],
            [
                "XeF₄ — Xenon tetrafluoride",
                "A compound demonstrating that noble gases can form chemical bonds under suitable conditions."
            ]
        ],

        reactions: [
            {
                title: "Xenon fluoride formation",
                equation: "Xe + F₂ → XeF₂",
                explanation:
                    "Xenon can combine with fluorine to produce xenon difluoride.",
                conditions:
                    "Requires specialized controlled conditions and involves highly hazardous fluorine."
            }
        ],

        related: [9, 36, 86],
        source: "https://periodic-table.rsc.org/element/54/xenon"
    },

    // CAESIUM — 55
    55: {
        category: "Alkali metal",
        state: "Solid",
        mass: "132.905",

        introduction:
            "Caesium is a soft, gold-colored alkali metal containing 55 protons. It belongs to Group 1 and has one electron in its outermost shell. Caesium is extremely reactive and melts at approximately 28.4°C.",

        everyday:
            "Caesium-133 is used in highly precise atomic clocks, which help define the SI second. Caesium compounds are also used in specialized scientific and industrial applications.",

        compounds: [
            [
                "CsCl — Caesium chloride",
                "An ionic compound containing caesium and chloride ions."
            ],
            [
                "Cs₂CO₃ — Caesium carbonate",
                "A compound used in specialized chemical synthesis."
            ]
        ],

        reactions: [
            {
                title: "Caesium and water",
                equation: "2Cs + 2H₂O → 2CsOH + H₂",
                explanation:
                    "Caesium reacts with water to form caesium hydroxide and hydrogen gas.",
                conditions:
                    "This reaction is extremely violent and can be explosive. It is not suitable for experimentation outside specialized facilities."
            }
        ],

        related: [11, 19, 37],
        source: "https://periodic-table.rsc.org/element/55/caesium"
    },

    // BARIUM — 56
    56: {
        category: "Alkaline earth metal",
        state: "Solid",
        mass: "137.327",

        introduction:
            "Barium is a soft, silvery alkaline earth metal containing 56 protons. It belongs to Group 2 and commonly forms Ba²⁺ ions. Barium is reactive and does not occur freely in nature.",

        everyday:
            "Barium sulfate is used as a contrast material in certain medical imaging procedures because it absorbs X-rays. Other barium compounds are used in ceramics, glass, and specialized industrial materials.",

        compounds: [
            [
                "BaSO₄ — Barium sulfate",
                "A very poorly soluble compound used in certain medical imaging procedures."
            ],
            [
                "BaCO₃ — Barium carbonate",
                "A compound used in ceramics and specialized industrial processes."
            ]
        ],

        reactions: [
            {
                title: "Barium oxidation",
                equation: "2Ba + O₂ → 2BaO",
                explanation:
                    "Barium combines with oxygen to form barium oxide.",
                conditions:
                    "Barium metal reacts readily with air. Many soluble barium compounds are toxic."
            }
        ],

        related: [20, 38, 16],
        source: "https://periodic-table.rsc.org/element/56/barium"
    },

    // LANTHANUM — 57
    57: {
        category: "Lanthanide",
        state: "Solid",
        mass: "138.905",

        introduction:
            "Lanthanum is a soft, silvery rare-earth metal containing 57 protons. It is commonly grouped with the lanthanides and usually forms La³⁺ ions. Lanthanum reacts with oxygen and moisture when exposed to air.",

        everyday:
            "Lanthanum compounds are used in optical glass, camera lenses, rechargeable battery materials, and industrial catalysts.",

        compounds: [
            [
                "La₂O₃ — Lanthanum oxide",
                "An oxide used in optical glass and specialized ceramics."
            ],
            [
                "LaCl₃ — Lanthanum chloride",
                "A compound used in chemical research and specialized materials."
            ]
        ],

        reactions: [
            {
                title: "Lanthanum oxidation",
                equation: "4La + 3O₂ → 2La₂O₃",
                explanation:
                    "Lanthanum combines with oxygen to form lanthanum oxide.",
                conditions:
                    "Lanthanum oxidizes readily when exposed to air."
            }
        ],

        related: [39, 58, 8],
        source: "https://periodic-table.rsc.org/element/57/lanthanum"
    },

    // CERIUM — 58
    58: {
        category: "Lanthanide",
        state: "Solid",
        mass: "140.116",

        introduction:
            "Cerium is a silvery rare-earth metal containing 58 protons. It belongs to the lanthanide series and is the most abundant rare-earth element in Earth's crust. Cerium commonly forms compounds in the +3 and +4 oxidation states.",

        everyday:
            "Cerium compounds are used in catalytic converters, glass polishing, ceramics, and specialized industrial catalysts.",

        compounds: [
            [
                "CeO₂ — Cerium(IV) oxide",
                "An oxide used in catalytic converters, polishing compounds, and advanced materials."
            ],
            [
                "CeCl₃ — Cerium(III) chloride",
                "A compound used in chemical research and manufacturing."
            ]
        ],

        reactions: [
            {
                title: "Cerium oxidation",
                equation: "Ce + O₂ → CeO₂",
                explanation:
                    "Cerium combines with oxygen to form cerium(IV) oxide.",
                conditions:
                    "Finely divided cerium can ignite readily in air."
            }
        ],

        related: [57, 59, 8],
        source: "https://periodic-table.rsc.org/element/58/cerium"
    },

    // PRASEODYMIUM — 59
    59: {
        category: "Lanthanide",
        state: "Solid",
        mass: "140.908",

        introduction:
            "Praseodymium is a silvery rare-earth metal containing 59 protons. It belongs to the lanthanide series and commonly forms Pr³⁺ ions. Its compounds can display distinctive green and yellow colors.",

        everyday:
            "Praseodymium is used in specialized magnets, aircraft alloys, glass coloring, ceramics, and optical materials.",

        compounds: [
            [
                "Pr₂O₃ — Praseodymium(III) oxide",
                "An oxide used in specialized ceramics and optical materials."
            ],
            [
                "PrCl₃ — Praseodymium(III) chloride",
                "A compound used in chemical research."
            ]
        ],

        reactions: [
            {
                title: "Praseodymium oxidation",
                equation: "4Pr + 3O₂ → 2Pr₂O₃",
                explanation:
                    "Praseodymium combines with oxygen to form praseodymium(III) oxide.",
                conditions:
                    "Heating promotes oxidation; other praseodymium oxides can also form."
            }
        ],

        related: [58, 60, 8],
        source: "https://periodic-table.rsc.org/element/59/praseodymium"
    },

    // NEODYMIUM — 60
    60: {
        category: "Lanthanide",
        state: "Solid",
        mass: "144.242",

        introduction:
            "Neodymium is a silvery rare-earth metal containing 60 protons. It belongs to the lanthanide series and commonly forms Nd³⁺ ions. Neodymium is particularly important in the production of powerful permanent magnets.",

        everyday:
            "Neodymium magnets are used in electric motors, wind turbines, headphones, speakers, computer equipment, and many electronic devices.",

        compounds: [
            [
                "Nd₂O₃ — Neodymium oxide",
                "An oxide used in glass coloring, ceramics, and specialized materials."
            ],
            [
                "NdCl₃ — Neodymium chloride",
                "A compound used in chemical research and material preparation."
            ]
        ],

        reactions: [
            {
                title: "Neodymium oxidation",
                equation: "4Nd + 3O₂ → 2Nd₂O₃",
                explanation:
                    "Neodymium combines with oxygen to form neodymium oxide.",
                conditions:
                    "Neodymium oxidizes when exposed to air, especially when heated."
            }
        ],

        related: [59, 62, 26],
        source: "https://periodic-table.rsc.org/element/60/neodymium"
    },

    // PROMETHIUM — 61
    61: {
        category: "Lanthanide",
        state: "Solid",
        mass: "[145]",

        introduction:
            "Promethium is a radioactive rare-earth metal containing 61 protons. It belongs to the lanthanide series and has no stable isotopes. Promethium occurs naturally only in extremely small quantities.",

        everyday:
            "Promethium has been studied for specialized nuclear batteries, radiation sources, and scientific applications. Its radioactivity and limited availability restrict widespread use.",

        compounds: [
            [
                "PmCl₃ — Promethium(III) chloride",
                "A radioactive compound containing promethium and chlorine."
            ],
            [
                "Pm₂O₃ — Promethium(III) oxide",
                "An oxide studied in radioactive materials research."
            ]
        ],

        reactions: [
            {
                title: "Promethium oxidation",
                equation: "4Pm + 3O₂ → 2Pm₂O₃",
                explanation:
                    "Promethium can combine with oxygen to form promethium(III) oxide.",
                conditions:
                    "Promethium is radioactive and requires specialized containment and handling."
            }
        ],

        related: [60, 62, 43],
        source: "https://periodic-table.rsc.org/element/61/promethium"
    },

    // SAMARIUM — 62
    62: {
        category: "Lanthanide",
        state: "Solid",
        mass: "150.36",

        introduction:
            "Samarium is a silvery rare-earth metal containing 62 protons. It belongs to the lanthanide series and commonly forms Sm³⁺ ions. Samarium is important in magnetic materials and nuclear technology.",

        everyday:
            "Samarium-cobalt magnets are used in aerospace equipment, electric motors, sensors, and technologies requiring magnets that remain effective at elevated temperatures.",

        compounds: [
            [
                "Sm₂O₃ — Samarium(III) oxide",
                "An oxide used in specialized ceramics and optical materials."
            ],
            [
                "SmCl₃ — Samarium(III) chloride",
                "A compound used in chemical research."
            ]
        ],

        reactions: [
            {
                title: "Samarium oxidation",
                equation: "4Sm + 3O₂ → 2Sm₂O₃",
                explanation:
                    "Samarium combines with oxygen to form samarium(III) oxide.",
                conditions:
                    "Heating promotes oxidation."
            }
        ],

        related: [60, 63, 27],
        source: "https://periodic-table.rsc.org/element/62/samarium"
    },

    // EUROPIUM — 63
    63: {
        category: "Lanthanide",
        state: "Solid",
        mass: "151.964",

        introduction:
            "Europium is a soft, silvery rare-earth metal containing 63 protons. It belongs to the lanthanide series and commonly forms compounds in the +2 and +3 oxidation states. Europium is particularly valuable for its luminescent properties.",

        everyday:
            "Europium compounds are used in red and blue phosphors for displays, LED lighting, security markings, and specialized optical materials.",

        compounds: [
            [
                "Eu₂O₃ — Europium(III) oxide",
                "An oxide used in luminescent materials and specialized electronics."
            ],
            [
                "EuCl₂ — Europium(II) chloride",
                "A compound containing europium in the +2 oxidation state."
            ]
        ],

        reactions: [
            {
                title: "Europium oxidation",
                equation: "4Eu + 3O₂ → 2Eu₂O₃",
                explanation:
                    "Europium combines with oxygen to form europium(III) oxide.",
                conditions:
                    "Europium is reactive and oxidizes readily in air."
            }
        ],

        related: [62, 64, 8],
        source: "https://periodic-table.rsc.org/element/63/europium"
    },

    // GADOLINIUM — 64
    64: {
        category: "Lanthanide",
        state: "Solid",
        mass: "157.25",

        introduction:
            "Gadolinium is a silvery rare-earth metal containing 64 protons. It belongs to the lanthanide series and commonly forms Gd³⁺ ions. Gadolinium has unusual magnetic properties and strongly influences nearby magnetic fields.",

        everyday:
            "Certain gadolinium-based compounds are used as contrast agents in MRI scans. Gadolinium is also used in specialized magnets, electronics, and nuclear technologies.",

        compounds: [
            [
                "Gd₂O₃ — Gadolinium(III) oxide",
                "An oxide used in specialized optical and electronic materials."
            ],
            [
                "GdCl₃ — Gadolinium(III) chloride",
                "A compound used in chemical research."
            ]
        ],

        reactions: [
            {
                title: "Gadolinium oxidation",
                equation: "4Gd + 3O₂ → 2Gd₂O₃",
                explanation:
                    "Gadolinium combines with oxygen to form gadolinium(III) oxide.",
                conditions:
                    "Heating promotes oxidation."
            }
        ],

        related: [63, 65, 26],
        source: "https://periodic-table.rsc.org/element/64/gadolinium"
    },

    // TERBIUM — 65
    65: {
        category: "Lanthanide",
        state: "Solid",
        mass: "158.925",

        introduction:
            "Terbium is a silvery rare-earth metal containing 65 protons. It belongs to the lanthanide series and commonly forms Tb³⁺ ions. Terbium compounds can produce bright green luminescence.",

        everyday:
            "Terbium is used in green phosphors, specialized lighting, displays, sensors, and magnetostrictive materials that change shape in response to magnetic fields.",

        compounds: [
            [
                "Tb₄O₇ — Terbium oxide",
                "A mixed-valence oxide used in specialized optical and electronic materials."
            ],
            [
                "TbCl₃ — Terbium(III) chloride",
                "A compound used in chemical research."
            ]
        ],

        reactions: [
            {
                title: "Terbium oxidation",
                equation: "4Tb + 3O₂ → 2Tb₂O₃",
                explanation:
                    "Terbium combines with oxygen to form terbium(III) oxide.",
                conditions:
                    "The oxide formed depends on reaction conditions; mixed-valence oxides are also common."
            }
        ],

        related: [64, 66, 8],
        source: "https://periodic-table.rsc.org/element/65/terbium"
    },

    // DYSPROSIUM — 66
    66: {
        category: "Lanthanide",
        state: "Solid",
        mass: "162.500",

        introduction:
            "Dysprosium is a silvery rare-earth metal containing 66 protons. It belongs to the lanthanide series and commonly forms Dy³⁺ ions. Dysprosium is valued for its strong magnetic properties.",

        everyday:
            "Dysprosium is used in high-performance magnets, electric motors, wind turbines, and specialized nuclear and electronic technologies.",

        compounds: [
            [
                "Dy₂O₃ — Dysprosium(III) oxide",
                "An oxide used in advanced materials and specialized ceramics."
            ],
            [
                "DyCl₃ — Dysprosium(III) chloride",
                "A compound used in chemical research."
            ]
        ],

        reactions: [
            {
                title: "Dysprosium oxidation",
                equation: "4Dy + 3O₂ → 2Dy₂O₃",
                explanation:
                    "Dysprosium combines with oxygen to form dysprosium(III) oxide.",
                conditions:
                    "Heating promotes oxidation."
            }
        ],

        related: [65, 67, 60],
        source: "https://periodic-table.rsc.org/element/66/dysprosium"
    },

    // HOLMIUM — 67
    67: {
        category: "Lanthanide",
        state: "Solid",
        mass: "164.930",

        introduction:
            "Holmium is a silvery rare-earth metal containing 67 protons. It belongs to the lanthanide series and commonly forms Ho³⁺ ions. Holmium has one of the highest magnetic moments of any naturally occurring element.",

        everyday:
            "Holmium is used in specialized lasers, magnetic materials, scientific instruments, and certain medical laser technologies.",

        compounds: [
            [
                "Ho₂O₃ — Holmium(III) oxide",
                "An oxide used in specialized optical materials."
            ],
            [
                "HoCl₃ — Holmium(III) chloride",
                "A compound used in chemical research."
            ]
        ],

        reactions: [
            {
                title: "Holmium oxidation",
                equation: "4Ho + 3O₂ → 2Ho₂O₃",
                explanation:
                    "Holmium combines with oxygen to form holmium(III) oxide.",
                conditions:
                    "Heating promotes oxidation."
            }
        ],

        related: [66, 68, 8],
        source: "https://periodic-table.rsc.org/element/67/holmium"
    },

    // ERBIUM — 68
    68: {
        category: "Lanthanide",
        state: "Solid",
        mass: "167.259",

        introduction:
            "Erbium is a silvery rare-earth metal containing 68 protons. It belongs to the lanthanide series and commonly forms Er³⁺ ions. Erbium compounds have important optical properties.",

        everyday:
            "Erbium is used in fiber-optic communication systems, lasers, specialized glass, and certain medical technologies. Erbium-doped optical fibers can amplify light signals.",

        compounds: [
            [
                "Er₂O₃ — Erbium(III) oxide",
                "An oxide used in specialized optical materials."
            ],
            [
                "ErCl₃ — Erbium(III) chloride",
                "A compound used in chemical research."
            ]
        ],

        reactions: [
            {
                title: "Erbium oxidation",
                equation: "4Er + 3O₂ → 2Er₂O₃",
                explanation:
                    "Erbium combines with oxygen to form erbium(III) oxide.",
                conditions:
                    "Heating promotes oxidation."
            }
        ],

        related: [67, 69, 14],
        source: "https://periodic-table.rsc.org/element/68/erbium"
    },

    // THULIUM — 69
    69: {
        category: "Lanthanide",
        state: "Solid",
        mass: "168.934",

        introduction:
            "Thulium is a silvery rare-earth metal containing 69 protons. It belongs to the lanthanide series and commonly forms Tm³⁺ ions. Thulium is one of the least abundant naturally occurring lanthanides.",

        everyday:
            "Thulium is used in specialized lasers, scientific research, and certain portable X-ray technologies.",

        compounds: [
            [
                "Tm₂O₃ — Thulium(III) oxide",
                "An oxide used in specialized optical materials."
            ],
            [
                "TmCl₃ — Thulium(III) chloride",
                "A compound used in chemical research."
            ]
        ],

        reactions: [
            {
                title: "Thulium oxidation",
                equation: "4Tm + 3O₂ → 2Tm₂O₃",
                explanation:
                    "Thulium combines with oxygen to form thulium(III) oxide.",
                conditions:
                    "Heating promotes oxidation."
            }
        ],

        related: [68, 70, 8],
        source: "https://periodic-table.rsc.org/element/69/thulium"
    },

    // YTTERBIUM — 70
    70: {
        category: "Lanthanide",
        state: "Solid",
        mass: "173.045",

        introduction:
            "Ytterbium is a soft, silvery rare-earth metal containing 70 protons. It belongs to the lanthanide series and commonly forms Yb³⁺ ions, although the +2 oxidation state is also important.",

        everyday:
            "Ytterbium is used in fiber lasers, scientific instruments, specialized alloys, and precision atomic-clock research.",

        compounds: [
            [
                "Yb₂O₃ — Ytterbium(III) oxide",
                "An oxide used in specialized ceramics and optical materials."
            ],
            [
                "YbCl₂ — Ytterbium(II) chloride",
                "A compound containing ytterbium in the +2 oxidation state."
            ]
        ],

        reactions: [
            {
                title: "Ytterbium oxidation",
                equation: "4Yb + 3O₂ → 2Yb₂O₃",
                explanation:
                    "Ytterbium combines with oxygen to form ytterbium(III) oxide.",
                conditions:
                    "Heating promotes oxidation."
            }
        ],

        related: [69, 71, 8],
        source: "https://periodic-table.rsc.org/element/70/ytterbium"
    },

    // LUTETIUM — 71
    71: {
        category: "Lanthanide",
        state: "Solid",
        mass: "174.967",

        introduction:
            "Lutetium is a dense, silvery rare-earth metal containing 71 protons. It is commonly classified as the final lanthanide and usually forms Lu³⁺ ions. Lutetium is among the least abundant naturally occurring rare-earth elements.",

        everyday:
            "Lutetium compounds are used in specialized medical imaging detectors, catalysts, and scientific research. The radioactive isotope lutetium-177 is used in certain targeted cancer treatments.",

        compounds: [
            [
                "Lu₂O₃ — Lutetium(III) oxide",
                "An oxide used in specialized ceramics and optical materials."
            ],
            [
                "LuCl₃ — Lutetium(III) chloride",
                "A compound used in chemical research."
            ]
        ],

        reactions: [
            {
                title: "Lutetium oxidation",
                equation: "4Lu + 3O₂ → 2Lu₂O₃",
                explanation:
                    "Lutetium combines with oxygen to form lutetium(III) oxide.",
                conditions:
                    "Heating promotes oxidation."
            }
        ],

        related: [70, 72, 39],
        source: "https://periodic-table.rsc.org/element/71/lutetium"
    },

    // HAFNIUM — 72
    72: {
        category: "Transition metal",
        state: "Solid",
        mass: "178.49",

        introduction:
            "Hafnium is a dense, corrosion-resistant transition metal containing 72 protons. It belongs to Group 4 and commonly forms Hf⁴⁺ ions. Hafnium is chemically similar to zirconium but absorbs neutrons more strongly.",

        everyday:
            "Hafnium is used in nuclear reactor control components, high-temperature alloys, and advanced semiconductor manufacturing.",

        compounds: [
            [
                "HfO₂ — Hafnium dioxide",
                "An oxide used as a high-permittivity dielectric material in advanced electronic devices."
            ],
            [
                "HfCl₄ — Hafnium tetrachloride",
                "A compound used in hafnium production and chemical synthesis."
            ]
        ],

        reactions: [
            {
                title: "Hafnium oxidation",
                equation: "Hf + O₂ → HfO₂",
                explanation:
                    "Hafnium combines with oxygen to form hafnium dioxide.",
                conditions:
                    "Oxidation is promoted by heating; surface oxide layers contribute to corrosion resistance."
            }
        ],

        related: [40, 22, 8],
        source: "https://periodic-table.rsc.org/element/72/hafnium"
    },

    // TANTALUM — 73
    73: {
        category: "Transition metal",
        state: "Solid",
        mass: "180.948",

        introduction:
            "Tantalum is a dense, highly corrosion-resistant transition metal containing 73 protons. It belongs to Group 5 and commonly forms compounds in the +5 oxidation state.",

        everyday:
            "Tantalum is used in electronic capacitors, medical implants, chemical-processing equipment, and high-temperature industrial materials.",

        compounds: [
            [
                "Ta₂O₅ — Tantalum(V) oxide",
                "An oxide used in electronic capacitors and optical materials."
            ],
            [
                "TaCl₅ — Tantalum(V) chloride",
                "A compound used in specialized chemical synthesis."
            ]
        ],

        reactions: [
            {
                title: "Tantalum oxidation",
                equation: "4Ta + 5O₂ → 2Ta₂O₅",
                explanation:
                    "Tantalum combines with oxygen to form tantalum(V) oxide.",
                conditions:
                    "Heating promotes oxidation. A protective oxide layer contributes to corrosion resistance."
            }
        ],

        related: [41, 72, 8],
        source: "https://periodic-table.rsc.org/element/73/tantalum"
    },

    // TUNGSTEN — 74
    74: {
        category: "Transition metal",
        state: "Solid",
        mass: "183.84",

        introduction:
            "Tungsten is a dense, extremely heat-resistant transition metal containing 74 protons. It belongs to Group 6 and has the highest melting point of all pure metals.",

        everyday:
            "Tungsten is used in cutting tools, high-temperature equipment, electrical contacts, and specialized industrial materials. Tungsten carbide is particularly important in hard-wearing tools.",

        compounds: [
            [
                "WO₃ — Tungsten(VI) oxide",
                "An oxide used in specialized electronic and optical materials."
            ],
            [
                "WC — Tungsten carbide",
                "An extremely hard material used in cutting tools and wear-resistant components."
            ]
        ],

        reactions: [
            {
                title: "Tungsten oxidation",
                equation: "2W + 3O₂ → 2WO₃",
                explanation:
                    "Tungsten combines with oxygen to form tungsten(VI) oxide.",
                conditions:
                    "Significant oxidation occurs when tungsten is heated in air."
            }
        ],

        related: [42, 6, 8],
        source: "https://periodic-table.rsc.org/element/74/tungsten"
    },

    // RHENIUM — 75
    75: {
        category: "Transition metal",
        state: "Solid",
        mass: "186.207",

        introduction:
            "Rhenium is a dense, silvery transition metal containing 75 protons. It belongs to Group 7 and has one of the highest melting points of any element. Rhenium is rare in Earth's crust.",

        everyday:
            "Rhenium is used in high-temperature superalloys for jet engines, industrial catalysts, and specialized electrical components.",

        compounds: [
            [
                "Re₂O₇ — Rhenium(VII) oxide",
                "An oxide containing rhenium in the +7 oxidation state."
            ],
            [
                "NH₄ReO₄ — Ammonium perrhenate",
                "A compound used in rhenium refining and chemical manufacturing."
            ]
        ],

        reactions: [
            {
                title: "Rhenium oxidation",
                equation: "4Re + 7O₂ → 2Re₂O₇",
                explanation:
                    "Rhenium combines with oxygen to form rhenium(VII) oxide.",
                conditions:
                    "Oxidation depends on elevated temperatures and suitable oxygen conditions."
            }
        ],

        related: [43, 74, 76],
        source: "https://periodic-table.rsc.org/element/75/rhenium"
    },

    // =========================================
    // BATCH 5 — ELEMENTS 76–100
    // =========================================

    // OSMIUM — 76
    76: {
        category: "Transition metal",
        state: "Solid",
        mass: "190.23",

        introduction:
            "Osmium is a dense, bluish-white transition metal containing 76 protons. It belongs to Group 8 and is one of the densest naturally occurring elements. Osmium is part of the platinum-group metals and is known for its hardness and high melting point.",

        everyday:
            "Osmium is used in specialized metal alloys, precision instruments, electrical contacts, and scientific research. Its extreme density and hardness make it useful in applications requiring durable materials.",

        compounds: [
            [
                "OsO₄ — Osmium tetroxide",
                "A highly toxic and volatile compound used in specialized microscopy and chemical research."
            ],
            [
                "OsO₂ — Osmium dioxide",
                "An oxide studied for its electrical and chemical properties."
            ]
        ],

        reactions: [
            {
                title: "Osmium oxidation",
                equation: "Os + 2O₂ → OsO₄",
                explanation:
                    "Osmium can react with oxygen to produce osmium tetroxide.",
                conditions:
                    "Osmium tetroxide is extremely hazardous. This reaction is presented for educational purposes only."
            }
        ],

        related: [44, 77, 78],
        source: "https://periodic-table.rsc.org/element/76/osmium"
    },

    // IRIDIUM — 77
    77: {
        category: "Transition metal",
        state: "Solid",
        mass: "192.217",

        introduction:
            "Iridium is a dense, silvery-white transition metal containing 77 protons. It belongs to Group 9 and is one of the most corrosion-resistant metals known. Iridium is a member of the platinum group.",

        everyday:
            "Iridium is used in spark plugs, specialized electrical contacts, high-temperature equipment, and scientific instruments. An iridium-rich geological layer is associated with the asteroid impact linked to the extinction of non-avian dinosaurs.",

        compounds: [
            [
                "IrO₂ — Iridium dioxide",
                "A conductive oxide used in specialized electrochemical applications."
            ],
            [
                "IrCl₃ — Iridium(III) chloride",
                "A compound used in chemical research and catalyst preparation."
            ]
        ],

        reactions: [
            {
                title: "Iridium oxidation",
                equation: "Ir + O₂ → IrO₂",
                explanation:
                    "Iridium can combine with oxygen to form iridium dioxide.",
                conditions:
                    "Oxide formation requires suitable reaction conditions because iridium is highly resistant to corrosion."
            }
        ],

        related: [45, 76, 78],
        source: "https://periodic-table.rsc.org/element/77/iridium"
    },

    // PLATINUM — 78
    78: {
        category: "Transition metal",
        state: "Solid",
        mass: "195.084",

        introduction:
            "Platinum is a dense, silvery-white transition metal containing 78 protons. It belongs to Group 10 and is highly resistant to corrosion. Platinum is particularly valuable because of its catalytic properties.",

        everyday:
            "Platinum is used in vehicle catalytic converters, jewelry, laboratory equipment, fuel cells, and certain cancer-treatment medications.",

        compounds: [
            [
                "PtCl₂ — Platinum(II) chloride",
                "A compound used in specialized chemical synthesis."
            ],
            [
                "PtCl₄ — Platinum(IV) chloride",
                "A compound used in chemical research and catalyst preparation."
            ]
        ],

        reactions: [
            {
                title: "Platinum-catalyzed hydrogen oxidation",
                equation: "2H₂ + O₂ → 2H₂O",
                explanation:
                    "Platinum can act as a catalyst, helping hydrogen and oxygen react to form water without being consumed in the overall reaction.",
                conditions:
                    "Hydrogen and oxygen mixtures can be explosive. This reaction requires controlled conditions."
            }
        ],

        related: [1, 8, 46],
        source: "https://periodic-table.rsc.org/element/78/platinum"
    },

    // GOLD — 79
    79: {
        category: "Transition metal",
        state: "Solid",
        mass: "196.967",

        introduction:
            "Gold is a dense, yellow transition metal containing 79 protons. It belongs to Group 11 and is highly resistant to oxidation and corrosion. Gold is also extremely malleable and ductile.",

        everyday:
            "Gold is used in jewelry, electronics, dentistry, specialized medical technologies, and financial reserves. Its excellent electrical conductivity and corrosion resistance make it valuable in electronic connectors.",

        compounds: [
            [
                "AuCl₃ — Gold(III) chloride",
                "A gold compound used in chemical research and specialized manufacturing."
            ],
            [
                "Au₂O₃ — Gold(III) oxide",
                "An oxide containing gold in the +3 oxidation state."
            ]
        ],

        reactions: [
            {
                title: "Gold chloride formation",
                equation: "2Au + 3Cl₂ → 2AuCl₃",
                explanation:
                    "Gold can react with chlorine under suitable conditions to form gold(III) chloride.",
                conditions:
                    "Requires controlled conditions and involves toxic chlorine gas."
            }
        ],

        related: [29, 47, 78],
        source: "https://periodic-table.rsc.org/element/79/gold"
    },

    // MERCURY — 80
    80: {
        category: "Group 12 metal",
        state: "Liquid",
        mass: "200.592",

        introduction:
            "Mercury is a dense, silvery metal containing 80 protons. It belongs to Group 12 and is the only metallic element that is liquid at 20°C. Mercury commonly forms compounds in the +1 and +2 oxidation states.",

        everyday:
            "Mercury was historically used in thermometers, barometers, electrical switches, and fluorescent lighting. Many uses have been reduced or restricted because mercury and certain mercury compounds are toxic.",

        compounds: [
            [
                "HgO — Mercury(II) oxide",
                "A compound that decomposes when heated, releasing oxygen."
            ],
            [
                "HgS — Mercury(II) sulfide",
                "A compound found naturally in the mineral cinnabar."
            ]
        ],

        reactions: [
            {
                title: "Mercury(II) oxide decomposition",
                equation: "2HgO → 2Hg + O₂",
                explanation:
                    "Mercury(II) oxide can decompose when heated, producing mercury and oxygen gas.",
                conditions:
                    "Heating mercury compounds can release toxic mercury vapor. This is for conceptual study only."
            }
        ],

        related: [30, 48, 8],
        source: "https://periodic-table.rsc.org/element/80/mercury"
    },

    // THALLIUM — 81
    81: {
        category: "Post-transition metal",
        state: "Solid",
        mass: "204.38",

        introduction:
            "Thallium is a soft, gray post-transition metal containing 81 protons. It belongs to Group 13 and commonly forms compounds in the +1 and +3 oxidation states. Thallium is highly toxic.",

        everyday:
            "Thallium compounds are used in specialized electronics, optical materials, and certain medical imaging applications. Its toxicity severely limits ordinary commercial uses.",

        compounds: [
            [
                "TlCl — Thallium(I) chloride",
                "A toxic ionic compound containing thallium and chloride ions."
            ],
            [
                "Tl₂O — Thallium(I) oxide",
                "An oxide containing thallium in the +1 oxidation state."
            ]
        ],

        reactions: [
            {
                title: "Thallium oxidation",
                equation: "4Tl + O₂ → 2Tl₂O",
                explanation:
                    "Thallium can combine with oxygen to form thallium(I) oxide.",
                conditions:
                    "Thallium and its compounds are highly toxic and require specialized handling."
            }
        ],

        related: [49, 82, 13],
        source: "https://periodic-table.rsc.org/element/81/thallium"
    },

    // LEAD — 82
    82: {
        category: "Post-transition metal",
        state: "Solid",
        mass: "207.2",

        introduction:
            "Lead is a dense, soft, bluish-gray post-transition metal containing 82 protons. It belongs to Group 14 and commonly forms compounds in the +2 and +4 oxidation states. Lead has been used by humans since ancient times.",

        everyday:
            "Lead is used in lead-acid batteries, radiation shielding, and specialized industrial equipment. Its historical use in paint, plumbing, and gasoline caused widespread environmental contamination and serious health problems.",

        compounds: [
            [
                "PbO — Lead(II) oxide",
                "An oxide used in certain industrial materials."
            ],
            [
                "PbSO₄ — Lead(II) sulfate",
                "A compound involved in the chemistry of lead-acid batteries."
            ]
        ],

        reactions: [
            {
                title: "Lead oxidation",
                equation: "2Pb + O₂ → 2PbO",
                explanation:
                    "Lead can combine with oxygen to form lead(II) oxide.",
                conditions:
                    "Heating promotes oxidation. Lead dust and fumes are hazardous."
            }
        ],

        related: [50, 80, 8],
        source: "https://periodic-table.rsc.org/element/82/lead"
    },

    // BISMUTH — 83
    83: {
        category: "Post-transition metal",
        state: "Solid",
        mass: "208.980",

        introduction:
            "Bismuth is a brittle, silvery metal containing 83 protons. It belongs to Group 15 and commonly forms Bi³⁺ ions. Bismuth has relatively low toxicity compared with several neighboring heavy metals.",

        everyday:
            "Bismuth compounds are used in certain stomach medications, cosmetics, low-melting alloys, and specialized industrial materials. Bismuth crystals can develop colorful oxide coatings.",

        compounds: [
            [
                "Bi₂O₃ — Bismuth(III) oxide",
                "An oxide used in ceramics, electronics, and specialized materials."
            ],
            [
                "BiCl₃ — Bismuth(III) chloride",
                "A compound used in chemical research."
            ]
        ],

        reactions: [
            {
                title: "Bismuth oxidation",
                equation: "4Bi + 3O₂ → 2Bi₂O₃",
                explanation:
                    "Bismuth combines with oxygen to form bismuth(III) oxide.",
                conditions:
                    "Heating promotes oxidation."
            }
        ],

        related: [51, 82, 8],
        source: "https://periodic-table.rsc.org/element/83/bismuth"
    },

    // POLONIUM — 84
    84: {
        category: "Post-transition metal",
        state: "Solid",
        mass: "[209]",

        introduction:
            "Polonium is an extremely radioactive element containing 84 protons. It belongs to Group 16 and was discovered by Marie and Pierre Curie in 1898. Polonium has no stable isotopes.",

        everyday:
            "Polonium has been used in highly specialized antistatic devices and scientific research. Its intense radioactivity makes it unsuitable for ordinary applications.",

        compounds: [
            [
                "PoO₂ — Polonium dioxide",
                "A radioactive oxide containing polonium and oxygen."
            ],
            [
                "PoCl₂ — Polonium(II) chloride",
                "A radioactive compound studied in specialized nuclear chemistry."
            ]
        ],

        reactions: [
            {
                title: "Polonium-210 alpha decay",
                equation: "²¹⁰Po → ²⁰⁶Pb + ⁴He",
                explanation:
                    "Polonium-210 undergoes alpha decay, producing lead-206 and an alpha particle, which is a helium-4 nucleus.",
                conditions:
                    "This is a nuclear transformation rather than a chemical reaction."
            }
        ],

        related: [82, 86, 2],
        source: "https://periodic-table.rsc.org/element/84/polonium"
    },

    // ASTATINE — 85
    85: {
        category: "Halogen",
        state: "Solid (predicted)",
        mass: "[210]",

        introduction:
            "Astatine is an extremely rare radioactive element containing 85 protons. It belongs to Group 17 and is generally classified as a halogen. Because only tiny quantities exist at any given time, many of its physical properties remain uncertain.",

        everyday:
            "Astatine-211 is being investigated for targeted alpha-particle cancer therapy. Its short half-life and limited availability make research challenging.",

        compounds: [
            [
                "At⁻ — Astatide ion",
                "A negatively charged ion of astatine studied in specialized radiochemistry."
            ],
            [
                "HAt — Hydrogen astatide",
                "A hydrogen-astatine compound studied through theoretical and limited experimental chemistry."
            ]
        ],

        reactions: [
            {
                title: "Astatine-211 alpha decay",
                equation: "²¹¹At → ²⁰⁷Bi + ⁴He",
                explanation:
                    "Astatine-211 can undergo alpha decay to produce bismuth-207 and an alpha particle. It also has an electron-capture decay pathway.",
                conditions:
                    "This is a nuclear process rather than a chemical reaction."
            }
        ],

        related: [53, 84, 86],
        source: "https://periodic-table.rsc.org/element/85/astatine"
    },

    // RADON — 86
    86: {
        category: "Noble gas",
        state: "Gas",
        mass: "[222]",

        introduction:
            "Radon is a radioactive noble gas containing 86 protons. It belongs to Group 18 and is produced naturally through radioactive decay in uranium and thorium decay chains.",

        everyday:
            "Radon can accumulate inside buildings after entering through soil and foundation openings. Long-term exposure to elevated indoor radon concentrations increases lung cancer risk.",

        compounds: [
            [
                "Rn — Elemental radon",
                "Radon normally exists as individual atoms. Its radioactivity limits the study of its chemical compounds."
            ]
        ],

        reactions: [
            {
                title: "Radon-222 alpha decay",
                equation: "²²²Rn → ²¹⁸Po + ⁴He",
                explanation:
                    "Radon-222 undergoes alpha decay to form polonium-218 and an alpha particle.",
                conditions:
                    "This is a radioactive nuclear transformation, not a chemical reaction."
            }
        ],

        related: [84, 88, 92],
        source: "https://periodic-table.rsc.org/element/86/radon"
    },

    // FRANCIUM — 87
    87: {
        category: "Alkali metal",
        state: "Solid (predicted)",
        mass: "[223]",

        introduction:
            "Francium is an extremely rare radioactive alkali metal containing 87 protons. It belongs to Group 1 and has one electron in its outermost shell. Francium has no stable isotopes.",

        everyday:
            "Francium has no significant commercial applications because it is extremely rare and highly radioactive. Scientists study it to investigate atomic structure and fundamental physical interactions.",

        compounds: [
            [
                "Fr⁺ — Francium ion",
                "A positively charged francium ion expected from its Group 1 electron configuration."
            ]
        ],

        reactions: [
            {
                title: "Francium-223 beta decay",
                equation: "²²³Fr → ²²³Ra + β⁻ + ν̅",
                explanation:
                    "Francium-223 can undergo beta-minus decay to form radium-223, emitting an electron and an electron antineutrino.",
                conditions:
                    "This is a nuclear process rather than a chemical reaction."
            }
        ],

        related: [55, 88, 37],
        source: "https://periodic-table.rsc.org/element/87/francium"
    },

    // RADIUM — 88
    88: {
        category: "Alkaline earth metal",
        state: "Solid",
        mass: "[226]",

        introduction:
            "Radium is a radioactive alkaline earth metal containing 88 protons. It belongs to Group 2 and commonly forms Ra²⁺ ions. Radium was discovered by Marie and Pierre Curie in 1898.",

        everyday:
            "Radium was historically used in luminous paints and certain medical treatments. Many historical applications were abandoned after the serious health hazards of radiation exposure became understood.",

        compounds: [
            [
                "RaCl₂ — Radium chloride",
                "A radioactive ionic compound containing radium and chloride ions."
            ],
            [
                "RaSO₄ — Radium sulfate",
                "A poorly soluble radioactive sulfate compound."
            ]
        ],

        reactions: [
            {
                title: "Radium-226 alpha decay",
                equation: "²²⁶Ra → ²²²Rn + ⁴He",
                explanation:
                    "Radium-226 undergoes alpha decay to form radon-222 and an alpha particle.",
                conditions:
                    "This is a nuclear transformation rather than a chemical reaction."
            }
        ],

        related: [56, 86, 92],
        source: "https://periodic-table.rsc.org/element/88/radium"
    },

    // ACTINIUM — 89
    89: {
        category: "Actinide",
        state: "Solid",
        mass: "[227]",

        introduction:
            "Actinium is a radioactive metallic element containing 89 protons. It is commonly grouped with the actinides and typically forms Ac³⁺ ions. Actinium was discovered near the end of the nineteenth century.",

        everyday:
            "Actinium-225 is being investigated and used in specialized targeted alpha therapies for cancer. Actinium is also important in nuclear chemistry research.",

        compounds: [
            [
                "AcCl₃ — Actinium(III) chloride",
                "A radioactive compound containing actinium and chlorine."
            ],
            [
                "Ac₂O₃ — Actinium(III) oxide",
                "A radioactive oxide containing actinium and oxygen."
            ]
        ],

        reactions: [
            {
                title: "Actinium-227 beta decay",
                equation: "²²⁷Ac → ²²⁷Th + β⁻ + ν̅",
                explanation:
                    "Actinium-227 primarily undergoes beta-minus decay to thorium-227.",
                conditions:
                    "This is a nuclear transformation rather than a chemical reaction."
            }
        ],

        related: [88, 90, 91],
        source: "https://periodic-table.rsc.org/element/89/actinium"
    },

    // THORIUM — 90
    90: {
        category: "Actinide",
        state: "Solid",
        mass: "232.038",

        introduction:
            "Thorium is a naturally occurring radioactive actinide containing 90 protons. It commonly forms Th⁴⁺ ions and is more abundant in Earth's crust than uranium.",

        everyday:
            "Thorium has been studied as a potential nuclear fuel and has historical applications in specialized industrial materials. Its radioactivity requires careful handling and environmental controls.",

        compounds: [
            [
                "ThO₂ — Thorium dioxide",
                "A heat-resistant radioactive oxide studied in nuclear and ceramic materials."
            ],
            [
                "ThCl₄ — Thorium(IV) chloride",
                "A compound used in specialized chemical research."
            ]
        ],

        reactions: [
            {
                title: "Thorium-232 alpha decay",
                equation: "²³²Th → ²²⁸Ra + ⁴He",
                explanation:
                    "Thorium-232 undergoes alpha decay to form radium-228 and an alpha particle.",
                conditions:
                    "This is a nuclear transformation rather than a chemical reaction."
            }
        ],

        related: [88, 89, 92],
        source: "https://periodic-table.rsc.org/element/90/thorium"
    },

    // PROTACTINIUM — 91
    91: {
        category: "Actinide",
        state: "Solid",
        mass: "231.036",

        introduction:
            "Protactinium is a rare radioactive actinide containing 91 protons. It commonly forms compounds in the +5 oxidation state and occurs naturally in small quantities within uranium decay chains.",

        everyday:
            "Protactinium has no significant commercial applications because of its rarity, radioactivity, and difficult handling requirements. It is primarily used in specialized nuclear research.",

        compounds: [
            [
                "Pa₂O₅ — Protactinium(V) oxide",
                "A radioactive oxide containing protactinium and oxygen."
            ],
            [
                "PaCl₅ — Protactinium(V) chloride",
                "A compound studied in specialized actinide chemistry."
            ]
        ],

        reactions: [
            {
                title: "Protactinium-231 alpha decay",
                equation: "²³¹Pa → ²²⁷Ac + ⁴He",
                explanation:
                    "Protactinium-231 undergoes alpha decay to form actinium-227 and an alpha particle.",
                conditions:
                    "This is a nuclear process rather than a chemical reaction."
            }
        ],

        related: [89, 90, 92],
        source: "https://periodic-table.rsc.org/element/91/protactinium"
    },

    // URANIUM — 92
    92: {
        category: "Actinide",
        state: "Solid",
        mass: "238.029",

        introduction:
            "Uranium is a dense, naturally occurring radioactive actinide containing 92 protons. It commonly forms compounds in several oxidation states, including +4 and +6. Uranium has several naturally occurring isotopes, including uranium-238 and uranium-235.",

        everyday:
            "Uranium is used as fuel in nuclear power generation. Uranium compounds are also important in geology, radiometric dating, and nuclear chemistry research.",

        compounds: [
            [
                "UO₂ — Uranium dioxide",
                "A radioactive oxide commonly used in nuclear reactor fuel."
            ],
            [
                "U₃O₈ — Triuranium octoxide",
                "A uranium oxide important in uranium processing and nuclear materials."
            ]
        ],

        reactions: [
            {
                title: "Uranium-238 alpha decay",
                equation: "²³⁸U → ²³⁴Th + ⁴He",
                explanation:
                    "Uranium-238 undergoes alpha decay to form thorium-234 and an alpha particle.",
                conditions:
                    "This is a nuclear transformation rather than a chemical reaction."
            }
        ],

        related: [90, 91, 93],
        source: "https://periodic-table.rsc.org/element/92/uranium"
    },

    // NEPTUNIUM — 93
    93: {
        category: "Actinide",
        state: "Solid",
        mass: "[237]",

        introduction:
            "Neptunium is a radioactive actinide containing 93 protons. It was the first transuranium element discovered, meaning it has a higher atomic number than uranium. Neptunium forms compounds in several oxidation states.",

        everyday:
            "Neptunium is primarily used in nuclear research. Certain isotopes can be produced in nuclear reactors, and neptunium is important in studies of radioactive waste and nuclear materials.",

        compounds: [
            [
                "NpO₂ — Neptunium dioxide",
                "A radioactive oxide studied in nuclear materials research."
            ],
            [
                "NpF₆ — Neptunium hexafluoride",
                "A volatile radioactive compound studied in specialized nuclear chemistry."
            ]
        ],

        reactions: [
            {
                title: "Neptunium-237 alpha decay",
                equation: "²³⁷Np → ²³³Pa + ⁴He",
                explanation:
                    "Neptunium-237 undergoes alpha decay to form protactinium-233 and an alpha particle.",
                conditions:
                    "This is a nuclear transformation rather than a chemical reaction."
            }
        ],

        related: [91, 92, 94],
        source: "https://periodic-table.rsc.org/element/93/neptunium"
    },

    // PLUTONIUM — 94
    94: {
        category: "Actinide",
        state: "Solid",
        mass: "[244]",

        introduction:
            "Plutonium is a radioactive actinide containing 94 protons. It was discovered in 1940 and is a transuranium element. Plutonium has complex chemical behavior and several solid forms with different physical properties.",

        everyday:
            "Plutonium-238 is used in radioisotope power systems for spacecraft and remote scientific equipment. Plutonium is also important in nuclear energy and nuclear materials research.",

        compounds: [
            [
                "PuO₂ — Plutonium dioxide",
                "A radioactive oxide used in specialized nuclear materials."
            ],
            [
                "PuF₄ — Plutonium tetrafluoride",
                "A radioactive compound studied in specialized nuclear chemistry."
            ]
        ],

        reactions: [
            {
                title: "Plutonium-238 alpha decay",
                equation: "²³⁸Pu → ²³⁴U + ⁴He",
                explanation:
                    "Plutonium-238 undergoes alpha decay to form uranium-234 and an alpha particle.",
                conditions:
                    "This is a nuclear transformation rather than a chemical reaction."
            }
        ],

        related: [92, 93, 95],
        source: "https://periodic-table.rsc.org/element/94/plutonium"
    },

    // AMERICIUM — 95
    95: {
        category: "Actinide",
        state: "Solid",
        mass: "[243]",

        introduction:
            "Americium is a radioactive actinide containing 95 protons. It is a synthetic transuranium element and commonly forms compounds in the +3 oxidation state.",

        everyday:
            "Americium-241 is used in certain ionization smoke detectors. Its radiation helps detect smoke particles inside the detector's sensing chamber.",

        compounds: [
            [
                "AmO₂ — Americium dioxide",
                "A radioactive oxide containing americium and oxygen."
            ],
            [
                "AmCl₃ — Americium(III) chloride",
                "A compound studied in actinide chemistry."
            ]
        ],

        reactions: [
            {
                title: "Americium-241 alpha decay",
                equation: "²⁴¹Am → ²³⁷Np + ⁴He",
                explanation:
                    "Americium-241 undergoes alpha decay to form neptunium-237 and an alpha particle.",
                conditions:
                    "This is a nuclear transformation rather than a chemical reaction."
            }
        ],

        related: [93, 94, 96],
        source: "https://periodic-table.rsc.org/element/95/americium"
    },

    // CURIUM — 96
    96: {
        category: "Actinide",
        state: "Solid",
        mass: "[247]",

        introduction:
            "Curium is a radioactive actinide containing 96 protons. It was named in honor of Marie and Pierre Curie. Curium is produced artificially and has no stable isotopes.",

        everyday:
            "Curium is primarily used in scientific research, including studies of radioactive materials and the production of heavier elements.",

        compounds: [
            [
                "Cm₂O₃ — Curium(III) oxide",
                "A radioactive oxide studied in actinide chemistry."
            ],
            [
                "CmCl₃ — Curium(III) chloride",
                "A compound used in specialized radioactive materials research."
            ]
        ],

        reactions: [
            {
                title: "Curium-244 alpha decay",
                equation: "²⁴⁴Cm → ²⁴⁰Pu + ⁴He",
                explanation:
                    "Curium-244 undergoes alpha decay to form plutonium-240 and an alpha particle.",
                conditions:
                    "This is a nuclear transformation rather than a chemical reaction."
            }
        ],

        related: [94, 95, 97],
        source: "https://periodic-table.rsc.org/element/96/curium"
    },

    // BERKELIUM — 97
    97: {
        category: "Actinide",
        state: "Solid",
        mass: "[247]",

        introduction:
            "Berkelium is a radioactive synthetic actinide containing 97 protons. It was named after Berkeley, California, where it was discovered in 1949.",

        everyday:
            "Berkelium has no ordinary commercial applications. It is primarily used in nuclear research and in experiments designed to create heavier elements.",

        compounds: [
            [
                "BkCl₃ — Berkelium(III) chloride",
                "A radioactive compound studied in actinide chemistry."
            ],
            [
                "BkO₂ — Berkelium(IV) oxide",
                "An oxide containing berkelium in the +4 oxidation state."
            ]
        ],

        reactions: [
            {
                title: "Berkelium-249 beta decay",
                equation: "²⁴⁹Bk → ²⁴⁹Cf + β⁻ + ν̅",
                explanation:
                    "Berkelium-249 undergoes beta-minus decay to form californium-249.",
                conditions:
                    "This is a nuclear transformation rather than a chemical reaction."
            }
        ],

        related: [96, 98, 95],
        source: "https://periodic-table.rsc.org/element/97/berkelium"
    },

    // CALIFORNIUM — 98
    98: {
        category: "Actinide",
        state: "Solid",
        mass: "[251]",

        introduction:
            "Californium is a radioactive synthetic actinide containing 98 protons. It was first produced in 1950 and was named after California.",

        everyday:
            "Californium-252 is used as a neutron source in certain industrial measurements, scientific research, and specialized nuclear applications.",

        compounds: [
            [
                "Cf₂O₃ — Californium(III) oxide",
                "A radioactive oxide containing californium and oxygen."
            ],
            [
                "CfCl₃ — Californium(III) chloride",
                "A compound studied in specialized actinide chemistry."
            ]
        ],

        reactions: [
            {
                title: "Californium-252 spontaneous fission",
                equation: "²⁵²Cf → fission fragments + neutrons + energy",
                explanation:
                    "Californium-252 can undergo spontaneous fission, splitting into lighter nuclei and releasing neutrons and energy.",
                conditions:
                    "This is a nuclear process rather than a chemical reaction. The fission products vary."
            }
        ],

        related: [97, 99, 96],
        source: "https://periodic-table.rsc.org/element/98/californium"
    },

    // EINSTEINIUM — 99
    99: {
        category: "Actinide",
        state: "Solid",
        mass: "[252]",

        introduction:
            "Einsteinium is a radioactive synthetic actinide containing 99 protons. It was named in honor of Albert Einstein and was first identified in debris from a thermonuclear test in 1952.",

        everyday:
            "Einsteinium has no ordinary commercial applications. It is used in specialized scientific research, particularly investigations of heavy-element chemistry.",

        compounds: [
            [
                "EsCl₃ — Einsteinium(III) chloride",
                "A radioactive compound studied in actinide chemistry."
            ],
            [
                "Es₂O₃ — Einsteinium(III) oxide",
                "An oxide containing einsteinium and oxygen."
            ]
        ],

        reactions: [
            {
                title: "Einsteinium-253 alpha decay",
                equation: "²⁵³Es → ²⁴⁹Bk + ⁴He",
                explanation:
                    "Einsteinium-253 undergoes alpha decay to form berkelium-249 and an alpha particle.",
                conditions:
                    "This is a nuclear transformation rather than a chemical reaction."
            }
        ],

        related: [97, 98, 100],
        source: "https://periodic-table.rsc.org/element/99/einsteinium"
    },

    // FERMIUM — 100
    100: {
        category: "Actinide",
        state: "Solid (expected)",
        mass: "[257]",

        introduction:
            "Fermium is a radioactive synthetic actinide containing 100 protons. It was named in honor of physicist Enrico Fermi. Fermium was first identified in debris from a thermonuclear test in 1952.",

        everyday:
            "Fermium has no commercial applications because only extremely small quantities can be produced. Scientists study it to better understand nuclear stability and the chemistry of heavy elements.",

        compounds: [
            [
                "Fm³⁺ — Fermium(III) ion",
                "A positively charged fermium ion observed in specialized chemical studies."
            ]
        ],

        reactions: [
            {
                title: "Fermium-257 alpha decay",
                equation: "²⁵⁷Fm → ²⁵³Cf + ⁴He",
                explanation:
                    "Fermium-257 can undergo alpha decay to form californium-253 and an alpha particle.",
                conditions:
                    "This is a nuclear transformation rather than a chemical reaction."
            }
        ],

        related: [98, 99, 101],
        source: "https://periodic-table.rsc.org/element/100/fermium"
    },

    // =========================================
    // FINAL BATCH — ELEMENTS 101–118
    // =========================================

    // MENDELEVIUM — 101
    101: {
        category: "Actinide",
        state: "Solid (expected)",
        mass: "[258]",

        introduction:
            "Mendelevium is a synthetic radioactive element containing 101 protons. It belongs to the actinide series and was first produced in 1955. Named in honor of Dmitri Mendeleev, the scientist who developed the foundations of the modern periodic table, mendelevium is produced in extremely small quantities. Its chemistry has been studied primarily through individual atoms and trace amounts of radioactive material.",

        everyday:
            "Mendelevium has no commercial or household applications. Scientists study it to understand the behavior of heavy elements, radioactive decay, and the chemical properties of the actinide series.",

        compounds: [
            [
                "Md³⁺ — Mendelevium(III) ion",
                "A positively charged mendelevium ion that has lost three electrons. The +3 oxidation state is important in mendelevium chemistry."
            ],
            [
                "Md²⁺ — Mendelevium(II) ion",
                "A positively charged mendelevium ion that has lost two electrons. Its existence demonstrates that heavy actinides can exhibit multiple oxidation states."
            ]
        ],

        reactions: [
            {
                title: "Mendelevium-258 alpha decay",
                equation: "²⁵⁸Md → ²⁵⁴Es + ⁴He",
                explanation:
                    "Mendelevium-258 can undergo alpha decay, producing einsteinium-254 and an alpha particle. The alpha particle contains two protons and two neutrons.",
                conditions:
                    "This is a nuclear transformation rather than a chemical reaction. Mendelevium-258 also has a spontaneous-fission decay pathway."
            }
        ],

        related: [100, 102, 99],
        source: "https://periodic-table.rsc.org/element/101/mendelevium"
    },

    // NOBELIUM — 102
    102: {
        category: "Actinide",
        state: "Solid (expected)",
        mass: "[259]",

        introduction:
            "Nobelium is a synthetic radioactive element containing 102 protons. It belongs to the actinide series and was named in honor of Alfred Nobel. Nobelium is unusual among actinides because its +2 oxidation state is particularly stable in aqueous solution. Its properties have been investigated using extremely small quantities of radioactive atoms.",

        everyday:
            "Nobelium has no commercial applications. Its primary scientific value comes from research into heavy-element chemistry, electron configurations, and nuclear stability.",

        compounds: [
            [
                "No²⁺ — Nobelium(II) ion",
                "A positively charged nobelium ion that has lost two electrons. This is a particularly stable oxidation state for nobelium in aqueous solution."
            ],
            [
                "No³⁺ — Nobelium(III) ion",
                "A positively charged nobelium ion containing nobelium in the +3 oxidation state."
            ]
        ],

        reactions: [
            {
                title: "Nobelium-259 alpha decay",
                equation: "²⁵⁹No → ²⁵⁵Fm + ⁴He",
                explanation:
                    "Nobelium-259 undergoes alpha decay to produce fermium-255 and an alpha particle.",
                conditions:
                    "This is a radioactive nuclear transformation. Nobelium isotopes require specialized research facilities."
            }
        ],

        related: [100, 101, 103],
        source: "https://periodic-table.rsc.org/element/102/nobelium"
    },

    // LAWRENCIUM — 103
    103: {
        category: "Actinide",
        state: "Solid (expected)",
        mass: "[266]",

        introduction:
            "Lawrencium is a synthetic radioactive element containing 103 protons. It is commonly classified as the final actinide and was named after physicist Ernest Lawrence. Lawrencium has an unusual predicted electron configuration, reflecting the increasing importance of relativistic effects in very heavy atoms.",

        everyday:
            "Lawrencium has no practical commercial applications. Scientists investigate its atomic structure, radioactive decay, and chemical behavior to better understand the boundaries of the periodic table.",

        compounds: [
            [
                "Lr³⁺ — Lawrencium(III) ion",
                "A positively charged lawrencium ion that has lost three electrons. Experimental studies support the importance of the +3 oxidation state."
            ]
        ],

        reactions: [
            {
                title: "Lawrencium-266 alpha decay",
                equation: "²⁶⁶Lr → ²⁶²Md + ⁴He",
                explanation:
                    "Lawrencium-266 can undergo alpha decay to produce mendelevium-262 and an alpha particle.",
                conditions:
                    "This is a nuclear transformation rather than a chemical reaction."
            }
        ],

        related: [101, 102, 104],
        source: "https://periodic-table.rsc.org/element/103/lawrencium"
    },

    // RUTHERFORDIUM — 104
    104: {
        category: "Transition metal (predicted)",
        state: "Solid (predicted)",
        mass: "[267]",

        introduction:
            "Rutherfordium is a synthetic radioactive element containing 104 protons. It belongs to Group 4 and was named in honor of physicist Ernest Rutherford. Rutherfordium is the first transactinide element, meaning it comes immediately after the actinide series. Its chemical behavior resembles that of zirconium and hafnium.",

        everyday:
            "Rutherfordium has no commercial applications. It is produced in particle accelerators and studied to investigate the chemistry of superheavy elements and the influence of relativistic effects on atomic structure.",

        compounds: [
            [
                "RfCl₄ — Rutherfordium tetrachloride",
                "A compound investigated through specialized gas-phase chemistry experiments involving very small numbers of atoms."
            ],
            [
                "RfBr₄ — Rutherfordium tetrabromide",
                "A rutherfordium halide studied through comparisons with other Group 4 elements."
            ]
        ],

        reactions: [
            {
                title: "Rutherfordium-267 alpha decay",
                equation: "²⁶⁷Rf → ²⁶³No + ⁴He",
                explanation:
                    "Rutherfordium-267 can undergo alpha decay, producing nobelium-263 and an alpha particle.",
                conditions:
                    "This is a nuclear transformation. Rutherfordium isotopes are radioactive and short-lived."
            }
        ],

        related: [22, 40, 72],
        source: "https://periodic-table.rsc.org/element/104/rutherfordium"
    },

    // DUBNIUM — 105
    105: {
        category: "Transition metal (predicted)",
        state: "Solid (predicted)",
        mass: "[268]",

        introduction:
            "Dubnium is a synthetic radioactive element containing 105 protons. It belongs to Group 5 and was named after Dubna, Russia, an important center of nuclear research. Dubnium is expected to share chemical characteristics with niobium and tantalum, although relativistic effects can influence its behavior.",

        everyday:
            "Dubnium has no commercial applications. Its scientific importance lies in studying the chemical properties of superheavy elements and testing predictions about periodic trends.",

        compounds: [
            [
                "DbCl₅ — Dubnium(V) chloride",
                "A proposed Group 5 chloride illustrating dubnium's expected +5 oxidation state."
            ],
            [
                "DbOCl₃ — Dubnium oxychloride",
                "A compound investigated in theoretical and specialized superheavy-element chemistry."
            ]
        ],

        reactions: [
            {
                title: "Dubnium-268 alpha decay",
                equation: "²⁶⁸Db → ²⁶⁴Lr + ⁴He",
                explanation:
                    "Dubnium-268 can undergo alpha decay to produce lawrencium-264 and an alpha particle.",
                conditions:
                    "This is a nuclear transformation rather than a chemical reaction."
            }
        ],

        related: [23, 41, 73],
        source: "https://periodic-table.rsc.org/element/105/dubnium"
    },

    // SEABORGIUM — 106
    106: {
        category: "Transition metal (predicted)",
        state: "Solid (predicted)",
        mass: "[269]",

        introduction:
            "Seaborgium is a synthetic radioactive element containing 106 protons. It belongs to Group 6 and was named in honor of nuclear chemist Glenn T. Seaborg. Experiments indicate that seaborgium behaves chemically like other Group 6 elements, including molybdenum and tungsten.",

        everyday:
            "Seaborgium has no commercial applications. Scientists use it to investigate the chemical behavior of superheavy elements and test theoretical models of atomic structure.",

        compounds: [
            [
                "SgO₂Cl₂ — Seaborgium oxychloride",
                "A volatile compound studied in gas-phase experiments involving individual seaborgium atoms."
            ],
            [
                "SgO₂(OH)₂ — Seaborgium oxo-hydroxide",
                "A chemical species investigated in studies of seaborgium's Group 6 behavior."
            ]
        ],

        reactions: [
            {
                title: "Seaborgium-269 alpha decay",
                equation: "²⁶⁹Sg → ²⁶⁵Rf + ⁴He",
                explanation:
                    "Seaborgium-269 can undergo alpha decay to produce rutherfordium-265 and an alpha particle.",
                conditions:
                    "This is a radioactive nuclear transformation."
            }
        ],

        related: [24, 42, 74],
        source: "https://periodic-table.rsc.org/element/106/seaborgium"
    },

    // BOHRIUM — 107
    107: {
        category: "Transition metal (predicted)",
        state: "Solid (predicted)",
        mass: "[270]",

        introduction:
            "Bohrium is a synthetic radioactive element containing 107 protons. It belongs to Group 7 and was named after physicist Niels Bohr. Bohrium is expected to resemble technetium and rhenium in its chemical behavior. Only small numbers of bohrium atoms have been produced.",

        everyday:
            "Bohrium has no commercial applications. It is studied in nuclear physics and superheavy-element chemistry to investigate atomic structure and radioactive stability.",

        compounds: [
            [
                "BhO₃Cl — Bohrium oxychloride",
                "A volatile chemical species investigated in specialized experiments involving bohrium atoms."
            ],
            [
                "Bh₂O₇ — Bohrium(VII) oxide",
                "A theoretical oxide reflecting the possible +7 oxidation state of bohrium."
            ]
        ],

        reactions: [
            {
                title: "Bohrium-270 alpha decay",
                equation: "²⁷⁰Bh → ²⁶⁶Db + ⁴He",
                explanation:
                    "Bohrium-270 can undergo alpha decay to produce dubnium-266 and an alpha particle.",
                conditions:
                    "This is a nuclear transformation rather than a chemical reaction."
            }
        ],

        related: [25, 43, 75],
        source: "https://periodic-table.rsc.org/element/107/bohrium"
    },

    // HASSIUM — 108
    108: {
        category: "Transition metal (predicted)",
        state: "Solid (predicted)",
        mass: "[269]",

        introduction:
            "Hassium is a synthetic radioactive element containing 108 protons. It belongs to Group 8 and was named after the German state of Hesse. Hassium is expected to share chemical characteristics with osmium. Experiments involving hassium have provided evidence of its ability to form volatile oxide compounds.",

        everyday:
            "Hassium has no commercial applications. Scientists study it to understand how superheavy elements behave and how relativistic effects influence their chemistry.",

        compounds: [
            [
                "HsO₄ — Hassium tetroxide",
                "A volatile oxide detected through specialized experiments involving extremely small numbers of hassium atoms."
            ]
        ],

        reactions: [
            {
                title: "Hassium tetroxide formation",
                equation: "Hs + 2O₂ → HsO₄",
                explanation:
                    "Hassium can combine with oxygen to form hassium tetroxide, demonstrating chemical similarities with osmium.",
                conditions:
                    "This reaction has been investigated using individual atoms in specialized nuclear chemistry facilities."
            }
        ],

        related: [26, 44, 76],
        source: "https://periodic-table.rsc.org/element/108/hassium"
    },

    // MEITNERIUM — 109
    109: {
        category: "Transition metal (predicted)",
        state: "Solid (predicted)",
        mass: "[278]",

        introduction:
            "Meitnerium is a synthetic radioactive element containing 109 protons. It belongs to Group 9 and was named in honor of physicist Lise Meitner, whose work contributed to the understanding of nuclear fission. Its chemical properties are largely predicted from its position in the periodic table.",

        everyday:
            "Meitnerium has no commercial applications. Only a very small number of atoms have been produced, making direct chemical investigation extremely difficult.",

        compounds: [
            [
                "Mt — Elemental meitnerium",
                "Meitnerium has been produced as individual radioactive atoms. Its compounds have not been characterized through ordinary bulk chemical experiments."
            ],
            [
                "MtF₃ — Predicted meitnerium fluoride",
                "A hypothetical fluoride used to illustrate possible chemical bonding. Its existence has not been experimentally established."
            ]
        ],

        reactions: [
            {
                title: "Meitnerium-278 alpha decay",
                equation: "²⁷⁸Mt → ²⁷⁴Bh + ⁴He",
                explanation:
                    "Meitnerium-278 can undergo alpha decay to produce bohrium-274 and an alpha particle.",
                conditions:
                    "This is a nuclear transformation rather than a chemical reaction."
            }
        ],

        related: [27, 45, 77],
        source: "https://periodic-table.rsc.org/element/109/meitnerium"
    },

    // DARMSTADTIUM — 110
    110: {
        category: "Transition metal (predicted)",
        state: "Solid (predicted)",
        mass: "[281]",

        introduction:
            "Darmstadtium is a synthetic radioactive element containing 110 protons. It belongs to Group 10 and was named after Darmstadt, Germany, where it was first produced. Its chemical properties are expected to resemble those of nickel, palladium, and platinum, although relativistic effects may produce important differences.",

        everyday:
            "Darmstadtium has no commercial applications. It is studied in nuclear physics to understand the stability and properties of superheavy atomic nuclei.",

        compounds: [
            [
                "Ds — Elemental darmstadtium",
                "Darmstadtium has been produced in extremely small quantities, preventing conventional chemical studies."
            ],
            [
                "DsF₄ — Predicted darmstadtium fluoride",
                "A hypothetical compound illustrating possible bonding behavior. It has not been experimentally confirmed."
            ]
        ],

        reactions: [
            {
                title: "Darmstadtium-281 alpha decay",
                equation: "²⁸¹Ds → ²⁷⁷Hs + ⁴He",
                explanation:
                    "Darmstadtium-281 can undergo alpha decay to produce hassium-277 and an alpha particle.",
                conditions:
                    "This is a nuclear transformation. Darmstadtium isotopes are highly radioactive."
            }
        ],

        related: [28, 46, 78],
        source: "https://periodic-table.rsc.org/element/110/darmstadtium"
    },

    // ROENTGENIUM — 111
    111: {
        category: "Transition metal (predicted)",
        state: "Solid (predicted)",
        mass: "[282]",

        introduction:
            "Roentgenium is a synthetic radioactive element containing 111 protons. It belongs to Group 11 and was named after physicist Wilhelm Conrad Röntgen, who discovered X-rays. Roentgenium is expected to share some chemical characteristics with copper, silver, and gold.",

        everyday:
            "Roentgenium has no commercial applications. It is produced in specialized particle accelerators and studied to investigate the structure and stability of superheavy nuclei.",

        compounds: [
            [
                "Rg — Elemental roentgenium",
                "Roentgenium has only been produced in extremely small quantities."
            ],
            [
                "RgCl — Predicted roentgenium chloride",
                "A hypothetical compound illustrating possible Group 11 chemistry. Its existence has not been experimentally established."
            ]
        ],

        reactions: [
            {
                title: "Roentgenium-282 alpha decay",
                equation: "²⁸²Rg → ²⁷⁸Mt + ⁴He",
                explanation:
                    "Roentgenium-282 can undergo alpha decay to produce meitnerium-278 and an alpha particle.",
                conditions:
                    "This is a nuclear transformation rather than a chemical reaction."
            }
        ],

        related: [29, 47, 79],
        source: "https://periodic-table.rsc.org/element/111/roentgenium"
    },

    // COPERNICIUM — 112
    112: {
        category: "Group 12 metal (predicted)",
        state: "Liquid or gas (predicted)",
        mass: "[285]",

        introduction:
            "Copernicium is a synthetic radioactive element containing 112 protons. It belongs to Group 12 and was named after astronomer Nicolaus Copernicus. Relativistic effects are predicted to strongly influence its electron configuration and chemical behavior. Its physical state under ordinary conditions has not been experimentally established.",

        everyday:
            "Copernicium has no commercial applications. Scientists investigate its properties to understand how very heavy elements differ from lighter members of the same periodic-table group.",

        compounds: [
            [
                "Cn — Elemental copernicium",
                "Copernicium has been investigated through experiments involving individual atoms."
            ],
            [
                "CnF₂ — Predicted copernicium fluoride",
                "A hypothetical compound used in theoretical studies of copernicium bonding."
            ]
        ],

        reactions: [
            {
                title: "Copernicium-285 alpha decay",
                equation: "²⁸⁵Cn → ²⁸¹Ds + ⁴He",
                explanation:
                    "Copernicium-285 can undergo alpha decay to produce darmstadtium-281 and an alpha particle.",
                conditions:
                    "This is a nuclear transformation rather than a chemical reaction."
            }
        ],

        related: [30, 48, 80],
        source: "https://periodic-table.rsc.org/element/112/copernicium"
    },

    // NIHONIUM — 113
    113: {
        category: "Post-transition metal (predicted)",
        state: "Solid (predicted)",
        mass: "[286]",

        introduction:
            "Nihonium is a synthetic radioactive element containing 113 protons. It belongs to Group 13 and was named after Japan, where its discovery was confirmed through research at the RIKEN institute. Nihonium is expected to display unusual chemical behavior because of relativistic effects in its electrons.",

        everyday:
            "Nihonium has no commercial applications. It is studied in nuclear physics and theoretical chemistry to investigate the properties of superheavy elements.",

        compounds: [
            [
                "Nh — Elemental nihonium",
                "Nihonium has been produced as individual radioactive atoms."
            ],
            [
                "NhCl — Predicted nihonium chloride",
                "A hypothetical compound illustrating possible chemical bonding. Its existence has not been experimentally confirmed."
            ]
        ],

        reactions: [
            {
                title: "Nihonium-286 alpha decay",
                equation: "²⁸⁶Nh → ²⁸²Rg + ⁴He",
                explanation:
                    "Nihonium-286 can undergo alpha decay to produce roentgenium-282 and an alpha particle.",
                conditions:
                    "This is a nuclear transformation rather than a chemical reaction."
            }
        ],

        related: [13, 31, 81],
        source: "https://periodic-table.rsc.org/element/113/nihonium"
    },

    // FLEROVIUM — 114
    114: {
        category: "Post-transition metal (predicted)",
        state: "Solid or gas (predicted)",
        mass: "[289]",

        introduction:
            "Flerovium is a synthetic radioactive element containing 114 protons. It belongs to Group 14 and was named in honor of the Flerov Laboratory of Nuclear Reactions. Relativistic effects may make flerovium less chemically reactive than lighter members of its group. Its bulk physical properties remain uncertain.",

        everyday:
            "Flerovium has no commercial applications. Its scientific importance lies in research into superheavy elements and the possibility of an island of increased nuclear stability.",

        compounds: [
            [
                "Fl — Elemental flerovium",
                "Flerovium has been studied using individual atoms and specialized chemical detection systems."
            ],
            [
                "FlF₂ — Predicted flerovium fluoride",
                "A hypothetical compound investigated in theoretical chemistry."
            ]
        ],

        reactions: [
            {
                title: "Flerovium-289 alpha decay",
                equation: "²⁸⁹Fl → ²⁸⁵Cn + ⁴He",
                explanation:
                    "Flerovium-289 can undergo alpha decay to produce copernicium-285 and an alpha particle.",
                conditions:
                    "This is a nuclear transformation rather than a chemical reaction."
            }
        ],

        related: [14, 32, 82],
        source: "https://periodic-table.rsc.org/element/114/flerovium"
    },

    // MOSCOVIUM — 115
    115: {
        category: "Post-transition metal (predicted)",
        state: "Solid (predicted)",
        mass: "[290]",

        introduction:
            "Moscovium is a synthetic radioactive element containing 115 protons. It belongs to Group 15 and was named after the Moscow region of Russia. Moscovium has only been produced in extremely small quantities, and most of its chemical properties are predicted rather than experimentally established.",

        everyday:
            "Moscovium has no commercial applications. It is studied in nuclear physics to investigate the properties of superheavy nuclei and radioactive decay chains.",

        compounds: [
            [
                "Mc — Elemental moscovium",
                "Moscovium has been produced as individual radioactive atoms."
            ],
            [
                "McCl₃ — Predicted moscovium(III) chloride",
                "A hypothetical compound illustrating a possible +3 oxidation state."
            ]
        ],

        reactions: [
            {
                title: "Moscovium-290 alpha decay",
                equation: "²⁹⁰Mc → ²⁸⁶Nh + ⁴He",
                explanation:
                    "Moscovium-290 can undergo alpha decay to produce nihonium-286 and an alpha particle.",
                conditions:
                    "This is a nuclear transformation rather than a chemical reaction."
            }
        ],

        related: [15, 33, 83],
        source: "https://periodic-table.rsc.org/element/115/moscovium"
    },

    // LIVERMORIUM — 116
    116: {
        category: "Post-transition metal (predicted)",
        state: "Solid (predicted)",
        mass: "[293]",

        introduction:
            "Livermorium is a synthetic radioactive element containing 116 protons. It belongs to Group 16 and was named after Lawrence Livermore National Laboratory in California. Livermorium is expected to share some chemical characteristics with polonium, although relativistic effects may substantially influence its behavior.",

        everyday:
            "Livermorium has no commercial applications. It is produced in specialized nuclear research facilities and studied to investigate superheavy-element stability.",

        compounds: [
            [
                "Lv — Elemental livermorium",
                "Livermorium has been produced in extremely small quantities."
            ],
            [
                "LvF₂ — Predicted livermorium fluoride",
                "A hypothetical compound illustrating possible chemical bonding."
            ]
        ],

        reactions: [
            {
                title: "Livermorium-293 alpha decay",
                equation: "²⁹³Lv → ²⁸⁹Fl + ⁴He",
                explanation:
                    "Livermorium-293 can undergo alpha decay to produce flerovium-289 and an alpha particle.",
                conditions:
                    "This is a nuclear transformation rather than a chemical reaction."
            }
        ],

        related: [16, 34, 84],
        source: "https://periodic-table.rsc.org/element/116/livermorium"
    },

    // TENNESSINE — 117
    117: {
        category: "Halogen (predicted)",
        state: "Solid (predicted)",
        mass: "[294]",

        introduction:
            "Tennessine is a synthetic radioactive element containing 117 protons. It belongs to Group 17 and was named in recognition of scientific contributions from institutions in Tennessee. Although it occupies the halogen group, relativistic effects may make its chemistry substantially different from that of fluorine, chlorine, bromine, and iodine.",

        everyday:
            "Tennessine has no commercial applications. It is studied in nuclear physics to understand the stability and decay of extremely heavy atomic nuclei.",

        compounds: [
            [
                "Ts — Elemental tennessine",
                "Tennessine has been produced as individual radioactive atoms."
            ],
            [
                "HTs — Predicted hydrogen tennesside",
                "A hypothetical compound illustrating possible bonding between hydrogen and tennessine."
            ]
        ],

        reactions: [
            {
                title: "Tennessine-294 alpha decay",
                equation: "²⁹⁴Ts → ²⁹⁰Mc + ⁴He",
                explanation:
                    "Tennessine-294 can undergo alpha decay to produce moscovium-290 and an alpha particle.",
                conditions:
                    "This is a nuclear transformation rather than a chemical reaction."
            }
        ],

        related: [9, 17, 85],
        source: "https://periodic-table.rsc.org/element/117/tennessine"
    },

    // OGANESSON — 118
    118: {
        category: "Noble gas group (predicted behavior)",
        state: "Solid (predicted)",
        mass: "[294]",

        introduction:
            "Oganesson is a synthetic radioactive element containing 118 protons. It belongs to Group 18 and is currently the highest atomic-number element officially recognized on the periodic table. It was named in honor of nuclear physicist Yuri Oganessian. Although oganesson occupies the noble-gas group, theoretical studies suggest that relativistic effects may give it properties very different from those of lighter noble gases.",

        everyday:
            "Oganesson has no commercial applications. Only a few atoms have been produced, and its extremely short lifetime makes experimental investigation difficult. Oganesson is important in research into nuclear stability, relativistic atomic physics, and the possible limits of the periodic table.",

        compounds: [
            [
                "Og — Elemental oganesson",
                "Oganesson has been produced as individual radioactive atoms. Its bulk physical properties have not been experimentally measured."
            ],
            [
                "OgF₂ — Predicted oganesson difluoride",
                "A hypothetical compound considered in theoretical chemistry. It has not been experimentally produced."
            ]
        ],

        reactions: [
            {
                title: "Oganesson-294 alpha decay",
                equation: "²⁹⁴Og → ²⁹⁰Lv + ⁴He",
                explanation:
                    "Oganesson-294 undergoes alpha decay to produce livermorium-290 and an alpha particle. Its half-life is less than one millisecond.",
                conditions:
                    "This is a nuclear transformation rather than a chemical reaction. Oganesson can only be studied in specialized nuclear research facilities."
            }
        ],

        related: [2, 54, 86],
        source: "https://periodic-table.rsc.org/element/118/oganesson"
    }

};