type AnswerOptionProps = {
  option: string;
  letter: string;
  isSelected: boolean;
  onClick: () => void;
};

export default function AnswerOption({
  option,
  letter,
  isSelected,
  onClick,
}: AnswerOptionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex min-h-[65px] w-full items-center rounded-[18px] border-2 px-5 py-4 text-left transition-all duration-200 hover:scale-[1.01] active:scale-[0.98] sm:px-6 ${
        isSelected
          ? "border-[#806653] bg-[#806653] shadow-md"
          : "border-[#d8c7b5] bg-white hover:border-[#a98a70] hover:bg-[#f3e7d8] hover:shadow-sm"
      }`}
    >
      {/* Letter */}
      <span
        className={`mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-extrabold transition-colors duration-200 ${
          isSelected
            ? "bg-white text-[#806653]"
            : "bg-[#ead7bd] text-[#755b4b] group-hover:bg-[#a98a70] group-hover:text-white"
        }`}
      >
        {letter}
      </span>

      {/* Answer Text */}
      <span
        className={`flex-1 text-base font-semibold sm:text-lg ${
          isSelected ? "text-white" : "text-[#755b4b]"
        }`}
      >
        {option}
      </span>

      {/* Selected Check Mark */}
      {isSelected && (
        <span className="ml-4 flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-extrabold text-[#806653] animate-fadeIn">
          ✓
        </span>
      )}
    </button>
  );
}
