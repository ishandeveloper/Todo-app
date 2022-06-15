$(document).ready(function(){

    $('form').on('submit', function(){
  
        var item = $('form input');
        var oldItem = $('form button');
        var todo = {item: item.val(), oldItem: oldItem.val()};
  
        $.ajax({
          type: 'POST',
          url: '/todo/edit',
          data: todo,
          success: function(data){
            //do something with the data via front-end framework
            location.href= '/todo';
          }
        });
  
        return false;
  
    });
});