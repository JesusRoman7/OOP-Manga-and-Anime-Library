class Manga {
    // constructor(t, a, p, s, i){
    //     this.title = t,
    //     this.author = a,
    //     this.price = p,
    //     this.stock = s,
    //     this.id = i
    // }
    //Por lo regular se le da el mismo nombre a los parametros y propiedades
    constructor(title, author, price, stock, id){
        this.title = title,
        this.author = author,
        this.price = price,
        this.stock = stock,
        this.id = id
        //La palabra this hace referencia al objeto que esta ejecutando al codigo en cuestion, tomando por ejemplo al objeto
        //manga1, lo que se esta escribiendo alla arriba cuando creemos el objeto es
        // manga1.title = title,
        // manga1.author = author,
        // manga1.price = price,
        // manga1.stock = stock,
        // manga1.id = id

    }
    //Un metodo no es mas que una funcion definida dentro de una clase
    getInfo(){
        console.log('Aqui esta toda la informacion');

        let info = `
        Title: ${this.title}, 
        Author: ${this.author},
        Price: ${this.price},
        ID: ${this.id} 
        `
        if(this.stock > 0){
            info += `Stock: ${this.stock}`
        }else{
            info += `Not available`
        }
        console.log(info);
    }
}

//Instanciando la Clase
//Para este proyecto los mangas tendran como info solo el titulo, autor, precio, stock y ID
const manga1 = new Manga('One Piece', 'Eiichiro Oda', 109, 70, 1); //this hace referencia a manga1
const manga2 = new Manga('Jujutsu Kaisen', 'Gege Akutami', 115, 66, 2); //this hace referencia a manga2
console.log(manga1);
console.log(manga1.title); //Sintaxis de punto
console.log(manga1['author']); //Sintaxis de corchetes

//Modificando Valores
// manga1.author = 'Jesus Roman';
// console.log(manga1); //Ahora soy yo

//Llamando al metodo por la sintaxis de punto
console.log(manga1.getInfo());