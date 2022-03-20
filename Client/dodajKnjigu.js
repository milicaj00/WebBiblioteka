import { novaKnjiga } from "./novaKnjiga.js";

const params = window.podaci;
console.log(params);
const k = new novaKnjiga(params);
k.crtaj(document.body);