'use client'

import Link from 'next/link'
import { Logo } from './logo'
import { Separator } from './ui/separator'

import { Button } from './ui/button'
import { UserNav } from './user-nav'
import { Suspense } from 'react'
import { Skeleton } from './ui/skeleton'
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'

export function Header({
  toggleSidebar,
  showSidebar,
}: {
  toggleSidebar: () => void
  showSidebar: boolean
}) {
  return (
    <div className="flex h-16 items-center justify-between px-6">
      <div className="lg:hidden">
        <button
          id="sidebar-toggle"
          aria-label="Menu Lateral"
          onClick={toggleSidebar}
          className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
        >
          {showSidebar ? (
            <Cross1Icon className="h-6 w-6 text-gray-500" />
          ) : (
            <HamburgerMenuIcon className="h-6 w-6 text-gray-500" />
          )}
        </button>
      </div>
      <div className="flex items-center gap-4">
        <Link aria-label="Logo" href="/">
          <Logo className="h-8 w-8" />
        </Link>

        {/* <Separator orientation="vertical" className="h-5" /> */}

        {/* <nav className="flex items-center space-x-6">
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/events">Events</NavLink>
          <NavLink href="/monitoring">Monitoring</NavLink>
          <NavLink href="/settings">Settings</NavLink>
        </nav> */}
      </div>

      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm">
          Feedback
        </Button>

        <Separator orientation="vertical" className="h-5" />

        {/* <nav className="flex items-center space-x-6">
          <NavLink className="text-xs font-normal" href="/examples/dashboard">
            Changelog
          </NavLink>
          <NavLink className="text-xs font-normal" href="/examples/dashboard">
            Help
          </NavLink>
          <NavLink className="text-xs font-normal" href="/examples/dashboard">
            Docs
          </NavLink>
        </nav> */}

        {/* <Separator orientation="vertical" className="h-5" /> */}

        <Suspense fallback={<Skeleton className="h-8 w-8 rounded-full" />}>
          <UserNav />
        </Suspense>
      </div>
    </div>
  )
}
