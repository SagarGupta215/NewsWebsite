import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import { Article } from './pages/Article'
import { useState } from 'react'

function App() {
  const [articleContent, setArticleContent] = useState(null);
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home setArticleContent={setArticleContent}/>} />
          <Route path='article' element={<Article articleContent={articleContent}/>} />
        </Route>

      </Routes>
    </>
  )
}

export default App
