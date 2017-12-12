var app = angular.module('store', ['store-products']);

app.controller('StoreControllerIPad', ['$http', function ($http) {
    var store = this;

    $http({
        method: 'get',
        url: 'Ipad.json'
    }).then(function (response) {
        console.log(response, 'res');
        store.products = response.data;
    }, function (error) {
        console.log(error, 'can not get data.');
    });


}]);
app.controller('StoreControllerIPhone', ['$http', function ($http) {
    var store = this;

    $http({
        method: 'get',
        url: 'Iphone.json'
    }).then(function (response) {
        console.log(response, 'res');
        store.products = response.data;
    }, function (error) {
        console.log(error, 'can not get data.');
    });


}]);
app.controller('StoreControllerMB', ['$http', function ($http) {
    var store = this;

    $http({
        method: 'get',
        url: 'MB.json'
    }).then(function (response) {
        console.log(response, 'res');
        store.products = response.data;
    }, function (error) {
        console.log(error, 'can not get data.');
    });

}]);

app.controller("ReviewController", function () {
    this.review = {};

    this.addReview = function (product) {
        product.reviews.push(this.review);
        this.review = "";
    };
});


app.controller('sendorder', function($scope,cart,$location){
    
    $scope.sendOrder = function (shippingDetails) {
        var order = shippingDetails;
        order.products = cart.getProducts();
        cart.getProducts().length = 0;
        $location.path("/#!/complete");
    };
});
