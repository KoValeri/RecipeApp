import { useNavigate } from 'react-router-dom';
import './RegisterForm.css'
import { ROUTES } from "@/configs/routesConfig";

export default function RecipeCard() {
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        navigate(ROUTES.LOGIN);

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {
          email, 
          password,
          isAuthenticated: false,
        }

        localStorage.setItem('user', JSON.stringify(user));
    }

  return (
    <form onSubmit={handleSubmit} className='register-form'>
        <div className='register-form__field'>
            <label htmlFor="register-email">Email</label>
            <input className='register-form__input' type="email" id='register-email' name='email' required/>
        </div>

        <div className='register-form__field'>
            <label htmlFor="register-password">Password</label>
            <input className='register-form__input' type="password" id='register-password' name='password' required/>
        </div>

          <div className="register-form__button">
            <button type="submit">Register</button>
          </div>
    </form>
  );
}