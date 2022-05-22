for (i = 0; i < 8; i++) {
    let tr = document.createElement("tr");
    for (j = 0; j < 8; j++) {
        let td = document.createElement("td");
        tr.appendChild(td);
        td.style.backgroundColor = "black";
        td.style.width = "70px";
        td.style.height = "70px";
        if ((i + j) % 2 == 0) {
            td.style.backgroundColor = "white";
        }
    }
    document.getElementById("boardOuter").appendChild(tr);
}

