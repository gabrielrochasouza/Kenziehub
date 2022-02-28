import Button from "../Button";
import Input from "../Input";
import { DarkScreen, ModalContainer, ModalTitle } from "./style";

import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import api from "../../Services";
import { toast } from "react-toastify";



export default function Modal({ setShowModal, title,tasks,setTasks }) {
  
  const schema = yup.object().shape({
      title:yup.string().required("Insira um nome")
  })
  
  const { register, handleSubmit,formState:{errors} } = useForm({
      resolver:yupResolver(schema)
  });

  const createTech = (data)=>{
      const token = localStorage.getItem("@Kenziehub")
      api.post("/users/techs",data,{headers:{Authorization:`Bearer ${token}`}})
      .then(res=>{
        toast.success("Novo card criado com sucesso!")
        setTasks([...tasks, res.data ])  
        setShowModal(false)
        })
      .catch(err=>toast.error("Deve haver uma combinação única de título e status"))
  }


  return (
    <DarkScreen>
      <ModalTitle>
        <h4>{title}</h4>
        <p onClick={() => setShowModal(false)}>X</p>
      </ModalTitle>
      <ModalContainer onSubmit={handleSubmit(createTech)}>
        <Input 
          label={"Título"} 
          placeholder={"Título"} 
          register={register}
          name={"title"} 
          errors={errors.name?.message}
        />
        <Input
          label={"Selecionar Status"}
          isModalSelect
          placeholder={"Selecionar status"}
          register={register}
          name={"status"}
        />
        <Button type="submit">Cadastrar Tecnologia</Button>
      </ModalContainer>
    </DarkScreen>
  );
}
