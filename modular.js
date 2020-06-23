var module_pattern = function (jQ) {



    function laadProduct() {
//Ophalen van opgeslagen product uit database en deze tonen in webpagina        
        db.collection('Product').get().then(data => {

            for (var i = 0; i < data.docs.length; i++) {
                $('#record').append('<tr><td>' +
                    data.docs[i].data().Title +'</td><td>' +
                    data.docs[i].data().Size + '</td><td>' +
                    data.docs[i].data().Color + '</td><td>' +
                    data.docs[i].data().Brand + '</td><td>' +
                    data.docs[i].data().Price + '</td><td>' +
                    data.docs[i].data().Qty + '</td></tr>');
            }
        })
    }

    return {
        opslaanInDatabase: function () {
//Opslaan van ingevoerde form data in database
            db.collection("Product").add({
                    Brand: $('#inputProductBrand').val(),
                    Color: $('#inputProductColor').val(),
                    Price: $('#inputProductPrice').val(),
                    Qty: $('#inputProductQTY').val(),
                    Size: $('#inputProductSize').val(),
                    Title: $('#inputProductTitle').val(),
                })
                .then(function () {
                    window.location.href = "./index.html";
                })
                .catch(function (error) {
                    console.error("Error writing Product: ", error);
                });
        },


        ladenUitDatabase: function () {
            laadProduct();
        },


        verwijderProduct: function (data) {
            alert(data);
        }
    }

}($);

module_pattern.ladenUitDatabase();