console.log('home view');

$(document).ready (function () {
		
		// $("[data-toggle=popover]").popover();
		// $('#game-card-41494').popover(options)
		// data-content="This is the body of Popover"
  //  data-original-title="Creativity Tuts" rel="popover"

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
          console.log(response);
          for(let i=0; i < response.results.length; i++){
          	$(`.games-grid-container`).
          	append(
            `<div class="game-card" id="game-card-${response.results[i].id}"  >
                          <img src="${response.results[i].background_image}">
                          <div class="game-card-title">${response.results[i].name}</div>
          	</div>`);
          	$(`#game-card-${response.results[i].id}`).append(
          		`<div class="modal fade" id="modal-${response.results[i].id}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  							aria-hidden="true">
							  <div class="modal-dialog modal-sm" role="document">


							    <div class="modal-content">
							      <div class="modal-header">
							        <h4 class="modal-title w-100"  id="myModalLabel">${response.results[i].name}</h4>
							        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
							          <span aria-hidden="true">&times;</span>
							        </button>
							      </div>
							      <div class="modal-body">
							        Rating: ${response.results[i].rating} <br>
							        Released:  ${response.results[i].released}
							      </div>
							      <div class="modal-footer">
							        <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
							        <button type="button" class="btn btn-primary btn-sm">Save changes</button>
							      </div>
							    </div>
							  </div>
							</div>`
						);

						 $(`#game-card-${response.results[i].id}`).on("click", () => {

					    // $('#game-card-41494').popover({
					    // 	 	html : true,
					    //     trigger: 'manual',
					    //     placement: 'right',
					    //     container: 'body',
					    //     title: `ALERT`,
					    //     content: `Damn`
					    // });
    					$(`#modal-${response.results[i].id}`).modal("show");
          	// $('#game-card-41494').popover(`show`);
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