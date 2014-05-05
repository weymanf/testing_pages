$( document ).ready(function() {

	$("figure").on("click", function(event) {

  	//appends to new div onclick
  	if ($(event.currentTarget).parent().attr("class")) {
  		$("#columns").append(event.currentTarget) 
  	}
  	else {
  		$(".adds").append(event.currentTarget, "  ") 
  	}

  });


  $(".reset").on("click", function() {

  	window.location.reload(); //probably not what your going for
  });

});

