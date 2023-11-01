import { LogOut } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function SidebarProfile() {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
      <figure className="relative h-10 w-10 overflow-hidden rounded-full">
        <Image
          src="https://github.com/lui7henrique.png"
          className=""
          alt="profile"
          fill
        />
      </figure>

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-foreground">
          Luiz Henrique
        </span>

        <span className="truncate text-sm text-muted-foreground">
          7henrique18@gmail.com
        </span>
      </div>

      <Link href="/" className="ml-auto rounded-md p-2 hover:bg-muted">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Link>
    </div>
  )
}
