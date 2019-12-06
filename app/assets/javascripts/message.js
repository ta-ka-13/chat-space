$(function(){
  // console.log("aa")
  $('.new_message').on('submit',function(e){
    e.preventDefault()
// console.log("test");
    var formData = new FormData(this);
// console.log(formData)
    var url = $(this).attr('action')
console.log(url); 


    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.message').apend(html);
      $('lower-message__content').val('');
    })
    .fail(function(){
      alert('error')
    });
  });
});