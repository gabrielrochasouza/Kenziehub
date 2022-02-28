import { Redirect, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { SignInContainer, LoginForm } from "./style";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../Services";
import { toast } from "react-toastify";

export default function Signin({authenticated,setAuthenticated}) {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().required("Campo Obrigatório").email("email inválido"),
    password: yup.string().required("Campo Obrigatório").min(6,"mínimo 6 caracteres"),
    confirm_password: yup
      .string()
      .required("Campo Obrigatório")
      .oneOf([yup.ref("password")], "As senhas devem ser iguais!"),
    course_module: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório")
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSignin = (data) => {
    const { name, email, password, course_module,contact,bio } = data;
    const newUser = { name, email, password, course_module,contact,bio };
    api
      .post("/users", newUser)
      .then((res) => {
        localStorage.setItem("@Kenziehub:id",res.data.id)
        toast.success("Usário novo criado")
        history.push("/")
      })
      .catch((err) => {
        toast.error("Erro no cadastro")
      });
  };
  if(authenticated){
    return <Redirect to="/dashboard"/>
  }

  return (
    <SignInContainer>
      <div className="titleContainer">
        <h1>Kenzie Hub</h1>
        <Button isGrey={true} onClick={() => history.push("/")}>
          {" "}
          Voltar{" "}
        </Button>
      </div>
      <LoginForm onSubmit={handleSubmit(onSignin)}>
        <h2>Cadastre-se</h2>
        <p> Crie sua Conta Rápido e Fácil</p>

        <Input
          label={"Nome"}
          placeholder={"Nome"}
          name="name"
          register={register}
          errors={errors.name?.message}
        />
        <Input
          label={"Email"}
          placeholder={"Email"}
          name="email"
          register={register}
          errors={errors.email?.message}
        />
        <Input
          label={"Senha"}
          placeholder={"Password"}
          name="password"
          register={register}
          errors={errors.password?.message}
          isPassword
        />
        <Input
          label={"Confirmar Senha"}
          placeholder={"Confirm Password"}
          name="confirm_password"
          register={register}
          errors={errors.confirm_password?.message}
          isPassword
        />
        <Input
          label={"Contato"}
          placeholder={"Contato"}
          name="contact"
          register={register}
          errors={errors.contact?.message}
        />
        <Input
          label={"Bio"}
          placeholder={"Bio"}
          name="bio"
          register={register}
          errors={errors.bio?.message}
        />
        <Input
          register={register}
          errors={errors.module?.message}
          name="course_module"
          isSelect={true}
          label={"Selecionar Módulo"}
        />

        <Button type="submit" isGrey={false}>
          Cadastrar
        </Button>
      </LoginForm>
    </SignInContainer>
  );
}
