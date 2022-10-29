export class Proyectos{
    id?:number;
    titulo:String;
    link:String;
    descripcionP:String;
    imagen:String;

 constructor(titulo:String, link:String,descripcionP:String, imagen:String){
    this.titulo = titulo;
    this.link = link;
    this.descripcionP = descripcionP;
    this.imagen = imagen;

 }
}