// $(function(){

//   var search_list = $("#user-search-result");

//   function appendUser(user){
//     var html = 
//         `<div class = "chat-group-user clearfix">
//         <p class="chat-group-user__name">${user.name}</p>
//         <a class ="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${user.id} data-user-name=${nser.name}>追加</a>
//         </div>`
//     $("#user-search-result").append(html);
//   }     

//   function addNoUser(){
//     let html =
//     `<div class = "chat-group-user clearfix">
//       <p class="chat-group-user__name">ユーザーが見つかりません</p>
//     </div>`;
//     $("#user-search-result").append(html);
//   }




  // function appendMember(user,id){
  //   var html = 
  //         `<div class= 'chat-group-user' '${id}'>
  //         <input name='room[user_ids][]' type = 'hidden' value=${id}>
  //         <p class='chat-group-user__name'>${user}</p>
  //         <div class = 'user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
  //         </div>`
  //   $('.member__list').append(html)

  // }

  // function appendErrMsgToHTML(msg){
  //   var html = 
  //   `<div class = 'user-search'>`

  // }


//   $(function(){
//     $("#user-search-field").on("keyup",function(){
//       let input = $("#user-search-field").val();
//   console.log(input);

//     $.ajax({
//       url: '/users',
//       type: 'GET',
//       data: '{name: input}',
//       dataType: 'json',
//     })

//     .done(function(users){
//       $("#user-search-result").empty();
//       var html = "";
    
//       html = buildHTML(data);
//       $('.users').append(html);
//       $('form')[0].reset();
//       $('.chat-group-form__input').prop('disabled', false);
//     })
//     .fail(function(){
//       alert('ユーザー検索に失敗しました')
//       return false;
//     });
//   // });
// });



$(function() {
  var search_list = $("#user-search-result");
  function addUser(user,id) {
    var html = `
      <div class="chat-group-user clearfix">
        <input name='group[user_ids][]' type='hidden' value='${user}'>
        <p class="chat-group-user__name">${user.name}</p>
        <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">
        追加
        </a>
      </div>
    `;
    console.log("test")
    $("#user-search-result").append(html);
    // search_list.append(tHtml);
  }


  // function addMember() {
  //   // let html = `<input value="${UserId}" name="group[user_ids][]" type="hidden" id="group_user_ids_${UserId}" />`;
  //   // $(`#${UserId}`).append(html);
  // }
  
  



  
  function addDeleteUser(user,id){
    var html = 
      `<div class= 'chat-group-user' '${id}'>
          <input name='group[user_ids][]' type = 'hidden' value= '${user}'>
          <p class='chat-group-user__name'>'${user.name}'</p>
        <div class = 'user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除
        </div>
      </div>`
    $('.chat-group-form__label').append(html)
    console.log("output")
  }






  function addNoUser() {
    let html = `
      <div class="chat-group-user clearfix">
        <p class="chat-group-user__name">ユーザーが見つかりません</p>
      </div>
    `;
    $("#user-search-result").append(html);
  }
  $("#user-search-field").on("keyup", function() {
    let input = $("#user-search-field").val();
    $.ajax({
      type: "GET",
      url: "/users",
      data: { name: input },
      dataType: "json"
    })


    
      .done(function(users) {
        $("#user-search-result").empty();

        if (users.length !== 0 && input.length !== 0) {
          users.forEach(function(user) {
            addUser(user);
          });
        
        } else { appendErrMsgToHTML("一致するユーザはいません");
        }
      })
      .fail(function() {
        alert("通信エラーです。ユーザーが表示できません。");
      });
  
$("#user-search-result").on("click", ".chat-group-user__btn--add", function(){
  console.log("tsuika")
  
  const UserName = $(this).attr("data-user-name");
  const UserId = $(this).attr("data-user-id");
  $(this)
    .parent()
    .remove();

  addDeleteUser(UserId);
  addUser(UserId);
  // addMember(UserId);
  
});
$("#user-search-result").on("click",".chat-group-user__btn--remove", function(){
  $(this)
    .parent()
    .remove();
  });
});
});