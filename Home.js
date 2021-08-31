import { Button } from 'react-bootstrap'
import React from 'react'

const Home = ({history}) => {
    return (
        <div>
            <h2>
NIET LANGER EINDELOOS PROBEREN. ALLEEN MAAR WINNEN.</h2>
            <p> 
            Win exclusieve prijzen door gewoon te spelen wat je leuk vindt. Activeer OMEN Gaming Hub en doe dagelijks uitdagingen om game-items en zelfs echte merchandising te winnen. Start nu met winnen.4
            Ontwerp je eigen kleurenschema. Je kunt de lichteffecten nu eenvoudig synchroniseren op al je apparaten. Van ruimtebewuste lichteffecten tot interactieve effecten, de aanpassingsmogelijkheden zijn eindeloos.            </p>
            <Button onClick={() => history.goForward()}>go forward</Button>
        </div>
    )
}

export default Home
