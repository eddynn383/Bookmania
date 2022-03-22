import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../components/Input'
import Button from '../components/Button'
import Text from '../components/Text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faShieldAlt } from '@fortawesome/free-solid-svg-icons'

export default function LogInForm() {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
 
    const [inputType, setInputType] = useState('password');
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const { login, currentUser } = useAuth();
    const navigate = useNavigate()
    
    const changeValue = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        console.log(user)
    }

    const handleCheckBox = (e) => {
        e.target.checked ? setInputType('text') : setInputType('password')
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            setError('')
            setLoading(true)
            await login(user.email, user.password);
            navigate.push('/')
        } catch (error) {
            setError('Failed to log in!')
        }
        setLoading(false)
    }

    return (
        <form onSubmit={onSubmit} >
            { error && <Text type="p" className="error">{ error }</Text> }
            { <Text type="p">{currentUser.email}</Text> }
            <Input name="email" className="email" id="userEmail" type="email" placeholder="example@example.com" label="E-mail" value={user.email} onChange={changeValue} >
                <FontAwesomeIcon icon={faAt} className="input_icon"></FontAwesomeIcon>
            </Input>
            <Input name="password" className="pass" id="userPassword" type={inputType} placeholder="Type password" label="Password" value={user.password} onChange={changeValue} >
                <FontAwesomeIcon icon={faShieldAlt} className="input_icon"></FontAwesomeIcon>
            </Input>
            <Input name="showpass" className="checkbox" id="userShowPass" type="checkbox" label="show password" onClick={handleCheckBox} />
            <Button disabled={loading} type="submit" className="default">Submit</Button>
        </form>
    )
}