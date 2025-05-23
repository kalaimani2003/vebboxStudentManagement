import React from 'react'
import "./ForgetPage.css"
export const ForgetPage = () => {
  return (
    <>
       <div className="forget-wrapper">
      <div className="forget-card">
        <h1 className="title">Forgot Password</h1>
        <p className="subtitle">
          Enter your email address and we’ll send you a link to reset your password.
        </p>
        <form>
          <label htmlFor="email" className="label">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="input"
            disabled
          />
          <button type="button" className="submit-btn" disabled>
            Send Reset Link
          </button>
        </form>
        <div className="footer-links">
          <a href="/login">Back to Login</a>
          <a href="/register">Create Account</a>
        </div>
      </div>
    </div>
  
</>
)
}

