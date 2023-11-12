import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
	const [favoritos, setFavoritos] = useState([]);
	const [insectos, setInsectos] = useState([]);

	const agregarAFavoritos = (insecto) => {
		const isFavorite = favoritos.some((insc) => insc.id === insecto.id);
		console.log(favoritos);

		if (isFavorite) {
			const updateFavorites = favoritos.filter(
				(insc) => insc.id !== insecto.id
			);
			setFavoritos(updateFavorites);
		} else {
			const updateFavorites = [...favoritos, insecto];
			setFavoritos(updateFavorites);
		}
	};

	const state = {
		insectos,
		setInsectos,
		favoritos,
		setFavoritos,
		agregarAFavoritos,
	};

	return (
		<GlobalContext.Provider value={state}>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalProvider;
