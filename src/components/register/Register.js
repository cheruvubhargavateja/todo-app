import React, { useState } from 'react'
import { BaseService } from '../../helper/api-calls/baseApiCalls';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => { 
        e.preventDefault();
        const response = await BaseService.post(
        'http://localhost:3500/users/register',
        JSON.stringify({
            username: name,
            email,
            password 
        }),
        true
        )

        const data = await response.json();
        console.log(data);

        setName('')
        setEmail('')
        setPassword('')
     }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' placeholder='Enter name' value={name} autoFocus onChange={(e)=>setName(e.target.value)}/>
            <label>Email</label>
            <input type='text' placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <label>Password</label>
            <input type='password' placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button type='submit'>
                Submit
            </button>
        </form>
    </div>
  )
}

export default Register