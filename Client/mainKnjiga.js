import { Knjiga } from "./Knjiga.js";

const params = window.knjiga;
//console.log(params);

const knjiga = new Knjiga(params);

//console.log(knjiga);

knjiga.sveZaKnjigu(document.body);