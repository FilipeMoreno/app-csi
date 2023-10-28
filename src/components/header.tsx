'use client'

import Link from 'next/link'
import { Logo } from './logo'
import { Separator } from './ui/separator'

import { Button } from './ui/button'
import { UserNav } from './user-nav'
import { Suspense, useState } from 'react'
import { Skeleton } from './ui/skeleton'

export function Header({ toggleSidebar }: { toggleSidebar: () => void }) {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className="flex h-16 items-center justify-between border-b px-6">
      <div className="lg:hidden">
        <button
          onClick={toggleSidebar}
          className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {showSidebar ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 6H5v2h14V6zm0 5H5v2h14v-2zm0 5H5v2h14v-2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            )}
          </svg>
        </button>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/">
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
