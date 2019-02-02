function vote() {
    document.getElementById("voteBtn").disabled = true;
    $('button').on('click', function() { // when you click the div
        $(this).addClass('no-hover'); // add the class 'no-hover'
      });
      
}