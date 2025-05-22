import { BrowserRouter } from "react-router-dom"
import { LoginDashRoutes } from "./Router/LoginDashRoutes/LoginDashRoutes"
// import PrivateLayout from "./common/Private/PrivateLayout"
// import WindowNavbar from "./common/Private/WindowNavbar"

function App() {

  return (<BrowserRouter>
    <LoginDashRoutes />

  </BrowserRouter>)


}

export default App
