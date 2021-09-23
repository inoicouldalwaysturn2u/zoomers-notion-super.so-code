<script>
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

  return { currentWeek, nextWeek, previousWeek };
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
  };

  const { currentWeek, previousWeek, nextWeek } = weeks();

  if ( arr.length === 3 ) {
    if ( arr[ 1 ] === 'previous' ) {
      redirFn( previousWeek, arr[ 2 ] );
    } else if ( arr[ 1 ] === 'next' ) {
      redirFn( nextWeek, arr[ 2 ] );
    };
  } else if ( arr.length === 2 && ( arr[ 1 ] !== 'previous' && arr[ 1 ] !== 'next' ) ) {
    redirFn( currentWeek, arr[ 1 ] );
  };
};

document.addEventListener( 
  "DOMContentLoaded", 
  redirectHoursWeeks
);
</script>
