import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from './Header.module.css'
import { ROUTES } from "@/configs/routesConfig";
import userIcon from '@/assets/icons/user.png';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '@/store/authSlice';
import { useSearchParams } from "react-router-dom";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get("search") || "";

    useEffect(() => {
        function handleClickOutside(event){
            if(menuRef.current && !menuRef.current.contains(event.target)){
                setIsMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [])

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location])

    function toggleMenu(){
        setIsMenuOpen(prev => !prev);
    }

    function handleLogout(){
        dispatch(authActions.logout());
        setIsMenuOpen(false);
        navigate(ROUTES.LOGIN);
    }

    function handleSearchChange(e) {
        const value = e.target.value;

        if (value) {
            setSearchParams({ search: value });
        } else {
            setSearchParams({});
        }
    }

  return (
    <header className={styles.header}>
        <div className={styles.headerContainer}>
            <Link className={styles.headerTitle}>Recipes</Link>

            <input className={styles.headerSearch}
            name="search"
            type="text"
            placeholder="Search recipes..."
            value={search}
            onChange={handleSearchChange}
            />

            <nav>
                <ul className={styles.headerLinks}>
                    <li ref={menuRef} className={styles.headerUser}>
                        {isAuthenticated ? (
                            <>
                                <img src={userIcon} alt="userIcon" className={styles.headerUserIcon} onClick={toggleMenu}/>

                                <ul className={`${styles.headerUserMenu} ${isMenuOpen ? styles.headerUserMenuOpen : ""}`}>
                                    <li>
                                        <Link to={ROUTES.FAVORITES}>Favorites</Link>
                                    </li>
                                    <li>
                                        <button onClick={handleLogout}>Logout</button>
                                    </li>
                                </ul>
                            </>
                        ) : (
                            <Link to={ROUTES.LOGIN}>Login</Link>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  );
}
