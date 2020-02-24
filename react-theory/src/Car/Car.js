import React from 'react'

/*
    як можна поетапно спростити код
*/
// function car() {
//     return (
//         <h2>This is car component</h2>
//     )
// }

// const car = () => {
//     return (<h2>This is car component</h2>)
// }

// const car = () => <h2>This is car component</h2>



export default props => (
    <div>
        <h3>Car name: {props.name}</h3>
        { props.children }
        <p>Year: <strong>{props.year}</strong></p>
    </div>
)