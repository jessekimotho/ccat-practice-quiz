const questions = [
    // MATH QUESTIONS
    {
        category: "Math",
        question: "What is 37 × 24?",
        options: ["868", "888", "908", "928"],
        correct: 1,
        explanation: "37 × 24 = 37 × (20 + 4) = 740 + 148 = 888"
    },
    {
        category: "Math",
        question: "If 3x + 7 = 22, what is x?",
        options: ["3", "4", "5", "6"],
        correct: 2,
        explanation: "3x + 7 = 22 → 3x = 15 → x = 5"
    },
    {
        category: "Math",
        question: "What is 15% of 240?",
        options: ["30", "36", "42", "48"],
        correct: 1,
        explanation: "15% of 240 = 0.15 × 240 = 36"
    },
    {
        category: "Math",
        question: "A shirt costs $40 after a 20% discount. What was the original price?",
        options: ["$48", "$50", "$52", "$56"],
        correct: 1,
        explanation: "If $40 is 80% of original, then original = 40 ÷ 0.8 = $50"
    },
    {
        category: "Math",
        question: "What is the next number in the sequence: 2, 6, 18, 54, ___?",
        options: ["108", "162", "216", "324"],
        correct: 1,
        explanation: "Each number is multiplied by 3: 54 × 3 = 162"
    },
    {
        category: "Math",
        question: "If a car travels 180 miles in 3 hours, what is its average speed?",
        options: ["50 mph", "55 mph", "60 mph", "65 mph"],
        correct: 2,
        explanation: "Speed = Distance ÷ Time = 180 ÷ 3 = 60 mph"
    },
    {
        category: "Math",
        question: "What is the value of: 8² - 4 × 3?",
        options: ["48", "52", "56", "64"],
        correct: 1,
        explanation: "8² - 4 × 3 = 64 - 12 = 52"
    },
    {
        category: "Math",
        question: "A box contains 12 red, 8 blue, and 5 green marbles. What is the probability of randomly selecting a blue marble?",
        options: ["8/25", "1/3", "8/20", "2/5"],
        correct: 0,
        explanation: "Total marbles = 25. Probability of blue = 8/25"
    },
    {
        category: "Math",
        question: "If x² = 144, what is x?",
        options: ["11", "12", "13", "14"],
        correct: 1,
        explanation: "√144 = 12"
    },
    {
        category: "Math",
        question: "What is 2/5 + 3/10?",
        options: ["1/2", "5/10", "7/10", "1"],
        correct: 2,
        explanation: "2/5 + 3/10 = 4/10 + 3/10 = 7/10"
    },
    {
        category: "Math",
        question: "A rectangle has a length of 12 and width of 8. What is its area?",
        options: ["20", "40", "80", "96"],
        correct: 3,
        explanation: "Area = length × width = 12 × 8 = 96"
    },
    {
        category: "Math",
        question: "What is the sum of the first 10 positive integers?",
        options: ["45", "50", "55", "60"],
        correct: 2,
        explanation: "Sum = n(n+1)/2 = 10(11)/2 = 55"
    },
    {
        category: "Math",
        question: "If 5y - 3 = 27, what is y?",
        options: ["4", "5", "6", "7"],
        correct: 2,
        explanation: "5y - 3 = 27 → 5y = 30 → y = 6"
    },
    {
        category: "Math",
        question: "What is 125% of 80?",
        options: ["90", "100", "110", "120"],
        correct: 1,
        explanation: "125% of 80 = 1.25 × 80 = 100"
    },
    {
        category: "Math",
        question: "A number is increased by 25% and then decreased by 20%. What is the net change?",
        options: ["No change", "5% increase", "5% decrease", "10% increase"],
        correct: 1,
        explanation: "1.25 × 0.8 = 1.0, so net increase is 0% (wait, recalculate: 1.25 × 0.8 = 1.0, so no net change). Actually: if original is 100, after 25% increase = 125, after 20% decrease = 100. So no net change."
    },
    
    // VERBAL QUESTIONS
    {
        category: "Verbal",
        question: "Choose the word that is most similar to: ABUNDANT",
        options: ["Scarce", "Plentiful", "Rare", "Sparse"],
        correct: 1,
        explanation: "Abundant means existing in large quantities; plentiful is a synonym."
    },
    {
        category: "Verbal",
        question: "Choose the word that is most opposite to: BENEFICIAL",
        options: ["Helpful", "Advantageous", "Harmful", "Useful"],
        correct: 2,
        explanation: "Beneficial means helpful or advantageous; harmful is the opposite."
    },
    {
        category: "Verbal",
        question: "Complete the analogy: DOG is to PUPPY as CAT is to ___",
        options: ["Kitten", "Cub", "Pup", "Baby"],
        correct: 0,
        explanation: "A puppy is a young dog; a kitten is a young cat."
    },
    {
        category: "Verbal",
        question: "Which word does not belong?",
        options: ["Apple", "Orange", "Carrot", "Banana"],
        correct: 2,
        explanation: "Carrot is a vegetable; the others are fruits."
    },
    {
        category: "Verbal",
        question: "Choose the correct spelling:",
        options: ["Recieve", "Receive", "Receve", "Recive"],
        correct: 1,
        explanation: "The correct spelling is 'Receive' (i before e except after c)."
    },
    {
        category: "Verbal",
        question: "What is the meaning of: 'Bite the bullet'?",
        options: ["Eat quickly", "Face a difficult situation", "Be aggressive", "Chew food"],
        correct: 1,
        explanation: "'Bite the bullet' means to endure a painful or difficult situation with courage."
    },
    {
        category: "Verbal",
        question: "Complete the analogy: LIBRARY is to BOOK as GARDEN is to ___",
        options: ["Flower", "Plant", "Tree", "Leaf"],
        correct: 1,
        explanation: "A library contains books; a garden contains plants."
    },
    {
        category: "Verbal",
        question: "Choose the word that is most similar to: Meticulous",
        options: ["Careless", "Detailed", "Quick", "Vague"],
        correct: 1,
        explanation: "Meticulous means showing great attention to detail; detailed is similar."
    },
    {
        category: "Verbal",
        question: "Which word is a synonym for 'Happy'?",
        options: ["Sad", "Joyful", "Angry", "Tired"],
        correct: 1,
        explanation: "Joyful means feeling happy; it's a synonym."
    },
    {
        category: "Verbal",
        question: "Complete the analogy: AUTHOR is to BOOK as ARTIST is to ___",
        options: ["Gallery", "Painting", "Museum", "Canvas"],
        correct: 1,
        explanation: "An author creates books; an artist creates paintings."
    },
    {
        category: "Verbal",
        question: "Choose the word that is most opposite to: GENEROUS",
        options: ["Kind", "Stingy", "Wealthy", "Giving"],
        correct: 1,
        explanation: "Generous means willing to give; stingy means unwilling to give."
    },
    {
        category: "Verbal",
        question: "What is the plural of 'Child'?",
        options: ["Childs", "Children", "Childes", "Childern"],
        correct: 1,
        explanation: "The plural of child is children (irregular plural)."
    },
    {
        category: "Verbal",
        question: "Which sentence is grammatically correct?",
        options: ["He don't like it", "He doesn't likes it", "He doesn't like it", "He don't likes it"],
        correct: 2,
        explanation: "'He doesn't like it' is grammatically correct."
    },
    {
        category: "Verbal",
        question: "Choose the word that best completes: The decision was ___.",
        options: ["Irreversible", "Irreversable", "Irreversibel", "Irreversibul"],
        correct: 0,
        explanation: "The correct spelling is 'irreversible'."
    },
    {
        category: "Verbal",
        question: "What does 'Barking up the wrong tree' mean?",
        options: ["Being loud", "Pursuing a mistaken line of thought", "Climbing trees", "Being aggressive"],
        correct: 1,
        explanation: "It means to pursue a mistaken line of thought or approach."
    },

    // LOGIC QUESTIONS
    {
        category: "Logic",
        question: "If all A are B, and all B are C, then:",
        options: ["All C are A", "All A are C", "Some C are A", "None of the above"],
        correct: 1,
        explanation: "If all A are B and all B are C, then all A must be C."
    },
    {
        category: "Logic",
        question: "What comes next in the pattern: A, C, F, J, ___?",
        options: ["M", "N", "O", "P"],
        correct: 2,
        explanation: "Pattern: +2, +3, +4, so next is +5: J + 5 = O"
    },
    {
        category: "Logic",
        question: "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?",
        options: ["5 minutes", "20 minutes", "100 minutes", "500 minutes"],
        correct: 0,
        explanation: "Each machine makes 1 widget in 5 minutes. 100 machines make 100 widgets in 5 minutes."
    },
    {
        category: "Logic",
        question: "Which number doesn't belong: 2, 4, 6, 9, 10?",
        options: ["2", "4", "6", "9"],
        correct: 3,
        explanation: "9 is the only odd number; all others are even."
    },
    {
        category: "Logic",
        question: "If yesterday was Friday, what day is it 3 days from tomorrow?",
        options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        correct: 1,
        explanation: "Yesterday = Friday → Today = Saturday → Tomorrow = Sunday → 3 days from Sunday = Wednesday"
    },
    {
        category: "Logic",
        question: "Complete the sequence: 1, 4, 9, 16, 25, ___",
        options: ["30", "35", "36", "49"],
        correct: 2,
        explanation: "These are perfect squares: 1², 2², 3², 4², 5², so next is 6² = 36"
    },
    {
        category: "Logic",
        question: "If A > B, B > C, and C > D, which is definitely true?",
        options: ["D > A", "A > D", "A = D", "B > D"],
        correct: 1,
        explanation: "If A > B > C > D, then A > D is definitely true."
    },
    {
        category: "Logic",
        question: "What is the next number: 3, 6, 12, 24, 48, ___?",
        options: ["72", "96", "100", "120"],
        correct: 1,
        explanation: "Each number doubles: 48 × 2 = 96"
    },
    {
        category: "Logic",
        question: "If all roses are flowers and some flowers are red, which must be true?",
        options: ["All roses are red", "Some roses are red", "No roses are red", "None of the above"],
        correct: 3,
        explanation: "We cannot determine if any roses are red from these statements."
    },
    {
        category: "Logic",
        question: "Which pattern completes: AB, BC, CD, DE, ___?",
        options: ["EF", "EG", "FG", "EE"],
        correct: 0,
        explanation: "Each pair moves one letter forward: D-E, so next is E-F"
    },
    {
        category: "Logic",
        question: "If you rearrange 'CIFAIPC', you would have the name of a:",
        options: ["City", "Animal", "Ocean", "Country"],
        correct: 2,
        explanation: "CIFAIPC rearranged is PACIFIC, which is an ocean."
    },
    {
        category: "Logic",
        question: "What is the missing number: 2, 5, 10, 17, 26, ___?",
        options: ["35", "37", "39", "41"],
        correct: 1,
        explanation: "Pattern: +3, +5, +7, +9, so next is +11: 26 + 11 = 37"
    },
    {
        category: "Logic",
        question: "If today is Monday, what day will it be 100 days from now?",
        options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        correct: 2,
        explanation: "100 ÷ 7 = 14 weeks and 2 days. Monday + 2 = Wednesday"
    },
    {
        category: "Logic",
        question: "Which shape doesn't belong: Circle, Square, Triangle, Cube?",
        options: ["Circle", "Square", "Triangle", "Cube"],
        correct: 3,
        explanation: "Cube is 3D; the others are 2D shapes."
    },
    {
        category: "Logic",
        question: "If some cats are black and all black things are dark, then:",
        options: ["All cats are dark", "Some cats are dark", "No cats are dark", "All dark things are cats"],
        correct: 1,
        explanation: "Some cats are black, and all black things are dark, so some cats are dark."
    },

    // SPATIAL REASONING
    {
        category: "Spatial",
        question: "If you rotate a square 45 degrees, what shape does it most resemble?",
        options: ["Circle", "Triangle", "Diamond", "Pentagon"],
        correct: 2,
        explanation: "A square rotated 45 degrees looks like a diamond shape."
    },
    {
        category: "Spatial",
        question: "How many sides does a hexagon have?",
        options: ["5", "6", "7", "8"],
        correct: 1,
        explanation: "A hexagon has 6 sides (hex = 6)."
    },
    {
        category: "Spatial",
        question: "If you fold a square piece of paper in half diagonally, what shape do you get?",
        options: ["Rectangle", "Triangle", "Smaller square", "Trapezoid"],
        correct: 1,
        explanation: "Folding a square diagonally creates a triangle."
    },
    {
        category: "Spatial",
        question: "Which 3D shape has 6 identical square faces?",
        options: ["Sphere", "Cylinder", "Cube", "Pyramid"],
        correct: 2,
        explanation: "A cube has 6 identical square faces."
    },
    {
        category: "Spatial",
        question: "How many degrees are in a right angle?",
        options: ["45°", "90°", "180°", "360°"],
        correct: 1,
        explanation: "A right angle is 90 degrees."
    },
    {
        category: "Spatial",
        question: "If a clock shows 3:00, what is the angle between the hour and minute hands?",
        options: ["60°", "90°", "120°", "180°"],
        correct: 1,
        explanation: "At 3:00, the hour hand is at 3, minute at 12. Each hour = 30°, so 3 hours = 90°."
    },
    {
        category: "Spatial",
        question: "What is the maximum number of 90° angles a quadrilateral can have?",
        options: ["2", "3", "4", "5"],
        correct: 2,
        explanation: "A quadrilateral can have up to 4 right angles (a rectangle)."
    },
    {
        category: "Spatial",
        question: "If you cut a cube in half diagonally, what shape is the cross-section?",
        options: ["Square", "Rectangle", "Triangle", "Hexagon"],
        correct: 1,
        explanation: "A diagonal cut through a cube creates a rectangular cross-section."
    },
    {
        category: "Spatial",
        question: "How many lines of symmetry does an equilateral triangle have?",
        options: ["1", "2", "3", "4"],
        correct: 2,
        explanation: "An equilateral triangle has 3 lines of symmetry."
    },
    {
        category: "Spatial",
        question: "What is the sum of interior angles of a pentagon?",
        options: ["360°", "540°", "720°", "900°"],
        correct: 1,
        explanation: "Sum = (n-2) × 180° = (5-2) × 180° = 540°"
    },
    {
        category: "Spatial",
        question: "If you unfold a cube, how many squares do you see in the net?",
        options: ["4", "5", "6", "8"],
        correct: 2,
        explanation: "A cube has 6 faces, so its net has 6 squares."
    },
    {
        category: "Spatial",
        question: "What is the shape of a stop sign?",
        options: ["Hexagon", "Octagon", "Pentagon", "Circle"],
        correct: 1,
        explanation: "A stop sign is an octagon (8 sides)."
    },
    {
        category: "Spatial",
        question: "How many vertices does a triangular pyramid have?",
        options: ["3", "4", "5", "6"],
        correct: 1,
        explanation: "A triangular pyramid (tetrahedron) has 4 vertices."
    },
    {
        category: "Spatial",
        question: "If a rectangle has length 8 and width 4, what is its perimeter?",
        options: ["12", "16", "24", "32"],
        correct: 2,
        explanation: "Perimeter = 2(length + width) = 2(8 + 4) = 24"
    },
    {
        category: "Spatial",
        question: "What is the area of a triangle with base 10 and height 6?",
        options: ["30", "60", "16", "36"],
        correct: 0,
        explanation: "Area = (base × height) / 2 = (10 × 6) / 2 = 30"
    }
];
