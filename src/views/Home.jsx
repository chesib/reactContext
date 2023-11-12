import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Card from "../components/Card";

const Home = () => {
	const [error, setError] = useState(null);

	const { insectos, setInsectos } = useContext(GlobalContext);

	const fetchData = async () => {
		try {
			const response = await fetch("/insectosData.json");

			if (!response.ok) {
				throw new Error("No se pudo obtener la información");
			}

			const data = await response.json();
			setInsectos(data);
		} catch (error) {
			setError("Error al cargar los datos. " + error.message);
		}
	};

	useEffect(() => {
		fetchData(); // Llamada a la función que simula la solicitud a la API
	}, []);

	return (
		<div>
			{error ? <h1>{error}</h1> : <></>}

			<div className="card-container">
				{insectos.map((insecto) => (
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

export default Home;
