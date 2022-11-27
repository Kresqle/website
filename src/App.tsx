import { Container } from "react-bootstrap"
import { Routes, Route, Navigate } from "react-router-dom"
import { Error404 } from "./components/404"
import { Article } from "./components/Article"
import { Home } from "./components/Home"
import { NavbarMenu } from "./components/Navbar"
import { UnderDevelopment } from "./components/UnderDevelopment"
import "./styles/global.css"

const BASE_URL = "/website"

function App() {
  return (
  <>
  <NavbarMenu />
  <Container fluid className="my-4">
    <Routes>
      <Route path={`${BASE_URL}/`} element={<UnderDevelopment />} />
      <Route path={`${BASE_URL}/404`} element={<Error404 />} />
      <Route path={`${BASE_URL}/about`} element={<UnderDevelopment />} />
      <Route path={`${BASE_URL}/tools`} element={<UnderDevelopment />} />
      <Route path={`${BASE_URL}/contact`} element={<UnderDevelopment />} />
      <Route path="*" element={<Navigate to={`${BASE_URL}/404`} />} />
    </Routes>
  </Container>
  </>
  )
}

export default App
