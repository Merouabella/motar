﻿jQuery(document).ready(function($) {
    var popup = $('.popup-contact');
    var overlay = $('.popup-overlay');

    // Ouvrir la modale lorsque le bouton est cliqué
    $('#menu-item-9').click(function() {
        popup.show();
        overlay.show();
    });

    // Fermer la modale lorsque le bouton de fermeture est cliqué
    $('.popup-close').click(function() {
        popup.hide();
        overlay.hide();
    });

    // Fermer la modale lorsque l'utilisateur clique en dehors de la modale
    $(document).mouseup(function(e) {
        if (e.target == overlay[0]) {
            popup.hide();
            overlay.hide();
        }
    });

    // Préremplir le champ "Réf. photo" dans la popup avec la référence de la photo actuelle
    $('#boutonContact').click(function() {
        var reference = $('#single-reference').text();
        $('#reference-photo').val(reference);
        $('#photo-modal').modal('show');
    });
});