var Common = {
	init: function() {
        Common.menu();
        Common.main();
	},
    menu: function() {
        
    },
	main: function() {
        $('.rev').owlCarousel({
            margin: 20,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
        
        var clock = $('.count_b').FlipClock(3600 * 24 * 3, {
            clockFace: 'DailyCounter',
            countdown: true,
            showSeconds: false
        });
        
    },
};

$(function() {
	Common.init();
});