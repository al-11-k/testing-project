const quiz = [
    {
      question: 'Question 1',
      choices: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
      correctAnswer: 0
    },
    {
      question: 'Question 2',
      choices: ['Answer A', 'Answer B', 'Answer C', 'Answer D'],
      correctAnswer: 2
    },
     // Add more questions as needed...
  ];
  
  let currentQuestionIndex = -1;
  
  const containers = document.querySelectorAll('.child-container');
  const questionElement = document.querySelector('.question p');
  
  function loadNextQuestion() {
     currentQuestionIndex++;
  
     if (currentQuestionIndex >= quiz.length) {
        alert("Quiz completed!");
        return;
     }
  
     const currentQuestionObject = quiz[currentQuestionIndex];
     
     questionElement.textContent = currentQuestionObject.question;
  
     containers.forEach((container, index) => {
        container.textContent = currentQuestionObject.choices[index];
  
        container.addEventListener('click', () => {
           if (index === currentQuestionObject.correctAnswer) { 
              alert('Yay! Correct Answer.');
              loadNextQuestion();
           } else {
              alert('Nay! Try Again.');
           }
        });
     });
  }
  
  loadNextQuestion();