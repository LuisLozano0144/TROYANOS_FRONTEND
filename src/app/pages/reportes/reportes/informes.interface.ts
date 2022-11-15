export interface Reportes {
  Id_Produccion?: string;
  Fecha_Produccion: Date | string;
  Primer_Nombre: string;
  Segundo_Nombre: string;
  Primero_Apellido: string;
  Segundo_Apellido: string;
  Sexo_Encargado: string;
  Fecha_Nacimiento: Date | string;
  Tipo_Documento: string;
  Numero_Documento: number;
  Rol_Encargado: string;
  Nombre_producto: string;
  Peso_Producto: string;
  Dimensiones_producto: string;
  num_totalProduccion: number;
  num_Defectuosos_Produccion: number;
}
export interface Select {
  name: string;
  code: string;
}
