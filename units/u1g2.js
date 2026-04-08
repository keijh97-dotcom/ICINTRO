// Unit 1 — Grammar 2: Possessive Adjectives
window.unit1g2 = [
// [0] Grammar Explanation
`<div class="card"><h3>👤 Possessive Adjectives — My, Your, His, Her, Its, Our, Their</h3>
<p>We use <strong>possessive adjectives</strong> to show that something belongs to someone. They always come <strong>before a noun</strong> and never change form.</p>
<h4>📌 The Full Table</h4>
<table class="grammar-table"><tr><th>Subject Pronoun</th><th>Possessive Adjective</th><th>Meaning</th><th>Example</th></tr>
<tr><td>I</td><td><strong>my</strong></td><td>belonging to me</td><td><em>My</em> name is Ana.</td></tr>
<tr><td>you</td><td><strong>your</strong></td><td>belonging to you</td><td>What is <em>your</em> phone number?</td></tr>
<tr><td>he</td><td><strong>his</strong></td><td>belonging to him</td><td><em>His</em> name is Carlos.</td></tr>
<tr><td>she</td><td><strong>her</strong></td><td>belonging to her</td><td><em>Her</em> teacher is Ms. Rivera.</td></tr>
<tr><td>it</td><td><strong>its</strong></td><td>belonging to it</td><td>The school has <em>its</em> own library.</td></tr>
<tr><td>we</td><td><strong>our</strong></td><td>belonging to us</td><td><em>Our</em> class is at 9:00.</td></tr>
<tr><td>they</td><td><strong>their</strong></td><td>belonging to them</td><td><em>Their</em> names are Ana and Carlos.</td></tr></table>
<h4>🔑 Important Rules</h4>
<p><strong>Rule 1:</strong> Possessive adjectives ALWAYS go before a noun. You cannot say "My is Ana" — you need a noun: "My <em>name</em> is Ana."</p>
<div class="example">✅ <em>My</em> phone number is 555-1234.<span class="trans">Correct — "My" is before the noun "phone number."</span></div>
<div class="example">❌ Phone number my is 555-1234.<span class="trans">Wrong — possessive adjective must come BEFORE the noun.</span></div>
<p><strong>Rule 2:</strong> Do NOT confuse possessive adjectives with subject pronouns.</p>
<table class="grammar-table"><tr><th>Subject Pronoun (does an action)</th><th>Possessive Adjective (shows ownership)</th></tr>
<tr><td><em>He</em> is a student. (He does something)</td><td><em>His</em> name is Carlos. (His = belonging to him)</td></tr>
<tr><td><em>She</em> is my teacher. (She does something)</td><td><em>Her</em> class is at 9 a.m. (Her = belonging to her)</td></tr></table>
<h4>⚠️ Common Mistake: "It's" vs "Its"</h4>
<div class="example"><strong>It's</strong> = It is → "It's a great school." (contraction)<span class="trans">"It's" always means "it is."</span></div>
<div class="example"><strong>Its</strong> = possessive → "The school has its own library." (no apostrophe)<span class="trans">"Its" shows that the library belongs to the school.</span></div>
<div class="tip">Remember: "Its" (possessive) has NO apostrophe. "It's" (it is) HAS an apostrophe. This is one of the most common mistakes in English!</div></div>`,

// [1] Practice & Exercises
`<div class="card"><h3>✏️ Exercise 1 — Fill in the Possessive Adjective</h3>
<p>Look at the subject in bold. Choose the correct possessive adjective (my, your, his, her, our, their).</p>
<div class="exercise" id="u1g2_ex1">
<p>1. <strong>I</strong> am Ana. ________ last name is Martínez. <input type="text" data-answer="my" placeholder="my/your/his..."></p>
<p>2. <strong>She</strong> is Maria. ________ teacher is Ms. Rivera. <input type="text" data-answer="her" placeholder="my/your/his..."></p>
<p>3. <strong>He</strong> is Pedro. ________ phone number is 555-9900. <input type="text" data-answer="his" placeholder="my/your/his..."></p>
<p>4. <strong>We</strong> are in Level 2. ________ classroom is Room 3. <input type="text" data-answer="our" placeholder="my/your/his..."></p>
<p>5. <strong>They</strong> are from Japan. ________ names are Yuki and Kenji. <input type="text" data-answer="their" placeholder="my/your/his..."></p>
<p>6. Hello! What is ________ name? (talking to a friend) <input type="text" data-answer="your" placeholder="my/your/his..."></p>
<button class="btn btn-primary" onclick="checkFill(this,'u1g2_ex1')">Check Answers ✓</button>
</div></div>
<div class="card"><h3>✏️ Exercise 2 — Correct the Error</h3>
<p>Each sentence has a mistake. Choose the correct version.</p>
<div class="exercise" id="u1g2_ex2">
<p><strong>1. "She name is Ana."</strong></p>
<div class="mc-option" onclick="selectMC(this)">a) She's name is Ana.</div>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">b) Her name is Ana.</div>
<div class="mc-option" onclick="selectMC(this)">c) Hers name is Ana.</div>
<br>
<p><strong>2. "What is you phone number?"</strong></p>
<div class="mc-option" onclick="selectMC(this)">a) What is yours phone number?</div>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">b) What is your phone number?</div>
<div class="mc-option" onclick="selectMC(this)">c) What is you're phone number?</div>
<br>
<p><strong>3. "The school has it's own cafeteria."</strong></p>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">a) The school has its own cafeteria.</div>
<div class="mc-option" onclick="selectMC(this)">b) The school has it's own cafeteria.</div>
<div class="mc-option" onclick="selectMC(this)">c) The school has their own cafeteria.</div>
<button class="btn btn-primary" onclick="checkMC(this,'u1g2_ex2')" style="margin-top:12px">Check Answers ✓</button>
</div></div>`,


// [2] Reading
`<div class="card"><h3>📖 Reading: "My Family"</h3>
<div class="reading-passage">
<p>My name is Laura. I live with my family. My father's name is Roberto. His job is engineer. My mother's name is Carmen. Her job is nurse. They are wonderful parents.</p>
<p>I have a brother. His name is Andrés. His nickname is "Andy." He is 16 years old. His phone number is 555-3344.</p>
<p>I also have a sister. Her name is Valentina. Her email is vale@mail.com. Her dream is to be a doctor.</p>
<p>Our house is in Bogotá. Our neighborhood is quiet and safe. We love our home.</p>
</div></div>
<div class="card"><h3>💭 Comprehension</h3>
<div class="opinion-q"><p><span class="qnum">1.</span> What are Laura's parents' names and jobs?</p><textarea placeholder="Write your answer here..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">2.</span> What is the brother's nickname and phone number?</p><textarea placeholder="Write your answer here..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">3.</span> What is the sister's dream?</p><textarea placeholder="Write your answer here..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">4.</span> Now write 3 sentences about YOUR family using possessive adjectives.</p><textarea placeholder="Write your answer here..."></textarea></div>
</div>`,

// [3] Conversation
`<div class="card"><h3>💬 Conversation: Getting Information</h3>
<p>Read how people ask about and share information using possessive adjectives.</p>
<div class="dialogue">
<div class="line"><span class="speaker">Ana:</span><span class="text">Hi! <em>My</em> name is Ana. What's <em>your</em> name?</span></div>
<div class="line"><span class="speaker">Yuki:</span><span class="text">Hello, Ana! <em>My</em> name is Yuki. <em>My</em> last name is Tanaka.</span></div>
<div class="line"><span class="speaker">Ana:</span><span class="text">Nice to meet you, Yuki! Where are you from?</span></div>
<div class="line"><span class="speaker">Yuki:</span><span class="text">I'm from Tokyo. And Carlos? What's <em>his</em> last name?</span></div>
<div class="line"><span class="speaker">Ana:</span><span class="text"><em>His</em> last name is Rodríguez. <em>His</em> phone number is 555-2468.</span></div>
<div class="line"><span class="speaker">Yuki:</span><span class="text">And the teacher — what's <em>her</em> name?</span></div>
<div class="line"><span class="speaker">Ana:</span><span class="text"><em>Her</em> name is Ms. Rivera. <em>Our</em> class is in Room 3.</span></div>
<div class="line"><span class="speaker">Yuki:</span><span class="text">Great! Do the students have a class group? What's <em>their</em> WhatsApp group?</span></div>
<div class="line"><span class="speaker">Ana:</span><span class="text">Yes! <em>Our</em> group name is "English Level 2!"</span></div>
</div>
<div class="tip">Practice Tip: Try describing people around you using "his," "her," and "their." Example: "My classmate's name is ___. Her/His last name is ___."</div>
</div>
<div class="card"><h3>🎯 Writing Practice</h3>
<p>Describe three people you know (classmates, friends, or family). Use possessive adjectives in each sentence.</p>
<div class="opinion-q"><p><span class="qnum">Person 1:</span></p><textarea placeholder="His/Her name is ___. His/Her last name is ___. His/Her phone number is ___."></textarea></div>
<div class="opinion-q"><p><span class="qnum">Person 2:</span></p><textarea placeholder="His/Her name is ___. His/Her city is ___."></textarea></div>
<div class="opinion-q"><p><span class="qnum">Person 3:</span></p><textarea placeholder="Their names are ___ and ___. Their country is ___."></textarea></div>
</div>`
];
