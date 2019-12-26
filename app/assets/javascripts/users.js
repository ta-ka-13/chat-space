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



// $(function() {
//   var search_list = $("#user-search-result");
  
//   function addUser(id) {
//     // console.log(name);
//     console.log(id);
//     var html = `
//       <div class="chat-group-user clearfix" id=chat-group-user${id}>
//         <input name='group[user_ids][]' type='hidden' value='${id}'>
//         <p class="chat-group-user__name">${id.name}</p>
//         <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${id}" data-user-name="${id.name}">
//         追加
//         </a>
//       </div>
//     `;
    
//     $("#user-search-result").append(html);
//     // $("#chat-group-form__label").append(html);
//     // search_list.append(tHtml);
//   }


  // function addMember() {
  //   let html = `<input value="${UserId}" name="group[user_ids][]" type="hidden" id="group_user_ids_${UserId}" />`;
  //   $(`#${UserId}`).append(html);
  // }
  
  



  
//   function addDeleteUser(name,id){
//     // console.log(name);
//     console.log(id);
//     let html =
//       `<div class= 'chat-group-user clearfix' id="${id}">
          
//           <p class='chat-group-user__name'>'${name}'</p>
//         <div class = 'user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'data-user-id="${id}" data-user-name="${name}">削除
//         </div>
//       </div>`;
//     $('.js-add-user').append(html);
//     console.log("output")
//   }






//   function addNoUser() {
//     let html = `
//       <div class="chat-group-user clearfix">
//         <p class="chat-group-user__name">ユーザーが見つかりません</p>
//       </div>
//     `;
//     $("#user-search-result").append(html);
//   }
//   $("#user-search-field").on("keyup", function() {
//     let input = $("#user-search-field").val();
//     $.ajax({
//       type: "GET",
//       url: "/users",
//       data: { name: input },
//       dataType: "json"
//     })


    
//       .done(function(users) {
//         $("#user-search-result").empty();

//         if (users.length !== 0) {
//           users.forEach(function(user) {
//             addUser(user);
//           });
//         }
//         else {
//           addNoUser("一致するユーザーはいません");
//         }
//       })
//       .fail(function() {
//         alert("通信エラーです。ユーザーが表示できません。");
//       })
//   // } else {
//   //   $("#user-search-result").empty();
//   });




// $("#user-search-result").on("click", ".chat-group-user__btn--add", function(){
//   console.log("tsuika")
  
//   const UserName = $(this).attr("data-user-name");
//   const UserId = $(this).attr("data-user-id");
//   $(this)
//     .parent()
//     .remove();

//   addDeleteUser(UserName,UserId)
//   addUser(UserId)
//   // addMember(UserId);
  
// });
// $("#user-search-result").on("click",".chat-group-user__btn--remove", function(){
//   $(this)
//     .parent()
//     .remove();
//   });
// });
// // });

$(function() {
  function addUser(user) {
    let html = `
      <div class="chat-group-user clearfix">
        <p class="chat-group-user__name">${user.name}</p>
        <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
      </div>
    `;
    $("#user-search-result").append(html);
  }

  function addNoUser() {
    let html = `
      <div class="chat-group-user clearfix">
        <p class="chat-group-user__name">ユーザーが見つかりません</p>
      </div>
    `;
    $("#user-search-result").append(html);
  }
  function addDeleteUser(name, id) {
    let html = `
    <div class="chat-group-user clearfix" id="${id}">
      <p class="chat-group-user__name">${name}</p>
      <div class="user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn" data-user-id="${id}" data-user-name="${name}">削除</div>
    </div>`;
    $(".js-add-user").append(html);
  }
  function addMember(userId) {
    let html = `<input value="${userId}" name="group[user_ids][]" type="hidden" id="group_user_ids_${userId}" />`;
    $(`#${userId}`).append(html);
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

        if (users.length !== 0) {
          users.forEach(function(user) {
            addUser(user);
          });
        } else if (input.length == 0) {
          return false;
        } else {
          addNoUser();
        }
      })
      .fail(function() {
        alert("通信エラーです。ユーザーが表示できません。");
      });
  });
  $("#user-search-result").on("click", ".chat-group-user__btn--add", function() {
    console.log
    const userName = $(this).attr("data-user-name");
    const userId = $(this).attr("data-user-id");
    $(this)
      .parent()
      .remove();
    addDeleteUser(userName, userId);
    addMember(userId);
  });

  $("#chat-group-users").on("click", ".chat-group-user__btn--remove", function() {
    console.log("test")
    $(this)
      .parent()
      .remove();
  });
});