import React, {useState, useEffect} from 'react'
import axios from 'axios'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const EditAlbum = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const {enqueueSnackbar} = useSnackbar();
  useEffect(() => {
    setLoading(true);
    axios 
      .get(`http://localhost:5555/album/${id}`)
      .then((response) => {
        setTitle(response.data.title)
        setArtist(response.data.artist)
        setReleaseYear(response.data.releaseYear)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        alert('Error has occured, please check console for more information')
        console.log(error)
      })
  }, [])
  const handleEditAlbum = () => {
    const data = {
      title,
      artist,
      releaseYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/album/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Album edited successfully', {variant: 'success'})
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', {variant: 'error'})
        console.log(error)
      })
  }


  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Album</h1>
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
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditAlbum}>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditAlbum