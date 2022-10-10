import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="container">
    <header className="header">
     <div className='logo'>
     <img src='img/Logo.svg' alt='logo' className='logo__img'/>
      <button className='logo-btn'>Hoster is hiring !</button>
     </div>
      <nav className='nav '>
        <ul className='nav__list '>
           <li className='nav__item'> <a href='#' className='nav__link'> plans</a></li>
           <li  className='nav__item'> <a href='#' className='nav__link'> Find Domain</a></li>
           <li className='nav__item'> <a href='#' className='nav__link'> Why Hoster</a></li>
        </ul>  
      </nav>
       <svg className='nav__bar' viewBox="0 0 100 80" width="40" height="40">
        <rect width="100" height="20"></rect>
        <rect y="30" width="100" height="20"></rect>
        <rect y="60" width="100" height="20"></rect>
      </svg>

      <div className='register'>
           <a href='#' className='nav__link'> Sign in</a>
           <button className='register__btn'>join waitlist</button>
      </div>
      </header>
        <div className ='content'>
              <h2 className='h2'>Host your website in less than 5 minutes.</h2>
              <p className='para'>With Hoster get your website running in less than 5 minutes with the most competitive pricing packages available online.</p>
              
              <form action='#' className='input'>
                <input type="email" placeholder='&nbsp; Enter email address' className='input__email'/>
                <button className='register__btn'>join waitlist</button>
              </form>

              <div className='check'>
              <svg width="24" height="24" viewBox="0 0 24 24" className=' check  check__icon'>
              <path d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM10.75 17.292L6.25 12.928L8.107 11.07L10.75 13.576L16.393 7.792L18.25 9.649L10.75 17.292Z" fill="#44B096"/>
              </svg>
              <p className='check para'>No spam, Ever. unsubscribe anytime.</p>
              </div>
        </div>

          <div className ='main__picture'>
              <div className='main__picture--icon'>
                <img src='img/Hero.png' alt='hero' className='main__picture--icon-1'/>
                 <svg width="387" height="443" viewBox="0 0 387 443" className='main__picture--icon-blue'> <title>blue</title>
                <path d="M237 267.811C160.6 344.211 205.167 415.978 237 442.311C158 404.145 -0.00012207 284.811 -0.00012207 112.811C-0.00012207 -102.189 314 43.8114 370 112.811C426 181.811 332.5 172.311 237 267.811Z" fill="#49C4EB"/>
                </svg>

                <svg width="387" height="443" viewBox="0 0 387 443"  className='main__picture--icon-pink'> <title>pink</title>
                <path d="M237 267.811C160.6 344.211 205.167 415.978 237 442.311C158 404.145 -6.10352e-05 284.811 -6.10352e-05 112.811C-6.10352e-05 -102.189 314 43.8114 370 112.811C426 181.811 332.5 172.311 237 267.811Z" fill="#EB49B4"/>
                </svg>

                <svg width="387" height="443" viewBox="0 0 387 443"  className='main__picture--icon-purple'> <title>purple</title>
                <path d="M237 267.811C160.6 344.211 205.167 415.978 237 442.311C158 404.145 -4.72661e-05 284.811 -3.22293e-05 112.811C-1.34335e-05 -102.189 314 43.8114 370 112.811C426 181.811 332.5 172.311 237 267.811Z" fill="#AD49EB"/>
                </svg>
              </div>   
          </div>
       
      <footer className='footer '>
          <nav className='footer__nav'>
              <ul className='footer__list'>
              <li className='footer__item'> <a href='#' className='footer__link'> Facebook</a></li>
              <li  className='footer__item'> <a href='#' className='footer__link'> Instagram</a></li>
              <li className='footer__item'> <a href='#' className='footer__link'> Twitter</a></li>
              </ul>
          </nav>

          <div className='footer__2'>
              <img src='img/Avatar.svg' alt='avatar' className='footer__img'/>
               
                <div className='footer__2--text'>
                <p className='footer__p'>Have any questions?</p>
                <h4 className='footer__h4'>Talk to a specialist</h4>
                </div>
           </div>
          
      </footer>

    </div>
  );
}

export default App;
