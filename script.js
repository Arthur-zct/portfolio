function Elementos(){
    let li = document.createElement("li");
    li.classList = "link";
    let a = document.createElement("a");
    let imagem = document.createElement("img");
    let infos =[li, a, imagem];
    return infos;
}



function AddInfos(link, imagem){
    let infos = Elementos();
    let li = infos[0];
    let a = infos[1];
    let img = infos[2]

    a.href = link;
    a.target = "_blank";
    img.src = imagem;
    a.appendChild(img);
    li.appendChild(a);

    return li;
}




function Projetos(tipo) {
    let Links = [];
    let Lista = document.getElementById("lista");
    let Imagens = [];
    let li = document.createElement("li")

    if(Lista.children.length != 0) {
        let filhos = document.getElementsByClassName("link")
        for(let i = filhos.length - 1; i >= 0; i--){
            filhos[i].remove()
        }    
    }
    

    if(tipo == "Html-css") {
        Links = ["https://arthur-zct.github.io/siteV/", "https://arthur-zct.github.io/copia-da-interface-do-whatsapp-web/", "https://arthur-zct.github.io/loginTwtcopia/"];
        Imagens = ["img/html-css_1.png", "img/html-css_2.png", "img/html-css_3.png"];
    } else if(tipo == "javascript") {
        Links = ["https://arthur-zct.github.io/ListadTarefas/", "https://arthur-zct.github.io/perguntas/"];
        Imagens = ["img/javascript-1.png", "img/javascript-2.png"];
    } else if (tipo == "react") {
        Links = ["https://Arthur-zct.github.io/imccalculo"];
        Imagens = ["img/react-1.png"];
    }
    
    

    for(let x = 0; x < Links.length; x++){
        let a = AddInfos(Links[x], Imagens[x]) 
        Lista.appendChild(a)
    }

    
    
}









