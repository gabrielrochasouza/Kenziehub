import { Container } from "./style"

export default function Button({children,isGrey, ...rest}){

    return(
        <Container isGrey={isGrey} {...rest}>
            {children}
        </Container>
    )
}