const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const imageThree = document.querySelector( ".image-3" );
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");
const btnRe = document.querySelector(".btn-re");
const clkbtn =  document.querySelector(".clk");
const Swal = window.Swal;






// Function to display the first message
function showMessage1() {
    btnYes.classList.add('hide');
    btnNo.classList.add("hide");
    imageOne.classList.add("hide");
    imageTwo.classList.remove("hide");
}

// Function to display the second message after 15 seconds
function showMessage2() {
  setTimeout(function() {
    Swal.fire({
      title: "Yea!!🥳 that's my Baby!!🌺",
      text: "I will come and  pick you up in 10 minutes,Make sure to be ready on time my love🥺💖",
      icon: "success",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ok Darling!!!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Thank YOU !❤️",
          text: "See You Soon My   Love!😘" ,
          icon: "success"
        });
      }
    });;
  }, 2000); // 15 seconds = 15,000 milliseconds
}

// Attaching both functions to the click event of the button
btnYes.addEventListener("click", function() {
  showMessage1(); // Display the first message
  showMessage2(); // Display the second message after 15 seconds
});




btnNo.addEventListener("click", (e) => {
  btnNo.classList.remove("hide");
  btnYes.classList.add("hide");
  imageOne.classList.add("hide");
  imageThree.classList.remove("hide");
  btnRe.style.visibility = 'visible';
});

btnRe.addEventListener('click', (e)=>{ 
  btnNo.classList.remove("hide");
  btnYes.classList.remove("hide");
  imageOne.classList.remove("hide");
  btnRe.style.visibility='hidden' ; 
  window.location.reload(true);
});




