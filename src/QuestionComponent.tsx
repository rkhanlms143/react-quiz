import React, { useState } from "react";
import { QUESTIONS } from "./questions";

const QuestionComponent = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [score, setScore] = useState<number>(0);
  const [averageScore, setAverageScore] = useState<number>(0);

  const handleAnswer = (answer: boolean) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    const numYesAnswers = newAnswers.filter((a) => a).length;
    const newScore = (numYesAnswers / newAnswers.length) * 100;
    setScore(newScore);

    const totalScore = newAnswers.reduce(
      (acc, cur) => acc + (cur ? 100 : 0),
      0
    );
    const newAverageScore = totalScore / newAnswers.length;
    setAverageScore(newAverageScore);

    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setScore(0);
    setAverageScore(0);
  };

  return (
    <div className="questionnaire">
      <h2>React Questionnaire</h2>
      {score !== null && (
        <div className="score">
          <p>Score for this run: {score.toFixed(2)}%</p>
          <p>
            Average score for all runs:{" "}
            {averageScore !== null ? averageScore.toFixed(2) : "N/A"}
          </p>
        </div>
      )}
      {currentQuestionIndex !== QUESTIONS.length ? (
        <div className="question">
          <p>{QUESTIONS[currentQuestionIndex]}</p>
          <div className="answer-buttons">
            <button onClick={() => handleAnswer(true)}>Yes</button>
            <button onClick={() => handleAnswer(false)}>No</button>
          </div>
        </div>
      ) : null}
      {currentQuestionIndex === QUESTIONS.length && (
        <div className="quiz-completed">
          <p>Quiz completed!</p>
          <button onClick={restartQuiz}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default QuestionComponent;
