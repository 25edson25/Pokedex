import styled from "styled-components"
import api from '../resources/api';

const Card = styled.div`
    display:flex;
    flex-wrap: wrap;
    margin: 2rem;
    width: 10rem;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
    flex: 1;
    justify-content: center;
` 
const Informations = styled.div`
    text-align: center;
    background-color: #DD2525;
    border-radius: 5px;
    padding: 0.5rem;
    width: 100%;
`
const Img = styled.img`
    width: 13.4rem;
    background-color: white;

`
const Text = styled.p`
    font-size: 1.5rem;
    margin: 0rem;

`
const Button = styled.button`
    background-color: #FFCC30;
    border: none;
    cursor: pointer;
    margin: 0.5rem;

`
const ImgContainer = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    width: 100%;
` 

function Pokemon ({username, name, kind, imgUrl}) {

    function addFav(event) {
        event.preventDefault()
        async function add() {
            api.post(`/users/${username}/starred/${name}`)
                .then((resp)=>{
                    console.log(resp)
                })
                .catch((err)=>{
                    alert(err)
                })
        }
        add()
    }

    return (
        
        <Card>  
            <ImgContainer>      
                <Img src={imgUrl} alt="pokemon"/>
            </ImgContainer>
            <Informations>
                <Text>{name}</Text>
                {kind.replace(";"," ")}<br/>
                <Button onClick={addFav}>Favoritar</Button>
            </Informations>
        </Card>
    )
}

export default Pokemon;