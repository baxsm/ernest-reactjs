import {HiOutlineMenuAlt1} from 'react-icons/hi'

const Header = () => {
  return (
    <div className="fixed z-20 top-0 inset-x-0 w-screen flex justify-between items-center text-white px-16 py-8">
        <div className="">
            <img src='/logo-white.png' alt='logo' className='h-[50px] w-auto max-w-none'/>
        </div>
        <div className="flex justify-center place-items-center gap-12">
            <h5 className='text-[0.8rem]'>Menu</h5>
            <HiOutlineMenuAlt1 className='text-[1.25rem]'/>
        </div>
    </div>
  )
}

export default Header