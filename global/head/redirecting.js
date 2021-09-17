function weeks() {
  const currentWeek = {
    mon: 
      'https://hours.zone/session/J1vnLc206',
    tue: 
      'https://hours.zone/session/6QKPj5tVF',
    wed: 
      'https://hours.zone/session/g6YNRVEuE',
    thu: 
      'https://hours.zone/session/igKyKt7R-',
    fri: 
      'https://hours.zone/session/OfjT_pykG',
    sat: 
      'https://hours.zone/session/7hq7YrCi5',
    sun: 
      'https://hours.zone/session/52IIgDABZ'
  };

  const nextWeek = {
    mon: 
      'https://hours.zone/session/oG8HbVsOs',
    tue: 
      'https://hours.zone/session/RoCzsnSSl',
    wed: 
      'https://hours.zone/session/4cQUAWiS2',
    thu: 
      'https://hours.zone/session/FTP1-vSSL',
    fri: 
      'https://hours.zone/session/4Xo_zF78H',
    sat: 
      'https://hours.zone/session/RoCzsnSSl',
    sun: 
      'https://hours.zone/session/oG8HbVsOs'
  };

  const previousWeek = {
    mon: 
      'https://hours.zone/session/Rbh8tgpxZ',
    tue: 
      'https://hours.zone/session/R2TXVrw9M',
    wed: 
      'https://hours.zone/session/QvMrJaEPj',
    thu: 
      'https://hours.zone/session/dCTe9kS3A',
    fri: 
      'https://hours.zone/session/smVa8GVvi',
    sat: 
      'https://hours.zone/session/Rkl-4Q8W7',
    sun: 
      'https://hours.zone/session/nESx3_6EA'
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
