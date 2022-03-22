import React, { useState, useEffect } from 'react'
import { getDocs } from "firebase/firestore";
import { booksRef } from '../setupFirebase';
import Card from '../components/Card';

export default function GetBooks() {

    // Get Books
    const [books, setBooks] = useState([]);

    useEffect(() => {
        (async () => {
            const docSnap = await getDocs(booksRef);
            const booksArray = [];

            docSnap.forEach(item => {
                booksArray.push({ 
                    id: item.id, 
                    ...item.data()
                })
            });
            // console.log(booksArray)
            setBooks(booksArray);
        })();   
    },[])
    
    // console.log(books);
    return (
        <div className="card-items flex wrap gap-20">
            {
                books.map((book, idx) => {
                    return <Card type="horizontal" key={idx} title={book.title} subtitle={book.author} description={book.shortDesc} cover={book.cover} metatags={book.metatags}/>
                })
            }
        </div>
    )
}
