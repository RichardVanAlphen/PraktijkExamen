$(document).ready(function(){
    // Laden artikelen
    $('.blogInhoud').load('../html/blogArtikelen.html', function(){
        $('.oldArticle').hide();
        $('.fullVersion').hide();
    });

    // Artikel openen/sluiten
    // Aside knoppen
    $('#btnPreview').on('click', function(){
        $('.continuReading').slideDown();
        $('#cursus').slideDown();
        $('#cursusFullVersion').slideUp();
        $('#aanmelding').slideDown();
        $('#aanmeldingFullVersion').slideUp();
        $('#docent').slideDown();
        $('#docentFullVersion').slideUp();
        $('#onderhoud').slideUp();
        $('#opening').slideUp();
    });
    $('#btnCursus').on('click', function(){
        $('.close').slideUp();
        $('.continuReading').slideUp();
        $('#cursus').slideDown();
        $('#cursusFullVersion').slideDown();
    });
    $('#btnAanmelding').on('click', function(){
        $('.close').slideUp();
        $('.continuReading').slideUp();
        $('#aanmelding').slideDown();
        $('#aanmeldingFullVersion').slideDown();
    });
    $('#btnDocent').on('click', function(){
        $('.close').slideUp();
        $('.continuReading').slideUp();
        $('#docent').slideDown();
        $('#docentFullVersion').slideDown();
    });
    $('#btnOnderhoud').on('click', function(){
        $('.close').slideUp();
        $('#onderhoud').slideDown();
    });
    $('#btnOpening').on('click', function(){
        $('.close').slideUp();
        $('#opening').slideDown();
    });
    // Artikel onClick
    $('.blogInhoud').on('click', '#cursus', function(){
        $('.continuReading').slideToggle();
        $('#cursusFullVersion').slideToggle();
        $('#aanmelding').slideToggle();
        $('#docent').slideToggle();
    });
    $('.blogInhoud').on('click', '#aanmelding', function(){
        $('.continuReading').slideToggle();
        $('#aanmeldingFullVersion').slideToggle();
        $('#cursus').slideToggle();
        $('#docent').slideToggle();
    });
    $('.blogInhoud').on('click', '#docent', function(){
        $('.continuReading').slideToggle();
        $('#docentFullVersion').slideToggle();
        $('#cursus').slideToggle();
        $('#aanmelding').slideToggle();
    });
});