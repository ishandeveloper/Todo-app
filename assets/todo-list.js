$(document).ready(function(){

    $('form').on('submit', function(){
  
        var item = $('form input');
        var todo = {item: item.val()};
  
        $.ajax({
          type: 'POST',
          url: '/todo',
          data: todo,
          success: function(data){
            //do something with the data via front-end framework
            location.reload(false);
            
          }
        });
  
        return false;
  
    });
  
    $('li').on('click', function(){
        // var item = $(this).text().replace(/ /g, "-");
        var item = $(this).text().trim().replace(/ /g, "-");
        // var item = e.target.textContent.replace(/ /g, "-");  
        $.ajax({
          type: 'DELETE',
          url: '/todo/' + item,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
          }
        });
    });
  
  });