import { HelpCircle, LayoutDashboard, BookOpen, PieChart, Settings, Users } from 'lucide-react'
import Link from "next/link"

interface SidebarItemProps {
  icon: React.ReactNode
  label: string
  isActive?: boolean
}

function SidebarItem({ icon, label, isActive }: SidebarItemProps) {
  return (
    <Link
      href="#"
      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${isActive ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
    >
      {icon}
      {label}
    </Link>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-60 border-r p-4 space-y-4">
        <div className="mb-6">
          <h1 className="text-xl font-bold">Quyl.</h1>
        </div>
        <nav className="space-y-1">
          <SidebarItem icon={<LayoutDashboard className="w-5 h-5" />} label="Dashboard" />
          <SidebarItem icon={<Users className="w-5 h-5" />} label="Students" isActive />
          <SidebarItem icon={<BookOpen className="w-5 h-5" />} label="Chapter" />
          <SidebarItem icon={<HelpCircle className="w-5 h-5" />} label="Help" />
          <SidebarItem icon={<PieChart className="w-5 h-5" />} label="Reports" />
          <SidebarItem icon={<Settings className="w-5 h-5" />} label="Settings" />
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}

