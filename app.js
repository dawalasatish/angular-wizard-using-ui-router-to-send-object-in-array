
// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('formApp', ['ui.router'])

// configuring our routes 
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    
        // route to show our basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formController'
        })
        
        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('form.profile', {
            url: '/profile',
            templateUrl: 'form-profile.html'
        })
        
        // url will be /form/interests
        .state('form.interests', {
            url: '/interests',
            templateUrl: 'form-interests.html'
        })
        
        // url will be /form/payment
        .state('form.payment', {
            url: '/payment',
            templateUrl: 'form-payment.html'
        })
        .state('form.completed', {
            url: '/completed',
            templateUrl: 'form-submit.html'
        });
       
    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/form/profile');
})

// our controller for the form
// =============================================================================
.controller('formController', function($scope) {
    
    // we will store all of our form data in this object
    $scope.data = [];
    $scope.gender = ["Male","Female","Others"];
	$scope.location = ["Hyderabad","Chennai","Bangalore","Nagpur","Pune"];
	$scope.notice = ["10-20 days","20-30 days","30-45 days"];
	$scope.qualification = ["B.Tech/B.E","Degree","Intermediate","SSC"];
	$scope.course = ["CSE","IT","ECE","EEE"];
	$scope.coursetype= ["Full Time","Part Time","Correspondence"];
	$scope.passedout = ["2016","2015","2014"]
    // function to process the form
    $scope.processForm = function() {

       swal("submitted succesfully!");
       console.log($scope.data);
       $scope.data = {};
    };
    
});

