import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.question.deleteMany();

  await prisma.question.createMany({
    data: [
      {
        questionText: "What does CPU stand for?",
        optionA: "Central Processing Unit",
        optionB: "Computer Personal Unit",
        optionC: "Central Program Utility",
        optionD: "Computer Processing Utility",
        correctAnswer: "Central Processing Unit",
      },
      {
        questionText: "Which language is used to style web pages?",
        optionA: "HTML",
        optionB: "Python",
        optionC: "CSS",
        optionD: "Java",
        correctAnswer: "CSS",
      },
      {
        questionText: "What does RAM stand for?",
        optionA: "Read Access Memory",
        optionB: "Random Access Memory",
        optionC: "Rapid Application Memory",
        optionD: "Run Access Module",
        correctAnswer: "Random Access Memory",
      },
      {
        questionText: "Which of these is a programming language?",
        optionA: "Windows",
        optionB: "Google",
        optionC: "Python",
        optionD: "Chrome",
        correctAnswer: "Python",
      },
      {
        questionText: "What is the main purpose of a database?",
        optionA: "To edit images",
        optionB: "To store and organize data",
        optionC: "To create animations",
        optionD: "To browse websites",
        correctAnswer: "To store and organize data",
      },
      {
        questionText: "What does URL stand for?",
        optionA: "Uniform Resource Locator",
        optionB: "Universal Reading Link",
        optionC: "User Reference Location",
        optionD: "Uniform Record List",
        correctAnswer: "Uniform Resource Locator",
      },
      {
        questionText: "Which device connects computer networks?",
        optionA: "Printer",
        optionB: "Router",
        optionC: "Keyboard",
        optionD: "Scanner",
        correctAnswer: "Router",
      },
      {
        questionText: "What does SQL stand for?",
        optionA: "Structured Query Language",
        optionB: "Simple Question Language",
        optionC: "System Query Link",
        optionD: "Standard Quick Language",
        correctAnswer: "Structured Query Language",
      },
      {
        questionText: "Which data type stores whole numbers?",
        optionA: "String",
        optionB: "Boolean",
        optionC: "Integer",
        optionD: "Character",
        correctAnswer: "Integer",
      },
      {
        questionText: "What is the main function of an operating system?",
        optionA: "To manage computer hardware and software",
        optionB: "To create websites only",
        optionC: "To edit videos",
        optionD: "To design logos",
        correctAnswer: "To manage computer hardware and software",
      },
    ],
  });

  console.log("Successfully added 10 questions!");
}

main()
  .catch((error) => {
    console.error("Error while seeding questions:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
