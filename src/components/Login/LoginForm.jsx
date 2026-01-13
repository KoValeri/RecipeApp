import { useNavigate } from 'react-router-dom';
import './LoginForm.css'
import { ROUTES } from "@/configs/routesConfig";

export default function RecipeCard() {
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        navigate(ROUTES.HOME);
    }

  return (
    <form onSubmit={handleSubmit} className='login-form'>
        <div className='login-form__field'>
            <label htmlFor="login-email">Email</label>
            <input className='login-form__input' type="email" id='login-email' required/>
        </div>

        <div className='login-form__field'>
            <label htmlFor="login-password">Password</label>
            <input className='login-form__input' type="password" id='login-password' required/>
        </div>

          <div className="login-form__button">
            <button type="submit">Login</button>
          </div>
    </form>
  );
}