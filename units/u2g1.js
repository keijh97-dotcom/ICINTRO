// Unit 2 — Grammar 1: Articles (a, an, the)
window.unit2g1 = [
// [0] Grammar Explanation
`<div class="card"><h3>🔤 Articles — "A," "An," and "The"</h3>
<p>An <strong>article</strong> is a small word we put before a noun. In English there are three articles: <strong>a</strong>, <strong>an</strong>, and <strong>the</strong>. They help us know if we are talking about something general or something specific.</p>
<h4>📌 "A" and "An" — Indefinite Articles</h4>
<p>We use <strong>a</strong> or <strong>an</strong> when we talk about something for the <strong>first time</strong> or when it is <strong>one of many</strong> (not specific).</p>
<table class="grammar-table"><tr><th>Article</th><th>When to use it</th><th>Examples</th></tr>
<tr><td><strong>a</strong></td><td>Before words that start with a <strong>consonant sound</strong> (b, c, d, f, g, h...)</td><td>a <em>book</em>, a <em>pencil</em>, a <em>car</em>, a <em>university</em>*</td></tr>
<tr><td><strong>an</strong></td><td>Before words that start with a <strong>vowel sound</strong> (a, e, i, o, u)</td><td>an <em>apple</em>, an <em>egg</em>, an <em>umbrella</em>, an <em>hour</em>*</td></tr></table>
<div class="tip">⚠️ It's about the SOUND, not the letter! "A university" — "university" starts with "u" but sounds like "yoo," which is a consonant sound. "An hour" — "hour" starts with "h" but the "h" is silent, so it sounds like "our" (vowel sound).</div>
<div class="example">This is <em>a</em> pen. → "pen" starts with the consonant P. <span class="trans">It is one pen, not a specific pen.</span></div>
<div class="example">It's <em>an</em> eraser. → "eraser" starts with the vowel E.<span class="trans">It is one eraser, not a specific one.</span></div>
<h4>📌 "The" — Definite Article</h4>
<p>We use <strong>the</strong> when we talk about a <strong>specific</strong> thing that both the speaker and listener know about.</p>
<div class="example">This is <em>a</em> book. The book is blue. <span class="trans">First mention: "a book" (new). Second mention: "the book" (now both of us know which book).</span></div>
<div class="example">Please close <em>the</em> door. <span class="trans">There is only one door — we both know which door.</span></div>
<h4>📌 No Article — Common Patterns</h4>
<p>We do NOT use articles before <strong>proper nouns</strong> (names of specific people, countries, cities).</p>
<div class="example">She is from <em>Mexico</em>. (NOT "the Mexico") / His name is <em>Carlos</em>. (NOT "the Carlos")</div></div>`,

// [1] Practice & Exercises
`<div class="card"><h3>✏️ Exercise 1 — "A" or "An"?</h3>
<p>Write "a" or "an" before each word. Remember: listen to the SOUND, not just the letter!</p>
<div class="exercise" id="u2g1_ex1">
<p>1. ________ orange <input type="text" data-answer="an" placeholder="a/an"></p>
<p>2. ________ book <input type="text" data-answer="a" placeholder="a/an"></p>
<p>3. ________ umbrella <input type="text" data-answer="an" placeholder="a/an"></p>
<p>4. ________ eraser <input type="text" data-answer="an" placeholder="a/an"></p>
<p>5. ________ university <input type="text" data-answer="a" placeholder="a/an"></p>
<p>6. ________ hour <input type="text" data-answer="an" placeholder="a/an"></p>
<p>7. ________ desk <input type="text" data-answer="a" placeholder="a/an"></p>
<p>8. ________ apple <input type="text" data-answer="an" placeholder="a/an"></p>
<button class="btn btn-primary" onclick="checkFill(this,'u2g1_ex1')">Check Answers ✓</button>
</div></div>
<div class="card"><h3>✏️ Exercise 2 — "A," "An," or "The"?</h3>
<div class="exercise" id="u2g1_ex2">
<p>1. I see ________ cat in the street. <input type="text" data-answer="a" placeholder="a/an/the"></p>
<p>2. ________ cat is black and white. <input type="text" data-answer="the" placeholder="a/an/the"></p>
<p>3. She has ________ interesting book. <input type="text" data-answer="an" placeholder="a/an/the"></p>
<p>4. Can you close ________ window, please? <input type="text" data-answer="the" placeholder="a/an/the"></p>
<p>5. He is ________ English teacher. <input type="text" data-answer="an" placeholder="a/an/the"></p>
<p>6. ________ teacher is very kind today. <input type="text" data-answer="the" placeholder="a/an/the"></p>
<button class="btn btn-primary" onclick="checkFill(this,'u2g1_ex2')">Check Answers ✓</button>
</div></div>
<div class="card"><h3>✏️ Exercise 3 — Quiz: Articles</h3>
<div class="exercise" id="u2g1_ex3">
<p><strong>1. "What's this?" "It's ________ eraser."</strong></p>
<div class="mc-option" onclick="selectMC(this)">a) a</div>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">b) an</div>
<div class="mc-option" onclick="selectMC(this)">c) the</div>
<br>
<p><strong>2. "Where is ________ bathroom?" (talking about a specific bathroom in the building)</strong></p>
<div class="mc-option" onclick="selectMC(this)">a) a</div>
<div class="mc-option" onclick="selectMC(this)">b) an</div>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">c) the</div>
<br>
<p><strong>3. "She is ________ honest person."</strong></p>
<div class="mc-option" onclick="selectMC(this)">a) a</div>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">b) an</div>
<div class="mc-option" onclick="selectMC(this)">c) the</div>
<button class="btn btn-primary" onclick="checkMC(this,'u2g1_ex3')" style="margin-top:12px">Check Answers ✓</button>
</div></div>`,


// [2] Reading
`<div class="card"><h3>📖 Reading: "In My Bag"</h3>
<div class="reading-passage">
<p>My name is Kevin. I am a student. Every day I bring many things to class in my backpack.</p>
<p>I have a notebook. The notebook is green. I also have a pencil and an eraser. The eraser is small and white.</p>
<p>There is a calculator in my bag. The calculator is for math class. I also have an umbrella. It is a rainy season here!</p>
<p>My favorite item is a book about animals. The book has beautiful pictures. I read it during my break. It is a great book.</p>
<p>I also have a water bottle. The bottle is blue. And I have my ID card. The ID card has my photo and my name on it.</p>
</div></div>
<div class="card"><h3>💭 Comprehension</h3>
<div class="opinion-q"><p><span class="qnum">1.</span> What color is Kevin's notebook?</p><textarea placeholder="Write your answer here..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">2.</span> Why does Kevin have an umbrella?</p><textarea placeholder="Write your answer here..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">3.</span> What is Kevin's favorite item? Why?</p><textarea placeholder="Write your answer here..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">4.</span> List 5 things in YOUR bag using "a" or "an."</p><textarea placeholder="Write your answer here..."></textarea></div>
</div>`,

// [3] Conversation
`<div class="card"><h3>💬 Conversation: In the Classroom</h3>
<p>Notice how articles are used to identify objects. First mention uses "a/an," second mention uses "the."</p>
<div class="dialogue">
<div class="line"><span class="speaker">Teacher:</span><span class="text">OK class, look at your desks. What do you see? Ana?</span></div>
<div class="line"><span class="speaker">Ana:</span><span class="text">I see <em>a</em> book, <em>a</em> pencil, and <em>an</em> eraser.</span></div>
<div class="line"><span class="speaker">Teacher:</span><span class="text">Good! Now — what color is <em>the</em> book?</span></div>
<div class="line"><span class="speaker">Ana:</span><span class="text"><em>The</em> book is blue.</span></div>
<div class="line"><span class="speaker">Teacher:</span><span class="text">Excellent! Carlos, what's this? (holds up an object)</span></div>
<div class="line"><span class="speaker">Carlos:</span><span class="text">It's <em>an</em> umbrella!</span></div>
<div class="line"><span class="speaker">Teacher:</span><span class="text">Correct! And is <em>the</em> umbrella yours?</span></div>
<div class="line"><span class="speaker">Carlos:</span><span class="text">No, <em>the</em> umbrella is Ana's. <em>The</em> color is pink.</span></div>
<div class="line"><span class="speaker">Ana:</span><span class="text">Ha! Yes, that's <em>my</em> umbrella. Thank you!</span></div>
</div>
<div class="tip">Notice the pattern: we say "I see <em>a</em> book" (new, unknown) but then "What color is <em>the</em> book?" (we now know exactly which book).</div>
</div>
<div class="card"><h3>🎯 Writing Practice — Describing Your Classroom</h3>
<div class="opinion-q"><p><span class="qnum">1.</span> Look around your classroom. Name 5 things you see. Use "a" or "an." </p><textarea placeholder="Write your answer here..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">2.</span> Now describe one of those objects in detail. Use "the" in your second sentence.</p><textarea placeholder="Write your answer here..."></textarea></div>
</div>`
];
