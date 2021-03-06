
    var app = angular.module('store-products', ['cart']);

    app.directive('productTitle', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-title.html'
        };
    });

    app.directive('productGalery', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-galery.html'
        };
    });

    app.directive('productBuyButton', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-buy-button.html'
        };
    });

    app.directive('productPanels', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-panels.html',
            controller: function () {
                this.tab = 'description';

                this.setTab = function (tab) {
                    this.tab = tab;
                };

                this.isSelected = function (tab) {
                    return this.tab === tab;
                }
            },
            controllerAs: 'panel'
        };
    });

    app.controller('productsCart', function($scope, cart){
        $scope.addtoCart = function (product) {
                cart.addProduct(product.name, product.price);
            }
    });