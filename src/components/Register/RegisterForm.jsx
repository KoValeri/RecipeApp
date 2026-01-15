import { useNavigate } from 'react-router-dom';
import './RegisterForm.css'
import { ROUTES } from "@/configs/routesConfig";

export default function RecipeCard() {
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        navigate(ROUTES.LOGIN);
    }

  return (
    <form onSubmit={handleSubmit} className='register-form'>
        <div className='register-form__field'>
            <label htmlFor="register-email">Email</label>
            <input className='register-form__input' type="email" id='register-email' required/>
        </div>

        <div className='register-form__field'>
            <label htmlFor="register-password">Password</label>
            <input className='register-form__input' type="password" id='register-password' required/>
        </div>

          <div className="register-form__button">
            <button type="submit">Register</button>
          </div>
    </form>
  );
}