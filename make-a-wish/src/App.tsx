import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./pages/LogIn.tsx"
import SignUp from "./pages/SignUp.tsx"
import Home from "./pages/Home.tsx"
import ForYou from "./pages/ForYou.tsx"
import Community from "./pages/Community.tsx"
import Tracking from "./pages/Tracking.tsx"
import { createGlobalStyle } from "styled-components"
import LayoutWithNavbar from "./components/LayoutWithNavbar.tsx"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/home"
            element={
              <LayoutWithNavbar>
                <Home />
              </LayoutWithNavbar>
            }
          />
          <Route
            path="/for-you"
            element={
              <LayoutWithNavbar>
                <ForYou />
              </LayoutWithNavbar>
            }
          />
          <Route
            path="/community"
            element={
              <LayoutWithNavbar>
                <Community />
              </LayoutWithNavbar>
            }
          />
          <Route
            path="/tracking"
            element={
              <LayoutWithNavbar>
                <Tracking />
              </LayoutWithNavbar>
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
