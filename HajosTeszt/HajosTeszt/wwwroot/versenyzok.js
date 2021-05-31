window.onload = () => {

    document.getElementById("add").addEventListener("click", () => {
        
        let adat = {
            nev: document.getElementById("name").value,
            nem: document.getElementById("sex").value,
            szulido: document.getElementById("date").value,
            nemzetiseg: document.getElementById("nationality").value
        }

        fetch('/api/drivers',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(adat)
            })
            .then(x => {

                let date = document.getElementById("date").value;
                let name = document.getElementById("name").value;
                let sex = document.getElementById("sex").value;
                let nat = document.getElementById("nationality").value;

                if (date != "" && name == "" && sex == "" && nat == "" || date != "" && name == "" && sex == "" || date != "" && name == "" && nat == "" || date != "" && sex == "" && nat == "" || date != "" && name == "" || date != "" && sex == "" || date != "" && nat == "") {
                    alert("Sikertelen hozzáadás");

                    if (document.getElementById("name").value == "") {
                        document.getElementById("pName").innerHTML = "Adj meg egy nevet!";
                    }
                    else {
                        document.getElementById("pName").innerHTML = "";
                    }

                    if (document.getElementById("sex").value == "") {
                        document.getElementById("pSex").innerHTML = "Add meg az illető nemét!";
                    }
                    else {
                        document.getElementById("pSex").innerHTML = "";
                    }

                    if (document.getElementById("date").value == "") {
                        document.getElementById("pDate").innerHTML = "Add meg a születési dátumot!";
                    }
                    else {
                        document.getElementById("pDate").innerHTML = "";
                    }

                    if (document.getElementById("nationality").value == "") {
                        document.getElementById("pNationality").innerHTML = "Add meg az illető nemzetiségét!";
                    }
                    else {
                        document.getElementById("pNationality").innerHTML = "";
                    }
                }
                else {
                    if (x.ok) {
                        alert("Sikeres hozzáadás");
                        location.reload();
                    }
                    else {
                        alert("Sikertelen hozzáadás");

                        if (document.getElementById("name").value == "") {
                            document.getElementById("pName").innerHTML = "Adj meg egy nevet!";
                        }
                        else {
                            document.getElementById("pName").innerHTML = "";
                        }

                        if (document.getElementById("sex").value == "") {
                            document.getElementById("pSex").innerHTML = "Add meg az illető nemét!";
                        }
                        else {
                            document.getElementById("pSex").innerHTML = "";
                        }

                        if (document.getElementById("date").value == "") {
                            document.getElementById("pDate").innerHTML = "Add meg a születési dátumot!";
                        }
                        else {
                            document.getElementById("pDate").innerHTML = "";
                        }

                        if (document.getElementById("nationality").value == "") {
                            document.getElementById("pNationality").innerHTML = "Add meg az illető nemzetiségét!";
                        }
                        else {
                            document.getElementById("pNationality").innerHTML = "";
                        }
                    }
                }
            });
    });

    document.getElementById("remove").addEventListener("click", () => {

        let url = '/api/drivers';
        let id = document.getElementById("id").value;

        fetch(url + '/' + id,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(x => {

                if (x.ok && id > 0) {
                    alert("Sikeres törlés");
                    location.reload();
                }
                else {
                    alert("Sikertelen törlés");

                    if (document.getElementById("id").value == "") {
                        document.getElementById("pID").innerHTML = "Add meg a versenyző sorszámát!";
                    }
                    else {
                        document.getElementById("pID").innerHTML = "";
                    }
                }
            });
    });

    VersenyzoBetoltes();
}

function VersenyzoBetoltes() {

    fetch('/api/drivers')
        .then(result => {
            if (!result.ok) {
                console.error(`Hibás letöltés: ${result.status}`);
                return null;
            }
            else {
                return result.json();
            }
        })
        .then(data => {
            for (var i = 0; i < data.length; i++) {
                let versenyzok = document.getElementById("versenyzok");

                if (data[i].versenyzoId % 2 == 0) {
                    let parosdiv = document.createElement("div");
                    parosdiv.setAttribute("id", "paros");
                    versenyzok.appendChild(parosdiv);

                    let iddiv = document.createElement("div");
                    iddiv.innerHTML += data[i].versenyzoId;
                    parosdiv.appendChild(iddiv);

                    let nevdiv = document.createElement("div");
                    nevdiv.innerHTML += data[i].nev;
                    parosdiv.appendChild(nevdiv);

                    let nemdiv = document.createElement("div");
                    nemdiv.innerHTML += data[i].nem;
                    parosdiv.appendChild(nemdiv);

                    let szulidodiv = document.createElement("div");
                    szulidodiv.innerHTML += data[i].szulido.substring(0, 10);
                    parosdiv.appendChild(szulidodiv);

                    let nemzetisegdiv = document.createElement("div");
                    nemzetisegdiv.innerHTML += data[i].nemzetiseg;
                    parosdiv.appendChild(nemzetisegdiv);
                }
                else {
                    let paratlandiv = document.createElement("div");
                    paratlandiv.setAttribute("id", "paratlan");
                    versenyzok.appendChild(paratlandiv);

                    let iddiv = document.createElement("div");
                    iddiv.innerHTML += data[i].versenyzoId;
                    paratlandiv.appendChild(iddiv);

                    let nevdiv = document.createElement("div");
                    nevdiv.innerHTML += data[i].nev;
                    paratlandiv.appendChild(nevdiv);

                    let nemdiv = document.createElement("div");
                    nemdiv.innerHTML += data[i].nem;
                    paratlandiv.appendChild(nemdiv);

                    let szulidodiv = document.createElement("div");
                    szulidodiv.innerHTML += data[i].szulido.substring(0, 10);
                    paratlandiv.appendChild(szulidodiv);

                    let nemzetisegdiv = document.createElement("div");
                    nemzetisegdiv.innerHTML += data[i].nemzetiseg;
                    paratlandiv.appendChild(nemzetisegdiv);
                }
            }
        })
}