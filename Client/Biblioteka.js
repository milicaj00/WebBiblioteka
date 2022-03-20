import { Zanr } from "./Zanr.js";
import { Autor } from "./Autor.js";
import { Knjiga } from "./Knjiga.js";
import { Korisnik } from "./Korisnik.js";
import { novaKnjiga } from "./novaKnjiga.js";

export class Biblioteka {


    constructor(id, naziv, adresa, mail, brojTelefona) {
        this.id = id;
        this.naziv = naziv;
        this.adresa = adresa;
        this.mail = mail;
        this.brojTelefona = brojTelefona;

        this.kont = null;
    }

    crtajBiblioteku(host) {

        const pom = document.querySelector('.kontBiblioteka');
        if (pom != null) {
            const parent = pom.parentNode;
            parent.removeChild(pom);
        }

        this.kont = document.createElement("div");
        this.kont.className = "kontBiblioteka";
        host.appendChild(this.kont);

        let kontInfo = document.createElement("div");
        kontInfo.className = "kontInfo";
        this.kont.appendChild(kontInfo);

        let naziv = document.createElement("h2");
        naziv.innerText = this.naziv;
        naziv.className = "naziv";

        kontInfo.appendChild(naziv);


        naziv = document.createElement("span");
        naziv.innerText = "Pronađite nas na andresi: " + this.adresa;
        naziv.className = "adresa";
        kontInfo.appendChild(naziv);

        naziv = document.createElement("span");
        let text = this.brojTelefona;
        let result = text.link("#" + this.brojTelefona);
        naziv.innerHTML = '☎ ' + "Kontaktirajte nas na broj telefona: " + result;
        naziv.className = "kontakt";
        kontInfo.appendChild(naziv);

        naziv = document.createElement("span");
        text = this.mail;
        result = text.link("mailto:" + this.mail);
        naziv.innerHTML = '✉ ' + "Pišite nam putem mejla: " + result;
        naziv.className = "kontakt";
        kontInfo.appendChild(naziv);

        let red = document.createElement("div");
        red.className = "divZaIzbore";
         this.kont.appendChild(red);

        let dugmici = document.createElement("div");
        dugmici.className = "divZaDugmice";
        this.kont.appendChild(dugmici);

        let btn = document.createElement("button");
        btn.innerHTML = "Dodaj knjigu";
        btn.className = "dodajKnjigu";

        // let wKnjiga;
        let wClan;

        let noviRed = document.createElement("div");
        this.kont.appendChild(noviRed);

        btn.onclick = () => {
            // wKnjiga = window.open('http://127.0.0.1:5500/Client/DodajKnjigu.html'); 
            // wKnjiga.podaci = this.id;
            // if(wClan){
            //     wClan.close();
            // }

            // console.log(red);
            let k = new novaKnjiga(this.id);
            k.izaberiKnjigu(noviRed);
        }
        dugmici.appendChild(btn);

        btn = document.createElement("button");
        btn.innerHTML = "Dodaj korisnika";
        btn.className = "dodajKorisnika";

        btn.onclick = ev => {
            // if (wClan) {
            //     wClan.close();
            // }

            // wClan = window.open('http://127.0.0.1:5500/Client/DodajKorisnika.html');
            // wClan.podaci = this.id;

            const korisnik = new Korisnik(this.id);
            korisnik.noviKorisnik(noviRed);

        }
        dugmici.appendChild(btn);

        btn = document.createElement("button");
        btn.innerHTML = "Plati članarinu";
        btn.className = "platiClanarinu";
        btn.onclick = ev => {
            const korisnik = new Korisnik(this.id);
            const novi = document.createElement("div");
            novi.className = 'divZaPlacanjeClanarine';
            red.appendChild(novi);
            korisnik.platiClanarinu(noviRed);
        }
        dugmici.appendChild(btn);

        btn = document.createElement("button");
        btn.innerHTML = "Istekla članarina";
        btn.className = "isteklaClanarina";
        btn.onclick = ev => {
            const korisnik = new Korisnik(this.id);

            korisnik.isteklaClanarina(noviRed);
        }
        dugmici.appendChild(btn);

        btn = document.createElement("button");
        btn.innerHTML = "Vrati knjigu";
        btn.className = "btnVratiKnjigu";
        btn.onclick = ev => {
            const korisnik = new Korisnik(this.id);

            korisnik.vratiKnjigu(noviRed);
        }
        dugmici.appendChild(btn);

        let redSel = document.createElement("div");
        redSel.classList.add( "divZaSelekciju" );
        this.kont.appendChild(redSel);

        let selekcije = document.createElement("div");
        selekcije.className = "redSelekcije";
        redSel.appendChild(selekcije);

        let label = document.createElement("label");
        label.innerHTML = "Izaberite žanr: ";
        selekcije.appendChild(label);

        const zanr = document.createElement("select");
        zanr.className = "selZanr";
        selekcije.appendChild(zanr);

        const el = new Zanr();
        el.ucitajZanrove(zanr);

        let btnNadji = document.createElement("button");
        btnNadji.innerHTML = "Traži";
        btnNadji.className = "trazi";
        selekcije.appendChild(btnNadji);
        btnNadji.onclick = ev => {
            let z = new Zanr();
            z.ucitajKnjigeZanr(redSel, this.id);
        }

        label = document.createElement("label");
        label.innerHTML = "Izaberite autora: ";
        selekcije.appendChild(label);

        const sel = document.createElement("select");
        sel.className = "selAutor";
        selekcije.appendChild(sel);

        const autor = new Autor();
        autor.ucitajAutore(sel);

        btnNadji = document.createElement("button");
        btnNadji.innerHTML = "Traži";
        btnNadji.className = "trazi";
        selekcije.appendChild(btnNadji);
        btnNadji.onclick = ev => {
            let a = new Autor();
            a.ucitajKnjigeAutor(redSel, this.id);
        }


       


    }

}