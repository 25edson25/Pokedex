import NavBar from "../components/NavBar";
import {Redirect} from "react-router";
import { Link } from "react-router-dom";
import { useContext, useState } from "react"
import UserContext from "../Contexts/context"
import api from "../resources/api"

function Login () {

    const {user, setUser} = useContext(UserContext)
    const [name, setName] = useState("")

    function handleSubmit(event){
        event.preventDefault()

        async function login(){
            api.get(`/users/${name}`)
            .then((resp)=>{
                console.log(resp.data.user)
                setUser(resp.data.user)
            })
            .catch((err)=>{
                alert(err)
            })
        }
        login()
    }

    if (user) return <Redirect to="/"/>
    else return (
        <div>
            <NavBar/>
            <form onSubmit={handleSubmit}>
                <label>Insira seu nome de Usuário</label><br/>
                <input value={name} onChange={(event)=>{setName(event.target.value)}}/><br/>
                <button>Login</button>
            </form>
            <Link to="/register">Cadastre-se</Link>
        </div>
    )
}

export default Login;