import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface QuizProps {
  question: string
  answers: string[]
  onAnswer: (index: number) => void
}

export default function Quiz({ question, answers, onAnswer }: QuizProps) {
  return (
    <Card className="w-full bg-white bg-opacity-80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl text-purple-800">{question}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {answers.map((answer, index) => (
            <Button
              key={index}
              onClick={() => onAnswer(index)}
              className="w-full text-left justify-start bg-purple-100 hover:bg-purple-200 text-purple-800"
            >
              {answer}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

