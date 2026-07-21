import sys
from fpdf import FPDF

class PDF(FPDF):
    def header(self):
        self.set_font('Arial', 'B', 15)
        self.cell(0, 10, 'Comprehensive Evaluation Quiz: Units 14-15 (Past Simple)', 0, 1, 'C')
        self.ln(5)

    def chapter_title(self, title):
        self.set_font('Arial', 'B', 12)
        self.cell(0, 10, title, 0, 1, 'L')
        self.ln(2)

    def chapter_body(self, text):
        self.set_font('Arial', '', 11)
        self.multi_cell(0, 6, text)
        self.ln(3)

def create_quiz():
    pdf = PDF()
    
    # PAGE 1
    pdf.add_page()
    pdf.set_font('Arial', '', 11)
    pdf.cell(0, 10, 'Student Name: _________________________________________   Date: _______________', 0, 1)
    pdf.cell(0, 10, 'Score: ________ / 100               Estimated Time: 45 minutes', 0, 1)
    pdf.ln(5)

    # I. Grammar: Fill in the blanks
    pdf.chapter_title('I. Grammar Part A: Fill in the blanks (10 points)')
    pdf.chapter_body("Complete the sentences with the correct past simple form of the verbs in parentheses:")
    grammar_a = [
        "1. I _________ (go) to the museum last Saturday.",
        "2. She _________ (not / eat) pizza for dinner yesterday.",
        "3. _________ they _________ (visit) their grandparents last summer?",
        "4. We _________ (study) for three hours for the English exam.",
        "5. He _________ (buy) a new jacket at the mall.",
        "6. The movie _________ (start) at 8:00 PM.",
        "7. I _________ (not / sleep) very well last night.",
        "8. Where _________ you _________ (travel) exactly?",
        "9. My team _________ (win) the soccer match on Sunday.",
        "10. She _________ (read) an interesting book last week."
    ]
    for q in grammar_a:
        pdf.cell(0, 7, q, 0, 1)
    pdf.ln(5)

    # II. Grammar: Unscramble the sentences
    pdf.chapter_title('II. Grammar Part B: Sentence Order (10 points)')
    pdf.chapter_body("Unscramble the words to make correct sentences or questions in the past simple:")
    grammar_b = [
        "1. yesterday / you / did / work / ?",
        "   ______________________________________________________________",
        "2. didn't / the party / they / enjoy / .",
        "   ______________________________________________________________",
        "3. pizza / for / we / ate / lunch / .",
        "   ______________________________________________________________",
        "4. week / to / went / she / the beach / last / .",
        "   ______________________________________________________________",
        "5. they / what / did / do / weekend / the / on / ?",
        "   ______________________________________________________________"
    ]
    for q in grammar_b:
        pdf.cell(0, 7, q, 0, 1)
    pdf.ln(5)

    # PAGE 2
    pdf.add_page()
    
    # III. Reading Comprehension 1
    pdf.chapter_title('III. Reading Comprehension 1: A Terrible Trip (20 points)')
    text1 = ("Last year, Alex and his family decided to go on vacation to the mountains. They packed their "
             "bags and left early on Saturday morning. The trip started well, but after two hours, their car "
             "broke down. They waited on the side of the road for three hours until a mechanic fixed it. "
             "When they finally arrived at the hotel, it was late at night, and they were very tired. "
             "The next morning, it rained all day, so they couldn't go hiking. They stayed in their hotel "
             "room and played board games. They didn't have fun on their vacation, so they returned home early.")
    pdf.chapter_body(text1)
    
    pdf.set_font('Arial', 'I', 11)
    pdf.cell(0, 6, "A. Answer the questions based on the text:", 0, 1)
    pdf.set_font('Arial', '', 11)
    q1 = [
        "1. Where did Alex and his family go on vacation?",
        "   ______________________________________________________________",
        "2. What happened to their car after two hours?",
        "   ______________________________________________________________",
        "3. Why couldn't they go hiking the next morning?",
        "   ______________________________________________________________",
        "4. What did they do in the hotel room?",
        "   ______________________________________________________________"
    ]
    for q in q1:
        pdf.cell(0, 7, q, 0, 1)
    
    pdf.ln(3)
    pdf.set_font('Arial', 'I', 11)
    pdf.cell(0, 6, "B. Write True (T) or False (F):", 0, 1)
    pdf.set_font('Arial', '', 11)
    tf1 = [
        "__ 1. They left for their trip on Sunday morning.",
        "__ 2. They waited for a mechanic for exactly three hours.",
        "__ 3. They returned home late because they loved the hotel.",
        "__ 4. It rained the day after they arrived."
    ]
    for q in tf1:
        pdf.cell(0, 7, q, 0, 1)
        
    pdf.ln(5)
    
    # PAGE 3
    pdf.add_page()
    
    # IV. Reading 2
    pdf.chapter_title('IV. Reading Comprehension 2: Sarah\'s Busy Weekend (20 points)')
    text2 = ("Sarah had a fantastic, but very busy weekend. On Friday evening, she went to a concert "
             "with her best friend, Emma. They listened to their favorite band and danced until midnight. "
             "On Saturday morning, she woke up early because she had a tennis lesson at 9:00 AM. In the "
             "afternoon, she went shopping and bought a beautiful red dress. On Sunday, Sarah visited her "
             "grandparents. They had a big family lunch, and her grandmother cooked a delicious chicken soup. "
             "After lunch, Sarah helped her grandfather in the garden. She went to bed very early on Sunday night.")
    pdf.chapter_body(text2)
    
    pdf.set_font('Arial', 'I', 11)
    pdf.cell(0, 6, "A. Answer the following questions in complete sentences:", 0, 1)
    pdf.set_font('Arial', '', 11)
    q2 = [
        "1. Who did Sarah go to the concert with?",
        "   ______________________________________________________________",
        "2. Why did she wake up early on Saturday?",
        "   ______________________________________________________________",
        "3. What did she buy when she went shopping?",
        "   ______________________________________________________________",
        "4. What did she do after lunch on Sunday?",
        "   ______________________________________________________________"
    ]
    for q in q2:
        pdf.cell(0, 7, q, 0, 1)
        
    pdf.ln(3)
    pdf.set_font('Arial', 'I', 11)
    pdf.cell(0, 6, "B. Write True (T) or False (F):", 0, 1)
    pdf.set_font('Arial', '', 11)
    tf2 = [
        "__ 1. Sarah and Emma danced until morning.",
        "__ 2. Sarah bought a blue dress on Saturday.",
        "__ 3. Her grandmother made chicken soup for lunch.",
        "__ 4. She stayed up late on Sunday night."
    ]
    for q in tf2:
        pdf.cell(0, 7, q, 0, 1)
        
    pdf.ln(10)
        
    # V. Writing Section
    pdf.chapter_title('V. Writing Expression (40 points)')
    pdf.chapter_body("Write a short paragraph (about 50-80 words) describing your last vacation. Include information about:\n"
                     "- Where you went\n"
                     "- Who you went with\n"
                     "- What you did\n"
                     "- How your vacation was (exciting, boring, relaxing, terrifying?)")
    
    # Add empty lines for writing
    for _ in range(10):
        pdf.cell(0, 8, "_________________________________________________________________________________________", 0, 1)
        
    pdf.output('Quiz_Unit_14_15_Extended.pdf', 'F')
    print("PDF generated as Quiz_Unit_14_15_Extended.pdf")

if __name__ == '__main__':
    create_quiz()
