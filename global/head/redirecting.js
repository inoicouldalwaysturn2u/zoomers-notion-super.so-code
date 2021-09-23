<script>
const minithonLink = 'https://hours.zone/invite/PlwhJ-hAT';

function weeks() {
const previousWeek = {
  mon: 
    'https://hours.zone/invite/J1vnLc206',
  tue: 
    'https://hours.zone/invite/6QKPj5tVF',
  wed: 
    'https://hours.zone/invite/g6YNRVEuE',
  thu: 
    'https://hours.zone/invite/igKyKt7R-',
  fri: 
    'https://hours.zone/invite/OfjT_pykG',
  sat: 
    'https://hours.zone/invite/7hq7YrCi5',
  sun: 
    'https://hours.zone/invite/52IIgDABZ'
};

const currentWeek = {
  mon: 
    'https://hours.zone/invite/oG8HbVsOs',
  tue: 
    'https://hours.zone/invite/RoCzsnSSl',
  wed: 
    'https://hours.zone/invite/4cQUAWiS2',
  thu: 
    'https://hours.zone/invite/X8bOH9Hax',
  fri: 
    'https://hours.zone/invite/VRpW2gLUF',
  sat: 
    'https://hours.zone/invite/FTP1-vSSL',
  sun: 
    'https://hours.zone/invite/4Xo_zF78H'
};

const nextWeek = {
  mon: 
    'https://hours.zone/invite/GSEE6iqOm', 
  tue: 
    'https://hours.zone/invite/TsLKXCNZ7', 
  wed: 
    'https://hours.zone/invite/QxjxoFDb4', 
  thu: 
    'https://hours.zone/invite/241iIK2rL', 
  fri: 
    'https://hours.zone/invite/emNtUkTE0', 
  sat: 
    'https://hours.zone/invite/0LR-0dD8q', 
  sun: 
    'https://hours.zone/invite/BUqtG3c-p'
};

const weekly = {
  mon: 
    'https://hours.zone/invite/KHGevWzf3', 
  tue: 
    'https://hours.zone/invite/vpAZL3ST3', 
  wed: 
    'https://hours.zone/invite/8XeWxcv9_', 
  thu: 
    'https://hours.zone/invite/gssIWWbAi', 
  fri: 
    'https://hours.zone/invite/HfmayEHBJ', 
  sat: 
    'https://hours.zone/invite/RVTfGXV2u', 
  sun: 
    'https://hours.zone/invite/ydndRvuce'
};

return { currentWeek, nextWeek, previousWeek, weekly };
};
</script>

<script>
function redirectHoursWeeks() {
  function redirFn( theWeek, slug ) {
    window.location.replace( theWeek[ slug ] );
  };
  
  const arr = window.location.pathname.split( '/' );

  if ( arr[ 0 ] === '' ) {
    arr.shift();
  };

  if ( arr[ 0 ] !== 'hours' ) {
    return false;
  } else {
    arr.shift();
  };
  
  const { currentWeek, previousWeek, nextWeek, weekly } = weeks();
  
  if ( arr.length === 1 ) {
    switch ( arr[ 0 ] ) {
      case 'mon': 
      case 'tue': 
      case 'wed': 
      case 'thu': 
      case 'fri': 
      case 'sat': 
      case 'sun': 
        redirFn( weekly, arr[ 0 ] );
        return;
      default:
        break;
    };
  };

  if ( arr.length === 2 ) {
    if ( arr[ 0 ] === 'previous' ) {
      redirFn( previousWeek, arr[ 2 ] );
    } else if ( arr[ 0 ] === 'next' ) {
      redirFn( nextWeek, arr[ 2 ] );
    } else if ( arr[ 0 ] === 'thons' ) {
      if ( arr[ 1 ] === 'minithon' ) {
        window.location.replace( minithonLink );
      };
    };
  } else if ( arr.length === 1 && ( arr[ 0 ] !== 'previous' && arr[ 0 ] !== 'next' ) ) {
    if ( arr[ 0 ] === 'minithon' ) {
      window.location.replace( minithonLink );
      return;
    };
    redirFn( currentWeek, arr[ 0 ] );
  };
};


redirectHoursWeeks();
// document.addEventListener( 
//   "DOMContentLoaded", 
//   redirectHoursWeeks
// );
</script>

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
