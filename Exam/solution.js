(() => {
    $('#firstNameInput').hide();
    $('#lastNameInput').hide();
    $('#phoneNumberInput').hide();
    $('#uclInput').hide();

    //Hide h3
    $('#firstNameH').on("click", function () {
        $('#firstNameInput').show();
        $('#firstNameInput').val($('#firstNameH').text());
        $('#firstNameH').hide();
    });

    $('#lastNameH').on("click", function () {
        $('#lastNameInput').show();
        $('#lastNameInput').val($('#lastNameH').text());
        $('#lastNameH').hide();
    });

    $('#phoneNumberH').on("click", function () {
        $('#phoneNumberInput').show();
        $('#phoneNumberInput').val($('#phoneNumberH').text());
        $('#phoneNumberH').hide();
    });

    $('#uclH').on("click", function () {
        $('#uclInput').show();
        $('#uclInput').val($('#uclH').text());
        $('#uclH').hide();
    });

    //On change events
    $('#firstNameInput').on("change", function () {
        $('#firstNameH').text(`${$('#firstNameInput').val()}`);
        $('#firstNameInput').val("");
        $('#firstNameH').show();
        $('#firstNameInput').hide();
    });

    $('#lastNameInput').on("change", function () {
        $('#lastNameH').text(`${$('#lastNameInput').val()}`);
        $('#lastNameH').show();
        $('#lastNameInput').hide();
    });

    $('#phoneNumberInput').on("change", function () {
        $('#phoneNumberH').text(`${$('#phoneNumberInput').val()}`);
        $('#phoneNumberH').show();
        $('#phoneNumberInput').hide();
    });

    $('#uclInput').on("change", function () {
        $('#uclH').text(`${$('#uclInput').val()}`);
        $('#uclH').show();
        $('#uclInput').hide();
    });
    $('#supportClick').on("click", function () {
        $('#support').prop("checked", true);
        makeJobs();
    });
    $('#marketingClick').on("click", function () {
        $('#marketing').prop("checked", true);
        makeJobs();
    });
    $('#crmClick').on("click", function () {
        $('#crm').prop("checked", true);
        makeJobs();
    });
    $('#developmentClick').on("click", function () {
        $('#development').prop("checked", true);
        makeJobs();
    });
    $('#otherClick').on("click", function () {
        $('#other').prop("checked", true);
        makeJobs();
    });

    function makeJobs() {
        let teamOption = $('input[name=team]:checked').val();
        let firstOption = "";
        let secondOption = "";
        let thirdOption = "";
        if (teamOption === "support") {
            firstOption = "Tech Support";
            secondOption = "Medical Support";
            thirdOption = "Assistant Support";
        }
        else if (teamOption === "crm") {
            firstOption = "Community Manager";
            secondOption = "Customer Care Manager";
            thirdOption = "Lead Administrative Officer";
        }
        else if (teamOption === "marketing") {
            firstOption = "PR Manager";
            secondOption = "Social Media Manager";
            thirdOption = "Marketing Specialist";
        }
        else if (teamOption === "development") {
            firstOption = "Junior Developer";
            secondOption = "Regular Developer";
            thirdOption = "Senior Developer";
        }
        else {
            firstOption = "Team Lead";
            secondOption = "Regular Employee";
            thirdOption = "Intern";
        }
        $('#firstOption').text(firstOption);
        $('#secondOption').text(secondOption);
        $('#thirdOption').text(thirdOption);
    };
    $('#submitBtn').on("click", replaceLikeInTheBeginning);
    $('#resetBtn').on("click", replaceLikeInTheBeginning);

    function replaceLikeInTheBeginning() {
        $('#firstNameH').text("Pesho");
        $('#lastNameH').text("Peshov");
        $('#phoneNumberH').text("555-333-4545");
        $('#uclH').text("9311124003");
        $('#firstOption').text("Team Lead");
        $('#secondOption').text("Regular Employee");
        $('#thirdOption').text("Intern");
        $('#other').prop("checked", true);
    }

    $('#firstOption').on("click", function () {
        $('#currentOne').prop("checked", true);
    });
    $('#secondOption').on("click", function () {
        $('#currentTwo').prop("checked", true);
    });
    $('#thirdOption').on("click", function () {
        $('#currentThree').prop("checked", true);
    });
})();