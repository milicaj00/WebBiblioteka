import { Zanr } from "./Zanr.js";
import { Autor } from "./Autor.js";

export class Knjiga {
    constructor(knjiga, bibID) {
        this.id = knjiga.id;
        this.naziv = knjiga.naziv;
        this.godina = knjiga.godina;
        this.opis = knjiga.opis;
        this.slika = knjiga.slika;
        this.autor = knjiga.autor;
        this.zanr = knjiga.zanr;
        this.kolicina = knjiga.kolicina;
        this.bibID = bibID;
    }

    crtaj(host) {

        // const tabela = document.createElement("table");
        // host.appendChild(tabela);

        let red = document.createElement("tr");
        host.appendChild(red);
        red.className = 'trKnjiga';
        red.id = this.id;
        let redSlika = document.createElement("td");
        red.appendChild(redSlika);
        let info = document.createElement("td");
        info.className = "tdKnjiga";
        //info.id = this.id;
        red.appendChild(info);

        const slika = document.createElement("img");
        slika.src = this.slika;
        slika.className = "prikazSlika";
        redSlika.appendChild(slika);
        slika.onclick = ev => {
            let novi = window.open('http://127.0.0.1:5500/Client/InfoKnjiga.html');
            novi.my_special_setting = this;
        }

        const naziv = document.createElement("b");
        naziv.innerHTML = this.naziv;
        naziv.className = "nazivKnjige";
        info.appendChild(naziv);

        naziv.onclick = ev => {
            let novi = window.open('http://127.0.0.1:5500/Client/InfoKnjiga.html');
            novi.my_special_setting = this;
        }

        let autor = document.createElement("span");
        autor.innerHTML = this.autor.ime + " " + this.autor.prezime;
        autor.className = "infoKnjige";
        info.appendChild(autor);

        let godina = document.createElement("span");
        godina.innerHTML = 'Godina izdanja:' + this.godina;
        godina.className = "infoKnjige";
        info.appendChild(godina);

        let kolicina = document.createElement("span");
        kolicina.innerHTML = "Kolicina: " + this.kolicina;

        kolicina.classList.add("lblKolicina" + this.id);
        kolicina.classList.add("infoKnjige");
        info.appendChild(kolicina);

        autor.style.color = "#cccccc";
        godina.style.color = "#cccccc";
        kolicina.style.color = "#cccccc";

        red.onmouseenter = ev => {
            autor.style.color = "#2a053b";
            godina.style.color = "#2a053b";
            kolicina.style.color = "#2a053b";
        }
        red.onmouseleave = ev => {
            autor.style.color = "#cccccc";
            godina.style.color = "#cccccc";
            kolicina.style.color = "#cccccc";
        }

        const dugme = document.createElement("td");
        red.appendChild(dugme);

        // let btn = document.createElement("button");
        // btn.innerHTML = "Izmeni";
        // btn.className = "izmeniKnjigu";
        // //btn.onclick = ev => this.izmeniKnjigu();
        // dugme.appendChild(btn);

        let btn = document.createElement("button");
        btn.innerHTML = "Obriši";
        btn.className = "obrisiKnjigu";
        btn.onclick = ev => this.obrisiKnjigu();
        dugme.appendChild(btn);

        btn = document.createElement("button");
        btn.innerHTML = "Iznajmi knjigu";
        btn.className = "iznajmiKnjigu";
        if (this.kolicina == 0) {
            btn.disabled = true;
            red.className = "crveniRed";
        }
        btn.onclick = ev => {

            const pom = document.querySelector(".divIznajmiKnjigu");
            if (pom != null) {
                const parent = pom.parentNode;
                parent.removeChild(pom);
            }

            this.iznajmiKnjigu(dugme);
        }
        dugme.appendChild(btn);


    }

    obrisiKnjigu() {
        fetch("https://localhost:5001/Knjiga/IzbrisiKnjigu/" + this.id + '/' + this.bibID,
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
                            alert("Uspešno izbrisana knjiga!");
                            //reload
                            const red = document.getElementById(this.id);
                            const parent = red.parentNode;
                            parent.removeChild(red);
                        }
                        else if (p.status === 409) {
                            alert("Nije moguće izbrisati ovu knjigu jer je iznajmljena nekome!");
                        }
                        else {
                            alert("Došlo je do greške prilikom brisanja knjige!");
                        }
                    })
            })

    }

    red(host) {
        let red = document.createElement("div");
        host.appendChild(red);
        return red;
    }

    sveZaKnjigu(host) {

        const red = this.red(host);
        red.className = "sveZaKnjigu";
        const divZaSliku = this.red(red);

        const slika = document.createElement("img");
        slika.src = this.slika;
        slika.className = 'velikaSlika';
        divZaSliku.appendChild(slika);

        let divZaInfoKnjige = this.red(red);
        divZaInfoKnjige.className = "divZaIfoKnjige";

        let divZaInfo = this.red(divZaInfoKnjige);
        let label = document.createElement("b");
        label.className = 'InfoNazivKnjige';
        label.innerHTML = this.naziv;
        divZaInfo.appendChild(label);

        divZaInfo = this.red(divZaInfoKnjige);
        label = document.createElement("label");
        label.innerHTML = this.autor.ime + " " + this.autor.prezime;
        divZaInfo.appendChild(label);

        divZaInfo = this.red(divZaInfoKnjige);
        label = document.createElement("label");
        label.innerHTML = this.godina;
        divZaInfo.appendChild(label);

        divZaInfo = this.red(divZaInfoKnjige);
        divZaInfo.className = 'divZanr';

        let niz = [];


        this.zanr.forEach(element => {
            niz.push(element);

        });


        label = document.createElement("label");
        label.innerHTML = 'Žanr:  ' + niz.join('  |  ');
        divZaInfo.appendChild(label);

        divZaInfo = this.red(divZaInfoKnjige);
        divZaInfo.className = 'divZaOpis';
        label = document.createElement("p");
        label.innerHTML = this.opis;
        divZaInfo.appendChild(label);

    }

    iznajmiKnjigu(host) {

        const forma = document.createElement("div");
        forma.className = "divIznajmiKnjigu";
        host.appendChild(forma);

        let red = document.createElement("div");
        forma.appendChild(red);

        let labela = document.createElement("label");
        labela.innerHTML = "Broj članske karte: ";
        red.appendChild(labela);
        let input = document.createElement("input");
        input.type = "number";
        input.value = "brojKarte";
        input.id = "brojKarte";
        red.appendChild(input);

        red = document.createElement("div");
        forma.appendChild(red);
        let ok = document.createElement("button");
        red.appendChild(ok);
        ok.innerHTML = "Ok";
        ok.onclick = ev => {
            this.iznajmiKnjiguBaza(this.id);
        }

        ok = document.createElement("button");
        red.appendChild(ok);
        ok.innerHTML = "Nazad";
        ok.onclick = ev => {
            host.removeChild(forma);
        }

    }

    iznajmiKnjiguBaza(knjigaID) {

        let karta = document.getElementById("brojKarte").value;

        if (!karta) {
            alert('Morate uneti ispravan broj članske karte!');
            return;
        }

        fetch(`https://localhost:5001/Iznajmljivanje/IznajmiKnjigu/${karta}/${knjigaID}/${this.bibID}`,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(p => p.json().then(data => {
                if (p.ok) {
                    alert('Uspešno iznajmljena knjiga!');
                    this.refres();
                }
                else if (p.status == 404) {
                    alert('Nema korisnika sa tim brojem članske karte!');
                    this.refres();
                }
                else if (p.status == 410) {
                    window.alert('Već ste iznajmili ovu knjigu!');
                    this.refres();
                }
                else if (p.status == 420) {
                    window.alert('Ne možete iznamiti više od 3 knjige!');
                    this.refres();
                }
                else {
                    alert('Došlo je do greške prilikom iznajmljivanja knjige!');
                    this.refres();
                }
            }))


    }

    refres() {

        let pom = document.querySelector('.selZanr');
        let parent = pom.parentNode;
        parent = parent.parentNode;
        pom = pom.value;
        // console.log(pom);
        // console.log(parent);

        if (pom > 0) {
            let z = new Zanr();
            z.ucitajKnjigeZanr(parent, this.bibID);
        }
        else {
            pom = document.querySelector('.selAutor').value;
            let a = new Autor();
            a.ucitajKnjigeAutor(parent, this.bibID);

        }

    }

}