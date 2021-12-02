import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

export default function SignUpForm() {
    const [user, setUser] = useState({
        email: '',
        password: '',
        repassword: ''
    });
    
    const changeValue = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
        console.log(user);
    }

    const onSubmit = () => {

    }
    return (
        <form onSubmit={onSubmit}>
            {/* {error && <p className="error">{error}</p>} */}
            <Input name="email" id="userEmail" type="email" placeholder="example@example.com" label="E-mail" value={user.email} onChange={changeValue} />
            <Input name="password" id="userPassword" type="password" placeholder="Type password" label="Password" value={user.password} onChange={changeValue} />
            <Input name="repassword" id="userRePassword" type="password" placeholder="Confirm password" label="Confirm Password" value={user.repassword} onChange={changeValue} />
            <Button type="submit" className="default">Submit</Button>
        </form>
    )
}
