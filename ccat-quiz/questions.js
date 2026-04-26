const questions = [
    // MATH QUESTIONS (1-20)
    {
        type: "Math",
        question: "If 3x + 7 = 22, what is x?",
        options: ["3", "5", "7", "9"],
        correct: 1
    },
    {
        type: "Math",
        question: "What is 15% of 200?",
        options: ["20", "25", "30", "35"],
        correct: 2
    },
    {
        type: "Math",
        question: "A shirt costs $45 after a 25% discount. What was the original price?",
        options: ["$56.25", "$60", "$65", "$70"],
        correct: 1
    },
    {
        type: "Math",
        question: "If a train travels 120 miles in 2 hours, what is its average speed?",
        options: ["50 mph", "55 mph", "60 mph", "65 mph"],
        correct: 2
    },
    {
        type: "Math",
        question: "What is the next number in the sequence: 2, 6, 12, 20, 30, ?",
        options: ["38", "40", "42", "44"],
        correct: 2
    },
    {
        type: "Math",
        question: "If 2/5 of a number is 18, what is the number?",
        options: ["36", "40", "45", "50"],
        correct: 2
    },
    {
        type: "Math",
        question: "What is 7² - 3²?",
        options: ["16", "32", "40", "58"],
        correct: 2
    },
    {
        type: "Math",
        question: "A rectangle has a length of 12 cm and width of 5 cm. What is its area?",
        options: ["34 cm²", "50 cm²", "60 cm²", "70 cm²"],
        correct: 2
    },
    {
        type: "Math",
        question: "If x/4 = 9, what is x?",
        options: ["32", "36", "40", "44"],
        correct: 1
    },
    {
        type: "Math",
        question: "What is 25% of 80?",
        options: ["15", "20", "25", "30"],
        correct: 1
    },
    {
        type: "Math",
        question: "If a product costs $120 and increases by 15%, what is the new price?",
        options: ["$135", "$138", "$140", "$145"],
        correct: 1
    },
    {
        type: "Math",
        question: "What is the value of 3 × (8 - 2) + 4?",
        options: ["18", "20", "22", "24"],
        correct: 2
    },
    {
        type: "Math",
        question: "A car travels 240 miles using 8 gallons of gas. What is the miles per gallon?",
        options: ["25", "28", "30", "32"],
        correct: 2
    },
    {
        type: "Math",
        question: "What is 3/4 + 1/2?",
        options: ["1/4", "1", "5/4", "3/2"],
        correct: 2
    },
    {
        type: "Math",
        question: "If 5y - 3 = 17, what is y?",
        options: ["2", "3", "4", "5"],
        correct: 2
    },
    {
        type: "Math",
        question: "What is 20% of 150?",
        options: ["25", "30", "35", "40"],
        correct: 1
    },
    {
        type: "Math",
        question: "A circle has a radius of 7. What is its diameter?",
        options: ["7", "14", "21", "28"],
        correct: 1
    },
    {
        type: "Math",
        question: "What is the next number: 1, 4, 9, 16, 25, ?",
        options: ["30", "32", "36", "40"],
        correct: 2
    },
    {
        type: "Math",
        question: "If 4x = 48, what is x/3?",
        options: ["2", "3", "4", "6"],
        correct: 2
    },
    {
        type: "Math",
        question: "What is 8 × 7 - 15?",
        options: ["39", "41", "43", "45"],
        correct: 1
    },

    // LOGIC QUESTIONS (21-35)
    {
        type: "Logic",
        question: "All roses are flowers. Some flowers fade quickly. Therefore:",
        options: [
            "All roses fade quickly",
            "Some roses may fade quickly",
            "No roses fade quickly",
            "All flowers are roses"
        ],
        correct: 1
    },
    {
        type: "Logic",
        question: "If A is taller than B, and B is taller than C, then:",
        options: [
            "C is taller than A",
            "A is taller than C",
            "C is the same height as A",
            "Cannot be determined"
        ],
        correct: 1
    },
    {
        type: "Logic",
        question: "Which word does NOT belong: Dog, Cat, Bird, Table, Fish",
        options: ["Dog", "Cat", "Table", "Fish"],
        correct: 2
    },
    {
        type: "Logic",
        question: "Complete the pattern: AB, CD, EF, GH, ?",
        options: ["IJ", "HI", "JK", "IK"],
        correct: 0
    },
    {
        type: "Logic",
        question: "If all Bloops are Razzies and all Razzies are Lazzies, then all Bloops are definitely Lazzies.",
        options: ["True", "False", "Cannot be determined", "Sometimes true"],
        correct: 0
    },
    {
        type: "Logic",
        question: "Which number comes next: 3, 9, 27, 81, ?",
        options: ["162", "216", "243", "324"],
        correct: 2
    },
    {
        type: "Logic",
        question: "Book is to Reading as Fork is to:",
        options: ["Drawing", "Writing", "Eating", "Cooking"],
        correct: 2
    },
    {
        type: "Logic",
        question: "If some Xs are Ys, and all Ys are Zs, then:",
        options: [
            "All Xs are Zs",
            "Some Xs are Zs",
            "No Xs are Zs",
            "All Zs are Xs"
        ],
        correct: 1
    },
    {
        type: "Logic",
        question: "Which is the odd one out: 2, 5, 7, 11, 15",
        options: ["2", "5", "11", "15"],
        correct: 3
    },
    {
        type: "Logic",
        question: "If today is Monday, what day will it be 100 days from now?",
        options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        correct: 1
    },
    {
        type: "Logic",
        question: "Pen is to Write as Knife is to:",
        options: ["Sharp", "Cut", "Kitchen", "Metal"],
        correct: 1
    },
    {
        type: "Logic",
        question: "What comes next: Z, Y, X, W, ?",
        options: ["U", "V", "T", "S"],
        correct: 1
    },
    {
        type: "Logic",
        question: "If no A is B, and all C are B, then:",
        options: [
            "Some A are C",
            "No A is C",
            "All A are C",
            "Cannot be determined"
        ],
        correct: 1
    },
    {
        type: "Logic",
        question: "Which word is most opposite to 'Ancient'?",
        options: ["Old", "Modern", "Historic", "Antique"],
        correct: 1
    },
    {
        type: "Logic",
        question: "Complete: 1, 1, 2, 3, 5, 8, ?",
        options: ["11", "12", "13", "14"],
        correct: 2
    },

    // VERBAL REASONING (36-50)
    {
        type: "Verbal",
        question: "Which word is most similar to 'Eloquent'?",
        options: ["Articulate", "Silent", "Confused", "Angry"],
        correct: 0
    },
    {
        type: "Verbal",
        question: "Which word does NOT belong: Happy, Joyful, Elated, Sad, Cheerful",
        options: ["Happy", "Joyful", "Sad", "Cheerful"],
        correct: 2
    },
    {
        type: "Verbal",
        question: "'Benevolent' is most opposite to:",
        options: ["Kind", "Malevolent", "Generous", "Friendly"],
        correct: 1
    },
    {
        type: "Verbal",
        question: "Which word best completes: 'Hot is to Cold as Day is to ___'",
        options: ["Sun", "Night", "Light", "Morning"],
        correct: 1
    },
    {
        type: "Verbal",
        question: "Which word is most similar to 'Meticulous'?",
        options: ["Careless", "Careful", "Fast", "Lazy"],
        correct: 1
    },
    {
        type: "Verbal",
        question: "'Abundant' means:",
        options: ["Scarce", "Plentiful", "Empty", "Small"],
        correct: 1
    },
    {
        type: "Verbal",
        question: "Which word is most opposite to 'Transparent'?",
        options: ["Clear", "Opaque", "Visible", "Bright"],
        correct: 1
    },
    {
        type: "Verbal",
        question: "Doctor is to Hospital as Teacher is to:",
        options: ["Book", "Student", "School", "Lesson"],
        correct: 2
    },
    {
        type: "Verbal",
        question: "'Novice' is most opposite to:",
        options: ["Beginner", "Expert", "Student", "Amateur"],
        correct: 1
    },
    {
        type: "Verbal",
        question: "Which word best completes: 'Beginning is to End as Birth is to ___'",
        options: ["Life", "Death", "Baby", "Hospital"],
        correct: 1
    },
    {
        type: "Verbal",
        question: "'Frugal' means:",
        options: ["Wasteful", "Economical", "Rich", "Poor"],
        correct: 1
    },
    {
        type: "Verbal",
        question: "Which word is most similar to 'Diligent'?",
        options: ["Lazy", "Hardworking", "Slow", "Tired"],
        correct: 1
    },
    {
        type: "Verbal",
        question: "'Conceal' is most opposite to:",
        options: ["Hide", "Reveal", "Cover", "Bury"],
        correct: 1
    },
    {
        type: "Verbal",
        question: "Which word does NOT belong: Run, Jump, Skip, Think, Hop",
        options: ["Run", "Jump", "Think", "Hop"],
        correct: 2
    },
    {
        type: "Verbal",
        question: "'Enhance' means:",
        options: ["Improve", "Worsen", "Maintain", "Destroy"],
        correct: 0
    }
];
