'use client'

import { useToast } from '@/components/ui/use-toast'

import CustomQrScanner from '@/components/CustomQrScanner'
import { useEffect, useState } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import QRCode from 'react-qr-code'

export default function CarteirinhasScannerAcoes() {
  const { toast } = useToast()

  const [qrcode, setQrCode] = useState<string | null>(null)
  const [status, setStatus] = useState('')

  function handleChangeStatus() {
    toast({
      title: `Status de ${QRCode} alterado!`,
      description: `O status foi alterado para ${status} com sucesso!`,
      variant: 'success',
    })

    setQrCode(null)
  }

  useEffect(() => {
    if (qrcode) {
      toast({
        title: 'Carteirinha encontrada!',
        description: `O código ${qrcode} foi encontrado`,
        variant: 'success',
      })
    }
  }, [qrcode])

  return (
    <>
      <div className="mb-4 flex flex-col">
        <h1 className="text-3xl font-bold">Scanner de ações rápidas</h1>
        <p>Aponte a câmera para o QR Code para visualizar as ações rápidas</p>
      </div>
      <div className="flex flex-wrap gap-8">
        <div className="h-96 w-full max-w-sm rounded-xl bg-secondary p-4">
          <CustomQrScanner
            config={{
              fps: 10,
              aspectRatio: 1,
              qrbox: { width: 250, height: 250 },
            }}
            onScan={(scannedCode) => setQrCode(scannedCode)}
          />
          {qrcode && (
            <AlertDialog open>
              <AlertDialogTrigger asChild>
                <Button variant={'outline'}>
                  <Plus className="mr-2 h-4 w-4" /> Status
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Adicionar status</AlertDialogTitle>
                  <AlertDialogDescription>
                    Selecione o status que deseja adicionar
                    <Select onValueChange={setStatus}>
                      <SelectTrigger className="mt-2 w-full">
                        <SelectValue placeholder="Selecione o status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Entregue">Entregue</SelectItem>
                        <SelectItem value="Produzida">Produzida</SelectItem>
                        <SelectItem value="Pagamento recebido">
                          Pagamento recebido
                        </SelectItem>
                        <SelectItem value="Aprovada">Aprovada</SelectItem>
                      </SelectContent>
                    </Select>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel onClick={() => setQrCode(null)}>
                    Cancelar
                  </AlertDialogCancel>
                  <AlertDialogAction onClick={handleChangeStatus}>
                    Continuar
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </div>
      </div>
    </>
  )
}
