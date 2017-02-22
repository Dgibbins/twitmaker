// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function(){
  // the form of class = new_tweet
  $('.new_tweet').submit(function() {
    event.preventDefault();
    console.log('prevented default');
    console.log($(this).attr('action'));
    // Calling the .serialize() on form to create a text string in standard URL-encoded notation.
    console.log($(this).serialize());

    $.ajax({
      url: $(this).attr('action'),
      method: $(this).attr('method'),
      data: $(this).serialize(), // css id.
      dataType: 'json'
    }).done(function(responseData){
      console.log("came back successfully");
      console.log(responseData);

      var deleteButton = $('<button />').addClass('deleteButton').text('Delete');

      $('.tweet').append(deleteButton);
      $("#tweets").prepend(responseData);
      window.location.reload(true);
    }).fail(function(){
      console.log("failed!");
      alert("I am a failed box alert");
    }).always(function(){
      console.log("Came Back (Period)");
    });
    // $('.deleteButton').on('click', function(event){
    //   $.ajax({
    //     type: "POST",
    //     url: "/tweets/" + tweet_id,
    //     dataType: "json",
    //     data: {"_method":"delete"},
    //     complete: function(){
    //       alert("Deleted Successfully!");
    //     }
    //   });
    //   event.preventDefault();
    // });
  });
});
