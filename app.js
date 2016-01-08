(function(){
var app = angular.module('store',[ ]);


app.controller('StoreController',function() {
this.products=gems;
});

app.controller('PanelController',function() {
this.tab=1;
this.selectTab = function(setTab) {
	this.tab=setTab;
};
this.isSelected = function(checkTab) {
	return this.tab === checkTab;
};
});

app.controller('ReviewController', function() {
this.review={}; 
this.addReview=function(product) {
	product.reviews.push(this.review);
	this.review={};
};

});

var gems= 
[
{
	name: 'Gem',
	price : 2.95,
	description : 'good gem',
	reviews :  [{stars: '5 stars' ,body:'must buy this,value for money.',author:'good@gmail.com'}],
	canPurchase:true,
	soldOut:false,
	image:'cake.png',
}, 
	{
	name: 'Gem2',
	price : 3.95,
	description : 'better gem',
	reviews : [{stars : '1 star' , body : 'Bought this. I am broke now.', author : 'bad@gmail.com'}],
	canPurchase:true,
	soldOut:false,
	image: 'circus.png',
},
]
})();	