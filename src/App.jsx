import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import Menu from './components/common/Menu'
import Footer from './components/common/Footer'
import Login from './components/pages/Login'
import Inicio from './components/pages/Inicio'
import PanelAdministrador from './components/pages/PanelAdministrador'
import './App.css'
function App() {

  return (
    <>
      <Menu></Menu>
      {/* <Inicio></Inicio> */}
      {/* <Login></Login> */}
      <PanelAdministrador></PanelAdministrador>
      <Footer></Footer>
    </>
  )
}

export default App
