import React from "react";
import Card from "./Card";

function App(){
	return(
	<div>
		<Card name="Beyonce" 
			  imgSrc="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" 
			  imgAlt="avatar_img" 
			  tel="+123 456 789" 
			  email="b@beyonce.com"/>
		<Card name="Donovan Mitchell" 
			  imgSrc="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" 
			  imgAlt="avatar_img" 
			  tel="+987 654 321" 
			  email="jack@nowhere.com" img/>
		<Card name="Jaff Rodriguez" 
			  imgSrc="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" 
			  imgAlt="avatar_img" 
			  tel="+918 372 574" 
			  email="gmail@chucknorris.com" />
	</div>
	);
}

export default App;