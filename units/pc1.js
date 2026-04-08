// Progress Check 1 — Units 1 & 2: Verb Be, Possessives, Articles, Prepositions
window.pc1 = [
// [0] Quiz Tab
`<div class="card"><h3>📝 Progress Check 1 — Grammar Quiz</h3>
<p style="color:var(--text2)">This quiz covers <strong>Units 1 & 2</strong>: Verb Be, Possessive Adjectives, Articles (a/an/the), and Prepositions of Place. There are 15 questions. Good luck! 🌟</p>
</div>
<div class="card"><h3>Part A — The Verb "Be" (5 points)</h3>
<div class="exercise" id="pc1_quiz_a">
<p>1. I ________ a beginner student. <input type="text" data-answer="am" placeholder="am/is/are"></p>
<p>2. She ________ from Colombia. <input type="text" data-answer="is" placeholder="am/is/are"></p>
<p>3. We ________ in Room 3 today. <input type="text" data-answer="are" placeholder="am/is/are"></p>
<p>4. My friends ________ very kind. <input type="text" data-answer="are" placeholder="am/is/are"></p>
<p>5. It ________ a nice school. <input type="text" data-answer="is" placeholder="am/is/are"></p>
<button class="btn btn-primary" onclick="checkFill(this,'pc1_quiz_a')">Check Part A ✓</button>
</div></div>
<div class="card"><h3>Part B — Possessive Adjectives (5 points)</h3>
<div class="exercise" id="pc1_quiz_b">
<p>1. I am Carlos. ________ last name is López. <input type="text" data-answer="my" placeholder="my/your/his/her/our/their"></p>
<p>2. She is Ana. ________ email is ana@mail.com. <input type="text" data-answer="her" placeholder="my/your/his/her/our/their"></p>
<p>3. He is Pedro. ________ phone number is 555-0011. <input type="text" data-answer="his" placeholder="my/your/his/her/our/their"></p>
<p>4. We are classmates. ________ teacher is Ms. Rivera. <input type="text" data-answer="our" placeholder="my/your/his/her/our/their"></p>
<p>5. What is ________ name? (talking to someone) <input type="text" data-answer="your" placeholder="my/your/his/her/our/their"></p>
<button class="btn btn-primary" onclick="checkFill(this,'pc1_quiz_b')">Check Part B ✓</button>
</div></div>
<div class="card"><h3>Part C — Articles & Prepositions (5 points)</h3>
<div class="exercise" id="pc1_quiz_c">
<p><strong>1. That is ________ umbrella.</strong></p>
<div class="mc-option" onclick="selectMC(this)">a) a</div>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">b) an</div>
<div class="mc-option" onclick="selectMC(this)">c) the</div>
<br>
<p><strong>2. Close ________ door, please. (talking about a specific door)</strong></p>
<div class="mc-option" onclick="selectMC(this)">a) a</div>
<div class="mc-option" onclick="selectMC(this)">b) an</div>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">c) the</div>
<br>
<p><strong>3. My notebook is ________ my desk. (on the surface)</strong></p>
<div class="mc-option" onclick="selectMC(this)">a) in</div>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">b) on</div>
<div class="mc-option" onclick="selectMC(this)">c) under</div>
<br>
<p><strong>4. The eraser is ________ the two books. (in the middle)</strong></p>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">a) between</div>
<div class="mc-option" onclick="selectMC(this)">b) behind</div>
<div class="mc-option" onclick="selectMC(this)">c) in front of</div>
<br>
<p><strong>5. She is ________ honest student. (honest starts with a vowel sound)</strong></p>
<div class="mc-option" onclick="selectMC(this)">a) a</div>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">b) an</div>
<div class="mc-option" onclick="selectMC(this)">c) the</div>
<button class="btn btn-primary" onclick="checkMC(this,'pc1_quiz_c')" style="margin-top:12px">Check Part C ✓</button>
</div></div>`,

// [1] Reading Tab
`<div class="card"><h3>📖 Reading: "My English Class"</h3>
<p style="color:var(--text3);font-size:13px">Read the passage carefully. Then answer the comprehension questions below.</p>
<div class="reading-passage">
<p>My name is Miguel Herrera. I am a student at Central Language School. My class is English Level 2. We are eighteen students in the class. Our teacher's name is Ms. Rivera. She is from the United States, but she lives here now.</p>
<p>My classmates are from different countries. Ana is from Venezuela. She is very friendly. Carlos is from Colombia. His last name is Rodríguez. He is funny and smart. Yuki is from Japan. Her nickname is "Yuki-chan."</p>
<p>Our classroom is Room 3. It is on the second floor. There is a big whiteboard in front of the room. Our books are on our desks. The teacher's desk is next to the whiteboard. There is a window behind my seat. I am between Ana and Carlos.</p>
<p>I am happy in this class. English is an interesting language. My first class is at 8:00 in the morning. It is not easy, but it is fun.</p>
</div></div>
<div class="card"><h3>💭 Comprehension Questions</h3>
<p>Answer each question using information from the reading. Write <strong>complete sentences</strong>.</p>
<div class="opinion-q"><p><span class="qnum">1.</span> What is Miguel's school? What level is his class?</p><textarea placeholder="Write your answer here..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">2.</span> Where are Ana and Carlos from?</p><textarea placeholder="Write your answer here..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">3.</span> What is Yuki's nickname?</p><textarea placeholder="Write your answer here..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">4.</span> Describe the classroom. Where is the whiteboard? Where is the teacher's desk?</p><textarea placeholder="Write your answer here..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">5.</span> Where is Miguel sitting? (between who?)</p><textarea placeholder="Write your answer here..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">6.</span> What time is Miguel's first class? Is it easy for him?</p><textarea placeholder="Write your answer here..."></textarea></div>
</div>`,

// [2] Speaking Tab
`<div class="card"><h3>🗣️ Speaking Check 1 — Introduce Yourself & Describe Your Class</h3>
<p>This speaking section reviews Units 1 & 2. Practice answering these questions <strong>out loud</strong>. Then write your answers below for extra practice.</p>
<div class="tip">💡 Teacher's Tip: Speak in full sentences. Don't just say one word — give a complete answer! Example: instead of "Colombia," say "I'm from Colombia."</div>
</div>
<div class="card"><h3>Part 1 — Personal Introduction (2 minutes)</h3>
<p>Answer these questions as if you are meeting a new person for the first time:</p>
<div class="opinion-q"><p><span class="qnum">1.</span> What is your full name? Where are you from?</p><textarea placeholder="Write your answer here..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">2.</span> Who is your teacher? Describe him/her using possessive adjectives.</p><textarea placeholder="Write your answer here..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">3.</span> Tell me about two classmates. Use "his name is..." or "her name is..."</p><textarea placeholder="Write your answer here..."></textarea></div>
</div>
<div class="card"><h3>Part 2 — Describing Your Classroom (2 minutes)</h3>
<p>Imagine you are showing a new student around your classroom. Use prepositions of place:</p>
<div class="opinion-q"><p><span class="qnum">4.</span> Describe where things are in your classroom. Use "in," "on," "under," "next to," "behind," and "in front of."</p><textarea placeholder="Write your answer here..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">5.</span> Where do YOU sit? Who sits next to you?</p><textarea placeholder="Write your answer here..."></textarea></div>
</div>
<div class="card"><h3>Part 3 — Roleplay (2–3 minutes)</h3>
<p>Practice this conversation with a partner or write both roles yourself:</p>
<p style="color:var(--text2)">Imagine you are meeting a new student on their first day. Introduce yourself, ask for their name and phone number, and describe something in the room.</p>
<div class="opinion-q"><p><span class="qnum">🎭 Write the dialogue here:</span></p><textarea style="min-height:120px" placeholder="Write your dialogue here..."></textarea></div>
</div>`
];
