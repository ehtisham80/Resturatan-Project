var myList = {
    date: "2020-07-01",
    table: "2",
    firstName: "Adel",
    lastName: "Filo",
    email: "adelvfilo@gmail.com",
    telephone: "0700001111",
    comments: "Hey!"
};
var myList2 = {
    date: "2020-07-02",
    table: "1",
    firstName: "Adel",
    lastName: "Filo",
    email: "adelvfilo@gmail.com",
    telephone: "0700001111",
    comments: "Hey!"
};

function addBooking() {
    Object.create({
        date: document.getElementById("date").value,
        table: document.getElementById("table").value,
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        telephone: document.getElementById("telephoneNumber").value,
        comments: document.getElementById("comments").value
    })
    document.getElementById("date").value = "";
    document.getElementById("table").value = "";
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telephoneNumber").value = "";
    document.getElementById("comments").value = "";
    $("#msg").css("color", "white");
    document.getElementById("msg").innerHTML = "Thanks for booking a table at Vegas Restaurant! We hope you will enjoy it." + "<br> <br>";

}


var allBookings = [myList, myList2];


function available() {

    document.getElementById("msg").innerHTML = "";
    // document.getElementById("done").innerHTML= "";
    for (var x in allBookings) {
        if ((allBookings[x].date == document.getElementById("date").value) &&
            (allBookings[x].table == document.getElementById("table").value)) {
            $("#msg").css("color", "white");
            document.getElementById("msg").innerHTML = "This table at this date is taken. Please try to book another one." + "<br> <br>";

            document.getElementById("date").value = "";
            document.getElementById("table").value = "";
            booking();

        } else {

            if ((allBookings[x].date != document.getElementById("date").value) &&
                (allBookings[x].table != document.getElementById("table").value)) {
                document.getElementById("firstName").disabled = false;
                document.getElementById("lastName").disabled = false;
                document.getElementById("email").disabled = false;
                document.getElementById("telephoneNumber").disabled = false;
                document.getElementById("comments").disabled = false;
                document.getElementById("submit").disabled = false;

            }

        }
    }
}

function booking() {

    if (document.getElementById("date").value == "" ||
        document.getElementById("table").value == "") {
        document.getElementById("firstName").disabled = true;
        document.getElementById("lastName").disabled = true;
        document.getElementById("email").disabled = true;
        document.getElementById("telephoneNumber").disabled = true;
        document.getElementById("comments").disabled = true;
        document.getElementById("submit").disabled = true;

    } else {
        if (document.getElementById("date").value != "" &&
            document.getElementById("table").value != "") {
            available();
        }

    }
}

booking();