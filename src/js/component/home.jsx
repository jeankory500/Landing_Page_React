import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello World!</h1>
			<p>
				Made by{" "}
				<a href="https://github.com/jeankory500">Jeankory Valdes</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
