$('document').ready(function() {
	$('.slick-container').carousel({
		num: 3,
		maxWidth: 550,
		maxHeight: 350,
		distance: 190,
		autoPlay: true,
		showTime: 1800,
		animationTime: 800,
		scale: 0.7,	
	});

	$(function() {
	  	$("form[name='signIn']").validate({
	    	rules: {
	      		name: "required",
	     		email: {
	       			required: true,
	       			email: true
	       		}
	      	},
	   		messages: {
	      		name: "Please enter your first name",
	    		email: "Please enter a valid email address"
	   		},
	    	submitHandler: function(form) {
	     		form.submit();
	    	}
		});
	});
	$(".modal_content-img").change(function() {
	    var val = $(this).val();
	    switch(val.substring(val.lastIndexOf('.') + 1).toLowerCase()){
	        case 'gif': case 'jpg': case 'png':
	            alert("an image");
	            break;
	        default:
	            $(this).val('');
	            alert("not an image");
	            break;
	    }
	});
});



