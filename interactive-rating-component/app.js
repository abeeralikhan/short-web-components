const selectionClass = 'selected';
const ratingSectionName = 'rating-state';
const thankyouSectionName = 'thankyou-state';

const ratingLevels = document.querySelector('.rating-levels');
const ratingSection = document.querySelector('.' + ratingSectionName);
const thankyouSection = document.querySelector('.' + thankyouSectionName);
const ratingToSet = document.querySelector('.set-rating');
const submitBtn = document.querySelector('.button');
const backBtn = document.querySelector('.back-button');

const ratings = ratingLevels.children;

let currentRating = '';

submitBtn.addEventListener('click', handleSubmit);

backBtn.addEventListener('click', handleBack)

for (const rating of ratings) {
    rating.addEventListener('click', function(e) {
        selectRating(this);
    });
}

function clearSelection() {
    for (const rating of ratings) {
        if (rating.classList.contains(selectionClass)) {
            rating.classList.remove(selectionClass)
        }
    }
}

function selectRating(obj) {
    if (!obj.classList.contains(selectionClass)) {
        clearSelection();
        currentRating = obj.innerText;
        obj.classList.add(selectionClass);
    }
}

function hideSection(sectionName) {
    const noDisplayClass = 'no-display';
    otherSection = sectionName === ratingSectionName ? thankyouSection: ratingSection;
    currentSection = sectionName !== ratingSectionName ? thankyouSection: ratingSection;

    currentSection.classList.add(noDisplayClass);
    otherSection.classList.remove(noDisplayClass);
}

function handleSubmit() {
    if (currentRating) {
        hideSection(ratingSectionName);
        updateRating(currentRating);
    } else {
        alert('Please select a rating!')
    }
}

function handleBack() {
    hideSection(thankyouSectionName);
}

function updateRating(rating) {
    ratingToSet.innerText = rating;
}


// element.children;
// .classList.add();
// .classList.remove();
// .classList.contains();