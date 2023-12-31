'use client'

import { LegacyRef, useEffect, useRef, useState } from 'react'
import { Br, Cut, Image, Printer, Text } from 'react-thermal-printer'
import ReactToPrint from 'react-to-print'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
} from '@/components/ui/card'
import { toast } from 'sonner'

interface VouchersContent {
	numDevices: string
	time: string
	period: string
	cod: string
}

export default function Home() {
	const [vouchers, setVouchers] = useState<VouchersContent>()
	const [loading, setLoading] = useState<boolean>(false)
	const dataAtual = new Date().toLocaleDateString('pt-BR', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	})

	const componentRef = useRef()

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
			<Text align="center">Data: {dataAtual}</Text>
			<Cut />
		</Printer>
	)

	async function reset() {
		setVouchers(undefined)
	}

	async function handleGenerateVoucher() {
		reset()
		setLoading(true)

		// const voucher = await fetch(
		//   `${process.env.NEXT_PUBLIC_WISEFI_URL}/cp/api/vouchers/?access_token=${process.env.NEXT_PUBLIC_WISEFI_ACCESS_TOKEN}`,
		//   {
		//     method: 'POST',
		//     body: JSON.stringify({
		//       numDevices: '1',
		//       time: 6,
		//       period: 'hour',
		//       cod: Math.random().toString(36).substr(2, 7),
		//     }),
		//   },
		// )
		//   .then((res) => res.json())
		//   .catch((err) => {
		//     toast({
		//       variant: 'destructive',
		//       title: 'Erro ao gerar voucher!',
		//       description: err.message + ' - ' + err,
		//     })
		//     console.log(err)
		//     setLoading(false)
		//   })

		const voucher = {
			numDevices: '1',
			time: '6',
			period: 'hour',
			cod: Math.random().toString(36).substr(2, 7),
		}

		if (voucher) {
			setVouchers(voucher)
			toast.success('Sucesso!', {
				description: 'Voucher gerado com sucesso!',
			})
		}

		setLoading(false)
	}

	// async function handlePrintVoucher() {
	//   const data: Uint8Array = await render(receipt)
	//   console.log(data)

	//   if (componentRef.current) {
	//     componentRef.current.print()
	//   }
	// }

	useEffect(() => {
		setTimeout(() => {
			setVouchers(undefined)
		}, 10000)
	}, [vouchers])

	return (
		<>
			<div>
				<h1 className="text-2xl font-bold">Vouchers</h1>
				<p className="text-sm">Vouchers para acessar ao wi-fi</p>
			</div>

			<div className="mt-2 flex flex-col items-center justify-center">
				<Card className="h-full w-full border-transparent bg-transparent shadow-none">
					{!vouchers && (
						<CardHeader>
							<CardDescription>
								Clique no botão abaixo para gerar um novo voucher para acesso à
								internet.
							</CardDescription>
						</CardHeader>
					)}
					<CardContent>
						{(!vouchers && loading && (
							<Button
								className="w-full"
								onClick={handleGenerateVoucher}
								disabled
							>
								Aguarde...
							</Button>
						)) ||
							(vouchers && !loading && (
								<div className="p-4">
									<div
										ref={componentRef as unknown as LegacyRef<HTMLDivElement>}
										className="p-2"
									>
										<Card className="flex w-full flex-col items-center justify-center">
											<CardHeader className="flex flex-col items-center justify-center">
												<Image
													src="/icons/icon-512x512.png"
													alt="Logo"
													height={60}
													width={60}
												/>
												<p className="text-center">
													Insira o código abaixo para acessar a internet
												</p>
											</CardHeader>
											<CardContent>
												<p className="text-center text-sm">
													Rede: <b>Visitantes - CSI</b>
												</p>
												<p className="my-1 text-center text-sm">
													Voucher: <b className="text-2xl">{vouchers.cod}</b>
												</p>
											</CardContent>
											<CardFooter>
												<p className="text-center text-xs">{dataAtual}</p>
											</CardFooter>
										</Card>
									</div>

									<div className="-mb-4 mt-3 space-y-2">
										<ReactToPrint
											trigger={() => (
												<Button
													variant={'secondary'}
													className="w-full hover:opacity-60"
												>
													Imprimir
												</Button>
											)}
											content={() => componentRef.current || null}
										/>
										<Button
											variant={'outline'}
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
									variant={'outline'}
								>
									Gerar
								</Button>
							)}
					</CardContent>
				</Card>
			</div>
		</>
	)
}
