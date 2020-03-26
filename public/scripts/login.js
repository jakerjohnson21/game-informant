
console.log("login.js Linked and working!");

$(document).ready (function () {

      $(`#createBtn`).on("click", (e)=> {
        e.preventDefault();
        $('#modalRegisterForm').modal('show');
      });
      
});