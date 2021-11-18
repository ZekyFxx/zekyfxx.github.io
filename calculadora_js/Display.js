class Display{
	constructor(displayValorAnterior,displayValorActual){
		this.displayValorActual = displayValorActual;
		this.displayValorAnterior = displayValorAnterior;
		this.tipoOperacion = undefined;
		this.calculadora = new Calculadora();
		this.valorActual = '';
		this.valorAnterior = '';
		this.signos = {
			sumar: '+',
			restar: '-',
			dividir: '%',
			multiplicar: '*'
		}
	}
	borrar(){
		this.valorActual = this.valorActual.toString().slice(0,-1);
		this.imprimirValores();
	}
	borrarTodo(){
		this.valorActual = '';
		this.valorAnterior = '';
		this.tipoOperacion = undefined;
		this.imprimirValores();
	}
	agregarNumero(num){
		if(num === '.' && this.valorActual.includes('.')) return;
		this.valorActual = this.valorActual.toString() + num.toString();
		this.imprimirValores();
	}
	imprimirValores(){
		this.displayValorActual.textContent = this.valorActual;
		this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
	}
	computar(tipo){
		this.tipoOperacion !== 'igual' && this.calcular();
		this.tipoOperacion = tipo;
		this.valorAnterior = this.valorActual || this.valorAnterior;
		this.valorActual = '';
		this.imprimirValores();
	}
	calcular(){
		const valorAnterior = parseInt(this.valorAnterior);
		const valorActual = parseInt(this.valorActual);

		if(isNaN(valorActual) || isNaN(valorAnterior)) return;
		this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior,valorActual);

	}
}