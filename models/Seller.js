// 创建用户表结构
const mongoose = require('mongoose');

let sellerSchemas = mongoose.Schema({
    sellername: String,
    password: String,
    description: String,
    logo: String
});

//创建用户模型
let SellerModel = mongoose.model('seller', sellerSchemas);

//向外输出
module.exports = SellerModel;

