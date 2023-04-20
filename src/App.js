import './App.css';
import {useNavigate} from 'react-router-dom' //hook to get navigate to the page
import gimg from'./google-icon.png'
import aimg from'./apple-icon.png'
function App() {
  const navigate = useNavigate();
    const handleSubmit = event => {
      event.preventDefault();
      navigate('/Dashboard');
    }
    function redirectToGoogleAuthentication() {
      const clientId = "YOUR_CLIENT_ID"; // Replace with your Google OAuth 2.0 client ID
      const redirectUri = "YOUR_REDIRECT_URI"; // Replace with your redirect URI
    
      const scope = "email profile"; // The Google OAuth 2.0 scopes to request
      const responseType = "code"; // The Google OAuth 2.0 response type to request
    
      const url = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;
    
      window.open(url, "_blank"); // Open the URL in a new tab
    }    
    
  return (
    <div className="flex-container">
      <div className='flex-item' id="namebox">
          <div id="appname">
          Board.
          </div>
      </div>
      <div className='flex-item' id="formbox">
        <div id="loginf">
        <h1>Sign in</h1>
        <h2>Sign in into your account</h2>
        <div className="flex-container">
          <div className="lop flex-item" onClick={redirectToGoogleAuthentication}>
            <img src={gimg} alt="aimg" className='icon'/> 
            <p id='sp'>Sign in With Google</p>
          </div>
        <div className="lop flex-item">
        <img src={aimg} alt="aimg" className='icon'/> 
        <p id='sp'>Sign in With Apple</p>
        </div>
        </div>
        <form id='lform' onSubmit={handleSubmit}>
          <label>
             Email address
          </label>
            <input className="ibox" type='email' required />
          <label>
            Password
          </label>
            <input className="ibox" type='password' required />
          <a href="">
            Forgot Password?
          </a>
          <button id='signIn'>
            Sign In
          </button>
        </form>
        <center>
        <span>Don't you have an account?
          <a href="">
            Register here
          </a>
          </span>
          </center>
        </div>          
      </div>     
    </div>
  );
}

export default App;
