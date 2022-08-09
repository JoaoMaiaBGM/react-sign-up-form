import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function FormLogin() {
  let navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().required("e-mail obrigatório").email("e-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  function handleLogin(user) {
    api
      .post("/sessions", { ...user })
      .then((res) => {
        window.localStorage.clear();
        window.localStorage.setItem("userID", res.data.user.id);
        window.localStorage.setItem("userToken", res.data.token);
        setTimeout(() => {
          navigate(`/dashboard/${res.data.user.id}`);
        }, 5000);
        toast.success("Login feito com sucesso");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Login/senha inválidos");
      });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <label htmlFor="email">Email</label>
      <input type="email" placeholder="E-mail" {...register("email")} />
      <span>{errors.email?.message}</span>

      <label htmlFor="password">Senha</label>
      <input type="password" placeholder="Senha" {...register("password")} />
      <span>{errors.password?.message}</span>

      <button type="submit">Entrar</button>
    </form>
  );
}
