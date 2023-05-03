
export class persona {

    id?: number;
    nombre: String;
    url_foto: String;
    descripcion: String;
    email:String;
    password:String;

    constructor(nombre: String, url_foto: String, descripcion: String, email:String, password:String){
        this.nombre = nombre;
        this.url_foto = url_foto;
        this.descripcion = descripcion;
        this.email = email;
        this.password = password;
    }
}