function Elementos(){
    let li = document.createElement("li");
    li.classList = "link";
    let a = document.createElement("a");
    let imagem = document.createElement("img");
    let infos =[li, a, imagem];
    return infos;
}



function AddInfos(link, imagem, descri){
    let infos = Elementos();
    let li = infos[0];
    let a = infos[1];
    let img = infos[2]

    a.href = link;
    a.target = "_blank";
    img.src = imagem;
    img.title = descri;
    a.appendChild(img);
    li.appendChild(a);

    return li;
}




function Projetos(tipo) {
    let Links = [];
    let Lista = document.getElementById("lista");
    let Imagens = [];
    let Descricao = [];

    if(Lista.children.length != 0) {
        let filhos = document.getElementsByClassName("link")
        for(let i = filhos.length - 1; i >= 0; i--){
            filhos[i].remove()
        }    
    }
    

    if(tipo == "Html-css") {
        Links = ["https://arthur-zct.github.io/siteV/", "https://arthur-zct.github.io/copia-da-interface-do-whatsapp-web/", "https://arthur-zct.github.io/loginTwtcopia/"];
        Imagens = ["img/html-css_1.png", "img/html-css_2.png", "img/html-css_3.png"];
        Descricao = ["Um site de vendas simples feito apenas com html e css, também possui uma responsividade simples.", "Uma cópia da interface inicial do whatsApp web.", "Uma cópia da interface de login do twitter web."]
    } else if(tipo == "javascript") {
        Links = ["https://arthur-zct.github.io/ListadTarefas/", "https://arthur-zct.github.io/perguntas/"];
        Imagens = ["img/javascript-1.png", "img/javascript-2.png"];
        Descricao = ["Uma lista de tarefas feita com a opção de adicionar tarefa, excluir, concluir e editar.", "Um site de perguntas bem simples que diz qual linguagem front-end basica é mais adequada para você."]
    } else if (tipo == "react") {
        Links = ["https://Arthur-zct.github.io/imccalculo", "https://arthur-zct.github.io/Prev-temp/"];
        Imagens = ["img/react-1.png", "img/tempo.png"];
        Descricao = ["Um site com uma calculadora de imc feito com react.", "um site que mostra o tempo atual."]
    }
    
    

    for(let x = 0; x < Links.length; x++){
        let a = AddInfos(Links[x], Imagens[x], Descricao[x]) 
        Lista.appendChild(a)
    }

    
    
}









