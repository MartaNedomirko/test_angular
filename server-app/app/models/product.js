let mongoose=reqiure ('mongoose');
let Schema=mongoose.Schema;
ObjectId=Schema.ObjectId;

let productSchema=new Schema({
	_id: {
		type:ObjectId,
		auto:true
	},
    title:{type:String,required:true,minLength:11},
	image:{type:String,required:true},
	description:{type:String,required:true, maxLength:1000},
	price:{type:Number,required:true,min:0},
	quantity:{type:Number,required:true,min:0},
	category:{type:String,required:true},
	startdate:{type:Date,default:''},
	enddate:{type:Date,default:''},
	startprice:{type:Number,default:0},
	cardnumber:{type:Number,required:true,minLength:16,maxLength:16},
	month:{type:Number,required:true, min:0,max:12},
	year:{type:Number,required:true,min:2017 ,max:2026},
	cvc:{type:Number,required:true,minLength:3,maxLength:3},
	create_at:{type:Date,default:Date.Now}
});
module.exports= mongoose.model ('product', productSchema);
