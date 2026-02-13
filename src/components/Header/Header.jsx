import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Header.css'
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
    <header className='header'>
        <div className='header__container'>
            <Link className='header__title'>Recipes</Link>

            <input className='header__search'
            name="search"
            type="text"
            placeholder="Search recipes..."
            value={search}
            onChange={handleSearchChange}
            />

            <nav className="header__nav">
                <ul className="header__links">
                    <li ref={menuRef} className="header__user">
                        {isAuthenticated ? (
                            <>
                                <img src={userIcon} alt="userIcon" className="header__userIcon" onClick={toggleMenu}/>

                                <ul className={`header__userMenu ${isMenuOpen ? "open" : ""}`}>
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
