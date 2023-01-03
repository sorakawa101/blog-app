import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsAuth }) => {
    const navigate = useNavigate();
    const logOut = () => {
        // ログアウト
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            navigate("login");
        });
    };
    return (
        <div>
            <p>ログアウトする</p>
            <button onClick={logOut}>ログアウト</button>
        </div>
    )
}

export default Logout;