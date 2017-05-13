var menuModule = angular.module("MenuApp")
menuModule.component("categories", {
    templateUrl: "templates/categories.html",
    bindings: {
        categories: '<',
    }
});