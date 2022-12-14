import mysql from 'mysql';

    const connection = mysql.createConnection({
        host: 'skp-dp.sde.dk/phpmyadmin',
        user: 'scth01_skp-dp_sd',
        password: '4kqzq3pq',
        database: 'scth01_skp_dp_sde_dk'
      });


export default connection;

