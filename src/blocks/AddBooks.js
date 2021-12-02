import React, { useState } from 'react';
import { addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { collectionRef } from '../setupFirebase';
import Input from "../components/Input";
import Button from '../components/Button';
import UploadFile from './UploadFile';

export default function AddBooks() {
    // Set Book
    const [book, setBook] = useState({
        title: '',
        author: '',
        publishDate: '',
        importDate: '',
        pages: '',
        description: '',
        cover: null
    });
    // Set Storage Ref
    const [storageRef, setStorageRef] = useState(null);
    // Set Cover Image
    const [coverImg, setCoverImg] = useState('');
    // Set Loading
    const [progress, setProgress] = useState(0);
    // Set Loading
    const [loading, setLoading] = useState(false);
    //Set error
    const [error, setError] = useState(null);

    const storage = getStorage();
    const metadata = {
        contentType: 'image/jpeg'
    }

    // On change
    const changeValue = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value,
        })  
    }

    const trimmedText = (text, limit = 0) => {
        let trimmedString = text.substr(0, limit);
        return trimmedString = trimmedString.substr(0, Math.min(trimmedString.lastIndexOf(" ")));
    }

    const onFileChange = (files) => {
        console.log(files)
        const file = files[0];
        console.log(file);
        const storageRef = ref(storage, 'images/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);

        setStorageRef(storageRef);

        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress);
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
            }
        }, (error) => {
            // Handle unsuccessful uploads
        }, () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    setCoverImg(downloadURL);
                    console.log(coverImg);
                });
            }
        );

    }
    // console.log(storageRef)
    const onDelete = () => {
        deleteObject(storageRef).then(() => {
            console.log('file successfully deleted!');
            setCoverImg('')
        }).catch((error) => {
            console.log('somthing went wrong!')
        })
    }
    
    // On submit
    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const today = new Date();
        
        try {
            //Change the structure of the book object
            const newBook = {
                cover: coverImg,
                title: book.title,
                author: book.author,
                fullDesc: book.description, 
                shortDesc: await trimmedText(book.description, 250) + "...",
                date: {
                    publish: new Date(book.publishDate),
                    import: today
                },
                metatags: []
            };
            //add add a new item to the metatags array
            if (book.pages !== '' && book.pages !== null && book.pages !== 'undefined') {                
                newBook.metatags.push({
                    name: 'pages',
                    value: parseInt(book.pages)
                })
            }

            console.log(newBook)
            //Add book to the collection
            const docRef = await addDoc(collectionRef, {
                ...newBook,
            });
            console.log("Document written with ID: ", docRef.id);
            console.log(newBook);
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
            <Input id="bookDescription" name="description" rows="4" cols="80" isTextarea={true} value={book.description} onChange={changeValue}>{book.description}</Input>
            <UploadFile uploadedImgUrl={coverImg} uploadedImgName={book.title} onFileChange={(files) => onFileChange(files)} onDelete={onDelete} progress={progress}/>
            <Button type="submit" className="default" disabled={loading}>{loading ? "Loading..." : "Add Book"}</Button>
        </form>
    )
}
