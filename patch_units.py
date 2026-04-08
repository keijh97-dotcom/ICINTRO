import os

base = r'C:\Users\joasi\Downloads\Bank_statement\Level 02\units'

# ── helper to write a file ─────────────────────────────────────────────────
def W(name, content):
    path = os.path.join(base, name)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Wrote {name}')

# ══════════════════════════════════════════════════════════════════
# PATCH u1g1  (add reading tab as index 2, shift conversation to 3)
# ══════════════════════════════════════════════════════════════════
u1g1_reading = """
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
<div class="opinion-q"><p><span class="qnum">1.</span> Where is Sofia from? How old is she?</p><textarea placeholder="Sofia is from... She is..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">2.</span> What is the teacher's name? Where is he from?</p><textarea placeholder="The teacher's name is... He is from..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">3.</span> Describe Diego. Use two sentences.</p><textarea placeholder="Diego is from... He is..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">4.</span> How do the students feel about English class?</p><textarea placeholder="The students feel... They think English is..."></textarea></div>
</div>`"""

# read current u1g1
with open(os.path.join(base,'u1g1.js'), encoding='utf-8') as f:
    txt = f.read()
# insert reading before last item (the conversation tab)
# Find the last `,` before the closing ] which precedes the conversation block
# The conversation tab starts with: // [2] Conversation
txt = txt.replace('// [2] Conversation', '// [3] Conversation')
txt = txt.replace(
    '// [3] Conversation',
    u1g1_reading + ',\n\n// [3] Conversation'
)
with open(os.path.join(base,'u1g1.js'), 'w', encoding='utf-8') as f:
    f.write(txt)
print('Patched u1g1.js')

# ── u1g2 patch ─────────────────────────────────────────────────────────────
u1g2_reading = """
// [2] Reading
`<div class="card"><h3>📖 Reading: "My Family"</h3>
<div class="reading-passage">
<p>My name is Laura. I live with my family. My father's name is Roberto. His job is engineer. My mother's name is Carmen. Her job is nurse. They are wonderful parents.</p>
<p>I have a brother. His name is Andrés. His nickname is "Andy." He is 16 years old. His phone number is 555-3344.</p>
<p>I also have a sister. Her name is Valentina. Her email is vale@mail.com. Her dream is to be a doctor.</p>
<p>Our house is in Bogotá. Our neighborhood is quiet and safe. We love our home.</p>
</div></div>
<div class="card"><h3>💭 Comprehension</h3>
<div class="opinion-q"><p><span class="qnum">1.</span> What are Laura's parents' names and jobs?</p><textarea placeholder="Her father's name is... His job is... Her mother's name is..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">2.</span> What is the brother's nickname and phone number?</p><textarea placeholder="His nickname is... His phone number is..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">3.</span> What is the sister's dream?</p><textarea placeholder="Her dream is to..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">4.</span> Now write 3 sentences about YOUR family using possessive adjectives.</p><textarea placeholder="My father's name is... His... My mother's name is... Her..."></textarea></div>
</div>`"""

with open(os.path.join(base,'u1g2.js'), encoding='utf-8') as f:
    txt = f.read()
txt = txt.replace('// [2] Conversation', '// [3] Conversation')
txt = txt.replace('// [3] Conversation', u1g2_reading + ',\n\n// [3] Conversation')
with open(os.path.join(base,'u1g2.js'), 'w', encoding='utf-8') as f:
    f.write(txt)
print('Patched u1g2.js')

# ── u2g1 patch ─────────────────────────────────────────────────────────────
u2g1_reading = """
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
<div class="opinion-q"><p><span class="qnum">1.</span> What color is Kevin's notebook?</p><textarea placeholder="The notebook is..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">2.</span> Why does Kevin have an umbrella?</p><textarea placeholder="Kevin has an umbrella because..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">3.</span> What is Kevin's favorite item? Why?</p><textarea placeholder="Kevin's favorite item is... because..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">4.</span> List 5 things in YOUR bag using "a" or "an."</p><textarea placeholder="I have a... I also have an..."></textarea></div>
</div>`"""

with open(os.path.join(base,'u2g1.js'), encoding='utf-8') as f:
    txt = f.read()
txt = txt.replace('// [2] Conversation', '// [3] Conversation')
txt = txt.replace('// [3] Conversation', u2g1_reading + ',\n\n// [3] Conversation')
with open(os.path.join(base,'u2g1.js'), 'w', encoding='utf-8') as f:
    f.write(txt)
print('Patched u2g1.js')

# ── u2g2 patch ─────────────────────────────────────────────────────────────
u2g2_reading = """
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
<div class="opinion-q"><p><span class="qnum">1.</span> Where is the teacher's desk?</p><textarea placeholder="The teacher's desk is..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">2.</span> Who does the writer sit between?</p><textarea placeholder="The writer sits between..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">3.</span> What is next to the window?</p><textarea placeholder="The window is next to..."></textarea></div>
<div class="opinion-q"><p><span class="qnum">4.</span> Describe YOUR classroom using at least 4 prepositions of place.</p><textarea placeholder="In my classroom, the whiteboard is in front of... My desk is next to..."></textarea></div>
</div>`"""

with open(os.path.join(base,'u2g2.js'), encoding='utf-8') as f:
    txt = f.read()
txt = txt.replace('// [2] Conversation', '// [3] Conversation')
txt = txt.replace('// [3] Conversation', u2g2_reading + ',\n\n// [3] Conversation')
with open(os.path.join(base,'u2g2.js'), 'w', encoding='utf-8') as f:
    f.write(txt)
print('Patched u2g2.js')

print('All patches done!')
