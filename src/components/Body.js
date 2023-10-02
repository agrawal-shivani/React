import {useState} from "react";
import {restrauntList} from "../constants";
import RestrauntCard from "./RestrauntCard";

function filterData(searchText, restraunts) {
	const filterData = restraunts.filter((resturant) => {
		resturant.name.includes(searchText);
	})
	return filterData;

}

const Body = () => {
	// const searchTxt = "KFC";

	//searchText is a local state variable
	const [searchText, setSearchText] = useState(); // to create state variable.
	const [restraunt, setRestraunt] = useState(restrauntList)
	// const [searchClicked, setSearchClicked] = useState("false");
	return (
		<>
			<div className="search-container">
				<input type="text" className="search-input"
					   value={searchText}
					   onChange={
						   (e) => setSearchText(e.target.value)
					   }
					   placeholder="search"/>
				{/*<h1>{searchClicked}</h1>*/}
				<button className="search-btn" onClick={() => {
					//need to filter the data
					const data = filterData(searchText, restraunt);
					//update the state - restraunts
					setRestraunt(data)
				}
				}>Search
				</button>
			</div>
			<div className="restrauntList">
				{restraunt.map((restraunt) => {
					return (<RestrauntCard {...restraunt} key={restraunt.id}/>)
				})}
			</div>
		</>
	)
};

export default Body;
