console.log('home view');
// const mongoose = require('mongoose');
// const db = require(`./models`);

$(document).ready (function () {
    
    // $("[data-toggle=popover]").popover();
    // $('#game-card-41494').popover(options)
    // data-content="This is the body of Popover"
  //  data-original-title="Creativity Tuts" rel="popover"

  // $('[data-toggle="popover"]').each(function () {
  //       if (!$(this).is(e.target) && 
  //            $(this).has(e.target).length === 0 && 
  //            $('.popover').has(e.target).length === 0) {
  //           $(this).popover('hide');
  //       }
  //   });

    // <button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" 
    // data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
    // <button type="submit" class="btn btn-primary">Submit</button>
    // <button type="submit">Submit</button>
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
                  //console.log(response);
                  //console.log(`Modal:  #modal-body-${response.id}`)
                  $(`.modal-body-${response.id}`).append(response.description);
                  // alert("YAY");
                },

                error: (err) => {
                  alert("Damn");
                },
              });


              // $(`#game-card-${response.results[i].id}`).popover({
              //    html : true,
              //     trigger: 'focus',
              //     placement: 'right',
              //     title: `${response.results[i].name}`,
              //     content: `<strong><a href="">Favorite</a></strong><br><strong><a href="/api/v1/games/${response.results[i].id}">View More</a></strong><button>Hello</button>`
              // });
              $(`#modal-${response.results[i].id}`).modal("show");
         //     $(`#game-card-${response.results[i].id}`).popover(`show`);

              // $(`#game-card-${response.results[i].id}`).popover(`hide`);
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
                        screenShots: ["abc.jpg"],
                        videoClips: ["cde.mp4"],
                        coverImage: "mycover.jpg",
                        platforms: ["PS4"],
                        price: "55.99",
                      }),

                success: (response) => {
                  alert("Yay");
                  console.log(`Fav ${response}`);
                  //console.log(`Modal:  #modal-body-${response.id}`)
                  // $(`.modal-body-${response.id}`).append(response.description);
                  alert("YAY");
                },

                error: (err) => {
                  alert("Damn");
                },
              });

              // db.Game.find({}, (err,allGames) => {
              //     if(err){
              //       console.log(`Error displaying games: `, err);
              //       process.exit();
              //     }

              //     console.log(`Database: `, allGames);
              //     process.exit();
              //   })
              

            });



          }


         
      //     $('#popover').popover({
          //   placement: 'bottom',
          //   content: image,
          //   html: true
          // });

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