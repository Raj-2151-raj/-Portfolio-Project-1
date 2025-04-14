const sideMenu = document.querySelector('#sideMenu');

function openMenu(){
    sideMenu.computedStyleMap.transform = 'translateX(-16rem)';

}
function closeMenu(){
    sideMenu.style.transform ='translateX(16rem)';
}
