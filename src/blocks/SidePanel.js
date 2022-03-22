import React, { useState, useEffect } from 'react'
import Image from '../components/Image'
import { useAuth } from '../contexts/AuthContext'
import { getDocs } from "firebase/firestore"
import { usersRef } from '../setupFirebase'

export default function SidePanel() {
    const currentUser = useAuth().currentUser
    const [users, setUsers] = useState([])
    // const [userImg, setUserImg] = useState()
    const [user, setUser] = useState()
    
    // console.log(users)
    
    useEffect(() => {
        (async () => {

            const docSnap = await getDocs(usersRef)
            const usersArray = [];
            
            docSnap.forEach(item => {
                usersArray.push({ 
                    id: item.id, 
                    ...item.data()
                })
            });
            setUsers(usersArray)
        })();  
         
        users.map((user) => {
            if(user.uid === currentUser.uid) {
                setUser({
                    // ...user,
                    id: user.id,
                    image: user.image
                })
                console.log('it works')
            }
        })
    },[])

    // console.log(users)

    return (
        <div className="side-section">
            <div className="profile">
                <div className="profile_image">
                    {/* <Image src={user.image} /> */}
                    {/* <img src={user.image !== "undefined" ? user.image : "../assets/default-profile-image.png"} /> */}
                </div>
            </div>
        </div>
    )
}
