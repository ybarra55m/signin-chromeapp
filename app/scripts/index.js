$('button:submit').click(function (event) {
    event.preventDefault();
    $(':input').each(function () {
        if ((this.checked) || ($(this).attr('type') === 'text')) {
            console.log($(this).val());
        };
    });
});

