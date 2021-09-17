<script>
function makeNewTabLinks() {
  const links = [
    'mon', 
    'tue', 
    'wed', 
    'thu', 
    'fri', 
    'sat', 
    'sun'
  ];

  links.forEach( solo => { 
    document
    .getElementById( pre + solo )
    .setAttribute( "target", "_blank" );
  } );
};
</script>

<script>
const pre = 'block-hours-';
const pre = 'block-hours-previous-';
const pre = 'block-hours-next-';

document.addEventListener( 
  "DOMContentLoaded", 
  function() { 
    makeNewTabLinks( pre ) 
  }
);
</script>