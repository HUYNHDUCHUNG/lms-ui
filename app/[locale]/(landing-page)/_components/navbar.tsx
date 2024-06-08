import { Button } from '@/components/ui/button'
import Logo from './logo'
import Menu from './menu'
import SwitchLanguage from './switch-language'

export const Navbar = () => {
  return (
    <div className='w-full px-32 flex justify-between fixed z-10'>
      <Logo />
      <Menu />
      <div className='flex gap-5 justify-center items-center'>
        <SwitchLanguage />
        <Button className='bg-amber-600 px-6' size="sm">Login</Button>
      </div>
    </div>
  )
}

export default Navbar
