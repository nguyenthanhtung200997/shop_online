
(function () {

    var app = angular.module('store', ['store-products']);

    app.controller('StoreControllerIPad', ['$http', function ($http) {
        var store = this;

        $http.get('Ipad.json').success(function(data){
           store.products=data;
        });
    }]);
    
    app.controller('StoreControllerIPhone', ['$http', function ($http) {
        var store = this;

        $http.get('Iphone.json').success(function(data){
           store.products=data;
        });
    }]);
    
    app.controller('StoreControllerMB', ['$http', function ($http) {
        var store = this;

        $http.get('MB.json').success(function(data){
           store.products=data;
        });
    }]);

    app.controller("ReviewController", function () {
        this.review = {};

        this.addReview = function (product) {
            product.reviews.push(this.review);
            this.review = "";
        };
    });

})();


