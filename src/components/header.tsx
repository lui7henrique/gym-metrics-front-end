'use client'

import { Book, Dumbbell, Home, User2, Utensils } from 'lucide-react'
import Link from 'next/link'

import { ModeToggle } from './mode-toggle'
import { Separator } from './ui/separator'
import { HeaderLink, HeaderLinkProps } from './header-link'
import { Button } from './ui/button'

const links: HeaderLinkProps[] = [
  {
    href: '/',
    label: 'Início',
    icon: Home,
  },
  {
    href: '/workout',
    label: 'Treino',
    icon: Dumbbell,
  },
  {
    href: '/diet',
    label: 'Dieta',
    icon: Utensils,
  },
  {
    href: '/blog',
    label: 'Blog',
    icon: Book,
  },
]

export const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="mx-auto flex w-full max-w-article items-center justify-between p-4">
        <div className="flex items-center gap-6">
          <div className="rounded-md bg-emerald-600 px-3 py-1 text-lg font-semibold italic text-white">
            💪 Untitled
          </div>

          <nav className="flex items-center gap-4">
            {links.map((link, index) => {
              const isLastLink = index === links.length - 1

              return (
                <div className="flex space-x-2" key={link.label}>
                  <HeaderLink {...link} />

                  {!isLastLink && (
                    <Separator
                      orientation="vertical"
                      style={{ height: '3ex' }}
                    />
                  )}
                </div>
              )
            })}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" asChild>
            <Link href="/login" className="flex items-center">
              <User2 width={16} height={16} className="mr-2" />
              Acessar
            </Link>
          </Button>

          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
