import React, {  useState } from 'react';

const BurgersMade = ({db, burgerList, makeBurger, eatBurger}) => {

  const [name, setName] = useState("");

  const onChange = (e) => setName(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        makeBurger(name);
        setName("");
    };

    return(
        <>
        <h2>Burgers Made</h2>
            <input className="nameInput" type="text" name="name" value={name} onChange={onChange}/>
            <button onClick={onSubmit} className="makeButton"> Make it</button>
        <ul className="list">
            {burgerList.map(
                burger => {if (!burger.eaten){
                    return <><li className="listItem"><span className="itemSpan">{burger.name}</span><button className="eatButton" onClick={eatBurger.bind(this, burger.id)}> Eat It! </button></li></>
                }} 
            )}
        </ul>
        </>
    )
}

export default BurgersMade;
