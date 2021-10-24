import NavBar from "../components/NavBar";
import {useContext, useEffect, useState} from "react"
import { Link } from "react-router-dom";
import PokemonFav from '../components/PokemonFav';
import api from '../resources/api';
import UserContext from "../Contexts/context"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const BackLink = styled.div`
    margin: 1rem;
`

function Favourites () {

    const [lista, setLista] = useState([])
    const {user} = useContext(UserContext)

    useEffect(()=>{
        async function getPokemons(){
            api.get(`/users/${user.username}/`)
            .then((resp)=>{
                console.log(resp.data.pokemons)
                setLista(resp.data.pokemons)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        getPokemons()
    }, [user.username])
    
    return (
        <div>
            <NavBar/>
            <Container>
                <BackLink>
                    <Link to="/">Voltar</Link>
                </BackLink>
            </Container>
            <Container>
            {lista.map((e)=><PokemonFav name={e.name} kind={e.kind} imgUrl={e.image_url}/>)}
            </Container>
        </div>
    )
}

export default Favourites;