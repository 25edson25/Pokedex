import styled from "styled-components"

const Nav = styled.div`
    background: blue;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.3rem;
`
const Title = styled.h1`
    color: #FFCC30;
    margin: 0;
    display: inline-flex;
    flex: auto;
    justify-content: space-between;
    font-weight: normal;

`
const Subtitle = styled.h2 `
    color: #FFCC30;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    font-weight: normal;
`

function NavBar() {
    return (
        <Nav>
            <Title>Pokedex</Title>
            <Subtitle>Cadastre-se</Subtitle>
            <Subtitle>Login</Subtitle>
        </Nav>
    )
}

export default NavBar;