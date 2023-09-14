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
}, [heading1, heading2])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(container)
