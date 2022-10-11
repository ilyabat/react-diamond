import './styles/index.scss';

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div class="header__container _container">
          <div className="header__block">
            <div className="header__logo">
              <a href="#">LOGO</a>
            </div>
            <div className="header__input">
              <input type="text" />
            </div>
            <ul className="header__menu">
              <li><a href="#" className='header__link'>a</a></li>
              <li><a href="#" className='header__link'>b</a></li>
              <li><a href="#" className='header__link'>c</a></li>
            </ul>
            <div className="header__icon">
              <a href="#"><img src="./img/icon/user.svg" alt="user" /></a>
              <a href="#"><img src="./img/icon/cart.svg" alt="cart" /></a>

            </div>
            <button className="header__btn _btn">Login</button>
          </div>
        </div>
      </header>

      <main className="main">


      </main>
      <footer className="footer">

      </footer>
    </div>
  );
}

export default App;
