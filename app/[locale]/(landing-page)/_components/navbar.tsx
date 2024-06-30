"use client"
import { Button } from '@/components/ui/button'
import Logo from './logo'
import Menu from './menu'
import SwitchLanguage from './switch-language'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '../../../../components/theme-toggle'
import { useTheme } from 'next-themes'
import MobileMenu from '@/components/mobile-menu'

export const Navbar = () => {
  const [background, setBackground] = useState('bg-transparent');

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 50) {
  //       setBackground('bg-white shadow-sm text-black');
  //     } else {
  //       setBackground('bg-white');
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
    
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  const {theme} = useTheme()
  return (
    <div className={cn(
      ' px-4 sm:px-32  w-full flex justify-between fixed z-20 transition text-foreground bg-white shadow-lg dark:bg-black',
      // theme === 'dark' && 'bg-black text-white shadow-lg',
    )}>
      <Logo />
      <Menu />
      <div className='flex gap-5 justify-center items-center'>
        <div className='hidden sm:flex gap-5 justify-center items-center'>
          <SwitchLanguage />
          <ThemeToggle/>
        </div>
      
        <Button className=' bg-gradient-to-r from-cyan-500 to-blue-500 px-6 text-white' size="sm">Login</Button>
        <MobileMenu/>
      </div>
      
    </div>
  )
}

export default Navbar
