$.each($(".faq__items h2"), function (curr, elem) {
    elem.addEventListener('click', function () {
        elem.classList.toggle("is-opened");
    });
});