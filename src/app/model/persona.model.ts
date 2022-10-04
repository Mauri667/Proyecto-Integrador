export class persona {
    id?: number;
    nombre: String;
    apellido: String;
    img: String;
    descripcion: String;
    titulo: String;
    bannerURL: String;


    constructor(nombre: String, apellido: String, img: String, descripcion: String, titulo: String, bannerURL: String) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.descripcion = descripcion;
        this.titulo = titulo;
        this.bannerURL = bannerURL;

    }
}