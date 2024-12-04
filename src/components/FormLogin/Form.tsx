import style from "./style.module.css";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react";

const schema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha deve conter no minimo 6 caracteres")
})
type LoginForm = z.infer<typeof schema>

export const Form = () => {
  const [sucsses, setSucsses] = useState(false);

  const { register, handleSubmit, formState: { errors }} = 
    useForm<LoginForm>({ resolver: zodResolver(schema) });

    const onSubmit = (data: LoginForm) => { 
      const email = "gabriel@dev.com";
      const password = "12345678";
      if(email === data.email && password === data.password){
        setSucsses(true)
      }
    };

  return (
    <form className={`${style.formLogin} ${sucsses ? "sucsses" : ""}`} onSubmit={handleSubmit(onSubmit)}>
        <h2>Welcome back!</h2>

        <div className={style.conteienerForm}>

          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Digite seu E-mail' {...register("email")}/>
          {errors.email && <span className="errors">{errors.email.message}</span>}

          <div className={style.passwordForgot}>
              <label htmlFor="password">Password</label>
              <a>Forgot password?</a>
          </div>
          <input type="password" placeholder='Digite sua senha' {...register("password")}/>
          {errors.password && <span className="errors">{errors.password.message}</span>}
          
          <div className={style.conteinerRemenber}>
              <input type="checkbox" name="remenber" id="remenber" />
              <p>Remenber me</p>
          </div>

          <button type="submit">Login</button>
        </div>
        <p className="opcoes-login">or</p>
        <a className="google">Google</a>
    </form>
  )
}
