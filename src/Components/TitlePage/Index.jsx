import { TitleContainer } from "./Style";

export default function TitlePage({fontWeight, color, title, top, bot}){
    return(
        <>
            <TitleContainer fontWeight={fontWeight} color={color} top={top} bot={bot}>
                <h2>{title}</h2>
            </TitleContainer>
        </>
    )
}


