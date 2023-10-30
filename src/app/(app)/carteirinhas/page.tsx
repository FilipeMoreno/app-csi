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

import { useEffect, useState } from 'react'

export default function Home() {
  const { toast } = useToast()

  return (
    <div className="flex flex-col items-center justify-center">
      <Card className="h-full w-full bg-zinc-900">
        <CardHeader>
          <CardTitle>Carteirinhas</CardTitle>
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
