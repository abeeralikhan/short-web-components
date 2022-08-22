const accordion = document.querySelectorAll('.accordion');

for (let accord of accordion) {
    accord.addEventListener('click', function() {
        this.classList.toggle('active');

        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// element.nextElementSibling