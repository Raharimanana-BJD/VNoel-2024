"use client";

import { useState } from "react";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Snowfall from "./components/Snowfall";

const telmaCodes = ["31554255492588", "76207287375368"];

const btsQuestions = [
  {
    question: "En quelle année BTS a-t-il débuté ?",
    answers: ["2010", "2013", "2015", "2017"],
    correctAnswer: 1,
  },
  {
    question: "Quel est le vrai nom de V ?",
    answers: ["Kim Taehyung", "Park Jimin", "Jeon Jungkook", "Min Yoongi"],
    correctAnswer: 0,
  },
  {
    question: "Quelle est la chanson titre de l'album 'Wings' ?",
    answers: ["DNA", "Fake Love", "Blood Sweat & Tears", "Boy With Luv"],
    correctAnswer: 2,
  },
  {
    question: "Quel membre de BTS est connu pour son amour des mangues ?",
    answers: ["Jungkook", "RM", "Jimin", "J-Hope"],
    correctAnswer: 2,
  },
  {
    question: "Quel est le nom du fandom de BTS ?",
    answers: ["ARMY", "BLINK", "ONCE", "EXO-L"],
    correctAnswer: 0,
  },
  {
    question: "Quel membre est le leader du groupe ?",
    answers: ["Suga", "Jin", "RM", "J-Hope"],
    correctAnswer: 2,
  },
  {
    question:
      "Quelle est la chanson de BTS qui a atteint la première place du Billboard Hot 100 en 2020 ?",
    answers: ["Dynamite", "Boy With Luv", "ON", "Life Goes On"],
    correctAnswer: 0,
  },
  {
    question: "Quel est le surnom de Jungkook ?",
    answers: [
      "Golden Maknae",
      "Worldwide Handsome",
      "Sunshine",
      "God of Destruction",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Quel membre de BTS est connu pour son studio personnel appelé 'Genius Lab' ?",
    answers: ["Suga", "RM", "J-Hope", "V"],
    correctAnswer: 1,
  },
  {
    question: "Quelle est la signification de BTS en coréen ?",
    answers: [
      "Behind The Scenes",
      "Boys That Sing",
      "Bangtan Sonyeondan",
      "Best of The Stars",
    ],
    correctAnswer: 2,
  },
  {
    question: "Quel est le nom du premier album complet de BTS ?",
    answers: ["Dark & Wild", "Wings", "2 Cool 4 Skool", "O!RUL8,2?"],
    correctAnswer: 0,
  },
  {
    question:
      "Quel membre de BTS est connu pour son amour des bandes dessinées ?",
    answers: ["Jin", "RM", "Suga", "J-Hope"],
    correctAnswer: 1,
  },
  {
    question:
      "Quelle université a décerné un doctorat honorifique à tous les membres de BTS ?",
    answers: [
      "Université de Séoul",
      "Université de Corée",
      "Université Hanyang",
      "Université nationale de Séoul",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Quel membre de BTS a collaboré avec Coldplay sur la chanson 'My Universe' ?",
    answers: ["Jungkook", "V", "RM", "Jimin"],
    correctAnswer: 2,
  },
  {
    question: "Quel est le nom du premier single en anglais de BTS ?",
    answers: ["Boy With Luv", "Dynamite", "Butter", "Permission to Dance"],
    correctAnswer: 1,
  },
];

const generateQuestions = (code: string, usedQuestions: Set<number>) => {
  const questions = [];
  const availableQuestions = btsQuestions.filter(
    (_, index) => !usedQuestions.has(index)
  );

  // Add two questions with answers related to the Telma code
  questions.push({
    ...availableQuestions[0],
    answers: [...availableQuestions[0].answers.slice(0, 3), code.slice(0, 3)],
    correctAnswer: 3,
  });
  questions.push({
    ...availableQuestions[1],
    answers: [...availableQuestions[1].answers.slice(0, 3), code.slice(-2)],
    correctAnswer: 3,
  });
  usedQuestions.add(btsQuestions.indexOf(availableQuestions[0]));
  usedQuestions.add(btsQuestions.indexOf(availableQuestions[1]));

  // Add three more random questions
  for (let i = 2; i < 5; i++) {
    const question = availableQuestions[i];
    questions.push(question);
    usedQuestions.add(btsQuestions.indexOf(question));
  }

  return questions.sort(() => Math.random() - 0.5);
};

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
  const [usedQuestions, setUsedQuestions] = useState(new Set<number>());
  const [questions, setQuestions] = useState(
    generateQuestions(telmaCodes[0], new Set())
  );

  const handleAnswer = (answer: number) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setQuestions(
      generateQuestions(telmaCodes[currentCodeIndex], usedQuestions)
    );
  };

  const playAgain = () => {
    const nextCodeIndex = (currentCodeIndex + 1) % telmaCodes.length;
    setCurrentCodeIndex(nextCodeIndex);
    if (usedQuestions.size >= btsQuestions.length - 5) {
      setUsedQuestions(new Set());
    }
    setQuestions(generateQuestions(telmaCodes[nextCodeIndex], usedQuestions));
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 to-red-900 flex flex-col items-center justify-center p-4">
      <Snowfall />
      <div className="z-10 w-full max-w-md">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Quiz de Noël BTS
        </h1>
        {!showResult ? (
          <Quiz
            question={questions[currentQuestion].question}
            answers={questions[currentQuestion].answers}
            onAnswer={handleAnswer}
          />
        ) : (
          <Result
            score={score}
            totalQuestions={questions.length}
            onReset={resetQuiz}
            onPlayAgain={playAgain}
            telmaCode={telmaCodes[currentCodeIndex]}
          />
        )}
      </div>
    </main>
  );
}
