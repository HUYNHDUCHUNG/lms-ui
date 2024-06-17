import { Button } from '@/components/ui/button'
import Image from 'next/image'

const Rewards = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <Image className='rounded-sm' height={40} width={40} alt='rewards' src='/rewards.jpeg' />
        <div className='flex flex-col'>
          <h3 className='font-semibold'>Loot box</h3>
          <span>You have 0 spins</span>
        </div>
      </div>

      <Button className='bg-amber-400'>Open</Button>
    </div>
  )
}

export default Rewards
