(() => {
    $('#logBtn').on("click", function () {
        $('#noLogs').hide();
        let message = $('#messageInput').val();
        let logs = $('#logs');
        let value = $('input[name=exampleRadio]:checked').val();
        let author = $('#usernameInput').val() == "" ? "Anonymous" : $('#usernameInput').val();
        let div;
        let typeMsg;
        let archieve
        if (value === "success") {
            div = $('<div class="text-white bg-success py-1 container mb-2 row mx-auto">');
            typeMsg = "Success";
            archieve = $('<h3 class="col-2 offset-1 bg-success text-white">Archieve</h3>').on("click", function () {
                $(div).remove();
                if (logs.children().length === 1){
                    $('#noLogs').show();
                }
            });
        }
        else if (value === "info") {
            div = $('<div class="text-white bg-info py-1 container mb-2 row mx-auto">');
            typeMsg = "Info";
            archieve = $('<h3 class="col-2 bg-info text-center text-white">Archieve</h3>').on("click", function () {
                $(div).remove();
                if (logs.children().length === 1){
                    $('#noLogs').show();
                }
            });
        }
        else if (value === "error") {
            div = $('<div class="text-white bg-danger py-1 container mb-2 row mx-auto">');
            typeMsg = "Error";
            archieve = $('<h3 class="col-2 bg-error text-center text-white">Archieve</h3>').on("click", function () {
                $(div).remove();
                if (logs.children().length === 1){
                    $('#noLogs').show();
                }
            });
        }
        let pm = `${typeMsg}: ${message}`;

        let p = $(`<h3 class="col-5 border border-dark border-top-0 border-bottom-0 border-left-0">${pm}</h3>`);
        let username = $(`<h3 class="text-center col-3 border border-dark border-top-0 border-bottom-0 border-left-0">${author}</h3>`);
        p.appendTo(div);
        username.appendTo(div);
        archieve.appendTo(div);
        logs.append(div);
        $('#messageInput').val("");
    });

    $('#setUser').on("click", function () {
        if ($('#setUser').text() === "Set Username") {
            $('#setUser').text("Logout");
        }
        else {
            $('#setUser').text("Set Username");
            $('#usernameInput').val("");
        }
    });
})();