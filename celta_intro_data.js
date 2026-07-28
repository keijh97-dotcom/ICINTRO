// ICINTRO CELTA Lesson Generator - 32 lessons for 16 units
const LESSONS = [];

// ===== LESSON 1.1: Verb Be =====
LESSONS.push({
  unit: 1, lesson: 1, title: "Verb Be", unitTitle: "It's nice to meet you.",
  discover: {
    text: "Maria: Hello! I am Maria. What is your name?\nJohn: Hi Maria. I am John. I am a new student.\nMaria: Nice to meet you, John! Are you from the US?\nJohn: No, I am not. I am from Brazil. And you?\nMaria: I am from Mexico. My friend Carlos is from Mexico too.\nJohn: Is he in our class?\nMaria: Yes, he is. We are in Room 5. The other students are from Japan and Colombia.\nJohn: That is great! It is a very international class.",
    questions: [
      "Look at the sentences with 'am', 'is', 'are'. Which one goes with 'I'?",
      "Which form (am/is/are) goes with 'he', 'she', 'it'?",
      "Which form goes with 'you', 'we', 'they'?",
      "Look at the questions: 'Are you a teacher?', 'Is she your sister?'. In questions, does 'am/is/are' come before or after the subject?",
      "Look at the negative: 'I am not'. Where does 'not' go in the sentence?"
    ]
  },
  rules: {
    tables: [
      { title: "Verb Be - Affirmative", headers: ["Pronoun", "Verb Be", "Contraction"], rows: [
        ["I", "am", "I'm"],
        ["You", "are", "You're"],
        ["He / She / It", "is", "He's / She's / It's"],
        ["We", "are", "We're"],
        ["They", "are", "They're"]
      ]},
      { title: "Verb Be - Negative", headers: ["Pronoun", "Full Form", "Contraction"], rows: [
        ["I", "am not", "I'm not"],
        ["You", "are not", "You aren't"],
        ["He / She / It", "is not", "He isn't / She isn't / It isn't"],
        ["We / They", "are not", "We aren't / They aren't"]
      ]},
      { title: "Verb Be - Questions", headers: ["Question", "Answer"], rows: [
        ["Am I late?", "Yes, you are. / No, you aren't."],
        ["Are you a student?", "Yes, I am. / No, I'm not."],
        ["Is he from Mexico?", "Yes, he is. / No, he isn't."],
        ["Are they here?", "Yes, they are. / No, they aren't."]
      ]}
    ],
    commonMistakes: [
      "I is a student (wrong) -> I am a student (correct). Always use 'am' with 'I'.",
      "She are nice (wrong) -> She is nice (correct). Use 'is' with he/she/it.",
      "You is from Brazil (wrong) -> You are from Brazil (correct). Use 'are' with 'you'."
    ],
    tip: "I -> am, he/she/it -> is, you/we/they -> are. Practice with your own information!"
  },
  practice: {
    fill: [
      { q: "I ___ a student.", a: "am" },
      { q: "She ___ from Mexico.", a: "is" },
      { q: "They ___ in my class.", a: "are" },
      { q: "He ___ not a teacher.", a: "is" },
      { q: "We ___ friends.", a: "are" },
      { q: "___ you from Brazil?", a: "Are" },
      { q: "___ she your sister?", a: "Is" },
      { q: "I ___ not from the US.", a: "am" }
    ],
    mc: [
      { q: "I ___ a student.", options: ["am", "is", "are", "be"], correct: 0 },
      { q: "She ___ from Mexico.", options: ["am", "is", "are", "be"], correct: 1 },
      { q: "___ you a teacher?", options: ["Am", "Is", "Are", "Be"], correct: 2 },
      { q: "They ___ not in my class.", options: ["am", "is", "are", "be"], correct: 2 },
      { q: "He ___ my friend Carlos.", options: ["am", "is", "are", "be"], correct: 1 }
    ],
    errorCorrection: [
      { wrong: "I is a student.", correct: "I am a student." },
      { wrong: "She are nice.", correct: "She is nice." },
      { wrong: "You is from Brazil?", correct: "Are you from Brazil?" }
    ]
  },
  conversation: {
    dialogue: [
      { speaker: "Maria", text: "Hi! I am Maria. What is your name?" },
      { speaker: "John", text: "I am John. Nice to meet you!" },
      { speaker: "Maria", text: "Nice to meet you too. Are you from the US?" },
      { speaker: "John", text: "Yes, I am. I am from Chicago. Where are you from?" },
      { speaker: "Maria", text: "I am from Mexico. I am a student here." },
      { speaker: "John", text: "That is great! Is your class interesting?" },
      { speaker: "Maria", text: "Yes, it is. The teacher is very nice." }
    ],
    roleplay: "You are at a party. Introduce yourself to a new person. Ask their name, where they are from, and if they are a student. Use Verb Be in all your questions and answers."
  },
  produce: {
    tasks: [
      { title: "Speaking - 90 seconds", instruction: "Introduce yourself to a partner. Say your name, where you are from, and if you are a student. Ask your partner the same questions. Use Verb Be in every sentence." },
      { title: "Writing - About Me", instruction: "Write 6 sentences about yourself using Verb Be. Example: I am a student. I am from Brazil. My teacher is nice." }
    ],
    checklist: [
      "I used 'am' with 'I' correctly.",
      "I used 'is' with 'he/she/it' correctly.",
      "I used 'are' with 'you/we/they' correctly.",
      "I formed questions correctly with Verb Be.",
      "I used negatives correctly."
    ]
  }
});

// ===== LESSON 1.2: Possessives (my/your/his/her) =====
LESSONS.push({
  unit: 1, lesson: 2, title: "Possessives: My, Your, His, Her", unitTitle: "It's nice to meet you.",
  discover: {
    text: "Anna: Is this your book?\nTom: No, it is not my book. It is her book.\nAnna: Oh, I see. And what is his name?\nTom: His name is David. He is my friend.\nAnna: Is that your bag on the table?\nTom: Yes, it is my bag. And this is her phone.\nAnna: Their names are David and Maria, right?\nTom: Yes! Their class is Room 3. Our class is next door.",
    questions: [
      "Look at 'my book'. Who owns the book? Is it the speaker or someone else?",
      "Now look at 'your pen'. Who does 'your' refer to?",
      "Compare 'his name' and 'her name'. Which is for a man and which is for a woman?",
      "Look at 'our class'. How many people does 'our' include?",
      "What does 'their' mean? Who does it refer to?"
    ]
  },
  rules: {
    tables: [
      { title: "Possessive Adjectives", headers: ["Pronoun", "Possessive Adjective", "Example"], rows: [
        ["I", "my", "This is my book."],
        ["You", "your", "What is your name?"],
        ["He", "his", "His name is Carlos."],
        ["She", "her", "Her name is Maria."],
        ["It", "its", "Its color is blue."],
        ["We", "our", "Our class is fun."],
        ["They", "their", "Their house is big."]
      ]}
    ],
    commonMistakes: [
      "This is me book (wrong) -> This is my book (correct). Don't use 'me' to show possession.",
      "Her name is Maria vs She name is Maria. Use 'her', not 'she', before a noun.",
      "Don't confuse 'its' (possession) with 'it's' (it is). Its color = the color of it."
    ],
    tip: "Possessive adjectives show who owns something. They ALWAYS come before a noun: my book, your pen, his car."
  },
  practice: {
    fill: [
      { q: "This is ___ book. (I)", a: "my" },
      { q: "What is ___ name? (you)", a: "your" },
      { q: "___ name is Carlos. (he)", a: "His" },
      { q: "___ name is Maria. (she)", a: "Her" },
      { q: "___ class is fun. (we)", a: "Our" },
      { q: "___ house is big. (they)", a: "Their" },
      { q: "Is this ___ bag? (you)", a: "your" },
      { q: "___ phone is new. (he)", a: "His" }
    ],
    mc: [
      { q: "This is ___ book.", options: ["I", "my", "me", "mine"], correct: 1 },
      { q: "What is ___ name?", options: ["you", "your", "yours", "you're"], correct: 1 },
      { q: "___ name is Carlos.", options: ["He", "His", "Him", "Her"], correct: 1 },
      { q: "___ teacher is Mr. Smith.", options: ["We", "Our", "Ours", "Us"], correct: 1 },
      { q: "___ house is big.", options: ["They", "Them", "Their", "Theirs"], correct: 2 }
    ],
    errorCorrection: [
      { wrong: "This is me book.", correct: "This is my book." },
      { wrong: "She name is Maria.", correct: "Her name is Maria." },
      { wrong: "What is you name?", correct: "What is your name?" }
    ]
  },
  conversation: {
    dialogue: [
      { speaker: "Anna", text: "Is this your book?" },
      { speaker: "Tom", text: "No, it is not my book. It is her book." },
      { speaker: "Anna", text: "Oh, I see. And what is his name?" },
      { speaker: "Tom", text: "His name is David. He is my friend." },
      { speaker: "Anna", text: "Is that your bag on the table?" },
      { speaker: "Tom", text: "Yes, it is my bag. And this is her phone." },
      { speaker: "Anna", text: "Their names are David and Maria, right?" },
      { speaker: "Tom", text: "Yes! Their class is Room 3." }
    ],
    roleplay: "You find some objects in a classroom. Ask your partner: 'Is this your ___?' Your partner answers using my, your, his, her, our, or their. Ask about at least 5 objects."
  },
  produce: {
    tasks: [
      { title: "Speaking - 90 seconds", instruction: "Describe 5 things you have and who they belong to. Use my, your, his, her, our, their. Example: 'This is my phone. That is her pencil.'" },
      { title: "Writing - My Classroom", instruction: "Write 6 sentences about things in your classroom using possessive adjectives. Example: 'This is my desk. Her bag is on the chair.'" }
    ],
    checklist: [
      "I used 'my' for things I own.",
      "I used 'your' correctly.",
      "I used 'his' and 'her' correctly.",
      "I used 'our' and 'their' correctly.",
      "I put the possessive adjective BEFORE the noun."
    ]
  }
});

// ===== LESSON 2.1: Articles (a/an/the) =====
LESSONS.push({
  unit: 2, lesson: 1, title: "Articles: A, An, The", unitTitle: "What's this?",
  discover: {
    text: "Student A: What is this?\nStudent B: It is a book. It is on the desk.\nStudent A: And what is that?\nStudent B: That is an eraser. It is an eraser for the board.\nStudent A: Is that a pen?\nStudent B: Yes, it is a pen. The pen is blue.\nStudent A: I see an apple. Is it for the teacher?\nStudent B: No, I have an apple and an orange. The apple is for me.\nStudent A: What is she holding?\nStudent B: She is a teacher. She has an umbrella.",
    questions: [
      "Look at 'a book' and 'a pen'. What sound does the next word start with? (consonant)",
      "Now look at 'an eraser' and 'an apple'. What sound does the next word start with? (vowel)",
      "When do we use 'a' and when do we use 'an'? What is the rule?",
      "Now look at 'the book' and 'the teacher'. Is this the first time we see these things? Look back at the text.",
      "What is the difference between 'a book' (first mention) and 'the book' (second mention)?"
    ]
  },
  rules: {
    tables: [
      { title: "Articles - A vs An", headers: ["Article", "Use Before", "Examples"], rows: [
        ["a", "words starting with a consonant sound", "a book, a pen, a teacher, a window"],
        ["an", "words starting with a vowel sound (a/e/i/o/u)", "an eraser, an apple, an engineer, an umbrella"]
      ]},
      { title: "Article - The", headers: ["Use", "Example"], rows: [
        ["Specific things (the listener knows which one)", "The book on the desk."],
        ["Second mention (we already talked about it)", "I have a pen. The pen is blue."],
        ["Unique things (only one)", "the sun, the moon, the door"],
        ["Before superlatives", "the best, the biggest"]
      ]}
    ],
    commonMistakes: [
      "a apple (wrong) -> an apple (correct). Use 'an' before vowel sounds.",
      "an university (wrong) -> a university (correct). 'University' starts with a consonant sound /ju:/.",
      "Don't use 'the' for general things: 'I like books' (all books), not 'I like the books' (specific books)."
    ],
    tip: "Think about the SOUND, not the letter. 'Hour' starts with a vowel sound -> an hour. 'University' starts with /j/ -> a university."
  },
  practice: {
    fill: [
      { q: "This is ___ book.", a: "a" },
      { q: "That is ___ eraser.", a: "an" },
      { q: "She is ___ teacher.", a: "a" },
      { q: "He is ___ engineer.", a: "an" },
      { q: "___ book is on the desk.", a: "The" },
      { q: "I have ___ apple and ___ orange.", a: "an|an" },
      { q: "Can you see ___ window? ___ window is open.", a: "a|The" },
      { q: "What is this? It is ___ umbrella.", a: "an" }
    ],
    mc: [
      { q: "This is ___ book.", options: ["a", "an", "the", "no article"], correct: 0 },
      { q: "That is ___ eraser.", options: ["a", "an", "the", "no article"], correct: 1 },
      { q: "I have a pen. ___ pen is blue.", options: ["A", "An", "The", "no article"], correct: 2 },
      { q: "She is ___ teacher.", options: ["a", "an", "the", "no article"], correct: 0 },
      { q: "He is ___ engineer.", options: ["a", "an", "the", "no article"], correct: 1 }
    ],
    errorCorrection: [
      { wrong: "I have a apple.", correct: "I have an apple." },
      { wrong: "She is an teacher.", correct: "She is a teacher." },
      { wrong: "I see book on desk.", correct: "I see a book on the desk." }
    ]
  },
  conversation: {
    dialogue: [
      { speaker: "Student A", text: "What is this?" },
      { speaker: "Student B", text: "It is a pencil." },
      { speaker: "Student A", text: "And what is that?" },
      { speaker: "Student B", text: "It is an eraser." },
      { speaker: "Student A", text: "Is the pencil yours?" },
      { speaker: "Student B", text: "No, it is a pencil from the teacher." },
      { speaker: "Student A", text: "I see an apple on the desk. Is it for the teacher?" },
      { speaker: "Student B", text: "Yes, the apple is a gift." }
    ],
    roleplay: "Point to objects in the room. Ask your partner 'What is this?' or 'What is that?' Your partner answers using a/an/the. Take turns for at least 6 objects."
  },
  produce: {
    tasks: [
      { title: "Speaking - 90 seconds", instruction: "Describe your classroom. Point to 5 different things and say what they are using a/an/the. Example: 'This is a desk. The desk is brown. That is an eraser.'" },
      { title: "Writing - My Things", instruction: "Write 6 sentences about things you have. Use 'a' for first mention and 'the' for second mention. Example: 'I have a bag. The bag is black.'" }
    ],
    checklist: [
      "I used 'a' before consonant sounds.",
      "I used 'an' before vowel sounds.",
      "I used 'the' for specific things.",
      "I used 'the' when the listener knows which thing.",
      "My first mention uses 'a/an' and second uses 'the'."
    ]
  }
});

// ===== LESSON 2.2: Prepositions (in, on, at) =====
LESSONS.push({
  unit: 2, lesson: 2, title: "Prepositions: In, On, At", unitTitle: "What's this?",
  discover: {
    text: "Mom: Where are you?\nChild: I am in my room.\nMom: Is your homework on the desk?\nChild: Yes, it is on my desk.\nMom: Where is your bag?\nChild: It is on the chair.\nMom: And your phone? Is it in your bag?\nChild: No, it is on my bed.\nMom: Where are your keys?\nChild: They are in my pocket.\nMom: Is Dad at home?\nChild: No, he is at work.",
    questions: [
      "Look at 'on the table' and 'on the wall'. What does 'on' tell us about position?",
      "Now look at 'in my bag' and 'in the classroom'. What does 'in' tell us?",
      "Look at 'at school' and 'at home'. Is 'at' used for a specific point/location or an enclosed space?",
      "Which preposition do we use for surfaces (table, wall, floor)?",
      "Which preposition do we use inside something (bag, room, pocket)?"
    ]
  },
  rules: {
    tables: [
      { title: "Prepositions of Place", headers: ["Preposition", "Meaning", "Examples"], rows: [
        ["in", "inside something (enclosed space)", "in the bag, in the classroom, in my pocket"],
        ["on", "on a surface", "on the table, on the wall, on the floor"],
        ["at", "a specific place or point", "at school, at home, at the park, at work"]
      ]}
    ],
    commonMistakes: [
      "I am in home (wrong) -> I am at home (correct). Use 'at home' as a fixed expression.",
      "The book is in the table (wrong) -> The book is on the table (correct). Use 'on' for surfaces.",
      "She is at the classroom (less common) -> She is in the classroom. Use 'in' for rooms/enclosed spaces."
    ],
    tip: "Think: in = inside, on = surface, at = specific point. Close your eyes and visualize the position!"
  },
  practice: {
    fill: [
      { q: "The book is ___ the table.", a: "on" },
      { q: "My pencil is ___ my bag.", a: "in" },
      { q: "She is ___ school.", a: "at" },
      { q: "The picture is ___ the wall.", a: "on" },
      { q: "He is ___ the classroom.", a: "in" },
      { q: "We are ___ home.", a: "at" },
      { q: "The keys are ___ my pocket.", a: "in" },
      { q: "The cat is ___ the chair.", a: "on" }
    ],
    mc: [
      { q: "The book is ___ the table.", options: ["in", "on", "at", "to"], correct: 1 },
      { q: "She is ___ school.", options: ["in", "on", "at", "to"], correct: 2 },
      { q: "My pencil is ___ my bag.", options: ["in", "on", "at", "to"], correct: 0 },
      { q: "We are ___ home.", options: ["in", "on", "at", "to"], correct: 2 },
      { q: "The picture is ___ the wall.", options: ["in", "on", "at", "to"], correct: 1 }
    ],
    errorCorrection: [
      { wrong: "I am in home.", correct: "I am at home." },
      { wrong: "The book is in the table.", correct: "The book is on the table." },
      { wrong: "She is on school.", correct: "She is at school." }
    ]
  },
  conversation: {
    dialogue: [
      { speaker: "Mom", text: "Where are you?" },
      { speaker: "Child", text: "I am in my room." },
      { speaker: "Mom", text: "Is your homework on the desk?" },
      { speaker: "Child", text: "Yes, it is on my desk." },
      { speaker: "Mom", text: "Where is your bag?" },
      { speaker: "Child", text: "It is on the chair." },
      { speaker: "Mom", text: "And your phone? Is it in your bag?" },
      { speaker: "Child", text: "No, it is on my bed." }
    ],
    roleplay: "Ask your partner where things are in the room. Your partner answers using in, on, at. Ask about at least 5 objects. Then switch roles."
  },
  produce: {
    tasks: [
      { title: "Speaking - 90 seconds", instruction: "Describe your room or your desk. Say where 5 different things are using in, on, at. Example: 'My phone is on the desk. My books are in my bag.'" },
      { title: "Writing - Where Is It?", instruction: "Write 6 sentences about where things are in your home or classroom. Use in, on, and at at least twice each." }
    ],
    checklist: [
      "I used 'in' for inside/enclosed spaces.",
      "I used 'on' for surfaces.",
      "I used 'at' for specific places.",
      "I used the correct preposition for each noun.",
      "I used 'at home' correctly."
    ]
  }
});

// ===== LESSON 3.1: Verb Be - Affirmative =====
LESSONS.push({
  unit: 3, lesson: 1, title: "Verb Be - Affirmative", unitTitle: "Where are you from?",
  discover: {
    text: "Teacher: Good morning! Where are you from?\nStudent: I am from Colombia.\nTeacher: That is great! And what is your name?\nStudent: My name is Pedro. I am twenty-five years old.\nTeacher: Nice to meet you, Pedro. Are you a new student?\nStudent: Yes, I am. I am from Bogota. It is a big city.\nTeacher: Welcome! The class is very friendly. The students are from many countries.\nStudent: That is wonderful. I am happy to be here.",
    questions: [
      "Look at 'I am from Brazil'. What comes after 'am' here?",
      "Find all the sentences with 'is'. What subjects go with 'is'? (he, she, it, the weather, my name)",
      "Now find all the sentences with 'are'. What subjects go with 'are'? (you, we, they, my friends)",
      "Look at 'I am happy'. Is 'happy' a noun or an adjective? What kind of information comes after Verb Be?",
      "Can we use Verb Be to talk about: name, age, origin, feelings, description? Find examples."
    ]
  },
  rules: {
    tables: [
      { title: "Verb Be - Affirmative Forms", headers: ["Subject", "Verb Be", "Contraction", "Example"], rows: [
        ["I", "am", "I'm", "I'm from Brazil."],
        ["You", "are", "You're", "You're in my class."],
        ["He", "is", "He's", "He's from Mexico."],
        ["She", "is", "She's", "She's a doctor."],
        ["It", "is", "It's", "It's a big city."],
        ["We", "are", "We're", "We're students."],
        ["They", "are", "They're", "They're from Japan."]
      ]},
      { title: "Uses of Verb Be +", headers: ["Use", "Structure", "Example"], rows: [
        ["Origin", "Subject + be + from + place", "I am from Brazil."],
        ["Age", "Subject + be + number", "I am 25 years old."],
        ["Occupation", "Subject + be + a/an + job", "She is a doctor."],
        ["Description", "Subject + be + adjective", "The weather is nice."],
        ["Location", "Subject + be + place", "We are in class."]
      ]}
    ],
    commonMistakes: [
      "She Brazil (wrong) -> She is from Brazil (correct). Don't forget the verb!",
      "I from Brazil (wrong) -> I am from Brazil (correct). Verb Be is necessary in every sentence.",
      "You is from Canada (wrong) -> You are from Canada (correct). Match the subject with the correct form."
    ],
    tip: "Every sentence in English needs a verb. Verb Be is the most common verb. Never skip it!"
  },
  practice: {
    fill: [
      { q: "I ___ from Brazil.", a: "am" },
      { q: "She ___ a doctor.", a: "is" },
      { q: "They ___ from Japan.", a: "are" },
      { q: "My name ___ Ana.", a: "is" },
      { q: "We ___ students.", a: "are" },
      { q: "He ___ from Mexico.", a: "is" },
      { q: "The weather ___ nice.", a: "is" },
      { q: "My friends ___ kind.", a: "are" }
    ],
    mc: [
      { q: "I ___ from Brazil.", options: ["am", "is", "are", "be"], correct: 0 },
      { q: "She ___ a doctor.", options: ["am", "is", "are", "be"], correct: 1 },
      { q: "They ___ from Japan.", options: ["am", "is", "are", "be"], correct: 2 },
      { q: "The weather ___ nice.", options: ["am", "is", "are", "be"], correct: 1 },
      { q: "My friends ___ kind.", options: ["am", "is", "are", "be"], correct: 2 }
    ],
    errorCorrection: [
      { wrong: "She from Brazil.", correct: "She is from Brazil." },
      { wrong: "I from Japan.", correct: "I am from Japan." },
      { wrong: "You from Canada.", correct: "You are from Canada." }
    ]
  },
  conversation: {
    dialogue: [
      { speaker: "Teacher", text: "Good morning! Where are you from?" },
      { speaker: "Student", text: "I am from Colombia." },
      { speaker: "Teacher", text: "That is great! And what is your name?" },
      { speaker: "Student", text: "My name is Pedro." },
      { speaker: "Teacher", text: "Nice to meet you, Pedro. Are you a new student?" },
      { speaker: "Student", text: "Yes, I am a new student." },
      { speaker: "Teacher", text: "Welcome! The class is very friendly." }
    ],
    roleplay: "You are at an international student orientation. Introduce yourself to 3 different people. Say your name, where you are from, how old you are, and what you do. Use Verb Be affirmatives."
  },
  produce: {
    tasks: [
      { title: "Speaking - 90 seconds", instruction: "Introduce yourself in detail. Say: your name, where you are from, your age, your occupation, and describe your city. All sentences must use Verb Be." },
      { title: "Writing - About My Country", instruction: "Write 6 sentences about your country or city. Use Verb Be with he/she/it/they. Example: 'My city is big. The people are friendly.'" }
    ],
    checklist: [
      "I used 'am' with 'I' in every sentence.",
      "I used 'is' correctly with he/she/it.",
      "I used 'are' correctly with you/we/they.",
      "I never forgot the verb Be in my sentences.",
      "I used contractions (I'm, she's, they're)."
    ]
  }
});

// ===== LESSON 3.2: Verb Be - Negative & Questions =====
LESSONS.push({
  unit: 3, lesson: 2, title: "Verb Be - Negative & Questions", unitTitle: "Where are you from?",
  discover: {
    text: "Luis: Are you from Mexico?\nAnna: No, I am not. I am from Colombia.\nLuis: Is your teacher Mr. Jones?\nAnna: No, he isn't. My teacher is Ms. Lee.\nLuis: Is she nice?\nAnna: Yes, she is. She is very nice! And the class is not big. It is small.\nLuis: Are you in the beginner class?\nAnna: Yes, I am. Are you?\nLuis: No, I'm not. I am in the intermediate class.\nAnna: Where are you from?\nLuis: I am from Peru. My family is not here. They are in Lima.",
    questions: [
      "Look at 'I am not from the US'. Where does 'not' go in a negative sentence with Verb Be?",
      "Compare 'He is a doctor' (affirmative) and 'He is not a doctor' (negative). What changes?",
      "Look at the yes/no questions: 'Are you a teacher?', 'Is she from Mexico?'. In questions, does the verb come before or after the subject?",
      "Now look at wh- questions: 'Where are you from?', 'What is your name?'. What words start these questions?",
      "Look at 'No, I am not' and 'No, he isn't'. What is the short answer pattern?"
    ]
  },
  rules: {
    tables: [
      { title: "Verb Be - Negative", headers: ["Full Form", "Contraction", "Example"], rows: [
        ["I am not", "I'm not", "I'm not a teacher."],
        ["You are not", "You aren't", "You aren't late."],
        ["He is not", "He isn't", "He isn't from Mexico."],
        ["She is not", "She isn't", "She isn't a doctor."],
        ["It is not", "It isn't", "It isn't big."],
        ["We are not", "We aren't", "We aren't students."],
        ["They are not", "They aren't", "They aren't here."]
      ]},
      { title: "Verb Be - Questions", headers: ["Question Type", "Structure", "Example"], rows: [
        ["Yes/No Question", "Be + subject?", "Are you a student?"],
        ["Short Answer Yes", "Yes + subject + be", "Yes, I am."],
        ["Short Answer No", "No + subject + be + not", "No, I'm not."],
        ["Wh- Question", "Wh- + be + subject?", "Where are you from?"]
      ]}
    ],
    commonMistakes: [
      "I no am from Brazil (wrong) -> I am not from Brazil (correct). 'Not' comes after the verb, not before.",
      "You not are a teacher (wrong) -> You are not a teacher (correct).",
      "Is from Mexico? (wrong) -> Is she from Mexico? (correct). Don't forget the subject in questions."
    ],
    tip: "For negatives: put 'not' after the verb. For questions: put the verb before the subject. Easy!"
  },
  practice: {
    fill: [
      { q: "I ___ not from the US.", a: "am" },
      { q: "She ___ not a doctor. (is not)", a: "is|'s" },
      { q: "___ you from Brazil?", a: "Are" },
      { q: "___ he a teacher?", a: "Is" },
      { q: "Where ___ you from?", a: "are" },
      { q: "No, I ___ not.", a: "am" },
      { q: "___ they from Japan?", a: "Are" },
      { q: "What ___ your name?", a: "is" }
    ],
    mc: [
      { q: "I ___ not from the US.", options: ["am", "is", "are", "be"], correct: 0 },
      { q: "___ you a teacher?", options: ["Am", "Is", "Are", "Be"], correct: 2 },
      { q: "___ she from Mexico?", options: ["Am", "Is", "Are", "Be"], correct: 1 },
      { q: "Where ___ you from?", options: ["am", "is", "are", "be"], correct: 2 },
      { q: "No, he ___ not.", options: ["am", "is", "are", "be"], correct: 1 }
    ],
    errorCorrection: [
      { wrong: "I no am from the US.", correct: "I am not from the US." },
      { wrong: "You not are a teacher.", correct: "You are not a teacher." },
      { wrong: "He from Mexico?", correct: "Is he from Mexico?" }
    ]
  },
  conversation: {
    dialogue: [
      { speaker: "Luis", text: "Are you from Mexico?" },
      { speaker: "Anna", text: "No, I'm not. I am from Colombia." },
      { speaker: "Luis", text: "Is your teacher Mr. Jones?" },
      { speaker: "Anna", text: "No, he isn't. My teacher is Ms. Lee." },
      { speaker: "Luis", text: "Is she nice?" },
      { speaker: "Anna", text: "Yes, she is. She is very nice!" },
      { speaker: "Luis", text: "Are you in the beginner class?" },
      { speaker: "Anna", text: "Yes, I am. Are you?" },
      { speaker: "Luis", text: "No, I'm not. I am in the intermediate class." }
    ],
    roleplay: "Interview a new classmate. Ask 5 yes/no questions using Verb Be (Are you...? Is your...?) and 3 wh- questions (Where...?, What...?, How...?). Answer with short answers."
  },
  produce: {
    tasks: [
      { title: "Speaking - 90 seconds", instruction: "Tell a partner 3 things that are NOT true about you, using negatives. Then your partner asks questions to find the truth. Example: 'I am not from this city. I am not a student.'" },
      { title: "Writing - Questions and Answers", instruction: "Write 5 yes/no questions with Verb Be and answer them. Then write 3 wh- questions and answer them. Use both affirmative and negative answers." }
    ],
    checklist: [
      "I formed negatives correctly (be + not).",
      "I formed questions correctly (be before subject).",
      "I used short answers correctly (Yes, I am / No, I'm not).",
      "I used wh- words (where, what, how) correctly.",
      "I matched the verb form to the subject."
    ]
  }
});

// ===== LESSON 4.1: Possessives ('s / s') =====
LESSONS.push({
  unit: 4, lesson: 1, title: "Possessive 's", unitTitle: "Whose jeans are these?",
  discover: {
    text: "Tom: Whose bag is this?\nAnna: I think it is Maria's bag.\nTom: And whose phone is on the desk?\nAnna: That is Carlos's phone. The students' books are on the shelf.\nTom: Is this the teacher's pen?\nAnna: No, it is John's pen. My parents' house is near here, and my mother's car is outside.\nTom: Whose pencil is this?\nAnna: It is the teacher's pencil. The children's toys are in the corner.",
    questions: [
      "Look at 'Maria's book'. What is added to 'Maria' to show she owns the book?",
      "Look at 'students' classroom'. There is an apostrophe after the 's'. What is different about 'students' (plural) vs 'Maria's' (singular)?",
      "What does 'Whose' mean? Look at the question 'Whose bag is this?' — what information does it ask for?",
      "Look at 'the children's toys'. 'Children' is an irregular plural (not ending in s). Where does the apostrophe go?",
      "Compare: singular noun = 's (Maria's), plural ending in s = ' (students'), irregular plural = 's (children's). What is the rule?"
    ]
  },
  rules: {
    tables: [
      { title: "Possessive 's Forms", headers: ["Type", "Rule", "Example"], rows: [
        ["Singular noun", "noun + 's", "Maria's book, Carlos's phone, the teacher's desk"],
        ["Plural noun ending in s", "noun + '", "The students' classroom, my parents' house"],
        ["Irregular plural (no s)", "noun + 's", "The children's toys, the men's room"]
      ]}
    ],
    commonMistakes: [
      "The book of Maria (too formal) -> Maria's book. Use 's for people and animals.",
      "The students's classroom (wrong) -> The students' classroom. Plural ending in s just gets an apostrophe.",
      "Don't confuse 'its' (possession) with 'it's' (it is). The cat's toy = the toy of the cat. Its toy = the toy of it."
    ],
    tip: "Ask 'Who owns this?' Add 's for one owner (Maria->Maria's). Add ' for plural owners (students->students')."
  },
  practice: {
    fill: [
      { q: "This is ___ book. (Maria)", a: "Maria's" },
      { q: "That is ___ phone. (Carlos)", a: "Carlos's|Carlos'" },
      { q: "The ___ classroom is big. (students)", a: "students'" },
      { q: "My ___ house is old. (parents)", a: "parents'" },
      { q: "The ___ desk is brown. (teacher)", a: "teacher's" },
      { q: "The ___ toys are on the floor. (children)", a: "children's" },
      { q: "Is this ___ pencil? (John)", a: "John's" },
      { q: "___ bag is this? (question word)", a: "Whose" }
    ],
    mc: [
      { q: "This is ___ book.", options: ["Maria", "Marias", "Maria's", "Maria'"], correct: 2 },
      { q: "The ___ classroom is big.", options: ["student", "students's", "students'", "students"], correct: 2 },
      { q: "My ___ house is old.", options: ["parent", "parent's", "parents's", "parents'"], correct: 3 },
      { q: "___ bag is this?", options: ["Who's", "Whose", "Whom", "Who"], correct: 1 },
      { q: "The ___ toys are on the floor.", options: ["children", "childrens'", "children's", "childrens"], correct: 2 }
    ],
    errorCorrection: [
      { wrong: "This is the book of Maria.", correct: "This is Maria's book." },
      { wrong: "The students's classroom.", correct: "The students' classroom." },
      { wrong: "Whos bag is this?", correct: "Whose bag is this?" }
    ]
  },
  conversation: {
    dialogue: [
      { speaker: "Tom", text: "Whose bag is this?" },
      { speaker: "Anna", text: "I think it is Maria's bag." },
      { speaker: "Tom", text: "And whose phone is on the desk?" },
      { speaker: "Anna", text: "That is Carlos's phone." },
      { speaker: "Tom", text: "What about these books?" },
      { speaker: "Anna", text: "They are the students' books." },
      { speaker: "Tom", text: "Is this the teacher's pen?" },
      { speaker: "Anna", text: "No, it is John's pen." }
    ],
    roleplay: "You found a bag with many objects. Ask your partner 'Whose ___ is this?' for each object. Your partner answers using 's or '. Take turns being the finder."
  },
  produce: {
    tasks: [
      { title: "Speaking - 90 seconds", instruction: "Look around the room. Point to 5 different objects and say who they belong to using 's or '. Example: 'That is Maria's bag. Those are the students' books.'" },
      { title: "Writing - Whose Things?", instruction: "Write 6 sentences about who owns things in your classroom or home. Use singular 's, plural ', and whose questions. Example: 'This is my mother's car. These are the children's toys.'" }
    ],
    checklist: [
      "I used 's for singular owners.",
      "I used ' for plural owners ending in s.",
      "I used 's for irregular plurals.",
      "I used 'whose' to ask about ownership.",
      "I placed the 's after the owner's name."
    ]
  }
});

// ===== LESSON 4.2: Present Continuous =====
LESSONS.push({
  unit: 4, lesson: 2, title: "Present Continuous", unitTitle: "Whose jeans are these?",
  discover: {
    text: "Mom: What are you doing?\nChild: I am doing my homework.\nMom: Is your sister studying too?\nChild: No, she isn't. She is watching TV in the living room.\nMom: What is Dad doing?\nChild: He is cooking dinner. He is making pasta.\nMom: That is nice. Is the dog sleeping?\nChild: Yes, it is sleeping on the sofa. I am not sleeping — I am working hard!\nMom: Good. I am reading a book in my room. Call me if you need help.",
    questions: [
      "Look at 'I am reading'. What two parts make up this verb? (am + reading)",
      "Find all the verbs ending in -ing. What is the base form of each? (reading -> read, wearing -> wear, etc.)",
      "What do we add to the base verb to make the -ing form? Are there any spelling changes?",
      "What time does Present Continuous describe? (right now, at this moment)",
      "Look at 'What are you doing?' and 'Is she watching TV?'. How do we form questions in Present Continuous?"
    ]
  },
  rules: {
    tables: [
      { title: "Present Continuous Forms", headers: ["Subject", "Be", "Verb-ing", "Example"], rows: [
        ["I", "am", "reading", "I am reading."],
        ["You", "are", "wearing", "You are wearing a shirt."],
        ["He / She / It", "is", "sitting / writing / raining", "He is sitting. It is raining."],
        ["We", "are", "studying", "We are studying."],
        ["They", "are", "playing", "They are playing."]
      ]},
      { title: "Spelling Rules for -ing", headers: ["Rule", "Base Verb", "Verb-ing"], rows: [
        ["Most verbs: add -ing", "read, play, study", "reading, playing, studying"],
        ["Verbs ending in -e: drop e, add -ing", "write, make, dance", "writing, making, dancing"],
        ["Short verbs (CVC): double last letter + -ing", "sit, run, swim, get", "sitting, running, swimming, getting"]
      ]}
    ],
    commonMistakes: [
      "I reading (wrong) -> I am reading (correct). Never forget the auxiliary verb BE in Present Continuous.",
      "She is write (wrong) -> She is writing (correct). Always use the -ing form after be.",
      "He is runing (wrong) -> He is running (correct). Double the consonant in short verbs (CVC pattern)."
    ],
    tip: "Present Continuous = be + verb-ing. Use it for actions happening NOW, at this moment."
  },
  practice: {
    fill: [
      { q: "I ___ ___ a book. (read)", a: "am reading" },
      { q: "She ___ ___ a letter. (write)", a: "is writing" },
      { q: "They ___ ___ soccer. (play)", a: "are playing" },
      { q: "He ___ ___ on the chair. (sit)", a: "is sitting" },
      { q: "It ___ ___ outside. (rain)", a: "is raining" },
      { q: "We ___ ___ English. (study)", a: "are studying" },
      { q: "I ___ not ___. (sleep)", a: "am sleeping" },
      { q: "What ___ you ___? (do)", a: "are|doing" }
    ],
    mc: [
      { q: "I ___ a book right now.", options: ["read", "am reading", "reading", "is reading"], correct: 1 },
      { q: "She ___ an email.", options: ["write", "is write", "is writing", "writes"], correct: 2 },
      { q: "They ___ soccer at the moment.", options: ["play", "are play", "are playing", "playing"], correct: 2 },
      { q: "He ___ on the chair.", options: ["sitting", "is siting", "is sitting", "sits"], correct: 2 },
      { q: "___ you ___ a good time?", options: ["Do / have", "Are / having", "Is / having", "Have / having"], correct: 1 }
    ],
    errorCorrection: [
      { wrong: "I reading a book.", correct: "I am reading a book." },
      { wrong: "She is write a letter.", correct: "She is writing a letter." },
      { wrong: "He is runing.", correct: "He is running." }
    ]
  },
  conversation: {
    dialogue: [
      { speaker: "Mom", text: "What are you doing?" },
      { speaker: "Child", text: "I am doing my homework." },
      { speaker: "Mom", text: "Is your sister studying too?" },
      { speaker: "Child", text: "No, she is watching TV." },
      { speaker: "Mom", text: "What is Dad doing?" },
      { speaker: "Child", text: "He is cooking dinner." },
      { speaker: "Mom", text: "That is nice. Is the dog sleeping?" },
      { speaker: "Child", text: "Yes, it is sleeping on the sofa." }
    ],
    roleplay: "Call a friend and ask what everyone in their family is doing right now. Ask at least 5 questions using Present Continuous. Your partner answers using full sentences."
  },
  produce: {
    tasks: [
      { title: "Speaking - 90 seconds", instruction: "Look around you right now. Describe what 5 different people (or things) are doing. Use Present Continuous. Example: 'My teacher is explaining the lesson. The students are listening.'" },
      { title: "Writing - Right Now", instruction: "Write 6 sentences about what people in your family or class are doing at this moment. Use am/is/are + verb-ing correctly. Include one negative sentence." }
    ],
    checklist: [
      "I used am/is/are before the -ing verb.",
      "I used the correct form of 'be' for each subject.",
      "I spelled the -ing form correctly (especially for -e and CVC verbs).",
      "I used negatives correctly (be + not + verb-ing).",
      "I asked questions correctly (be + subject + verb-ing)."
    ]
  }
});

// ===== LESSON 5.1: Present Continuous (for actions) =====
LESSONS.push({
  unit: 5, lesson: 1, title: "Present Continuous - Now", unitTitle: "What are you doing?",
  discover: {
    text: "Anna: Hi Tom! What are you doing right now?\nTom: I am sitting in my living room. I am drinking coffee and reading the news.\nAnna: That sounds relaxing. What is your family doing?\nTom: My wife is cooking in the kitchen. My son is playing video games in his room. My daughter is doing her homework.\nAnna: And the cat?\nTom: The cat is sleeping on the sofa, as always!\nAnna: We are all busy this morning too. What is your wife cooking?\nTom: She is making breakfast. I am not helping — I am taking a break!",
    questions: [
      "What time does this text describe? Is it happening now or in general?",
      "Circle all the 'be' verbs (am, is, are). Which one goes with 'I', which with 'he/she/it', which with 'you/we/they'?",
      "Look at 'I am sitting'. Why does 'sit' have double 't' in 'sitting'? What is the rule?",
      "Find 'drinking', 'cooking', 'playing', 'doing', 'sleeping'. What is the base form of each?",
      "What question is used to ask about actions happening now?"
    ]
  },
  rules: {
    tables: [
      { title: "Present Continuous Review", headers: ["Subject", "Be", "Verb-ing", "Examples"], rows: [
        ["I", "am", "sitting, drinking, reading", "I am reading the news."],
        ["He / She / It", "is", "cooking, playing, sleeping", "She is cooking. It is sleeping."],
        ["You / We / They", "are", "doing, studying, working", "We are busy. They are playing."]
      ]},
      { title: "Spelling Rules", headers: ["Rule", "Base", "Verb-ing"], rows: [
        ["Add -ing", "drink, play, do, read", "drinking, playing, doing, reading"],
        ["Drop -e, add -ing", "make, write, dance", "making, writing, dancing"],
        ["Double consonant (CVC)", "sit, run, swim, get", "sitting, running, swimming, getting"],
        ["-ie -> -ying", "lie, die, tie", "lying, dying, tying"]
      ]}
    ],
    commonMistakes: [
      "I am siting (wrong) -> I am sitting (correct). Double the consonant in CVC pattern verbs.",
      "She is make dinner (wrong) -> She is making dinner (correct). Use -ing form after be.",
      "What you doing? (wrong) -> What are you doing? (correct). Don't forget the auxiliary verb 'are'."
    ],
    tip: "Present Continuous = be + verb-ing. Use for actions happening NOW. If you can say 'right now', use Present Continuous!"
  },
  practice: {
    fill: [
      { q: "I ___ ___ coffee right now. (drink)", a: "am drinking" },
      { q: "She ___ ___ in the kitchen. (cook)", a: "is cooking" },
      { q: "He ___ ___ video games. (play)", a: "is playing" },
      { q: "The cat ___ ___ on the sofa. (sleep)", a: "is sleeping" },
      { q: "What ___ you ___? (do)", a: "are|doing" },
      { q: "We ___ ___ breakfast. (have)", a: "are having" },
      { q: "My sister ___ ___ her homework. (do)", a: "is doing" },
      { q: "I ___ not ___ anything. (do)", a: "am|doing" }
    ],
    mc: [
      { q: "What ___ you ___ right now?", options: ["are / do", "are / doing", "do / doing", "is / doing"], correct: 1 },
      { q: "She ___ dinner.", options: ["cook", "cooks", "is cooking", "cooking"], correct: 2 },
      { q: "They ___ video games.", options: ["play", "plays", "are playing", "playing"], correct: 2 },
      { q: "I ___ coffee right now.", options: ["drink", "am drinking", "drinks", "drinking"], correct: 1 },
      { q: "The cat ___ on the sofa.", options: ["sleep", "sleeps", "is sleeping", "sleeping"], correct: 2 }
    ],
    errorCorrection: [
      { wrong: "I siting on the chair.", correct: "I am sitting on the chair." },
      { wrong: "She make dinner.", correct: "She is making dinner." },
      { wrong: "What you doing?", correct: "What are you doing?" }
    ]
  },
  conversation: {
    dialogue: [
      { speaker: "Anna", text: "Hi Tom! What are you doing?" },
      { speaker: "Tom", text: "I am watching a movie. What about you?" },
      { speaker: "Anna", text: "I am studying for my English test." },
      { speaker: "Tom", text: "Is your brother studying too?" },
      { speaker: "Anna", text: "No, he is playing guitar. It is very loud!" },
      { speaker: "Tom", text: "That sounds fun! Are your parents home?" },
      { speaker: "Anna", text: "Yes, they are cooking dinner in the kitchen." },
      { speaker: "Tom", text: "Great! Tell them I said hi." }
    ],
    roleplay: "Call a friend on the phone. Ask what they are doing, what their family members are doing, etc. Ask at least 5 questions using Present Continuous. Answer the same questions from your partner."
  },
  produce: {
    tasks: [
      { title: "Speaking - 90 seconds", instruction: "Describe what is happening around you right now. Mention at least 5 people or things and what they are doing. Use full sentences with Present Continuous." },
      { title: "Writing - Busy Morning", instruction: "Write a paragraph describing a busy morning in your house. Describe what each family member is doing. Use at least 6 Present Continuous sentences." }
    ],
    checklist: [
      "I used am/is/are before every -ing verb.",
      "I spelled the -ing form correctly.",
      "I used the correct be verb for each subject.",
      "I asked questions with be + subject + verb-ing.",
      "I formed negatives correctly."
    ]
  }
});

// ===== LESSON 5.2: Time Clauses (when/while) =====
LESSONS.push({
  unit: 5, lesson: 2, title: "Time Clauses with When", unitTitle: "What are you doing?",
  discover: {
    text: "Anna: When do you usually study?\nTom: I study when I get home from work.\nAnna: What do you do when you are tired?\nTom: I drink coffee when I am tired. What about you?\nAnna: When I am tired, I take a short nap. When I wake up, I feel better.\nTom: I listen to music when I am exercising. When do you listen to music?\nAnna: When I am studying, I listen to classical music. It helps me focus.",
    questions: [
      "Look at 'When I am studying, I listen to music'. Does the 'when' part describe a specific moment or a general situation?",
      "What verb tenses are used in the 'when' clause and in the main clause?",
      "Find another sentence where 'when' is in the middle: 'She reads a book when she is on the bus'. Is the meaning the same?",
      "Look at 'When do you study?'. This is a question with 'when' at the beginning. What does it ask about?",
      "What is the difference between 'when' and 'what time'? Which is for a general situation and which is for a specific time?"
    ]
  },
  rules: {
    tables: [
      { title: "Time Clauses with When", headers: ["Position", "Structure", "Example"], rows: [
        ["When at the start", "When + subject + verb, subject + verb", "When I am tired, I sleep."],
        ["When in the middle", "Subject + verb + when + subject + verb", "I sleep when I am tired."],
        ["Question with When", "When + do/does + subject + verb?", "When do you study?"]
      ]}
    ],
    commonMistakes: [
      "When I tired, I sleep (wrong) -> When I am tired, I sleep (correct). Don't forget the verb 'be' after 'when'.",
      "When it raining, I stay home (wrong) -> When it is raining, I stay home (correct).",
      "Don't confuse 'when' questions with 'what time' questions. 'When do you study?' (general) vs 'What time do you study?' (specific time)."
    ],
    tip: "Use 'when' to connect two actions that happen together. The 'when' clause shows the situation or condition."
  },
  practice: {
    fill: [
      { q: "___ I am studying, I listen to music.", a: "When" },
      { q: "She reads a book ___ she is on the bus.", a: "when" },
      { q: "___ he gets home, he watches TV.", a: "When" },
      { q: "What do you do ___ you are tired?", a: "when" },
      { q: "___ it rains, I stay home.", a: "When" },
      { q: "I drink coffee ___ I am sleepy.", a: "when" },
      { q: "___ do you study?", a: "When" },
      { q: "I study ___ I have free time.", a: "when" }
    ],
    mc: [
      { q: "___ I am tired, I sleep.", options: ["What", "When", "Where", "Who"], correct: 1 },
      { q: "She reads ___ she is on the bus.", options: ["what", "when", "where", "who"], correct: 1 },
      { q: "What do you do ___ you are bored?", options: ["what", "when", "where", "why"], correct: 1 },
      { q: "___ do you wake up every day?", options: ["When", "What time", "Where", "Who"], correct: 1 },
      { q: "I listen to music ___ I am studying.", options: ["what", "when", "where", "who"], correct: 1 }
    ],
    errorCorrection: [
      { wrong: "When I tired, I sleep.", correct: "When I am tired, I sleep." },
      { wrong: "When it raining, I stay home.", correct: "When it is raining, I stay home." },
      { wrong: "When you study?", correct: "When do you study?" }
    ]
  },
  conversation: {
    dialogue: [
      { speaker: "Anna", text: "When do you usually study?" },
      { speaker: "Tom", text: "I study when I get home from work." },
      { speaker: "Anna", text: "What do you do when you are tired?" },
      { speaker: "Tom", text: "I drink coffee when I am tired." },
      { speaker: "Anna", text: "When do you listen to music?" },
      { speaker: "Tom", text: "I listen to music when I am exercising." },
      { speaker: "Anna", text: "What do you do when it rains?" },
      { speaker: "Tom", text: "I stay home when it rains. What about you?" }
    ],
    roleplay: "Ask your partner 5 questions about their daily habits using 'when'. Example: 'What do you do when you are hungry?' Your partner answers using 'when' clauses. Then switch roles."
  },
  produce: {
    tasks: [
      { title: "Speaking - 90 seconds", instruction: "Describe 5 things you do in different situations. Use 'when' in each sentence. Example: 'When I am hungry, I eat a snack. When I am tired, I go to bed.'" },
      { title: "Writing - My Routines", instruction: "Write 6 sentences about your routines using 'when'. Put 'when' at the beginning in 3 sentences and in the middle in 3 sentences." }
    ],
    checklist: [
      "I used 'when' correctly in my sentences.",
      "I used the correct verb forms after 'when'.",
      "I remembered to include 'am/is/are' after 'when'.",
      "I used 'when' at the start and in the middle.",
      "I asked 'when' questions correctly."
    ]
  }
});

// ===== LESSON 6.1: Simple Present - Statements =====
LESSONS.push({
  unit: 6, lesson: 1, title: "Simple Present - Statements", unitTitle: "My sister works downtown.",
  discover: {
    text: "My sister Ana works in a hospital downtown. She is a nurse, and she loves her job. She gets up at 6 AM every day and walks to the bus stop. The bus arrives at 7:15. My brother Carlos studies at the university. He walks to school every morning because he lives near the campus. I live in an apartment near the park. My parents have a small house in the suburbs. We eat dinner together every Sunday. My sister speaks Spanish and English at work. The hospital has patients from many countries.",
    questions: [
      "Look at 'My sister works', 'She gets up', 'My brother studies'. These verbs end in -s/-es. What subjects do they go with? (he/she/it)",
      "Now look at 'I live', 'My parents have', 'We eat'. These verbs DON'T end in -s. What subjects are these? (I/you/we/they)",
      "Look at 'My brother studies'. Why does 'study' change to 'studies'? (consonant + y -> -ies)",
      "Look at 'She gets up', 'He walks'. What is the simple addition for most verbs with he/she/it? (add -s)",
      "What time expressions tell us this is a routine or habit? (every day, every morning, always)"
    ]
  },
  rules: {
    tables: [
      { title: "Simple Present - Affirmative", headers: ["Subject", "Verb Form", "Example"], rows: [
        ["I / You / We / They", "base verb", "I live in an apartment. They have a house."],
        ["He / She / It", "verb + -s/-es", "She works in a hospital. He walks to school."]
      ]},
      { title: "Spelling Rules for He/She/It", headers: ["Rule", "Base Verb", "3rd Person"], rows: [
        ["Most verbs: add -s", "work, live, like, speak", "works, lives, likes, speaks"],
        ["End in -s, -sh, -ch, -x, -o: add -es", "watch, go, do, fix", "watches, goes, does, fixes"],
        ["End in consonant + y: change y to -ies", "study, fly, try", "studies, flies, tries"],
        ["Have is irregular", "have", "has"]
      ]}
    ],
    commonMistakes: [
      "He work in a hospital (wrong) -> He works in a hospital (correct). Add -s/-es for he/she/it.",
      "She study English (wrong) -> She studies English (correct). Change -y to -ies.",
      "My brother has (not 'have'). Have is irregular in third person: he/she/it has."
    ],
    tip: "For he/she/it, verbs get -s/-es. Think: 'He works, she studies, it rains.' For I/you/we/they, use the base form."
  },
  practice: {
    fill: [
      { q: "My sister ___ in a hospital. (work)", a: "works" },
      { q: "She ___ up at 6 AM. (get)", a: "gets" },
      { q: "I ___ in an apartment. (live)", a: "live" },
      { q: "My brother ___ at the university. (study)", a: "studies" },
      { q: "He ___ to school every day. (walk)", a: "walks" },
      { q: "We ___ dinner together. (eat)", a: "eat" },
      { q: "She ___ Spanish and English. (speak)", a: "speaks" },
      { q: "My parents ___ a small house. (have)", a: "have" }
    ],
    mc: [
      { q: "My sister ___ in a hospital.", options: ["work", "works", "working", "is work"], correct: 1 },
      { q: "I ___ in an apartment.", options: ["live", "lives", "living", "am live"], correct: 0 },
      { q: "He ___ to school every morning.", options: ["walk", "walks", "walking", "is walk"], correct: 1 },
      { q: "She ___ Spanish and English.", options: ["speak", "speaks", "speaking", "is speak"], correct: 1 },
      { q: "My brother ___ at the university.", options: ["study", "studies", "studying", "is study"], correct: 1 }
    ],
    errorCorrection: [
      { wrong: "He work in a hospital.", correct: "He works in a hospital." },
      { wrong: "She study English.", correct: "She studies English." },
      { wrong: "My brother have a car.", correct: "My brother has a car." }
    ]
  },
  conversation: {
    dialogue: [
      { speaker: "Anna", text: "What does your sister do?" },
      { speaker: "Tom", text: "She works in a hospital. She is a nurse." },
      { speaker: "Anna", text: "That is nice! Where does she live?" },
      { speaker: "Tom", text: "She lives near the hospital. She walks to work." },
      { speaker: "Anna", text: "What about your brother? Where does he study?" },
      { speaker: "Tom", text: "He studies at the university. He likes his classes." },
      { speaker: "Anna", text: "My sister studies at the same university. Maybe they know each other!" }
    ],
    roleplay: "Tell your partner about 3 family members. Say where they work/study, where they live, and what they do every day. Use Simple Present with he/she/it. Then ask about your partner's family."
  },
  produce: {
    tasks: [
      { title: "Speaking - 90 seconds", instruction: "Describe a typical day for a family member. Say where they work, what time they wake up, what they do, etc. Use Simple Present with he/she/it forms." },
      { title: "Writing - My Family", instruction: "Write 6 sentences about your family members. Use Simple Present for routines and facts. Include at least 3 sentences with he/she/it verb forms." }
    ],
    checklist: [
      "I added -s/-es for he/she/it verbs.",
      "I used the base form for I/you/we/they.",
      "I changed -y to -ies correctly (study -> studies).",
      "I used 'has' for he/she/it (not 'have').",
      "I used time expressions (every day, always)."
    ]
  }
});

// ===== LESSON 6.2: Simple Present - Questions =====
LESSONS.push({
  unit: 6, lesson: 2, title: "Simple Present - Questions", unitTitle: "My sister works downtown.",
  discover: {
    text: "Interviewer: Do you work in an office?\nCandidate: No, I don't. I work from home.\nInterviewer: Does your company have a dress code?\nCandidate: No, it doesn't. We wear casual clothes.\nInterviewer: Do you speak any other languages?\nCandidate: Yes, I do. I speak Spanish and French.\nInterviewer: Does your job require travel?\nCandidate: Yes, it does. I travel once a month.\nInterviewer: Where do your clients live?\nCandidate: They live in different countries. I don't travel every week, but I travel often.\nInterviewer: Does your manager travel too?\nCandidate: No, she doesn't. She stays in the office.",
    questions: [
      "Look at the questions: 'Do you work in an office?' and 'Does your sister live near here?'. What auxiliary verb starts each question? (Do/Does)",
      "After 'Do' or 'Does', what form does the main verb take? Look at 'Does your sister live' — it's 'live', not 'lives'. Why?",
      "Find the negative sentences: 'I don't work' and 'She doesn't eat'. What is the pattern for negatives?",
      "Look at wh- questions: 'Where do you study?', 'What does your brother do?'. What is the word order?",
      "Look at the short answers: 'Yes, they do. No, she doesn't.' What auxiliary do they use?"
    ]
  },
  rules: {
    tables: [
      { title: "Simple Present - Questions", headers: ["Question Type", "Structure", "Example"], rows: [
        ["Yes/No Question", "Do/Does + subject + base verb?", "Do you like coffee?"],
        ["Yes/No with Does", "Does + he/she/it + base verb?", "Does she work here?"],
        ["Wh- Question", "Wh- + do/does + subject + base verb?", "Where do you live?"],
        ["Short Answer Yes", "Yes + subject + do/does", "Yes, I do. / Yes, she does."],
        ["Short Answer No", "No + subject + don't/doesn't", "No, I don't. / No, he doesn't."]
      ]},
      { title: "Simple Present - Negatives", headers: ["Subject", "Auxiliary + not", "Base Verb", "Example"], rows: [
        ["I / You / We / They", "don't", "work", "I don't work on weekends."],
        ["He / She / It", "doesn't", "eat", "She doesn't eat meat."]
      ]}
    ],
    commonMistakes: [
      "Does she works here? (wrong) -> Does she work here? (correct). After does/don't/doesn't, use the BASE verb.",
      "He don't like coffee (wrong) -> He doesn't like coffee (correct). Use 'doesn't' with he/she/it.",
      "Where you live? (wrong) -> Where do you live? (correct). Don't forget 'do' or 'does' in questions."
    ],
    tip: "Do/Does + subject + base verb. If you use 'does', the main verb has NO -s. Remember: 'Does he work?' (not 'works')."
  },
  practice: {
    fill: [
      { q: "___ you work in an office?", a: "Do" },
      { q: "___ your sister live near here?", a: "Does" },
      { q: "Where ___ you study?", a: "do" },
      { q: "What ___ your brother do?", a: "does" },
      { q: "I ___ not work on weekends. (do not)", a: "don't|do not" },
      { q: "She ___ not eat meat. (does not)", a: "doesn't|does not" },
      { q: "___ they speak English?", a: "Do" },
      { q: "No, she ___. (does not)", a: "doesn't|does not" }
    ],
    mc: [
      { q: "___ you work in an office?", options: ["Do", "Does", "Are", "Is"], correct: 0 },
      { q: "___ your sister live near here?", options: ["Do", "Does", "Are", "Is"], correct: 1 },
      { q: "Where ___ you study?", options: ["do", "does", "are", "is"], correct: 0 },
      { q: "She ___ eat meat. She is a vegetarian.", options: ["don't", "doesn't", "isn't", "aren't"], correct: 1 },
      { q: "No, I ___.", options: ["don't", "doesn't", "am not", "not"], correct: 0 }
    ],
    errorCorrection: [
      { wrong: "Does she works here?", correct: "Does she work here?" },
      { wrong: "He don't like coffee.", correct: "He doesn't like coffee." },
      { wrong: "Where you live?", correct: "Where do you live?" }
    ]
  },
  conversation: {
    dialogue: [
      { speaker: "Interviewer", text: "Do you work in an office?" },
      { speaker: "Candidate", text: "No, I don't. I work from home." },
      { speaker: "Interviewer", text: "Does your company have a dress code?" },
      { speaker: "Candidate", text: "No, it doesn't. We wear casual clothes." },
      { speaker: "Interviewer", text: "Do you speak any other languages?" },
      { speaker: "Candidate", text: "Yes, I do. I speak Spanish and French." },
      { speaker: "Interviewer", text: "Does your job require travel?" },
      { speaker: "Candidate", text: "Yes, it does. I travel once a month." }
    ],
    roleplay: "You are interviewing a job candidate. Ask 5 yes/no questions and 3 wh- questions using Simple Present. The candidate answers using short answers and full sentences. Switch roles."
  },
  produce: {
    tasks: [
      { title: "Speaking - 90 seconds", instruction: "Ask a partner 5 questions about their daily life using Do/Does. Use wh- questions too. Example: 'Do you drink coffee? Where do you have lunch?'" },
      { title: "Writing - Questions and Negatives", instruction: "Write 4 questions and 4 negative sentences about everyday life. Use Do/Does for questions and don't/doesn't for negatives." }
    ],
    checklist: [
      "I used 'do' with I/you/we/they in questions.",
      "I used 'does' with he/she/it in questions.",
      "I used the base verb after do/does.",
      "I used 'don't/doesn't' correctly in negatives.",
      "I used short answers correctly."
    ]
  }
});

// ===== LESSON 7.1: There is / There are =====
LESSONS.push({
  unit: 7, lesson: 1, title: "There is / There are", unitTitle: "Does it have a view?",
  discover: {
    text: "Agent: Welcome to the apartment. There is a living room and a kitchen on this floor.\nClient: How many bedrooms are there?\nAgent: There are three bedrooms upstairs. There is also a balcony.\nClient: Is there a view from the balcony?\nAgent: Yes, there is. There is a beautiful view of the park.\nClient: Are there any closets in the hallway?\nAgent: No, there aren't any closets, but there is a storage room.\nClient: Is there a parking space?\nAgent: Yes, there is. There is one parking space included.\nClient: Are there any restaurants nearby?\nAgent: Yes, there are many good restaurants on this street.",
    questions: [
      "Look at 'There is a kitchen' and 'There are three bedrooms'. What is different? (singular vs plural)",
      "When do we use 'there is' and when do we use 'there are'? Find the rule.",
      "Look at 'There aren't any closets'. What is the negative form of 'there are'?",
      "Look at 'Is there a garage?' and 'Are there any plants?'. How do we form questions with there is/are?",
      "What is the short answer for 'Is there a garage?' and 'Are there any plants?'?"
    ]
  },
  rules: {
    tables: [
      { title: "There is / There are", headers: ["Form", "Singular", "Plural"], rows: [
        ["Affirmative", "There is a kitchen.", "There are three bedrooms."],
        ["Negative", "There isn't a garage.", "There aren't any closets."],
        ["Question", "Is there a window?", "Are there any plants?"],
        ["Short Answer Yes", "Yes, there is.", "Yes, there are."],
        ["Short Answer No", "No, there isn't.", "No, there aren't."]
      ]}
    ],
    commonMistakes: [
      "There is three bedrooms (wrong) -> There are three bedrooms (correct). Use 'there are' with plural nouns.",
      "There are a kitchen (wrong) -> There is a kitchen (correct). Use 'there is' with singular nouns.",
      "Don't confuse 'there is/are' (to say something exists) with 'it is' (to identify something). 'There is a cat' vs 'It is a cat'."
    ],
    tip: "There is + singular. There are + plural. Think: is -> one thing, are -> many things."
  },
  practice: {
    fill: [
      { q: "There ___ a kitchen in my apartment.", a: "is" },
      { q: "There ___ three bedrooms upstairs.", a: "are" },
      { q: "There ___ a big window in the living room.", a: "is" },
      { q: "There ___ not any closets in the hallway.", a: "aren't|are not" },
      { q: "___ there a garage?", a: "Is" },
      { q: "___ there any plants in the garden?", a: "Are" },
      { q: "No, there ___ not. (plural)", a: "aren't|are not" },
      { q: "There ___ many restaurants near my house.", a: "are" }
    ],
    mc: [
      { q: "There ___ a kitchen in my apartment.", options: ["is", "are", "am", "be"], correct: 0 },
      { q: "There ___ three bedrooms upstairs.", options: ["is", "are", "am", "be"], correct: 1 },
      { q: "___ there a garage?", options: ["Is", "Are", "Am", "Do"], correct: 0 },
      { q: "No, there ___ any plants.", options: ["isn't", "aren't", "is", "are"], correct: 1 },
      { q: "There ___ many restaurants near here.", options: ["is", "are", "am", "be"], correct: 1 }
    ],
    errorCorrection: [
      { wrong: "There is three bedrooms.", correct: "There are three bedrooms." },
      { wrong: "There are a kitchen.", correct: "There is a kitchen." },
      { wrong: "Is there any plants?", correct: "Are there any plants?" }
    ]
  },
  conversation: {
    dialogue: [
      { speaker: "Agent", text: "Welcome to the apartment. There is a living room and a kitchen." },
      { speaker: "Client", text: "How many bedrooms are there?" },
      { speaker: "Agent", text: "There are two bedrooms. There is also a balcony." },
      { speaker: "Client", text: "Is there a parking space?" },
      { speaker: "Agent", text: "Yes, there is. There is one parking space included." },
      { speaker: "Client", text: "Are there any restaurants nearby?" },
      { speaker: "Agent", text: "Yes, there are many good restaurants on this street." }
    ],
    roleplay: "You are a real estate agent showing an apartment. Describe what there is and what there isn't. Your partner is a client asking questions. Use there is/are in both statements and questions."
  },
  produce: {
    tasks: [
      { title: "Speaking - 90 seconds", instruction: "Describe your home or a room. Say what there is and what there are. Use at least 5 sentences. Example: 'There is a sofa in the living room. There are two windows.'" },
      { title: "Writing - My Neighborhood", instruction: "Write 6 sentences about your neighborhood using there is/are. Include 2 negative sentences and 2 questions. Example: 'There is a park near my house. Are there any cafes?'" }
    ],
    checklist: [
      "I used 'there is' with singular nouns.",
      "I used 'there are' with plural nouns.",
      "I formed negatives correctly (there isn't / there aren't).",
      "I formed questions correctly (Is there / Are there).",
      "I used short answers correctly."
    ]
  }
});

// ===== LESSON 7.2: Simple Present Short Answers =====
LESSONS.push({
  unit: 7, lesson: 2, title: "Simple Present Short Answers", unitTitle: "Does it have a view?",
  discover: {
    text: "Client: Does the apartment have a balcony?\nAgent: Yes, it does. It has a nice balcony.\nClient: Do you like the neighborhood?\nAgent: Yes, I do. There are many nice restaurants and shops.\nClient: Are there any schools nearby?\nAgent: Yes, there are. There is an elementary school two blocks away.\nClient: Is the apartment furnished?\nAgent: No, it isn't. But the kitchen has all the appliances.\nClient: Does it have a pool?\nAgent: No, it doesn't. But the building has a gym.\nClient: Do the utilities come included?\nAgent: Yes, they do. Water and gas are included.",
    questions: [
      "Look at the short answers: 'Yes, it does' / 'No, she doesn't' / 'Yes, I do'. What auxiliary verb is used?",
      "In 'Yes, it does', what does 'does' replace? Does it replace the main verb too?",
      "Look at 'No, she doesn't'. This answers a question with 'Does'. What form is used?",
      "What about questions with 'Do'? How do we give a short answer? (Yes, I do / No, I don't)",
      "Why can't we say 'Yes, it has' instead of 'Yes, it does'? What is the rule for short answers?"
    ]
  },
  rules: {
    tables: [
      { title: "Short Answers with Do/Does", headers: ["Question", "Yes Answer", "No Answer"], rows: [
        ["Do I/you/we/they...?", "Yes, I/you/we/they do.", "No, I/you/we/they don't."],
        ["Does he/she/it...?", "Yes, he/she/it does.", "No, he/she/it doesn't."],
        ["Do the students...?", "Yes, they do.", "No, they don't."]
      ]},
      { title: "Short Answers with Verb Be", headers: ["Question", "Yes Answer", "No Answer"], rows: [
        ["Am I...?", "Yes, you are.", "No, you aren't."],
        ["Are you...?", "Yes, I am.", "No, I'm not."],
        ["Is he/she/it...?", "Yes, he/she/it is.", "No, he/she/it isn't."],
        ["Are we/they...?", "Yes, we/they are.", "No, we/they aren't."]
      ]}
    ],
    commonMistakes: [
      "Yes, I have (when answering 'Do you have?') -> Yes, I do. Don't repeat the main verb in short answers.",
      "Yes, she works (wrong) -> Yes, she does. Use the auxiliary verb, not the main verb.",
      "No, he don't (wrong) -> No, he doesn't. Use 'doesn't' with he/she/it."
    ],
    tip: "In short answers, use only the auxiliary (do/does/am/is/are). Never repeat the main verb. Listen to the first word of the question!"
  },
  practice: {
    fill: [
      { q: "Do you like coffee? Yes, I ___.", a: "do" },
      { q: "Does she work nearby? No, she ___.", a: "doesn't|does not" },
      { q: "Does it have a balcony? Yes, it ___.", a: "does" },
      { q: "Do they have a garden? Yes, they ___.", a: "do" },
      { q: "Are you a student? Yes, I ___.", a: "am" },
      { q: "Is he from Mexico? No, he ___.", a: "isn't|is not" },
      { q: "Do you have a car? No, I ___.", a: "don't|do not" },
      { q: "Are they in the class? Yes, they ___.", a: "are" }
    ],
    mc: [
      { q: "Do you like coffee? Yes, I ___.", options: ["like", "do", "am", "does"], correct: 1 },
      { q: "Does she work here? No, she ___.", options: ["don't", "doesn't", "isn't", "aren't"], correct: 1 },
      { q: "Does it have a balcony? Yes, it ___.", options: ["has", "do", "does", "is"], correct: 2 },
      { q: "Are you a student? Yes, I ___.", options: ["am", "are", "do", "is"], correct: 0 },
      { q: "Is he from Mexico? No, he ___.", options: ["don't", "doesn't", "isn't", "aren't"], correct: 2 }
    ],
    errorCorrection: [
      { wrong: "Do you live here? Yes, I live.", correct: "Yes, I do." },
      { wrong: "Does she work? Yes, she works.", correct: "Yes, she does." },
      { wrong: "No, he don't.", correct: "No, he doesn't." }
    ]
  },
  conversation: {
    dialogue: [
      { speaker: "Agent", text: "Does the apartment have a view?" },
      { speaker: "Client", text: "Yes, it does. There is a beautiful view of the park." },
      { speaker: "Agent", text: "Do you like the neighborhood?" },
      { speaker: "Client", text: "Yes, I do. There are many nice restaurants." },
      { speaker: "Agent", text: "Are there any schools nearby?" },
      { speaker: "Client", text: "Yes, there are. There is an elementary school two blocks away." },
      { speaker: "Agent", text: "Is the apartment furnished?" },
      { speaker: "Client", text: "No, it isn't. But the kitchen has all the appliances." }
    ],
    roleplay: "One person is looking for an apartment and asks 5 questions. The other answers using short answers (Yes, it does / No, it doesn't / Yes, there is / No, there aren't). Use different question types."
  },
  produce: {
    tasks: [
      { title: "Speaking - 90 seconds", instruction: "A partner will ask you 5 yes/no questions about your home or daily life. Answer using only short answers. Then ask them 5 questions. Practice until the short answers feel natural." },
      { title: "Writing - Question and Answer", instruction: "Write 5 questions and answer them using short answers. Use different subjects (you, he, she, it, they). Example: 'Do you speak English? Yes, I do. Does your friend like pizza? No, he doesn't.'" }
    ],
    checklist: [
      "I used 'do/don't' with I/you/we/they.",
      "I used 'does/doesn't' with he/she/it.",
      "I used 'am/is/are' with Verb Be questions.",
      "I did NOT repeat the main verb in short answers.",
      "I matched the auxiliary to the question."
    ]
  }
});

// ===== LESSON 8.1: Jobs (What do you do?) =====
LESSONS.push({
  unit: 8, lesson: 1, title: "Jobs and Occupations", unitTitle: "What do you do?",
  discover: {
    text: "Anna: What do you do?\nTom: I am a teacher. I work at a high school.\nAnna: That sounds interesting! What does your sister do?\nTom: She is a nurse. She works in a hospital.\nAnna: My mother is a nurse too. She works at City Hospital.\nTom: Really? Maybe they know each other! And what do you do?\nAnna: I am a designer. I work from home.\nTom: What does your father do?\nAnna: He is an engineer. He works in an office.\nTom: My brother is a chef. He works in a restaurant downtown.",
    questions: [
      "Look at the question 'What do you do?'. What does this question ask about? (job/occupation)",
      "How do we ask about someone else's job? 'What does she do?' — what changes?",
      "Look at 'I am a teacher' and 'She is a doctor'. What verb do we use to say our job?",
      "Find 'He works in a restaurant' and 'She works in an office'. What preposition is used to say where someone works?",
      "Look at 'He drives a taxi' and 'They build houses'. These verbs describe what people DO in their jobs. Can you think of other examples?"
    ]
  },
  rules: {
    tables: [
      { title: "Talking About Jobs", headers: ["Structure", "Example"], rows: [
        ["What do you do?", "I am a (job). / I work as a (job)."],
        ["What does he/she do?", "He/She is a (job)."],
        ["Where do you work?", "I work in/at a (place)."],
        ["Subject + verb (describes the job)", "He teaches English. She drives a bus."]
      ]},
      { title: "Common Jobs & Workplaces", headers: ["Job", "A/An", "Workplace"], rows: [
        ["teacher", "a teacher", "in a school"],
        ["doctor / nurse", "a doctor / a nurse", "in a hospital"],
        ["engineer", "an engineer", "in an office"],
        ["chef", "a chef", "in a restaurant"],
        ["pilot", "a pilot", "on a plane"],
        ["lawyer", "a lawyer", "in a law firm"],
        ["taxi driver", "a taxi driver", "in a taxi / on the road"]
      ]}
    ],
    commonMistakes: [
      "What do you do? I am teacher (wrong) -> I am a teacher (correct). Use 'a' or 'an' before the job.",
      "He is doctor (wrong) -> He is a doctor (correct). Don't forget the article!",
      "She works like a nurse (wrong) -> She works as a nurse (correct). Use 'as', not 'like', for jobs."
    ],
    tip: "Always use 'a' or 'an' before the job: 'I am a student. He is an engineer. She is a doctor.'"
  },
  practice: {
    fill: [
      { q: "What do you ___? I am a teacher.", a: "do" },
      { q: "What ___ she do? She is a doctor.", a: "does" },
      { q: "I am ___ engineer.", a: "an" },
      { q: "She is ___ nurse.", a: "a" },
      { q: "He works ___ a restaurant.", a: "in" },
      { q: "She works ___ a lawyer.", a: "as" },
      { q: "He drives ___ taxi.", a: "a" },
      { q: "They build houses. They are ___ (job).", a: "builders|construction workers" }
    ],
    mc: [
      { q: "What do you ___? I am a teacher.", options: ["work", "do", "make", "are"], correct: 1 },
      { q: "What ___ she do?", options: ["do", "does", "are", "is"], correct: 1 },
      { q: "I am ___ engineer.", options: ["a", "an", "the", "no article"], correct: 1 },
      { q: "He works ___ a restaurant.", options: ["in", "on", "at", "as"], correct: 2 },
      { q: "I want to be ___ pilot.", options: ["a", "an", "the", "no article"], correct: 0 }
    ],
    errorCorrection: [
      { wrong: "I am teacher.", correct: "I am a teacher." },
      { wrong: "He is an doctor.", correct: "He is a doctor." },
      { wrong: "She works like a nurse.", correct: "She works as a nurse." }
    ]
  },
  conversation: {
    dialogue: [
      { speaker: "Anna", text: "What do you do?" },
      { speaker: "Tom", text: "I am a teacher. I work at a high school." },
      { speaker: "Anna", text: "That sounds interesting! What about your sister? What does she do?" },
      { speaker: "Tom", text: "She is a nurse. She works in a hospital." },
      { speaker: "Anna", text: "My mother is a nurse too. She works at City Hospital." },
      { speaker: "Tom", text: "Really? Maybe they know each other! What do you do?" },
      { speaker: "Anna", text: "I am a designer. I work from home." }
    ],
    roleplay: "You are at a networking event. Talk to 3 different people. Ask their job, where they work, and what they do. Use 'What do you do?', 'Where do you work?', 'What does your ___ do?'"
  },
  produce: {
    tasks: [
      { title: "Speaking - 90 seconds", instruction: "Describe 3 family members or friends. Say what their jobs are, where they work, and what they do. Example: 'My brother is a chef. He works in a restaurant. He cooks Italian food.'" },
      { title: "Writing - Dream Jobs", instruction: "Write 6 sentences about jobs. What do you do? What do your family members do? What job do you want? Use 'a/an' before every job. Example: 'I am a student. My father is a doctor. I want to be a pilot.'" }
    ],
    checklist: [
      "I used 'a' or 'an' before job names correctly.",
      "I used 'What do you do?' to ask about jobs.",
      "I used 'What does he/she do?' for other people.",
      "I used 'in' to say where someone works.",
      "I used 'as' to say someone's role."
    ]
  }
});

// ===== LESSON 8.2: Adjective Placement =====
LESSONS.push({
  unit: 8, lesson: 2, title: "Adjective Placement", unitTitle: "What do you do?",
  discover: {
    text: "Anna: What is your new job like?\nTom: It is great! I have a nice office and friendly coworkers.\nAnna: Is your boss nice?\nTom: Yes, she is very kind. She is a good manager.\nAnna: Do you have a comfortable chair?\nTom: Yes, I have a big desk and a comfortable chair. The office has large windows.\nAnna: That sounds wonderful! Is the salary good?\nTom: Yes, the salary is really good. I am a lucky person.\nAnna: Is it a stressful job?\nTom: No, it isn't. It is a calm environment. The work is interesting.",
    questions: [
      "Look at 'a good teacher'. Where does the adjective ('good') go? Before or after the noun?",
      "Now look at 'The food is delicious'. Where is the adjective here? After the verb 'is'.",
      "What are the two positions for adjectives in English? Find examples of both.",
      "Adjectives in English DO NOT change with plural. Look: 'friendly people'. If the noun is plural, does 'friendly' change?",
      "What about articles (a/an/the)? Where do they go in relation to adjectives? 'A big house', not 'Big a house'."
    ]
  },
  rules: {
    tables: [
      { title: "Adjective Positions", headers: ["Position", "Structure", "Example"], rows: [
        ["Before a noun", "article + adjective + noun", "a good teacher, a big house, a fast car"],
        ["After Verb Be", "subject + be + adjective", "The food is delicious. The movie was boring."]
      ]},
      { title: "Adjective Rules", headers: ["Rule", "Correct", "Wrong"], rows: [
        ["Adjectives before nouns", "a beautiful day", "a day beautiful"],
        ["Adjectives after be", "She is nice.", "She nice."],
        ["No plural form", "friendly people", "friendlys people"],
        ["Article before adjective", "a red dress", "red a dress"]
      ]}
    ],
    commonMistakes: [
      "She is a teacher good (wrong) -> She is a good teacher. Adjective comes BEFORE the noun.",
      "The food delicious (wrong) -> The food is delicious. Don't forget the verb 'be' before the adjective.",
      "They are friendlys (wrong) -> They are friendly. Adjectives don't have plural forms in English."
    ],
    tip: "Adjectives go BEFORE nouns (a nice day) or AFTER 'be' (The day is nice). Never after the noun directly."
  },
  practice: {
    fill: [
      { q: "She is a ___ teacher. (good)", a: "good" },
      { q: "He has a ___ house. (big)", a: "big" },
      { q: "I drive a ___ car. (fast)", a: "fast" },
      { q: "They are ___ people. (friendly)", a: "friendly" },
      { q: "It is a ___ day. (beautiful)", a: "beautiful" },
      { q: "The food is ___. (delicious)", a: "delicious" },
      { q: "She wears a ___ dress. (red)", a: "red" },
      { q: "Your idea is ___! (great)", a: "great" }
    ],
    mc: [
      { q: "She is a ___ teacher.", options: ["good teacher", "teacher good", "goodly teacher", "teacher goodly"], correct: 0 },
      { q: "The food ___.", options: ["delicious", "is delicious", "delicious is", "a delicious"], correct: 1 },
      { q: "They are ___ people.", options: ["friendly", "friendlys", "a friendly", "friendlyes"], correct: 0 },
      { q: "He has ___ house.", options: ["a big", "big a", "a big a", "big the"], correct: 0 },
      { q: "The movie was ___.", options: ["boring", "boring movie", "a boring", "boring is"], correct: 0 }
    ],
    errorCorrection: [
      { wrong: "She is a teacher nice.", correct: "She is a nice teacher." },
      { wrong: "The food delicious.", correct: "The food is delicious." },
      { wrong: "They are friendlys people.", correct: "They are friendly people." }
    ]
  },
  conversation: {
    dialogue: [
      { speaker: "Anna", text: "What is your new job like?" },
      { speaker: "Tom", text: "It is great! I have a nice office and friendly coworkers." },
      { speaker: "Anna", text: "Is your boss nice?" },
      { speaker: "Tom", text: "Yes, she is very kind. She is a good manager." },
      { speaker: "Anna", text: "Do you have a comfortable chair?" },
      { speaker: "Tom", text: "Yes, I have a big desk and a comfortable chair." },
      { speaker: "Anna", text: "That sounds wonderful! Is the salary good?" },
      { speaker: "Tom", text: "Yes, the salary is really good." }
    ],
    roleplay: "Describe your ideal job to a partner. Use at least 5 adjectives. Your partner asks questions using adjectives. Example: 'Is the office big? Are the coworkers friendly?' Place adjectives correctly."
  },
  produce: {
    tasks: [
      { title: "Speaking - 90 seconds", instruction: "Describe 3 people you know. Use 2 adjectives for each person. Put adjectives before nouns and after 'be'. Example: 'My mother is a kind woman. She is very patient.'" },
      { title: "Writing - Descriptions", instruction: "Write 8 sentences describing things and people. Use adjectives before nouns in 4 sentences and after 'be' in 4 sentences. Example: 'I have a comfortable bed. The bed is soft.'" }
    ],
    checklist: [
      "I placed adjectives BEFORE nouns (not after).",
      "I used 'be' before adjectives after the noun.",
      "I did NOT add plural -s to adjectives.",
      "I placed articles before adjectives.",
      "I used a variety of adjectives."
    ]
  }
});

// ===== LESSON 9.1: Count / Noncount Nouns =====
LESSONS.push({
  unit: 9, lesson: 1, title: "Count and Noncount Nouns", unitTitle: "Do we need any eggs?",
  discover: {
    text: "Mom: Do we need any groceries?\nDad: Yes. I need eggs and apples. How many apples do we need?\nMom: We need six apples. Is there any milk?\nDad: Yes, there is some milk in the fridge.\nMom: How much bread is there?\nDad: There is a loaf of bread on the counter. We have cheese, but there is no lettuce.\nMom: How many tomatoes are there?\nDad: There are four tomatoes in the bowl. I also bought rice. There is rice in the cupboard.\nMom: Good. We have everything we need for dinner.",
    questions: [
      "Look at the nouns in the text. Some can be counted (one apple, two apples). Which ones?",
      "Some nouns cannot be counted (milk, rice, bread). We don't say 'one milk, two milks'. Why not?",
      "Look at the questions: 'How many eggs?' vs 'How much milk?'. Which question word goes with countable nouns?",
      "Which question word goes with uncountable nouns?",
      "Look at 'there are apples' (plural) vs 'there is rice' (singular). What does this tell you about the verb form?"
    ]
  },
  rules: {
    tables: [
      { title: "Count vs Noncount Nouns", headers: ["Count Nouns", "Noncount Nouns"], rows: [
        ["Can be counted (one, two, three...)", "Cannot be counted"],
        ["Have singular and plural forms", "Only one form (no plural)"],
        ["Use a/an (a banana, an apple)", "No a/an (some bread, not a bread)"],
        ["Use 'how many'", "Use 'how much'"],
        ["Use 'there are' (plural count)", "Use 'there is' (noncount)"]
      ]},
      { title: "Examples", headers: ["Count Nouns", "Noncount Nouns"], rows: [
        ["apple, banana, egg, orange, tomato", "milk, rice, bread, cheese, lettuce"],
        ["book, pen, chair, table, student", "water, sugar, salt, music, homework"],
        ["dollar, bottle, cup, hour, person", "money, time, information, news, weather"]
      ]}
    ],
    commonMistakes: [
      "I need a bread (wrong) -> I need some bread (correct). Don't use 'a/an' with noncount nouns.",
      "How many milk? (wrong) -> How much milk? (correct). Use 'how much' with noncount nouns.",
      "There is apples (wrong) -> There are apples (correct). Match 'is/are' to count/noncount."
    ],
    tip: "Ask: can I count this? 1 apple, 2 apples = count noun. If you can't count it easily (water, rice), it's noncount."
  },
  practice: {
    fill: [
      { q: "I need ___ (count). How many do we have?", a: "eggs|apples|bananas|oranges|tomatoes" },
      { q: "Do we have any ___ (noncount)?", a: "milk|rice|bread|cheese|lettuce" },
      { q: "How ___ apples do we need?", a: "many" },
      { q: "How ___ milk is there?", a: "much" },
      { q: "There ___ apples in the fridge.", a: "are" },
      { q: "There ___ rice in the cupboard.", a: "is" },
      { q: "I bought ___ banana.", a: "a" },
      { q: "I need some ___ (noncount).", a: "bread|cheese|rice|milk" }
    ],
    mc: [
      { q: "There ___ apples in the fridge.", options: ["is", "are", "am", "be"], correct: 1 },
      { q: "How ___ milk do we need?", options: ["many", "much", "more", "most"], correct: 1 },
      { q: "I need ___ bread.", options: ["a", "an", "some", "one"], correct: 2 },
      { q: "How ___ eggs do we have?", options: ["many", "much", "more", "most"], correct: 0 },
      { q: "There ___ water on the table.", options: ["is", "are", "am", "be"], correct: 0 }
    ],
    errorCorrection: [
      { wrong: "I need a bread.", correct: "I need some bread." },
      { wrong: "How many milk?", correct: "How much milk?" },
      { wrong: "There is apples.", correct: "There are apples." }
    ]
  },
  conversation: {
    dialogue: [
      { speaker: "Mom", text: "Do we need any eggs?" },
      { speaker: "Child", text: "Yes, we do. How many eggs do we need?" },
      { speaker: "Mom", text: "We need six eggs. Is there any milk?" },
      { speaker: "Child", text: "Yes, there is some milk in the fridge." },
      { speaker: "Mom", text: "How much bread is there?" },
      { speaker: "Child", text: "There is a loaf of bread on the counter." },
      { speaker: "Mom", text: "We need some apples. How many are there?" },
      { speaker: "Child", text: "There are four apples left." }
    ],
    roleplay: "You and a partner are planning a meal. Ask about what food you need. Use 'how many' for count nouns and 'how much' for noncount nouns. Also use 'there is/are' and 'some'."
  },
  produce: {
    tasks: [
      { title: "Speaking - 90 seconds", instruction: "Talk about the food in your kitchen. What do you have? Use 'There is some...' and 'There are some...'. Mention at least 3 count and 3 noncount nouns." },
      { title: "Writing - Shopping List", instruction: "Write a shopping list with 10 items. Use 'some' for noncount nouns and specific numbers for count nouns. Then write 4 sentences about what you need using how many/how much." }
    ],
    checklist: [
      "I used 'a/an' or numbers with count nouns.",
      "I used 'some' with noncount nouns.",
      "I used 'how many' with count nouns.",
      "I used 'how much' with noncount nouns.",
      "I used 'there is' with noncount and 'there are' with count."
    ]
  }
});

// ===== LESSON 9.2: Some and Any =====
LESSONS.push({
  unit: 9, lesson: 2, title: "Some and Any", unitTitle: "Do we need any eggs?",
  discover: {
    text: "Mom: Do we have any eggs?\nDad: Yes, there are some eggs in the fridge.\nMom: Is there any milk?\nDad: No, there isn't any milk. We need some.\nMom: Do we have any apples?\nDad: Yes, there are some apples in the basket.\nMom: Can you get some cheese too?\nDad: Sure. Is there anything else?\nMom: I want some orange juice. Do we have any?\nDad: No, we don't have any. I can buy some. Would you like some water too?\nMom: No, we have some water. But we don't have any bread.",
    questions: [
      "Look at 'I need some eggs' and 'Do we have any milk?'. When do we use 'some' vs 'any'? (some = affirmative, any = questions)",
      "Now look at 'I don't have any money' and 'There isn't any bread'. What about negatives?",
      "Look at 'Can I have some coffee?' and 'Would you like some tea?'. These are questions, but they use 'some'. Why? (offers and requests)",
      "Can 'some' be used with both count and noncount nouns? Find examples.",
      "Can 'any' be used with both count and noncount nouns? Find examples."
    ]
  },
  rules: {
    tables: [
      { title: "Some vs Any", headers: ["Use", "Some", "Any"], rows: [
        ["Affirmative sentences", "I need some eggs.", "Not used"],
        ["Negative sentences", "Not used", "I don't have any milk."],
        ["Questions", "Can I have some water? (offers/requests)", "Do you have any milk? (information)"],
        ["With count nouns", "some apples, some books", "any apples, any books"],
        ["With noncount nouns", "some water, some bread", "any water, any bread"]
      ]}
    ],
    commonMistakes: [
      "I don't have some money (wrong) -> I don't have any money (correct). Use 'any' in negatives.",
      "Do you have some milk? (neutral question) -> Do you have any milk? is more common for simple questions.",
      "I need any eggs (wrong in affirmative) -> I need some eggs (correct). Use 'some' in affirmatives."
    ],
    tip: "Some = affirmative sentences. Any = negative sentences and most questions. But use 'some' for offers and requests!"
  },
  practice: {
    fill: [
      { q: "I need ___ eggs.", a: "some" },
      { q: "Do we have ___ milk?", a: "any" },
      { q: "There are ___ apples in the bag.", a: "some" },
      { q: "Is there ___ cheese?", a: "any" },
      { q: "I don't have ___ money.", a: "any" },
      { q: "Can I have ___ water?", a: "some" },
      { q: "There isn't ___ bread.", a: "any" },
      { q: "Would you like ___ tea?", a: "some" }
    ],
    mc: [
      { q: "I need ___ eggs.", options: ["some", "any", "a", "an"], correct: 0 },
      { q: "Do we have ___ milk?", options: ["some", "any", "a", "an"], correct: 1 },
      { q: "I don't have ___ money.", options: ["some", "any", "a", "no"], correct: 1 },
      { q: "Can I have ___ water, please?", options: ["some", "any", "a", "an"], correct: 0 },
      { q: "There isn't ___ bread.", options: ["some", "any", "a", "no"], correct: 1 }
    ],
    errorCorrection: [
      { wrong: "I don't have some money.", correct: "I don't have any money." },
      { wrong: "Do you have some milk? (neutral question)", correct: "Do you have any milk?" },
      { wrong: "I need any eggs.", correct: "I need some eggs." }
    ]
  },
  conversation: {
    dialogue: [
      { speaker: "Mom", text: "Do we need any groceries?" },
      { speaker: "Dad", text: "Yes. I need some eggs and some bread." },
      { speaker: "Mom", text: "Is there any milk left?" },
      { speaker: "Dad", text: "No, there isn't any milk. We need some." },
      { speaker: "Mom", text: "Do we have any apples?" },
      { speaker: "Dad", text: "Yes, there are some apples in the fridge." },
      { speaker: "Mom", text: "Can you get some cheese too?" },
      { speaker: "Dad", text: "Sure. Is there anything else?" },
      { speaker: "Mom", text: "Yes, I want some orange juice." }
    ],
    roleplay: "One person is shopping for groceries. They say what they need using 'some'. The other person checks what is in the kitchen using 'any'. Example: 'I need some milk. Is there any milk in the fridge?'"
  },
  produce: {
    tasks: [
      { title: "Speaking - 90 seconds", instruction: "Tell a partner what food you have in your kitchen and what you don't have. Use 'some' for what you have and 'any' for what you don't have. Ask questions using 'any' too." },
      { title: "Writing - My Kitchen", instruction: "Write 6 sentences about your kitchen using some and any. Include 2 affirmative, 2 negative, and 2 questions. Example: 'I have some apples. There isn't any milk. Do you have any eggs?'" }
    ],
    checklist: [
      "I used 'some' in affirmative sentences.",
      "I used 'any' in negative sentences.",
      "I used 'any' in information questions.",
      "I used 'some' in offers and requests.",
      "I used some/any with both count and noncount nouns."
    ]
  }
});

// ===== LESSON 10.1: Can for Ability =====
LESSONS.push({
  unit: 10, lesson: 1, title: "Can for Ability", unitTitle: "What sports do you play?",
  discover: {
    text: "Anna: Can you play any sports?\nTom: Yes, I can. I can play tennis and soccer.\nAnna: Can you swim?\nTom: Yes, I can swim very well. Can you?\nAnna: No, I can't. But I can dance! I can also cook Italian food.\nTom: That is cool! Can you teach me to dance?\nAnna: Sure! Can you come to my dance class on Saturday?\nTom: Yes, I can. I can also bring my friend Maria. She can dance too.\nAnna: Can your brother come?\nTom: No, he can't. He is busy on Saturday.",
    questions: [
      "Look at 'I can swim'. What form of the verb comes after 'can'? Is it 'to swim' or just 'swim'?",
      "Does 'can' change when the subject changes? 'I can', 'She can', 'They can' — is there any change?",
      "Look at the negative: 'I can't play'. What is the full form? 'cannot' or 'can not'?",
      "How do we form questions with 'can'? Look at 'Can you speak French?' — what is the word order?",
      "What is the short answer for 'Can you speak French?' (Yes, I can / No, I can't). How is it different from 'Do you speak French?'"
    ]
  },
  rules: {
    tables: [
      { title: "Can - Forms", headers: ["Form", "Structure", "Example"], rows: [
        ["Affirmative", "Subject + can + base verb", "I can swim."],
        ["Negative", "Subject + can't/cannot + base verb", "She can't drive."],
        ["Question", "Can + subject + base verb?", "Can you speak French?"],
        ["Short Answer Yes", "Yes + subject + can", "Yes, I can."],
        ["Short Answer No", "No + subject + can't", "No, I can't."]
      ]}
    ],
    commonMistakes: [
      "I can to swim (wrong) -> I can swim (correct). Never use 'to' after 'can'.",
      "He cans swim (wrong) -> He can swim (correct). 'Can' doesn't change for he/she/it.",
      "I don't can swim (wrong) -> I can't swim (correct). Use 'can't', not 'don't can'."
    ],
    tip: "Can + base verb (no 'to', no -s). Simple! I can, you can, he can, she can — all the same form."
  },
  practice: {
    fill: [
      { q: "I ___ swim.", a: "can" },
      { q: "She ___ play the guitar. (cannot)", a: "can't|cannot" },
      { q: "___ you speak French?", a: "Can" },
      { q: "Yes, I ___.", a: "can" },
      { q: "He ___ cook Italian food.", a: "can" },
      { q: "They ___ come to the party. (cannot)", a: "can't|cannot" },
      { q: "___ your brother drive?", a: "Can" },
      { q: "No, he ___.", a: "can't|cannot" }
    ],
    mc: [
      { q: "I ___ swim.", options: ["can", "can to", "cans", "am can"], correct: 0 },
      { q: "She ___ play the guitar.", options: ["can't", "don't can", "cans not", "not can"], correct: 0 },
      { q: "___ you speak French?", options: ["Can", "Do can", "Are", "Have"], correct: 0 },
      { q: "He ___ cook Italian food.", options: ["can", "cans", "can to", "is can"], correct: 0 },
      { q: "Yes, I ___.", options: ["can", "can to", "do can", "am"], correct: 0 }
    ],
    errorCorrection: [
      { wrong: "I can to swim.", correct: "I can swim." },
      { wrong: "He cans swim.", correct: "He can swim." },
      { wrong: "I don't can swim.", correct: "I can't swim." }
    ]
  },
  conversation: {
    dialogue: [
      { speaker: "Anna", text: "Can you play any sports?" },
      { speaker: "Tom", text: "Yes, I can. I can play tennis and soccer." },
      { speaker: "Anna", text: "Can you swim?" },
      { speaker: "Tom", text: "Yes, I can swim very well. Can you?" },
      { speaker: "Anna", text: "No, I can't. But I can dance!" },
      { speaker: "Tom", text: "That is cool! Can you teach me?" },
      { speaker: "Anna", text: "Sure! Can you come to my dance class on Saturday?" },
      { speaker: "Tom", text: "Yes, I can. That sounds fun!" }
    ],
    roleplay: "Ask a partner about 5 things they can and cannot do. Use 'Can you...?' questions. Your partner answers with short answers (Yes, I can / No, I can't). Then talk about what other people can do."
  },
  produce: {
    tasks: [
      { title: "Speaking - 90 seconds", instruction: "Tell a partner 3 things you can do and 3 things you can't do. Then ask your partner what they can do. Talk about family members too. Example: 'I can cook, but I can't bake. My brother can play the guitar.'" },
      { title: "Writing - Abilities", instruction: "Write 8 sentences about abilities. Use: I can, I can't, My friend can, My mother can, etc. Include 2 questions with 'Can you...?'" }
    ],
    checklist: [
      "I used 'can' + base verb (no 'to').",
      "I used 'can't' for negatives (not 'don't can').",
      "I used the same 'can' for all subjects.",
      "I formed questions with 'Can + subject + verb?'",
      "I used short answers (Yes, I can / No, I can't)."
    ]
  }
});

// ===== LESSON 10.2: Sports Vocabulary =====
LESSONS.push({
  unit: 10, lesson: 2, title: "Sports and Activities", unitTitle: "What sports do you play?",
  discover: {
    text: "Anna: What sports do you play?\nTom: I play basketball and soccer. What about you?\nAnna: I don't play any sports. But I go jogging every morning.\nTom: That is good exercise! Do you do any other activities?\nAnna: Yes, I do yoga on weekends. And I go swimming in the summer.\nTom: My sister goes swimming too. She also does karate.\nAnna: Does she play any team sports?\nTom: No, she doesn't. She prefers individual activities. I go hiking sometimes too.\nAnna: I don't go hiking, but I do aerobics at the gym.",
    questions: [
      "Look at 'I play soccer' and 'She plays tennis'. What verb do we use for team sports? (play)",
      "Look at 'He goes swimming' and 'They go jogging'. What verb do we use for activities ending in -ing? (go)",
      "Look at 'We do yoga' and 'He does karate'. What verb do we use for individual/健身 activities? (do)",
      "What sports do we 'play'? (soccer, tennis, basketball, baseball)",
      "What sports/activities do we 'go' + -ing? (swimming, jogging, running, hiking)"
    ]
  },
  rules: {
    tables: [
      { title: "Sports Verbs", headers: ["Verb", "Use With", "Examples"], rows: [
        ["play", "team sports and ball games", "play soccer, play tennis, play basketball, play baseball"],
        ["go", "activities ending in -ing  (movement)", "go swimming, go jogging, go running, go hiking, go skiing"],
        ["do", "individual exercises and martial arts", "do yoga, do karate, do gymnastics, do aerobics"]
      ]}
    ],
    commonMistakes: [
      "I go soccer (wrong) -> I play soccer. Use 'play' for team sports with a ball.",
      "I play swimming (wrong) -> I go swimming. Use 'go + -ing' for movement activities.",
      "I do tennis (wrong) -> I play tennis. Tennis is a sport you play, not 'do'."
    ],
    tip: "Play = ball sports (play soccer). Go + -ing = movement activities (go swimming). Do = fitness/martial arts (do yoga)."
  },
  practice: {
    fill: [
      { q: "I ___ soccer every weekend.", a: "play" },
      { q: "She ___ tennis at the club.", a: "plays" },
      { q: "He goes ___ on Saturdays. (swim)", a: "swimming" },
      { q: "We ___ yoga in the morning.", a: "do" },
      { q: "They go ___ in the park. (jog)", a: "jogging" },
      { q: "___ you play basketball?", a: "Do" },
      { q: "She goes to the ___ three times a week.", a: "gym" },
      { q: "He ___ karate after school.", a: "does" }
    ],
    mc: [
      { q: "I ___ soccer every weekend.", options: ["play", "go", "do", "make"], correct: 0 },
      { q: "He ___ swimming on Saturdays.", options: ["plays", "goes", "does", "makes"], correct: 1 },
      { q: "We ___ yoga in the morning.", options: ["play", "go", "do", "make"], correct: 2 },
      { q: "She ___ tennis at the club.", options: ["plays", "goes", "does", "makes"], correct: 0 },
      { q: "They ___ jogging in the park.", options: ["play", "go", "do", "make"], correct: 1 }
    ],
    errorCorrection: [
      { wrong: "I go soccer.", correct: "I play soccer." },
      { wrong: "She plays swimming.", correct: "She goes swimming." },
      { wrong: "He do karate.", correct: "He does karate." }
    ]
  },
  conversation: {
    dialogue: [
      { speaker: "Anna", text: "What sports do you play?" },
      { speaker: "Tom", text: "I play basketball and soccer. What about you?" },
      { speaker: "Anna", text: "I don't play any sports. But I go jogging every morning." },
      { speaker: "Tom", text: "That is good exercise! Do you do any other activities?" },
      { speaker: "Anna", text: "Yes, I do yoga on weekends. And I go swimming in the summer." },
      { speaker: "Tom", text: "My sister goes swimming too. She also does karate." },
      { speaker: "Anna", text: "Does she play any team sports?" },
      { speaker: "Tom", text: "No, she doesn't. She prefers individual activities." }
    ],
    roleplay: "Ask your partner what sports and activities they do. Use 'Do you play...?', 'Do you go...?', 'Do you do...?'. Your partner answers using play/go/do correctly. Ask about 6 different activities."
  },
  produce: {
    tasks: [
      { title: "Speaking - 90 seconds", instruction: "Describe your sports and exercise routine. What do you play? What do you go? What do you do? Use the three different verbs. Talk about family members too." },
      { title: "Writing - Sports and Activities", instruction: "Write 6 sentences about sports and activities you and your family do. Use play, go, and do at least twice each. Example: 'I play tennis. My sister goes swimming. My father does yoga.'" }
    ],
    checklist: [
      "I used 'play' for team/ball sports.",
      "I used 'go + -ing' for movement activities.",
      "I used 'do' for fitness/martial arts.",
      "I used the correct third person -s (plays, goes, does).",
      "I asked questions about sports correctly."
    ]
  }
});

// ===== LESSON 11.1: Be Going To =====
LESSONS.push({
  unit: 11, lesson: 1, title: "Be Going To", unitTitle: "What are you going to do?",
  discover: {
    text: "Anna: What are you going to do this weekend?\nTom: I am going to visit my family.\nAnna: That sounds nice! Are you going to stay overnight?\nTom: Yes, I am. I am going to stay until Sunday.\nAnna: What is your mother going to cook?\nTom: She is going to make her famous lasagna!\nAnna: Yum! Are you going to help her?\nTom: Yes, I am going to help in the kitchen. My father is going to bake a cake.\nAnna: What is your brother going to do?\nTom: He is not going to be there. He is going to travel for work.",
    questions: [
      "Look at 'I am going to visit'. What two parts make up this future form? (am + going to + base verb)",
      "What form of the verb comes after 'going to'? Is it the base form or -ing form?",
      "Look at 'Are you going to study?'. How do we form questions with 'going to'?",
      "Look at 'He is not going to come'. How do we form negatives?",
      "Is the plan/decision made BEFORE speaking (a prior plan) or AT the moment of speaking? (before speaking)"
    ]
  },
  rules: {
    tables: [
      { title: "Be Going To - Forms", headers: ["Form", "Structure", "Example"], rows: [
        ["Affirmative", "Subject + am/is/are + going to + base verb", "I am going to visit my grandmother."],
        ["Negative", "Subject + am/is/are + not + going to + base verb", "He is not going to come."],
        ["Yes/No Question", "Am/Is/Are + subject + going to + base verb?", "Are you going to study?"],
        ["Wh- Question", "Wh- + am/is/are + subject + going to + base verb?", "What are you going to do?"]
      ]}
    ],
    commonMistakes: [
      "I going to visit (wrong) -> I am going to visit (correct). Don't forget the 'be' verb!",
      "She is going to visits (wrong) -> She is going to visit (correct). Use the base verb after 'going to'.",
      "What you going to do? (wrong) -> What are you going to do? (correct). Include the 'be' verb."
    ],
    tip: "Use 'going to' for PLANS you made before speaking. You already decided. Be going to = am/is/are + going to + base verb."
  },
  practice: {
    fill: [
      { q: "I ___ going to visit my grandmother tomorrow.", a: "am" },
      { q: "She ___ going to cook dinner.", a: "is" },
      { q: "We ___ going to have a great time.", a: "are" },
      { q: "___ you going to study tonight?", a: "Are" },
      { q: "What ___ you going to do this weekend?", a: "are" },
      { q: "He is not ___ to come to the party.", a: "going" },
      { q: "They ___ going to travel to Japan.", a: "are" },
      { q: "I am going to ___ a new phone. (buy)", a: "buy" }
    ],
    mc: [
      { q: "I ___ going to visit my grandmother.", options: ["am", "is", "are", "be"], correct: 0 },
      { q: "She ___ going to cook dinner.", options: ["am", "is", "are", "be"], correct: 1 },
      { q: "___ you going to study tonight?", options: ["Am", "Is", "Are", "Do"], correct: 2 },
      { q: "He is ___ going to come.", options: ["not", "no", "don't", "isn't"], correct: 0 },
      { q: "What ___ you going to do?", options: ["am", "is", "are", "do"], correct: 2 }
    ],
    errorCorrection: [
      { wrong: "I going to visit.", correct: "I am going to visit." },
      { wrong: "She is going to visits.", correct: "She is going to visit." },
      { wrong: "What you going to do?", correct: "What are you going to do?" }
    ]
  },
  conversation: {
    dialogue: [
      { speaker: "Anna", text: "What are you going to do this weekend?" },
      { speaker: "Tom", text: "I am going to visit my family." },
      { speaker: "Anna", text: "That sounds nice! Are you going to stay overnight?" },
      { speaker: "Tom", text: "Yes, I am. I am going to stay until Sunday." },
      { speaker: "Anna", text: "What is your mother going to cook?" },
      { speaker: "Tom", text: "She is going to make her famous lasagna!" },
      { speaker: "Anna", text: "Yum! Are you going to help her?" },
      { speaker: "Tom", text: "Yes, I am going to help in the kitchen." }
    ],
    roleplay: "Ask your partner about their plans for: this weekend, next summer, tonight, and next year. Use 'What are you going to...?' and 'Are you going to...?' Your partner answers using 'going to'."
  },
  produce: {
    tasks: [
      { title: "Speaking - 90 seconds", instruction: "Tell a partner about 4 plans you have. Use 'going to' for each plan. Say: what you are going to do, when, and with who. Example: 'I am going to visit my cousin next month.'" },
      { title: "Writing - My Plans", instruction: "Write 6 sentences about your plans using 'going to'. Include 1 negative sentence and 1 question. Example: 'I am going to study English tonight. My friend is not going to come.'" }
    ],
    checklist: [
      "I used am/is/are before 'going to'.",
      "I used the base verb after 'going to'.",
      "I matched 'be' to the subject (am/is/are).",
      "I formed questions by putting 'be' before the subject.",
      "I formed negatives with 'be + not + going to'."
    ]
  }
});

// ===== LESSON 11.2: Future Time Expressions =====
LESSONS.push({
  unit: 11, lesson: 2, title: "Future Time Expressions", unitTitle: "What are you going to do?",
  discover: {
    text: "Anna: When is our English exam?\nTom: It is next Monday.\nAnna: I am going to study this weekend. When are you going to study?\nTom: I am going to study after work today.\nAnna: What time is the test going to start?\nTom: It is going to start at 9 AM.\nAnna: How long is the test going to be?\nTom: It is going to be one hour long.\nAnna: Are we going to practice speaking?\nTom: Yes, we are. The teacher is going to interview each student.\nAnna: Okay. I am not going to be nervous. I am going to do my best.",
    questions: [
      "Look at 'next week', 'tomorrow', 'next month'. What do these time expressions tell us? (future time)",
      "Find all the future time expressions in the text. Make a list.",
      "Which time expressions refer to the near future (this evening, tonight)?",
      "Which refer to the distant future (next year)?",
      "Compare 'I am going to travel next week' with 'I travel next week'. Which is correct for a plan? Why?"
    ]
  },
  rules: {
    tables: [
      { title: "Future Time Expressions", headers: ["Time Expression", "Meaning", "Example"], rows: [
        ["next week / next month / next year", "the following week/month/year", "I am going to travel next week."],
        ["tomorrow", "the day after today", "She is going to start tomorrow."],
        ["tonight / this evening", "later today", "Are you going to call tonight?"],
        ["this weekend / this Monday", "the upcoming one", "We are going to party this weekend."],
        ["in + time (in 10 minutes, in 2 days)", "after that time passes", "The store is going to close in 10 minutes."],
        ["on + day (on Monday)", "specific day", "I am not going to work on Monday."]
      ]}
    ],
    commonMistakes: [
      "I going to travel the next week (wrong) -> I am going to travel next week (correct). Don't use 'the' before 'next'.",
      "In Monday (wrong) -> On Monday (correct). Use 'on' for days.",
      "In next week (wrong) -> next week (correct). Don't use 'in' before 'next/last/this'."
    ],
    tip: "Future time expressions tell WHEN the action happens. Put them at the beginning or end of the sentence."
  },
  practice: {
    fill: [
      { q: "I am going to travel ___ week. (the week after this one)", a: "next" },
      { q: "She is going to start her new job ___. (the day after today)", a: "tomorrow" },
      { q: "They are going to visit us ___ month.", a: "next" },
      { q: "We are going to have a party ___ weekend.", a: "this" },
      { q: "He is going to graduate ___ year.", a: "next" },
      { q: "Are you going to call her ___? (later today)", a: "tonight|this evening" },
      { q: "I am not going to work ___ Monday.", a: "on" },
      { q: "The store is going to close ___ ten minutes.", a: "in" }
    ],
    mc: [
      { q: "I am going to travel ___ week.", options: ["next", "the next", "in next", "on next"], correct: 0 },
      { q: "She is going to start ___.", options: ["tomorrow", "yesterday", "last week", "now"], correct: 0 },
      { q: "Are you going to call ___?", options: ["tonight", "yesterday", "last night", "ago"], correct: 0 },
      { q: "I am not going to work ___ Monday.", options: ["in", "on", "at", "by"], correct: 1 },
      { q: "The store is going to close ___ 10 minutes.", options: ["in", "on", "at", "after"], correct: 0 }
    ],
    errorCorrection: [
      { wrong: "I am going to travel the next week.", correct: "I am going to travel next week." },
      { wrong: "In Monday, I am going to start.", correct: "On Monday, I am going to start." },
      { wrong: "I am going to call you in tonight.", correct: "I am going to call you tonight." }
    ]
  },
  conversation: {
    dialogue: [
      { speaker: "Anna", text: "What are you going to do next weekend?" },
      { speaker: "Tom", text: "I am going to visit my parents next Saturday." },
      { speaker: "Anna", text: "Are you going to stay overnight?" },
      { speaker: "Tom", text: "No, I am going to come back on Sunday evening." },
      { speaker: "Anna", text: "What about next month? Any plans?" },
      { speaker: "Tom", text: "Yes, I am going to start a new job next month!" },
      { speaker: "Anna", text: "Congratulations! When exactly?" },
      { speaker: "Tom", text: "I am going to start on the first of next month." }
    ],
    roleplay: "Plan next year with a partner. Talk about what you are going to do: next week, next month, next year, tonight, tomorrow. Use at least 5 different future time expressions."
  },
  produce: {
    tasks: [
      { title: "Speaking - 90 seconds", instruction: "Tell a partner about 5 future plans. Use a different time expression for each one (next week, tomorrow, tonight, next month, on + day). Say the time expression clearly." },
      { title: "Writing - Future Plans", instruction: "Write 8 sentences about future plans. Use 8 different time expressions. Include one sentence for each: next week, tomorrow, tonight, this weekend, next month, next year, in + time, on + day." }
    ],
    checklist: [
      "I used 'next', 'this', 'tomorrow' correctly without 'the'.",
      "I used 'on' before days (on Monday).",
      "I used 'in' before periods of time (in 10 minutes).",
      "I placed time expressions at the start or end.",
      "I used the correct future verb form with 'going to'."
    ]
  }
});

// ===== LESSON 12.1: Have / Feel =====
LESSONS.push({
  unit: 12, lesson: 1, title: "Have and Feel", unitTitle: "What's the matter?",
  discover: {
    text: "Doctor: Hello, Tom. What is the matter?\nTom: I don't feel well. I have a headache and a sore throat.\nDoctor: Do you have a fever?\nTom: Yes, I do. I feel very hot.\nDoctor: Do you have a stomachache?\nTom: No, I don't. But I feel tired.\nDoctor: I think you have a cold. Do you have any medicine at home?\nTom: Yes, I have some medicine. But do I need to rest?\nDoctor: Yes, you do. Rest for two days and drink lots of water.",
    questions: [
      "Look at 'I have a headache' and 'She has a cold'. What is different about 'have'?",
      "When do we use 'has' instead of 'have'? (he/she/it)",
      "Look at 'I don't feel well' and 'She feels tired'. What verb describes how someone feels? (feel/feels)",
      "Look at the question 'What's the matter?'. What does this question ask about?",
      "How do we ask about someone's health? 'How do you feel?' or 'Do you have a...?'"
    ]
  },
  rules: {
    tables: [
      { title: "Have / Has", headers: ["Subject", "Verb", "Example"], rows: [
        ["I / You / We / They", "have", "I have a headache."],
        ["He / She / It", "has", "She has a cold."],
        ["Questions", "Do/Does + subject + have?", "Do you have a fever? Does he have a cold?"],
        ["Negatives", "don't/doesn't + have", "I don't have a fever. She doesn't have medicine."]
      ]},
      { title: "Feel / Feels", headers: ["Subject", "Verb", "Example"], rows: [
        ["I / You / We / They", "feel", "I feel great! They feel sick."],
        ["He / She / It", "feels", "She feels tired. He feels well."],
        ["Questions", "How do/does + subject + feel?", "How do you feel? How does she feel?"]
      ]}
    ],
    commonMistakes: [
      "He have a cold (wrong) -> He has a cold (correct). Use 'has' with he/she/it.",
      "I feels tired (wrong) -> I feel tired (correct). Use 'feel' with I/you/we/they.",
      "Does she has a fever? (wrong) -> Does she have a fever? (correct). After 'does', use base form 'have'."
    ],
    tip: "Have -> I/you/we/they. Has -> he/she/it. Feel -> I/you/we/they. Feels -> he/she/it. Match the verb to the subject."
  },
  practice: {
    fill: [
      { q: "I ___ a headache.", a: "have" },
      { q: "She ___ a cold.", a: "has" },
      { q: "He ___ a fever.", a: "has" },
      { q: "___ you have a stomachache?", a: "Do" },
      { q: "I don't ___ well. (feel)", a: "feel" },
      { q: "She ___ tired.", a: "feels" },
      { q: "How ___ you feel?", a: "do" },
      { q: "The baby ___ a fever.", a: "has" }
    ],
    mc: [
      { q: "I ___ a headache.", options: ["have", "has", "am have", "having"], correct: 0 },
      { q: "She ___ a cold.", options: ["have", "has", "am have", "having"], correct: 1 },
      { q: "___ you have a fever?", options: ["Do", "Does", "Are", "Have"], correct: 0 },
      { q: "How ___ you feel?", options: ["do", "does", "are", "have"], correct: 0 },
      { q: "She ___ tired.", options: ["feel", "feels", "is feel", "feeling"], correct: 1 }
    ],
    errorCorrection: [
      { wrong: "He have a cold.", correct: "He has a cold." },
      { wrong: "I feels tired.", correct: "I feel tired." },
      { wrong: "Does she has a fever?", correct: "Does she have a fever?" }
    ]
  },
  conversation: {
    dialogue: [
      { speaker: "Anna", text: "What's the matter? You look tired." },
      { speaker: "Tom", text: "I have a headache and I feel sick." },
      { speaker: "Anna", text: "Oh no! Do you have a fever?" },
      { speaker: "Tom", text: "I don't know. I feel very tired." },
      { speaker: "Anna", text: "Do you have any medicine?" },
      { speaker: "Tom", text: "No, I don't have any medicine at home." },
      { speaker: "Anna", text: "I have some aspirin. Do you want some?" },
      { speaker: "Tom", text: "Yes, please. Thank you!" }
    ],
    roleplay: "One person is sick. The other asks questions: 'What's the matter?', 'How do you feel?', 'Do you have a ___?'. The sick person answers using have/has and feel/feels. Ask about at least 4 symptoms."
  },
  produce: {
    tasks: [
      { title: "Speaking - 90 seconds", instruction: "Describe how you feel today and in the past week. Say what symptoms you have/had. Example: 'I have a headache today. Yesterday I felt very tired.' Use have, has, feel, feels." },
      { title: "Writing - At the Doctor", instruction: "Write a dialogue between a doctor and a patient. The patient has 3 symptoms. The doctor asks questions. Use have/has and feel/feels at least 5 times." }
    ],
    checklist: [
      "I used 'have' with I/you/we/they.",
      "I used 'has' with he/she/it.",
      "I used 'feel' with I/you/we/they.",
      "I used 'feels' with he/she/it.",
      "I formed questions with 'Do/Does...have?' and 'How...feel?'."
    ]
  }
});

// ===== LESSON 12.2: Imperatives =====
LESSONS.push({
  unit: 12, lesson: 2, title: "Imperatives", unitTitle: "What's the matter?",
  discover: {
    text: "Doctor: Take this medicine twice a day.\nTom: Okay. Should I do anything else?\nDoctor: Yes. Drink lots of water and stay in bed.\nTom: Can I go to work tomorrow?\nDoctor: No. Don't go to work. Rest for two days.\nTom: What about food?\nDoctor: Don't eat spicy or heavy food. Eat soup and plain rice.\nTom: Should I open the window?\nDoctor: Yes, open the window for fresh air. And don't forget to take your pills with food.\nTom: Thank you, doctor.\nDoctor: You're welcome. Get some sleep and call me if you don't feel better.",
    questions: [
      "Look at 'Take this medicine' and 'Drink lots of water'. What is the verb form? Is it the base form?",
      "What is the subject of these sentences? Is it stated? (The subject is 'you' - understood)",
      "Look at 'Don't go to work' and 'Don't eat spicy food'. How do we make negative imperatives?",
      "What is the purpose of imperatives? (to give orders, instructions, advice, suggestions)",
      "Look at 'Please call the doctor'. What does 'please' do to the imperative? (makes it more polite)"
    ]
  },
  rules: {
    tables: [
      { title: "Imperatives", headers: ["Type", "Structure", "Example"], rows: [
        ["Affirmative", "Base verb (+ object)", "Take this medicine."],
        ["Negative", "Don't + base verb (+ object)", "Don't go to work."],
        ["Polite", "Please + base verb", "Please call the doctor."],
        ["With 'let's'", "Let's + base verb", "Let's take a break."]
      ]}
    ],
    commonMistakes: [
      "You take this medicine (command) -> Take this medicine (correct). Imperatives don't usually include the subject 'you'.",
      "No go to work (wrong) -> Don't go to work (correct). Use 'don't', not 'no', for negative commands.",
      "To take this medicine (wrong as command) -> Take this medicine (correct). Use the base verb without 'to'."
    ],
    tip: "Imperatives start with the base verb. To make them negative, add 'don't'. Use 'please' to be polite."
  },
  practice: {
    fill: [
      { q: "___ this medicine. (take)", a: "Take" },
      { q: "___ lots of water. (drink)", a: "Drink" },
      { q: "___ in bed. (stay)", a: "Stay" },
      { q: "___ go to work. (negative)", a: "Don't" },
      { q: "___ eat spicy food. (negative)", a: "Don't" },
      { q: "___ call the doctor. (polite)", a: "Please" },
      { q: "___ down and rest. (sit)", a: "Sit" },
      { q: "___ worry. (negative)", a: "Don't" }
    ],
    mc: [
      { q: "___ this medicine.", options: ["Take", "To take", "Taking", "Takes"], correct: 0 },
      { q: "___ go to work. You are sick.", options: ["Not", "Don't", "No", "Doesn't"], correct: 1 },
      { q: "___ call the doctor, please.", options: ["Please", "You", "To", "Don't"], correct: 0 },
      { q: "___ lots of water every day.", options: ["Drink", "Drinking", "Drinks", "To drink"], correct: 0 },
      { q: "___ down and rest.", options: ["Sit", "Sitting", "Sits", "To sit"], correct: 0 }
    ],
    errorCorrection: [
      { wrong: "You take this medicine. (command)", correct: "Take this medicine." },
      { wrong: "No go to work.", correct: "Don't go to work." },
      { wrong: "To rest for an hour.", correct: "Rest for an hour." }
    ]
  },
  conversation: {
    dialogue: [
      { speaker: "Doctor", text: "What's the matter?" },
      { speaker: "Patient", text: "I have a bad cold and a fever." },
      { speaker: "Doctor", text: "Take this medicine twice a day." },
      { speaker: "Patient", text: "Anything else?" },
      { speaker: "Doctor", text: "Drink lots of water and stay in bed." },
      { speaker: "Patient", text: "Can I go to work tomorrow?" },
      { speaker: "Doctor", text: "No. Don't go to work until your fever is gone." },
      { speaker: "Patient", text: "OK, thank you doctor." }
    ],
    roleplay: "One person is a doctor. The other is a patient with a health problem. The doctor gives 5 imperatives (advice/instructions). The patient responds. Use both affirmative and negative imperatives."
  },
  produce: {
    tasks: [
      { title: "Speaking - 90 seconds", instruction: "Give 5 pieces of health advice to someone who has a cold. Use imperatives. Example: 'Drink tea. Don't drink cold water. Get some rest.'" },
      { title: "Writing - Advice for Travelers", instruction: "Write 8 imperatives for someone traveling to your country. Include 4 affirmative and 4 negative imperatives. Example: 'Try the local food. Don't forget your passport.'" }
    ],
    checklist: [
      "I used the base verb without 'to'.",
      "I did NOT include the subject 'you'.",
      "I used 'Don't' for negative imperatives.",
      "I used 'please' to make polite requests.",
      "My imperatives were clear and direct."
    ]
  }
});

// ===== LESSON 13.1: Prepositions of Place =====
LESSONS.push({
  unit: 13, lesson: 1, title: "Prepositions of Place", unitTitle: "You can't miss it.",
  discover: {
    text: "Tourist: Excuse me, where is the bank?\nLocal: The bank is next to the supermarket on Main Street.\nTourist: And is there a post office nearby?\nLocal: Yes. The post office is across from the park.\nTourist: How about the library?\nLocal: The library is between the school and the hospital.\nTourist: Is the museum close?\nLocal: Yes, but it is behind the train station. Walk around the corner — the museum is there.\nTourist: Where is the hotel?\nLocal: The hotel is in front of the park. The cafe is on the corner.\nTourist: Is there a pharmacy near here?\nLocal: Yes, the pharmacy is on Pine Street, opposite the church.",
    questions: [
      "Look at 'next to the supermarket'. What does 'next to' mean? (beside, adjacent)",
      "What does 'across from' mean? (on the other side of the street/area)",
      "Look at 'between the school and the hospital'. How many things are on each side? (one on each side)",
      "What is the difference between 'in front of' and 'behind'? (front vs back)",
      "Find all the prepositions of place in the text. How many different ones can you find?"
    ]
  },
  rules: {
    tables: [
      { title: "Prepositions of Place", headers: ["Preposition", "Meaning", "Example"], rows: [
        ["next to", "beside, adjacent to", "The bank is next to the supermarket."],
        ["across from", "on the opposite side", "The post office is across from the park."],
        ["between", "with something on both sides", "The library is between the school and the hospital."],
        ["on the corner of", "where two streets meet", "The cafe is on the corner of Main Street."],
        ["behind", "at the back of", "The museum is behind the train station."],
        ["in front of", "at the front of", "The hotel is in front of the park."],
        ["near", "close to, not far", "My house is near the bus stop."],
        ["opposite", "facing, across from", "The pharmacy is opposite the church."]
      ]}
    ],
    commonMistakes: [
      "The bank is in front the supermarket (wrong) -> The bank is in front OF the supermarket (correct). 'In front of' has 'of'!",
      "The library is between the school (wrong) -> The library is between the school AND the hospital (correct). 'Between' needs two things.",
      "The cafe is on corner (wrong) -> The cafe is ON THE corner (correct). Use 'on the corner', not just 'on corner'."
    ],
    tip: "To give directions, use prepositions + landmarks. 'The bank is next to the supermarket, across from the park.'"
  },
  practice: {
    fill: [
      { q: "The bank is ___ to the supermarket.", a: "next" },
      { q: "The post office is across ___ the park.", a: "from" },
      { q: "The library is ___ the school and the hospital.", a: "between" },
      { q: "The cafe is on ___ corner of Main Street.", a: "the" },
      { q: "The museum is ___ the train station. (at the back)", a: "behind" },
      { q: "The hotel is in front ___ the park.", a: "of" },
      { q: "My house is near the ___ stop.", a: "bus" },
      { q: "The pharmacy is ___ the church. (facing)", a: "opposite" }
    ],
    mc: [
      { q: "The bank is ___ to the supermarket.", options: ["next", "near", "opposite", "across"], correct: 0 },
      { q: "The library is ___ the school and the hospital.", options: ["next to", "between", "across from", "behind"], correct: 1 },
      { q: "The hotel is in front ___ the park.", options: ["of", "from", "to", "at"], correct: 0 },
      { q: "The cafe is on the ___ of Main Street.", options: ["corner", "front", "behind", "side"], correct: 0 },
      { q: "The pharmacy is ___ the church.", options: ["next", "between", "opposite", "corner"], correct: 2 }
    ],
    errorCorrection: [
      { wrong: "The bank is in front the supermarket.", correct: "The bank is in front of the supermarket." },
      { wrong: "The library is between the school.", correct: "The library is between the school and the hospital." },
      { wrong: "The cafe is on corner.", correct: "The cafe is on the corner." }
    ]
  },
  conversation: {
    dialogue: [
      { speaker: "Tourist", text: "Excuse me, where is the nearest bank?" },
      { speaker: "Local", text: "There is a bank next to the supermarket on Main Street." },
      { speaker: "Tourist", text: "And where is the post office?" },
      { speaker: "Local", text: "It's across from the park, between the library and the cafe." },
      { speaker: "Tourist", text: "Is there a pharmacy near here?" },
      { speaker: "Local", text: "Yes, it's on the corner of Pine Street, opposite the church." },
      { speaker: "Tourist", text: "Great, thank you! One more thing — is the museum near the train station?" },
      { speaker: "Local", text: "Yes, the museum is just behind the train station." }
    ],
    roleplay: "One person is a tourist asking for locations. The other is a local giving directions using prepositions of place. Ask about 5 places. Use different prepositions each time."
  },
  produce: {
    tasks: [
      { title: "Speaking - 90 seconds", instruction: "Describe the locations of 5 places in your neighborhood. Use a different preposition for each one. Example: 'My house is next to the park. The bank is across from the school.'" },
      { title: "Writing - My Town", instruction: "Write 6 sentences about places in your town/city. Use 6 different prepositions of place: next to, across from, between, behind, in front of, near, opposite." }
    ],
    checklist: [
      "I used 'next to' for adjacent locations.",
      "I used 'across from' / 'opposite' for facing locations.",
      "I used 'between...and...' correctly (with two objects).",
      "I used 'in front of' correctly (with 'of').",
      "I used 'on the corner' and 'near' correctly."
    ]
  }
});

// ===== LESSON 13.2: Directions =====
LESSONS.push({
  unit: 13, lesson: 2, title: "Giving Directions", unitTitle: "You can't miss it.",
  discover: {
    text: "Tourist: Excuse me, how do I get to the train station?\nLocal: Go straight ahead for two blocks. Turn left at the traffic light.\nTourist: Left at the traffic light. Got it.\nLocal: Then turn right on Oak Street. Walk past the library.\nTourist: Is the station on Oak Street?\nLocal: Yes, it is on your left. You can't miss it.\nTourist: Is there another way?\nLocal: Sure. Take the first street on the right and go around the corner. The entrance is on Main Street between the bank and the cafe.\nTourist: Should I cross the street?\nLocal: Yes, cross at the crosswalk. The station is at the end of the street.",
    questions: [
      "Look at 'Go straight ahead', 'Turn left', 'Turn right'. What verbs are used to give directions?",
      "What preposition is used with 'Turn left/right'? (at the traffic light, on Oak Street)",
      "Look at 'Walk past the library'. What does 'past' mean? (go beyond, passing by)",
      "What does 'You can't miss it' mean? Is it positive or negative? (positive = it is very easy to find)",
      "Find all the direction verbs in the text. How many can you list?"
    ]
  },
  rules: {
    tables: [
      { title: "Giving Directions", headers: ["Direction", "Meaning", "Example"], rows: [
        ["Go straight ahead", "Continue in the same direction", "Go straight ahead for two blocks."],
        ["Turn left / right", "Change direction", "Turn left at the traffic light."],
        ["Walk past", "Go beyond something", "Walk past the library."],
        ["Take the first/second street", "Follow a specific street", "Take the first street on the right."],
        ["Go around the corner", "Follow the turn", "Go around the corner."],
        ["Cross the street", "Go to the other side", "Cross the street at the crosswalk."]
      ]}
    ],
    commonMistakes: [
      "Go straight (wrong without context) -> Go straight ahead (correct). Use 'straight ahead' for clarity.",
      "Turn the left (wrong) -> Turn left (correct). Don't use 'the' before left/right.",
      "In your left (wrong) -> On your left (correct). Use 'on' with left/right."
    ],
    tip: "Directions usually start with a verb (Go, Turn, Walk, Take, Cross). Then add a landmark or street name."
  },
  practice: {
    fill: [
      { q: "Go straight ___ for two blocks.", a: "ahead" },
      { q: "Turn ___ at the traffic light. (opposite of right)", a: "left" },
      { q: "Turn ___ on Oak Street. (opposite of left)", a: "right" },
      { q: "Walk ___ the library. (go beyond)", a: "past" },
      { q: "It is on your ___. (not right)", a: "left" },
      { q: "Take the first street on the ___. (not left)", a: "right" },
      { q: "Go ___ the corner.", a: "around" },
      { q: "It is at the ___ of the street.", a: "end" }
    ],
    mc: [
      { q: "Go straight ___ for two blocks.", options: ["ahead", "left", "right", "past"], correct: 0 },
      { q: "Turn ___ at the traffic light.", options: ["left", "the left", "to left", "on left"], correct: 0 },
      { q: "Walk ___ the library.", options: ["past", "in front", "next", "between"], correct: 0 },
      { q: "Take the first street on the ___.", options: ["right", "right side", "right-hand", "rightly"], correct: 0 },
      { q: "It is ___ your left.", options: ["on", "in", "at", "to"], correct: 0 }
    ],
    errorCorrection: [
      { wrong: "Go straight for two blocks.", correct: "Go straight ahead for two blocks." },
      { wrong: "Turn the left.", correct: "Turn left." },
      { wrong: "It is in your left.", correct: "It is on your left." }
    ]
  },
  conversation: {
    dialogue: [
      { speaker: "Tourist", text: "Excuse me, how do I get to the museum?" },
      { speaker: "Local", text: "Go straight ahead for two blocks." },
      { speaker: "Tourist", text: "OK, straight ahead for two blocks." },
      { speaker: "Local", text: "Then turn left at the traffic light. Walk past the library." },
      { speaker: "Tourist", text: "Turn left at the traffic light, past the library." },
      { speaker: "Local", text: "Yes. The museum is on your right, at the end of the street." },
      { speaker: "Tourist", text: "On my right, at the end of the street. Great, thank you!" },
      { speaker: "Local", text: "You can't miss it. It's a big building with a red door." }
    ],
    roleplay: "One person is a tourist asking for directions to 3 places. The other is a local giving clear directions. The tourist repeats the directions to confirm. Use: go straight, turn left/right, walk past, on your left/right, at the end of."
  },
  produce: {
    tasks: [
      { title: "Speaking - 90 seconds", instruction: "Give directions from your current location to a nearby place. Use at least 5 direction phrases. Example: 'Go straight ahead, turn right at the corner, walk past the bank, it is on your left.'" },
      { title: "Writing - Directions to My Home", instruction: "Write directions from a nearby landmark to your home. Use at least 6 direction imperatives. Include: go straight, turn left/right, walk past, on your left/right, at the end of the street." }
    ],
    checklist: [
      "I used direction verbs (Go, Turn, Walk, Take, Cross).",
      "I used 'straight ahead' (not just 'straight').",
      "I used 'turn left/right' without 'the'.",
      "I used 'on your left/right' correctly.",
      "I used 'walk past', 'at the end of', 'around the corner'."
    ]
  }
});

// ===== LESSON 14.1: Simple Past Statements =====
LESSONS.push({
  unit: 14, lesson: 1, title: "Simple Past Statements", unitTitle: "Did you have fun?",
  discover: {
    text: "Anna: What did you do yesterday?\nTom: I visited my grandmother. She cooked a delicious dinner.\nAnna: That sounds lovely! Did you stay long?\nTom: Yes, I stayed for a few hours. We watched a movie together.\nAnna: What movie did you watch?\nTom: We watched a comedy. What about you? What did you do?\nAnna: I walked to the park. Then my friend called, and we talked for an hour.\nTom: Did you play any sports?\nAnna: No, but I played soccer last weekend. Did you do anything else?\nTom: Yes, I studied English for two hours last night. And I listened to music.",
    questions: [
      "Look at the verbs: visited, cooked, watched, walked, called, played, studied, traveled, stayed, listened. How do we form the past tense of regular verbs? (add -ed)",
      "Find 'studied'. Why does 'study' become 'studied' and not 'studyed'? (consonant + y -> -ied)",
      "What time expressions are used to show past time? (yesterday, last weekend, last night, on Saturday, last summer)",
      "Look at 'The movie ended at 10 PM'. Is 'end' a regular or irregular verb in the past? (regular -> ended)",
      "Do all verbs add -ed? Can you think of any verbs that change completely in the past?"
    ]
  },
  rules: {
    tables: [
      { title: "Regular Past Simple", headers: ["Rule", "Base Form", "Past Simple"], rows: [
        ["Most verbs: add -ed", "visit, cook, watch, walk", "visited, cooked, watched, walked"],
        ["End in -e: add -d", "like, live, dance", "liked, lived, danced"],
        ["End in consonant + y: -y -> -ied", "study, try, cry", "studied, tried, cried"],
        ["Short vowel + consonant: double + -ed", "stop, plan, drop", "stopped, planned, dropped"]
      ]},
      { title: "Time Expressions", headers: ["Expression", "Examples"], rows: [
        ["yesterday", "yesterday morning, yesterday afternoon"],
        ["last + time", "last night, last week, last month, last year"],
        ["ago", "two days ago, a week ago, a year ago"],
        ["specific time", "on Saturday, in 2023, at 5 PM"]
      ]}
    ],
    commonMistakes: [
      "I visit my grandmother yesterday (wrong) -> I visited my grandmother yesterday (correct). Use past tense for completed actions.",
      "She studyed English (wrong) -> She studied English (correct). Change -y to -ied.",
      "He stoped the car (wrong) -> He stopped the car (correct). Double the consonant after short vowel."
    ],
    tip: "For past simple regular verbs: add -ed. For completed actions in the past. Time is finished: yesterday, last week, in 2020."
  },
  practice: {
    fill: [
      { q: "I ___ my grandmother yesterday. (visit)", a: "visited" },
      { q: "She ___ a delicious dinner. (cook)", a: "cooked" },
      { q: "We ___ a movie together. (watch)", a: "watched" },
      { q: "He ___ English for two hours. (study)", a: "studied" },
      { q: "They ___ to the beach last summer. (travel)", a: "traveled" },
      { q: "I ___ home yesterday. (stay)", a: "stayed" },
      { q: "She ___ to music all evening. (listen)", a: "listened" },
      { q: "The movie ___ at 10 PM. (end)", a: "ended" }
    ],
    mc: [
      { q: "I ___ my grandmother yesterday.", options: ["visit", "visited", "visiting", "visits"], correct: 1 },
      { q: "She ___ a delicious dinner.", options: ["cook", "cooked", "cooking", "cooks"], correct: 1 },
      { q: "He ___ English for two hours.", options: ["study", "studied", "studys", "studies"], correct: 1 },
      { q: "They ___ to the beach last summer.", options: ["travel", "traveled", "traveling", "travels"], correct: 1 },
      { q: "We ___ soccer on Saturday.", options: ["play", "played", "playing", "plays"], correct: 1 }
    ],
    errorCorrection: [
      { wrong: "I visit my grandmother yesterday.", correct: "I visited my grandmother yesterday." },
      { wrong: "She studyed English.", correct: "She studied English." },
      { wrong: "He stoped the car.", correct: "He stopped the car." }
    ]
  },
  conversation: {
    dialogue: [
      { speaker: "Anna", text: "Did you have a good weekend?" },
      { speaker: "Tom", text: "Yes, I did! I visited my grandmother on Saturday." },
      { speaker: "Anna", text: "That's nice. What did you do?" },
      { speaker: "Tom", text: "She cooked lunch and we watched a movie together." },
      { speaker: "Anna", text: "What about Sunday?" },
      { speaker: "Tom", text: "I studied for my exam and then played soccer with friends." },
      { speaker: "Anna", text: "Sounds like a busy weekend! I stayed home and relaxed." }
    ],
    roleplay: "Tell your partner about your last weekend. Say at least 5 things you did. Use past simple verbs with -ed. Then ask your partner what they did."
  },
  produce: {
    tasks: [
      { title: "Speaking - 90 seconds", instruction: "Describe what you did yesterday. Use at least 6 regular past simple verbs. Include time expressions: yesterday morning, in the afternoon, last night." },
      { title: "Writing - My Last Vacation", instruction: "Write 8 sentences about your last vacation or trip. Use regular past simple verbs. Include time expressions: last summer, last year, yesterday, ago." }
    ],
    checklist: [
      "I added -ed to regular verbs in the past.",
      "I changed -y to -ied correctly (study -> studied).",
      "I doubled consonants correctly (stop -> stopped).",
      "I used past time expressions (yesterday, last, ago).",
      "I used the past tense for completed past actions."
    ]
  }
});

// ===== LESSON 14.2: Simple Past Questions =====
LESSONS.push({
  unit: 14, lesson: 2, title: "Simple Past Questions", unitTitle: "Did you have fun?",
  discover: {
    text: "Anna: Did you visit your grandmother yesterday?\nTom: Yes, I did. I had a nice time.\nAnna: Did she cook dinner?\nTom: No, she didn't. We ordered pizza instead!\nAnna: Did you watch a movie together?\nTom: Yes, we did. We watched a comedy.\nAnna: Where did you go last weekend?\nTom: I went to the beach. It was great!\nAnna: What did you do there?\nTom: I walked along the shore and swam in the sea. Why did you stay home?\nAnna: I didn't go anywhere. I studied all weekend.\nTom: Did you finish your homework?\nAnna: Yes, I did. I did all the exercises.",
    questions: [
      "Look at 'Did you visit your grandmother?'. What auxiliary verb is used for past simple questions? (did)",
      "After 'did', what form is the main verb? Is it 'visited' (past) or 'visit' (base)?",
      "Look at 'I didn't go to work'. How do we form negatives in past simple?",
      "Look at wh- questions: 'Where did you go?', 'What did you do?', 'When did you study?'. What is the word order?",
      "What are the short answers for past simple questions? (Yes, I did / No, I didn't)"
    ]
  },
  rules: {
    tables: [
      { title: "Simple Past - Questions and Negatives", headers: ["Form", "Structure", "Example"], rows: [
        ["Yes/No Question", "Did + subject + base verb?", "Did you visit your grandmother?"],
        ["Short Answer Yes", "Yes + subject + did", "Yes, I did."],
        ["Short Answer No", "No + subject + didn't", "No, I didn't."],
        ["Wh- Question", "Wh- + did + subject + base verb?", "Where did you go?"],
        ["Negative", "Subject + didn't + base verb", "I didn't go to work."]
      ]}
    ],
    commonMistakes: [
      "Did you visited? (wrong) -> Did you visit? (correct). After 'did', use the base form of the verb.",
      "I didn't went (wrong) -> I didn't go (correct). After 'didn't', use the base form.",
      "Where you went? (wrong) -> Where did you go? (correct). Use 'did' in past simple questions."
    ],
    tip: "Questions and negatives use 'did' + base verb. The main verb NEVER has past tense after 'did' or 'didn't'."
  },
  practice: {
    fill: [
      { q: "___ you visit your grandmother yesterday?", a: "Did" },
      { q: "No, I ___. (did not)", a: "didn't|did not" },
      { q: "Where ___ you go last weekend?", a: "did" },
      { q: "What ___ you do yesterday?", a: "did" },
      { q: "___ they travel to the beach?", a: "Did" },
      { q: "When ___ you study?", a: "did" },
      { q: "I ___ not go to work.", a: "didn't|did not" },
      { q: "She ___ not like the movie.", a: "didn't|did not" }
    ],
    mc: [
      { q: "___ you visit your grandmother?", options: ["Did", "Do", "Does", "Are"], correct: 0 },
      { q: "No, I ___.", options: ["didn't", "don't", "doesn't", "wasn't"], correct: 0 },
      { q: "Where ___ you go last weekend?", options: ["did", "do", "does", "are"], correct: 0 },
      { q: "I ___ not go to work.", options: ["didn't", "don't", "doesn't", "wasn't"], correct: 0 },
      { q: "Did you ___ the movie?", options: ["enjoy", "enjoyed", "enjoying", "enjoys"], correct: 0 }
    ],
    errorCorrection: [
      { wrong: "Did you visited your grandmother?", correct: "Did you visit your grandmother?" },
      { wrong: "I didn't went to work.", correct: "I didn't go to work." },
      { wrong: "Where you went yesterday?", correct: "Where did you go yesterday?" }
    ]
  },
  conversation: {
    dialogue: [
      { speaker: "Anna", text: "Did you have a good weekend?" },
      { speaker: "Tom", text: "Yes, I did. I went to the beach on Saturday." },
      { speaker: "Anna", text: "That sounds fun! Did you go with your family?" },
      { speaker: "Tom", text: "No, I didn't. I went with my friends." },
      { speaker: "Anna", text: "What did you do there?" },
      { speaker: "Tom", text: "We swam in the ocean and played volleyball." },
      { speaker: "Anna", text: "Did you eat at a restaurant?" },
      { speaker: "Tom", text: "Yes, we did. We had seafood for dinner." }
    ],
    roleplay: "Ask your partner 5 questions about their last vacation or weekend using 'Did you...?'. Your partner answers with short answers and details. Then switch. Use different wh- words too (Where, When, Why, What)."
  },
  produce: {
    tasks: [
      { title: "Speaking - 90 seconds", instruction: "Tell a partner about what you did last week. Your partner asks 5 follow-up questions using 'Did you...?' and 'Where/When/Why did you...?'. Answer using past simple." },
      { title: "Writing - Last Weekend Interview", instruction: "Write 5 questions with 'Did' and 5 answers about last weekend. Then write 3 wh- questions and answers. Use short answers where possible." }
    ],
    checklist: [
      "I used 'Did' for past simple questions.",
      "I used the base verb after 'did' and 'didn't'.",
      "I used 'didn't' for negatives (not 'did not' in speech).",
      "I used short answers (Yes, I did / No, I didn't).",
      "I used wh- words (Where, What, When, Why)."
    ]
  }
});

// ===== LESSON 15.1: Past of Be (was/were) =====
LESSONS.push({
  unit: 15, lesson: 1, title: "Past of Be: Was / Were", unitTitle: "Where were you born?",
  discover: {
    text: "Anna: Where were you born?\nTom: I was born in Brazil.\nAnna: Were you at home yesterday?\nTom: Yes, I was. I was sick.\nAnna: Was your sister at the party last weekend?\nTom: Yes, she was. She had a great time.\nAnna: Was the weather nice?\nTom: No, it wasn't. It was cloudy. But we were at the park anyway.\nAnna: Were your parents there too?\nTom: No, they weren't. They were at home. They were tired.\nAnna: I wasn't at the party because I was busy.\nTom: That's a shame. The party was very fun!",
    questions: [
      "Look at 'I was born' and 'She was at home'. Which subjects go with 'was'? (I, he, she, it)",
      "Look at 'We were at the park' and 'They were students'. Which subjects go with 'were'? (you, we, they)",
      "How do we form negatives? Look at 'I wasn't at school'. What is the full form? (was not / were not)",
      "How do we form questions? Look at 'Was she at the party?' and 'Were you at home?'.",
      "What are the short answers for past of Be? (Yes, I was / No, I wasn't / Yes, they were / No, they weren't)"
    ]
  },
  rules: {
    tables: [
      { title: "Past of Be - Was/Were", headers: ["Subject", "Affirmative", "Negative", "Contraction"], rows: [
        ["I", "I was", "I was not", "I wasn't"],
        ["You", "You were", "You were not", "You weren't"],
        ["He / She / It", "He was", "He was not", "He wasn't"],
        ["We", "We were", "We were not", "We weren't"],
        ["They", "They were", "They were not", "They weren't"]
      ]},
      { title: "Questions and Short Answers", headers: ["Question", "Yes Answer", "No Answer"], rows: [
        ["Was I...?", "Yes, you were.", "No, you weren't."],
        ["Were you...?", "Yes, I was.", "No, I wasn't."],
        ["Was he/she/it...?", "Yes, he/she/it was.", "No, he/she/it wasn't."],
        ["Were we/they...?", "Yes, we/they were.", "No, we/they weren't."]
      ]}
    ],
    commonMistakes: [
      "I were born (wrong) -> I was born (correct). Use 'was' with I/he/she/it.",
      "She were at home (wrong) -> She was at home (correct).",
      "We was at the park (wrong) -> We were at the park (correct). Use 'were' with you/we/they."
    ],
    tip: "Was = I/he/she/it (singular). Were = you/we/they (plural). Just like present: am/is -> was, are -> were."
  },
  practice: {
    fill: [
      { q: "I ___ born in Brazil.", a: "was" },
      { q: "She ___ at home yesterday.", a: "was" },
      { q: "We ___ at the park last weekend.", a: "were" },
      { q: "They ___ students in 2022.", a: "were" },
      { q: "___ she at the party?", a: "Was" },
      { q: "No, I ___. (was not)", a: "wasn't|was not" },
      { q: "Where ___ you born?", a: "were" },
      { q: "The movie ___ very good.", a: "was" }
    ],
    mc: [
      { q: "I ___ born in Brazil.", options: ["was", "were", "am", "is"], correct: 0 },
      { q: "She ___ at home yesterday.", options: ["was", "were", "am", "are"], correct: 0 },
      { q: "We ___ at the park last weekend.", options: ["was", "were", "are", "is"], correct: 1 },
      { q: "___ she at the party?", options: ["Was", "Were", "Am", "Are"], correct: 0 },
      { q: "Where ___ you born?", options: ["was", "were", "are", "is"], correct: 1 }
    ],
    errorCorrection: [
      { wrong: "I were born in Brazil.", correct: "I was born in Brazil." },
      { wrong: "We was at the park.", correct: "We were at the park." },
      { wrong: "Were she at the party?", correct: "Was she at the party?" }
    ]
  },
  conversation: {
    dialogue: [
      { speaker: "Anna", text: "Where were you born?" },
      { speaker: "Tom", text: "I was born in Mexico City." },
      { speaker: "Anna", text: "That is a big city! Were your parents born there too?" },
      { speaker: "Tom", text: "No, they weren't. They were born in a small town." },
      { speaker: "Anna", text: "Where were you in 2020?" },
      { speaker: "Tom", text: "I was in the US. I was a student at that time." },
      { speaker: "Anna", text: "Was it a good experience?" },
      { speaker: "Tom", text: "Yes, it was. It was an amazing time in my life." }
    ],
    roleplay: "Ask your partner 5 questions about their past using was/were. Examples: 'Where were you born?', 'Were you a good student?', 'Was your hometown nice?', 'Where were you last year?' Answer using full sentences."
  },
  produce: {
    tasks: [
      { title: "Speaking - 90 seconds", instruction: "Talk about where you were born, where you lived as a child, and where you were last year. Use was/were in every sentence. Say if it was good or bad." },
      { title: "Writing - My Past", instruction: "Write 8 sentences about the past using was/were. Include: where you were born, where you were last year, where your family was, and descriptions of places. Use 2 questions too." }
    ],
    checklist: [
      "I used 'was' with I/he/she/it.",
      "I used 'were' with you/we/they.",
      "I formed negatives correctly (wasn't/weren't).",
      "I formed questions correctly (Was/Were + subject).",
      "I used short answers correctly."
    ]
  }
});

// ===== LESSON 15.2: Wh- Questions with Be =====
LESSONS.push({
  unit: 15, lesson: 2, title: "Wh- Questions with Be", unitTitle: "Where were you born?",
  discover: {
    text: "Interviewer: Hello! I want to ask you some questions about your life. Where were you born?\nGuest: I was born in Lima, Peru.\nInterviewer: When was your birthday?\nGuest: My birthday was in March.\nInterviewer: Who was your first teacher?\nGuest: Her name was Mrs. Lopez. She was very kind.\nInterviewer: What was your favorite subject in school?\nGuest: My favorite subject was science. Why do you ask?\nInterviewer: I am curious! How was your day today?\nGuest: It was good, thanks! How was your day?\nInterviewer: It was busy. Where is the nearest hospital near here?\nGuest: There is one on Oak Street, about ten minutes away.",
    questions: [
      "Look at all the wh- words: Where, When, Who, What, Why, How. What information does each one ask for?",
      "Look at 'Where were you born?' and 'When was your birthday?'. What comes after the wh- word? (was/were + subject)",
      "Look at 'How old were you?' — 'how + adjective' questions. Can you think of other examples? (how tall, how far, how big)",
      "Look at 'Who was your first teacher?' — 'who' asks about a person. What is the answer structure?",
      "Compare present and past: 'Where is the hospital?' vs 'Where was the hospital?'. What changes?"
    ]
  },
  rules: {
    tables: [
      { title: "Wh- Questions with Be", headers: ["Wh- Word", "Use", "Present", "Past"], rows: [
        ["Where", "place/location", "Where are you?", "Where were you?"],
        ["When", "time", "When is the party?", "When was the party?"],
        ["Who", "person", "Who is he?", "Who was he?"],
        ["What", "thing/information", "What is this?", "What was that?"],
        ["Why", "reason", "Why are you late?", "Why were you late?"],
        ["How", "manner/condition", "How are you?", "How were you?"],
        ["How + adj", "specific quality", "How old are you?", "How old were you?"]
      ]}
    ],
    commonMistakes: [
      "Where you were born? (wrong) -> Where were you born? (correct). In questions, 'was/were' comes after the wh- word.",
      "What was your name? (used for past) vs What is your name? (present). Match the tense to the time.",
      "Why you were late? (wrong) -> Why were you late? (correct). Invert 'was/were' with the subject."
    ],
    tip: "Wh- + was/were + subject + rest? Remember: the verb comes BEFORE the subject in questions, just like present."
  },
  practice: {
    fill: [
      { q: "___ were you born? (place)", a: "Where" },
      { q: "___ was your birthday? (time)", a: "When" },
      { q: "___ was your first teacher? (person)", a: "Who" },
      { q: "___ was your favorite subject? (thing)", a: "What" },
      { q: "___ was she late? (reason)", a: "Why" },
      { q: "___ was the weather? (condition)", a: "How" },
      { q: "How ___ were you in 2015?", a: "old" },
      { q: "Where ___ your best friend born?", a: "was" }
    ],
    mc: [
      { q: "___ were you born?", options: ["Where", "When", "What", "Who"], correct: 0 },
      { q: "___ was your first teacher?", options: ["What", "Who", "Where", "When"], correct: 1 },
      { q: "___ was your favorite subject?", options: ["Who", "Where", "What", "When"], correct: 2 },
      { q: "How ___ were you in 2015?", options: ["old", "many", "much", "big"], correct: 0 },
      { q: "___ were you late? Because the bus was late.", options: ["Why", "When", "Where", "What"], correct: 0 }
    ],
    errorCorrection: [
      { wrong: "Where you were born?", correct: "Where were you born?" },
      { wrong: "Why you were late?", correct: "Why were you late?" },
      { wrong: "How old you were?", correct: "How old were you?" }
    ]
  },
  conversation: {
    dialogue: [
      { speaker: "Anna", text: "Where were you born?" },
      { speaker: "Tom", text: "I was born in Lima, Peru." },
      { speaker: "Anna", text: "When was your birthday?" },
      { speaker: "Tom", text: "My birthday was in March." },
      { speaker: "Anna", text: "What was your favorite subject in school?" },
      { speaker: "Tom", text: "My favorite subject was history." },
      { speaker: "Anna", text: "Who was your best friend in elementary school?" },
      { speaker: "Tom", text: "His name was Miguel. He was a great friend." }
    ],
    roleplay: "Interview a partner about their childhood. Ask 6 wh- questions using was/were: Where were you born? When was your birthday? Who was your best friend? What was your favorite...? Why...? How old...? Answer in full sentences."
  },
  produce: {
    tasks: [
      { title: "Speaking - 90 seconds", instruction: "Answer 5 wh- questions about your past using was/were. Use: Where, When, Who, What, Why, How. Give full answers, not just short answers." },
      { title: "Writing - All About My Past", instruction: "Write 6 wh- questions about someone's childhood. Then write the answers using was/were. Use different wh- words for each question." }
    ],
    checklist: [
      "I placed 'was/were' after the wh- word.",
      "I put 'was/were' BEFORE the subject.",
      "I used the correct wh- word for the information I wanted.",
      "I used 'how + adjective' correctly (how old, how big).",
      "I matched the tense (was/were) to past time."
    ]
  }
});

// ===== LESSON 16.1: Object Pronouns =====
LESSONS.push({
  unit: 16, lesson: 1, title: "Object Pronouns", unitTitle: "Can she call you later?",
  discover: {
    text: "Anna: Do you know Tom?\nBen: Yes, I know him. He is in my English class. I saw him yesterday.\nAnna: Does Tom know you?\nBen: Yes, he knows me. We are friends. He called me last night.\nAnna: What about Maria? Do you know her?\nBen: Yes, I know her too. I met her at a party. I gave her my phone number.\nAnna: And the new students from Japan?\nBen: I don't know them yet. The teacher introduced us to them yesterday.\nAnna: Do you like the class?\nBen: Yes, I like it. The teacher explains everything to us and helps us a lot.",
    questions: [
      "Look at 'I know him'. 'I' is the subject (does the action). What is 'him'? (the object = receives the action)",
      "Find the subject pronouns: I, he, she, they, you, we, it. Now find their object forms in the text.",
      "What is the object form of 'I'? (me). Of 'he'? (him). Of 'she'? (her). Of 'they'? (them). Of 'we'? (us).",
      "What is the object form of 'you'? Is it different from the subject form? (same: you)",
      "Look at 'I gave it to her'. 'It' is the object form of...? (it). Does 'it' change? (no, same)"
    ]
  },
  rules: {
    tables: [
      { title: "Subject vs Object Pronouns", headers: ["Subject (does the action)", "Object (receives the action)"], rows: [
        ["I", "me"],
        ["you", "you"],
        ["he", "him"],
        ["she", "her"],
        ["it", "it"],
        ["we", "us"],
        ["they", "them"]
      ]},
      { title: "Examples", headers: ["Subject", "Verb", "Object", "Full Sentence"], rows: [
        ["I", "know", "him", "I know him."],
        ["He", "knows", "me", "He knows me."],
        ["She", "called", "us", "She called us."],
        ["They", "invited", "her", "They invited her."],
        ["We", "saw", "them", "We saw them."]
      ]}
    ],
    commonMistakes: [
      "I know he (wrong) -> I know him (correct). After the verb, use the object pronoun.",
      "She called we (wrong) -> She called us (correct). 'We' changes to 'us' as an object.",
      "He asked I (wrong) -> He asked me (correct). 'I' changes to 'me' as an object."
    ],
    tip: "Subject before the verb (I, you, he, she, it, we, they). Object after the verb (me, you, him, her, it, us, them)."
  },
  practice: {
    fill: [
      { q: "I know ___. (he)", a: "him" },
      { q: "He knows ___. (I)", a: "me" },
      { q: "She called ___ yesterday. (we)", a: "us" },
      { q: "They invited ___ to the party. (she)", a: "her" },
      { q: "I saw ___ at the mall. (they)", a: "them" },
      { q: "Can you help ___? (I)", a: "me" },
      { q: "Please call ___. (he)", a: "him" },
      { q: "The teacher explained ___ to ___ . (it / we)", a: "it|us" }
    ],
    mc: [
      { q: "I know ___.", options: ["he", "him", "his", "her"], correct: 1 },
      { q: "She called ___ yesterday.", options: ["we", "us", "our", "ours"], correct: 1 },
      { q: "They invited ___ to the party.", options: ["she", "her", "hers", "herself"], correct: 1 },
      { q: "I saw ___ at the mall.", options: ["they", "them", "their", "theirs"], correct: 1 },
      { q: "Can you help ___?", options: ["I", "me", "my", "mine"], correct: 1 }
    ],
    errorCorrection: [
      { wrong: "I know she.", correct: "I know her." },
      { wrong: "She called we yesterday.", correct: "She called us yesterday." },
      { wrong: "He asked I a question.", correct: "He asked me a question." }
    ]
  },
  conversation: {
    dialogue: [
      { speaker: "Anna", text: "Do you know Tom?" },
      { speaker: "Carlos", text: "Yes, I know him. He is in my English class." },
      { speaker: "Anna", text: "Can you ask him to call me tonight?" },
      { speaker: "Carlos", text: "Sure, I can tell him. Do you know Maria?" },
      { speaker: "Anna", text: "Yes, I know her too. She is my friend." },
      { speaker: "Carlos", text: "She invited us to her party on Saturday." },
      { speaker: "Anna", text: "Great! I want to see her. Please tell her I am coming." }
    ],
    roleplay: "Talk to a partner about people you both know. Use object pronouns (him, her, them, us, me) in your sentences. Example: 'I know Maria. I saw her yesterday. Do you know her? She invited me to her party.'"
  },
  produce: {
    tasks: [
      { title: "Speaking - 90 seconds", instruction: "Talk about 5 people you know. Use object pronouns to refer to them after the verb. Example: 'I have a friend. I call him every week. My parents live nearby. I visit them on Sundays.'" },
      { title: "Writing - People I Know", instruction: "Write 8 sentences about people you know. Use at least 5 different object pronouns (me, you, him, her, it, us, them). Examples: 'My brother is a teacher. Students like him. My sister is a nurse. People respect her.'" }
    ],
    checklist: [
      "I used 'me' as the object form of 'I'.",
      "I used 'him' as the object form of 'he'.",
      "I used 'her' as the object form of 'she'.",
      "I used 'us' as the object form of 'we'.",
      "I used 'them' as the object form of 'they'."
    ]
  }
});

// ===== LESSON 16.2: Scheduling (Making Plans) =====
LESSONS.push({
  unit: 16, lesson: 2, title: "Making Plans and Scheduling", unitTitle: "Can she call you later?",
  discover: {
    text: "Anna: Hi Tom! Are you free this weekend?\nTom: Yes, I am free on Saturday. What do you want to do?\nAnna: Do you want to go to the movies?\nTom: Sure! Let's meet at the cinema at 7 PM. What time is good for you?\nAnna: Does 6 PM work for you? We can have dinner first.\nTom: That sounds great! How about meeting at the cafe on Main Street?\nAnna: Perfect. I am busy on Sunday, but Saturday is fine.\nTom: Same here. Shall we invite Maria too?\nAnna: Good idea! Let's ask her. See you at 6!",
    questions: [
      "Look at 'Let's meet at 7 PM'. 'Let's = let us'. What kind of suggestion is this?",
      "Look at 'How about meeting on Friday?' and 'Do you want to go to the movies?'. These are polite suggestions. What patterns do they use?",
      "Look at 'Are you available tomorrow?' and 'Can we meet at the cafe?'. How do we ask about availability?",
      "Look at 'Does 6 PM work for you?' and 'What time is good for you?'. How do we ask for preferences/preferred times?",
      "When we schedule, we need to suggest, ask about availability, and confirm. Find examples of each."
    ]
  },
  rules: {
    tables: [
      { title: "Making Plans", headers: ["Purpose", "Phrases", "Examples"], rows: [
        ["Suggesting", "Let's + verb, How about + -ing, Do you want to + verb, Shall we + verb", "Let's meet at 7. How about meeting Friday? Do you want to go?"],
        ["Asking about availability", "Are you free/available...?, Can you...?, Do you have time...?", "Are you free on Saturday?"],
        ["Agreeing on time", "What time is good for you? Does (time) work for you?", "What time is good for you?"],
        ["Confirming", "See you (time/place). I'll meet you there.", "See you at 8 o'clock."]
      ]}
    ],
    commonMistakes: [
      "Let's to meet (wrong) -> Let's meet (correct). After 'let's', use the base verb (no 'to').",
      "How about to meet (wrong) -> How about meeting (correct). After 'how about', use the -ing form.",
      "I am available on Monday vs At Monday (wrong) -> On Monday (correct). Use 'on' before days."
    ],
    tip: "Plan-making phrases: 'Let's + verb' (suggestion), 'How about + -ing' (polite suggestion), 'Are you free on...?' (availability)."
  },
  practice: {
    fill: [
      { q: "___ meet at 7 PM. (suggestion)", a: "Let's" },
      { q: "How about ___ on Friday? (meet)", a: "meeting" },
      { q: "Do you ___ to go to the movies?", a: "want" },
      { q: "I am free ___ Saturday.", a: "on" },
      { q: "Are you ___ tomorrow? (available)", a: "available|free" },
      { q: "What time is ___ for you?", a: "good" },
      { q: "Does 6 PM ___ for you?", a: "work" },
      { q: "I am ___ on Monday. (not free)", a: "busy" }
    ],
    mc: [
      { q: "___ meet at 7 PM.", options: ["Let's", "Let us to", "How about", "Do you want"], correct: 0 },
      { q: "How about ___ on Friday?", options: ["meeting", "meet", "to meet", "met"], correct: 0 },
      { q: "I am free ___ Saturday.", options: ["in", "on", "at", "by"], correct: 1 },
      { q: "___ you available tomorrow?", options: ["Are", "Do", "Can", "Have"], correct: 0 },
      { q: "Does 6 PM ___ for you?", options: ["work", "works", "working", "worked"], correct: 0 }
    ],
    errorCorrection: [
      { wrong: "Let's to meet at 7.", correct: "Let's meet at 7." },
      { wrong: "How about to meet Friday?", correct: "How about meeting Friday?" },
      { wrong: "I am available in Monday.", correct: "I am available on Monday." }
    ]
  },
  conversation: {
    dialogue: [
      { speaker: "Anna", text: "Do you want to have coffee this week?" },
      { speaker: "Tom", text: "Sure! I am free on Wednesday afternoon." },
      { speaker: "Anna", text: "How about meeting at 3 PM?" },
      { speaker: "Tom", text: "Does 4 PM work for you? I have a meeting at 3." },
      { speaker: "Anna", text: "Yes, 4 PM is good for me. Where shall we meet?" },
      { speaker: "Tom", text: "Let's meet at the cafe on Main Street." },
      { speaker: "Anna", text: "Perfect. See you there at 4 on Wednesday!" },
      { speaker: "Tom", text: "Great! See you then!" }
    ],
    roleplay: "Plan a meeting with a partner. One person suggests a time/place. The other checks their availability and negotiates. Use: 'Do you want to...?', 'How about...?', 'Does ___ work for you?', 'I am free/available/busy on...', 'Let's meet at...'"
  },
  produce: {
    tasks: [
      { title: "Speaking - 90 seconds", instruction: "Plan a weekend activity with a partner. Use: Let's, How about, Do you want to, Are you free on, Does ___ work. Agree on a day, time, and place." },
      { title: "Writing - Making Plans", instruction: "Write a dialogue between two friends planning to meet. Use at least 6 scheduling phrases from the lesson. Include: suggesting, asking about availability, agreeing, and confirming." }
    ],
    checklist: [
      "I used 'Let's + base verb' for suggestions.",
      "I used 'How about + -ing' for polite suggestions.",
      "I used 'on' before days of the week.",
      "I asked about availability (Are you free / Does ___ work).",
      "I confirmed the plan clearly."
    ]
  }
});

// ===== Generate lesson files with lessonToJS() =====
function lessonToJS(lesson) {
  const varName = `lesson${lesson.unit}_${lesson.lesson}`;

  const tabs = [
    `<div class="card"><h3>Discover: ${lesson.title}</h3>
${lesson.discover.text.includes('\n') ? `<div class="dialogue">
${lesson.discover.text.split('\n').map(line => {
  const m = line.match(/^([\w\s]+):\s*(.+)/);
  return m ? `<div class="line"><span class="speaker">${m[1]}:</span><span class="text">${m[2]}</span></div>` : `<div class="line"><span class="text">${line}</span></div>`;
}).join('\n')}
</div>` : `<p style="margin-bottom:16px;padding:16px;background:var(--surface-container-low);border-radius:var(--radius-md);line-height:1.8">${lesson.discover.text}</p>`}
<h4>Notice and Discover</h4>
<ol style="padding-left:20px">
${lesson.discover.questions.map(q => `<li style="margin-bottom:12px;line-height:1.6">${q}</li>`).join('\n')}
</ol>
<div class="tip">Recommended time: 8 minutes. Read the text carefully. Answer each question in your notebook or say your answer aloud.</div>
</div>`,
    `<div class="card"><h3>Rules: ${lesson.title}</h3>
${lesson.rules.tables.map(t => `
<h4>${t.title}</h4>
<table class="grammar-table">
<tr>${t.headers.map(h => `<th>${h}</th>`).join('')}</tr>
${t.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('\n')}
</table>`).join('\n')}
${lesson.rules.commonMistakes ? `
<h4>Common Mistakes</h4>
<ul>
${lesson.rules.commonMistakes.map(m => `<li style="margin-bottom:8px">${m}</li>`).join('\n')}
</ul>` : ''}
${lesson.rules.tip ? `<div class="tip">${lesson.rules.tip}</div>` : ''}
<div class="tip">Recommended time: 7 minutes. Read the tables carefully. Compare them with your discoveries from the first tab.</div>
</div>`,
    genPracticeHTML(lesson),
    `<div class="card"><h3>Conversation: ${lesson.title}</h3>
<h4>Dialogue</h4>
<div class="dialogue">
${lesson.conversation.dialogue.map(line => `<div class="line"><span class="speaker">${line.speaker}:</span><span class="text">${line.text}</span></div>`).join('\n')}
</div>
<h4>Role-Play</h4>
<p>${lesson.conversation.roleplay}</p>
<div class="tip">Recommended time: 7 minutes. Read the dialogue aloud with a partner. Then try the role-play. Focus on using the target grammar correctly.</div>
</div>`,
    `<div class="card"><h3>Production: ${lesson.title}</h3>
${lesson.produce.tasks.map(t => `
<h4>${t.title}</h4>
<p>${t.instruction}</p>
<textarea placeholder="Write your response here..." style="width:100%;background:var(--surface-container-low);border:1px solid var(--ghost-border);color:var(--on-surface);padding:12px;border-radius:var(--radius-md);font:14px var(--font-body);min-height:80px;margin-bottom:16px"></textarea>
`).join('\n')}
<h4>Self-Check</h4>
<ul>
${lesson.produce.checklist.map(item => `<li style="margin-bottom:8px"><input type="checkbox" style="margin-right:8px"> ${item}</li>`).join('\n')}
</ul>
<div class="tip">Recommended time: 8 minutes. Complete the tasks without looking at the rules. Then use the checklist to evaluate your own work.</div>
</div>`
  ];

  return `window.${varName}=${JSON.stringify(tabs)};\n`;
}

function genPracticeHTML(l) {
  let html = `<div class="card"><h3>Practice: ${l.title}</h3>`;
  
  if (l.practice.fill && l.practice.fill.length) {
    const fillId = `fill_${l.unit}_${l.lesson}`;
    html += `<h4>Exercise 1: Fill in the Blank</h4><div class="exercise" id="${fillId}">`;
    l.practice.fill.forEach((item, i) => {
      const parts = item.q.split('___');
      html += `<p>${i+1}. ${parts[0]}<input type="text" data-answer="${item.a}" placeholder="answer" style="width:160px">${parts.length > 1 ? parts[1] : ''}</p>`;
    });
    html += `<button class="btn-primary mt-2" onclick="checkFill(this,'${fillId}')">Check Answers</button></div>`;
  }
  
  if (l.practice.mc && l.practice.mc.length) {
    const mcId = `mc_${l.unit}_${l.lesson}`;
    html += `<h4>Exercise 2: Multiple Choice</h4><div class="exercise" id="${mcId}">`;
    l.practice.mc.forEach((item, i) => {
      html += `<p><strong>${i+1}. ${item.q}</strong></p>`;
      item.options.forEach((opt, j) => {
        const isCorrect = j === item.correct;
        html += `<div class="mc-option" onclick="selectMC(this)"${isCorrect ? ' data-correct="true"' : ''}>${String.fromCharCode(97+j)}) ${opt}</div>`;
      });
      html += `<br>`;
    });
    html += `<button class="btn-primary mt-2" onclick="checkMC(this,'${mcId}')">Check Answers</button></div>`;
  }
  
  if (l.practice.errorCorrection && l.practice.errorCorrection.length) {
    html += `<h4>Exercise 3: Error Correction</h4><div class="exercise"><p>Each sentence has one mistake. Write the correct version.</p>`;
    l.practice.errorCorrection.forEach((item, i) => {
      html += `<p>${i+1}. ${item.wrong}</p><textarea placeholder="Correct: ${item.correct}" style="width:100%;background:var(--surface-container-low);border:1px solid var(--ghost-border);color:var(--on-surface);padding:8px;border-radius:var(--radius-md);font:14px var(--font-body);min-height:40px;margin-bottom:8px"></textarea>`;
    });
    html += `<p style="margin-top:8px;color:var(--on-surface-variant);font-size:14px">Check your answers with the Rules tab.</p></div>`;
  }
  
  html += `<div class="tip">Recommended time: 10 minutes. Complete all three exercises. Check your answers and review any mistakes.</div>`;
  html += `</div>`;
  return html;
}

const fs = require('fs');
const path = require('path');

const unitsDir = path.join(__dirname, 'units');
if (!fs.existsSync(unitsDir)) {
  fs.mkdirSync(unitsDir, { recursive: true });
}

LESSONS.forEach(lesson => {
  const filename = `lesson${lesson.unit}_${lesson.lesson}.js`;
  const content = lessonToJS(lesson);
  fs.writeFileSync(path.join(unitsDir, filename), content, 'utf8');
  console.log(`Created: units/${filename}`);
});

console.log(`\nDone! Generated ${LESSONS.length} lesson files.`);

module.exports = { LESSONS, lessonToJS };
