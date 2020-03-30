console.log("Game show linked and working!")

$(document).ready (function () {

	let url = window.location.pathname;
	let gameId = url.substring(url.lastIndexOf('/') + 1);

$("#searchBtn").on("click", (e) => {
		e.preventDefault()
		console.log("Running ajax call...");
		//location.href = "/search/"
		$.ajax({
			method: "GET",

			url: `https://api.rawg.io/api/games?search=` + $("#searchBox").val(),

			data: "data",

			success: (response) => {
				$("main").empty();

				$("main").append(`<h3 id="searchResultsTitle"> Search Results: </h3>`);
				$("main").append(`<div class="resultsContainer"></div>`);

				for(let i=0; i < response.results.length; i++){
					$(".resultsContainer").append(`<a href="/games/${response.results[i].id}"><h5 id="searchResults">${response.results[i].name}</h5></a></br>`);
				}
			},

			error: (err) => {
				alert(err);
			},
		});
		// location.href = "/search/";
	});


	$.ajax({
		method: "GET",

		url: `https://api.rawg.io/api/games/${gameId}`,

		data: "data",

		success: (response) => {
			console.log(response);
			$(".game-cover-image").append(`<img src=${response.background_image}>`);
			$(".game-title-container").append(`<h1>${response.name}</h1>`);
			$(".game-title-container").append(`<button type="button" id="favBtn-gameShow" class="btn btn-primary btn-sm">Favorite</button>`);


      $(`#favBtn-gameShow`).on("click", (e) => {
        console.log("Fav button response: ", response.id);
        e.preventDefault();
        e.stopPropagation();
        $.ajax({
          method: "POST",

          url: `/api/v1/games`,

          contentType: "application/json; charset=utf-8",

          data: JSON.stringify({
                  name: `${response.name}`, 
                  rating: `${response.rating}`,
                  gameId: `${response.id}`,
                  coverImage: response.background_image,
                  platforms: ["PS4"],
                  price: "55.99",
                }),

          success: (response) => {
            showSuccessAlert()
          },

          error: (err) => {
            console.log("Error: ", err);
          },
        });
      });
			for(let i=0; i < response.stores.length; i++){

				if(response.stores[i].store.id == 3){
					$(".game-price-container").
					append(`<h5><a href="${response.stores[i].url}">${response.stores[i].store.name} </a><i class="fab fa-playstation"></i></h5>`);
				}else if(response.stores[i].store.id == 2){
					$(".game-price-container").
					append(`<h5><a href="${response.stores[i].url}">${response.stores[i].store.name} </a><i class="fab fa-windows"></i></h5>`);
				}else if(response.stores[i].store.id == 7){
					$(".game-price-container").
					append(`<h5><a href="${response.stores[i].url}">${response.stores[i].store.name} </a><i class="fab fa-xbox"></i></h5>`);
				}
				else if(response.stores[i].store.id == 1){
					$(".game-price-container").
					append(`<h5><a href="${response.stores[i].url}">${response.stores[i].store.name} </a><i class="fab fa-steam"></i></h5>`);
				}else{
					$(".game-price-container").
					append(`<h5><a href="${response.stores[i].url}">${response.stores[i].store.name} </a></h5>`);
				}
			
			}
				

			if(response.clip !== null){
					$(".game-clips-container-box").append(`<div class="embed-responsive embed-responsive-16by9">
  			<iframe class="embed-responsive-item" src="${response.clip.clip}" allowfullscreen></iframe>
				</div>`)
			}
			

			$(`.game-images-container`).append(`<img src=${response.background_image_additional}>`);

			$(`.game-info-container`).append(`<h5>Rating: ${response.rating} </h5>`);
			$(`.game-info-container`).append(`<h5>Released: ${response.released}</h5>`);

			for(let i=0; i < response.publishers.length; i++){
				$(`.game-info-container`).append(`<h5>Publishers: ${response.publishers[i].name}</h5>`);
			}

				$(`.game-description-container`).append(response.description);

			if(response.esrb_rating !== null){
					$(`.game-info-container`).append(`<h5>ESRB Rating: ${response.esrb_rating.name}</h5>`);
			}

		

			let gameGenresText = '';
			for(let i =0; i < response.genres.length; i++){
				gameGenresText += `${response.genres[i].name}` + ",";
				console.log(gameGenresText);
			}
			$(`.game-info-container`).append(`<h5 id=gameGenres>Genres: ${gameGenresText}</h5)`);
			//console.log(gameGenresText);
			$(`.game-info-container`).append(`<h5 id=gameWebsite> Website: <a href="${response.website}">${response.website}</a></h5)`);

		

		},

		error: (response) => {
			alert("Damn");
		},

	});
	$("#success-alert").hide();
  $("#danger-alert").hide();

  function showSuccessAlert() {
  $("#success-alert").fadeTo(2000, 500).slideUp(500, function() {
                  $("#success-alert").slideUp(500);
                });
  }

  function showDangerAlert() {
  $("#danger-alert").fadeTo(2000, 500).slideUp(500, function() {
                  $("#danger-alert").slideUp(500);
                });
  }
})