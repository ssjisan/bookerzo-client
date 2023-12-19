import { BrowserRouter } from "react-router-dom";
import MainRouter from "./Components/MainRouter";
import Theme from "./Components/Theme/index";
function App() {

  return (
    <Theme>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </Theme>
  )
}

export default App
