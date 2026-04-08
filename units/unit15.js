window.unit15 = [
    // --- GRAMMAR ---
    `<div class="card"><h3>🔤 Simple Past of "Be" — Was / Were</h3>
<p>We use <strong>was</strong> and <strong>were</strong> to talk about the past.</p>
<table class="grammar-table"><tr><th>Subject</th><th>Affirmative</th><th>Negative</th></tr>
<tr><td>I / He / She / It</td><td><em>was</em></td><td><em>wasn't</em> (was not)</td></tr>
<tr><td>You / We / They</td><td><em>were</em></td><td><em>weren't</em> (were not)</td></tr></table>
<h4>Examples</h4>
<div class="example">I <em>was</em> born in Caracas.<span class="trans">Past fact about yourself.</span></div>
<div class="example">She <em>was</em> a student in 2015.</div>
<div class="example">They <em>were</em> at the party last night.</div>
<div class="example">The movie <em>wasn't</em> very good.</div>
<h4>Questions & Short Answers</h4>
<table class="grammar-table"><tr><th>Question</th><th>Yes</th><th>No</th></tr>
<tr><td><em>Were</em> you at the party?</td><td>Yes, I <em>was</em>.</td><td>No, I <em>wasn't</em>.</td></tr>
<tr><td><em>Was</em> it fun?</td><td>Yes, it <em>was</em>.</td><td>No, it <em>wasn't</em>.</td></tr>
<tr><td><em>Where were</em> you born?</td><td>I was born in Lima.</td><td></td></tr>
<tr><td><em>What was</em> it like?</td><td>It was great!</td><td></td></tr></table>
</div>
<div class="card"><h3>🔤 Past Time Expressions</h3>
<table class="grammar-table"><tr><th>Expression</th><th>Example</th></tr>
<tr><td>yesterday</td><td>I was at school yesterday.</td></tr>
<tr><td>last week / month / year</td><td>She was in New York last year.</td></tr>
<tr><td>in 2020</td><td>He was born in 2020.</td></tr>
<tr><td>… ago</td><td>They were here two days ago.</td></tr>
<tr><td>when I was a child</td><td>When I was a child, I was shy.</td></tr></table>
<div class="tip">"Was" is for I/he/she/it. "Were" is for you/we/they. This is the past of "am/is/are."</div>
</div>`,

    // --- VOCABULARY ---
    `<div class="card"><h3>📖 Describing the Past</h3>
<div class="vocab-grid">
<div class="vocab-item"><span class="word">born</span><span class="type">adj.</span><div class="def">Brought into life.</div><div class="ex">"I was born in 1990."</div></div>
<div class="vocab-item"><span class="word">grew up</span><span class="type">phr.v.</span><div class="def">Became an adult in a place.</div><div class="ex">"She grew up in a small town."</div></div>
<div class="vocab-item"><span class="word">childhood</span><span class="type">n.</span><div class="def">The time when you were a child.</div><div class="ex">"My childhood was happy."</div></div>
<div class="vocab-item"><span class="word">shy</span><span class="type">adj.</span><div class="def">Quiet and nervous around people.</div><div class="ex">"I was shy when I was a child."</div></div>
<div class="vocab-item"><span class="word">outgoing</span><span class="type">adj.</span><div class="def">Friendly and sociable.</div><div class="ex">"She was very outgoing as a child."</div></div>
<div class="vocab-item"><span class="word">naughty</span><span class="type">adj.</span><div class="def">Badly behaved (for children).</div><div class="ex">"He was a naughty boy."</div></div>
<div class="vocab-item"><span class="word">quiet</span><span class="type">adj.</span><div class="def">Making little noise; calm.</div><div class="ex">"She was a quiet student."</div></div>
<div class="vocab-item"><span class="word">tall / short</span><span class="type">adj.</span><div class="def">Height descriptions.</div><div class="ex">"I was short when I was ten."</div></div>
<div class="vocab-item"><span class="word">scared (of)</span><span class="type">adj.</span><div class="def">Afraid of something.</div><div class="ex">"I was scared of the dark."</div></div>
<div class="vocab-item"><span class="word">interested (in)</span><span class="type">adj.</span><div class="def">Wanting to learn about something.</div><div class="ex">"He was interested in science."</div></div>
<div class="vocab-item"><span class="word">different</span><span class="type">adj.</span><div class="def">Not the same.</div><div class="ex">"Life was very different then."</div></div>
<div class="vocab-item"><span class="word">about</span><span class="type">prep.</span><div class="def">Concerning or regarding.</div><div class="ex">"Tell me about your childhood."</div></div>
</div></div>`,

    // --- EXERCISES ---
    `<div class="card"><h3>✏️ Exercise 1: Was or Were?</h3>
<div class="exercise" id="ex15_1">
<p>1. I ________ born in Caracas. → <input type="text" data-answer="was" placeholder="was/were"></p>
<p>2. They ________ at the party last night. → <input type="text" data-answer="were" placeholder="was/were"></p>
<p>3. She ________ a quiet child. → <input type="text" data-answer="was" placeholder="was/were"></p>
<p>4. We ________ not at school yesterday. → <input type="text" data-answer="were" placeholder="was/were"></p>
<p>5. He ________ shy when he was young. → <input type="text" data-answer="was" placeholder="was/were"></p>
<p>6. ________ you scared of the dark as a child? → <input type="text" data-answer="Were" placeholder="was/were"></p>
<button class="btn btn-primary" onclick="checkFill(this,'ex15_1')">Check Answers</button>
</div></div>
<div class="card"><h3>✏️ Exercise 2: Past Questions</h3>
<div class="exercise" id="ex15_2">
<p><strong>1. ________ were you born?</strong></p>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">a) Where</div>
<div class="mc-option" onclick="selectMC(this)">b) What</div>
<div class="mc-option" onclick="selectMC(this)">c) Who</div>
<br>
<p><strong>2. ________ it a good movie?</strong></p>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">a) Was</div>
<div class="mc-option" onclick="selectMC(this)">b) Were</div>
<div class="mc-option" onclick="selectMC(this)">c) Did</div>
<br>
<p><strong>3. ________ your parents at home last night?</strong></p>
<div class="mc-option" onclick="selectMC(this)">a) Was</div>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">b) Were</div>
<div class="mc-option" onclick="selectMC(this)">c) Did</div>
<br>
<p><strong>4. I ________ born in Bogotá, but I grew ________ in Medellín.</strong></p>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">a) was / up</div>
<div class="mc-option" onclick="selectMC(this)">b) were / up</div>
<div class="mc-option" onclick="selectMC(this)">c) was / in</div>
<button class="btn btn-primary" onclick="checkMC(this,'ex15_2')" style="margin-top:12px">Check Answers</button>
</div></div>`,

    // --- CONVERSATION ---
    `<div class="card"><h3>💬 Conversation: Where Were You Born?</h3>
<div class="dialogue">
<div class="line"><span class="speaker">Yuki:</span><span class="text">Pedro, <em>where were you born</em>?</span></div>
<div class="line"><span class="speaker">Pedro:</span><span class="text">I <em>was born</em> in Lima, Peru. But I grew up in Cusco.</span></div>
<div class="line"><span class="speaker">Yuki:</span><span class="text">Oh, nice! <em>What was</em> your childhood <em>like</em>?</span></div>
<div class="line"><span class="speaker">Pedro:</span><span class="text">It <em>was</em> great! I <em>was</em> a very outgoing child. I played with my friends every day.</span></div>
<div class="line"><span class="speaker">Yuki:</span><span class="text"><em>Were</em> you a good student?</span></div>
<div class="line"><span class="speaker">Pedro:</span><span class="text">Not really! I <em>was</em> a little naughty. I <em>wasn't</em> interested in school — I <em>was</em> interested in music!</span></div>
<div class="line"><span class="speaker">Yuki:</span><span class="text"><em>What were</em> you <em>scared of</em> as a child?</span></div>
<div class="line"><span class="speaker">Pedro:</span><span class="text">I <em>was scared of</em> dogs! But now I love them. What about you, Yuki?</span></div>
<div class="line"><span class="speaker">Yuki:</span><span class="text">I <em>was born</em> in Tokyo. I <em>was</em> a quiet and shy child. I <em>was</em> very different from now!</span></div>
</div>
<div class="tip">"Where were you born?" asks about your birthplace. "What was it like?" asks for a description of an experience.</div>
</div>`,

    // --- READING ---
    `<div class="card"><h3>📖 Reading: Life Was Different</h3>
<div class="reading-passage">
<p>My grandmother always says, "Life was very different when I was young." And she's right!</p>
<p>My grandmother was born in 1955 in a small town. There were no smartphones or computers. There wasn't any internet. People weren't always on social media — they talked to each other face to face!</p>
<p>When she was a child, she was very active. She played outside every day. There wasn't a TV in her house until she was ten years old! Children were always outside — they weren't in front of screens.</p>
<p>School was different too. There were no computers in the classroom. Students wrote with pencils and paper. The teachers were very strict. My grandmother was a quiet, good student — she wasn't naughty at all.</p>
<p>Life was simpler then. There weren't many cars — people walked or rode bicycles. Food was from the farm, not from the supermarket. My grandmother says she was happy with simple things.</p>
<p>Today, life is very different. We have phones, the internet, and social media. But my grandmother says, "The most important things aren't different. Family, friends, and love — they were important then, and they're important now."</p>
</div></div>
<div class="card"><h3>💭 Questions</h3>
<div class="opinion-q"><p><span class="qnum">1.</span> When was the grandmother born? Where?</p><textarea placeholder="Write your answer here..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">2.</span> Was there internet when she was young?</p><textarea placeholder="Write your answer here..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">3.</span> Where were YOU born? What was your childhood like?</p><textarea placeholder="Write your answer here..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">4.</span> Were you shy or outgoing as a child? Were you a good student?</p><textarea placeholder="Write your answer here..."></textarea></div>
</div>`,

    // --- PRACTICE ---
    `<div class="card"><h3>🎯 Practice: Talk About Your Past</h3>
<div class="exercise">
<p>1. Where were you born? Where did you grow up?</p><textarea style="width:100%;background:var(--bg2);border:1px solid var(--bg4);color:var(--text);padding:10px;border-radius:6px;font:14px var(--font);min-height:50px" placeholder="Example: I was born in Maracaibo. I grew up in a small neighborhood."></textarea>
<p>2. What was your childhood like? Were you shy or outgoing?</p><textarea style="width:100%;background:var(--bg2);border:1px solid var(--bg4);color:var(--text);padding:10px;border-radius:6px;font:14px var(--font);min-height:50px" placeholder="Example: My childhood was happy. I was an outgoing child."></textarea>
<p>3. What were you scared of as a child?</p><textarea style="width:100%;background:var(--bg2);border:1px solid var(--bg4);color:var(--text);padding:10px;border-radius:6px;font:14px var(--font);min-height:50px" placeholder="Example: I was scared of spiders!"></textarea>
</div></div>
<div class="card"><h3>🎯 Eliciting Questions</h3>
<ol style="padding-left:20px;color:var(--text2)">
<li><em>Where were you born</em>? Where <em>did</em> you <em>grow up</em>?</li>
<li><em>What was</em> your childhood <em>like</em>? <em>Were</em> you shy or outgoing?</li>
<li><em>What were</em> you <em>scared of</em> as a child?</li>
</ol>
<div class="exercise"><textarea style="width:100%;background:var(--bg2);border:1px solid var(--bg4);color:var(--text);padding:10px;border-radius:6px;font:14px var(--font);min-height:120px" placeholder="Write your answers here..."></textarea></div>
</div>`
];
