export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#e9e3dc] px-4 py-8 sm:px-6">
      <div className="w-full max-w-2xl animate-slideUp rounded-[30px] border border-[#d8c7b5] bg-[#fffaf3] px-6 py-10 text-center shadow-[0_12px_30px_rgba(91,67,50,0.13)] sm:px-10 sm:py-12 md:px-14">
        <h1 className="mb-5 text-4xl font-extrabold tracking-tight text-[#755b4b] sm:text-5xl md:text-6xl">
          MyQuiz <span className="text-[#a98a70]">App</span>
        </h1>

        <p className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-[#9a8170] sm:text-lg md:text-xl">
          Test your knowledge with our interactive quiz. Answer each question
          carefully and see your score at the end.
        </p>

        <a
          href="/quiz"
          className="inline-block w-full rounded-full bg-[#806653] px-8 py-3.5 text-base font-extrabold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-[#684f3e] hover:shadow-lg active:scale-95 sm:w-auto sm:px-10 sm:py-4 sm:text-lg"
        >
          Start Quiz →
        </a>
      </div>
    </main>
  );
}
