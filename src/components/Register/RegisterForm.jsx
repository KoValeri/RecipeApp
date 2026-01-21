import { useNavigate } from 'react-router-dom';
import '@/components/Login/LoginForm.css'
import { ROUTES } from "@/configs/routesConfig";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { authActions } from '@/store/authSlice';

export default function RecipeCard() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleSubmit(event){
        event.preventDefault();
        navigate(ROUTES.LOGIN);

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        dispatch(authActions.register({email, password}));
    }

  return (
    <form onSubmit={handleSubmit} className='login-form'>
        <div className='login-form__field'>
            <label htmlFor="register-email">Email</label>
            <input className='login-form__input' type="email" id='register-email' name='email' required/>
        </div>

        <div className='login-form__field'>
            <label htmlFor="register-password">Password</label>
            <input className='login-form__input' type="password" id='register-password' name='password' required/>
        </div>

        <div className="login-form__button">
          <button type="submit">Register</button>
        </div>

        <div>
          <span>Alredy registered? <Link to={ROUTES.LOGIN} className="login-form__register">Then log in!</Link></span>
        </div>
    </form>
  );
}