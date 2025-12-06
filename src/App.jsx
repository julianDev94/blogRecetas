import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import Menu from './components/common/Menu'
import Footer from './components/common/Footer'
import Login from './components/pages/Login'
import './App.css'
function App() {

  return (
    <>
      <Menu></Menu>
      <Login></Login>
      <Footer></Footer>
    </>
  )
}

export default App
