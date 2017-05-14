angular.module('BudgetApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider

            // route to show our basic form (/form)
            .state('form', {
                url: '/form',
                templateUrl: 'form.html',
                controller: 'formController'
            })

            // url will be /form/interests
            .state('form.category', {
                url: '/category',
                templateUrl: 'form-category.html'
            })

            // url will be /form/payment
            .state('form.result', {
                url: '/result',
                templateUrl: 'form-result.html'
            });

        // catch all route
        // send users to the form page
        $urlRouterProvider.otherwise('/form/category');
    })

    // our controller for the form
    // =============================================================================
    .controller('BudgetController', function($scope) {

        $scope.greeting = "What did you buy?";

        // we will store all of our form data in this object
        $scope.formData = {};

        // function to process the form
        $scope.processForm = function() {
            alert('awesome!');
        };

    });