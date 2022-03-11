import { useState, useEffect } from 'react'
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth';

export const useIsLoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setIsLoggedIn(!!user);
        })
    }, [])

    return isLoggedIn;
}