$(document).ready(function() {
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
	  slidesToShow: 1,
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
	var modal = {
		init: function() {

			// Setup the template
			this.source = $("#modal-template").html();

			// Setup outercontainer
			this.outercontainer = $('#content');

			// Get the stuff
			this.clickToOpenModal();

			// Close the stuff
			this.closeModal();

		},
		clickToOpenModal: function(context, thisLink) {

			$('img[data-behaviour="modal"]').on('click', function(e) {
				var thisLink = $(this);

				var context = {
					title: thisLink.data('title'),
					content: thisLink.data('content')
				};

				e.preventDefault();

			 // Do nothing if open
			 if ( modal.outercontainer.children('div#modal').length ) return;

				 // Attach the content to the the modal
				modal.attachTemplate(context, thisLink);

				// Trigger the open event
				thisLink.trigger('open');
			});

		},
		attachTemplate: function(context, thisLink) {
			 var source = Handlebars.compile(this.source);

				this.outercontainer
					.append(source(context))
					.promise()
					.done(function() {

					this
						.children('div#modal')
						.addClass('modal-visible');

					 // Close the stuff
					 thisLink.one('open', function() {
						 modal.closeModal();
					 });

			 });
		},
		closeModal: function() {
			var container = $("div#modal");

			// Remove modal on click background
			container.on('click', function() {
				container.remove();

			});
			// Remove modal on keypress ESC
			$(document).on( 'keydown', function (e) {
					if ( e.keyCode === 27 ) {
						 container.remove();
					}
			});
			// You can click on modal body
			container.find('div.modal-body').on('click', function(e) {
				e.stopPropagation();
			});
		}
	};

	modal.init();

})
