import React, {useState} from 'react'
import axios from 'axios'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const CreateAlbum = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();
  const handleSaveAlbum = () => {
    const data = {
      title,
      artist,
      releaseYear,
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/album', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Album created Successfully', {variant: 'success'});
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        //alert('An error occured, please check console for more information')
        enqueueSnackbar('Error', {variant: 'error'})
        console.log(error)
      })
  }


  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create Album</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Artist</label>
          <input
            type='text'
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>ReleaseYear</label>
          <input
            type='text'
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveAlbum}>
          Save
        </button>
      </div>
    </div>
  )
}

export default CreateAlbum