import React from "react";

function Card(props) {
    return (
        <div ClassName="card">
            <div><img alt={props.last} src={props.image}></img></div>
            <h3>Name: {props.name}</h3>
            <h3>Age: {props.age}</h3>
            <h3>Phone: {props.phone}</h3>
            <h3>Email: {props.email}</h3>
            </div>

    );
}

export default Card;