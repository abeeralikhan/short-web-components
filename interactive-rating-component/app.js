const selectionClassName = 'selected';

const ratingLevels = document.querySelector('.rating-levels');
const ratings = ratingLevels.children;


let currentRating = '';

for (const rating of ratings) {
    rating.addEventListener('click', function(e) {
        selectRating(this);
    });
}

function clearSelection() {
    for (const rating of ratings) {
        if (rating.classList.contains(selectionClassName)) {
            rating.classList.remove(selectionClassName)
        }
    }
}

function selectRating(obj) {
    if (!obj.classList.contains(selectionClassName)) {
        clearSelection();
        currentRating = obj.innerText;
        obj.classList.add(selectionClassName);
    }
}


// element.children;
// .classList.add();
// .classList.remove();
// .classList.contains();