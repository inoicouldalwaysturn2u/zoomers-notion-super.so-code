function weeks() {
  const currentWeek = {
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

  const nextWeek = {
    mon: 
      'https://hours.zone/invite/oG8HbVsOs',
    tue: 
      'https://hours.zone/invite/RoCzsnSSl',
    wed: 
      'https://hours.zone/invite/4cQUAWiS2',
    thu: 
      'https://hours.zone/invite/FTP1-vSSL',
    fri: 
      'https://hours.zone/invite/4Xo_zF78H',
    sat: 
      'https://hours.zone/invite/RoCzsnSSl',
    sun: 
      'https://hours.zone/invite/oG8HbVsOs'
  };

  const previousWeek = {
    mon: 
      'https://hours.zone/invite/Rbh8tgpxZ',
    tue: 
      'https://hours.zone/invite/R2TXVrw9M',
    wed: 
      'https://hours.zone/invite/QvMrJaEPj',
    thu: 
      'https://hours.zone/invite/dCTe9kS3A',
    fri: 
      'https://hours.zone/invite/smVa8GVvi',
    sat: 
      'https://hours.zone/invite/Rkl-4Q8W7',
    sun: 
      'https://hours.zone/invite/nESx3_6EA'
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
    return false
  };

  if ( arr.length === 3 ) {
    if ( arr[ 1 ] === 'previous' ) {
      redirFn( previousWeek, arr[ 2 ] );
    } else if ( arr[ 1 ] === 'next' ) {
      redirFn( nextWeek, arr[ 2 ] );
    };
  } else if ( arr.length === 2 ) {
    redirFn( currentWeek, arr[ 1 ] );
  };
};

redirectHoursWeeks();
</script>
