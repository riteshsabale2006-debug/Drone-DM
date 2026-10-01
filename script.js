// ===============================
// SMOOTH SCROLL
// ===============================

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }

}


// ===============================
// MOBILE MENU
// ===============================

function toggleMenu() {

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");

}


// Close mobile menu after clicking link

document.querySelectorAll("#navMenu a").forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .getElementById("navMenu")
            .classList.remove("active");

    });

});


// ===============================
// OVERVIEW MODAL
// ===============================

function openModal() {

    document
        .getElementById("overviewModal")
        .classList.add("active");

}


function closeModal() {

    document
        .getElementById("overviewModal")
        .classList.remove("active");

}


// Close modal by clicking outside

document
    .getElementById("overviewModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeModal();
        }

    });


// ===============================
// ESCAPE KEY
// ===============================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeModal();

    }

});