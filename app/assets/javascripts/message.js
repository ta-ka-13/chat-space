$(function(){
  // console.log("aa")
  $('.new_message').on('submit',function(e){
    e.preventDefault()
// console.log("test");
//  e.preventDefault();
    var formData = new FormData(this);
// console.log(formData)
    var message = textField.val();
  


    $.ajax({
      type: post,
      url:'/messages.json',
      data:{
        message:{
          content: message
        }
      },
      dataType: 'json'
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.message').apend(html);
      // textField.('');
    })
    .fail(function(){
      alert('error')
    });
  });
});
    
    
   