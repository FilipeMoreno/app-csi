'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { useToast } from '@/components/ui/use-toast'

import { caveat } from '@/app/fonts'

export default function CarteirinhaHome() {
  const { toast } = useToast()

  return (
    <div className="flex flex-col items-center justify-center">
      <Card className="h-full w-full">
        <CardHeader>
          <CardTitle className={caveat.className}>Carteirinhas</CardTitle>
          <CardDescription>Gerencie as carteirinhas</CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={() => {
              toast({
                title: 'Hello world',
                description: 'This is a toast',
                variant: 'success',
              })
            }}
          >
            Hello world
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
