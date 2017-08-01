$('#MAPModal').on('shown.bs.modal', (function() {
  var mapIsAdded = false;

  return function() {
    if (!mapIsAdded) {
      $('.modal-map').html(' <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1coab886q4ow2cuO3ikcraTCJuT0" width="100%" height="400"></iframe>');

      mapIsAdded = true;
    }    
  };
})());
