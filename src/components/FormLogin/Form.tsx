import "./style.css"
export const Form = () => {
  return (
    <form className='form-login'>
        <h2>Bem vindo de volta!</h2>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder='Digite seu E-mail' />
        
        <div className="password-forgot">
            <label htmlFor="password">Password</label>
            <a>Forgot password?</a>
        </div>
        <input type="password" placeholder='Digite sua senha'/>
        
        <div className="conteiner-remenber">
            <input type="checkbox" name="remenber" id="remenber" />
            <p>Remenber me</p>
        </div>

        <button type="submit">Entrar</button>
    </form>
  )
}
