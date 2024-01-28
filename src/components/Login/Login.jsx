import { useEffect } from 'react'
import "./Login.css";
import { useNavigate } from 'react-router-dom';
function Login() {
    useEffect(() => {
        const container = document.getElementById('container');
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');
        
        const handleRegisterClick = () => {
          container.classList.add('active');
        };
    
        const handleLoginClick = () => {
          container.classList.remove('active');
        };
    
        registerBtn.addEventListener('click', handleRegisterClick);
        loginBtn.addEventListener('click', handleLoginClick);
    
        return () => {
          // Cleanup event listeners when the component is unmounted
          registerBtn.removeEventListener('click', handleRegisterClick);
          loginBtn.removeEventListener('click', handleLoginClick);
        };
      }, []);

    const navigate=useNavigate()
    function goToAbout(){
        navigate("/ChatScreen")
    }

    
    return (
      <div className="container" id="container">
        <div className="form-container sign-up">
            <form>
                <h1 style={{color:"#512da8"}}>Create Account</h1>
                {/* <div className="social-icons">
                    <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                </div> */}
                <span style={{color:"#512da8"}}>or use your email for registeration</span>
                <input type="password" placeholder="GOOGLE_API_KEY" style={{color:"black"}}/>
                <input type="email" placeholder="Email" style={{color:"black"}}/>
                <input type="password" placeholder="Password" style={{color:"black"}}/>
                <button onClick={goToAbout}>Sign Up</button>
            </form>
        </div>
        <div className="form-container sign-in">
            <form>
                <h1 style={{color:"#512da8"}}>Sign In</h1>
                {/* <div className="social-icons">
                    <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                </div> */}
                <span style={{color:"#512da8"}}>or use your email password</span>
                <input type="email" placeholder="Email" style={{color:"black"}}/>
                <input type="password" placeholder="Password" style={{color:"black"}}/>
                <a href="#">Forget Your Password?</a>
                <button>Sign In</button>
            </form>
        </div>
        <div className="toggle-container">
            <div className="toggle">
                <div className="toggle-panel toggle-left">
                    <h1>Welcome Back!</h1>
                    <p>Enter your personal details to use all of site features</p>
                    <button className="hidden" id="login">Sign In</button>
                </div>
                <div className="toggle-panel toggle-right">
                    <h1>Hello, Friend!</h1>
                    <p>Register with your personal details to use all of site features</p>
                    <button className="hidden" id="register">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    )

}

export default Login