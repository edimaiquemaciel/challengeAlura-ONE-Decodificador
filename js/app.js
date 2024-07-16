import { cripIn } from "./modulos/funbtn.js";
import { cpyTexto } from "./modulos/copiarTexto.js";
import { darkMode } from "./modulos/darkMode.js";
import { animarTitulo } from "./modulos/animarTitulo.js"

const destino = document.getElementById('decoded-text');
const origem = document.getElementById('encode-text');
const div_oculta = document.getElementById('div__oculta');
const div_show = document.getElementById('div__show');

cripIn(destino, origem, div_oculta, div_show);
cpyTexto();
darkMode();
animarTitulo();
 