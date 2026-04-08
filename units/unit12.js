window.unit12 = [
    // --- GRAMMAR ---
    `<div class="card"><h3>🔤 The Verb "Have" — Possession & Illness</h3>
<p>We use <strong>have/has</strong> to talk about <strong>possession</strong> and <strong>health problems</strong>.</p>
<h4>For Possession</h4>
<div class="example">I <em>have</em> a car.<span class="trans">I/you/we/they + have</span></div>
<div class="example">She <em>has</em> a dog.<span class="trans">He/she/it + has</span></div>
<h4>For Health Problems</h4>
<table class="grammar-table"><tr><th>Problem</th><th>Example</th></tr>
<tr><td>a headache</td><td>I <em>have a headache</em>.</td></tr>
<tr><td>a stomachache</td><td>She <em>has a stomachache</em>.</td></tr>
<tr><td>a cold</td><td>He <em>has a cold</em>.</td></tr>
<tr><td>a fever</td><td>The baby <em>has a fever</em>.</td></tr>
<tr><td>a sore throat</td><td>I <em>have a sore throat</em>.</td></tr>
<tr><td>a toothache</td><td>She <em>has a toothache</em>.</td></tr>
<tr><td>a backache</td><td>He <em>has a backache</em>.</td></tr>
<tr><td>the flu</td><td>They <em>have the flu</em>.</td></tr></table>
</div>
<div class="card"><h3>🔤 The Imperative — Giving Advice</h3>
<p>We use the <strong>imperative</strong> to give <strong>advice, instructions, and commands</strong>.</p>
<table class="grammar-table"><tr><th>Affirmative</th><th>Negative</th></tr>
<tr><td><em>Take</em> some medicine.</td><td><em>Don't</em> go to work.</td></tr>
<tr><td><em>Drink</em> hot tea.</td><td><em>Don't</em> eat cold food.</td></tr>
<tr><td><em>Rest</em> at home.</td><td><em>Don't</em> exercise today.</td></tr>
<tr><td><em>See</em> a doctor.</td><td><em>Don't</em> worry.</td></tr></table>
<div class="example"><em>Take some medicine</em> and <em>rest</em> at home.<span class="trans">Imperative = base verb (no subject).</span></div>
<div class="example"><em>Don't</em> go to school today. <em>Stay</em> in bed.<span class="trans">Negative imperative = Don't + base verb.</span></div>
<div class="tip">The imperative uses the base form of the verb. There is NO subject (no "you"). It's direct: "Take medicine." "Don't worry."</div>
</div>`,

    // --- VOCABULARY ---
    `<div class="card"><h3>📖 Health & Body</h3>
<div class="vocab-grid">
<div class="vocab-item"><span class="word">headache</span><span class="type">n.</span><div class="def">Pain in the head.</div><div class="ex">"I have a headache."</div></div>
<div class="vocab-item"><span class="word">stomachache</span><span class="type">n.</span><div class="def">Pain in the stomach.</div><div class="ex">"She has a stomachache."</div></div>
<div class="vocab-item"><span class="word">cold</span><span class="type">n.</span><div class="def">A common illness with sneezing and runny nose.</div><div class="ex">"He has a cold."</div></div>
<div class="vocab-item"><span class="word">fever</span><span class="type">n.</span><div class="def">A high body temperature (illness).</div><div class="ex">"The baby has a fever."</div></div>
<div class="vocab-item"><span class="word">sore throat</span><span class="type">n.</span><div class="def">Pain in the throat area.</div><div class="ex">"I have a sore throat."</div></div>
<div class="vocab-item"><span class="word">toothache</span><span class="type">n.</span><div class="def">Pain in a tooth.</div><div class="ex">"She has a toothache."</div></div>
<div class="vocab-item"><span class="word">backache</span><span class="type">n.</span><div class="def">Pain in the back.</div><div class="ex">"He has a backache."</div></div>
<div class="vocab-item"><span class="word">flu</span><span class="type">n.</span><div class="def">A viral illness with fever, body aches, and tiredness.</div><div class="ex">"I have the flu."</div></div>
<div class="vocab-item"><span class="word">medicine</span><span class="type">n.</span><div class="def">A substance used to treat illness.</div><div class="ex">"Take some medicine."</div></div>
<div class="vocab-item"><span class="word">doctor</span><span class="type">n.</span><div class="def">A medical professional.</div><div class="ex">"See a doctor if you feel bad."</div></div>
<div class="vocab-item"><span class="word">rest</span><span class="type">v./n.</span><div class="def">To relax and stop activity.</div><div class="ex">"You need to rest."</div></div>
<div class="vocab-item"><span class="word">stressed</span><span class="type">adj.</span><div class="def">Feeling worried and tense.</div><div class="ex">"I feel stressed about the exam."</div></div>
<div class="vocab-item"><span class="word">tired</span><span class="type">adj.</span><div class="def">Needing rest or sleep.</div><div class="ex">"She's very tired."</div></div>
</div></div>`,

    // --- EXERCISES ---
    `<div class="card"><h3>✏️ Exercise 1: What's the Matter?</h3>
<p>Match the problem with the advice.</p>
<div class="exercise" id="ex12_1">
<p>1. I have a headache. → <input type="text" data-answer="Take some medicine" placeholder="advice"></p>
<p>2. She has a cold. → <input type="text" data-answer="Drink hot tea" placeholder="advice"></p>
<p>3. He has a fever. → <input type="text" data-answer="See a doctor" placeholder="advice"></p>
<p>4. I have a toothache. → <input type="text" data-answer="Go to the dentist" placeholder="advice"></p>
<p>5. She's stressed. → <input type="text" data-answer="Rest at home|Take a break" placeholder="advice"></p>
<button class="btn btn-primary" onclick="checkFill(this,'ex12_1')">Check Answers</button>
</div></div>
<div class="card"><h3>✏️ Exercise 2: Have or Has?</h3>
<div class="exercise" id="ex12_2">
<p><strong>1. I ________ a headache.</strong></p>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">a) have</div>
<div class="mc-option" onclick="selectMC(this)">b) has</div>
<br>
<p><strong>2. She ________ a cold.</strong></p>
<div class="mc-option" onclick="selectMC(this)">a) have</div>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">b) has</div>
<br>
<p><strong>3. They ________ the flu.</strong></p>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">a) have</div>
<div class="mc-option" onclick="selectMC(this)">b) has</div>
<br>
<p><strong>4. Which is correct advice?</strong></p>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">a) Take some medicine.</div>
<div class="mc-option" onclick="selectMC(this)">b) You take some medicine.</div>
<div class="mc-option" onclick="selectMC(this)">c) Takes some medicine.</div>
<button class="btn btn-primary" onclick="checkMC(this,'ex12_2')" style="margin-top:12px">Check Answers</button>
</div></div>`,

    // --- CONVERSATION ---
    `<div class="card"><h3>💬 Conversation: At the Doctor's Office</h3>
<div class="dialogue">
<div class="line"><span class="speaker">Doctor:</span><span class="text">Good morning. <em>What's the matter</em>?</span></div>
<div class="line"><span class="speaker">Ana:</span><span class="text">I <em>have a</em> sore throat and I <em>have a</em> headache.</span></div>
<div class="line"><span class="speaker">Doctor:</span><span class="text">Do you <em>have a</em> fever?</span></div>
<div class="line"><span class="speaker">Ana:</span><span class="text">Yes, I think so. I feel very hot.</span></div>
<div class="line"><span class="speaker">Doctor:</span><span class="text">You <em>have</em> the flu. <em>Take</em> this medicine two times a day.</span></div>
<div class="line"><span class="speaker">Ana:</span><span class="text">OK. What else should I do?</span></div>
<div class="line"><span class="speaker">Doctor:</span><span class="text"><em>Drink</em> a lot of water and hot tea. <em>Rest</em> at home for two days. <em>Don't</em> go to school.</span></div>
<div class="line"><span class="speaker">Ana:</span><span class="text">Should I eat anything special?</span></div>
<div class="line"><span class="speaker">Doctor:</span><span class="text"><em>Eat</em> chicken soup. <em>Don't</em> eat cold food. And <em>don't</em> worry — you'll feel better soon!</span></div>
</div>
<div class="tip">"What's the matter?" = "What's wrong?" Use "have/has" for health problems and the imperative for advice.</div>
</div>`,

    // --- READING ---
    `<div class="card"><h3>📖 Reading: Staying Healthy</h3>
<div class="reading-passage">
<p>Everyone gets sick sometimes. Here are some common health problems and what you can do.</p>
<p>If you have a cold, drink hot tea with honey and lemon. Rest at home and don't go to work or school. Take some cold medicine and drink a lot of water. You'll feel better in a few days.</p>
<p>If you have a headache, take some aspirin. Rest in a quiet, dark room. Don't look at your phone or computer screen. Drink water — sometimes headaches come from not drinking enough water.</p>
<p>If you have a fever, see a doctor. Take the medicine the doctor gives you. Rest in bed and drink lots of fluids. Don't exercise or go outside in cold weather.</p>
<p>If you feel stressed, take a break from work. Go for a walk, listen to music, or talk to a friend. Exercise is good for stress too. Don't drink too much coffee — it can make stress worse.</p>
<p>The best advice for staying healthy? Eat good food, drink plenty of water, exercise regularly, and get enough sleep!</p>
</div></div>
<div class="card"><h3>💭 Comprehension Questions</h3>
<div class="opinion-q"><p><span class="qnum">1.</span> What should you do if you have a cold?</p><textarea placeholder="Write your answer here..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">2.</span> If someone has a fever, what should they do?</p><textarea placeholder="Write your answer here..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">3.</span> If you feel stressed, what do YOU do?</p><textarea placeholder="Write your answer here..."></textarea></div>
</div>`,

    // --- PRACTICE ---
    `<div class="card"><h3>🎯 Practice: Give Advice</h3>
<div class="exercise">
<p>1. Your friend has a headache. What do you say?</p><textarea style="width:100%;background:var(--bg2);border:1px solid var(--bg4);color:var(--text);padding:10px;border-radius:6px;font:14px var(--font);min-height:50px" placeholder="Example: Take some aspirin and rest."></textarea>
<p>2. Your classmate has a cold. Give three pieces of advice:</p><textarea style="width:100%;background:var(--bg2);border:1px solid var(--bg4);color:var(--text);padding:10px;border-radius:6px;font:14px var(--font);min-height:50px" placeholder="Example: Drink hot tea. Take medicine. Don't go to school."></textarea>
<p>3. What do you do when you feel stressed?</p><textarea style="width:100%;background:var(--bg2);border:1px solid var(--bg4);color:var(--text);padding:10px;border-radius:6px;font:14px var(--font);min-height:50px" placeholder="Example: I listen to music and go for a walk."></textarea>
</div></div>
<div class="card"><h3>🎯 Eliciting Questions</h3>
<ol style="padding-left:20px;color:var(--text2)">
<li><em>What's the matter</em> with you today? Do you <em>have a</em> headache or a cold?</li>
<li>If someone <em>has a</em> fever, <em>what should they do</em>? (e.g., "Take some medicine.")</li>
<li>If you feel stressed, <em>what do you do</em>?</li>
</ol>
<div class="exercise"><textarea style="width:100%;background:var(--bg2);border:1px solid var(--bg4);color:var(--text);padding:10px;border-radius:6px;font:14px var(--font);min-height:120px" placeholder="Write your answers here..."></textarea></div>
</div>`
];
