import React, { useState, useEffect } from 'react';
import BurgersMade from './components/BurgersMade';
import BurgersEaten from './components/BurgersEaten';
import './App.css';
import firebase from "firebase";
import db from './firebase';

function App() {

  const [burgerList, setBurgerList] = useState ([]);

  useEffect(() => {
    renderList()
  }, []);

  const poopBurger = (id) => {
         firebase.firestore().collection("burgers")
            .doc(id)
            .delete()
            .then(() => {
              renderList();
            })
    }

    const makeBurger = (name) => {
        let burgersArray = []
        const data = {
          id: firebase
              .firestore()
              .collection("burgers")
              .doc().id,
          };

        const db = firebase.firestore();
            db.collection("burgers")
            .doc(data.id)
            .set({ name: name, eaten: false, id: data.id })
            .then(() => {
              renderList()
            })

            // console.log(name)
    }

    const eatBurger = (id) => {
        const db = firebase.firestore();
         db.collection("burgers")
            .doc(id)
            .update({ eaten: true })
            .then(() => {
              renderList();
            })
    }

    const renderList = () => {
      let burgersArray = []
      db.collection("burgers")
        .get()
        .then(function(fbData) {        
          fbData.forEach(function(doc) {
            let newData = { name: doc.data().name, eaten: doc.data().eaten, id: doc.id };
            burgersArray.push(newData)
          })
          setBurgerList(burgersArray);
        })
    }

    const wrapper={
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff'
    }

  return (
    <div className="App" style={wrapper}>
      <h1>Making Some Burgers</h1>
      <header className="App-header">
        <BurgersMade firebase={db} burgerList={burgerList} makeBurger={makeBurger} eatBurger={eatBurger}/>
        <BurgersEaten firebase={db} burgerList={burgerList} poopBurger={poopBurger}/>
      </header>
    </div>
  );

  
}

export default App;
