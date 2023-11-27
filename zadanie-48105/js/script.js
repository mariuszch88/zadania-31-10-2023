$(document).ready(function () {

    $("#pobierz-dane").click(function () {

        $.ajax({

            url: "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",

            method: "GET",

            dataType: "json",


            success: function (dane) {
                console.log(dane);
                $("#dane-programisty").html(`<p>${dane.imie}<br> ${dane.nazwisko}<br> ${dane.zawod}<br> ${dane.firma}</p>`);
            },


            error: function (xhr, status, error) {

                alert("Błąd: " + status + " - " + error);
            }
        });
    });
});




// $(document).ready(function () {
//     // Przypisanie danych do zmiennych
//     var imie = "Mariusz";
//     var nazwisko = "Kowalski";
//     var wiek = 36;

//     // Dodanie zdarzenia kliknięcia do przycisku
//     $('#pobierz').on('click', function () {
//         // Wyświetlenie danych w konsoli
//         console.log(imie, nazwisko, wiek);
//     });
// });













// $(document).ready(function url() {
//     $("#pobierz-dane").click(function () {
//         pobierzDane();
//     });
// });

// function pobierzDane() {
//     var url = "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php";

//     $.ajax({
//         url: url,
//         method: "GET",
//         dataType: "json",

//         success: function (dane) {
//             $("#dane-programisty").html(JSON.stringify(dane));
//         },

//     });
// }