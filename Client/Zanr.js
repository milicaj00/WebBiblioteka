import { Knjiga } from "./Knjiga.js";
export class Zanr{
    constructor(){
        this.id = null;
        this.naziv = null;
    }
    ucitajZanrove(select){

        let op = document.createElement("option");
        op.innerHTML = "Izaberite zanr";
        op.value = -1;
        select.appendChild(op);

        fetch("https://localhost:5001/Zanr/Zanrovi",
        {
            method:"GET"
        }).then ( p=> {  p.json().then
                (data => 
                {
                    if(p.ok)
                    { 
                        data.forEach(element => {
                            op = document.createElement("option");
                            op.innerHTML = element.naziv;
                            op.value = element.id;
                            select.appendChild(op);
                        });
                    
                    }
                    else{
                        console.log("Bad request");
                        throw new error("Lose ucitao zanrove!");
                    }
                        
                })
           
            });
    }

    ucitajKnjigeZanr(host, bibID){
        this.brisiKnjige();

        let pom = document.querySelector(".selAutor");
        pom.value = -1;

        const formaKnjige = document.createElement("div");
        formaKnjige.className = "formaKnjige";
        host.appendChild(formaKnjige);               

        let optionEl = document.querySelector("select.selZanr");

        if (optionEl == null)
        {
            alert("Morate izabrati žanr!");
            return;
        }

        const zanrID = optionEl.options[optionEl.selectedIndex].value; 

        if(zanrID <= 0){
            alert('Morate izabrati žanr!');
            return;
        }

        const divTabele = document.createElement("div");
        divTabele.className = "divTabele";
        formaKnjige.appendChild(divTabele);

        const tabela = document.createElement("table");
        tabela.className = "tabelaKnjige";
        divTabele.appendChild(tabela);

        const tabela2 = document.createElement("table");
        tabela2.className = "tabelaKnjige";
        divTabele.appendChild(tabela2);

        let i = 0;

        

        fetch("https://localhost:5001/Knjiga/GetKnjigeByZanr/"+zanrID + '/'+bibID,
        {
            method:"GET"
        })
        .then ( p=> {  p.json().then
                (data => 
                {
                    if(p.ok)
                    { 
                        // console.log("https://localhost:5001/Knjiga/GetKnjigeByZanr/"+zanrID + '/'+bibID);

                        if(data.length == 0){
                            alert('Trenuto nemamo na stanju nijednu knjigu ovog žanra!');
                        }


                        data.forEach(element => {
                            
                            const knjiga = new Knjiga(element, bibID);
                            if(i++ % 2 == 0){
                                knjiga.crtaj(tabela);
                            }
                            else{
                                knjiga.crtaj(tabela2);
                            }

                            })
                        }
                    else {
                        alert('Došlo je do greške orilikom čitanja podataka!');
                        return;
                    }
                });
            })
                
    }

    brisiKnjige(){
        let pom = document.querySelector(".formaKnjige");
       if (pom != null)
       {
            const parent = pom.parentNode;
            parent.removeChild(pom);
       }
    }
}