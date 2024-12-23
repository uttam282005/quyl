import { Bell, HelpCircle, Search, MessageSquare, Settings } from 'lucide-react'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { searchStudent } from '@/features/studentSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/store'



export function Header() {
  const globalState = useSelector((state: RootState) => state.globalState);
  const dispatch = useDispatch();

  const handleSearchInputChange = (query: string) => {
    dispatch(searchStudent({ globalState, query }));
  }

  return (
    <div className="p-4 pb-0 bg-[#F7F9FA]">
      <div className="flex items-center justify-between gap-[65px]">
        <div className="relative w-[300px] rounded-[12px]">
          <Search className="absolute left-[15px] top-[18px] h-[15px] w-[15px] text-muted-foreground" />
          <Input placeholder="Search your course" className="pl-10 w-[600px] h-[48px] bg-white text-[#808281] text-[14px] font-medium" onChange={(e) => handleSearchInputChange(e.target.value)} />
        </div>
        <div className='flex gap-8 items-center'>
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
            <span className="text-[18px] font-semibold text-[#05162E]  whitespace-nowrap">
              Adeline H. Dancy
            </span>
          </div >
        </div >
      </div >
    </div>
  )
}

