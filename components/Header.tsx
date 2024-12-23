import { Bell, HelpCircle, Search, MessageSquare, Settings, Menu } from 'lucide-react'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { searchStudent } from '@/features/studentSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/store'
import { useState } from 'react'

export function Header() {
  const globalState = useSelector((state: RootState) => state.globalState);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchInputChange = (query: string) => {
    dispatch(searchStudent({ globalState, query }));
  }

  return (
    <div className="bg-[#F7F9FA]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-[65px]">
        <div className="relative w-full md:w-[250px] rounded-[12px]">
          <Search className="absolute left-[15px] top-1/2 transform -translate-y-1/2 h-[15px] w-[15px] text-muted-foreground" />
          <Input
            placeholder="Search your course"
            className="pl-10 w-full md:w-[600px] h-[48px] bg-white text-[#808281] text-[14px] font-medium"
            onChange={(e) => handleSearchInputChange(e.target.value)}
          />
        </div>
        <div className='flex items-center justify-between md:justify-end w-full md:w-auto'>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6 text-[#808281]" />
          </Button>
          <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full md:w-auto absolute md:relative top-full left-0 md:top-auto md:left-auto bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none z-10`}>
            <Button variant="ghost" size="icon" className="w-6 h-6 p-0">
              <HelpCircle className="w-5 h-5 text-[#808281]" />
            </Button>
            <Button variant="ghost" size="icon" className="w-6 h-6 p-0 relative">
              <MessageSquare className="w-5 h-5 text-[#808281]" />
              <span className="absolute -right-1 -top-1 w-[11px] h-[11px] rounded-full bg-[#FF4949] border border-white" />
            </Button>
            <Button variant="ghost" size="icon" className="w-6 h-6 p-0">
              <Settings className="w-5 h-5 text-[#808281]" />
            </Button>
            <Button variant="ghost" size="icon" className="w-6 h-6 p-0 relative">
              <Bell className="w-6 h-6 text-[#808281]" />
              <span className="absolute -right-1 -top-1 w-[11px] h-[11px] rounded-full bg-[#FF4949] border border-white" />
            </Button>
            <div className="flex items-center gap-5">
              <div className="flex items-center w-[40px] h-[40px] rounded-[8px] bg-[#FFCD66] overflow-hidden">
                <Image
                  src="/katyfox.png"
                  alt="User avatar"
                  width={40}
                  height={40}
                />
              </div>
              <span className="text-[18px] font-semibold text-[#05162E] whitespace-nowrap">
                Adeline H. Dancy
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


