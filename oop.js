class Manga {
    // constructor(t, a, p, s, i){
    //     this.title = t,
    //     this.author = a,
    //     this.price = p,
    //     this.stock = s,
    //     this.id = i
    // }
    //Por lo regular se le da el mismo nombre a los parametros y propiedades
    #title
    #author
    #price
    #stock
    #id

    constructor(title, author, price, stock, id){
        this.#title = title, //con el signo de # indicamos que esta propiedad es privada
        this.#author = author,
        this.#price = price,
        this.#stock = stock,
        this.#id = id
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
        Title: ${this.#title}, 
        Author: ${this.#author},
        Price: ${this.#price},
        ID: ${this.#id} 
        `
        if(this.#stock > 0){
            info += `Stock: ${this.#stock}`
        }else{
            info += `Not available`
        }
        console.log(info);
    }
    //Getters sirven para OBTENER el valor de una propiedad (Lectura)
    get title(){
        return this.#title;
    }

    //Los Setters sirven para ASIGNAR el valor de una propiedad (Escritura)
    set title(new_title){
        this.#title = new_title;
    }
}

//Instanciando la Clase
//Para este proyecto los mangas tendran como info solo el titulo, autor, precio, stock y ID
const manga1 = new Manga('One Piece', 'Eiichiro Oda', 109, 70, 1); //this hace referencia a manga1
const manga2 = new Manga('Jujutsu Kaisen', 'Gege Akutami', 115, 66, 2); //this hace referencia a manga2
// console.log(manga1);
// console.log(manga1.title); //Sintaxis de punto
// console.log(manga1['author']); //Sintaxis de corchetes

//Modificando Valores
// manga1.author = 'Jesus Roman';
// console.log(manga1); //Ahora soy yo

//Llamando al metodo por la sintaxis de punto
// console.log(manga1.getInfo());

//Aqui ya agregamos la propiedad title que sea privada
// console.log(manga1.title); //entonces aqui nos marcaria error 
// console.log(manga1.#title); //entonces aqui nos marcaria error 
// console.log(manga1); //aqui si nos imprimiria el objeto completo, mostrando el titulo
console.log(manga1);

//Ya teniendo el get, la usaremos para acceder al titulo
console.log(manga1.title);
//Si vemos en la consola todo el objeto, veremos que hay 2 titles, uno con #title y otro solo title: (...), esto significa que ya las 2 
//estan sincronizadas(la privada y la publica)

//Ya teniendo el set, vamos a asignarle un nuevo titulo
manga1.title = 'New Title'
console.log(manga1); //Aqui el objeto saldra con title: new title
console.log(manga1.title); //New title

console.log(manga1.getInfo());

//Agregando mas funcionalidad al proyecto, en este caso seran Animes
//Los animes tendran las mismas propiedas mas: casa animadora y genero
//Osease en este caso usaremos la HERENCIA
class Anime extends Manga{
    #animationStudio
    #illustrator
    constructor(title, author, price, stock, id, animationStudio, illustrator){
        super(title, author, price, stock, id)
        this.#animationStudio = animationStudio,
        this.#illustrator = illustrator
    }
}

//Instanciando el Anime
const anime1 = new Anime('One Punch Man', 'ONE', 300, 25, 1, 'MadHouse', 'Yusuke Murata');
console.log(anime1);
console.log(anime1.getInfo()); //la funcion getInfo fue heredada, entonces no fue necesario escribirla de nuevo en la clase de Anime