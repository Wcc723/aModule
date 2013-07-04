require([
  'lib/jquery-1.9.1.min',
  'aTypeFilter',
  'aCart'
], function () {
  console.log($);
});


define(function (cart) {
  return {
    initialize: function () {
     $('.cart').pg_cart({
	    	SmoothSliding: true, //Window Event
            TopController: '.scrolltop',
            scrollBtn:'._scrollBtn',
            AnchorPoint:'.cart'
	    });
    }
  }
});