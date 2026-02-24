import React, { useState } from 'react';

// Example quiz data structure
// Ideally, load from JSON or parse from markdown frontmatter
const defaultQuiz = [
  {
    question: 'Which of the following is a valid Python variable name?',
    options: ['1variable', 'variable_1', 'variable-1', 'variable.1'],
    answer: 1,
  },
  {
    question: 'What does SQL stand for?',
    options: ['Structured Query Language', 'Simple Query Language', 'Standard Query Language', 'Sequential Query Language'],
    answer: 0,
  },
];

export default function Quiz({ quiz = defaultQuiz, onSubmit }) {
  const [selected, setSelected] = useState(Array(quiz.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelect = (qIdx, optIdx) => {
    if (!submitted) {
      const next = [...selected];
      next[qIdx] = optIdx;
      setSelected(next);
    }
  };

  const handleSubmit = () => {
    let correct = 0;
    quiz.forEach((q, idx) => {
      if (selected[idx] === q.answer) correct++;
    });
    setScore(correct);
    setSubmitted(true);
    if (onSubmit) onSubmit(correct);
  };

  return (
    <div className="quiz-section">
      <h2>Quiz</h2>
      {quiz.map((q, idx) => (
        <div key={idx} className="quiz-question">
          <p>{q.question}</p>
          {q.options.map((opt, oIdx) => (
            <label key={oIdx} style={{ display: 'block', marginLeft: 16 }}>
              <input
                type="radio"
                name={`q${idx}`}
                checked={selected[idx] === oIdx}
                onChange={() => handleSelect(idx, oIdx)}
                disabled={submitted}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}
      {!submitted && (
        <button onClick={handleSubmit} style={{ marginTop: 16 }}>Submit Quiz</button>
      )}
      {submitted && (
        <div className="quiz-result">
          <p>Your score: {score} / {quiz.length}</p>
          {score === quiz.length && <Certificate name="User" />}
        </div>
      )}
    </div>
  );
}

function Certificate({ name }) {
  return (
    <div className="certificate-section" style={{ border: '2px solid #0b5cff', padding: 24, marginTop: 24, background: '#f9f9ff' }}>
      <h3>Certificate of Completion</h3>
      <p>Congratulations, {name}!<br />You have successfully completed the quiz.</p>
      <p>Date: {new Date().toLocaleDateString()}</p>
    </div>
  );
}
