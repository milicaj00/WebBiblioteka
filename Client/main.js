import { Biblioteka } from "./Biblioteka.js";

const red = document.createElement('div');
red.className = 'divGlavnaSelekcija';
document.body.appendChild(red);

let i = 0;

fetch('https://localhost:5001/Biblioteka/Biblioteke')
    .then( p => p.json(). then ( data => {

        //console.log(data);

        data.forEach(element => {

            i++;
            
            const btn = document.createElement("button");
            btn.className = 'btnGlavni';
            btn.innerHTML = element.naziv;
            red.appendChild(btn);
            btn.onclick = () => {
                
                const b = new Biblioteka(element.id, element.naziv, element.adresa, element.email, element.brojTelefona);
                b.crtajBiblioteku(document.body);

                let dugmici = document.querySelectorAll('.btnGlavni');
                dugmici.forEach( d => {
                    d.style.backgroundImage = 'linear-gradient(to right, #303c44 0%,#a391e5 51%,  #393c3e 100%)';
                })
                btn.style.backgroundImage = 'linear-gradient(#060b2d,#a391e5, #060b2d)';
                
            }
            if( i == 1){
                btn.style.backgroundImage = 'linear-gradient(#060b2d,#a391e5, #060b2d)';
                
                const b = new Biblioteka(element.id, element.naziv, element.adresa, element.email, element.brojTelefona);
                b.crtajBiblioteku(document.body);
            }
        });
    }));
