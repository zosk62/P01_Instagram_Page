import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function Header() {
  
  return (

    <div class="header">
      <div class="top">
        <div class="logo">
          <img src="/instagram.png" alt="instagram" style={{ width: '175px' }}></img>
        </div>
        <div class="form">
          <div class="input_field">
            <input type="text" placeholder="Phone number, username, or email" class="input" />
          </div>
          <div class="input_field">
            <input type="password" placeholder="Password" class="input" />
          </div>
          <div class="btn"><a href="#">Log In</a></div>
        </div>
        <div class="or">
          <div class="line"></div>
          <p>OR</p>
          <div class="line"></div>
        </div>
        <div class="dif">
          <div class="fb">
            <img src="/facebook.png" alt="facebook" />
            <p>Log in with Facebook</p>
          </div>
          <div class="forgot">
            <a href="#">Forgot password?</a>
          </div>
        </div>
      </div>
      <div class="signup">
        <p>Don't have an account? <a href="/register">Sign up</a></p>
      </div>
      <div class="apps">
        <p>Get the app.</p>
        <div class="icons">
          <a href="#"><img src="/appstore.png" alt="appstore" /></a>
          <a href="#"><img src="/googleplay.png" alt="googleplay" /></a>
        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div class="footer">
      <div class="links">
        <ul>
          <li><a href="#">ABOUT US</a></li>
          <li><a href="#">SUPPORT</a></li>
          <li><a href="#">PRESS</a></li>
          <li><a href="#">API</a></li>
          <li><a href="#">JOBS</a></li>
          <li><a href="#">PRIVACY</a></li>
          <li><a href="#">TERMS</a></li>
          <li><a href="#">DIRECTORY</a></li>
          <li><a href="#">PROFILES</a></li>
          <li><a href="#">HASHTAGS</a></li>
          <li><a href="#">LANGUAGE</a></li>
        </ul>
      </div>
      <div class="copyright">
        © 2019 INSTAGRAM
      </div>
    </div>
  )
}

function RegisterH() {
  return (
    <div class="header">
      <div class="top">
        <div class="logo">
          <img src="instagram.png" alt="instagram" style={{ width: '175px' }}></img>  
        </div>
        <div class="form">
          <div class="input_field">
            <input type="text" placeholder="Full Name" class="input"/>
          </div>
          <div class="input_field">
            <input type="text" placeholder="Username" class="input"/>
          </div>
          <div class="input_field">
            <input type="password" placeholder="Password" class="input"/>
          </div>
          <div class="btn"><a href="#">Sign Up</a></div>
        </div>
      </div>
      <div class="or">
        <div class="line"></div>
        <p>OR</p>
        <div class="line"></div>
      </div>
      <div class="dif">
        <div class="fb">
          <img src="/facebook.png" alt="facebook"/>
            <p>Sign up with Facebook</p>
        </div>
      </div>
    </div>
  )
}

function RegisterF() {
  return (
    <div class="footer">
		<div class="links">
			<ul>
				<li><a href="#">ABOUT US</a></li>
				<li><a href="#">SUPPORT</a></li>
				<li><a href="#">PRESS</a></li>
				<li><a href="#">API</a></li>
				<li><a href="#">JOBS</a></li>
				<li><a href="#">PRIVACY</a></li>
				<li><a href="#">TERMS</a></li>
				<li><a href="#">DIRECTORY</a></li>
				<li><a href="#">PROFILES</a></li>
				<li><a href="#">HASHTAGS</a></li>
				<li><a href="#">LANGUAGE</a></li>
			</ul>
		</div>
		<div class="copyright">
			© 2019 INSTAGRAM
		</div>
	</div>
  )
}



function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">

        <Routes>
          <Route path="/" element={<><Header /><Footer /></>}></Route>
          <Route path="/register" element={<><RegisterH /><RegisterF /></>}></Route>
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
