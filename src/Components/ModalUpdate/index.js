import Button from "../Button";
import Input from "../Input";
import { DarkScreen, ModalContainer, ModalTitle } from "./style";

import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import api from "../../Services";
import { toast } from "react-toastify";
import { useState } from "react";

export default function ModalUpdate({ setShowModal, title,tasks,setTasks,idSel, user }) {
 
  const techSelected = user.techs.find(elem=>elem.id===idSel) 

  const [selectinput,setSelectinput] = useState(techSelected.status)
  
  const schema = yup.object().shape({
      title:yup.string().required("Insira um nome")
  })
  
  const { register, handleSubmit,formState:{errors} } = useForm({
      resolver:yupResolver(schema)
  });

  const updateTech = (data)=>{
      const token = localStorage.getItem("@Kenziehub")
      api.put(`/users/techs/${idSel}`,data,{headers:{Authorization:`Bearer ${token}`}})
      .then(res=>{
        toast.success("Status alterado")
        setShowModal(false)
        })
      .catch(err=>toast.error("Erro na edição"))
  }

  

    function handleDelete(e){
        e.preventDefault()
        const token = localStorage.getItem("@Kenziehub")
        api.delete(`/users/techs/${idSel}`, {headers:{Authorization:`Bearer ${token}`} }  )
        .then(res=>{
            setShowModal(false)
            setTasks( tasks.filter(task=>task.id !== idSel) )
            toast.success("Tecnologia deletada")
        })
        .catch(err=>toast("Erro em excluir") )
    }


  return (
    <DarkScreen>
      <ModalTitle>
        <h4>{title}</h4>
        <p onClick={() => setShowModal(false)}>X</p>
      </ModalTitle>
      <ModalContainer onSubmit={handleSubmit(updateTech)} >
        <Input 
          label={"Título"} 
          placeholder={"Título"} 
          register={register}
          name={"title"} 
          errors={errors.name?.message}
          value={techSelected.title}
        />
        <Input
          label={"Selecionar Status"}
          isModalSelect
          placeholder={"Selecionar status"}
          register={register}
          name={"status"}
          value={selectinput}
          onChange={(e)=>setSelectinput(e.target.value)}
        />
        <Button type="submit">Salvar Alterações</Button>
        <Button onClick={handleDelete} >Excluir</Button>
      </ModalContainer>
    </DarkScreen>
  );
}