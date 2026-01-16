import { useNavigate } from 'react-router-dom';
import './LoginForm.css'
import { ROUTES } from "@/configs/routesConfig";
import { Link } from "react-router-dom";
import { useState } from 'react';

export default function RecipeCard() {
    const navigate = useNavigate();
    const [isUser, setIsUser] = useState(true)

    function handleSubmit(event){
        event.preventDefault();

        const form = event.target;
        const enteredEmail = form.email.value;
        const enteredPassword = form.password.value;

        const userJSON = localStorage.getItem("user");
        const user = userJSON ? JSON.parse(userJSON) : null;

        if (user && enteredEmail === user.email && enteredPassword === user.password){
          user.isAuthenticated = true;
          localStorage.setItem("user", JSON.stringify(user));
          setIsUser(true);
          navigate(ROUTES.HOME);
        } else {
          setIsUser(false);
          form.reset();
        }
    }

  return (
    <>
    <form onSubmit={handleSubmit} className='login-form'>
        <div className='login-form__field'>
            <label htmlFor="login-email">Email</label>
            <input className='login-form__input' type="email" id='login-email' name='email' required/>
        </div>

        <div className='login-form__field'>
            <label htmlFor="login-password">Password</label>
            <input className='login-form__input' type="password" id='login-password' name='password' required/>
        </div>

          <div className="login-form__button">
            <button type="submit">Login</button>
          </div>

          <div>
            <span>Don't have an account? <Link to={ROUTES.REGISTER} className="login-form__register">Register</Link></span>
          </div>
    </form>
    <div className={`login-form__error ${isUser ? 'login-form__error-hidden' : ''}`}>
      <span>There is no such user.</span>
    </div>
    </>
  );
}