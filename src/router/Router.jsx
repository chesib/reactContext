import { Routes, Route } from "react-router-dom";

import Home from "../views/Home";
import Favorites from "../views/Favorites";
import NotFound from "../views/NotFound";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/favoritos" element={<Favorites />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default Router;
