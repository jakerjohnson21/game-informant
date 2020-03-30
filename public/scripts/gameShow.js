console.log("Game show linked and working!")

$(document).ready (function () {

	let url = window.location.pathname;
	let gameId = url.substring(url.lastIndexOf('/') + 1);
	console.log(gameId);
	$.ajax({
		method: "GET",

		url: `https://api.rawg.io/api/games/${gameId}`,

		data: "data",

		success: (response) => {
			console.log(response);
			$(".game-cover-image").append(`<img src=${response.background_image}>`);
			$(".game-title-container").append(`<h1>${response.name}</h1>`);

			for(let i=0; i < response.stores.length; i++){
				$(".game-price-container").
				append(`<h5><a href="${response.stores[i].url}">${response.stores[i].store.name}</a></h5>`);
			}

			$(".game-clips-container-box").append(`<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="${response.clip.clip}" allowfullscreen></iframe>
</div>`)

			$(`.game-images-container`).append(`<img src=${response.background_image_additional}>`);

			$(`.game-info-container`).append(`<h5>Rating: ${response.rating}</h5>`);
			$(`.game-info-container`).append(`<h5>Released: ${response.released}</h5>`);

			for(let i=0; i < response.publishers.length; i++){
				$(`.game-info-container`).append(`<h5>Publishers: ${response.publishers[i].name}</h5>`);
			}

			$(`.game-info-container`).append(`<h5>ESRB Rating: ${response.esrb_rating.name}</h5>`);
	

			let gameGenresText = '';
			for(let i =0; i < response.genres.length; i++){
				gameGenresText += `${response.genres[i].name}` + ",";
				console.log(gameGenresText);
			}
			$(`.game-info-container`).append(`<h5 id=gameGenres>Genres: ${gameGenresText}</h5)`);
			//console.log(gameGenresText);
			$(`.game-info-container`).append(`<h5 id=gameWebsite> Website: <a href="${response.website}">${response.website}</a></h5)`);

			$(`.game-description-container`).append(response.description);

		},

		error: (response) => {
			alert("Damn");
		},

	});
})