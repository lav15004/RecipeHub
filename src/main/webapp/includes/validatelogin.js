
<script>
$(function () {
    // Get the form.
    var form = $('#ajax-login');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form).submit(function (event) {
        // Stop the browser from submitting the form.
        event.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

// Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
                .done(function (response) {
                   
                    if (!response.includes("main.jsp"))
                    {
                        // Set the message text.
                        console.log(response);
                        $(formMessages).text(response);
                        $(formMessages).addClass("alert alert-danger");
                    }
                    else
                    {
                         window.location.href = "main.jsp";
                    }


                    // Clear the form.
                    $('#username').val('');
                    $('#password').val('');
                })
    });



});

</script>
