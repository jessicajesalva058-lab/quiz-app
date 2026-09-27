type QuizHeaderProps = {
  currentQuestion: number;
  totalQuestions: number;
};

export default function QuizHeader({
  currentQuestion,
  totalQuestions,
}: QuizHeaderProps) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <h1 className="text-3xl font-extrabold text-[#755b4b] sm:text-4xl">
        MyQuiz <span className="text-[#a98a70]">App</span>
      </h1>

      <span className="rounded-full bg-[#ead7bd] px-5 py-2 text-lg font-bold text-[#755b4b]">
        {currentQuestion + 1}/{totalQuestions}
      </span>
    </div>
  );
}
