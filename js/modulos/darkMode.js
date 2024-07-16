export function darkMode(){
    const botaoDark = document.getElementById("toggle");
    botaoDark.addEventListener('change', function(){
        const body = document.querySelector("body");
        const textEncode = document.getElementById('encode-text');
        const textDecode = document.getElementById('decoded-text');
        const aside = document.querySelector('.container__aside');
        const asideContent = document.querySelector('.container__aside__content');
        const warningMsg = document.querySelector('.container__main__section__warning')
        const devLink = document.querySelector('.dev__links');
        const devLinks = document.querySelector('.dev__linkss');
        const devLinkss = document.querySelector('.dev__linksss');


        body.classList.toggle('body__light');
        textEncode.classList.toggle('encode-text__light');
        textEncode.classList.toggle('place');
        textDecode.classList.toggle('decoded-text__light');
        textDecode.classList.toggle('place');
        aside.classList.toggle('container__aside__light');
        asideContent.classList.toggle('container__aside__content__light');
        warningMsg.classList.toggle('container__main__section__warning__light');
        devLink.classList.toggle('footer__link__light');
        devLinks.classList.toggle('footer__link__light');
        devLinkss.classList.toggle('footer__link__light');
        
    });
}