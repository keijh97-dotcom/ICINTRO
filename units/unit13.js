window.unit13 = [
    // --- GRAMMAR ---
    `<div class="card"><h3>🔤 Prepositions of Place for Locations</h3>
<p>We use <strong>prepositions</strong> to describe where places are in a city.</p>
<table class="grammar-table"><tr><th>Preposition</th><th>Meaning</th><th>Example</th></tr>
<tr><td>on</td><td>on a street</td><td>The bank is <em>on</em> Main Street.</td></tr>
<tr><td>on the corner of</td><td>where two streets meet</td><td>The café is <em>on the corner of</em> Oak and Elm.</td></tr>
<tr><td>across from</td><td>on the opposite side</td><td>The park is <em>across from</em> the school.</td></tr>
<tr><td>next to</td><td>beside</td><td>The pharmacy is <em>next to</em> the bank.</td></tr>
<tr><td>between</td><td>in the middle of two things</td><td>The store is <em>between</em> the bank and the café.</td></tr>
<tr><td>near</td><td>close to</td><td>The library is <em>near</em> the park.</td></tr></table>
</div>
<div class="card"><h3>🔤 Imperatives for Giving Directions</h3>
<p>We use the <strong>imperative</strong> to give someone directions to a place.</p>
<table class="grammar-table"><tr><th>Direction</th><th>Example</th></tr>
<tr><td>Go straight</td><td><em>Go straight</em> for two blocks.</td></tr>
<tr><td>Turn left</td><td><em>Turn left</em> on Oak Street.</td></tr>
<tr><td>Turn right</td><td><em>Turn right</em> at the traffic light.</td></tr>
<tr><td>Cross the street</td><td><em>Cross the street</em> at the crosswalk.</td></tr>
<tr><td>Walk two blocks</td><td><em>Walk</em> two blocks and turn right.</td></tr>
<tr><td>It's on your left/right</td><td>The bank is <em>on your left</em>.</td></tr></table>
<div class="example">How do I get to the bank? — <em>Go straight</em> two blocks, <em>turn left</em> on Main Street. The bank is <em>on your right</em>.</div>
<div class="example"><em>Cross</em> the street and <em>walk</em> one block. The supermarket is <em>next to</em> the pharmacy. You <em>can't miss it</em>!</div>
<div class="tip">"You can't miss it!" is a common expression meaning "It's easy to find!"</div>
</div>`,

    // --- VOCABULARY ---
    `<div class="card"><h3>📖 Places in a City</h3>
<div class="vocab-grid">
<div class="vocab-item"><span class="word">bank</span><span class="type">n.</span><div class="def">A place where you keep money.</div><div class="ex">"The bank is on Main Street."</div></div>
<div class="vocab-item"><span class="word">supermarket</span><span class="type">n.</span><div class="def">A large store selling food and household items.</div><div class="ex">"I need to go to the supermarket."</div></div>
<div class="vocab-item"><span class="word">pharmacy / drugstore</span><span class="type">n.</span><div class="def">A store where you buy medicine.</div><div class="ex">"The pharmacy is next to the bank."</div></div>
<div class="vocab-item"><span class="word">hospital</span><span class="type">n.</span><div class="def">A place where sick people are treated.</div><div class="ex">"The hospital is across from the park."</div></div>
<div class="vocab-item"><span class="word">park</span><span class="type">n.</span><div class="def">A public area with grass, trees, and benches.</div><div class="ex">"The park is near my house."</div></div>
<div class="vocab-item"><span class="word">library</span><span class="type">n.</span><div class="def">A place where you borrow books.</div><div class="ex">"The library is on Oak Street."</div></div>
<div class="vocab-item"><span class="word">post office</span><span class="type">n.</span><div class="def">A place where you send and receive mail.</div><div class="ex">"Where is the post office?"</div></div>
<div class="vocab-item"><span class="word">restaurant</span><span class="type">n.</span><div class="def">A place where you eat meals.</div><div class="ex">"There's a restaurant on the corner."</div></div>
<div class="vocab-item"><span class="word">gas station</span><span class="type">n.</span><div class="def">A place where you buy fuel for your car.</div><div class="ex">"The gas station is on your right."</div></div>
<div class="vocab-item"><span class="word">bus stop</span><span class="type">n.</span><div class="def">A place where you wait for the bus.</div><div class="ex">"The bus stop is across from the school."</div></div>
<div class="vocab-item"><span class="word">traffic light</span><span class="type">n.</span><div class="def">A signal that controls traffic (red, yellow, green).</div><div class="ex">"Turn right at the traffic light."</div></div>
<div class="vocab-item"><span class="word">block</span><span class="type">n.</span><div class="def">A section of street between intersections.</div><div class="ex">"Walk two blocks and turn left."</div></div>
</div></div>`,

    // --- EXERCISES ---
    `<div class="card"><h3>✏️ Exercise 1: Prepositions for Places</h3>
<div class="exercise" id="ex13_1">
<p>1. The bank is ________ Main Street. (location on a street) → <input type="text" data-answer="on" placeholder="preposition"></p>
<p>2. The pharmacy is ________ the bank. (beside) → <input type="text" data-answer="next to" placeholder="preposition"></p>
<p>3. The park is ________ the school. (opposite side) → <input type="text" data-answer="across from" placeholder="preposition"></p>
<p>4. The store is ________ the bank and the café. (in the middle) → <input type="text" data-answer="between" placeholder="preposition"></p>
<p>5. The library is ________ my house. (close to) → <input type="text" data-answer="near" placeholder="preposition"></p>
<button class="btn btn-primary" onclick="checkFill(this,'ex13_1')">Check Answers</button>
</div></div>
<div class="card"><h3>✏️ Exercise 2: Giving Directions</h3>
<div class="exercise" id="ex13_2">
<p><strong>1. ________ straight for two blocks.</strong></p>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">a) Go</div>
<div class="mc-option" onclick="selectMC(this)">b) Goes</div>
<div class="mc-option" onclick="selectMC(this)">c) Going</div>
<br>
<p><strong>2. ________ left on Oak Street.</strong></p>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">a) Turn</div>
<div class="mc-option" onclick="selectMC(this)">b) Turns</div>
<div class="mc-option" onclick="selectMC(this)">c) Turning</div>
<br>
<p><strong>3. ________ the street at the crosswalk.</strong></p>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">a) Cross</div>
<div class="mc-option" onclick="selectMC(this)">b) Crosses</div>
<div class="mc-option" onclick="selectMC(this)">c) Crossing</div>
<br>
<p><strong>4. The supermarket is __ your right.</strong></p>
<div class="mc-option" onclick="selectMC(this)">a) in</div>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">b) on</div>
<div class="mc-option" onclick="selectMC(this)">c) at</div>
<button class="btn btn-primary" onclick="checkMC(this,'ex13_2')" style="margin-top:12px">Check Answers</button>
</div></div>`,

    // --- CONVERSATION ---
    `<div class="card"><h3>💬 Conversation: How Do I Get There?</h3>
<div class="dialogue">
<div class="line"><span class="speaker">Pedro:</span><span class="text">Excuse me. How <em>do</em> you <em>get to</em> the nearest bank from here?</span></div>
<div class="line"><span class="speaker">Carlos:</span><span class="text">Sure! <em>Go straight</em> for two blocks. Then <em>turn left</em> on Main Street.</span></div>
<div class="line"><span class="speaker">Pedro:</span><span class="text">OK, go straight, turn left...</span></div>
<div class="line"><span class="speaker">Carlos:</span><span class="text"><em>Walk</em> one more block. The bank is <em>on your right</em>, <em>next to</em> the pharmacy.</span></div>
<div class="line"><span class="speaker">Pedro:</span><span class="text">Is it far from here?</span></div>
<div class="line"><span class="speaker">Carlos:</span><span class="text">No, it's only three blocks. You <em>can't miss it</em>!</span></div>
<div class="line"><span class="speaker">Pedro:</span><span class="text">Great! And <em>where</em> is the supermarket?</span></div>
<div class="line"><span class="speaker">Carlos:</span><span class="text">The supermarket is <em>across from</em> the bank. <em>Cross</em> the street and it's right there.</span></div>
<div class="line"><span class="speaker">Pedro:</span><span class="text">Thanks a lot, Carlos!</span></div>
</div>
<div class="tip">Use imperatives for directions: Go straight, Turn left/right, Cross the street, Walk two blocks.</div>
</div>`,

    // --- READING ---
    `<div class="card"><h3>📖 Reading: My Neighborhood</h3>
<div class="reading-passage">
<p>I live in a nice neighborhood in the city. There are many useful places near my house.</p>
<p>The supermarket is on Elm Street, two blocks from my house. Next to the supermarket, there's a pharmacy. I go there when I need medicine. Across from the supermarket, there's a small park. I go running there in the morning.</p>
<p>The bank is on Main Street, on the corner of Main and Oak. Next to the bank, there's a post office. Between the post office and the library, there's a café where I have coffee with friends.</p>
<p>If you want to go to the hospital from my house, go straight on Elm Street for three blocks, then turn right on Pine Street. Walk one more block, and the hospital is on your left. You can't miss it — it's a big white building.</p>
<p>There's also a bus stop near my house. It's across from the park, on Elm Street. I take the bus to school every day.</p>
</div></div>
<div class="card"><h3>💭 Comprehension Questions</h3>
<div class="opinion-q"><p><span class="qnum">1.</span> Where is the supermarket?</p><textarea placeholder="Write your answer here..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">2.</span> How do you get to the hospital from the author's house?</p><textarea placeholder="Write your answer here..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">3.</span> Give directions from your house to the nearest bank or store.</p><textarea placeholder="Write your answer here..."></textarea></div>
</div>`,

    // --- PRACTICE ---
    `<div class="card"><h3>🎯 Practice: Give Directions</h3>
<div class="exercise">
<p>1. How do you get to the nearest bank from here? Write the directions:</p><textarea style="width:100%;background:var(--bg2);border:1px solid var(--bg4);color:var(--text);padding:10px;border-radius:6px;font:14px var(--font);min-height:70px" placeholder="Example: Go straight for three blocks. Turn right on Main Street. The bank is on your left."></textarea>
<p>2. Imagine you are at the park. Give directions to a café:</p><textarea style="width:100%;background:var(--bg2);border:1px solid var(--bg4);color:var(--text);padding:10px;border-radius:6px;font:14px var(--font);min-height:70px" placeholder="Example: Cross the street. Walk one block. Turn left. The café is next to the library."></textarea>
</div></div>
<div class="card"><h3>🎯 Eliciting Questions</h3>
<ol style="padding-left:20px;color:var(--text2)">
<li>How <em>do you get to</em> the nearest bank from here?</li>
<li>Imagine you are at the park. Give me directions to a café.</li>
<li>If I want to go to the supermarket, <em>where should I go</em>?</li>
</ol>
<div class="exercise"><textarea style="width:100%;background:var(--bg2);border:1px solid var(--bg4);color:var(--text);padding:10px;border-radius:6px;font:14px var(--font);min-height:120px" placeholder="Write your directions here..."></textarea></div>
</div>`
];
