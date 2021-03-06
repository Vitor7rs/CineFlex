import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import TitlePage from "../../Components/TitlePage/Index"
import { getSessions } from "../../Services/CineflexApi";
import Days from "./Days/Index";
import Poster from "../../Components/Poster/Index";
import styled from "styled-components";

export default function Sessions(){
    const [movieSessions, setMovieSessions] = useState(null);
    const {movieID} = useParams();

    useEffect(()=>{
        const promisse = getSessions(movieID);
        promisse.then(response=>setMovieSessions(response.data))
    }, [movieID])

    if(movieSessions===null){
        return('Loading');
    }
    console.log(movieSessions)
    return(
        <main>
            <TitlePage color="#293845" title="Selecione a Sessão" fontWeight={400} top={35} bot={35} />
            <SessionsContainer>
                <SessionsSubContainer>
                    {
                        movieSessions.days.map((day, index)=>(
                            <Days {...day} key={index} />
                            ))
                    }
                </SessionsSubContainer>
            </SessionsContainer>
            <Poster title={movieSessions.title} posterURL={movieSessions.posterURL} />
        </main>
    )
}

const SessionsContainer = styled.section`
    display: flex;
    justify-content: center;
`

const SessionsSubContainer = styled.div`
    width: 375px;
`