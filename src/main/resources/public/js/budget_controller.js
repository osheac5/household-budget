app = angular.module('BudgetApp', ['ui.router', 'pickadate'])
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider

            // route to show our basic form (/form)
            .state('form', {
                url: '/form',
                templateUrl: 'views/form.html',
                controller: 'BudgetController'
            })

            // url will be /form/interests
            .state('form.category', {
                url: '/category',
                templateUrl: 'views/form-category.html'
            })

            .state('form.amount', {
                url: '/amount',
                templateUrl: 'views/form-amount.html'
            })

            // url will be /form/payment
            .state('form.result', {
                url: '/result',
                templateUrl: 'views/form-result.html'
            });

        // catch all route
        // send users to the form page
        $urlRouterProvider.otherwise('/form/category');
    })

    // our controller for the form
    // =============================================================================
app.controller('BudgetController', function($scope, $http, $state) {

        $scope.greeting = "What did you buy?";

        // we will store all of our form data in this object
        $scope.formData = {};
        $scope.formData.date = new Date();

        // function to process the form
        $scope.processForm = function(formData) {
            console.log(formData);
            console.log($scope.formData);
            $http({
                      method: 'POST',
                      url: '/add',
                      params: formData

                    }).then(function successCallback(response) {
                        $scope.response = response;
                        $state.go('form.result');
                      }, function errorCallback(response) {
                        $scope.response = response;
                      });
        };

    });