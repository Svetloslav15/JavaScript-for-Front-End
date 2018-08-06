$('.custom-btn').on("click", function () {
    $('input').val("");
});

$('.btn-facebook').on("click", function () {
    swal({
            title: "Leave this site?",
            text: "If you click ok you will be connected to Facebook",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-primary",
            confirmButtonText: "OK",
            closeOnConfirm: false
        });
});

$('.btn-google').on("click", function () {
    swal({
            title: "Leave this site?",
            text: "If you click ok you will be connected to Google",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-primary",
            confirmButtonText: "OK",
            closeOnConfirm: false
        });
});