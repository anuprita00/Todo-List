import React from 'react';

const Login = () => {
    return (
        <div className='login-container'>
            <h2>Login</h2>
            <form>
                <div>
                    <label>Email: </label>
                    <input type='email'/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type='password' />
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>       
            </form>
            
        </div>
    );
}

export default Login;

