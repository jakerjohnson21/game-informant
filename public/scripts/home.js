console.log('home view');

$(document).ready (function () {
		
		$("[data-toggle=popover]").popover();
		// $('#game-card-41494').popover(options)
		// data-content="This is the body of Popover"
  //  data-original-title="Creativity Tuts" rel="popover"

		 // <button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" 
		 // data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>

    $.ajax({
        method: "GET",
        url: "https://api.rawg.io/api/games?dates=2020-01-01,2020-10-10&ordering=-added",
        data: {
          page_size: 16
        },
        success: function (response) {
          console.log(response);
          for(let i=0; i < response.results.length; i++){
          	$(`.games-grid-container`).
          	append(
            `<div data-content="<button>Favorite</button>" data-original-title="${response.results[i].name}" rel="popover" class="game-card" id="game-card-${response.results[i].id}"  >
                          <img src="${response.results[i].background_image}">
                          <div class="game-card-title">${response.results[i].name}</div>
          	</div>`);
          }
          $('#game-card-41494').popover('show');

        },
        error: function (thrownError) {
          console.log(thrownError);
        }
      });

    //   $.ajax({
    //     method: "GET",
    //     url: "https://api.rawg.io/api/games/3498/twitch",
    //     data: {
    //       page_size: 10
    //     },
    //     success: function (response) {
    //       console.log(response);
    //     },
    //     error: function (thrownError) {
    //       console.log(thrownError);
    //     }
    //   });

});