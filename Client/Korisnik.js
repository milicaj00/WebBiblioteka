export class Korisnik {
    constructor(bibID) {
        this.bibID = bibID;
    }


    nazad() {
        this.brisiClanove();

        let pom = document.querySelector(".divZaSelekciju");
        if (pom != null) {
            pom.style.display = 'block';

        }
    }

    platiClanarinu(host) {

        const pom = document.querySelector("div.formaClanovi");
        if (pom != null) {
            const parent = pom.parentNode;
            parent.removeChild(pom);
        }

        this.brisiClanove();

        const forma = document.createElement("div");
        forma.className = "divPlatiClanarinu";
        host.appendChild(forma);

        let red = document.createElement("div");
        forma.appendChild(red);

        let labela = document.createElement("label");
        labela.innerHTML = "Broj članske karte: ";
        red.appendChild(labela);
        let input = document.createElement("input");
        input.type = "number";
        input.id = "brojClanskeKarte";
        red.appendChild(input);

        red = document.createElement("div");
        forma.appendChild(red);
        red.className = "redRadioButtons";

        this.radioButtons(red);

        red = document.createElement("div");
        forma.appendChild(red);
        let ok = document.createElement("button");
        red.appendChild(ok);
        ok.innerHTML = "Plati";
        ok.onclick = ev => this.unesiClanarinu();

        ok = document.createElement("button");
        red.appendChild(ok);
        ok.innerHTML = "Nazad";
        ok.onclick = ev => this.nazad();
    }

    radioButtons(host) {

        let labela = document.createElement("label");
        labela.innerHTML = "Članarina plaćena za: ";
        host.appendChild(labela);

        let brojMeseci = ['1', '3', '6', '12'];

        brojMeseci.forEach((mesec, index) => {

            const divRb = document.createElement("div");
            const opcija = document.createElement("input");
            opcija.type = "radio";
            opcija.name = "brojMeseci";
            opcija.value = brojMeseci[index];

            const labela = document.createElement("label");
            labela.innerHTML = mesec + ' meseci';

            divRb.appendChild(opcija);
            divRb.appendChild(labela);
            host.appendChild(divRb);
        });
    }

    async unesiClanarinu() {
        const karta = document.getElementById("brojClanskeKarte").value;
        if (karta <= 0 || karta == "") {
            alert("Morate uneti broj članske karte!");
            return;
        }
        let brojMeseci = document.querySelector(`input[name="brojMeseci"]:checked`);

        if (brojMeseci == null) {
            alert("Morate selektovati broj meseci!");
            return;
        }
        brojMeseci = brojMeseci.value;

        //console.log(karta+"/"+brojMeseci);

        await fetch("https://localhost:5001/Clan/PlatiClanarinu/" + karta + "/" + brojMeseci + '/' + this.bibID,
            {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(p => {
                p.json().then
                    (data => {

                        if (p.ok) {


                            const date = new Date(data.clanarinaDo);

                            alert(`Uspešno plaćena članarina korisniku:\n${data.ime} ${data.prezime}\nBroj članske karte: ${data.brojClanskeKarte}\nČlanarina važi do: ${date.toLocaleDateString()}`);
                        }
                        else if (p.status == 404) {
                            alert("Traženi član ne postoji!");
                            return;
                        }
                        else {
                            alert("Došlo je do greške prilikom unosa!");
                        }
                    })

            });
        this.ocisti();
    }

    noviKorisnik(host) {
        this.brisiClanove();

        const forma = document.createElement("div");
        forma.className = "formaDodajKorisnika";
        host.appendChild(forma);

        let red = document.createElement("div");
        forma.appendChild(red);

        const dodaj = document.createElement("h2");
        dodaj.innerHTML = "Dodaj novog člana";
        red.appendChild(dodaj);

        red = document.createElement("div");
        forma.appendChild(red);

        let label = document.createElement("label");
        label.innerHTML = "Ime: ";
        red.appendChild(label);

        let input = document.createElement("input");
        input.type = "text";
        input.className = "ime";
        input.name = "ime";
        input.required = true;

        input.onkeyup = () => {
            let pom = input.value;
            if (pom != null) {
                pom = pom.charAt(0).toUpperCase() + pom.slice(1);
                input.value = pom;

            }
        }
        red.appendChild(input);

        red = document.createElement("div");
        forma.appendChild(red);

        label = document.createElement("label");
        label.innerHTML = "Prezime: ";
        red.appendChild(label);

        let prezime = document.createElement("input");
        prezime.type = "text";
        prezime.name = "prezime";
        prezime.className = "prezime";
        prezime.required = true;
        prezime.onkeyup = () => {
            let pom = prezime.value;
            if (pom != null) {
                pom = pom.charAt(0).toUpperCase() + pom.slice(1);
                prezime.value = pom;

            }
        }
        red.appendChild(prezime);


        red = document.createElement("div");
        forma.appendChild(red);

        label = document.createElement("label");
        label.innerHTML = "Email: ";
        red.appendChild(label);

        let mail = document.createElement("input");
        mail.type = "email";
        mail.name = "email";
        mail.className = "email";
        mail.required = true;
        red.appendChild(mail);

        // red = document.createElement("div");
        // forma.appendChild(red);

        // label = document.createElement("label");
        // label.innerHTML = "Broj članske karte: ";
        // red.appendChild(label);

        // input = document.createElement("input");
        // input.type = "number";
        // input.name = "clKarta";
        // input.className = "clKarta";
        // input.required = true;
        // red.appendChild(input);

        red = document.createElement("div");
        forma.appendChild(red);

        this.radioButtons(red);

        red = document.createElement("div");
        forma.appendChild(red);
        let ok = document.createElement("button");
        red.appendChild(ok);
        ok.innerHTML = "Unesi";
        ok.onclick = ev => {
            const ime = forma.querySelector("input.ime").value;
            const prezime = forma.querySelector("input.prezime").value;
            const email = forma.querySelector("input.email").value;
            // const br = forma.querySelector("input.clKarta").value;
            let mesec = forma.querySelector(`input[name="brojMeseci"]:checked`);

            if (email == "" || ime === "" || prezime === "" || mesec == null) {
                alert("Morate uneti sve podatke!");
            }
            mesec = mesec.value;

            const mail = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$";

            if (!email.match(mail)) {
                alert("Morate uneti ispravan mail!");
                return;
            }
            this.unesiKorisnika(ime, prezime, email, mesec);
        }

        ok = document.createElement("button");
        red.appendChild(ok);
        ok.innerHTML = "Otkaži";
        ok.onclick = ev => {

            this.ocisti();
        }

        ok = document.createElement("button");
        red.appendChild(ok);
        ok.innerHTML = "Nazad";
        // ok.onclick = () => window.open('', '_self').close();

        ok.onclick = ev => this.nazad();
    }

    async unesiKorisnika(ime, prezime, email, mesec) {

        let today = new Date();
        today.setMonth(today.getMonth() + mesec);

        await fetch("https://localhost:5001/Clan/DodajClana",
            {
                method: "POST",

                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ime: ime, prezime: prezime,
                    clanarinaDo: today, sifra: "1234", email: email, bibliotekaID: this.bibID
                })

                //-d "{\"ime\":\"aa\",\"prezime\":\"bb\",\"sifra\":\"1234\",\"email\":\"a@a.c\"}"

            }).then(p => {
                p.json().then(data => {
                    if (p.ok) {
                        // pvde mozda da mi iscrta sve podatke
                        window.alert('Dodat je član:  ' + data.ime + ' ' + data.prezime + ', sa brojem članske karte: ' + data.brojClanskeKarte);
                        //console.log(data);
                        // alert("Uspešno dodat novi član!");
                    }
                    else if (p.status == 420) {
                        alert('Izabrani broj članske karte nije dostupan, izaberite drugi!');
                        return;
                    }
                    else if (p.status == 440) {
                        alert('Morate uneti sve podatke!');
                        return;
                    }
                    else {
                        console.log("Bad request");
                    }

                });
            })
        this.ocisti();

    }

    ocisti() {

        let input = document.querySelectorAll('input');
        input.forEach(i => {
            i.value = '';
        })

        input = document.querySelector('input[name="brojMeseci"]:checked');
        if (input != null) {
            input.checked = false;
        }

    }

    brisiClanove() {

        let pom = document.querySelector(".formaClanovi");
        if (pom != null) {
            const parent = pom.parentNode;
            parent.removeChild(pom);
        }

        pom = document.querySelector(".formaDodajKorisnika");
        if (pom != null) {
            const parent = pom.parentNode;
            parent.removeChild(pom);
        }

        pom = document.querySelector(".divPlatiClanarinu");
        if (pom != null) {
            const parent = pom.parentNode;
            parent.removeChild(pom);
        }
        pom = document.querySelector(".kontJosKnjiga");
        if (pom != null) {
            const parent = pom.parentNode;
            parent.removeChild(pom);
        }
        pom = document.querySelector(".formaVrati");
        if (pom != null) {
            const parent = pom.parentNode;
            parent.removeChild(pom);
        }

        pom = document.querySelector(".selAutor");
        pom.value = -1;
        pom = document.querySelector(".selZanr");
        pom.value = -1;

        pom = document.querySelector(".formaKnjige");
        if (pom != null) {
            const parent = pom.parentNode;
            parent.removeChild(pom);
        }
        pom = document.querySelector(".divZaSelekciju");
        if (pom != null) {
            pom.style.display = 'none';
        }
    }

    async isteklaClanarina(host) {

        this.brisiClanove();

        const forma = document.createElement("div");
        forma.className = 'formaClanovi';
        host.appendChild(forma);

        const tabela = document.createElement("table");
        tabela.className = "tabelaClanovi";
        forma.appendChild(tabela);

        const list = ['', 'Korisnik', 'Iznajmljene knjige:'];
        list.forEach(l => {
            const th = document.createElement("th");
            th.innerText = l;
            tabela.appendChild(th);
        });

        await fetch(`https://localhost:5001/Clan/IsteklaClanarina/${this.bibID}`)
            .then(p => {
                p.json().then(podaci => {
                    if (p.ok) {

                        podaci.forEach(korisnik => {

                            const red = document.createElement("tr");
                            tabela.appendChild(red);
                            red.className = 'redKorisnik';

                            let data = document.createElement("td");
                            let btn = document.createElement("button");
                            btn.innerHTML = "Obrisi";
                            btn.onclick = ev =>{
                                if (window.confirm('Da li zaista želite da izbrišete ovog člana?'))
                                {
                                    this.obrisiClana(korisnik.id, red);
                                }
                                

                            } 
                            data.appendChild(btn);
                            red.appendChild(data);

                            data = document.createElement("td");
                            let k = document.createElement("h3");
                            data.className = "infoData";
                            k.innerHTML = korisnik.ime + " " + korisnik.prezime;
                            data.appendChild(k);

                            k = document.createElement("label");
                            k.innerHTML = "Broj clanske karte: " + korisnik.brojClanskeKarte;
                            data.appendChild(k);

                            k = document.createElement("label");
                            k.innerHTML = "Email: " + korisnik.email;
                            data.appendChild(k);

                            k = document.createElement("label");
                            const date = new Date(korisnik.clanarinaDo);
                            k.innerHTML = "Clanarina istekla: " + date.toLocaleDateString();
                            k.style.color = "red";
                            data.appendChild(k);
                            red.appendChild(data);

                            this.iznajmljene(korisnik.id, red);


                        })

                    }
                    else {
                        alert("doslo je do greske!");
                        throw new Exception("Greska prilikom citanja");
                    }
                })
            })

        const ok = document.createElement("button");
        forma.appendChild(ok);
        ok.innerHTML = "Nazad";
        ok.onclick = () => this.nazad();

    }

    obrisiClana(korisnikId, red) {
        fetch("https://localhost:5001/Clan/IzbrisiClana/" + korisnikId,
            {
                method: "DELETE",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(p => {
                p.json().then
                    (data => {
                        if (p.ok) {
                            alert("Uspešno obrisan član!");
                            //reload
                            // const red = document.querySelector('.'+korisnikId);
                            const parent = red.parentNode;
                            parent.removeChild(red);
                        }
                        else if (p.status == 404) {
                            alert("Traženi član ne postoji!");
                        }
                        else if (p.status == 440) {
                            alert("Nije moguce izbrisati korisnika jer je iznajmio knjigu!");
                        }
                        else {
                            alert("Došlo je do greške prilikom brisanja člana!");
                        }
                    })
            })


    }

    iznajmljene(korisnikId, host, btn) {

        const divIznajmljivanja = document.createElement("td");
        divIznajmljivanja.className = "divIznajmljivanja";
        host.appendChild(divIznajmljivanja);
        //console.log(host);

        fetch("https://localhost:5001/Iznajmljivanje/Iznajmljivanje/" + korisnikId,
            {
                method: "GET"
            })
            .then(p => {
                p.json().then
                    (data => {
                        if (p.ok) {

                            // if(data.length == 0){
                            //     alert('Ovaj član nije iynajmio nijednu knjigu!');
                            // }

                            data.forEach(element => {
                                //console.log(element);

                                const red = document.createElement("div");
                                red.className = "redIznajmljivanja";
                                divIznajmljivanja.appendChild(red);

                                let l = document.createElement("b");
                                l.innerHTML = element.knjiga.naziv;
                                red.appendChild(l);

                                const date = new Date(element.datum);

                                l = document.createElement("label");
                                l.innerHTML += ", datum iznajmljivanja: " + date.toLocaleDateString();
                                red.appendChild(l);

                                if (btn === true) {

                                    // l = document.createElement("label");
                                    // l.innerHTML = element.knjiga.autor.ime + ' ' + element.knjiga.autor.prezime;
                                    // red.appendChild(l);

                                    // l = document.createElement("label");
                                    // l.innerHTML = element.knjiga.godina;
                                    // red.appendChild(l);



                                    let ok = document.createElement("button");
                                    red.appendChild(ok);
                                    ok.innerHTML = "Vrati";
                                    ok.className = 'btnVrati';
                                    ok.onclick = ev => {
                                        this.vratiKnjiguBaza(korisnikId, element.knjiga.id, host);
                                    }
                                }
                                // console.log(host);

                            });

                        }

                        else if (p.status == 404) {
                            alert("Nisu pronađeni podaci o datom članu!");
                        }

                        else {

                            alert("Došlo je do greške prilikom citanja podataka!");
                        }

                    })

            });

    }

    vratiKnjigu(host) {
        this.brisiClanove();

        const forma = document.createElement("div");
        forma.className = 'formaVrati';
        host.appendChild(forma);

        let red = document.createElement("div");
        forma.appendChild(red);

        let labela = document.createElement("label");
        labela.innerHTML = "Broj članske karte: ";
        red.appendChild(labela);
        let input = document.createElement("input");
        input.type = "number";
        input.className = "clKarta";
        red.appendChild(input);

        let ok = document.createElement("button");
        red.appendChild(ok);
        ok.innerHTML = "Ok";
        ok.onclick = ev => {

            this.infoOClanu(forma);
        }

        ok = document.createElement("button");
        red.appendChild(ok);
        ok.innerHTML = "Nazad";
        ok.onclick = ev => {
            this.nazad();
        }

    }

    infoOClanu(host) {
        let pom = document.querySelector('.divZaClana');
        if (pom != null) {
            const parent = pom.parentNode;
            parent.removeChild(pom);
        }

        const divZaClana = document.createElement("div");
        divZaClana.className = "divZaClana";
        host.appendChild(divZaClana);

        const br = document.querySelector("input.clKarta").value;
        if (br <= 0 || br == null) {
            window.alert('Morate uneti ispravan broj članske karte!');
            return;
        }

        fetch("https://localhost:5001/Clan/GetClan/" + br + "/" + this.bibID)
            .then(p => {
                p.json().then
                    (data => {
                        if (p.ok) {
                            //console.log(data);

                            const red = document.createElement("div");
                            //red.className = "divZaClana";
                            divZaClana.appendChild(red);

                            let naziv = document.createElement("b");
                            naziv.innerText = data.ime + ' ' + data.prezime;

                            red.className = 'infoOClanu';
                            red.appendChild(naziv);


                            naziv = document.createElement("span");
                            naziv.innerText = "Broj članske karte: " + data.brojClanskeKarte;
                            red.appendChild(naziv);

                            naziv = document.createElement("span");
                            const date = new Date(data.clanarinaDo);
                            naziv.innerText = "Članirina važi do: " + date.toLocaleDateString();
                            red.appendChild(naziv);

                            naziv = document.createElement("span");
                            naziv.innerText = "Email: " + data.email;
                            red.appendChild(naziv);

                            this.iznajmljene(data.id, divZaClana, true);

                            //ime, prezime, mail
                            //iznajmljene knjige + btn

                        }
                        else if (p.status == 404) {
                            alert("Traženi član ne postoji!");
                            return;
                        }
                        else {
                            alert("Došlo je do greške prilikom citanja podataka!");
                        }
                    })

            });
    }

    async vratiKnjiguBaza(korisnikId, knjigaID, divZaClana) {
        await fetch(`https://localhost:5001/Iznajmljivanje/VratiKnjigu/${korisnikId}/${knjigaID}/${this.bibID}`,
            {
                method: "DELETE",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(p => {
                p.json().then
                    (data => {


                        if (p.ok) {
                            alert("Uspešno vraćena knjiga!");

                            let pom = document.querySelector('.divIznajmljivanja');
                            if (pom != null) {
                                const parent = pom.parentNode;
                                parent.removeChild(pom);
                            }

                            this.iznajmljene(korisnikId, divZaClana, true);
                        }
                        else if (p.status == 404) {
                            alert('Nema korisnika sa tim brojem članske karte!');
                        }
                        else {
                            alert("Došlo je do greške prilikom unosa!");
                            return;
                        }
                    })

            });
    }

}