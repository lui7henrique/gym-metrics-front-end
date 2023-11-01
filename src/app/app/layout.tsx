import { Metadata } from 'next'
import { Sidebar } from './components/sidebar'

export const metadata: Metadata = {
  title: 'Gym',
  description: '',
}

interface LoginLayoutProps {
  children: React.ReactNode
}

export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="p-6">{children}</div>
    </div>
  )
}
