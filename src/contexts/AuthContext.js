import React, { useContext, useState, useEffect } from 'react'
// import { auth, createUser, stateChanged } from '../setupFirebase'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
} 

export function AuthProvider({ children }) {
    const auth = getAuth()
    const [currentUser, setCurrentUser] = useState('')
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
        });

        return unsubscribe
    }, [auth])

    const value = {
        currentUser,
        signup
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
