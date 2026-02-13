import { useNavigate } from 'react-router-dom';
import styles from './AuthForm.module.css';
import { ROUTES } from "@/configs/routesConfig";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '@/store/authSlice';
import { useEffect, useRef } from 'react';

export default function AuthForm({ type = 'login' }) {
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

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (type === 'login') {
            dispatch(authActions.login({ email, password }));
        } else {
            alert('User successfully registered!');
            dispatch(authActions.register({ email, password }));
            navigate(ROUTES.LOGIN);
        }
    }

    return (
      <>
        <form ref={formRef} onSubmit={handleSubmit} className={styles.authForm}>
            <div className={styles.authFormField}>
                <label htmlFor="auth-email">Email</label>
                <input className={styles.authFormInput} type="email" id='auth-email' name='email' required />
            </div>

            <div className={styles.authFormField}>
                <label htmlFor="auth-password">Password</label>
                <input className={styles.authFormInput} type="password" id='auth-password' name='password' required />
            </div>

            <div className={styles.authFormButton}>
                <button type="submit" className={styles.authFormButtonButton}>
                    {type === 'login' ? 'Login' : 'Register'}
                </button>
            </div>

            <div>
                {type === 'login' ? (
                    <span>Don't have an account? <Link to={ROUTES.REGISTER} className={styles.authFormRedirection}>Register</Link></span>
                ) : (
                    <span>Already registered? <Link to={ROUTES.LOGIN} className={styles.authFormRedirection}>Then log in!</Link></span>
                )}
            </div>
        </form>

        {type === 'login' && (
            <div className={`${styles.loginFormError} ${loginError ? '' : styles.loginFormErrorHidden}`}>
                <span>There is no such user.</span>
            </div>
        )}
      </>
    );
}
