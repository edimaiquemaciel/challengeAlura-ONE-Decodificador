export async function cpyTexto(){

    const botao = document.getElementById('btn__copiar');
    botao.addEventListener('click', async function(){
        const idTextArea = document.getElementById('decoded-text');
        const idTextArea2 = document.getElementById('encode-text');
        const bodyLight = document.querySelector('body');
        const texto = idTextArea.value;
        if(texto !== ""){

            try {
                await  navigator.clipboard.writeText(texto);
                if(bodyLight.classList.contains('body__light')){
                    Swal.fire({
                        text: "Texto copiado com sucesso!",
                        icon: "success",
                        position: "top",
                        toast: true,
                        showConfirmButton: false,
                        timer: 2000,
                      });

                      
                }else{
                    Swal.fire({
                        text: "Texto copiado com sucesso!",
                        icon: "success",
                        position: "top",
                        toast: true,
                        showConfirmButton: false,
                        timer: 2000,
                        background: "#1E1F20",
                        color: "#dcdcdc"
                      });
                }
              } catch (err) {
                if(bodyLight.classList.contains('body__light')){

                    Swal.fire({
                        text: "Texto não copiado!",
                        icon: "error",
                        position: "top",
                        toast: true,
                        showConfirmButton: false,
                        timer: 2000,
                      });
                }else{
                    Swal.fire({
                        text: "Texto não copiado!",
                        icon: "error",
                        position: "top",
                        toast: true,
                        showConfirmButton: false,
                        timer: 2000,
                        background: "#1E1F20",
                        color: "#dcdcdc"
                      });
                }
                }
        }
            idTextArea.textContent = "";
            idTextArea2.placeholder = "Cole aqui ou digite outro texto";
            idTextArea2.value = "";
        
        });
    
}