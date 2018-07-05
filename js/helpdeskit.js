$(document).ready(function(){
   setTimeout(function(){
       $(".organisationcard").removeClass('invisible').addClass('animated fadeInLeft');
    }, 400);
   setTimeout(function(){
       $(".meldingenlist").removeClass('invisible').addClass('animated fadeInRight');
    }, 800);    
    
    $( ".modal-call" ).click(function() {
        var meldingid = $(this).attr('data-id');
        var setlog='';
        
        if(meldingid in meldinglog){
            setlog += '<ul class="list-group">';
            $.each( meldinglog[meldingid], function( key, data ) {
                setlog += '<li class="list-group-item d-flex justify-content-between align-items-center">'+data["omschrijving"]+'<span class="badge badge-light badge-pill"><i class="icon ion-ios-calendar pr-3"></i>'+data['datum']+'</span></li>';
            });
            setlog += '</ul>';
            $('.modal-trigger .modal-content .modal-body').html(setlog);
        };
        
        $('.modal-trigger').modal('show');
    });

    
});
var options = {
  valueNames: [ 'meta', 'titel', 'operator-naam' ]
};
var userList = new List('meldingen', options);

$( ".search" ).keyup(function() {
    console.log('ping');
  if( $(this).val() ) {
    $(".jumbotron").css('display','none');
  }else{
    $(".jumbotron").css('display','block');
  }
});
