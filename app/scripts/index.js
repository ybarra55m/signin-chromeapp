$('button:submit').click(function (event) {
    event.preventDefault();
    var record = {};
    record['datetime'] = Date.now();
    $(':input').each(function () {
        if ((this.checked) || ($(this).attr('type') === 'text')) {
            var i = $(this);
            record[i.attr('name')] = i.val();
        };
    });
    console.log(record);
});

