import React, { useState } from 'react';
import { ArrowLeft } from 'react-feather';
import { Link } from 'react-router-dom';

import '../../styles/signup-form-component.css'

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // SIGN UP LOGIC HERE
        
        console.log("Sign up attempted with:", { firstName, lastName, email, password, confirmPassword });
    };

    return (
        <div className="sign-up-page">
            <button className="back-button" onClick={() => window.history.back()}>
                <ArrowLeft size={24} />
            </button>

            <div className="sign-up-container">
                <h1>Create your athena account</h1>

                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        </div>

                        <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                        </div>
                    </div>

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

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        />
                    </div>

                    <button type="submit" className="sign-up-button">Create Account</button>
                </form>

                <div className="additional-options">
                    <p>Already have an account? <Link to="/frontend.github.io/sign-in">Sign in</Link></p>
                </div>

            </div>
        </div>
    )
};

export default SignUp;