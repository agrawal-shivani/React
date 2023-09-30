import React from 'react';
import ReactDOM from 'react-dom/client';

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

const heading1 = React.createElement("h1", {
	id: "title1",
	key: "h1",
	style: {
		background: "red",
	},
	className: "title"
}, "Hello World")
const heading2 = React.createElement("h2", {
	id: "title2",
	key: "h2",
}, "Hello World Two")
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

const Heading3 = () => (<h1 id="title"
					  key="h1" tabIndex="1" className="title">
	Namaste React</h1>);

const heading4 = (<h1 id="title"
							key="h1" tabIndex="1" className="title">
	Namaste React</h1>);

var x = 10;

// const data = api.getData();


//functional component

const HeaderComponent = () => {  //const HeaderComponent = function() {
	return (<div>
		{/*{(heading3())}*/}
		<Heading3 />
		{heading4}
		{x}
		{/*{data}*/}
		{console.log("abc")}
		<h2>Header Component h1</h2>
		<h2>Header Component h2</h2>
	</div>);
}

const HeaderComponent2 = () => (
	<div>
		<h1>Header Component h1</h1>
		<h2>Header Component h2</h2>
	</div>
);

const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading3 )
root.render(<HeaderComponent /> )
