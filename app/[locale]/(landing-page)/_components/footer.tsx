import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='mt-16 px-32 py-16 grid grid-cols-4 gap-3 bg-gradient-to-r from-cyan-100 to-blue-200'>
      <div>
        <div>
          <Image height={80} width={80} alt='Logo' src='/logo.svg' />
        </div>
        <div>
          <p className='line-clamp-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
      </div>
      <div className='flex flex-col'>
        <Link href='/'>About us</Link>
        <Link href='/'>Contact us</Link>
      </div>
      <div className='flex flex-col'>
        <Link href='/'>Course</Link>
        <Link href='/'>AI Appstore</Link>
        <Link href='/'>FAT1000</Link>
        <Link href='/'>Tests</Link>
      </div>
      <div className='flex flex-col'>
        <Link href='/'>Project Opening</Link>
        <Link href='/'>Hiring</Link>
        <Link href='/'>Become Intructor</Link>
      </div>
    </div>
  )
}

export default Footer
