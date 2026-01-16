import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Header.css'
import { ROUTES } from "@/configs/routesConfig";
import userIcon from '@/icons/user.png';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef();
    const location = useLocation();
    const navigate = useNavigate();

    const userJSON = localStorage.getItem("user");
    const user = userJSON ? JSON.parse(userJSON) : null;
    const isAuthenticated = user ? user.isAuthenticated : false;

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
        if (user){
            user.isAuthenticated = false;
            localStorage.setItem("user", JSON.stringify(user));
            setIsMenuOpen(false);
            navigate(ROUTES.LOGIN);
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
            />

            <nav className="header__nav">
                <ul className="header__links">
                    <li ref={menuRef} className="header__user">
                        {isAuthenticated ? (
                            <>
                                <img src={userIcon} alt="userIcon" className="header__userIcon" onClick={toggleMenu}/>

                                <div className={`header__userMenu ${ isMenuOpen ? "open" : "" }`}>
                                    <Link to={ROUTES.FAVORITES}>Favorites</Link>
                                    <button onClick={handleLogout}>Logout</button>
                                </div>
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
