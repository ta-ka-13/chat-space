$(function() {
  $(document).on("click", ".delete_id", function (e) {
    e.preventDefault();
    var deleteMessage = confirm('削除してよろしいでしょうか？');
    if(deleteMessage == true) {
      var message_element = $(this).parents('.content');
      var message_id = message_element.attr("data-message-id");
      var url = location.href + "/" + message_id;
    $.ajax({
      url: url,
      type: "POST",
      data: {'id': message_id,
      '_method': 'DELETE'} ,
      dataType: 'json'
    })
    .done(function(data) {
      message_element.remove();
    })

    .fail(function() {
      alert('message destroy error');
    })
  }
  });
}); 