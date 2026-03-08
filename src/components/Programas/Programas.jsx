import imgGastos from "../../assets/gastosCat.png"
import ingresosCat from "../../assets/ingresosCat.png"
import imgMechanic from "../../assets/mechanic.png"

export const Programas = () => {
	return (
		<section className='programs'>
			<div className='program'>
				<img src={imgGastos} alt="Gastos" />
			</div>
			<div className='program'><img src={ingresosCat} alt="Gastos" /></div>
			<div className='program'>
				<img src={imgMechanic} alt="Mecanico" />
			</div>
		</section>
	);
};
