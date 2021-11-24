import { React, useState } from 'react'
import { addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collectionRef } from '../setupFirebase';
import Input from "../components/Input";

export default function AddBooks() {
    const storage = getStorage();
    const metadata = {
        contentType: 'image/jpeg'
    }

    // Set Book
    const [book, setBook] = useState({
        title: '',
        author: '',
        publishDate: '',
        importDate: '',
        pages: '',
        cover: ''
    });

    // Set Loading
    const [loading, setLoading] = useState(false);

    //Set error
    const [error, setError] = useState(null);
    
    // On change
    const changeValue = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value,
        })    
    }
    
    // On submit
    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const today = new Date();
        
        try {
            const newBook = {
                title: book.title,
                author: book.author,
                cover: book.cover,
                date: {
                    publish: new Date(book.publishDate),
                    import: today
                },
                metatags: []
            };
            console.log(book.pages)
            if (book.pages !== '' && book.pages !== null && book.pages !== 'undefined') {                
                newBook.metatags.push({
                    name: 'pages',
                    value: parseInt(book.pages)
                })
            }

            console.log(newBook)

            const docRef = await addDoc(collectionRef, {
                ...newBook,
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
            <Input name="title" id="bookTitle" type="text" placeholder="Title" value={book.title} onChange={changeValue} />
            <Input name="author" id="bookAuthor" type="text" placeholder="Author" value={book.author} onChange={changeValue} />
            <div className="flex v-space-between gap-20">
                <Input name="pages" id="bookPageNo" type="number" placeholder="Pages Number" value={book.pages} onChange={changeValue} />
                <Input name="publishDate" id="bookPublish" type="date" placeholder="Publish Date" value={book.publishDate} onChange={changeValue} />
            </div>
            <Input name="cover" id="bookCover" type="file" onChange={changeValue} />
            <button className="btn btn--default" type="submit" disabled={loading}>{loading ? "Loading..." : "Add Book"}</button>
        </form>
    )
}
