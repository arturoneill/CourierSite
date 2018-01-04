$('#MAPModal').on('shown.bs.modal', (function() {
  var mapIsAdded = false;

  return function() {
    if (!mapIsAdded) {
      $('.modal-map').html(' <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1ednoEYxCJRQLIUdhxqD0z2Obl5V8qAMp" width="100%" height="300"></iframe>');

      
      mapIsAdded = true;
      
      
      
    }    
  };
})());
