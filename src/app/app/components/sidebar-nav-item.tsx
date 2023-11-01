'use client'

import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ElementType } from 'react'
import { tv } from 'tailwind-variants'

const link = tv({
  base: 'group flex items-center gap-3 rounded px-3 py-2 hover:bg-muted',
  variants: {
    active: {
      true: 'bg-muted text-foreground',
      false: 'text-muted-foreground',
    },
  },
  defaultVariants: {
    active: false,
  },
})

export interface SidebarNavItemProps {
  title: string
  icon: ElementType
  href: string
}

export function SidebarNavItem({
  title,
  icon: Icon,
  href,
}: SidebarNavItemProps) {
  const pathname = usePathname()
  const active = pathname === href

  return (
    <Link href={href} className={link({ active })}>
      <Icon className="h-5 w-5 text-muted-foreground" />
      <span className="font-medium">{title}</span>
      <ChevronDown className="ml-auto h-5 w-5" />
    </Link>
  )
}
