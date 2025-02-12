import './App.css'
import IndexPage from './pages/IndexPage.jsx';
import {Routes, Route} from "react-router-dom"
import LoginPage from './pages/loginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import Layout from './Layout.jsx';

function App() {
  

  return (

    <Routes>

      <Route path="/" element={<Layout/>}>
        <Route index element={<IndexPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
      </Route>
      
    </Routes>

  )
}

export default App
