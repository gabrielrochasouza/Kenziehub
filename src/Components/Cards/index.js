import { ContainerCard } from "./style"

export default function Card({tecnologie="Not declared",level="Not declared",...rest }){

    return (
        <ContainerCard {...rest}>
            <h3>{tecnologie}</h3>
            <p>{level}</p>
        </ContainerCard>
    )
}