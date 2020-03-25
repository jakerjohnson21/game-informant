console.log('home view');

$(document).ready (function () {
    console.log('home view');
    console.log($.ajax);


    $.ajax({
        method: "GET",
        url: "https://api.rawg.io/api/games",
        data: {
          page_size: 10
        },
        success: function (response) {
          console.log(response);
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