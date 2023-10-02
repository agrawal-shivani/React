import React from "react";
import img_cdn from "../constants";

const RestrauntCard = ({name, image, cusine, rating}) => {
	// const {name , image , cusine , rating} = restraunt;
	return (
		<div className="card">
			<img src={image}/>
			<h2>{name}</h2>
			<h3>{cusine.join(",")}</h3>
			<h4>{rating} star</h4>
		</div>
	)
};

export default RestrauntCard;
