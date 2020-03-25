console.log('home view');

$(document).ready (function () {
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
            `<div class="game-card" id="game-card-${response.results[i].id}">
                          <img src="${response.results[i].background_image}">
                          <div class="game-card-title">${response.results[i].name}</div>
          	</div>`);
          }
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