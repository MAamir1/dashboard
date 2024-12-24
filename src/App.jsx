import '@mantine/core/styles.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Layout from './layouts/Layout';
import Posts from './pages/Posts';
import Users from './pages/Users';
import Categories from './pages/Categories'

// import './App.css'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index  element={<Home />}/>
          <Route path='posts'  element={<Posts />}/>
          <Route path='users'  element={<Users />}/>
          <Route path='categories'  element={<Categories />}/>
        </Route>
      </Routes>

    </>
  );
}

export default App
