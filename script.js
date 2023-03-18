//OBJETOS

const w = { //OBJETO
    nome: 'Bruno', //PROPRIEDADE
    sobrenome: 'Vinicius', //PROPRIEDADE
    idade: 17 //PROPRIEDADE
}

function criaPessoa(nome, sobrenome, idade) { //OBJETO
    return {
        nome: nome, //PROPRIEDADE
        sobrenome: sobrenome, //PROPRIEDADE
        idade: idade, //PROPRIEDADE
        fala(){ //METODO
            console.log(`${this.nome} ${this.sobrenome} está falando oi...`) 
        }
    }
}



const pessoal = criaPessoa('Bruno', 'Vinicius', 25); 
const pessoa2 = criaPessoa('Joao', 'Lorenzo', 6);
const pessoa3 = criaPessoa('Carina', 'Ciumara', 42);
const pessoa4 = criaPessoa('Vinicius', 'Santa Capita', 6);

pessoa2.fala();