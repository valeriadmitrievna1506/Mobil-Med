$(document).ready(function () {
    document.querySelectorAll('.tooltip').forEach(element => {
        element.childNodes[1].innerText = element.childNodes[3].childNodes[1].innerText;
    });
});