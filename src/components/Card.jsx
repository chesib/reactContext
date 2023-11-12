import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Card = ({ name, foto, descripcion, insecto }) => {
	const { agregarAFavoritos, favoritos } = useContext(GlobalContext);

	const isFavorito = favoritos.some((insc) => insc.key === name);

	return (
		<div
			className={`card ${isFavorito ? "favorito" : ""}`}
			onClick={() => agregarAFavoritos(insecto)}
		>
			<img src={foto} alt={name} className="card-image" />
			<div className="card-content">
				<h3 className="card-title">
					{name}{" "}
					{isFavorito && <i className="fas fa-heart favorito-icon" />}
				</h3>
				<p className="card-description">{descripcion}</p>
			</div>
		</div>
	);
};

export default Card;
