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

var gems= 
[
{
	name: 'Gem',
	price : 2.95,
	description : 'good gem',
	canPurchase:true,
	soldOut:false,
	image:'cake.png',
}, 
	{
	name: 'Gem2',
	price : 3.95,
	description : 'better gem',
	canPurchase:true,
	soldOut:false,
	image: 'circus.png',
},
]
})();	