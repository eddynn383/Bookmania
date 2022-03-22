import { React, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Input from './Input';

import './style/search.scss'

export default function Search() {
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState('');
    const changeValue = (e) => {
        setInput({
            input: e.target.value
        })    
    }
    const onSubmit = () => {

    }
    return (
        <form className="form form--search" onSubmit={onSubmit}>
            <Input name="search" className="search" id="booksSearch" type="text" placeholder="Genre, author, or book name" value={input.value} onChange={changeValue} />
            <button className="btn btn--search" type="submit" disabled={loading}><FontAwesomeIcon icon={faSearch} /></button>
        </form>
    )
}
