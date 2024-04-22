export default class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  calcularImpuesto() {
    let impuesto =
      (this.impuesto.montoBrutoAnual - this.impuesto.deducciones) * 0.21;
    return impuesto;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  get impuesto() {
    return this._impuesto;
  }

  set impuesto(nuevoImpuesto) {
    this._impuesto = nuevoImpuesto;
  }
}
