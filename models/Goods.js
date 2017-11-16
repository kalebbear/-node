// 创建用户表结构
const mongoose = require('mongoose');

let goodsSchemas = mongoose.Schema({
    goodsname: String,
    description: String,
    size: Array,
    style: Array,
    price: Number,
    img:String,
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'seller'
    }
});

//创建用户模型
let GoodsModel = mongoose.model('goods', goodsSchemas);

//向外输出
module.exports = GoodsModel;

