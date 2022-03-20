import { Korisnik } from "./Korisnik.js";

const params = window.podaci;
console.log(params);

const korisnik = new Korisnik(params);
korisnik.noviKorisnik(document.body);