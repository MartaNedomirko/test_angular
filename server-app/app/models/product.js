let mongoose=reqiure ('mongoose');
let Schema=mongoose.Schema;
let productSchema=new Schema({
    Title:{type:String,required:Title.length>10},
	Image:{type:String,required},
	Description:{type:String,required:Description.length<1000},
	Price:{type:Number,required:Price>0},
	Quantity:{type:Number,required:Quantity>0},
	Category:{type:String,required},
	Start_date:{type:Date,default:''},
	End_date:{type:Date,default:''},
	Start_price:{type:Number,default:0},
	Step:{type:Number,default:0},
	Card_number:{type:Number,required:card_number.length==16},
	Card_month:{type:Number,required:card_month.length>0 && card_month.length<13},
	Card_year:{type:Number,required:card_year.length>2017 && card_year.length<2026},
	Card_cvc:{type:Number,required:card_cvc.length==3},
	Create_at:{type:Date,default:Date.Now}
});
module.exports= mongoose.model ('product', productSchema);
