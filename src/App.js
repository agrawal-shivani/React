import React from 'react';
import ReactDOM from 'react-dom/client';
//Default import
import Header from '../components/Header';
import * as XYZ from '../components/Header';

//named import
// import {Title} from "../components/Header";
// import {Title , Header} from "../components/Header";

/*
created a server for you
* parcel - HMR - hot module replacement
* File watcher algorithm -
* bundling
* minified
* cleaning the code - remove console.log
* manage dev and production built
* it is superfast
* image optization
* catching while development
* cpmpression the files
* compatible with older versions of a browser
* gives this functionality to enable https on development
* parcel manages the port number also
* consistent hashing algorithms
* zero confih bundler
* we have package manager which handle or tAKE care of transitive dependency of our code.
*
*
* */

// React.createElement => Object => HTML(DOM) // React.createElement gives us object and this object convert itself into HTML DOM.

// const heading1 = React.createElement("h1", {
// 	id: "title1",
// 	key: "h1",
// 	style: {
// 		background: "red",
// 	},
// 	className: "title"
// }, "Hello World")
// const heading2 = React.createElement("h2", {
// 	id: "title2",
// 	key: "h2",
// }, "Hello World Two")
// const container = React.createElement("div", {
// 	id: "container",
// }, [React.createElement("h1", {
// 	id: "title1",
// 	key: "h1",
// 	style: {
// 		background: "red",
// 	},
// 	className: "title"
// }, "Hello World"),
// 	React.createElement("ul", {}, [React.createElement("li", {}, "about us"),React.createElement("li", {}, "about us")])])


//JSX  => react.createElement  =>  object => HTML(DOM)

// const Heading3 = () => (<h1 id="title"
// 					  key="h1" tabIndex="1" className="title">
// 	Namaste React</h1>);
//
// const heading4 = (<h1 id="title"
// 							key="h1" tabIndex="1" className="title">
// 	Namaste React</h1>);
//
// var x = 10;

// const data = api.getData();


//functional component

// const HeaderComponent = () => {  //const HeaderComponent = function() {
// 	return (<div>
// 		{/*{(heading3())}*/}
// 		<Heading3 />
// 		{heading4}
// 		{x}
// 		{/*{data}*/}
// 		{console.log("abc")}
// 		<h2>Header Component h1</h2>
// 		<h2>Header Component h2</h2>
// 	</div>);
// }

// const HeaderComponent2 = () => (
// 	<div>
// 		<h1>Header Component h1</h1>
// 		<h2>Header Component h2</h2>
// 	</div>
// );

//_____________________________________new ____________________________________________

// const Title = () => (
// 	<a href="/">
// 		<img className="logo" alt="logo"
// 			 src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0"
// 		/>
// 	</a>);
//
//
// const Header = () => {  //const HeaderComponent = function() {
// 	return (<div className="header">
// 		<Title/>
// 		<div className="nav-items">
// 			<ul className="nav-items">
// 				<li>Home</li>
// 				<li>About Us</li>
// 				<li>Contact</li>
// 				<li>Cart</li>
// 			</ul>
// 		</div>
// 	</div>);
// };

// const burgerKing = {
// 	name: "Burger King",
// 	image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/52dc3d4b494a4f9b891981a170573a24",
// 	cusine: ["Burger",
// 			 "American"],
// 	rating: "4.2"
// }


// const config = [
// 	{
// 		type: "carousel",
// 		cards: [
// 			{
// 				offerName: "50% off"
// 			},
// 			{
// 				offerName: "No Delivery Charges"
// 			}
// 		]
// 	},
// 	{
// 		type: "restraunts",
// 		cards: [
// 			{
// 				name: "Burger King",
// 				image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/52dc3d4b494a4f9b891981a170573a24",
// 				cusine: ["Burger",
// 						 "American"],
// 				rating: "4.2"
// 			},
// 			{
// 				name: "KFC",
// 				image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/52dc3d4b494a4f9b891981a170573a24",
// 				cusine: ["Burger",
// 						 "American"],
// 				rating: "4.2"
// 			}
// 		]
// 	}
// ]
//
//
const restrauntList = [{
	name: "Burger King",
	image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/52dc3d4b494a4f9b891981a170573a24",
	cusine: ["Burger",
			 "American"],
	rating: "4.2",
	id:"1"
},
	{
		name: "KFC",
		image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426",
		cusine: ["Burger",
				 "American"],
		rating: "4.1",
		id:"2"
	},
	{
		name: "Mc'D",
		image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fljjaptxnbdxi1epxlno",
		cusine: ["Burger",
				 "Tasty"],
		rating: "4.8",
		id:"3"
	}
]
//
// const RestrauntCard = (props) => {
// 	console.log(props)
// 	return (
// 		<div className="card">
// 			<img src={props.restraunt?.image}/>
// 			<h2>{props.restraunt?.name}</h2>
// 			<h3>{props.restraunt?.cusine.join(",")}</h3>
// 			<h4>{props.restraunt?.rating} star</h4>
// 		</div>
// 	)
// }

// const RestrauntCard = ({restraunt}) => {
// 	const {name , image , cusine , rating} = restraunt;
// 	return (
// 		<div className="card">
// 			<img src={image}/>
// 			<h2>{name}</h2>
// 			<h3>{cusine.join(",")}</h3>
// 			<h4>{rating} star</h4>
// 		</div>
// 	)
// }

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
}

// const Body = () => {
// 	return (
// 		<div className="restrauntList">
// 			<RestrauntCard name={restrauntList[0].name} image={restrauntList[0].image}/>
// 			<RestrauntCard name={restrauntList[1].name} image={restrauntList[1].image}/>
// 			<RestrauntCard name={restrauntList[2].name} image={restrauntList[2].image}/>
// 			{/*<RestrauntCard restraunt={restrauntList[0]}/>*/}
// 			{/*<RestrauntCard restraunt={restrauntList[0]}/>*/}
// 			{/*<RestrauntCard restraunt={restrauntList[0]}/>*/}
// 			{/*<RestrauntCard restraunt={restrauntList[0]}/>*/}
// 		</div>
// 	)
// };


// const Body = () => {
// 	return (
// 		<div className="restrauntList">
// 			<RestrauntCard {...restrauntList[0]}/>
// 			<RestrauntCard {...restrauntList[1]}/>
// 			<RestrauntCard {...restrauntList[2]}/>
// 			{/*<RestrauntCard restraunt={restrauntList[0]}/>*/}
// 			{/*<RestrauntCard restraunt={restrauntList[0]}/>*/}
// 			{/*<RestrauntCard restraunt={restrauntList[0]}/>*/}
// 			{/*<RestrauntCard restraunt={restrauntList[0]}/>*/}
// 		</div>
// 	)
// };


const Body = () => {
	return (
		<div className="restrauntList">
			{restrauntList.map((restraunt) => {
				return(<RestrauntCard {...restraunt} key={restraunt.id}/>)
			})}
			{/*<RestrauntCard {...restrauntList[0]}/>*/}
			{/*<RestrauntCard {...restrauntList[1]}/>*/}
			{/*<RestrauntCard {...restrauntList[2]}/>*/}
			{/*<RestrauntCard restraunt={restrauntList[0]}/>*/}
			{/*<RestrauntCard restraunt={restrauntList[0]}/>*/}
			{/*<RestrauntCard restraunt={restrauntList[0]}/>*/}
			{/*<RestrauntCard restraunt={restrauntList[0]}/>*/}
		</div>
	)
};

const Footer = () => {
	return (
		<h4> Footer</h4>
	)
};
//
//
const AppLayout = () => {
	return (
		<React.Fragment>
			<Header/>
			<Body/>
			<Footer/>
		</React.Fragment>
	)
}


// const jsx = (
// 	<React.Fragment>
// 		<h4>Hello</h4>
// 		<h3>World</h3>
// 	</React.Fragment>
// );

// const styleJsx = {
// 	backgroundColor: "red",
// }

// const jsx = (
// 	<>
// 		<h4>Hello</h4>
// 		<h3>World</h3>
// 	</>
// );
//inline styling in react
// const jsx = (
// 	<div style={styleJsx}>
// 		<h4>Hello</h4>
// 		<h3>World</h3>
// 	</div>
// );


const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading3 )
root.render(<AppLayout/>)
