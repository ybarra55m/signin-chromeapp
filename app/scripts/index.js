$('button:submit').click(function (event) {
    event.preventDefault();
    var record = {};
    record['datetime'] = Date.now();
    $('input').each(function () {
        if ((this.checked) || ($(this).attr('type') === 'text')) {
            var i = $(this);
            record[i.attr('name')] = i.val();
        };
    });
    console.log(record); //TODO: change this to push data to localstorage or what have you
    localforage.setItem(record['datetime'], record).then(function() {
        console.log('record saved');
    });
    $('input').each(function() { this.checked = false; } );
    document.forms['patroninfo'].reset();
});

