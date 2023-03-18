// ---------- WEBSHARE Nativo ----------
const $button = document.querySelector('#button')
if ('share' in navigator) {
    $button.addEventListener('click', share)
    function share() {
        navigator.share({
            title: 'Share API',
            text: 'eCard - MIMA® Rocío Toledo:',
            url: 'http://dedalomultimedia.com/mima/rociotoledo',
        })
        .then(()=>{
            alert('¡La eCard se compartió con éxtio!')
        })
        .catch(()=>{
            alert('No se pudo compartir.')
        })
    }
} else {
    alert('No es posible compartir desde este navegador. El sitio requiere un certificado SSL')
}