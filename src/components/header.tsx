'use client'

import Link from 'next/link'
import { Suspense } from 'react'
import { ChevronLeft } from 'lucide-react'
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

export function Header() {
  const router = useRouter()

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
        <Notifications />
        <Suspense fallback={<Skeleton className="h-8 w-8 rounded-full" />}>
          <UserNav />
        </Suspense>
      </div>
    </div>
  )
}
