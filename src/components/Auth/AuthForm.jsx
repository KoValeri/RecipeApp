import { useNavigate } from 'react-router-dom';
import './AuthForm.css'
import { ROUTES } from "@/configs/routesConfig";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '@/store/authSlice';
import { useEffect, useRef } from 'react';

export default function AuthForm({type = 'login'}) {
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

        if (type === 'login'){
            dispatch(authActions.login({email, password}));
        } else {
            alert('User successfully registered!');
            dispatch(authActions.register({email, password}));
            navigate(ROUTES.LOGIN);
        }
    }

  return (
    <>
    <form ref={formRef} onSubmit={handleSubmit} className='auth-form'>
        <div className='auth-form__field'>
            <label htmlFor="auth-email">Email</label>
            <input className='auth-form__input' type="email" id='auth-email' name='email' required/>
        </div>

        <div className='auth-form__field'>
            <label htmlFor="auth-password">Password</label>
            <input className='auth-form__input' type="password" id='auth-password' name='password' required/>
        </div>

        <div className="auth-form__button">
            <button type="submit">{type === 'login' ? 'Login' : 'Register'}</button>
        </div>

        <div>
            {type === 'login' ? (
                <span>Don't have an account? <Link to={ROUTES.REGISTER} className="auth-form__redirection">Register</Link></span>
            ) : (
                <span>Alredy registered? <Link to={ROUTES.LOGIN} className="auth-form__redirection">Then log in!</Link></span>
            )}
        </div>
    </form>
    {type === 'login' && (
        <div className={`login-form__error ${loginError ? '' : 'login-form__error-hidden'}`}>
            <span>There is no such user.</span>
        </div>
    )}
    </>
  );
}