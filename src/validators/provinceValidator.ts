// import { IProvincia } from "models/provinciaModel";


// //renombrar la clase y métodos
// class ProvinceValidator {
//     private nombreRegex: RegExp;
//     private capitalRegex: RegExp;
//     private detallesRegex: RegExp;
//     private ubicacionImagenRegex: RegExp;
//     private maxNombreLength: number;
//     private maxCapitalLength: number;
//     private maxDetallesLength: number;
//     private maxUbicacionImagenLength: number;

//     constructor() {
//         this.nombreRegex = /^[A-Za-z\s]+$/;
//         this.capitalRegex = /^[A-Za-z\s]+$/;
//         this.detallesRegex = /^[A-Za-z0-9\s]+$/;
//         this.ubicacionImagenRegex = /^\/[A-Za-z0-9\/_-]+.(jpg|jpeg|png)$/;
//         this.maxNombreLength = 80;
//         this.maxCapitalLength = 80;
//         this.maxDetallesLength = 120;
//         this.maxUbicacionImagenLength = 200;
//     }

//     public validate(provincia: IProvincia): string | null {
//         if (!this.nombreRegex.test(provincia.nombre)) {
//             return 'El nombre de la provincia es inválido!';
//         }

//         if (provincia.capital.length > this.maxCapitalLength) {
//             return 'La capital debe tener como máximo ' + this.maxCapitalLength + ' caracteres.';
//         }

//         if (!this.capitalRegex.test(provincia.capital)) {
//             return 'El nombre de la capital es inválido!';
//         }

//         if (provincia.descripcion.length > this.maxDetallesLength) {
//             return 'La descripción debe tener como máximo ' + this.maxDetallesLength + ' caracteres.';
//         }

//         if (!this.detallesRegex.test(provincia.descripcion)) {
//             return 'Los detalles son inválidos!';
//         }

//         if (provincia.imagen.length > this.maxUbicacionImagenLength) {
//             return 'La ubicación de la imagen debe tener como máximo ' + this.maxUbicacionImagenLength + ' caracteres.';
//         }

//         if (!this.ubicacionImagenRegex.test(provincia.imagen)) {
//             return 'La ubicación de la imagen es inválida!';
//         }

//         return null;
//     }
// }

// export default ProvinceValidator;