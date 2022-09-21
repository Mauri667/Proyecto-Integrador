export class Educacion {
    id?: number;
    nombreEdu: string;
    descripcionEdu: string;
    fechaEdu: string;
    imagenEdu: string;

    
    constructor(nombreEdu: string, descripcionEdu: string, fechaEdu: string, imagenEdu: string) {
        this.nombreEdu = nombreEdu;
        this.descripcionEdu = descripcionEdu;
        this.fechaEdu = fechaEdu;
        this.imagenEdu = fechaEdu;
    }
}
