type ProgressBarProps = {
  totalQuestions: number;
  currentQuestion: number;
  answerStatus: ("correct" | "incorrect" | null)[];
};

export default function ProgressBar({
  totalQuestions,
  currentQuestion,
  answerStatus,
}: ProgressBarProps) {
  return (
    <section className="mb-8 flex min-h-[105px] w-full items-center gap-5 rounded-[24px] border border-[#d8c7b5] bg-[#fffaf3] px-5 py-5 shadow-[0_8px_24px_rgba(91,67,50,0.1)] sm:px-7">
      <h2 className="shrink-0 text-xl font-extrabold text-[#755b4b] sm:text-2xl">
        Items
      </h2>

      <div className="flex flex-1 flex-wrap items-center gap-2 sm:gap-3">
        {Array.from({ length: totalQuestions }).map((_, index) => {
          const status = answerStatus[index];

          return (
            <div
              key={index}
              className={`flex h-9 w-9 items-center justify-center rounded-xl border-2 text-sm font-extrabold transition-all duration-300 sm:h-11 sm:w-11 sm:text-base ${
                status === "correct"
                  ? "border-[#71805a] bg-[#71805a] text-white"
                  : status === "incorrect"
                    ? "border-[#a66e5b] bg-[#a66e5b] text-white"
                    : index === currentQuestion
                      ? "border-[#806653] bg-[#806653] text-white shadow-md"
                      : "border-[#d8c7b5] bg-[#ead7bd] text-[#755b4b]"
              }`}
            >
              {status === "correct"
                ? "✓"
                : status === "incorrect"
                  ? "✕"
                  : index + 1}
            </div>
          );
        })}
      </div>
    </section>
  );
}
