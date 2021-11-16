import React from 'react'
import Input from "../components/Input";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../setupFirebase';

export default function AddBooks() {
    // Set Book
    const [book, setBook] = useState({
        title: '',
        author: '',
        pages: '',
        publishDate: ''
    });

    // Set Loading
    const [loading, setLoading] = useState(false);

    //Set error
    const [error, setError] = useState(null)
    
    // On change
    const changeValue = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })    
        console.log(e.target.value)
    }

    // On submit
    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const docRef = await addDoc(collection(db, "books"), {
                ...book,
                publishDate: new Date(book.publishDate)
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
            setError("Something wen't wrong. Please try agin!")
        }
        setLoading(false);
    }

    return (
        <form onSubmit={onSubmit}>
            {error && <p className="error">{error}</p>}
            <Input name="title" dim="full" id="bookTitle" type="text" placeholder="Title" value={book.title} onChange={changeValue} />
            <Input name="author" dim="full" id="bookAuthor" type="text" placeholder="Author" value={book.author} onChange={changeValue} />
            <Input name="pages" dim="half" id="bookPageNo" type="number" placeholder="Page Number" value={book.pages} onChange={changeValue} />
            <Input name="publishDate" dim="half" id="bookPublish" type="date" placeholder="Publish Date" value={book.publishDate} onChange={changeValue} />
            <button type="submit" disabled={loading}>{loading ? "Loading..." : "Add Book"}</button>
        </form>
    )
}
