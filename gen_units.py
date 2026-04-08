import os
base = r'C:\Users\joasi\Downloads\Bank_statement\Level 02\units'
def W(name, content):
    with open(os.path.join(base, name), 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'  wrote {name}')

# PC7 (Units 13-14)
W('pc7.js', """window.pc7 = [
`<div class="card"><h3>📝 Progress Check 7 — Units 13 & 14</h3>
<p style="color:var(--text2)">Topics: Prepositions of Place, Directions, Simple Past (regular & irregular).</p></div>
<div class="card"><h3>Part A — Prepositions & Directions (5 pts)</h3>
<div class="exercise" id="pc7_a">
<p>1. The bank is ________ the pharmacy. (directly facing) <input type="text" data-answer="across from|opposite"></p>
<p>2. Go straight. Then ________ left on Oak Street. <input type="text" data-answer="turn"></p>
<p>3. The café is ________ the library and the school. <input type="text" data-answer="between"></p>
<p>4. The bus stop is ________ the school. (in the front) <input type="text" data-answer="in front of"></p>
<p>5. The pharmacy is ________ the corner of Main and Oak. <input type="text" data-answer="on"></p>
<button class="btn btn-primary" onclick="checkFill(this,'pc7_a')">Check Part A ✓</button>
</div></div>
<div class="card"><h3>Part B — Simple Past (5 pts)</h3>
<div class="exercise" id="pc7_b">
<p><strong>1. She ________ to the market yesterday.</strong></p>
<div class="mc-option" onclick="selectMC(this)">a) goed</div><div class="mc-option" onclick="selectMC(this)" data-correct="true">b) went</div>
<br>
<p><strong>2. "Did they ________ (eat) dinner?" "Yes, they ________."</strong></p>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">a) eat / did</div><div class="mc-option" onclick="selectMC(this)">b) ate / did</div>
<br>
<p><strong>3. She ________ (not/finish) her homework last night.</strong></p>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">a) didn't finish</div><div class="mc-option" onclick="selectMC(this)">b) didn't finished</div>
<br>
<p><strong>4. study (past regular) → ________</strong></p>
<div class="mc-option" onclick="selectMC(this)">a) studyed</div><div class="mc-option" onclick="selectMC(this)" data-correct="true">b) studied</div>
<br>
<p><strong>5. sleep (past irregular) → ________</strong></p>
<div class="mc-option" onclick="selectMC(this)">a) sleeped</div><div class="mc-option" onclick="selectMC(this)" data-correct="true">b) slept</div>
<button class="btn btn-primary" onclick="checkMC(this,'pc7_b')" style="margin-top:12px">Check Part B ✓</button>
</div></div>`,

`<div class="card"><h3>📖 Reading: "Lost in Translation"</h3>
<div class="reading-passage">
<p>Last year, my friend Pablo visited a new city for the first time. He grew up in a small town and was not used to big cities. He got lost several times!</p>
<p>On the first day, he left his hotel and walked down Main Street. He wanted to find the museum. A local told him: "Go straight on Main Street for four blocks. Then turn right on Gallery Avenue. The museum is on the left, across from the park." Pablo said "Thank you," started walking, but turned left instead of right. He ended up near the river, completely lost.</p>
<p>He asked a woman for help. She saw the map on his phone and laughed kindly. "You walked in the wrong direction!" She gave him new directions and he finally found the museum — one hour late.</p>
<p>That afternoon, he visited the museum. He saw wonderful paintings and sculptures. He bought a book about local art. He took many photos. He ate lunch at a café next to the museum. He met the café owner, an interesting man who gave him a list of hidden gems in the city.</p>
<p>Pablo went home happy and with lots of stories. He said: "Getting lost was the best thing that happened to me. I discovered places I never planned to visit!"</p>
</div></div>
<div class="card"><h3>💭 Comprehension</h3>
<div class="opinion-q"><p><span class="qnum">1.</span> What directions did the local give Pablo? In correct order.</p><textarea placeholder="Go straight on Main Street for... Then turn right on... The museum is..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">2.</span> Write 6 Simple Past verbs (regular and irregular) from the reading.</p><textarea placeholder="grew, got, left, walked, turned, ended up, saw, bought, took, ate, met, went..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">3.</span> What lesson does Pablo learn from getting lost?</p><textarea placeholder="He learned that getting lost was... He discovered..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">4.</span> Have you ever gotten lost? Describe the experience using Simple Past.</p><textarea placeholder="One time I got lost in... I was looking for... I asked... I finally found..."></textarea></div>
</div>`,

`<div class="card"><h3>🗣️ Speaking Check 7</h3></div>
<div class="card"><h3>Part 1 — Directions</h3>
<div class="opinion-q"><p><span class="qnum">1.</span> Give directions from your school to the nearest bus stop or supermarket. Use at least 4 direction expressions.</p><textarea placeholder="Start at the school entrance. Turn left on... Go straight for... Walk past the... Turn right at..."></textarea></div>
</div>
<div class="card"><h3>Part 2 — My Last Weekend</h3>
<div class="opinion-q"><p><span class="qnum">2.</span> Tell a story about what you did last weekend. Use at least 8 Simple Past verbs (mix of regular and irregular).</p><textarea style="min-height:140px" placeholder="Last weekend, I woke up at... I ate breakfast and then went to... I met... We watched/visited/ate... In the evening I..."></textarea></div>
</div>
<div class="card"><h3>Part 3 — Describe a City</h3>
<div class="opinion-q"><p><span class="qnum">3.</span> Describe the city you currently live in. Where is everything located? Use prepositions of place.</p><textarea placeholder="In my city, the main plaza is... The hospital is next to... The market is between... My school is on the corner of..."></textarea></div>
</div>`
];
""")
print('PC7 done')

# Unit 15
W('u15g1.js', """window.unit15g1 = [
`<div class="card"><h3>🔤 Past of "Be" — Was and Were</h3>
<p>The verb "be" has its own special past tense forms: <strong>was</strong> and <strong>were</strong>. Remember, "be" is irregular!</p>
<h4>📌 When to Use Was and Were</h4>
<table class="grammar-table"><tr><th>Subject</th><th>Past of Be</th><th>Example</th></tr>
<tr><td>I</td><td><strong>was</strong></td><td>I <em>was</em> tired yesterday.</td></tr>
<tr><td>He</td><td><strong>was</strong></td><td>He <em>was</em> at work.</td></tr>
<tr><td>She</td><td><strong>was</strong></td><td>She <em>was</em> happy.</td></tr>
<tr><td>It</td><td><strong>was</strong></td><td>The weather <em>was</em> beautiful.</td></tr>
<tr><td>You</td><td><strong>were</strong></td><td>You <em>were</em> right!</td></tr>
<tr><td>We</td><td><strong>were</strong></td><td>We <em>were</em> at the beach.</td></tr>
<tr><td>They</td><td><strong>were</strong></td><td>They <em>were</em> students.</td></tr></table>
<h4>📌 Negative Forms</h4>
<div class="example">I <em>wasn't</em> at school. (was + not = wasn't)<span class="trans">He, she, it also use wasn't.</span></div>
<div class="example">They <em>weren't</em> ready. (were + not = weren't)<span class="trans">You, we, they also use weren't.</span></div>
<h4>📌 Yes/No Questions</h4>
<div class="example">Was she at the party? — Yes, she was. / No, she wasn't.<span class="trans">Invert: was/were + subject.</span></div>
<div class="example">Were they happy? — Yes, they were. / No, they weren't.<span class="trans">Short answers use was/were — don't add the adjective.</span></div></div>`,

`<div class="card"><h3>✏️ Exercise 1 — Was or Were?</h3>
<div class="exercise" id="u15g1_ex1">
<p>1. I ________ at the library yesterday. <input type="text" data-answer="was"></p>
<p>2. They ________ very tired after the game. <input type="text" data-answer="were"></p>
<p>3. She ________ a student here three years ago. <input type="text" data-answer="was"></p>
<p>4. We ________ surprised by the news. <input type="text" data-answer="were"></p>
<p>5. ________ you at home last night? <input type="text" data-answer="Were"></p>
<p>6. He ________ (not) in class yesterday. <input type="text" data-answer="wasn't|was not"></p>
<button class="btn btn-primary" onclick="checkFill(this,'u15g1_ex1')">Check Answers ✓</button>
</div></div>
<div class="card"><h3>✏️ Exercise 2 — Was/Wasn't or Were/Weren't?</h3>
<div class="exercise" id="u15g1_ex2">
<p><strong>1. "________ she happy with her grade?"</strong></p>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">a) Was</div>
<div class="mc-option" onclick="selectMC(this)">b) Were</div>
<br>
<p><strong>2. "My parents ________ at the concert last night."</strong></p>
<div class="mc-option" onclick="selectMC(this)">a) wasn't</div>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">b) weren't</div>
<br>
<p><strong>3. "The weather ________ perfect for a picnic last Sunday."</strong></p>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">a) was</div>
<div class="mc-option" onclick="selectMC(this)">b) were</div>
<button class="btn btn-primary" onclick="checkMC(this,'u15g1_ex2')" style="margin-top:12px">Check Answers ✓</button>
</div></div>`,

`<div class="card"><h3>📖 Reading: "My Childhood"</h3>
<div class="reading-passage">
<p>When I was a child, life was very different. I was born in a small village in the mountains of Colombia. My family was not rich, but we were happy.</p>
<p>Our house was small — two bedrooms, a kitchen, and a patio. There was no television. There wasn't internet. But there were always books! My mother was a schoolteacher and she was passionate about education. The house was always full of books.</p>
<p>My father was a farmer. He was up at 5 a.m. every day. He was always kind and patient. He wasn't a man of many words, but his actions were full of love.</p>
<p>I was a curious and energetic child. My friends and I were outside all day. We were never bored because the mountains were our playground. The rivers were clean and the air was fresh.</p>
<p>Times were simpler then. People were friendlier, or maybe we were just more present with each other. I was very happy in those years. Sometimes I think about my childhood village and I miss it. But I am grateful for everything it gave me.</p>
</div></div>
<div class="card"><h3>💭 Comprehension</h3>
<div class="opinion-q"><p><span class="qnum">1.</span> What was the writer's house like?</p><textarea placeholder="The house was small. There was... There wasn't..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">2.</span> Describe the mother and father using was/were.</p><textarea placeholder="The mother was a... She was passionate about... The father was a..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">3.</span> What was the writer like as a child?</p><textarea placeholder="He/She was... The writer and friends were always..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">4.</span> Write about YOUR childhood using was/were.</p><textarea placeholder="When I was a child, I was... My house was... My family was... I was always..."></textarea></div>
</div>`,

`<div class="card"><h3>💬 Conversation: Tell Me About When You Were Young</h3>
<div class="dialogue">
<div class="line"><span class="speaker">Grandma:</span><span class="text">When I was young, life was completely different!</span></div>
<div class="line"><span class="speaker">Ana:</span><span class="text">Really? What was it like? Were there computers?</span></div>
<div class="line"><span class="speaker">Grandma:</span><span class="text">No, there weren't! There was only one TV in the whole neighborhood, at the neighbor's house.</span></div>
<div class="line"><span class="speaker">Ana:</span><span class="text">Was school strict?</span></div>
<div class="line"><span class="speaker">Grandma:</span><span class="text">Oh, it was very strict! The teachers weren't as patient as your teachers today.</span></div>
<div class="line"><span class="speaker">Ana:</span><span class="text">Were you a good student?</span></div>
<div class="line"><span class="speaker">Grandma:</span><span class="text">I was! I was always at the top of my class. Your grandfather wasn't, though — he was always in trouble!</span></div>
</div>
</div>`
];
""")

W('u15g2.js', """window.unit15g2 = [
`<div class="card"><h3>🔤 Wh- Questions with Simple Past</h3>
<p>In the Simple Past, we can form <strong>Wh- questions</strong> (What? Where? When? Who? Why? How?) to get specific information about past events.</p>
<h4>📌 Structure with Did (most verbs)</h4>
<p>Wh- word + <strong>did</strong> + subject + <strong>base verb</strong>?</p>
<div class="example">What <em>did</em> you <em>eat</em> for breakfast?<span class="trans">eat is the BASE verb — not "ate"!</span></div>
<div class="example">Where <em>did</em> they <em>go</em> last summer?<span class="trans">go → base verb after did (never "went")</span></div>
<div class="example">Why <em>did</em> she <em>leave</em> early?<span class="trans">Subject = she. After did, use leave (base).</span></div>
<h4>📌 Questions with "Was/Were" (verb be)</h4>
<p>Wh- word + <strong>was/were</strong> + subject?</p>
<div class="example">Where <em>were</em> you last night?<span class="trans">was/were = the verb itself — no "did" needed!</span></div>
<div class="example">How <em>was</em> the movie?<span class="trans">"How was" asks for an evaluation/opinion.</span></div>
<div class="example">Who <em>was</em> at the party?<span class="trans">Who + was = singular even if multiple people.</span></div>
<h4>📌 Common Answer Formulas</h4>
<div class="example">What did you do? — I visited my cousin.<span class="trans">Answer in Simple Past — regular or irregular verb.</span></div>
<div class="example">How was the trip? — It was fantastic!<span class="trans">"It was" for evaluations.</span></div></div>`,

`<div class="card"><h3>✏️ Exercise 1 — Form the Wh- Question</h3>
<div class="exercise" id="u15g2_ex1">
<p>Write a question for the underlined answer.</p>
<p>1. She went to the market. (Where?) → ________ <input type="text" data-answer="Where did she go?" style="width:260px"></p>
<p>2. He ate pizza for dinner. (What?) → ________ <input type="text" data-answer="What did he eat for dinner?" style="width:260px"></p>
<p>3. They were nervous because of the test. (Why?) → ________ <input type="text" data-answer="Why were they nervous?" style="width:260px"></p>
<p>4. She called her mother yesterday. (When?) → ________ <input type="text" data-answer="When did she call her mother?" style="width:260px"></p>
<button class="btn btn-primary" onclick="checkFill(this,'u15g2_ex1')">Check Answers ✓</button>
</div></div>
<div class="card"><h3>✏️ Exercise 2 — Did or Was/Were?</h3>
<div class="exercise" id="u15g2_ex2">
<p><strong>1. "________ you do last night?" → I watched TV.</strong></p>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">a) What did</div>
<div class="mc-option" onclick="selectMC(this)">b) What were</div>
<br>
<p><strong>2. "________ the trip?" → It was wonderful.</strong></p>
<div class="mc-option" onclick="selectMC(this)">a) What did</div>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">b) How was</div>
<br>
<p><strong>3. "________ they go on their honeymoon?" → Paris.</strong></p>
<div class="mc-option" onclick="selectMC(this)">a) Where were</div>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">b) Where did they go</div>
<button class="btn btn-primary" onclick="checkMC(this,'u15g2_ex2')" style="margin-top:12px">Check Answers ✓</button>
</div></div>`,

`<div class="card"><h3>📖 Reading: "The Class Reunion"</h3>
<div class="reading-passage">
<p>Last month, my high school class had a reunion — exactly 10 years after we graduated. It was a special and emotional evening.</p>
<p>The event was at a hotel ballroom downtown. It was beautiful — the room was decorated with photos from our school years. The photo of our graduating class was on the main wall. We were all so young!</p>
<p>Many things changed in 10 years. Tomás was a shy, quiet student. Now he is an outgoing professor. Where did he find his confidence? Ana was the class president. She is now a lawyer. How did she get so successful so quickly?</p>
<p>The biggest surprise was Roberto. When we were students, he was always absent and he never studied. At the reunion, we found out he was now a successful restaurant owner! What happened?! He laughed and said: "I found my passion in cooking. It took time, but I got there."</p>
<p>At the end of the night, we took a new group photo. We all looked older. But everyone agreed: it was a wonderful evening. How was YOUR last reunion or big gathering?</p>
</div></div>
<div class="card"><h3>💭 Comprehension</h3>
<div class="opinion-q"><p><span class="qnum">1.</span> What was Tomás like in school? How did he change?</p><textarea placeholder="He was shy and quiet. Now he is..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">2.</span> What was Roberto like as a student? What is he now?</p><textarea placeholder="He was always absent... Now he is..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">3.</span> Form 4 Wh- questions about the reading. Then answer them.</p><textarea placeholder="Where was the reunion? — It was at... / Who was the class president? — Ana was..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">4.</span> How were YOU 5 years ago? How are you different now?</p><textarea placeholder="Five years ago, I was... I was studying... I wasn't... Now I am..."></textarea></div>
</div>`,

`<div class="card"><h3>💬 Conversation: How Was Your Day?</h3>
<div class="dialogue">
<div class="line"><span class="speaker">Mia:</span><span class="text">Hey! How was your day?</span></div>
<div class="line"><span class="speaker">Tom:</span><span class="text">It was exhausting! I had a long presentation at work.</span></div>
<div class="line"><span class="speaker">Mia:</span><span class="text">Oh no! How did it go?</span></div>
<div class="line"><span class="speaker">Tom:</span><span class="text">Actually, it went well! My boss was happy with my work. How was yours?</span></div>
<div class="line"><span class="speaker">Mia:</span><span class="text">Really enjoyable! I had a great English class. What did we do? We discussed past tense grammar.</span></div>
<div class="line"><span class="speaker">Tom:</span><span class="text">Where did you eat lunch?</span></div>
<div class="line"><span class="speaker">Mia:</span><span class="text">At that new café on Green Street. The food was delicious! Did you eat out?</span></div>
<div class="line"><span class="speaker">Tom:</span><span class="text">No, I didn't. I was too busy! I ate a sad sandwich at my desk.</span></div>
</div>
</div>`
];
""")

W('u15vocab.js', """window.unit15vocab = [`<div class="card"><h3>📖 Unit 15 Vocabulary — Past States & Childhood</h3>
<div class="vocab-grid">
<div class="vocab-item"><span class="word">childhood</span><span class="type">n.</span><div class="def">The time of life when a person is a child.</div><div class="ex">"I have good memories of my childhood."</div></div>
<div class="vocab-item"><span class="word">grow up</span><span class="type">phr.v.</span><div class="def">To develop from a child to an adult.</div><div class="ex">"I grew up in a small town."</div></div>
<div class="vocab-item"><span class="word">born</span><span class="type">adj./v.</span><div class="def">Coming into existence; the start of life.</div><div class="ex">"I was born in Medellín in 1998."</div></div>
<div class="vocab-item"><span class="word">village</span><span class="type">n.</span><div class="def">A small community in a rural area.</div><div class="ex">"My grandmother lives in a quiet mountain village."</div></div>
<div class="vocab-item"><span class="word">reunion</span><span class="type">n.</span><div class="def">A gathering of people who have not met for a long time.</div><div class="ex">"Our school reunion was 10 years after graduation."</div></div>
<div class="vocab-item"><span class="word">graduate</span><span class="type">v.</span><div class="def">To complete a school, university, or program.</div><div class="ex">"She graduated from university last year."</div></div>
<div class="vocab-item"><span class="word">passionate</span><span class="type">adj.</span><div class="def">Feeling very strong enthusiasm or love for something.</div><div class="ex">"She was passionate about teaching."</div></div>
<div class="vocab-item"><span class="word">curious</span><span class="type">adj.</span><div class="def">Eager to learn and know new things.</div><div class="ex">"He was a curious child — always asking questions."</div></div>
<div class="vocab-item"><span class="word">exhausting</span><span class="type">adj.</span><div class="def">Making you feel very tired; draining energy.</div><div class="ex">"The long presentation was exhausting."</div></div>
</div></div>`];
""")
print('Unit 15 done')

# Unit 16
W('u16g1.js', """window.unit16g1 = [
`<div class="card"><h3>🔤 Object Pronouns — Me, You, Him, Her, It, Us, Them</h3>
<p>In Unit 1 we learned <strong>subject pronouns</strong> (I, you, he, she, it, we, they). Now we learn <strong>object pronouns</strong> — the pronouns we use when someone is the RECEIVER of the action.</p>
<h4>📌 Subject vs. Object Pronouns</h4>
<table class="grammar-table"><tr><th>Subject Pronoun</th><th>Object Pronoun</th><th>Example</th></tr>
<tr><td>I</td><td>me</td><td>She called <em>me</em>.</td></tr>
<tr><td>you</td><td>you</td><td>I saw <em>you</em> at the market.</td></tr>
<tr><td>he</td><td>him</td><td>I know <em>him</em> well.</td></tr>
<tr><td>she</td><td>her</td><td>He helped <em>her</em> with the test.</td></tr>
<tr><td>it</td><td>it</td><td>I like <em>it</em>.</td></tr>
<tr><td>we</td><td>us</td><td>They invited <em>us</em> to the party.</td></tr>
<tr><td>they</td><td>them</td><td>I saw <em>them</em> at the park.</td></tr></table>
<div class="example">Ana called <em>me</em> yesterday. (me = object, received the call)<span class="trans">"I" starts the action. "Ana" is the subject. "Me" receives it.</span></div>
<div class="example">Can you help <em>him</em>? (him = object, receives the help)<span class="trans">"You" is asked to help. "Him" is the one who receives help.</span></div>
<div class="tip">Common mistake: "Between you and I" is WRONG. "Between you and me" is CORRECT. After prepositions (with, for, to, between, from, at), always use OBJECT pronouns: "with me," "for her," "to them," "between us."</div></div>`,

`<div class="card"><h3>✏️ Exercise 1 — Replace with Object Pronoun</h3>
<div class="exercise" id="u16g1_ex1">
<p>1. She called [Carlos]. → She called ________. <input type="text" data-answer="him"></p>
<p>2. I saw [Ana and Maria] at the café. → I saw ________. <input type="text" data-answer="them"></p>
<p>3. Can you help [me and my friend]? → Can you help ________? <input type="text" data-answer="us"></p>
<p>4. He knows [Ana] from school. → He knows ________. <input type="text" data-answer="her"></p>
<p>5. They invited [you and me]. → They invited ________. <input type="text" data-answer="us"></p>
<button class="btn btn-primary" onclick="checkFill(this,'u16g1_ex1')">Check Answers ✓</button>
</div></div>
<div class="card"><h3>✏️ Exercise 2 — Subject or Object?</h3>
<div class="exercise" id="u16g1_ex2">
<p><strong>1. "________ saw Ana at the store." (The person did the seeing)</strong></p>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">a) I</div>
<div class="mc-option" onclick="selectMC(this)">b) Me</div>
<br>
<p><strong>2. "Ana saw ________ at the store." (You were seen)</strong></p>
<div class="mc-option" onclick="selectMC(this)">a) I</div>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">b) me</div>
<br>
<p><strong>3. After "between," use: "This is between you and ________."</strong></p>
<div class="mc-option" onclick="selectMC(this)">a) I</div>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">b) me</div>
<button class="btn btn-primary" onclick="checkMC(this,'u16g1_ex2')" style="margin-top:12px">Check Answers ✓</button>
</div></div>`,

`<div class="card"><h3>📖 Reading: "A Secret Surprise"</h3>
<div class="reading-passage">
<p>My friend Ana has a birthday next Saturday. We are planning a surprise party for her. But shhh — don't tell her!</p>
<p>Carlos called me yesterday to talk about the plan. He told me to invite all her friends. I sent them all a message. They are all excited! I told them to arrive at 7 p.m. and to be very quiet when Ana walks in.</p>
<p>Carlos invited Ana's favorite band. He knows them from university — they are all musicans. He asked them to play two or three songs. They agreed to do it for free because they love Ana!</p>
<p>Ana's mother is helping us. We need her to bake Ana's favorite cake. She makes the best chocolate cake. We asked her to make two — one for Ana and one for us!</p>
<p>My friend Lena is going to decorate the room. I am going to help her. We are going to buy balloons and flowers tomorrow. The flowers are for Ana — I want to give them to her when she walks in.</p>
<p>I hope Ana doesn't find out about it! Keep the secret!</p>
</div></div>
<div class="card"><h3>💭 Comprehension</h3>
<div class="opinion-q"><p><span class="qnum">1.</span> Find 5 object pronouns in the reading and explain what they refer to.</p><textarea placeholder="'me' refers to the writer / 'them' refers to Ana's friends / 'her' refers to Ana..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">2.</span> What did the writer ask the band to do?</p><textarea placeholder="They asked them to play two or three songs..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">3.</span> What are the flowers for?</p><textarea placeholder="The flowers are for Ana. The writer wants to give them to her..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">4.</span> Describe a surprise or special event YOU organized or experienced. Use object pronouns.</p><textarea placeholder="We organized a surprise for [name]. We invited [him/her/them]... He/She helped us... We gave her/him..."></textarea></div>
</div>`,

`<div class="card"><h3>💬 Conversation: Can You Help Me?</h3>
<div class="dialogue">
<div class="line"><span class="speaker">Leo:</span><span class="text">Excuse me, can you help me? I'm looking for the English department.</span></div>
<div class="line"><span class="speaker">Maria:</span><span class="text">Of course! I can take you there. Follow me.</span></div>
<div class="line"><span class="speaker">Leo:</span><span class="text">Thank you! Do you know Professor Smith? I need to talk to him.</span></div>
<div class="line"><span class="speaker">Maria:</span><span class="text">Yes, I know him! He's a great teacher. I had him last semester.</span></div>
<div class="line"><span class="speaker">Leo:</span><span class="text">Really? Can I ask you about him? Is he strict?</span></div>
<div class="line"><span class="speaker">Maria:</span><span class="text">A little. But if you talk to him and show him your effort, he'll help you. He's very fair.</span></div>
<div class="line"><span class="speaker">Leo:</span><span class="text">That's reassuring. Thank you for telling me!</span></div>
</div>
</div>`
];
""")

W('u16g2.js', """window.unit16g2 = [
`<div class="card"><h3>🔤 Scheduling & Invitations</h3>
<p>Making plans, scheduling meetings, and accepting or declining invitations are essential everyday communication skills in English.</p>
<h4>📌 Making an Invitation</h4>
<div class="example">Would you like to come to my party on Saturday?<span class="trans">Polite invitation. "Would you like to" is more formal than "Do you want to."</span></div>
<div class="example">Are you free on Friday evening?<span class="trans">Check availability before asking.</span></div>
<div class="example">Do you want to have lunch together tomorrow?<span class="trans">Casual invitation between friends.</span></div>
<h4>📌 Accepting an Invitation</h4>
<div class="example">Sure! That sounds great. / Of course! / I'd love to!<span class="trans">Enthusiastic acceptance.</span></div>
<div class="example">That works for me. What time? / Count me in!<span class="trans">Agreement + asking for details.</span></div>
<h4>📌 Declining Politely</h4>
<div class="example">I'm sorry, but I can't. I already have plans.<span class="trans">Polite refusal with a reason.</span></div>
<div class="example">I'd love to, but I'm going to be out of town.<span class="trans">"I'd love to, but..." = very polite way to say no.</span></div>
<h4>📌 Suggesting Another Time</h4>
<div class="example">Can we do it another day? How about Sunday?<span class="trans">Rescheduling instead of just saying no.</span></div>
<div class="tip">Always give a reason when declining — it's more polite and shows respect. "I can't" alone can sound rude. Add "I'm sorry, but..." and a brief reason.</div></div>`,

`<div class="card"><h3>✏️ Exercise 1 — Invitation Language</h3>
<div class="exercise" id="u16g2_ex1">
<p>Choose the most appropriate response.</p>
<p><strong>1. "Would you like to come to my birthday party?"</strong></p>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">a) I'd love to! What time does it start?</div>
<div class="mc-option" onclick="selectMC(this)">b) I don't know you.</div>
<br>
<p><strong>2. "Are you free on Saturday?" (You're busy)</strong></p>
<div class="mc-option" onclick="selectMC(this)">a) No, I'm always busy.</div>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">b) I'm sorry, I can't. I already have plans. Can we do it Sunday?</div>
<br>
<p><strong>3. "Do you want to study together this afternoon?"</strong></p>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">a) Sure! That works for me. Where?</div>
<div class="mc-option" onclick="selectMC(this)">b) Study alone.</div>
<button class="btn btn-primary" onclick="checkMC(this,'u16g2_ex1')" style="margin-top:12px">Check Answers ✓</button>
</div></div>
<div class="card"><h3>✏️ Exercise 2 — Complete the Response</h3>
<div class="exercise" id="u16g2_ex2">
<p>1. "I'd ________ to come, but I can't. I'm busy." <input type="text" data-answer="love"></p>
<p>2. "I'm ________, but I can't make it on Friday." <input type="text" data-answer="sorry"></p>
<p>3. "That ________ great! What time?" <input type="text" data-answer="sounds"></p>
<p>4. "________ we do it another day?" <input type="text" data-answer="Can"></p>
<button class="btn btn-primary" onclick="checkFill(this,'u16g2_ex2')">Check Answers ✓</button>
</div></div>`,

`<div class="card"><h3>📖 Reading: "Finding Time Together"</h3>
<div class="reading-passage">
<p>In today's busy world, making plans with friends can be surprisingly difficult. Everyone has a different schedule!</p>
<p>Last week, Ana tried to organize a study group. She sent a message to five friends: "Would you like to meet on Wednesday at 6 p.m. to study for the English test?"</p>
<p>Carlos replied first: "I'd love to, but I can't on Wednesday. I'm going to be at a work meeting until 8 p.m. Can we do it Thursday instead?"</p>
<p>Yuki said: "Thursday works for me! I'm free after 5 p.m."</p>
<p>Luis wrote: "I'm sorry, I can't make it on Thursday either. I have a doctor's appointment. How about Friday?"</p>
<p>Ana replied: "Friday is perfect! Are you all free in the afternoon?"</p>
<p>Everyone agreed on Friday at 5 p.m. It took several messages, but they finally found a time that worked for everyone. Ana booked a study room at the library and sent them all the details.</p>
<p>The test was the following Monday — and they all passed! Finding time together had been worth it.</p>
</div></div>
<div class="card"><h3>💭 Comprehension</h3>
<div class="opinion-q"><p><span class="qnum">1.</span> What did Ana invite her friends to do?</p><textarea placeholder="She invited them to meet and study for..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">2.</span> Why couldn't Carlos come on Wednesday?</p><textarea placeholder="He couldn't come because he is going to be at..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">3.</span> What day did everyone agree to meet? What time?</p><textarea placeholder="They agreed to meet on Friday at..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">4.</span> Write a message inviting 3 friends to do something together this weekend. Include the activity, day, time, and place.</p><textarea placeholder="Hey everyone! Would you like to [activity] on [day] at [time]? We can meet at [place]. Let me know if you can make it!"></textarea></div>
</div>`,

`<div class="card"><h3>💬 Conversation: Making Plans</h3>
<div class="dialogue">
<div class="line"><span class="speaker">Paulo:</span><span class="text">Hey Ana! Would you like to come to my birthday dinner on Saturday?</span></div>
<div class="line"><span class="speaker">Ana:</span><span class="text">Oh! I'd love to! What time?</span></div>
<div class="line"><span class="speaker">Paulo:</span><span class="text">It starts at 7 p.m. at Casa Verde Restaurant. Do you know it?</span></div>
<div class="line"><span class="speaker">Ana:</span><span class="text">Yes, I do! It's on Oak Street, across from the park.</span></div>
<div class="line"><span class="speaker">Paulo:</span><span class="text">That's the one! Can you come? I'm also inviting Carlos and Yuki.</span></div>
<div class="line"><span class="speaker">Ana:</span><span class="text">Count me in! Should I bring anything?</span></div>
<div class="line"><span class="speaker">Paulo:</span><span class="text">Just yourself! But if you want to bring something, I love chocolate cake.</span></div>
<div class="line"><span class="speaker">Ana:</span><span class="text">Ha! I'll bring you the biggest chocolate cake they have. See you Saturday!</span></div>
</div>
<div class="card"><h3>🎯 Write Your Own Invitation</h3>
<div class="opinion-q"><p><span class="qnum">Write a full invitation exchange — make an invitation, and write two responses: one accepting and one politely declining with a reason and a counter-suggestion.</span></p><textarea style="min-height:150px" placeholder="Person A: Would you like to...? Are you free on...?&#10;Person B (accept): I'd love to! That sounds great. What time?...&#10;Person C (decline): I'm sorry, I can't... I'm going to be... How about... instead?"></textarea></div>
</div>`
];
""")

W('u16vocab.js', """window.unit16vocab = [`<div class="card"><h3>📖 Unit 16 Vocabulary — Making Plans & Social Language</h3>
<div class="vocab-grid">
<div class="vocab-item"><span class="word">invitation</span><span class="type">n.</span><div class="def">A request asking someone to come to an event or do something.</div><div class="ex">"She received an invitation to the birthday party."</div></div>
<div class="vocab-item"><span class="word">available / free</span><span class="type">adj.</span><div class="def">Not busy; able to do something at a given time.</div><div class="ex">"Are you free on Saturday evening?"</div></div>
<div class="vocab-item"><span class="word">decline</span><span class="type">v.</span><div class="def">To politely say no to an invitation or offer.</div><div class="ex">"She declined the invitation because she was sick."</div></div>
<div class="vocab-item"><span class="word">accept</span><span class="type">v.</span><div class="def">To say yes to an invitation or offer.</div><div class="ex">"They accepted the invitation and came to the party."</div></div>
<div class="vocab-item"><span class="word">suggestion</span><span class="type">n.</span><div class="def">An idea offered for consideration.</div><div class="ex">"My suggestion is to meet on Friday instead."</div></div>
<div class="vocab-item"><span class="word">reschedule</span><span class="type">v.</span><div class="def">To change the time or date of a meeting or event.</div><div class="ex">"Can we reschedule the meeting to Thursday?"</div></div>
<div class="vocab-item"><span class="word">count me in!</span><span class="type">phr.</span><div class="def">An enthusiastic way to say "I will come / I will join."</div><div class="ex">"A beach trip? Count me in!"</div></div>
<div class="vocab-item"><span class="word">make it</span><span class="type">phr.v.</span><div class="def">To be able to attend or arrive somewhere.</div><div class="ex">"I can't make it on Friday — I have work."</div></div>
<div class="vocab-item"><span class="word">miss out</span><span class="type">phr.v.</span><div class="def">To not experience something because you weren't there.</div><div class="ex">"You missed out! The party was fantastic."</div></div>
</div></div>`];
""")
print('Unit 16 done')

# PC8 (Units 15-16) — Final Progress Check
W('pc8.js', """window.pc8 = [
`<div class="card"><h3>📝 Final Progress Check 8 — Units 15 & 16</h3>
<p style="color:var(--text2)">Topics: Was/Were, Wh- Questions in Past, Object Pronouns, Scheduling & Invitations.</p></div>
<div class="card"><h3>Part A — Was/Were & Wh- Questions (5 pts)</h3>
<div class="exercise" id="pc8_a">
<p>1. They ________ at the concert last night. (were/was) <input type="text" data-answer="were"></p>
<p>2. She ________ (not) in class yesterday. <input type="text" data-answer="wasn't|was not"></p>
<p>3. ________ the trip? "It was fantastic!" <input type="text" data-answer="How was"></p>
<p>4. ________ you eat for dinner? "I ate pasta." <input type="text" data-answer="What did"></p>
<p>5. ________ they go last summer? "They went to Spain." <input type="text" data-answer="Where did"></p>
<button class="btn btn-primary" onclick="checkFill(this,'pc8_a')">Check Part A ✓</button>
</div></div>
<div class="card"><h3>Part B — Object Pronouns & Scheduling (5 pts)</h3>
<div class="exercise" id="pc8_b">
<p><strong>1. "She called [Carlos and me]." → She called ________.</strong></p>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">a) us</div><div class="mc-option" onclick="selectMC(this)">b) we</div>
<br>
<p><strong>2. Accepting an invitation: "I'd ________ to come!"</strong></p>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">a) love</div><div class="mc-option" onclick="selectMC(this)">b) likes</div>
<br>
<p><strong>3. Politely declining: "I'm ________, but I can't make it."</strong></p>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">a) sorry</div><div class="mc-option" onclick="selectMC(this)">b) sad</div>
<br>
<p><strong>4. "She saw [Ana] yesterday." → She saw ________.</strong></p>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">a) her</div><div class="mc-option" onclick="selectMC(this)">b) she</div>
<br>
<p><strong>5. "Between you and ________, I think Carlos was wrong."</strong></p>
<div class="mc-option" onclick="selectMC(this)">a) I</div><div class="mc-option" onclick="selectMC(this)" data-correct="true">b) me</div>
<button class="btn btn-primary" onclick="checkMC(this,'pc8_b')" style="margin-top:12px">Check Part B ✓</button>
</div></div>`,

`<div class="card"><h3>📖 Final Reading: "The Language Journey"</h3>
<div class="reading-passage">
<p>My name is Ana. Today, I want to tell you about my English learning journey — from zero to right now.</p>
<p>Two years ago, I was a complete beginner. I could say "hello" and "goodbye," but I couldn't hold a conversation. My vocabulary was very small and grammar was a mystery to me. I was nervous every time I heard English.</p>
<p>I started classes at this school in January. The first months were hard. I studied every day. I practiced with my classmates. My teacher was patient and encouraging. She helped me understand the grammar I didn't know. She helped me believe in myself.</p>
<p>Slowly, things got better. First, I understood more. Then I started speaking without translating in my head. I made mistakes — many mistakes! But I didn't stop. I kept going.</p>
<p>Now, two years later, I can express myself in English. I can write emails at work. I can watch movies without subtitles. I can travel and talk to people from around the world. I met lifelong friends in this class — Carlos, Yuki, Luis, and the teacher who changed our lives.</p>
<p>To the new students reading this: don't give up. The journey is long, but every step is worth it. You can do it. I know because I did it too.</p>
</div></div>
<div class="card"><h3>💭 Comprehension</h3>
<div class="opinion-q"><p><span class="qnum">1.</span> What was Ana's English like two years ago?</p><textarea placeholder="Two years ago, Ana was a beginner. She could only say... She couldn't..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">2.</span> How did things improve for her? Name at least 3 steps.</p><textarea placeholder="First she understood more. Then she started speaking... She also..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">3.</span> What can Ana do now that she couldn't do before?</p><textarea placeholder="Now she can write emails, watch movies without subtitles, and..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">4.</span> Find one example of EACH of these grammar structures in the text: Verb Be Past, Simple Past, Can/Can't, Object Pronoun.</p><textarea placeholder="Verb Be Past: I was a beginner... / Simple Past: I started classes... / Can: I can express myself... / Object pronoun: She helped me..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">5.</span> Write YOUR OWN English learning story. When did you start? What was hard? What can you do now?</p><textarea style="min-height:120px" placeholder="I started learning English [when]. At first, I was... I couldn't... Now I can... My goal is..."></textarea></div>
</div>`,

`<div class="card"><h3>🗣️ Final Speaking Check — Show What You Know!</h3>
<div class="tip">This is your final speaking evaluation for Level 02. Take your time and write thoughtful, complete answers.</div>
</div>
<div class="card"><h3>Part 1 — Grammar Review</h3>
<div class="opinion-q"><p><span class="qnum">1.</span> Describe yourself using: Verb Be, Possessives, Simple Present, Can, and Be Going To.</p><textarea style="min-height:130px" placeholder="My name is... I am from... My job/dream is... I can... I usually... I am going to..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">2.</span> Tell us about your past. Use was/were and Simple Past (irregular and regular).</p><textarea placeholder="When I was a child, I was... I lived in... I went to school at... Two years ago I started..."></textarea></div>
</div>
<div class="card"><h3>Part 2 — Final Speaking Task</h3>
<p>🎤 <strong>Ultimate Task:</strong> Write a 1-2 minute speech about your life: past, present, and future. Include information about:</p>
<ul>
<li>Where you are from and what you are like</li>
<li>Your daily routine (Simple Present)</li>
<li>Something you did recently (Simple Past)</li>
<li>What you can and can't do (Can)</li>
<li>Your future plans (Be Going To)</li>
</ul>
<div class="opinion-q"><p><span class="qnum">🎭 Write your speech here — then practice saying it aloud!</span></p><textarea style="min-height:200px" placeholder="My name is [name]. I am from [city, country]. I am [age] years old and I am a [student/job].&#10;&#10;In my daily life, I usually... I always... I sometimes...&#10;&#10;Recently, I did something interesting: I went/visited/met...&#10;&#10;In terms of abilities, I can... I can also... But I can't... yet.&#10;&#10;Looking to the future, I am going to... I am also going to... One day, I want to...&#10;&#10;Learning English has been challenging but rewarding. I am proud of how far I have come!"></textarea></div>
</div>`
];
""")
print('ALL DONE!')
