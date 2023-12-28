import Header from './components/Header'
import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Blogs from "./components/Blogs";
import UserBlog from "./components/UserBlog";
import BogDetail from "./components/BlogDetail";
import AddBlog from "./components/AddBlog";
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector(state=> state.isLoggedIn);
    console.log(isLoggedIn);

  return <React.Fragment>
    <header>
      <Header></Header>
    </header>
    <main>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/myBlogs' element={<UserBlog/>}></Route>
        <Route path='/myBlogs/:id' element={<BogDetail/>}></Route>
        <Route path='/blogs/add' element={<AddBlog/>}></Route>
      </Routes>
    </main>
  </React.Fragment>
}

export default App;
