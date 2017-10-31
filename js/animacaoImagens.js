$(document).ready(function(){
	$('.thumbnails').owlCarousel({
		loop: true,
		autoplay:true,
		items:1,
		center:true,
		margin:10
	});

	var owl = $('.owl-carousel');
	owl.owlCarousel();

	$('#seta-esquerda').click(function() {
	    // With optional speed parameter
	    // Parameters has to be in square bracket '[]'
	    owl.trigger('prev.owl.carousel', [300]);
	});

	$('#botao-celular-esquerda').click(function() {
	    // With optional speed parameter
	    // Parameters has to be in square bracket '[]'
	    owl.trigger('prev.owl.carousel', [300]);
	});


	$('#seta-direita').click(function() {
	    // With optional speed parameter
	    // Parameters has to be in square bracket '[]'
	    owl.trigger('next.owl.carousel', [300]);
	});

	$('#botao-celular-direita').click(function() {
	    // With optional speed parameter
	    // Parameters has to be in square bracket '[]'
	    owl.trigger('next.owl.carousel', [300]);
	});
});	