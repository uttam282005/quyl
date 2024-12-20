import { Bell, HelpCircle, Search } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  console.log("Header")
  return (
    <div className="border-b p-4">
      <div className="flex items-center justify-between">
        <div className="relative w-96">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search your course" className="pl-8" />
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <HelpCircle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
              4
            </span>
          </Button>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Adeline H. Dancy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

