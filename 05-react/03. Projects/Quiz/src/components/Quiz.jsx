import React, { useState } from 'react';
import './Quiz.css';

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
        answer: "Harper Lee"
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: "2"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2", "NaCl"],
        answer: "H2O"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
        answer: "Mount Everest"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        answer: "Diamond"
    },
    {
        question: "Which country is the largest by area?",
        options: ["Canada", "China", "USA", "Russia"],
        answer: "Russia"
    },
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Avocado", "Onion", "Lime"],
        answer: "Avocado"
    }
];

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (option) => {
        const newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[currentQuestion] = option;
        setSelectedAnswers(newSelectedAnswers);
    };

    const handleNext = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        }
    };

    const handlePrev = () => {
        const prevQuestion = currentQuestion - 1;
        if (prevQuestion >= 0) {
            setCurrentQuestion(prevQuestion);
        }
    };

    const handleSubmit = () => {
        let finalScore = 0;
        for (let i = 0; i < questions.length; i++) {
            if (selectedAnswers[i] === questions[i].answer) {
                finalScore++;
            }
        }
        setScore(finalScore);
        setShowScore(true);
    };

    return (
        <div className='quiz-container'>
            {showScore ? (
                <div className='score-section'>
                    You scored {score} out of {questions.length}
                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].question}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                className={`answer-button ${selectedAnswers[currentQuestion] === option ? 'selected' : ''}`}
                                onClick={() => handleAnswerOptionClick(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <div className='navigation-buttons'>
                        {currentQuestion > 0 && <button onClick={handlePrev}>Previous</button>}
                        {currentQuestion < questions.length - 1 ? (
                            <button onClick={handleNext}>Next</button>
                        ) : (
                            <button onClick={handleSubmit}>Submit</button>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default Quiz;