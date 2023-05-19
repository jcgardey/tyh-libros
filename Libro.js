class Libro{
    constructor(titulo, autor, costo){
        this._titulo = titulo;
        this._autor = autor;
        this._costo = costo;
    }
    precio(){
        return this._costo + this.comision();
    }
    comision(){
        return this._costo * this.porcentajeDeComision();
    }
    porcentajeDeComision(){
        throw new Error("Falta implementar el % de comision")
    }
}

module.exports = Libro;