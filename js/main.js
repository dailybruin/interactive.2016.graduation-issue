$(document).ready(function() {

	//some deeplinking
	/*
	if(window.location.hash){
		var target = window.location.hash;
		console.log(target);
		$("html, body").scrollTop($(target).offset());
		$(".modal").modal("show");
		$(target).modal("show");
	}*/

	// bind filter button click
	$('#filters').on( 'click', 'button', function() {
	  var filterValue = $( this ).attr('data-filter');
	  $('.og-grid-item').css('display', 'none');
	  $('.og-grid-item').filter(function() {
	  	return $(this).children('a').eq(0).attr("class") == filterValue || filterValue == "all";
	  }).css('display', 'inline-block');
	});

	// change is-checked class on buttons
	$('.button-group').each( function( i, buttonGroup ) {
	  var $buttonGroup = $( buttonGroup );
	  $buttonGroup.on( 'click', 'button', function() {
	    $buttonGroup.find('.is-checked').removeClass('is-checked');
	    $( this ).addClass('is-checked');
	  });
	});

	/* this is for smooth scrolling for the navbar*/
	$(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top - 15
					}, 1000);
					return false;
				}
			}
		});
	});

	/*for updating date*/
	function updateClock() {
		var now = new Date(),
		weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		date = [
		weekday[now.getDay()] + ', ',
		months[now.getMonth()],
		now.getDate() + ', ',
		now.getFullYear()].join(' ');
		document.getElementById('time').innerHTML = [date];
		setTimeout(updateClock, 1000);
	}
	updateClock();

	/*slick*/
	$('.center').slick({
	  centerMode: true,
	  centerPadding: '60px',
	  slidesToShow: 3, //should we do like one item at a time? bc imgs r hella small
	  dots: true,
	  //uncomment later
	  //autoplay: true,
	  //autoplaySpeed: 2000,
	  responsive: [
	  {
	    breakpoint: 768,
	    settings: {
	      arrows: false,
	      centerMode: true,
	      centerPadding: '40px',
	      slidesToShow: 3
	    }
	  },
	  {
	    breakpoint: 480,
	    settings: {
	      arrows: false,
	      centerMode: true,
	      centerPadding: '40px',
	      slidesToShow: 1
	    }
	  }
	  ]
	});

	/*isotope*/
	$(".og-grid-item").on('mouseover', function() {
		this.style.cursor = "pointer";
		$('.og-grid-item-overlay').css('opacity', 1);
	})
	$(".og-grid-item").on('mouseout', function() {
		this.style.cursor = "pointer";
		$('.og-grid-item-overlay').css('opacity', 0);
	})

	/* for the -30- column, using handlebars */
	data = [
		{
			"firstName": "paulina",
			"name": "paulina lei",
			"content": "PLEASE WORK",
			 "img": "pauli"
		},
		{
			"firstName": "chang",
			"name": "chang liu",
			"content": "PLEASE WORK",
			 "img": "changi"
		},
		{
			"firstName": "howard",
			"name": "howard huang",
			"content": "PLEASE WORK",
			 "img": "howie"
		}
 	];

	// Grab the template script
	var theTemplateScript = $("#modal-template").html();

	// Compile the template
	var theTemplate = Handlebars.compile(theTemplateScript);

	var mydata = data;

	// Pass our data to the template
	var theCompiledHtml = theTemplate(mydata);

	// Add the compiled html to the page
	$('.modal-placeholder').html(theCompiledHtml);

	//opening the modal
	$(".modal-link").click(function(event){
			event.preventDefault();
			var target = $(this).attr("data-target");
			var href = $(this).attr("href");
			window.location.href = href;
			$(target).modal("");
	});

})
