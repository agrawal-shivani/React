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

const heading1 = React.createElement("h1", {
	id: "title1",
	style: {
		background: "red",
	},
	className: "title"
}, "Hello World")
const heading2 = React.createElement("h2", {
	id: "title2",
}, "Hello World Two")
const container = React.createElement("div", {
	id: "container",
}, [heading1,
	heading2])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(container)
