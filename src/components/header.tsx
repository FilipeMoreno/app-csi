'use client'

import Link from 'next/link'
import { Suspense } from 'react'
import { ChevronLeft, MoonIcon, SunIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Logo } from './logo'
import { UserNav } from './user-nav'
import { Skeleton } from './ui/skeleton'
import { Notifications } from './Notifications'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'
import {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenu,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'

export function Header() {
  const router = useRouter()
  const { setTheme } = useTheme()

  return (
    <div className="flex h-16 items-center justify-between px-6">
      <div className="lg:hidden">
        <button
          id="sidebar-toggle"
          aria-label="Menu Lateral"
          className=" text-gray-500 hover:text-white focus:text-white focus:outline-none"
        ></button>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden lg:flex">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <ChevronLeft
                  className="cursor-pointer text-zinc-300"
                  onClick={() => router.back()}
                />
              </TooltipTrigger>
              <TooltipContent className="bg-zinc-900 text-primary">
                <p>Voltar</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <Link aria-label="Logo" href="/">
          <Logo className="h-12 w-12" />
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Alterar tema</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => setTheme('light')}
              className="cursor-pointer"
            >
              <SunIcon className="mr-2 h-4 w-4" />
              Claro
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setTheme('dark')}
              className="cursor-pointer"
            >
              <MoonIcon className="mr-2 h-4 w-4" />
              Escuro
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Notifications />
        <Suspense fallback={<Skeleton className="h-8 w-8 rounded-full" />}>
          <UserNav />
        </Suspense>
      </div>
    </div>
  )
}
