import { Pais } from "./pais.models";

export class Repartidor{
  id? : string;
  dni: string;
  nombre: string;
  edad: number;
  capacidad_transporte: number;
  pais_origen: Pais | null;
  unidad_propia: boolean;

  constructor(dni = '', nombre = '', edad = 0, capacidad = 0, pais : Pais | null = null, unidad = false, id = '') {
    this.id = id;
    this.dni = dni;
    this.nombre = nombre;
    this.edad = edad;
    this.capacidad_transporte = capacidad;
    this.unidad_propia = unidad;
    this.pais_origen = pais;
  }

}