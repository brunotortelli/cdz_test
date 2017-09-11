(function(win, doc){
    'use strict';

    var $pills = doc.querySelectorAll( '.figurinha' );

    console.log($pills[0]);

    
    $pills.forEach(function(item, index, arr){
      $pills[index].addEventListener( 'click', function(event) {
        console.log('clicou')
        var card = $pills[index];

        var classes = card.className;
        if(classes == "figurinha naotenho"){
          card.className = "figurinha tenho"
        }  else if (classes == "figurinha tenho"){
          card.className = "figurinha repetida";
        }  else{
          card.className = "figurinha naotenho";
        }

      }, false)
    })


  
  })(window, document)