"use client";

import { useEffect, useState } from "react";

import QuizHeader from "@/components/QuizHeader";
import ProgressBar from "@/components/ProgressBar";
import QuestionCard from "@/components/QuestionCard";
import AnswerOption from "@/components/AnswerOption";
import ResultCard from "@/components/ResultCard";

type Question = {
  id: number;
  questionText: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAnswer: string;
};

type AnswerStatus = "correct" | "incorrect" | null;

export default function QuizPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [answerStatus, setAnswerStatus] = useState<AnswerStatus[]>([]);

  // Fetch questions from the database
  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await fetch("/api/questions");

        if (!response.ok) {
          throw new Error("Failed to fetch questions");
        }

        const data: Question[] = await response.json();

        // Use only the first 10 questions
        setQuestions(data.slice(0, 10));
      } catch (error) {
        console.error("Error loading questions:", error);
        setError("Unable to load questions.");
      } finally {
        setLoading(false);
      }
    }

    fetchQuestions();
  }, []);

  // Handle Next / Finish button
  function handleNext() {
    if (!selectedAnswer) {
      alert("Please select an answer first.");
      return;
    }

    const question = questions[currentQuestion];

    const isCorrect = selectedAnswer === question.correctAnswer;

    const newScore = score + (isCorrect ? 1 : 0);

    // Update answer status
    setAnswerStatus((previous) => {
      const updatedStatus = [...previous];

      updatedStatus[currentQuestion] = isCorrect ? "correct" : "incorrect";

      return updatedStatus;
    });

    // Update score
    setScore(newScore);

    // Check if this is the last question
    if (currentQuestion === questions.length - 1) {
      setFinished(true);
    } else {
      setCurrentQuestion((previous) => previous + 1);
      setSelectedAnswer("");
    }
  }

  // Restart the quiz
  function restartQuiz() {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setFinished(false);
    setAnswerStatus([]);
  }

  // Loading state
  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#e9e3dc] px-4">
        <div className="animate-fadeIn text-center">
          <div className="mx-auto mb-5 h-12 w-12 animate-spin rounded-full border-4 border-[#d8c7b5] border-t-[#806653]" />

          <p className="text-lg font-bold text-[#755b4b]">Loading quiz...</p>

          <p className="mt-1 text-sm text-[#9a8170]">Please wait a moment.</p>
        </div>
      </main>
    );
  }

  // Error state
  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#e9e3dc] px-4">
        <div className="rounded-[25px] bg-[#fffaf3] p-8 text-center shadow-lg">
          <h1 className="mb-3 text-2xl font-extrabold text-[#755b4b]">
            Something went wrong
          </h1>

          <p className="text-[#9a8170]">{error}</p>
        </div>
      </main>
    );
  }

  // No questions state
  if (questions.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#e9e3dc] px-4">
        <div className="rounded-[25px] bg-[#fffaf3] p-8 text-center shadow-lg">
          <h1 className="mb-3 text-2xl font-extrabold text-[#755b4b]">
            No Questions Found
          </h1>

          <p className="text-[#9a8170]">
            Please add questions to the database.
          </p>
        </div>
      </main>
    );
  }

  // Show result page when quiz is finished
  if (finished) {
    return (
      <ResultCard
        score={score}
        totalQuestions={questions.length}
        onRestart={restartQuiz}
      />
    );
  }

  const question = questions[currentQuestion];

  const options = [
    question.optionA,
    question.optionB,
    question.optionC,
    question.optionD,
  ];

  return (
    <main className="min-h-screen animate-fadeIn bg-[#e9e3dc] px-4 py-8 sm:px-8">
      <div className="mx-auto w-full max-w-[1250px]">
        {/* Quiz Header */}
        <QuizHeader
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
        />

        {/* Progress Bar */}
        <ProgressBar
          totalQuestions={questions.length}
          currentQuestion={currentQuestion}
          answerStatus={answerStatus}
        />

        {/* Quiz Content */}
        <section className="rounded-[30px] border border-[#d8c7b5] bg-[#fffaf3] p-5 shadow-[0_12px_30px_rgba(91,67,50,0.13)] sm:p-8 md:p-10">
          {/* Question */}
          <QuestionCard
            key={currentQuestion}
            questionNumber={currentQuestion + 1}
            questionText={question.questionText}
          />

          {/* Answer Choices */}
          <div className="flex flex-col gap-4">
            {options.map((option, index) => {
              const letter = String.fromCharCode(65 + index);

              return (
                <AnswerOption
                  key={index}
                  option={option}
                  letter={letter}
                  isSelected={selectedAnswer === option}
                  onClick={() => setSelectedAnswer(option)}
                />
              );
            })}
          </div>

          {/* Next / Finish Button */}
          <div className="mt-8 flex justify-end border-t border-[#d8c7b5] pt-6">
            <button
              type="button"
              onClick={handleNext}
              className="rounded-full bg-[#806653] px-9 py-3 text-base font-extrabold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-[#684f3e] hover:shadow-lg active:scale-95 sm:px-11 sm:py-3.5 sm:text-lg"
            >
              {currentQuestion === questions.length - 1 ? "Finish" : "Next →"}
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
