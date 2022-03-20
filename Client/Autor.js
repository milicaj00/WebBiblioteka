import { Knjiga } from "./Knjiga.js";
export class Autor{

    constructor(){
        this.id = 0;
        this.ime = "";
        this.prezime = "";
        
    }

    ucitajAutore(select){

        let op = document.createElement("option");
        op.innerHTML = "Izaberite autora";
        op.value = -1;
        select.appendChild(op);

        fetch("https://localhost:5001/Autor/Autori",
        {
            method:"GET"
        }).then ( p=> {  p.json().then
                (data => 
                {
                    if(p.ok)
                    { 
                        data.forEach(element => {
                            op = document.createElement("option");
                            op.innerHTML = element.ime + " " + element.prezime;
                            op.value = element.id;
                            select.appendChild(op);
                           
                        });
                    
                    }
                    else{
                        // console.log("Bad request");
                        throw new error("Lose ucitao autore!");
                    }
                        
                })
           
            });

    }

    async noviAutor(ime, prezime){
        await fetch(`https://localhost:5001/Autor/DodajAutora/${ime}/${prezime}`,{
            method : 'POST',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then( p => p.json().then(data => {
            if(p.ok){

                this.id = data.id;
                this.ime = data.ime;
                this.prezime = data.prezime; 
                
                alert('Dodat novi autor');
            }
            else {
                alert('Doslo je do greske prilikom dodavanja novog autora');
                console.log(data);
            }
        }))
        
        return this;
    }

    async ucitajKnjigeAutor(host, bibID){

        this.brisiKnjige();

        let pom = document.querySelector(".selZanr");
        pom.value = -1;

        const formaKnjige = document.createElement("div");
        formaKnjige.className = "formaKnjige";
        host.appendChild(formaKnjige);               

        let optionEl = document.querySelector("select.selAutor");

        let autorID = optionEl.options[optionEl.selectedIndex].value; 

        if(autorID <= 0){
            alert('Morate izabrati autora!');
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

        await fetch("https://localhost:5001/Knjiga/GetKnjige/"+autorID+'/'+bibID,
        {
            method:"GET"
        })
        .then ( p=> {  p.json().then
                (data => 
                {
                    if(p.ok)
                    { 

                        if(data.length == 0){
                            alert('Trenuto nemamo na stanju nijednu knjigu ovog autora!');
                        }

                        data.forEach(element => {
                            
                            const knjiga = new Knjiga(element, bibID);

                            if(i++ % 2 == 0){
                                knjiga.crtaj(tabela);
                            }
                            else{
                                knjiga.crtaj(tabela2);
                            }
                        });
                    
                    }
                    else{
                        console.log("Došlo je do greške prilikom čitanja podataka");
                    }
                        
                })
           
            });

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