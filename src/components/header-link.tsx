'use client'

import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { tv } from 'tailwind-variants'

import { usePathname } from 'next/navigation'

const button = tv({
  base: 'flex items-center gap-2 font-semibold text-sm',
  variants: {
    active: {
      true: 'text-foreground',
      false: 'text-muted-foreground hover:text-foreground transition-all',
    },
  },
  defaultVariants: {
    active: false,
  },
})

export type HeaderLinkProps = {
  href: string
  label: string
  icon: LucideIcon
}

export const HeaderLink = ({ href, label, icon: Icon }: HeaderLinkProps) => {
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <Link href={href} className={button({ active: isActive })}>
      <Icon width={16} height={16} />

      {label}
    </Link>
  )
}
