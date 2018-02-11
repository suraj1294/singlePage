var app = angular.module('DemoApp', [
    'ui.router',
    'ngRoute'
    //%Anchor
])

//1.
app.service('loginservice', function ($http) {

    this.register = function (userInfo) {
        var resp = $http({
            url: "http://localhost:64991/api/Account/Register",
            method: "POST",
            data: userInfo,
        });
        return resp;
    };

    this.registerExternal = function (userInfo) {
        var resp = $http({
            url: "http://localhost:64991/api/Account/RegisterExternal",
            method: "POST",
            data: userInfo,
        });
        return resp;
    };

    this.isUserRegistered=function(accesstoken){
        var authHeaders = {};
        if (accesstoken) {
            authHeaders={
                "Authorization" : 'Bearer ' + accesstoken,
                 "Content-Type" : "Application/json"
                }
        }
        var resp = $http({
            url: "http://localhost:64991/api/Account/UserInfo",
            method: "GET",           
            headers: authHeaders
        });
        return resp;        
    }

    this.SignUpExternalUser=function(accesstoken){
        var authHeaders = {};
        if (accesstoken) {
            authHeaders={
                "Authorization" : 'Bearer ' + accesstoken,
                 "Content-Type" : "Application/json"
                }
        }
        var resp = $http({
            url: "http://localhost:64991/api/Account/RegisterExternal",
            method: "POST",           
            headers: authHeaders
        });
        return resp; 
    }

    this.login = function (userlogin) {

        var resp = $http({
            url: "http://localhost:64991/TOKEN",
            method: "POST",
            data: $.param({
                grant_type: 'password',
                username: userlogin.username,
                password: userlogin.password
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        });
        return resp;
    };
});

//1.
app.service('masterservice', function ($http) {
    this.get = function () {

        var accesstoken = sessionStorage.getItem('accessToken');

        var authHeaders = {};
        if (accesstoken) {
            authHeaders.Authorization = 'Bearer ' + accesstoken;
        }

        var response = $http({
            url: "http://localhost:64991/api/Masters/Languges",
            method: "GET",
            headers: authHeaders
        });
        return response;
    };
});