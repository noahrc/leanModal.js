(function($){
 
    $.fn.extend({ 
         
        leanModal: function(options) {
            
            function closeModal(modalId){

                $('#lean_overlay').fadeOut(200);

                $(modalId).css({ 'display' : 'none' });
            
            }

            var defaults = {
                top: null,
                overlay: 0.5,
                closeButton: null
            };
            
            if(!$('#lean_overlay')[0]){
                var overlay = $('<div id="lean_overlay"></div>');
                $('body').append(overlay);
            }
                 
            options =  $.extend(defaults, options);
 
            return this.each(function() {
            
                var o = options;
               
                $(this).click(function(e) {
              
                    var modalId = $(this).attr('href');

                    $('#lean_overlay').click(function() {
                        closeModal(modalId);
                    });

                    $(o.closeButton).click(function() {
                        closeModal(modalId);
                    });

                    var modalHeight= $(modalId).outerHeight();
                    var modalWidth = $(modalId).outerWidth();

                    $('#lean_overlay').css({ 'display' : 'block', opacity : 0 });

                    $('#lean_overlay').fadeTo(200, o.overlay);

                    $(modalId).css({

                        'display' : 'block',
                        'position' : 'fixed',
                        'opacity' : 0,
                        'z-index': 11000,
                        'left' : 50 + '%',
                        'margin-left' : -(modalWidth/2) + 'px',
                        'top' : o.top ? o.top + 'px' : '50%',
                        'margin-top'  : o.top ? 0 : -(modalHeight/2) + 'px'

                    });

                    $(modalId).fadeTo(200,1);

                    e.preventDefault();

                });
             
            });

            
    
        }
    });
     
})(jQuery);