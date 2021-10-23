import NavBar from "../components/NavBar";
import UserContext from "../Contexts/context"
import { useContext, useState } from "react"
import api from "../resources/api"
import { Redirect } from "react-router"
import { Link } from "react-router-dom"

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
            <form onSubmit={handleSubmit}>
                <label>Crie seu usuário</label><br/>
                <input value={name} onChange={(event)=>{setName(event.target.value)}}/><br/>
                <button>Cadastrar</button>
            </form>
            <Link to="/login">Fazer Login</Link>
        </div>
    )
}

export default Register;