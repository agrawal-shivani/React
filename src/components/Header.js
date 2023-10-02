import React from "react";

const Title = () => (
	<a href="/">
		<img className="logo" alt="logo"
			 src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0"
		/>
	</a>);


const Header = () => {  //const HeaderComponent = function() {
	return (<div className="header">
		<Title/>
		<div className="nav-items">
			<ul className="nav-items">
				<li>Home</li>
				<li>About Us</li>
				<li>Contact</li>
				<li>Cart</li>
			</ul>
		</div>
	</div>);
};

export default Header;
