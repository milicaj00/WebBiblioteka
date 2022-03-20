import { Zanr } from "./Zanr.js";
import { Autor } from "./Autor.js";

export class novaKnjiga {
    constructor(bibID) {
        this.bibID = bibID
    }

    // crtaj(host){
    //     const kont = document.createElement("div");
    //     host.appendChild(kont);
    //     kont.className = "novaKnjigaGlavni";

    //     this.izaberiKnjigu(kont);
    //     this.dodajKnjigu(kont);

    //     // let red = document.createElement("div");
    //     // red.className = 'divZaBtnKnjiga';
    //     // kont.appendChild(red);

    //     // let btn = document.createElement("button");
    //     // btn.innerHTML = "Nova knjiga";
    //     // red.appendChild(btn);
    //     // btn.onclick = () => {
    //     //     this.dodajKnjigu(kont);
    //     // }

    //     // btn = document.createElement("button");
    //     // btn.innerHTML = "Izaberi knjigu";
    //     // red.appendChild(btn);
    //     // btn.onclick = () => {
    //     //     this.izaberiKnjigu(kont);
    //     // }

    // }

    // async dodajKnjigu(host) {

    //     // const pom = document.querySelector('.kontNovaKnjiga');
    //     // if(pom != null){
    //     //     const parent = pom.parentNode;
    //     //     parent.removeChild(pom);
    //     // }

    //     const kont = document.createElement("div");
    //     host.appendChild(kont);
    //     kont.className = "kontNovaKnjiga";

    //     let red = document.createElement("div");
    //     kont.appendChild(red);

    //     const dodaj = document.createElement("h2");
    //     dodaj.innerHTML = "Dodaj novu knjigu";
    //     red.appendChild(dodaj);

    //     red = document.createElement("div");
    //     kont.appendChild(red);
    //     let label = document.createElement("label");
    //     label.innerHTML = "Naziv: ";
    //     red.appendChild(label);

    //     let input = document.createElement("input");
    //     input.type = "text";
    //     input.className = "nazivKnjige";
    //     input.name = "nazivKnjige";
    //     input.required = true;
    //     red.appendChild(input);

    //     red = document.createElement("div");
    //     kont.appendChild(red);

    //     label = document.createElement("label");
    //     label.innerHTML = "Opis: ";
    //     red.appendChild(label);

    //     input = document.createElement("textarea");
    //     input.name = "opis";
    //     input.className = "opisKnjige";

    //     input.addEventListener('keyup', function (){
    //         var el = this;
    //         setTimeout(function(){
    //           el.style.cssText = 'height:auto; padding:0';
    //           el.style.cssText = 'width:auto; padding:0';
    //           el.style.cssText = 'height:' + el.scrollHeight + 'px';

    //         },0);
    //     });


    //     red.appendChild(input);

    //     red = document.createElement("div");
    //     kont.appendChild(red);

    //     label = document.createElement("label");
    //     label.innerHTML = "Slika: ";
    //     red.appendChild(label);

    //     input = document.createElement("input");
    //     input.type = "text";
    //     input.name = "slikaZaUnos";
    //     input.className = "slikaZaUnos";
    //     red.appendChild(input);

    //     red = document.createElement("div");
    //     kont.appendChild(red);

    //     label = document.createElement("label");
    //     label.innerHTML = "Količina: ";
    //     red.appendChild(label);

    //     input = document.createElement("input");
    //     input.type = "number";
    //     input.name = "kolicinaUnos";
    //     input.className = "kolicinaUnos";
    //     red.appendChild(input);

    //     red = document.createElement("div");
    //     kont.appendChild(red);
    //     red.className = 'divGodina';

    //     label = document.createElement("label");
    //     label.innerHTML = "Godina izdanja: ";
    //     red.appendChild(label);

    //     input = document.createElement("input");
    //     input.type = "number";
    //     input.name = "godinaIzdanja";
    //     input.min = 0;
    //     input.max = 2022;
    //     input.className = "godinaIzdanja";
    //     red.appendChild(input);

    //     red = document.createElement("div");
    //     kont.appendChild(red);

    //     let novidiv = document.createElement("div");
    //     red.appendChild(novidiv);
    //     novidiv.className = "divNoviAutor";

    //     label = document.createElement("label");
    //     label.innerHTML = "Izaberite autora ";
    //     novidiv.appendChild(label);

    //     let selAutor = document.createElement("select");
    //     selAutor.className = "selAutorKnjiga";
    //     novidiv.appendChild(selAutor);

    //     const autor = new Autor();
    //     await autor.ucitajAutore(selAutor);

    //     let btn = document.createElement("button");
    //     btn.innerHTML = "Novi autor";
    //     btn.className = "btnNoviAutor";
    //     novidiv.appendChild(btn);
    //     btn.onclick = () => {
    //         // delete selekcija??
    //         novidiv.removeChild(selAutor);

    //         const pom = document.querySelector(".noviAutor");
    //         if(pom != null){
    //             const parent = pom.parentNode;
    //             parent.removeChild(pom);
    //         }

    //         let divNoviAutor = document.createElement("div");
    //         novidiv.appendChild(divNoviAutor);
    //         divNoviAutor.className = "noviAutor";

    //         label = document.createElement("label");
    //         label.innerHTML = "Ime: ";
    //         divNoviAutor.appendChild(label);

    //         input = document.createElement("input");
    //         input.type = "text";
    //         input.className = "imeAutora";
    //         input.name = "imeAutora";
    //         input.required = true;
    //         divNoviAutor.appendChild(input);

    //         label = document.createElement("label");
    //         label.innerHTML = "Prezime: ";
    //         divNoviAutor.appendChild(label);

    //         input = document.createElement("input");
    //         input.type = "text";
    //         input.name = "prezimeAutora";
    //         input.className = "prezimeAutora";
    //         input.required = true;
    //         divNoviAutor.appendChild(input);

    //         btn = document.createElement("button");
    //         btn.innerHTML = "Otkaži";
    //         divNoviAutor.appendChild(btn);
    //         btn.onclick = () => {
    //             const pom = document.querySelector(".noviAutor");
    //             const parent = pom.parentNode;
    //             parent.removeChild(pom);
    //             novidiv.appendChild(selAutor);

    //         }
    //     }

    //     red = document.createElement("div");
    //     kont.appendChild(red);

    //     let novidivv = document.createElement("div");
    //     red.appendChild(novidivv);
    //     novidivv.className = "divNoviZanr";

    //     label = document.createElement("label");
    //     label.innerHTML = "Izaberite žanr ";
    //     novidivv.appendChild(label);

    //     let sel = document.createElement("select");
    //     sel.className = "selZanrKnjiga";
    //     novidivv.appendChild(sel);

    //     const zanr = new Zanr();
    //     await zanr.ucitajZanrove(sel);

    //     btn = document.createElement("button");
    //     btn.innerHTML = "Novi žanr";
    //     btn.className = "btnNoviZanr";
    //     novidivv.appendChild(btn);
    //     btn.onclick = () => {
    //         sel = document.createElement("select");
    //         sel.className = "selZanrKnjiga";
    //         novidivv.appendChild(sel);

    //         zanr.ucitajZanrove(sel);
    //     }

    //     red = document.createElement("div");
    //     kont.appendChild(red);

    //     btn = document.createElement("button");
    //     btn.innerHTML = "Dodaj";
    //     btn.onclick = () => this.dodajNovuKnjigu();
    //     red.appendChild(btn);

    //     btn = document.createElement("button");
    //     red.appendChild(btn);
    //     btn.innerHTML = "Otkaži";
    //     btn.onclick = ev =>  {

    //         let inputElements = document.getElementsByTagName('input');

    //         for (let i=0; i < inputElements.length; i++) {
    //                 inputElements[i].value = '';
    //         }

    //         inputElements = document.querySelector('textarea.opisKnjige');
    //         inputElements.value = '';
    //     }

    //     btn = document.createElement("button");
    //     btn.innerHTML = "Nazad";
    //     red.appendChild(btn);
    //     btn.onclick = () => {
    //         window.open('','_self').close();
    //     }

    // }

    // async dodajNovuKnjigu(){
    //     const nazivKnjige = document.querySelector('input.nazivKnjige').value;
    //     const opis = document.querySelector('textarea.opisKnjige').value;
    //     const slika = document.querySelector('input.slikaZaUnos').value;
    //     const kolicina = document.querySelector('input.kolicinaUnos').value;
    //     const godina = document.querySelector('input.godinaIzdanja').value;

    //     if(nazivKnjige == '' || opis == '' || kolicina == '' || godina ==''){
    //         alert('Morate uneti sve podatke');
    //         return;
    //     }


    //     const zanrovi = document.querySelectorAll('.selZanrKnjiga');
    //     let niz = [];

    //     zanrovi.forEach(z => {
    //         const zanrID = z.options[z.selectedIndex].value; 
    //         const vrsta = z.options[z.selectedIndex].innerHTML;
    //         niz.push('zanrIds='+zanrID);
    //     });

    //     //?zanrIds=2&zanrIds=3
    //     const query = niz.join('&');

    //     const pom = document.querySelector('.noviAutor');
    //     if(pom == null){ //nije novi
    //         let optionEl = document.querySelector("select.selAutorKnjiga");

    //         const autorID = optionEl.options[optionEl.selectedIndex].value; 
    //         let autor = optionEl.options[optionEl.selectedIndex].innerHTML;
    //         autor = autor.split(' ');

    //         const imeAutora = autor[0];
    //         const prezimeAutora = autor[1];

    //         if(autorID <= 0){
    //             alert('Izaberite autora!');
    //             return;
    //         }

    //         this.upisiKnjigu(nazivKnjige, opis,slika,godina,kolicina,query,autorID,imeAutora,prezimeAutora);
    //     }
    //     else{
    //         const ime = pom.querySelector('input.imeAutora').value;
    //         const prezime = pom.querySelector('input.prezimeAutora').value;

    //         let a = new Autor();
    //         await a.noviAutor(ime,prezime);
    //         //upise mi ga u a

    //         this.upisiKnjigu(nazivKnjige, opis,slika,godina,kolicina,query,a.id,a.ime,a.prezime);
    //     }

    // }

    // upisiKnjigu(nazivKnjige, opis,slika,godina,kolicina,query,autorId, aIme,aPrezime){
    //     //bibID????

    //     fetch(`https://localhost:5001/Biblioteka/DodajKnjigu/${this.bibID}/${kolicina}?${query}`,
    //         {
    //             method: "POST",
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 naziv: nazivKnjige, autor: {
    //                     id: autorId,
    //                     ime: aIme,
    //                     prezime: aPrezime
    //                 },
    //                 opis: opis, slika: slika, godina: godina
    //             })

    //         }).then(p => {
    //             p.json().then(data => {
    //                 if (p.ok) {

    //                     console.log(data);
    //                     alert("Uspešno dodata nova knjiga!");
    //                 }
    //                 else {
    //                     console.log(data);
    //                 }

    //             });
    //         })

    // }

    izaberiKnjigu(host) {
        this.brisi();
      // console.log(host);

        const kont = document.createElement("div");
        host.appendChild(kont);
        kont.className = "kontJosKnjiga";

        let red = document.createElement("div");
        kont.appendChild(red);

        const dodaj = document.createElement("h2");
        dodaj.innerHTML = "Izaberite knjigu i kolicinu";
        red.appendChild(dodaj);


        red = document.createElement("div");
        kont.appendChild(red);

        let select = document.createElement("select");
        select.className = 'selKnjige';
        red.appendChild(select);

        let op = document.createElement("option");
        op.innerHTML = "Izaberite knjigu";
        op.value = -1;
        select.appendChild(op);

        fetch('https://localhost:5001/Knjiga/GetKnjige')
            .then(p => p.json().then(
                data => {
                    if (p.ok) {
                        data.forEach(k => {
                            op = document.createElement("option");
                            op.innerHTML = k.naziv;
                            op.value = k.id;
                            select.appendChild(op);
                        });
                    }
                    else {
                        alert('Doslo je do greske prilikom citanja podataka!');
                        return;
                    }
                }));


        red = document.createElement("div");
        kont.appendChild(red);

        let label = document.createElement("label");
        label.innerHTML = "Količina: ";
        red.appendChild(label);

        let input = document.createElement("input");
        input.type = "number";
        input.name = "kolicinaUnos";
        input.className = "kolicinaUnos";
        red.appendChild(input);

        red = document.createElement("div");
        kont.appendChild(red);

        let btn = document.createElement("button");
        btn.innerHTML = "Dodaj";
        btn.onclick = () => this.dodaj();
        red.appendChild(btn);

        btn = document.createElement("button");
        red.appendChild(btn);
        btn.innerHTML = "Otkaži";
        btn.onclick = ev => {
            this.cisti();
        }

        btn = document.createElement("button");
        btn.innerHTML = "Nazad";
        red.appendChild(btn);
        // btn.onclick = () => {
        //     window.open('','_self').close();
        // }
        btn.onclick = () => {
            this.nazad();
        }

    }

    cisti(){
        let input = document.getElementsByTagName('input');

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }

        input = document.getElementsByTagName('textarea');
        input.value = '';

        input = document.querySelector(".selKnjige");
        input.value = -1;
    }
    
    dodaj() {
        const knjiga = document.querySelector('select.selKnjige').value;
        const kolicina = document.querySelector('input.kolicinaUnos').value;

        if (knjiga <= 0) {
            alert('Morate izabrati knjigu!');
            return;
        }
        if (kolicina == '') {
            alert('Morate uneti kolicinu!');
            return;
        }

        fetch(`https://localhost:5001/Biblioteka/DodajKnjiguUBiblioteku/${this.bibID}/${knjiga}/${kolicina}`,
            {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(p => p.json().then(
                data => {
                    if (p.ok) {
                        
                        alert('Uspesno dodata knjiga!');
                    }
                    else {
                        alert('Doslo je do greske prilikom unosa podataka!');
                        return;
                    }
                }));

            this.cisti();
    }

    brisi() {
        let pom = document.querySelector(".formaClanovi");
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

        pom = document.querySelector(".formaDodajKorisnika");
        if (pom != null) {
            const parent = pom.parentNode;
            parent.removeChild(pom);
        }

        pom = document.querySelector(".divZaSelekciju");
        if (pom != null) {
            pom.style.display = 'none';
        }
       
    }

    nazad() {
        this.brisi();

        let pom = document.querySelector(".divZaSelekciju");
        if (pom != null) {
            pom.style.display = 'block';
        }
        
    }

}