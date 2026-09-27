type QuestionCardProps = {
  questionNumber: number;
  questionText: string;
};

export default function QuestionCard({
  questionNumber,
  questionText,
}: QuestionCardProps) {
  return (
    <div className="animate-slideUp">
      <div className="mb-5">
        <h2 className="text-2xl font-extrabold text-[#755b4b]">
          Question {questionNumber}
        </h2>
      </div>

      <div className="mb-8 flex min-h-[110px] items-center rounded-[22px] border border-[#d8c7b5] bg-[#ead7bd] px-6 py-6 shadow-sm sm:px-8">
        <h3 className="w-full text-xl font-extrabold leading-relaxed text-[#755b4b] sm:text-2xl">
          {questionText}
        </h3>
      </div>
    </div>
  );
}
