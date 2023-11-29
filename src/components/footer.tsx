import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bottom-0 left-0 right-0 border-t p-4 text-center text-primary">
      <div className="flex flex-col text-xs">
        <span className="text-zinc-600">© Colégio Santo Inácio</span>
        <span className="font-medium text-zinc-600">
          Development by{' '}
          <Link
            className="hover:text-[#9c2b3f] hover:underline"
            href="https://filipemoreno.com.br"
          >
            Filipe Moreno
          </Link>
        </span>
      </div>
    </footer>
  )
}
