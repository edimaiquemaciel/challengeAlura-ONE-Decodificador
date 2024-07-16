const palavraOriginal = 'Decodificador';
const tituloElement = document.getElementById('titulo');

function criarLetras() {
    tituloElement.innerHTML = palavraOriginal.split('').map(letra => 
        `<span class="letra">${letra}</span>`
    ).join(' ');
}

function embaralharLetras() {
    const letras = Array.from(tituloElement.children);
    for (let i = letras.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letras[i].textContent, letras[j].textContent] = [letras[j].textContent, letras[i].textContent];
        letras[i].classList.add('embaralhada');
        letras[j].classList.add('embaralhada');
    }
}

function resetarLetras() {
    const letras = Array.from(tituloElement.children);
    letras.forEach((letra, index) => {
        letra.textContent = palavraOriginal[index];
        letra.classList.remove('embaralhada');
    });
}

export function animarTitulo() {
    let contador = 0;
    criarLetras();

    const intervalId = setInterval(() => {
        if (contador < 10) {
            embaralharLetras();
            contador++;
        } else {
            resetarLetras();
            clearInterval(intervalId);
            setTimeout(animarTitulo, 2000); // Reinicia a animação após 2 segundos
        }
    }, 200);
}