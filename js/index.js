function showLay() {
    let overlayback = document.querySelector('#overlay');
    let gavetaElemente = document.querySelector('#gaveta')
    let editarContei = document.querySelector('#conteiEdit')

    if (overlayback.classList.contains('invisible')) {

        overlayback.classList.remove('invisible', 'opacity-0')
        gavetaElemente.classList.remove("-right-full")
        gavetaElemente.classList.add('right-0')

    } else {

        overlayback.classList.add('invisible', 'opacity-0')
        gavetaElemente.classList.add("-right-full")
        gavetaElemente.classList.remove('right-0')

        editarContei.classList.add('-right-full')
        editarContei.classList.remove('right-0')
    }
}
function closeAll() {
    let overlayback = document.querySelector('#overlay');
    let gavetaElemente = document.querySelector('#gaveta')
    let editarContei = document.querySelector('#conteiEdit')
    
    if (overlayback.classList.contains('invisible')) {
        overlayback.classList.remove('invisible', 'opacity-0')
        gavetaElemente.classList.remove("-right-full")
        gavetaElemente.classList.add('right-0')
    } else {
        overlayback.classList.add('invisible', 'opacity-0')

        gavetaElemente.classList.add("-right-full")
        gavetaElemente.classList.remove('right-0')

        editarContei.classList.add('-right-full')
        editarContei.classList.remove('right-0')
    }
}
function editar() {
    let overlayback = document.querySelector('#overlay');
    let editarContei = document.querySelector('#conteiEdit')
    overlayback.classList.remove('invisible', 'opacity-0')
    editarContei.classList.remove('-right-full')
    editarContei.classList.add('right-0')

}
