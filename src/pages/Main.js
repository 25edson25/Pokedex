import NavBar from '../components/NavBar'
import Pokemon from '../components/Pokemon';
import api from '../resources/api';
import {useContext, useEffect, useState} from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom";
import UserContext from "../Contexts/context"

document.body.style = 'background: #80BEFF;';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const Button = styled.button`
    text-align: center;
    background-color: #DD2525;
    padding: 1rem;
    margin: 0.5rem;
    border-radius: 1rem;

`
const PageController = styled.div`
    text-align: center;
` 

function Main() {
    const {user, setUser} = useContext(UserContext)
    const [lista, setLista] = useState([])
    const [page, setPage] = useState(1)

    useEffect(()=>{
        async function getPokemons(page){
            api.get(`/pokemons?page=${page}`)
            .then((resp)=>{
                setLista(Object.values(resp.data.data))
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        getPokemons(page)
    }, [page])
    
    function nextPage(event) {
        event.preventDefault()
        if (page === 24) {
            setPage(1)
        }
        else { 
            setPage(page+1)
        }
    }
    function previousPage(event) {
        event.preventDefault()
        if (page === 1) {
            console.log("condiçao verdadeira")
            setPage(24)
        }
        else { 
            setPage(page-1)
        }
    }   
    console.log(user.name)

   return lista[page]? (
    <div>
        <NavBar/>
        <Container>
            <PageController>
                <Button onClick={previousPage}>Página Anterior</Button>
                <span>{page}/24</span>
                <Button onClick={nextPage}>Proxima Página</Button><br/>
                <Link to="favourites">Favoritos</Link>
            </PageController>
        </Container>
        <Container>
            {lista.map((e)=><Pokemon username={user.username} name={e.name} kind={e.kind} imgUrl={e.image_url}/>)}
        </Container>
    </div>
   ):
    (<h1>Carregando</h1>)
}

export default Main;