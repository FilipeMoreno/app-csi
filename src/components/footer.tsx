import { HeartFilledIcon } from '@radix-ui/react-icons'
import { Code2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bottom-0 left-0 right-0 border-t p-4 text-center text-primary">
      <div className="flex flex-col text-sm">
        <div className="flex flex-row items-center justify-center">
          <Image
            alt="Logo"
            width={20}
            height={20}
            src={'/icons/icon-512x512.png'}
            className="mr-1"
          />

          <span className="font-medium text-tertiary">
            Colégio Santo Inácio
          </span>
        </div>
        <div className="flex flex-row items-center justify-center text-xs">
          <Code2 className="mr-1 h-4 w-4 text-zinc-600" />
          <span className="text-zinc-600">Developed with</span>
          <HeartFilledIcon className="mx-1 h-4 w-4 text-tertiary" />
          <span className="text-zinc-600">
            by{' '}
            <Link
              className="hover:text-tertiary"
              href="https://filipemoreno.com.br"
            >
              Filipe Moreno
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
