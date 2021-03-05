import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from 'react-bootstrap/Dropdown';
import './style.scss';

const ArticleMobileMenu = ({ article, toCart, size ,setSize }) => {
  const handleClick = () => {
    toCart(article, size);
  };
  const handleSizeClick = (e) => {
    console.log(e.target.name)
    setSize(e.target.name);

  };
  return (
    <div className="article__mobile__menu ">
      <div className="article__mobile__menu__header">
        <h2>{article.title}</h2>
        <p>{article.price} € </p>
      </div>
      <div className="article__mobile__menu__main">
        <div className="article__mobile__menu__color">NOIR</div>
        <Dropdown className="article__mobile__menu__size">
          <div className="">
            Taille: {size}
          </div>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            V
          </Dropdown.Toggle>

          <Dropdown.Menu className="article__mobile__menu__dropdown">
            <Dropdown.Item onClick={handleSizeClick} name="XS">xs</Dropdown.Item>
            <Dropdown.Item onClick={handleSizeClick} name="S">S</Dropdown.Item>
            <Dropdown.Item onClick={handleSizeClick} name="M">M</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <button type="button" onClick={handleClick}> ajouter au panier</button>
    </div>
  );
};

// Fav.propTypes = {
//   favorites: PropTypes.array.isRequired,
// };

export default ArticleMobileMenu;
