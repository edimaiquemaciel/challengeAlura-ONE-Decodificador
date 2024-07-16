export function cripIn(destino, origem, oculta, show){
  const botao = document.getElementById('btnCodificar');
  const botao2 = document.getElementById('btn__descrit');
  const chaveDicionario = {
      e: "enter",
      i: "imes",
      a: "ai",
      o: "ober",
      u: "ufat"
  };
  const chaveDicionario2 = {
      enter: "e",
      imes: "i",
      ai: "a",
      ober: "o",
      ufat: "u"
  };

  
  let i = 0;
  let txt = "";
  let speed = 25;
  let isTyping = false;

  
  function typeWriter() {
    if (i < txt.length && isTyping) {
      destino.textContent += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      isTyping = false;
    }
  }

  
  botao.addEventListener('click', function() {
    let origem2 = origem.value;
    const bodyLight = document.querySelector('body');
    if (!/^[a-z\s]*$/.test(origem2)) {
      origem.value = origem2;
      origem.style.cssText = "box-shadow: 0 0 5px 3px red !important;";
      origem.focus();
      if(bodyLight.classList.contains('body__light')){
        Swal.fire({
          icon: "error",
          text: "Por favor, insira apenas letras minúsculas e sem acento.",
          width: 460,
          
        });
      }else{
        Swal.fire({
          icon: "error",
          text: "Por favor, insira apenas letras minúsculas e sem acento.",
          width: 460,
          background: "#1E1F20",
          color: "#D90303",
        });
      }
      
      return;

    }else if(/^[a-z\s]*$/.test(origem2) && origem2 !== ""){

      const textoEncri = origem2.replace(/e|i|a|o|u/gi, (letra) => chaveDicionario[letra.toLowerCase()]);
      txt = textoEncri;
      i = 0;
      destino.textContent = "";
      isTyping = true;
      typeWriter();
      oculta.classList.remove('displayNone');
      show.classList.add('displayNone');
      const charLimit = 200; 
  
      if (textoEncri.length > charLimit) {
        destino.style.overflowY = "scroll"; 
      } else {
        destino.style.overflowY = "hidden";
      }
      const asideee = document.querySelector(".container__aside");
      const containerMargin = document.querySelector(".container");
      if (window.matchMedia("(max-width: 480px)").matches){
        asideee.style.cssText = "height: auto;"
        containerMargin.style.cssText = "margin-bottom: 550px;"
      }
      return;
    }
     
  });
      origem.addEventListener('input', function() {
      origem.style.borderColor = "";
      origem.style.color = "";
      origem.style.boxShadow = "";
      const asideee = document.querySelector(".container__aside");
      const containerMargin = document.querySelector(".container");
      containerMargin.style.cssText = ""
      asideee.style.cssText = "";

      if(destino.textContent === ""){
        oculta.classList.add('displayNone');
        show.classList.remove('displayNone')
      }
      const charLimit = 300; 
  
      if (origem.value.length > charLimit) {
        origem.style.overflowY = "scroll"; 
      } else {
        origem.style.overflowY = "hidden";
      }

    });

  botao2.addEventListener('click', function(){
    let origem3 = origem.value;
    const bodyLight = document.querySelector('body');
    if (!/^[a-z\s]*$/.test(origem3)) {
        origem.value = origem3;
        origem.style.cssText = "box-shadow: 0 0 5px 3px red !important;";
        origem.focus();
        if(bodyLight.classList.contains('body__light')){
          Swal.fire({
            icon: "error",
            text: "Por favor, insira apenas letras minúsculas e sem acento.",
            width: 460,
            
          });
        }else{
          Swal.fire({
            icon: "error",
            text: "Por favor, insira apenas letras minúsculas e sem acento.",
            width: 460,
            background: "#1E1F20",
            color: "#D90303",
          });
        }
        return;

     }else if(/^[a-z\s]*$/.test(origem3) && origem3 !== ""){
        const textoDescri = origem3.replace(/enter|imes|ai|ober|ufat/gi, (letra) => chaveDicionario2[letra.toLowerCase()]);
        txt = textoDescri;
        i = 0;
        destino.textContent = "";
        isTyping = true;
        typeWriter();
        oculta.classList.remove('displayNone');
        show.classList.add('displayNone');

        const charLimit = 400; 
  
      if (textoDescri.length > charLimit) {  
        destino.style.overflowY = "scroll"; 
      } else {
        destino.style.overflowY = "hidden";
      }
      const asideee = document.querySelector(".container__aside");
      const containerMargin = document.querySelector(".container");
      if (window.matchMedia("(max-width: 480px)").matches){
        asideee.style.cssText = "height: auto;"
        containerMargin.style.cssText = "margin-bottom: 550px;"
      }
        return;
     }
      
});
        origem.addEventListener('input', function() {
        origem.style.borderColor = "";
        origem.style.color = "";
        origem.style.boxShadow = "";
        if(destino.textContent === ""){
          oculta.classList.add('displayNone');
          show.classList.remove('displayNone')
        }   
        });
}

