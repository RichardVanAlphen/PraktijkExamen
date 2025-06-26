$(document).ready(function(){

    $('input.datepicker').Zebra_DatePicker();
    $('#addTitle').on('click', function(){
        $('#articleTable').append('<tr><td><label for="titel">Titel</label></td></tr>');
        $('#articleTable').append('<tr><td><tr><td><textarea name="titel" placeholder="Uw titel hier" maxlength="1500"></textarea></td></tr>');
    });
    $('#addParagraph').on('click', function(){
        $('#articleTable').append('<tr><td><label for="paragraaf">Paragraaf</label></td></tr>');
        $('#articleTable').append('<tr><td><textarea name="paragraaf" placeholder="Uw paragraaf hier" maxlength="1500"></textarea></td></tr>');
    });
    $('#btnOpslaan').on('click', function(event){
        event.preventDefault();
        const date = $('#datepicker').val();
        const auteur = $('#auteurInput').val();
        const titel = $('#titelInput').val();
        const paragraaf = $('#paragraafInput').val();

        if(date !== '' && auteur !== '' && titel !== '' && paragraaf !== ''){
            alert('Artikel opgeslagen.');
        }
        else{
            alert('Zorg er voor dat alles is ingevuld.');
        };
    });
});