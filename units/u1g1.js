// Unit 1 — Grammar 1: Verb Be
window.unit1g1 = [
// [0] Grammar Explanation
`<div class="card"><h3>🔤 The Verb "Be" — Am, Is, Are</h3>
<p>The verb <strong>be</strong> is the most important verb in English. We use it to say who we are, where we are, what we are, and how we feel. There are three forms: <strong>am</strong>, <strong>is</strong>, and <strong>are</strong>.</p>
<h4>📌 Rule: Which form do I use?</h4>
<p>The form of "be" changes depending on the <strong>subject</strong> (the person or thing doing the action).</p>
<table class="grammar-table"><tr><th>Subject</th><th>Verb Be</th><th>Contraction</th><th>Example Sentence</th></tr>
<tr><td><strong>I</strong></td><td>am</td><td>I'm</td><td>I'm a student.</td></tr>
<tr><td><strong>You</strong></td><td>are</td><td>You're</td><td>You're in my class.</td></tr>
<tr><td><strong>He</strong></td><td>is</td><td>He's</td><td>He's from Colombia.</td></tr>
<tr><td><strong>She</strong></td><td>is</td><td>She's</td><td>She's my teacher.</td></tr>
<tr><td><strong>It</strong></td><td>is</td><td>It's</td><td>It's a nice day!</td></tr>
<tr><td><strong>We</strong></td><td>are</td><td>We're</td><td>We're friends.</td></tr>
<tr><td><strong>They</strong></td><td>are</td><td>They're</td><td>They're from Brazil.</td></tr></table>
<h4>💡 What are contractions?</h4>
<p>A <strong>contraction</strong> is when we combine two words into one shorter word. We use an apostrophe (') to show where the letters were removed.</p>
<div class="example"><em>I am</em> → I<em>'m</em><span class="trans">We remove the letter "a" and replace it with an apostrophe.</span></div>
<div class="example"><em>She is</em> → She<em>'s</em><span class="trans">We remove the letter "i" and replace it with an apostrophe.</span></div>
<div class="example"><em>They are</em> → They<em>'re</em><span class="trans">We remove the letters "a" and keep only "r".</span></div>
<div class="tip">In everyday conversation, native speakers almost ALWAYS use contractions. "I'm a student" sounds much more natural than "I am a student."</div>
<h4>📋 What do we use "be" for?</h4>
<ul>
<li><strong>Names:</strong> My name <em>is</em> Carlos. I'<em>m</em> Ana.</li>
<li><strong>Nationalities/Countries:</strong> She'<em>s</em> from Japan. They'<em>re</em> from Mexico.</li>
<li><strong>Jobs/Roles:</strong> He'<em>s</em> a teacher. We'<em>re</em> students.</li>
<li><strong>Feelings/States:</strong> I'<em>m</em> happy. They'<em>re</em> tired.</li>
<li><strong>Descriptions:</strong> It'<em>s</em> a beautiful school.</li>
</ul></div>`,

// [1] Practice & Exercises
`<div class="card"><h3>✏️ Exercise 1 — Fill in: am, is, or are</h3>
<p>Choose the correct form of "be" to complete each sentence. Think about the subject first!</p>
<div class="exercise" id="u1g1_ex1">
<p>1. I ________ a student at Central School. <input type="text" data-answer="am" placeholder="am/is/are"></p>
<p>2. She ________ my English teacher. <input type="text" data-answer="is" placeholder="am/is/are"></p>
<p>3. They ________ from Venezuela. <input type="text" data-answer="are" placeholder="am/is/are"></p>
<p>4. He ________ my friend Carlos. <input type="text" data-answer="is" placeholder="am/is/are"></p>
<p>5. We ________ in Room 3. <input type="text" data-answer="are" placeholder="am/is/are"></p>
<p>6. You ________ very welcome here! <input type="text" data-answer="are" placeholder="am/is/are"></p>
<p>7. It ________ a sunny morning. <input type="text" data-answer="is" placeholder="am/is/are"></p>
<p>8. My name ________ Ana Martínez. <input type="text" data-answer="is" placeholder="am/is/are"></p>
<button class="btn btn-primary" onclick="checkFill(this,'u1g1_ex1')">Check Answers ✓</button>
</div></div>
<div class="card"><h3>✏️ Exercise 2 — Write the Contraction</h3>
<p>Rewrite each phrase as a contraction. Example: "I am" → "I'm"</p>
<div class="exercise" id="u1g1_ex2">
<p>1. You are → <input type="text" data-answer="you're" placeholder="..."></p>
<p>2. He is → <input type="text" data-answer="he's" placeholder="..."></p>
<p>3. We are → <input type="text" data-answer="we're" placeholder="..."></p>
<p>4. She is → <input type="text" data-answer="she's" placeholder="..."></p>
<p>5. It is → <input type="text" data-answer="it's" placeholder="..."></p>
<p>6. They are → <input type="text" data-answer="they're" placeholder="..."></p>
<button class="btn btn-primary" onclick="checkFill(this,'u1g1_ex2')">Check Answers ✓</button>
</div></div>
<div class="card"><h3>✏️ Exercise 3 — Choose the Correct Sentence</h3>
<div class="exercise" id="u1g1_ex3">
<p><strong>1. Which sentence is correct?</strong></p>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">a) I'm from Mexico.</div>
<div class="mc-option" onclick="selectMC(this)">b) I are from Mexico.</div>
<div class="mc-option" onclick="selectMC(this)">c) I is from Mexico.</div>
<br>
<p><strong>2. Which sentence uses a contraction correctly?</strong></p>
<div class="mc-option" onclick="selectMC(this)">a) Shes a teacher.</div>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">b) She's a teacher.</div>
<div class="mc-option" onclick="selectMC(this)">c) She's' a teacher.</div>
<br>
<p><strong>3. Ana and Luis ________ from Peru.</strong></p>
<div class="mc-option" onclick="selectMC(this)">a) is</div>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">b) are</div>
<div class="mc-option" onclick="selectMC(this)">c) am</div>
<button class="btn btn-primary" onclick="checkMC(this,'u1g1_ex3')" style="margin-top:12px">Check Answers ✓</button>
</div></div>`,


// [2] Reading
`<div class="card"><h3>📖 Reading: "Nice to Meet You!"</h3>
<p style="color:var(--text3);font-size:13px">Read the text. Pay attention to the verb "be" in each sentence.</p>
<div class="reading-passage">
<p>Hello! My name is Sofia. I am a student. I am 20 years old. I am from Medellín, Colombia. I am happy to be in this English class.</p>
<p>My teacher is Mr. Johnson. He is American. He is very patient and kind. He is a great teacher.</p>
<p>My classmate is Diego. He is from Quito, Ecuador. He is 22 years old. He is smart and funny.</p>
<p>Another classmate is Mei. She is from Shanghai, China. She is quiet but very friendly. She is a hard worker.</p>
<p>We are all in the same class. We are beginners. It is hard sometimes, but it is interesting. English is a beautiful language!</p>
</div></div>
<div class="card"><h3>💭 Comprehension</h3>
<div class="opinion-q"><p><span class="qnum">1.</span> Where is Sofia from? How old is she?</p><textarea placeholder="Write your answer here..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">2.</span> What is the teacher's name? Where is he from?</p><textarea placeholder="Write your answer here..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">3.</span> Describe Diego. Use two sentences.</p><textarea placeholder="Write your answer here..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">4.</span> How do the students feel about English class?</p><textarea placeholder="Write your answer here..."></textarea></div>
</div>`,

// [3] Conversation
`<div class="card"><h3>💬 Conversation: First Day of Class</h3>
<p>Read this real-life dialogue. Notice how "am," "is," and "are" are used naturally. The key grammar words are highlighted in <em>italic</em>.</p>
<div class="dialogue">
<div class="line"><span class="speaker">Teacher:</span><span class="text">Good morning, everyone! Welcome to English Level 2. My name <em>is</em> Ms. Rivera. I'<em>m</em> your teacher.</span></div>
<div class="line"><span class="speaker">Class:</span><span class="text">Good morning, Ms. Rivera!</span></div>
<div class="line"><span class="speaker">Teacher:</span><span class="text">Let's introduce ourselves. Who <em>is</em> first? (looks at Ana)</span></div>
<div class="line"><span class="speaker">Ana:</span><span class="text">Hi! My name <em>is</em> Ana. I'<em>m</em> from Caracas, Venezuela. I'<em>m</em> very happy to be here!</span></div>
<div class="line"><span class="speaker">Teacher:</span><span class="text">Wonderful! Nice to meet you, Ana. And you? (looks at Carlos)</span></div>
<div class="line"><span class="speaker">Carlos:</span><span class="text">Hello! I'<em>m</em> Carlos Rodríguez. I'<em>m</em> from Bogotá, Colombia. She <em>is</em> my friend Ana.</span></div>
<div class="line"><span class="speaker">Teacher:</span><span class="text">Great! So you'<em>re</em> both in class together. That'<em>s</em> nice!</span></div>
<div class="line"><span class="speaker">Carlos:</span><span class="text">Yes! We'<em>re</em> classmates.</span></div>
</div>
<div class="tip">🗣️ Speaking Tip: When you introduce yourself, always say your name, where you are from, and one extra detail. "I'm [name]. I'm from [place]. I'm [job/role]."</div>
</div>
<div class="card"><h3>🎯 Now Practice!</h3>
<p>Write YOUR introduction using the verb "be." Include at least 5 sentences.</p>
<div class="opinion-q">
<p><span class="qnum">✍️</span> Write your introduction here:</p>
<textarea placeholder="Example: Hi! My name is ___. I'm from ___. I'm a student at ___. My teacher's name is ___. I'm very happy to learn English!"></textarea>
</div>
</div>`
];
