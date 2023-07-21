import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import Search from './../Search';
import Catalog from './../Catalog';

import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';

import './style.scss';
import ShopContext from '../../context/ShopContext';

const Header = () => {
  const { state } = useContext(ShopContext);
  const [totalItemsToCart, setTotalItemsToCart] = React.useState(0);

  React.useEffect(() => {
    let total = 0;
    state.cartItems.map((item) => (total += item.quantity));
    setTotalItemsToCart(total);
  }, [state]);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__content">
          <Link to="/" className="logo">
            Shop
          </Link>
          <Catalog />
          <Search />
          <Link to="cart" className="cart__icon">
            <FaShoppingCart size={'1.2em'} />
            {totalItemsToCart > 0 ? (
              <span className="cart__items-count">{totalItemsToCart}</span>
            ) : null}
          </Link>
          <Link
            to={state.auth ? `user/${state.currentUser}` : 'login'}
            className="user__icon"
          >
            <FaUserAlt size={'1.2em'} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
