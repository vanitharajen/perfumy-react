import Navbar from "../components/Navbar"
import Product from "../components/Products"
import Search from "../components/search"
import About from "../components/about"
import Footer from "../components/footer"
function App(){
    return(<div>
  <Navbar></Navbar>
  <Search></Search>
  <Product></Product>
  <About></About>
  <Footer></Footer>
  </div>)
}
export default App