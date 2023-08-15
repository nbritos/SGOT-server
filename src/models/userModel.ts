export interface IUsuario{
	id_usuario: number;
	rol?: number;
	estado?: number;
	dni?:number;
	password?: string;
	nombre?: string;
	apellido?:string;
	email?: string;
}