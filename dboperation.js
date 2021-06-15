var config = require("./dbconfig");
const sql = require("mssql");
 
async function getdata() {
  try {
    let pool = await sql.connect(config);
    console.log("sql server connected...");
  } catch (error) {
console.log(" mathus-error :" + error);
  }
}
 

async function getdata_withQuery() {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request().query("SELECT TOP (100) Id, ConnectionDeviceId, Alarm1, Alarm2 FROM dbo.BatteryData ORDER BY Id DESC");
      return res.recordsets;
    } catch (error) {
      console.log(" mathus-error :" + error);
    }
  }

  async function getDeviceList_withQuery() {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request().query("SELECT *  FROM dbo.Device");
      return res.recordsets;
    } catch (error) {
      console.log(" mathus-error :" + error);
    }
  } 
  

module.exports = {
  getdata: getdata,
  getdata_withQuery:getdata_withQuery,
  getDeviceList_withQuery:getDeviceList_withQuery
};
