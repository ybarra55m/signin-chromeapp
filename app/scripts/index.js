'use strict';
    $(document).ready(function ($) {
        var record = [];
        $('#submitFormButton').click(function () {
            record.push({
                sent: Date.now(),
                checked: $("input:checked").val(),
            });
            console.log(record);
            $.ajax({
                type: "POST",
                url: "send",
                data: JSON.stringify(record)
            });
        });
    });

