import React from "react";

function Detail(props){
	return(
		<div className="bottom">
			<p className="info">{props.detailInfo}</p>
		</div>
	);
}

export default Detail;