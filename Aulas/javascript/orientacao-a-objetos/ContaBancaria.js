class ContaBancaria {
	constructor(agencia, numero, tipo) {
		this.agencia = agencia;
		this.numero = numero;
		this.tipo = tipo;
		this._saldo = 0; //usar "_" no valor que terá get e set.
	}

	get saldo() {
		return this._saldo;
	}

	set saldo(valor) {
		this._saldo = valor;
	}

	sacar(valor) {
		if (valor > this._saldo) {
			return 'Saldo insuficiente';
		}
		this._saldo -= valor;
		return this._saldo;
	}

	depositar(valor) {
		if (valor < 1) {
			return 'Valor invalido';
		}
		this._saldo += valor;
		return this._saldo;
	}
}

// classe herdada / construtor
class ContaCorrente extends ContaBancaria {
	constructor(agencia, numero, cartaoCredito) {
		super(agencia, numero);
		this.tipo = 'corrente';
		this._cartaoCredito = cartaoCredito;
	}

	get cartaoCredito() {
		return this._cartaoCredito;
	}

	set cartaoCredito(valor) {
		this._cartaoCredito = valor;
	}
}

// classe herdada / construtor
class ContaPoupanca extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'poupanca';
	}

}

// classe herdada / construtor
class ContaUniversitaria extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'universitaria';
	}
	sacar(valor) {
		if (valor > this._saldo) {
			return 'Saldo insuficiente';
		}else if (valor > 500) {
			return 'Limite de saque R$ 500,00';
		}
		this._saldo -= valor;
	}
}
