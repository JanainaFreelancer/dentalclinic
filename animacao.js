const btnConfiraMais = document.querySelectorAll('.btn-confira-mais');
const btnArrow = document.querySelectorAll('.btn-arrow');


btnConfiraMais.forEach(function(btnItem, btnPosicao) {
    btnItem.addEventListener('click', function(e) {
        e.preventDefault();
        btnArrow[btnPosicao].classList.add('active')
    })

})