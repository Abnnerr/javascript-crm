function showLay() {
    let overlayback = document.querySelector('#overlay');
    let gavetaElemente = document.querySelector('#gaveta')
    if(overlayback.classList.contains('invisible')) {
        overlayback.classList.remove('invisible','opacity-0')
        gavetaElemente.classList.remove("-right-full")
        gavetaElemente.classList.add('right-0')
    } else {
        overlayback.classList.add('invisible','opacity-0')
        gavetaElemente.classList.add("-right-full")
        gavetaElemente.classList.remove('right-0')
    }
}
function closeAll(){
    let overlayback = document.querySelector('#overlay');
    let gavetaElemente = document.querySelector('#gaveta')
    if(overlayback.classList.contains('invisible')) {
        overlayback.classList.remove('invisible','opacity-0')
        gavetaElemente.classList.remove("-right-full")
        gavetaElemente.classList.add('right-0')
    } else {
        overlayback.classList.add('invisible','opacity-0')
        gavetaElemente.classList.add("-right-full")
        gavetaElemente.classList.remove('right-0')
    }
}