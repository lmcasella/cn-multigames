import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";

export default function Home() {

		const navigate = useNavigate();

		const handleClick = () => {
				navigate("/memotest");
		}

	return (
		
		<main
			className="main-container-home"
		>
			<div className="items-container-home">
				<div style={{marginBottom: "32px"}}>
					<div className="title-home-container">
						<h1 className="title-home" style={{alignSelf: "center"}}>CN Multigames</h1>
					</div>
					<p className="title-sub-home">Seleccione un juego</p>
				</div>

				<div className="items-home">
						<button className="button-home button-memotest" onClick={handleClick}>
							Memotest
						</button>

						<button className="button-home button-fastwords" style={{margin: '14px 0px'}}>
							(Próximamente) Palabras por Minuto
						</button>

						<button className="button-home button-quiz">
							(Próximamente) Adivina el Cartoon
						</button>
				</div>
			</div>
		</main>

	);
}
