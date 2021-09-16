function getId( theId ) {
  document.getElementById( '#block-' + theId );
};
const redir = window.location.replace;

document.addEventListener( "DOMContentLoaded",  );

if ( document.getElementById( "#block-8374a051c3044fe99e1a8a2c72a4e82a" ) ) {
  window.location.replace( '/newpage' );
};

function redirectingHours() {
  switch ( true ) {
    case getId( idObj.monday ):
      redir( mainObj.monday );
      break;
    case getId( idObj.tuesday ):
      redir( mainObj.tuesday );
      break;
    case getId( idObj.wednesday ):
      redir( mainObj.wednesday );
      break;
    case getId( idObj.thursday ):
      redir( mainObj.thursday );
      break;
    case getId( idObj.friday ):
      redir( mainObj.friday );
      break;
    case getId( idObj.monday ):
      redir( mainObj.monday );
      break;
    case getId( idObj.monday ):
      redir( mainObj.monday );
      break;
    default:
      break;      
  }
};

const CURR_WEEK_IDS = {
  monday: '00f62423-ad0245d7b2e5b2618d72f083', 
  tuesday: '49a78c2ced13476b9608c8601545d83a',
  wednesday: '1f32a3d68df94d2e99a5fe2974e8e9b0',
  thursday: 'eab8d60dbfea41f1abf619ee30f26b8a',
  friday: '21de7a5cf26144a5a95b51d5a331373e',
  saturday: 'e4422bc78e5f4ede932d325f185b04e2', 
  sunday: 'c80d978446be4336a493191542191f65'
};

const NEXT_WEEK_IDS = {
  monday: '', 
  tuesday: '',
  wednesday: '',
  thursday: '',
  friday: '',
  saturday: '', 
  sunday: ''
};

const PREV_WEEK_IDS = {
  monday: '', 
  tuesday: '',
  wednesday: '',
  thursday: '',
  friday: '',
  saturday: '', 
  sunday: ''
};