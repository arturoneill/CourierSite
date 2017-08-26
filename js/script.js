$('#MAPModal').on('shown.bs.modal', (function() {
  var mapIsAdded = false;

  return function() {
    if (!mapIsAdded) {
      $('.modal-map').html(' <iframe src="https://www.google.com/maps/d/u/2/embed?mid=1Wq0NlZPrbS9IPNJBBQOWypKh50E" width="100%" height="300"></iframe>');

      mapIsAdded = true;
      
      
    }    
  };
})());
