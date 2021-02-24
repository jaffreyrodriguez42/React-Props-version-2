import React from "react";

function Card(props){
	return(
		<div>
			<h1>My Contacts</h1>

			<h2>{props.name}</h2>
			<img
			  src={props.imgSrc}
			  alt={props.imgAlt}
			/>
			<p>{props.tel}</p>
			<p>{props.email}</p>
		</div>
	);
}

export default Card;