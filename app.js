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



// sakdhhj
document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el contenedor de productos y cuenta los productos
    const productContainer = document.getElementById("product-container");
    const productItems = productContainer.getElementsByClassName("product-item");
    const totalProducts = productItems.length;
    
    // Define cuántos productos se muestran por página (puedes ajustar este número)
    const productsPerPage = 15;
    
    // Calcula los números que se mostrarán
    const showingEnd = Math.min(productsPerPage, totalProducts);
    
    // Selecciona el contenedor del texto de los resultados
    const resultCount = document.getElementById("result-count");
    
    // Actualiza el texto de los resultados
    resultCount.innerHTML = `Showing 1 - ${showingEnd} of ${totalProducts} results`;
});








// PAGINACION

document.addEventListener('DOMContentLoaded', function () {
    const productsPerPage = 9;
    const productItems = document.querySelectorAll('.product-item');
    const totalPages = Math.ceil(productItems.length / productsPerPage);
    const pagination = document.querySelector('.pagination');
    const prevPage = document.getElementById('prev-page');
    const nextPage = document.getElementById('next-page');
    
    let currentPage = 1;

    // Función para mostrar los productos de la página actual
    function showPage(page) {
        const start = (page - 1) * productsPerPage;
        const end = start + productsPerPage;

        productItems.forEach((item, index) => {
            if (index >= start && index < end) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });

        currentPage = page;
        updatePagination();
    }

    // Función para actualizar los botones de paginación
    function updatePagination() {
        const pageItems = document.querySelectorAll('.page-item.page-number');
        pageItems.forEach(item => item.remove());

        for (let i = 1; i <= totalPages; i++) {
            const pageItem = document.createElement('li');
            pageItem.classList.add('page-item', 'page-number');
            if (i === currentPage) {
                pageItem.classList.add('active');
            }
            const pageLink = document.createElement('a');
            pageLink.classList.add('page-link');
            pageLink.href = '#';
            pageLink.textContent = i;
            pageLink.addEventListener('click', function (e) {
                e.preventDefault();
                showPage(i);
            });
            pageItem.appendChild(pageLink);
            nextPage.parentNode.insertBefore(pageItem, nextPage);
        }

        prevPage.classList.toggle('disabled', currentPage === 1);
        nextPage.classList.toggle('disabled', currentPage === totalPages);
    }

    // Event listeners for previous and next buttons
    prevPage.addEventListener('click', function (e) {
        e.preventDefault();
        if (currentPage > 1) {
            showPage(currentPage - 1);
        }
    });

    nextPage.addEventListener('click', function (e) {
        e.preventDefault();
        if (currentPage < totalPages) {
            showPage(currentPage + 1);
        }
    });

    // Inicialización
    showPage(1);
});


