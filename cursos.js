/*
var idade=[17, 18, 19, 20, 20]
alert(alunos[0])


var serie={
    nome: "Teem Wolf",
    primeiroEpisodio:"5 de Junho 2011",
    emissoraOriginal:"MTV",
    generos:["adolecência","acão","Sobrenatural","terror"],
    temporadas: 6,
    personagens:["Stiles","Scott","Derek","Alisson","Lydia","Isaac","Malia","Kira","Liam","Peter"], 
    imagem:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcloud.estacaonerd.com%2Fwp-content%2Fuploads%2F2021%2F09%2F24140238%2Fmaxresdefault2.jpg&imgrefurl=https%3A%2F%2Festacaonerd.com%2Fteen-wolf-serie-ganha-filme-revival-com-parte-do-elenco-original%2F&tbnid=evT4X3S0kIhnlM&vet=12ahUKEwju27rnhvD8AhW8rpUCHVDHDv4QMygNegUIARDFAQ..i&docid=2StM3OWU3oCv4M&w=1920&h=1080&q=teen%20wolf&ved=2ahUKEwju27rnhvD8AhW8rpUCHVDHDv4QMygNegUIARDFAQ",
}


var nome = "Giovani";
var dia = 30;

var frase = nome + " faltou no dia " + dia + " no curso de "+ cursoProgramacao.nome;



var idade = prompt();

if (idade >= 18) {
    console.log("Maior de idade: "+ idade);
}
else{
    console.log("Menor de idade: " + idade)
}

var nota = prompt();

if (nota >= 60) {
    console.log("Aprovado");
}
else{
    console.log("Reprovado")

}


var peso = prompt("Peso");
var altura = prompt("Altura")
var imc = peso/(altura * altura);

console.log(imc)

if (imc < 18.5){
    console.log("magreza: "+ imc)
}
else if (imc < 24.9){
    console.log("normal: "+ imc)
}
else if (imc < 29.9){
    console.log("sobrepeso: "+ imc)
}
else if (imc <39.9){
    console.log("obesidade: "+ imc)
}
else if (imc >40 ){
    console.log("obesidade grave: "+ imc)
}

const alunos = ["Maria","Cecilia","Arthur","Giovani","Pedro","Luiz","João Vitor","Lucas","Vanderlei","João"]
alunos.forEach(nome=> console.log(nome));
*/



var cursoProgramacao = {
    nome:"Programação",
    descricao:"Cursos para quem tem interesse em ingressar na área de programação",
    topicos:["Tecnologia","Design UI/UX","Desenvolvimento Web"],
    imagem:"http://127.0.0.1:5500/img/programacao.jpg",
}

    var cursoAdministracao = {
        nome:"Administração",
        descricao:"Direcionado para quem queira trabalhar no setor administrativo e com finanças.",
        topicos:["Administração","Marketing","Finanças e Contabilidade"],
        imagem:"http://127.0.0.1:5500/img/administracao.jpg",
    
    }

var cursoEnfermagem = {
    nome:"Enfermagem",
    descricao:"Para você que gostaria de ingressar na área da saúde",
    topicos:["biosegurança","Primeiros socorros","Ministraçao de Medicamentos"],
    imagem:"http://127.0.0.1:5500/img/enfermagem.jpg",
}
var cursoSeguranca = {
    nome:"Segurança do Trabalho",
    descricao:"Para você que gostaria de estudar sobre Seg. Trab",
    topicos:["protenção","equipamentos","obras"],
    imagem:"https://th.bing.com/th/id/R.7d8440441c7f344b140e2cd90a7cefd7?rik=nsucLzbCHrCXdQ&riu=http%3a%2f%2fwww.opetroleo.com.br%2fwp-content%2fuploads%2f2017%2f10%2fabre-nova-vaga-para-t%c3%a9cnico-em-seguran%c3%a7a-do-trabalho.jpg&ehk=JhECPQZ10ZGh22nI0MhDLD5PNZVHZW016UZ1%2fM7URyg%3d&risl=&pid=ImgRaw&r=0",
}

var cursos = [cursoEnfermagem ,cursoProgramacao ,cursoAdministracao, cursoSeguranca ];

var ulCursos = document.getElementById("cursos-lista");

cursos.forEach(curso => {
       var topicosElement = "";
       curso.topicos.forEach(topico=>{
        topicosElement = topicosElement + `<li class="tex-box">${topico}</li>`
       })
        var liCurso = document.createElement("li");
        liCurso.innerHTML = `<img src=${curso.imagem} alt="Codigos">
        <div class="cursos-descricao">
            <span></span>
            <h2 id="tituloProgramador">${curso.nome}</h2>
            <p>${curso.descricao}
            </p>
            <ul id="topicos">
            ${topicosElement}
            </ul>
            <a href="#">Saiba Mais</a>
        </div>`;
        liCurso.classList = "item-curso"
        ulCursos.appendChild(liCurso)
 })


/*
var titulo= document.getElementById("titulo");
titulo.style.backgroundColor = "green";
titulo.style.color = "black"

var saibaMais=document.getElementById("btn-saibamais")
saibaMais.style.backgroundColor= "green"

var detalhe= document.getElementById("detalhe")
detalhe.style.backgroundColor="red"

var tituloProgramador =document.getElementById("tituloProgramador");
tituloProgramador.innerHTML="<h1>Programação</h1>"
var rodape= document.getElementById("rodape")
rodape.innerHTML="<h1>FOOTER</H1>"


var topicos = document.getElementById("topicos");
console.log(topicos)

var liTopico = document.createElement("li");
liTopico.innerText = "Front-end";
console.log(liTopico)

topicos.appendChild(liTopico)


var listaDeBotoes=document.getElementById("lista-botoes")
console.log(listaDeBotoes)
var botao= document.createElement("a")

botao.innerHTML="<li> sobre nos</li>"
console.log(botao)

listaDeBotoes.appendChild(botao)          

*/