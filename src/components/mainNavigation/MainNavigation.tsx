import { NavLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './MainNavigationStyle.css';

function MainNavigation() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div className="fixed top-0 w-[100%] text-center shadow-lg shadow-gray-500/50 nav-bg z-10">
      <ul className="flex items-center justify-center py-2">
        <li className="p-1 nav-item">
          {isHome ? (
            <ScrollLink
              className="text-lime-50 hover:text-gray-400 nav-link"
              to="home"
              spy
              smooth
              offset={0}
              duration={1000}
            >
              Home
            </ScrollLink>
          ) : (
            <NavLink className="text-lime-50 nav-link" to="/">
              Home
            </NavLink>
          )}
        </li>

        <li className="p-1 nav-item">
          {isHome && (
            <ScrollLink
              className="text-lime-50 nav-link"
              to="portfolio"
              spy
              smooth
              offset={5}
              duration={1000}
            >
              Portfolio
            </ScrollLink>
          )}
        </li>

        <li className="p-1 nav-item">
          <NavLink className="text-lime-50 nav-link" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MainNavigation;
