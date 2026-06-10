// NAVBAR TOGGLE
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// SECTION ANIMATION
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

sections.forEach(sec => observer.observe(sec));

// FORM RADIO HIGHLIGHT
const fieldsets = document.querySelectorAll("fieldset");

fieldsets.forEach(fieldset => {
    const radios = fieldset.querySelectorAll("input[type='radio']");

    radios.forEach(radio => {
        radio.addEventListener("change", () => {
            fieldset.querySelectorAll("label").forEach(label => {
                label.classList.remove("active-option");
            });

            radio.parentElement.classList.add("active-option");
        });
    });
});
