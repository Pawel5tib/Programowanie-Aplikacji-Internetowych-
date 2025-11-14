function wykonane(przycisk) {
    let element = przycisk.parentElement;
    element.style.textDecoration = "line-through";
}

function dodajZadanie() {

    let pole = document.getElementById("pole");
    let tresc = pole.value.trim();

    if (tresc === "") return; 

    let lista = document.getElementById("lista");

    let nowy = document.createElement("li");
    nowy.textContent = tresc + " ";

    let btn = document.createElement("button");
    btn.textContent = "Wykonane";
    btn.onclick = function() { wykonane(btn); };

    nowy.appendChild(btn);

    lista.appendChild(nowy);
    pole.value = "";
}
