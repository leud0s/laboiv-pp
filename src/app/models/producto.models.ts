import { Pais } from "./pais.models";

export class Producto{
  id? : string;
  codigo: string;
  descripcion: string;
  precio: number;
  stock: number;
  pais_origen: Pais | null;
  comestible: boolean;

  constructor(codigo = '', descripcion = '', precio = 0, stock = 0, pais : Pais | null = null, comestible = false, id = '') {
    this.id = id;
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.precio = precio;
    this.stock = stock;
    this.comestible = comestible;
    this.pais_origen = pais;
  }

}