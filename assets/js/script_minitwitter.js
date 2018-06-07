
$(document).ready(function(){
	$("#myform").on("submit", function(event){
		var texto = $("#mi-tweet").val();
		event.preventDefault();
		$("#tweet-card").append(
			`<div class="row card">
				<div class="cerrar">
					<button><i class="fas fa-times-circle"></i></button>
				</div>
	
        		<div class="autor-tweet">
         			<h4 class="nombre-autor-tweet"><strong>Natalie Aguayo </strong><small> @nata_aguayo</small></h4>
       			</div>
       			<p>${texto}</p>
				<button class="likeable" href="#">
          			<i class="fas fa-heart"></i>
        		</button><div class="likes-numero">0</div>		
			</div>`)

		$("#mi-tweet").val("");
		$("#mi-tweet").focusout();	
	});

	$("#tweet-card").on("click", ".cerrar", function(event){
		event.stopPropagation();
		$(this).parent().fadeOut();
	});


	$("#tweet-card").on("click", ".likeable", function(event){
		event.preventDefault();
		event.stopPropagation();
		$(this).toggleClass("likeable-red");
	
		var numero = $(this).parent().find(".likes-numero")
		var likes = parseInt(numero.text())

	    if ($(this).hasClass("likeable-red")) {
	      likes++
	    } else {
	      likes--
	    }

	    numero.text(likes)

	});

});
