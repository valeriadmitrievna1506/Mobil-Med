$('nav.text-tabs ul li').click(function () {
    // console.log($(event.target).attr('class'));
    let navTabs = document.querySelectorAll('nav.text-tabs ul li');
    navTabs.forEach(element => {
        if (element.classList == 'selected-tab') {
            element.classList = '';
        }
    });
    event.target.classList = 'selected-tab';
});
