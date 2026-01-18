import { useNavigate } from 'react-router-dom';
import './LoginForm.css'
import { ROUTES } from "@/configs/routesConfig";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '@/store/authSlice';
import { useEffect, useRef } from 'react';

export default function RecipeCard() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginError = useSelector(state => state.auth.loginError);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const formRef = useRef(null);

    useEffect(() => {
      if (isAuthenticated) {
        navigate(ROUTES.HOME);
      }
    }, [isAuthenticated]);

    useEffect(() => {
      if(loginError) formRef.current.reset();
    }, [loginError]);

    function handleSubmit(event){
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        dispatch(authActions.login({email, password}));
    }

  return (
    <>
    <form ref={formRef} onSubmit={handleSubmit} className='login-form'>
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
    <div className={`login-form__error ${loginError ? '' : 'login-form__error-hidden'}`}>
      <span>There is no such user.</span>
    </div>
    </>
  );
}