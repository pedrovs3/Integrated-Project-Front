const menu = document.querySelector('.menu-burger-container');
const submenu = document.querySelector('.submenu-filters')

menu.addEventListener('click', function(e){
    open();

    if (menu.classList.contains('show')) {
        menu.classList.remove('animation')
        submenu.classList.add('open')
    }

    if(!menu.classList.contains('show')){
        menu.classList.add('animation')
        submenu.classList.remove('open')
        setTimeout((e) => {
            menu.classList.remove('animation')
        }, 900);
    }
});

function open(){
    menu.classList.toggle('show');
}