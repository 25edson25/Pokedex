import NavBar from "../components/NavBar";
import { useContext, useState } from "react"
import UserContext from "../Contexts/context"
import { Link } from "react-router-dom";
import Pokemon from '../components/Pokemon';

function Favourites () {

    const {user, setUser} = useContext(UserContext)
    const lista = useState([])

    return (
        <div>
            <NavBar/>
            <Link to="/">Voltar</Link>
        </div>
    )

}

export default Favourites;