import { Container, Nav, Navbar, NavLink } from "react-bootstrap";

const BASE_URL = "/website"

export function NavbarMenu() {
    return (
    <>
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/">Kresqle</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href={`${BASE_URL}/about`}>About</Nav.Link>
                    <Nav.Link href={`${BASE_URL}/tools`}>Tools</Nav.Link>
                    <Nav.Link href={`${BASE_URL}/contact`}>Contact</Nav.Link>
                </Nav>
            </Container>
      </Navbar>
    </>
    )
}