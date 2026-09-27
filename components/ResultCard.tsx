import Link from "next/link";

type ResultCardProps = {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
};

export default function ResultCard({
  score,
  totalQuestions,
  onRestart,
}: ResultCardProps) {
  const incorrectAnswers = totalQuestions - score;

  const percentage = Math.round((score / totalQuestions) * 100);

  function handleRestart() {
    const confirmed = window.confirm(
      "Are you sure you want to retake the quiz?",
    );

    if (confirmed) {
      onRestart();
    }
  }

  return (
    <main className="flex min-h-screen animate-fadeIn items-center justify-center bg-[#e9e3dc] px-4 py-8 sm:px-6">
      <div className="w-full max-w-xl animate-slideUp rounded-[30px] border border-[#d8c7b5] bg-[#fffaf3] p-6 text-center shadow-[0_12px_30px_rgba(91,67,50,0.16)] sm:p-10">
        {/* Title */}
        <h1 className="mb-3 text-3xl font-extrabold text-[#755b4b] sm:text-4xl">
          Quiz Finished!
        </h1>

        <p className="mb-6 text-base text-[#9a8170] sm:text-lg">
          You completed the quiz.
        </p>

        {/* Score */}
        <div className="my-6 rounded-[25px] bg-[#ead7bd] px-5 py-7 sm:my-8 sm:px-6 sm:py-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#755b4b] sm:text-sm">
            Your Score
          </p>

          <p className="text-4xl font-extrabold text-[#755b4b] sm:text-5xl">
            {score}
            <span className="text-xl text-[#b49a83] sm:text-2xl">
              {" "}
              / {totalQuestions}
            </span>
          </p>
        </div>

        {/* Statistics */}
        <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {/* Correct */}
          <div className="rounded-2xl bg-[#f3e7d8] p-4">
            <p className="text-2xl font-extrabold text-[#71805a]">{score}</p>

            <p className="text-sm font-semibold text-[#755b4b]">Correct</p>
          </div>

          {/* Incorrect */}
          <div className="rounded-2xl bg-[#f3e7d8] p-4">
            <p className="text-2xl font-extrabold text-[#a66e5b]">
              {incorrectAnswers}
            </p>

            <p className="text-sm font-semibold text-[#755b4b]">Incorrect</p>
          </div>

          {/* Percentage */}
          <div className="rounded-2xl bg-[#f3e7d8] p-4">
            <p className="text-2xl font-extrabold text-[#806653]">
              {percentage}%
            </p>

            <p className="text-sm font-semibold text-[#755b4b]">Percentage</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          {/* Retake Quiz */}
          <button
            type="button"
            onClick={handleRestart}
            className="w-full rounded-full bg-[#806653] px-8 py-3 font-bold text-white transition duration-200 hover:scale-105 hover:bg-[#684f3e] active:scale-95 sm:w-auto"
          >
            Retake Quiz
          </button>

          {/* Return Home */}
          <Link
            href="/"
            className="w-full rounded-full border-2 border-[#806653] px-8 py-3 text-center font-bold text-[#806653] transition hover:bg-[#806653] hover:text-white sm:w-auto"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}
