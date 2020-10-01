let tabs = {
    'tab-1': 'text-1',
    'tab-2': 'text-2',
    'tab-3': 'text-3',
    'tab-4': 'text-4',
    'tab-5': 'text-5'
};

$('nav.text-tabs ul li').click(function () {
    // console.log($(event.target).attr('class'));
    let navTabs = document.querySelectorAll('nav.text-tabs ul li');
    navTabs.forEach(element => {
        if (element.classList == 'selected-tab') {
            element.classList = '';
            $('#' + tabs[$(element).attr('id')]).removeClass('active-text')
        }
    });
    event.target.classList = 'selected-tab';
    $('#' + tabs[$(event.target).attr('id')]).addClass('active-text');
});
