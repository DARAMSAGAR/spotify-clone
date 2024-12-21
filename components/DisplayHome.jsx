
import Navbar from './Navbar.jsx'
import { albumsData } from '../assets/assets.js'
import AlbumItem from './AlbumItem.jsx'
import { songsData } from '../assets/assets.js'
import SongsItem from './SongsItem.jsx'

const DisplayHome = () => {
  return (
    <>
      <Navbar/>
      <div className='mb-4'>
      <div className='my-5 font-bold text-2xl'>
        <h1 className='my-5 font-bold text-2xl '>Featured charts</h1>
        <div className='flex overflow-auto'>
        {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
        </div>
      </div>
      </div>
      <div className='mb-4'>
      <div className='my-5 font-bold text-2xl'>
        <h1 className='my-5 font-bold text-2xl '>Todays biggest hits</h1>
        <div className='flex overflow-auto'>
        {songsData.map((item,index)=>(<SongsItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
        </div>
      </div>
      </div>
    </>
  )
}

export default DisplayHome
