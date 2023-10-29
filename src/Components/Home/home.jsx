import React from 'react';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { languageContext } from '../../contexts/language';

const Home = () => {
    const{language,setlanguage}=useContext(languageContext)
    return (
        <div>
            <h1>my home page</h1>
            <button onClick={()=>setlanguage("ar")}>change to arabic lang</button>
            <button onClick={()=>setlanguage("en")}>change  to english lang</button>

        </div>
    );
}

export default Home;
