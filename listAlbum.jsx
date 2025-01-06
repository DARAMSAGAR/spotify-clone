import React, { useEffect, useState } from 'react'
import { url } from '../App';
const ListAlbum = () => {
    
    const [data,setData] = useState([]);

    const fetchAlbums = async () => {
        try {

            const response = await axios.get(`${url}/api/album/list`);

            iif (response.data.success) {
                setData(response.data.albums)
            }

        } catch (error) {
            toast.error('Error occur')

        }
    }

    const removeAlbum = async (id) =>{

        try{

            const response = await axios.post(`${url}/api/album/remove`,{id});

            if (response.data.success) {
                toast.success(response.data.message);
                await fetchAlbums();
            }

        } catch (error) {
            toast.error("Error occur")

        }

    }

    useEffect(()=>{
        fetchAlbums();
    },[])

  return (
    <div>
    <p> All Albums List</p>
    <br />
    <div>
        <div className='sm:grid hdden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] itms-center gap-2.5 border border-gray-30 text-sm mr-5 bg-gray-100'>
            <b>Image</b>
            <b>Name</b>
            <b>Description</b>
            <b>Album Colour</b>
            <b>Action</b>
        </div>
        {data.map((item,index)=>{
            return (
                <div key={index} className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5'>
                    <img className='w-12' src={item.image} alt="" />
                    <p>{image.name}</p>
                    <p>{image.desc}</p>
                    <input type="color" value={item.bgColour} />
                    <p onClick={()=>removeAlbum(item._id)} className='cursor-pointer'>x</p>
                </div>
            )
        })}
    
    </div>
    </div>
    )
}
export default ListAlbum