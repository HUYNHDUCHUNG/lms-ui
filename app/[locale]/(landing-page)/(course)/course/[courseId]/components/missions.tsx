import Image from 'next/image'

const Missions = () => {
  return (
    <div className='p-4 shadow-custom-missons rounded-xl border-2 border-[#bcd2c4]'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          <Image height={50} width={50} alt='mission' src='/icon_missions.webp' />
          <div className='flex flex-col'>
            <span>Khảo sát ứng viên</span>
            <span className='bg-slate-300 rounded-sm text-slate-700'>Survey</span>
          </div>
        </div>

        <div>
          <Image height={25} width={25} alt='mission' src='/icon_check.webp' />
        </div>
      </div>
      <div className='py-2 px-14'>
        <span className='text-[#059212]'>
          [Thu Nhập Hấp Dẫn] Tuyển Dụng Vị Trí Phát Triển Kinh Doanh Tại Đà Nẵng
        </span>
      </div>
      <div className='py-2 px-14 flex items-center gap-4 '>
        <div>
          <span>Poins</span>
          <div className='flex items-center gap-2'>
            <Image height={25} width={25} alt='mission' src='/icon_star.webp' />
            <span>40</span>
          </div>
        </div>
        <div>
          <span>Spins</span>
          <div className='flex items-center gap-2'>
            <Image height={25} width={25} alt='mission' src='/icon_star.webp' />
            <span>0</span>
          </div>
        </div>
        <div>
          <span>Opens</span>
          <div className='flex items-center gap-2'>
            <Image height={25} width={25} alt='mission' src='/icon_star.webp' />
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Missions
