let general = document.querySelector("#general");


function ligne() {
general.classList.remove('column');
general.classList.remove('row__reverse');
general.classList.remove('column__reverse');
general.classList.add('row');
};

function ligneR() {
    general.classList.remove('column');
    general.classList.remove('column__reverse');
    general.classList.remove('row');
    general.classList.add('row__reverse');
    };

function colonne() {
    general.classList.remove('row');
    general.classList.remove('column__reverse');
    general.classList.remove('row__reverse');
    general.classList.add('column');
    };

    function colonneR() {
        general.classList.remove('row');
        general.classList.remove('column');
        general.classList.remove('row__reverse');
        general.classList.add('column__reverse');
        };