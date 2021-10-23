import styled from "styled-components"

const Nav = styled.div`
    background: blue;
    padding: 0.5rem;
    font-size: 1.3rem;
`
const Title = styled.h1`
    color: #FFCC30;
    margin: 0;
    text-align: center;
    font-weight: normal;

`

function NavBar() {

    return (
        <Nav>
            <Title>Pokedex</Title>
        </Nav>
    )
}

export default NavBar;