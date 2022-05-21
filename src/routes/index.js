import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from '../pages/home'
import Blog from '../pages/blog'
import PostPage from '../pages/blog/post'
import Login from '../pages/login'

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="blog" element={<Blog />}>
          <Route path=":id" element={<PostPage />} />
        </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default AppRoutes