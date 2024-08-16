document.addEventListener("DOMContentLoaded", function(){
    // Hace que los submenús sean clickeables en dispositivos móviles
    document.querySelectorAll('.dropdown-menu a.dropdown-toggle').forEach(function(element){
        element.addEventListener('click', function (e) {
            var parentDropdown = this.closest('.dropdown-menu');
            var submenu = this.nextElementSibling;
            if(submenu && submenu.classList.contains('dropdown-submenu')){
                e.preventDefault();
                e.stopPropagation();
                if(submenu.style.display === 'block'){
                    submenu.style.display = 'none';
                } else {
                    submenu.style.display = 'block';
                }
            }
        });
    });
});

// Manejo de la vista de cuadrícula y lista
const gridViewIcon = document.getElementById('grid-view');
const listViewIcon = document.getElementById('list-view');
const productContainer = document.getElementById('product-container');

gridViewIcon.addEventListener('click', () => {
  productContainer.classList.remove('list-view');
  productContainer.classList.add('row'); // Volvemos al diseño en cuadrícula
});

listViewIcon.addEventListener('click', () => {
  productContainer.classList.remove('row');
  productContainer.classList.add('list-view');
});



