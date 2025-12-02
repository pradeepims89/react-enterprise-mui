import React from 'react';
import './AuthForm.css';
const AuthForm = () => {

    const [isLogin, setIsLogin] = React.useState(true);

    const handleToggle = () => {
        setIsLogin(!isLogin);
    }
    return (
        <div className='container'>
            <div className="form-container">
                <div className="form-toggle">
                    <button className={`btn-login ${isLogin ? 'active' : ''}`}
                        onClick={handleToggle}
                    >Login</button>
                    <button className={`btn-register ${isLogin ? '' : 'active'}`} 
                        onClick={handleToggle}
                    >Signup</button>
                </div>
                {isLogin ? (
                    <form className="form">
                        <h2>Login</h2>
                        <div className="form-group">
                            <input type="email" id="email" name="email" required
                             placeholder='Email' />
                        </div>
                        <div className="form-group">
                            <input type="password" id="password" name="password" required
                             placeholder='Password' />
                        </div>
                        <button type="submit" className="btn-submit">Login</button>
                        <a href="#" className="forgot-password">Forgot Password?</a>
                        <p>Not a member? <a href="#">Signup now</a></p>
                    </form>
                ) : (
                    <form className="form">
                        <h2>Register</h2>
                        <div className="form-group">
                            {/* <label htmlFor="username">Username:</label> */}
                            <input type="text" id="username" name="username" required  placeholder='User name' />
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="email">Email:</label> */}
                            <input type="email" id="email" name="email" required placeholder='Email address' />
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="password">Password:</label> */}
                            <input type="password" id="password" 
                            name="password"
                            placeholder='Password'
                             required />
                        </div>
                        <button type="submit" className="btn-submit">Register</button>
                        <p>Already have an account? <a href="#">Login here</a></p>
                    </form>
                )}


                {/* <form className="form">
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>


                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit" className="btn-submit">Login</button>
                    <p>Don't have an account? <a href="#">Register here</a></p>
                </form> */}
            </div>
        </div>
    );
}
export default AuthForm;