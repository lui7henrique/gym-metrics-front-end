'use client'

import { BarChart, Cog, Dumbbell, LifeBuoy, User, Utensils } from 'lucide-react'
import { SidebarNavItem } from './sidebar-nav-item'
import { SidebarProfile } from './sidebar-profile'

export const Sidebar = () => {
  return (
    <div className="flex h-screen flex-col gap-6 border-r border-muted bg-muted/25 px-5 py-8">
      <nav className="space-y-0.5">
        <SidebarNavItem href="/app" title="Dashboard" icon={BarChart} />
        <SidebarNavItem href="/app/training" title="Treino" icon={Dumbbell} />
        <SidebarNavItem href="/app/diet" title="Dieta" icon={Utensils} />
        <SidebarNavItem href="/app/customers" title="Clientes" icon={User} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <SidebarNavItem href="/app/support" title="Suporte" icon={LifeBuoy} />

          <SidebarNavItem
            href="/app/configs"
            title="Configurações"
            icon={Cog}
          />
        </nav>

        {/* <UsedSpaceWidget /> */}
        <div className="h-px bg-muted" />

        <SidebarProfile />
      </div>
    </div>
  )
}
