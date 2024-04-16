function myFunction() {
  //function to search for a course in the cards
  var input, filter, card, i, txtValue;
  input = document.getElementById("myFilter");
  filter = input.value.toUpperCase();
  card = document.getElementsByClassName("card");

  for (i = 0; i < card.length; i++) {
    txtValue = card[i].getElementsByClassName("card-title")[0].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      card[i].style.display = "";
    } else {
      card[i].style.display = "none";
    }
  }
}
