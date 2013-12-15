var bookings = [{
    "given-name": "Edward",
    "surname": "kim",
    "email": "edward@mokabooking.com",
    "bookingDate": "2013-12-12,18:00",
    "numberOfGuests": 2

},
{
    "given-name": "Hayley",
    "surname": "Heo",
    "email": "hayley@mokabooking.com",
    "bookingDate": "2013-12-13,18:00",
    "numberOfGuests": 2

},
{
    "given-name": "Jiman",
    "surname": "Kim",
    "email": "jiman@mokabooking.com",
    "bookingDate": "2013-12-13,20:00",
    "numberOfGuests": 4

},
{
    "given-name": "Justin",
    "surname": "Yoo",
    "email": "justin@mokabooking.com",
    "bookingDate": "2013-12-14,18:00",
    "numberOfGuests": 4

},
{
    "given-name": "Robin",
    "surname": "Kang",
    "email": "edward@mokabooking.com",
    "bookingDate": "2013-12-14,20:00",
    "numberOfGuests": 2

},
{
    "given-name": "Sunju",
    "surname": "Choi",
    "email": "edward@mokabooking.com",
    "bookingDate": "2013-12-12,18:00",
    "numberOfGuests": 2

}];
(function (angular) {
    var module = angular.module("bookingApp", []);

    module.controller("bookingController", function ($scope, $http) {
        $scope.bookings = bookings;
    });
})(angular);