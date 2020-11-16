const oracledb = require('oracledb');

async function checkConnection() {
  try {
    connection = await oracledb.getConnection({
        user      : "system",
        password      : "123456",
        connectString : "(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS =(PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD = BASIC))))"    
    });
    console.log('connected to database');
  } catch (err) {
    console.error(err.message);
  } 
}

checkConnection();
