import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx'
import CreateAlbum from "./pages/CreateAlbum.jsx";
import EditAlbum from "./pages/EditAlbum.jsx";
import DeleteAlbum from "./pages/DeleteAlbum.jsx";
import ShowAlbum from "./pages/ShowAlbum.jsx";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/album/create' element={<CreateAlbum />} />
      <Route path='/album/details/:id' element={<ShowAlbum />} />
      <Route path='/album/edit/:id' element={<EditAlbum />} />
      <Route path='/album/delete/:id' element={<DeleteAlbum />} />
    </Routes>
  )
}

export default App;