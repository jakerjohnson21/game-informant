console.log('home view');
// const mongoose = require('mongoose');
// const db = require(`./models`);

$(document).ready (function () {
    
    $.ajax({
        method: "GET",
        url: "https://api.rawg.io/api/games?dates=2020-01-01,2020-10-10&ordering=-added",
        data: {
          page_size: 16
        },
        success: function (response) {
          //console.log(response);
          for(let i=0; i < response.results.length; i++){
            $(`.games-grid-container`).
            append(
            `<div class="game-card" id="game-card-${response.results[i].id}"  >
                          <img src="${response.results[i].background_image}">
                          <div class="game-card-title">${response.results[i].name}</div>
            </div>`);

            //Adds modal to each card element
            $(`#game-card-${response.results[i].id}`).append(
              `<div class="modal fade" id="modal-${response.results[i].id}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-md" role="document">


                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title w-100"  id="myModalLabel">${response.results[i].name}</h4>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body-${response.results[i].id}">
                
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
                      <button type="button" id="favBtn-${response.results[i].id}" class="btn btn-primary btn-sm">Favorite</button>
                    </div>
                  </div>
                </div>
              </div>`
            );

             $(`#game-card-${response.results[i].id}`).on("click", (e) => {

              $.ajax({
                method: "GET",

                url: `https://api.rawg.io/api/games/${response.results[i].id}`,

                data: "data",

                success: (response) => {
                  console.log(response);
                  $(`.modal-body-${response.id}`).append(response.description);
                },

                error: (err) => {
                  alert("Damn");
                },
              });
              $(`#modal-${response.results[i].id}`).modal("show");
          });

            $(`#favBtn-${response.results[i].id}`).on("click", (e) => {
              e.preventDefault();
              e.stopPropagation();
              $.ajax({
                method: "POST",

                url: `/api/v1/games`,

                contentType: "application/json; charset=utf-8",

                data: JSON.stringify({
                        name: `${response.results[i].name}`, 
                        rating: `${response.results[i].rating}`,
                        videoClips: ["cde.mp4"],
                        coverImage: response.results[i].background_image,
                        platforms: ["PS4"],
                        price: "55.99",
                      }),

                success: (response) => {

                },

                error: (err) => {
                  alert("Damn");
                },
              });
            });
          }
        },
        error: function (thrownError) {
          console.log(thrownError);
        }
      });

      $.ajax({
        method: "GET",
        url: "/api/v1/games",
        success: function (res) {
          console.log('api success');
          console.log(res);
          res.forEach((favoriteGame) => {
            console.log(favoriteGame);
            $('.favorites-grid-container').append(`
              <div class='favorites-card' id='${favoriteGame._id}'>
                <img src="${favoriteGame.coverImage}" alt="Pic">
                <div class='favorites-card-title'>${favoriteGame.name}</div>
                <div class='favorites-card-delete-button'>&#x2715;</div>
              </div>
            `);
          });
        },
        error: function (err) {
          console.log(err);
        }
      });

      let favoritesContainer = document.querySelector('.favorites-grid-container');
      favoritesContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('favorites-card-delete-button')) {
          console.log('boop');
          console.log(event.target.parentNode.id);
        }
      });
    


});