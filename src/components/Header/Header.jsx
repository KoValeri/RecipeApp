import { Link } from "react-router-dom";
import './Header.css'
import { ROUTES } from "@/configs/routesConfig";

export default function Header() {
  return (
    <header className='header'>
        <div className='header__container'>
            <div className='header__title'>Recipes</div>

            <input className='header__search'
            name="search"
            type="text"
            placeholder="Search recipes..." 
            />

            <nav className="header__nav">
                <ul className="header__links">
                    <li>
                        <Link to={ROUTES.HOME}>Home</Link>
                    </li>
                    <li>
                        <Link to={ROUTES.LOGIN}>Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  );
}
