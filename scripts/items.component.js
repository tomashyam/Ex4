var menuModule = angular.module("MenuApp")
menuModule.component("items", {
    templateUrl : "templates/items.html",
    bindings : {
        category : '<'
    }
})