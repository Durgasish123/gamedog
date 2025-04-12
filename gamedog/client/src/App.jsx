import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchGames from './pages/SearchGames';
import Landing from './pages/Landing';
import Updates from './pages/Updates';
import Download from './pages/Download';

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Landing/>}/>
          <Route path='/search' element={<SearchGames/>}/>
          <Route path='/updates' element={<Updates/>}/>
          <Route path='/download' element={<Download/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
