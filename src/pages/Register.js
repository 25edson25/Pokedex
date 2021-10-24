import NavBar from "../components/NavBar";
import UserContext from "../Contexts/context"
import { useContext, useState } from "react"
import api from "../resources/api"
import { Redirect } from "react-router"
import { Link } from "react-router-dom"
import styled from "styled-components";

document.body.style = 'background: #80BEFF;';

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3rem;
`
const Formulario = styled.div`
    text-align: center;
    background-color: #145FAE;
` 
const Item = styled.div`
    margin:1rem;
`
const Label = styled.label`
    font-size: 2rem;
    color: #FFCC30;
`
const Button = styled.button`
    text-align: center;
    background-color: #DD2525;
    padding: 1rem;
    margin: 0.5rem;
    border-radius: 1rem;

`

function Register () {

    const {user, setUser} = useContext(UserContext)
    const [name, setName] = useState("")

    function handleSubmit(event) {
        event.preventDefault()

        async function create () {
            const body = {
                username: name
            }
            api.post("/users", body)
                .then((resp)=>{
                    setUser(resp.data)
                })
                .catch((err)=>{
                    alert(err)
                })
        }
        create()
    }

    if (user) return <Redirect to="/"/>
    else return (
        <div>
            <NavBar/>
            <Container>
                <Formulario>
                    <form onSubmit={handleSubmit}>
                        <Item><Label>Crie seu usuário</Label><br/>
                        <Item><input value={name} onChange={(event)=>{setName(event.target.value)}}/><br/></Item>
                        </Item>
                        <Button>Cadastrar</Button>
                    </form>
                    <Item><Link to="/login">Fazer Login</Link></Item>
                </Formulario>
            </Container>
        </div>
    )
}

export default Register;