var bookings = [
{
    "givenName": "JIM",
    "surName": "KIM",
    "email": "jkim.au@gmail.com",
    "bookingDate": "2013-04-05, 18:00",
    "numberOfGuests": "2"
},

{
    "givenName": "Roy",
    "surName": "Jang",
    "email": "royjang@gmail.com",
    "bookingDate": "2013-12-05, 12:00",
    "numberOfGuests": "3"
},

{
    "givenName": "Rob",
    "surName": "Lee",
    "email": "roblee@gmail.com",
    "bookingDate": "2011-01-01, 10:00",
    "numberOfGuests": "5"
},

{
    "givenName": "Crown",
    "surName": "Park",
    "email": "crownpark@gmail.com",
    "bookingDate": "2014-06-07, 15:00",
    "numberOfGuests": "5"
},

{
    "givenName": "Sery",
    "surName": "Oh",
    "email": "serryoh@gmail.com",
    "bookingDate": "2014-01-06, 16:00",
    "numberOfGuests": "6"
}];

(function (angular) {
    var module = angular.module("bookingApp", []);

    module.controller("bookingController", function ($scope, $http) {
        $scope.bookings = bookings;
    });
})(angular);