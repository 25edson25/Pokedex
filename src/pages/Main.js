import NavBar from '../components/NavBar'
import Pokemon from '../components/Pokemon';
import api from '../resources/api';
import {useEffect, useState} from 'react'
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`

function Main() {

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


   return lista[page]? (
    <div>
        <NavBar/>
        <button onClick={previousPage}>Página Anterior</button>
        <button onClick={nextPage}>Proxima Página</button>
        <Container>
            {lista.map((e)=><Pokemon name={e.name} kind={e.kind} imgUrl={e.image_url}/>)}
        </Container>
    </div>
   ):
    (<h1>Carregando</h1>)
}

export default Main;