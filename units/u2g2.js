// Unit 2 — Grammar 2: Prepositions of Place
window.unit2g2 = [
// [0] Grammar Explanation
`<div class="card"><h3>📍 Prepositions of Place — In, On, Under, Next to, Behind...</h3>
<p><strong>Prepositions</strong> are small words that tell us WHERE something is. We use them to describe the location or position of an object. They always come before a noun or pronoun.</p>
<h4>📌 Common Prepositions of Place</h4>
<table class="grammar-table"><tr><th>Preposition</th><th>Meaning</th><th>Example</th></tr>
<tr><td><strong>in</strong></td><td>inside something / enclosed space</td><td>The pen is <em>in</em> the bag.</td></tr>
<tr><td><strong>on</strong></td><td>touching a surface (top of)</td><td>The book is <em>on</em> the desk.</td></tr>
<tr><td><strong>under</strong></td><td>below something</td><td>The bag is <em>under</em> the chair.</td></tr>
<tr><td><strong>next to</strong></td><td>beside / at the side of</td><td>The eraser is <em>next to</em> the pencil.</td></tr>
<tr><td><strong>behind</strong></td><td>at the back of</td><td>The board is <em>behind</em> the teacher.</td></tr>
<tr><td><strong>in front of</strong></td><td>before, facing something</td><td>Ana sits <em>in front of</em> Carlos.</td></tr>
<tr><td><strong>between</strong></td><td>in the middle of two things</td><td>The pencil is <em>between</em> the books.</td></tr>
<tr><td><strong>near</strong></td><td>close to, not far from</td><td>The school is <em>near</em> the park.</td></tr></table>
<h4>📋 Sentence Structure: Where is/are + noun?</h4>
<p>To ask about location, we use: <strong>Where is + [thing]?</strong> or <strong>Where are + [things]?</strong></p>
<div class="example">Where is the pencil? — It's <em>on</em> the desk.<span class="trans">We ask "where is" for one thing.</span></div>
<div class="example">Where are the books? — They're <em>in</em> the bag.<span class="trans">We ask "where are" for more than one thing.</span></div>
<h4>⚠️ Common Mistakes</h4>
<div class="example">✅ The pen is <em>on</em> the table. / ❌ The pen is <em>in</em> the table.<span class="trans">"In" = inside/enclosed. "On" = surface. A pen rests ON a table surface, not inside it.</span></div>
<div class="example">✅ She is <em>in</em> the classroom. / ❌ She is <em>on</em> the classroom.<span class="trans">A classroom is an enclosed space, so we use "in."</span></div></div>`,

// [1] Practice & Exercises
`<div class="card"><h3>✏️ Exercise 1 — Fill in with "in," "on," or "under"</h3>
<div class="exercise" id="u2g2_ex1">
<p>1. The cat is ________ the box. (inside) <input type="text" data-answer="in" placeholder="in/on/under"></p>
<p>2. The book is ________ the desk. (on the surface) <input type="text" data-answer="on" placeholder="in/on/under"></p>
<p>3. My bag is ________ the chair. (below) <input type="text" data-answer="under" placeholder="in/on/under"></p>
<p>4. She is ________ the classroom. (enclosed space) <input type="text" data-answer="in" placeholder="in/on/under"></p>
<p>5. The pencil is ________ the table. (surface) <input type="text" data-answer="on" placeholder="in/on/under"></p>
<p>6. The dog is ________ the bed. (below) <input type="text" data-answer="under" placeholder="in/on/under"></p>
<button class="btn btn-primary" onclick="checkFill(this,'u2g2_ex1')">Check Answers ✓</button>
</div></div>
<div class="card"><h3>✏️ Exercise 2 — Choose the Correct Preposition</h3>
<div class="exercise" id="u2g2_ex2">
<p><strong>1. The student sits ________ the teacher.</strong> (the teacher is at the front)</p>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">a) in front of</div>
<div class="mc-option" onclick="selectMC(this)">b) behind</div>
<div class="mc-option" onclick="selectMC(this)">c) under</div>
<br>
<p><strong>2. The library is ________ the school and the park.</strong></p>
<div class="mc-option" onclick="selectMC(this)">a) near</div>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">b) between</div>
<div class="mc-option" onclick="selectMC(this)">c) on</div>
<br>
<p><strong>3. My pencil case is ________ my bag.</strong> (inside)</p>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">a) in</div>
<div class="mc-option" onclick="selectMC(this)">b) on</div>
<div class="mc-option" onclick="selectMC(this)">c) next to</div>
<button class="btn btn-primary" onclick="checkMC(this,'u2g2_ex2')" style="margin-top:12px">Check Answers ✓</button>
</div></div>`,


// [2] Reading
`<div class="card"><h3>📖 Reading: "My Classroom"</h3>
<div class="reading-passage">
<p>My classroom is on the third floor. When I walk in, the teacher's desk is in front of the whiteboard. The whiteboard is big and white.</p>
<p>My desk is in the middle of the room. I sit between my friends Rosa and Tomás. Rosa sits on my left and Tomás sits on my right.</p>
<p>There is a big window behind my seat. The window is next to a shelf. The shelf has many books on it. The books are for the whole class.</p>
<p>The door is near the teacher's desk. There is a clock on the wall, above the door. It is important to watch the clock in class!</p>
<p>I love my classroom. It is clean and comfortable. Everything is in the right place.</p>
</div></div>
<div class="card"><h3>💭 Comprehension</h3>
<div class="opinion-q"><p><span class="qnum">1.</span> Where is the teacher's desk?</p><textarea placeholder="Write your answer here..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">2.</span> Who does the writer sit between?</p><textarea placeholder="Write your answer here..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">3.</span> What is next to the window?</p><textarea placeholder="Write your answer here..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">4.</span> Describe YOUR classroom using at least 4 prepositions of place.</p><textarea placeholder="Write your answer here..."></textarea></div>
</div>`,

// [3] Conversation
`<div class="card"><h3>💬 Conversation: "Where is my pen?"</h3>
<div class="dialogue">
<div class="line"><span class="speaker">Ana:</span><span class="text">Carlos, where is my pen? I can't find it!</span></div>
<div class="line"><span class="speaker">Carlos:</span><span class="text">Is it <em>on</em> your desk?</span></div>
<div class="line"><span class="speaker">Ana:</span><span class="text">No, it's not there. Is it <em>in</em> your bag?</span></div>
<div class="line"><span class="speaker">Carlos:</span><span class="text">Let me check... No, it's not <em>in</em> my bag. Look <em>under</em> your book!</span></div>
<div class="line"><span class="speaker">Ana:</span><span class="text">Oh! It's <em>under</em> my notebook! Thank you!</span></div>
<div class="line"><span class="speaker">Carlos:</span><span class="text">Ha! And look — your eraser is <em>next to</em> the door!</span></div>
<div class="line"><span class="speaker">Ana:</span><span class="text">What? How did it get there?! It was <em>between</em> my books this morning!</span></div>
</div>
<div class="tip">Practice describing where things are in your room or classroom. Look around and say: "My phone is on the desk. My bag is under the chair." This helps make prepositions natural!</div>
</div>
<div class="card"><h3>🎯 Writing Practice — Where Are Things?</h3>
<div class="opinion-q"><p><span class="qnum">1.</span> Describe where 5 objects are right now (in your classroom or room).</p><textarea placeholder="Write your answer here..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">2.</span> Describe where YOU are right now in your school or home. Use at least 3 prepositions.</p><textarea placeholder="Write your answer here..."></textarea></div>
</div>`
];
