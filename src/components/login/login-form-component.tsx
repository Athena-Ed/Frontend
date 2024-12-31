import React, { useState } from 'react';
import { ArrowLeft } from 'react-feather';
import { Link } from 'react-router-dom';

import '../../styles/login-form-component.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // SIGN IN LOGIC HERE

        console.log("Sign in attempted with:", email, password);
    };

    return (
        <div className="sign-in-page">
            <button className="back-button" onClick={() => window.history.back()}>
                <ArrowLeft size={24} />
            </button>

            <div className="sign-in-container">
                <h1>Sign In to athena</h1>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>

                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>

                        <input
                          type="password"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                    </div>

                    <button type="submit" className="sign-in-button">Sign In</button>
                    
                </form>

                <div className="additional-options">
                    <a href="/forgot-password">Forgot password?</a>
                    <p>Don't have an account? <Link to="/frontend.github.io/sign-up">Sign up</Link></p>
                </div>

            </div>
        </div>
    )
};

export default Login;