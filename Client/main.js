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
                    d.style.backgroundColor = '#7a4c70';
                })
                btn.style.backgroundColor = 'white';
                
            }
            if( i == 1){
                btn.style.backgroundColor = 'white';
                
                const b = new Biblioteka(element.id, element.naziv, element.adresa, element.email, element.brojTelefona);
                b.crtajBiblioteku(document.body);
            }
        });
    }));
