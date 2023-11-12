import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Card from "../components/Card";

const Favorites = () => {
	const { favoritos } = useContext(GlobalContext);

	return (
		<div>
			<h1 className="fav-title">Tu lista de favoritos</h1>
			<div className="favoritos-container">
				{favoritos.map((insecto) => (
					<Card
						insecto={insecto}
						key={insecto.key}
						name={insecto.name}
						foto={insecto.foto}
						descripcion={insecto.descripcion}
					/>
				))}
			</div>
		</div>
	);
};

export default Favorites;
