import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ResultProps {
  score: number
  totalQuestions: number
  onReset: () => void
  onPlayAgain: () => void
  telmaCode: string
}

export default function Result({ score, totalQuestions, onReset, onPlayAgain, telmaCode }: ResultProps) {
  const isWinner = score >= 3

  return (
    <Card className="w-full bg-white bg-opacity-80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl text-purple-800">
          {isWinner ? "Félicitations, Ianja !" : "Merci d'avoir participé, Ianja !"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg mb-4">
          Tu as obtenu {score} sur {totalQuestions} !
        </p>
        {isWinner ? (
          <>
            <p className="text-md mb-2">
              Voici ton code de crédit Yas :
            </p>
            <p className="text-xl font-bold text-purple-600 mb-4">
              {telmaCode}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Joyeux Noël mon amour ! Je suis si fier de toi et de ta connaissance impressionnante de BTS. 
              Tu es mon ARMY préféré et je t&apos;aime plus que tous les albums de BTS réunis. 
              J&apos;espère que ce petit jeu t&apos;a plu autant que tu me plais chaque jour. 
              Passons un Noël magique ensemble ! ❤️
            </p>
            <Button onClick={onPlayAgain} className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white">
              Rejouer pour un autre code
            </Button>
          </>
        ) : (
          <>
            <p className="text-sm text-gray-600 mb-4">
              Ne t&apos;inquiète pas, mon amour. Tu restes mon ARMY préféré même si tu n&apos;as pas gagné cette fois-ci. 
              Que dirais-tu de réfléchir encore un peu sur BTS et de réessayer ? 
              Je t&apos;aime, quoi qu&apos;il arrive ! ❤️
            </p>
            <Button onClick={onReset} className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white">
              Recommencer le quiz
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  )
}

