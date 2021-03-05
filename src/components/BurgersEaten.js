import React, { useEffect } from 'react';
import firebase from "firebase";
import db from '../firebase'


const BurgersEaten = ({db, burgerList, poopBurger}) => {

    return(
        <>
        <h2>Burgers Eaten</h2>
        <ul className="list">
            {burgerList.map(
                burger => {if (burger.eaten){
                    return <><li className="listItem"><span className="itemSpan">{burger.name}</span><button className="poopButton" onClick={poopBurger.bind(this, burger.id)}>&#128169; Poop It! &#128169;</button></li></>
                }} 
            )}
        </ul>
        </>
    )
}

export default BurgersEaten;
