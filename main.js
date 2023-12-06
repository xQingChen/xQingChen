function toggleGames() {

    // This variable is made to target the HTML element in my about.html
    var gamesList = document.getElementById("gamesList");

    // This simple conditionals is used to toggle the gamesList display on/off. 
    if (gamesList.style.display === "none") {
      gamesList.style.display = "block";
    } else {
      gamesList.style.display = "none";
    }
  }
