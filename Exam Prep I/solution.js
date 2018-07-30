(function() {
    $('.inputG').on("input", function () {
       let firstname = $('#firstname').val();
       let lastname = $('#lastname').val();
       let company = $('#company').val();
       let branch = $('#branch').val();
       let result = `${firstname[0]}.${lastname}@${branch}-${company}.com`.toLowerCase();
       $('#result').val(result);
    });
}());