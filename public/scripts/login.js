
console.log("login.js Linked and working!");

$(document).ready (function () {

      $(`#createBtn`).on("click", (e)=> {
        e.preventDefault();
        $('#modalRegisterForm').modal('show');
      });

      $(`#signUpBtn`).on("click", (e) =>{
      	e.preventDefault();
      	let email = $(`#orangeForm-email`).val();
      	let password = $(`#orangeForm-pass`).val();

      $.ajax({
			url: "/api/v1/users",

			method: "POST",

			data: {
							email: email,
							password: password
						},

			success: (response) => {
				console.log("Success");
			},

			error: (err) => {
				console.log(err);
			}

      });
   }); 
});