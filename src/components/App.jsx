import React from "react";
import Card from "./Card";
import contacts from "../contacts";

console.log(contacts);

function App(){
	return(
	<div>
		<Card name={contacts[0]["name"]} 
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
	  	  	  email={contacts[2]["email"]}/>
	</div>
	);
}

export default App;