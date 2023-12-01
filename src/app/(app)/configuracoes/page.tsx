'use client'

import { Button } from '@/components/ui/button'

import { SelectSeparator } from '@/components/ui/select'
import { Separator } from '@radix-ui/react-dropdown-menu'

import { Check, Computer, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ConfiguracoesHome() {
  const { setTheme, theme } = useTheme()
  const [getAtualTheme, setAtualTheme] = useState('')

  useEffect(() => {
    if (theme === 'system') {
      setAtualTheme('system')
    }
    if (theme === 'light') {
      setAtualTheme('light')
    }
    if (theme === 'dark') {
      setAtualTheme('dark')
    }
  }, [theme])

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Configurações</h3>
        <p className="text-sm text-muted-foreground">
          Customize suas configurações de usuário.
        </p>
      </div>
      <SelectSeparator />
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Aparência</h3>
          <p className="text-sm text-muted-foreground">
            Alterne entre os temas claro e escuro.
          </p>

          <div>
            <div className="my-4 flex flex-row items-center space-x-4">
              <div className="items-center rounded-md border-2 border-muted bg-muted p-1 hover:border-accent">
                <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
                  <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                    <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
                    <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                    <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                    <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                    <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                    <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                  </div>
                </div>
                {(getAtualTheme === 'light' && (
                  <Button
                    onClick={() => setTheme('light')}
                    className="mt-2 w-full p-4"
                    variant={'secondary'}
                    disabled
                  >
                    <Check className="mr-2 h-4 w-4" />
                    Claro
                  </Button>
                )) || (
                  <Button
                    onClick={() => setTheme('light')}
                    className="mt-2 w-full p-4"
                    variant={'outline'}
                  >
                    <Sun className="mr-2 h-4 w-4" />
                    Claro
                  </Button>
                )}
              </div>
              <div className="items-center rounded-md border-2 border-muted bg-muted p-1 hover:bg-accent hover:text-accent-foreground">
                <div className="space-y-2 rounded-sm bg-zinc-900 p-2">
                  <div className="space-y-2 rounded-md bg-zinc-800 p-2 shadow-sm">
                    <div className="h-2 w-[80px] rounded-lg bg-zinc-400" />
                    <div className="h-2 w-[100px] rounded-lg bg-zinc-400" />
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-zinc-800 p-2 shadow-sm">
                    <div className="h-4 w-4 rounded-full bg-zinc-400" />
                    <div className="h-2 w-[100px] rounded-lg bg-zinc-400" />
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-zinc-800 p-2 shadow-sm">
                    <div className="h-4 w-4 rounded-full bg-zinc-400" />
                    <div className="h-2 w-[100px] rounded-lg bg-zinc-400" />
                  </div>
                </div>
                {(getAtualTheme === 'dark' && (
                  <Button
                    onClick={() => setTheme('dark')}
                    className="mt-2 w-full p-4"
                    variant={'secondary'}
                    disabled
                  >
                    <Check className="mr-2 h-4 w-4" />
                    Escuro
                  </Button>
                )) || (
                  <Button
                    onClick={() => setTheme('dark')}
                    className="mt-2 w-full p-4"
                    variant={'outline'}
                  >
                    <Moon className="mr-2 h-4 w-4" />
                    Escuro
                  </Button>
                )}
              </div>
              <div className="items-center rounded-md border-2 border-muted bg-muted p-1 hover:bg-accent hover:text-accent-foreground">
                <div className="space-y-2 rounded-sm bg-zinc-900 p-2">
                  <div className="space-y-2 rounded-md bg-[#ecedef] p-2 shadow-sm">
                    <div className="h-2 w-[80px] rounded-lg bg-zinc-400" />
                    <div className="h-2 w-[100px] rounded-lg bg-zinc-400" />
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-zinc-800 p-2 shadow-sm">
                    <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                    <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-[#ecedef] p-2 shadow-sm">
                    <div className="h-4 w-4 rounded-full bg-zinc-400" />
                    <div className="h-2 w-[100px] rounded-lg bg-zinc-400" />
                  </div>
                </div>
                {(getAtualTheme === 'system' && (
                  <Button
                    onClick={() => setTheme('system')}
                    className="mt-2 w-full p-4"
                    variant={'secondary'}
                    disabled
                  >
                    <Check className="mr-2 h-4 w-4" />
                    Sistema
                  </Button>
                )) || (
                  <Button
                    onClick={() => setTheme('system')}
                    className="mt-2 w-full p-4"
                    variant={'outline'}
                  >
                    <Computer className="mr-2 h-4 w-4" />
                    Sistema
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separator />
    </div>
  )
}
