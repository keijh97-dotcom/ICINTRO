window.unit9g1 = [
`<div class="card"><h3>🔤 Count & Noncount Nouns</h3>
<p>In English, nouns are divided into two types: <strong>count nouns</strong> (things you can count) and <strong>noncount nouns</strong> (things you cannot count individually).</p>
<h4>📌 Count Nouns — Things you can count (1, 2, 3...)</h4>
<p>They have a singular AND plural form. Use <em>a/an</em> with singular, add <em>-s/-es</em> for plural.</p>
<div class="example">one <em>apple</em>, two <em>apples</em>, three <em>eggs</em><span class="trans">You can count them: 1 apple, 2 apples, 3 apples...</span></div>
<h4>📌 Noncount Nouns — Things you CANNOT count individually</h4>
<p>These nouns have <strong>no plural form</strong>. They never use <em>a/an</em> when used generally. They are always singular.</p>
<table class="grammar-table"><tr><th>Category</th><th>Examples</th></tr>
<tr><td>Liquids</td><td>water, milk, juice, coffee, soup</td></tr>
<tr><td>Food (in bulk)</td><td>rice, bread, meat, cheese, butter</td></tr>
<tr><td>Abstract concepts</td><td>love, happiness, information, advice</td></tr>
<tr><td>Materials</td><td>wood, paper, gold, cotton</td></tr>
<tr><td>Other</td><td>money, music, weather, time</td></tr></table>
<div class="example">I need <em>rice</em>. (NOT "a rice" or "rices")<span class="trans">Rice is noncount — no a/an, no plural.</span></div>
<div class="example">Can you give me some <em>advice</em>? (NOT "an advice" or "advices")<span class="trans">Advice is noncount. This surprises many Spanish speakers!</span></div>
<div class="tip">To express quantity of noncount nouns, use a measurement: "a cup of coffee," "a bottle of water," "a piece of bread," "a slice of cheese," "a bag of rice."</div></div>`,

`<div class="card"><h3>✏️ Exercise 1 — Count or Noncount?</h3>
<div class="exercise" id="u9g1_ex1">
<p>Write "C" for count or "NC" for noncount next to each noun.</p>
<p>1. egg → <input type="text" data-answer="C" placeholder="C or NC"></p>
<p>2. water → <input type="text" data-answer="NC" placeholder="C or NC"></p>
<p>3. apple → <input type="text" data-answer="C" placeholder="C or NC"></p>
<p>4. bread → <input type="text" data-answer="NC" placeholder="C or NC"></p>
<p>5. tomato → <input type="text" data-answer="C" placeholder="C or NC"></p>
<p>6. milk → <input type="text" data-answer="NC" placeholder="C or NC"></p>
<p>7. banana → <input type="text" data-answer="C" placeholder="C or NC"></p>
<p>8. rice → <input type="text" data-answer="NC" placeholder="C or NC"></p>
<button class="btn btn-primary" onclick="checkFill(this,'u9g1_ex1')">Check Answers ✓</button>
</div></div>
<div class="card"><h3>✏️ Exercise 2 — Correct the Mistake</h3>
<div class="exercise" id="u9g1_ex2">
<p><strong>1. "I need an advice."</strong></p>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">a) I need advice.</div>
<div class="mc-option" onclick="selectMC(this)">b) I need advices.</div>
<br>
<p><strong>2. "We don't have a milk."</strong></p>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">a) We don't have milk.</div>
<div class="mc-option" onclick="selectMC(this)">b) We don't have milks.</div>
<br>
<p><strong>3. "She drinks two coffees every morning." (Meaning quantity)</strong></p>
<div class="mc-option" onclick="selectMC(this)" data-correct="true">a) She drinks two cups of coffee every morning.</div>
<div class="mc-option" onclick="selectMC(this)">b) She drinks two coffees every morning. (correct as a shortcut)</div>
<button class="btn btn-primary" onclick="checkMC(this,'u9g1_ex2')" style="margin-top:12px">Check Answers ✓</button>
</div></div>`,

`<div class="card"><h3>📖 Reading: "At the Supermarket"</h3>
<div class="reading-passage">
<p>Every Saturday, my mother goes to the supermarket to buy food for the week. She always makes a shopping list.</p>
<p>First, she buys fruits and vegetables. She usually buys five or six apples, a bunch of bananas, a bag of oranges, and some tomatoes. She also buys a head of lettuce and some onions.</p>
<p>In the dairy section, she buys milk, cheese, and butter. She always buys two liters of milk. She doesn't buy much cheese — just a small piece for cooking.</p>
<p>She buys bread from the bakery section. She prefers whole wheat bread. She also picks up a box of cereal for my father.</p>
<p>Finally, she buys rice, pasta, and oil. She buys a big bag of rice because we eat rice every day. She also buys a small bottle of olive oil.</p>
<p>She doesn't buy many snacks or sweets. We are a healthy family!</p>
</div></div>
<div class="card"><h3>💭 Comprehension</h3>
<div class="opinion-q"><p><span class="qnum">1.</span> List all the COUNT nouns from the reading.</p><textarea placeholder="Write your answer here..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">2.</span> List all the NONCOUNT nouns from the reading.</p><textarea placeholder="Write your answer here..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">3.</span> How much milk does the mother buy? How much cheese?</p><textarea placeholder="Write your answer here..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">4.</span> Write YOUR grocery list using count and noncount nouns.</p><textarea placeholder="Write your answer here..."></textarea></div>
</div>`,

`<div class="card"><h3>💬 Conversation: What Do We Need?</h3>
<div class="dialogue">
<div class="line"><span class="speaker">Mom:</span><span class="text">We need to go to the supermarket. Do we have any eggs?</span></div>
<div class="line"><span class="speaker">Dad:</span><span class="text">No, we don't. And we need milk — there isn't any in the fridge.</span></div>
<div class="line"><span class="speaker">Mom:</span><span class="text">OK. What about bread? Is there any bread?</span></div>
<div class="line"><span class="speaker">Dad:</span><span class="text">There are two slices left, but not much. We need a loaf.</span></div>
<div class="line"><span class="speaker">Mom:</span><span class="text">And do we have rice? We're making arroz con pollo tonight.</span></div>
<div class="line"><span class="speaker">Dad:</span><span class="text">There's some rice, but not enough for four people. Buy a big bag.</span></div>
</div>
</div>`
];
