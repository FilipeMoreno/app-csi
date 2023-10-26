'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'

import { useEffect, useState } from 'react'
import { Br, Cut, Printer, Text, render, Image } from 'react-thermal-printer'

interface VouchersContent {
  numDevices: string
  time: string
  period: string
  cod: string
}

export default function Home() {
  const [vouchers, setVouchers] = useState<VouchersContent>()
  const [loading, setLoading] = useState<boolean>(false)
  const dataAtual = new Date()

  const { toast } = useToast()

  const receipt = (
    <Printer type="epson" width={42}>
      <Image align="center" src="https://i.imgur.com/MIWhUex.png" />
      <Text size={{ width: 2, height: 2 }}>Wi-Fi</Text>
      <Text size={{ width: 2, height: 2 }}>Voucher</Text>
      <Br />
      <Text>Informe o código abaixo para acessar a internet</Text>
      <Br />
      <Text>Rede:</Text>
      <Text size={{ width: 2, height: 2 }}>Visitantes - CSI</Text>
      <Br />
      <Text>Voucher:</Text>
      <Text bold={true} size={{ width: 2, height: 2 }}>
        {vouchers?.cod}
      </Text>
      <Br />
      <Text align="center">Data: {dataAtual.getTime()}</Text>
      <Cut />
    </Printer>
  )

  async function reset() {
    setVouchers(undefined)
  }

  async function handleGenerateVoucher() {
    reset()
    setLoading(true)

    const voucher = await fetch(
      `${process.env.NEXT_PUBLIC_WISEFI_URL}/cp/api/vouchers/?access_token=${process.env.NEXT_PUBLIC_WISEFI_ACCESS_TOKEN}`,
      {
        method: 'POST',
        body: JSON.stringify({
          numDevices: '1',
          time: 6,
          period: 'hour',
          cod: Math.random().toString(36).substr(2, 7),
        }),
      },
    )
      .then((res) => res.json())
      .catch((err) => {
        toast({
          variant: 'destructive',
          title: 'Erro ao gerar voucher!',
          description: err.message + ' - ' + err,
        })
        console.log(err)
        setLoading(false)
      })

    if (voucher) {
      setVouchers(voucher)
      toast({
        variant: 'success',
        title: 'Voucher gerado com sucesso!',
      })
    }

    setLoading(false)
  }

  async function handlePrintVoucher() {
    const data: Uint8Array = await render(receipt)
    console.log(data)
  }

  useEffect(() => {
    setTimeout(() => {
      setVouchers(undefined)
    }, 5000)
  }, [vouchers])

  return (
    <div className="flex flex-col items-center justify-center">
      <Card className="h-full w-full bg-zinc-900">
        {!vouchers && (
          <CardHeader>
            <CardTitle className="uppercase">Wi-fi Vouchers</CardTitle>
            <CardDescription>
              Clique no botão abaixo para gerar um novo voucher para acesso à
              internet.
            </CardDescription>
          </CardHeader>
        )}
        <CardContent>
          {(!vouchers && loading && (
            <Button className="w-full" onClick={handleGenerateVoucher} disabled>
              Aguarde...
            </Button>
          )) ||
            (vouchers && !loading && (
              <div className="p-4">
                <p className="text-xl">
                  Voucher: <b>{vouchers.cod}</b>
                </p>
                <p>Data: {dataAtual.getTime()}</p>

                <p>
                  Tempo: {vouchers.time}{' '}
                  {vouchers.period === 'hour' && 'hora(s)'}
                  {vouchers.period === 'minute' && 'minuto(s)'}
                  {vouchers.period === 'day' && 'dia(s)'}
                  {vouchers.period === 'week' && 'semana(s)'}
                  {vouchers.period === 'month' && 'mes(s)'}
                  {vouchers.period === 'year' && 'ano(s)'}
                </p>

                <div className="-mb-4 mt-3 space-y-2">
                  <Button
                    className="w-full hover:opacity-60"
                    onClick={handlePrintVoucher}
                  >
                    Imprimir
                  </Button>
                  <Button
                    className="w-full hover:opacity-60"
                    onClick={handleGenerateVoucher}
                  >
                    Gerar outro
                  </Button>
                </div>
              </div>
            )) || (
              <Button
                className="w-full hover:opacity-60"
                onClick={handleGenerateVoucher}
              >
                Gerar
              </Button>
            )}
        </CardContent>
      </Card>
    </div>
  )
}
