import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { LoginContainer, LoginForm } from "./style";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom/";

import api from "../../Services";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";

export default function Login({authenticated,setAuthenticated}) {
  const history = useHistory();
  const schema = yup.object().shape({
    email: yup.string().required("Preencha o campo").email("email inválido"),
    password: yup.string().required("Preencha o campo"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  const onLogin = (data) => {
    api
      .post("/sessions", data)
      .then((res) => {
        const token = res.data.token
        localStorage.setItem("@Kenziehub",token )
        localStorage.setItem("@Kenziehub:id",res.data.user.id)
        setAuthenticated(true)
        toast.success("Login Realizado com Sucesso")
      })
      .catch((err) => toast.error("A Senha ou email estão errados!"));
  };

  if(authenticated){
    return <Redirect to={"/dashboard"} />
  }

  return (
    <LoginContainer>
      <h1>Kenzie Hub</h1>
      <LoginForm onSubmit={handleSubmit(onLogin)}>
        <h2>Login</h2>

        <Input
          errors={errors.email?.message}
          label={"Email"}
          placeholder={"Email"}
          register={register}
          name="email"
        />
        <Input
          errors={errors.password?.message}
          label={"Senha"}
          placeholder={"Password"}
         // type={"password"}
          name="password"
          register={register}
          isPassword
        />

        <Button type="submit" isGrey={false}>
          Entrar
        </Button>
        <p>
          <Link to={"/signin"}>Ainda não possui uma conta?</Link>
        </p>
        <Button isGrey={true} onClick={() => history.push("/signin")}>
          Cadastre-se
        </Button>
      </LoginForm>
    </LoginContainer>
  );
}
