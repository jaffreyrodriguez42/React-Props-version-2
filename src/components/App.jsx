import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

console.log(contacts);

function createCard(contact){
	return(
		<Card name={contact.name} imgSrc={contact.imgURL} tel={contact.phone} email={contact.email} key={contact.id} id={contact.id} />
	);
	
}


function App(){
	return(
	<div>
		<Avatar imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkXzgMwVE6O9PUtZ0KqKgtQdSRmzQ-YFFYNA&usqp=CAU"/>
		{/*<Card name={contacts[0]["name"]} 
			  imgSrc={contacts[0]["imgURL"]} 
			  tel={contacts[0]["phone"]} 
			  email={contacts[0]["email"]}/>
	  	<Card name={contacts[1]["name"]} 
	  	  	  imgSrc={contacts[1]["imgURL"]} 
	  	      tel={contacts[1]["phone"]} 
	  	      email={contacts[1]["email"]}/>
	  	<Card name={contacts[2]["name"]} 
	  	  	  imgSrc={contacts[2]["imgURL"]} 
	  	  	  tel={contacts[2]["phone"]} 
	  	  	  email={contacts[2]["email"]}/>*/}
	  	  	  {contacts.map(createCard)}
	</div>


	);
	}

export default App;