import React from "react";
import Avatar from "./Avatar";
import contacts from "../contacts";
import Detail from "./Detail";


function Card(props){
	return(
		<div>
		      <h1 className="heading">My Contacts</h1>
		      <div className="card">
			        <div className="top">
			          <p>{props.id}</p>
			          <h2 className="name">{props.name}</h2>
			          <Avatar imgSrc={props.imgSrc}/>
			        </div>
			        <div className="bottom">
			        	<Detail detailInfo={props.tel}/>
			        	<Detail detailInfo={props.email}/>
			        </div>
		      </div>
		</div>
	);
}

export default Card;