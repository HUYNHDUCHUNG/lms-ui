"use client"
import { Button } from '@/components/ui/button'
import Logo from './logo'
import Menu from './menu'
import SwitchLanguage from './switch-language'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '../../../../components/theme-toggle'

export const Navbar = () => {
  const [background, setBackground] = useState('bg-transparent');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBackground('bg-white shadow-sm text-black');
      } else {
        setBackground('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={cn(
      'w-full px-32 flex justify-between fixed z-10 transition text-primary-foreground',
      background 
    )}>
      <Logo />
      <Menu />
      <div className='flex gap-5 justify-center items-center'>
        <SwitchLanguage />
        <ThemeToggle/>
        <Button className=' bg-gradient-to-r from-cyan-500 to-blue-500 px-6' size="sm">Login</Button>
      </div>
    </div>
  )
}

export default Navbar
