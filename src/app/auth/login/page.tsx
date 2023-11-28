'use client'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import Link from 'next/link'
import { UserAuthForm } from '@/components/user-auth-form'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

export default function Page() {
  const formSchema = z.object({
    email: z.string().email({
      message: 'Informe um e-mail válido',
    }),
    senha: z.string().min(6, {
      message: 'A senha deve ter no mínimo 6 caracteres',
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      senha: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <>
      <div className="container flex h-[800px] flex-col items-center justify-center md:grid ">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <Image src="/favicon.ico" alt="Logo" width={64} height={64} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="">
              <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                  <h1 className="text-2xl font-semibold tracking-tight">
                    Entre com sua conta
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Digite suas credencias abaixo para continuar
                  </p>
                </div>
                <UserAuthForm />
                <CardFooter>
                  <p className="text-center text-sm text-muted-foreground">
                    Ao clicar em Entrar, você concorda com nossos{' '}
                    <Link
                      href="/terms"
                      className="underline underline-offset-4 hover:text-primary"
                    >
                      Termos de Serviço
                    </Link>{' '}
                    e{' '}
                    <Link
                      href="/privacy"
                      className="underline underline-offset-4 hover:text-primary"
                    >
                      Política de Privacidade
                    </Link>
                    .
                  </p>
                </CardFooter>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
