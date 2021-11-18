import { React, useState, useEffect } from 'react'
import { getDocs } from "firebase/firestore";
import { collectionRef } from '../setupFirebase';

export default function GetBooks() {

    // Get Books
    const [books, setBooks] = useState([]);

    useEffect(() => {
        (async () => {
            const docSnap = await getDocs(collectionRef);
            const booksArray = [];

            docSnap.forEach(item => {
                booksArray.push({ 
                    id: item.id, 
                    ...item.data()
                })
            });
            setBooks(booksArray);
        })();   
    },[])

    return (
        <ul>
            {
                books.map((book) => {
                    return `<li>${book.title}</li>`
                })
            }
        </ul>
    )
}
