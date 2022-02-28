import { Container,IconButton } from "./style";
import {MdOutlineVisibilityOff} from "react-icons/md"
import {MdOutlineVisibility} from "react-icons/md"
import { useState } from "react";


export default function Input({
  label,
  isSelect,
  isModalSelect,
  name,
  errors,
  register,
  isPassword,
  ...rest
}) {
  
  const [visible,setVisible] = useState(false)
  
  return (
    <Container>
      <label>
        {label} {!!errors && <span>*{errors}</span>}{" "}
      </label>
      <div>
        {isSelect ? (
          <select {...register(name)} name={name} {...rest}>
            <option>Primeiro módulo (Introdução ao Frontend)</option>
            <option>Segundo módulo (Frontend Avançado)</option>
            <option>Terceiro módulo (Introdução ao Backend)</option>
            <option>Quarto módulo (Backend Avançado)</option>
          </select>
        ) : isModalSelect ? (
          <select name={name} {...register(name)} {...rest}>
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </select>
        ) : !!register ? (
          isPassword ? (
            <input {...register(name)} name={name} type={  visible ? "text" : "password"  } {...rest} />
          ) :(
            <input {...register(name)} name={name} {...rest} />
          )
        ) : (//para evitar erro caso o register não tenha sido declarado
          <input name={name} type={visible ? "text" : "password"} {...rest} />
        )}
        {isPassword &&(
          <IconButton onClick={()=>{
            setVisible(!visible)}
          }>
            {visible ? <MdOutlineVisibility/> : <MdOutlineVisibilityOff/> }
            
          </IconButton>
        ) }
      </div>
    </Container>
  );
}
