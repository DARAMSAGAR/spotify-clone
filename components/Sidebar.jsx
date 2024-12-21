
import {assets} from '../assets/assets'
const Sidebar = () => {
  return (
    <div className='w-[25%] flex-col p-2 h-full gap-2 text-white hidden lg:flex'>
        <div className='h-[15%] bg-[#121212] rounded flex flex-col justify-around'>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.home_icon} alt=""/>
                <p className="font-bold">Home</p>
            </div>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.search_icon} alt=""/>
                <p className="font-bold">Search</p>
            </div>
        </div>
        <div className='h-[85%] rounded bg-[#121212]'>
          <div className='flex items-center justify-between p-4'>
            <div className='flex items-center gap-3'>
              <img className='w-8' src={assets.stack_icon} alt="" />
              <p className='font-semibold'>your library</p>
            </div>
            <div className='flex items-center gap-3'>
              <img className='w-5' src={assets.arrow_icon} alt='' />
              <img className='w-5' src={assets.plus_icon} alt='' />
            </div>
            
          </div>
          <div className='bg-[#242424] flex rounded m-2 rounded flex-col items-start justify-start font-semibold gap-1 p-2'>
            <h1>Create your first playlist</h1>
            <p className='font-light'>its easy we will help you</p>
            <button className='bg-white px-4 py-1.5 text-black text-[15px] rounded-full mt-4 items-center'>create playlist</button>
          </div>
          <div className='bg-[#242424] flex rounded m-2 rounded flex-col items-start justify-start font-semibold gap-1 p-2'>
            <h1>let find podcasts to follw</h1>
            <p className='font-light'>we will keep you update on new episodes</p>
            <button className='bg-white px-4 py-1.5 text-black text-[15px] rounded-full mt-4 items-center'>Browse podcasts</button>
          </div>

        </div>
      
    </div>
  )
}

export default Sidebar
