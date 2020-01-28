
require('dotenv').config()
var crypto = require('crypto')


function createSignature(cloud_name, username, apisecret) {
    const timestamp = (new Date).getTime();
    const str_to_sign = `cloud_name=${cloud_name}&timestamp=${timestamp}&username=${username}${apisecret}`
    var shasum = crypto.createHash('sha256');
    shasum.update(str_to_sign);
    var signature = shasum.digest('hex');
    return {signature:signature, timestamp:timestamp}
  }

  console.log(createSignature(process.env.CLOUD_NAME,process.env.USERNAME,process.env.API_SECRET)); //return authInfo object signature/timestamp
  