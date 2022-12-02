//botao
let carregar = document.querySelector("#carregar");
let teste = document.querySelector("h2");
let autor = document.querySelector(".author-avatar");
let autorImg = autor.querySelector("img");

const InfoApi = function () {
    var url = 'https://6388fbf0a4bb27a7f796c4f7.mockapi.io/user/2';

    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let xhr = JSON.parse(this.responseText);

            teste.innerHTML = xhr.name;
            autorImg.src = xhr.avatar;
        }
    };

    ajax.open('GET', url, true);
    ajax.send();

};

carregar.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(xhr.avatar);
})
