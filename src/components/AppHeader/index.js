/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import {
  MdAccountCircle, MdShoppingCart, MdMenu, MdStore,
} from 'react-icons/md';
import './style.scss';

const AppHeader = ({
  onClick,
  categories,
  logged,
  /* small counter for the cart */
  count,
  admin,

}) => {
  // removing the text from cart and my account logos when
  // mobile screen width < 768
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <header className="header">

      <div className="header__main">
        <button
          className="header__button"
          type="button"
          onClick={onClick}
        >
          <MdMenu />
        </button>
        <Link
          to="/"
          className="header__logo"
        >
          <div className="header__project-title">SW<span className="header__project-title-i">IT</span>CH</div>
        </Link>

        <div className="header__buttons">
          {/* if admin, show the admin link/button  */}
          {admin
            && (
              <Link to="/admin">
                <div>
                  <MdStore className={`${width}` > breakpoint ? 'big-logo' : 'logo'} color="#5221c6" />
                </div>
                {/* <div>{name}</div> */}
                {width > breakpoint ? (
                  <div className="header__buttons__btn--admin">Admin</div>
                ) : (
                  <div className="header__buttons__btn--admin" />
                )}
              </Link>
            )}
          {/* link to demo admin */}
          <Link
            to="/static-admin"
            className="header__adminddemoButton"
          >
            <div>
              <MdStore className={`${width}` > breakpoint ? 'big-logo' : 'logo'} color="#5221c6" />
            </div>
            {width > breakpoint ? (
              <div className="header__buttons__btn--admin">Admin(Demo)</div>
            ) : (
              <div className="header__buttons__btn--admin" />
            )}
          </Link>

          <Link to="/panier">
            <div className="header__buttons-cart">

              <MdShoppingCart className={`${width}` > breakpoint ? 'big-logo' : 'logo'} />
            </div>
            {/* ternary condition to remove text when screen width smaller than
            768px */}
            {width > breakpoint ? (
              <div className="header__buttons__btn">Panier ({count})
              </div>

            ) : (
              <div className="header__mobile-count">{count}</div>
            )}

          </Link>
          {/* if logged, show the myAccount link/button  else show the login page link/button */}
          {logged ? (
            <>
              <Link to="/mon-compte">
                <div>
                  <MdAccountCircle className={`${width}` > breakpoint ? 'big-logo' : 'logo'} />
                </div>
                {width > breakpoint ? (
                  <>
                    <div className="header__buttons__btn">Mon Compte</div>
                  </>
                ) : (<div className="header__buttons__btn" />)}

              </Link>
            </>
          )
            : (
              <Link to="/login">
                <div>
                  <MdAccountCircle className={`${width}` > breakpoint ? 'big-logo' : 'logo'} />
                </div>
                {width > breakpoint ? (
                  <div className="header__buttons__btn">Connexion
                  </div>
                ) : (
                  <div className="header__buttons__btn" />
                )}
              </Link>

            )}

        </div>
      </div>
      <nav className="header__nav">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className="header__nav__link"
            activeClassName="header__nav__link--active"
            exact
            to={`/categories/${category.title}`}
          >
            {category.title}

          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default AppHeader;

AppHeader.propTypes = {
  onClick: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
  admin: PropTypes.bool.isRequired,
};
