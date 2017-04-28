var dataModule = angular("data");
dataModule.service("MenuDataService", MenuDataService);

MenuDataService.$inject = ["$http"];
function MenuDataService ($http) {
    var self = this;
    self.categoryULR = "https://davids-restaurant.herokuapp.com/menu_items.json?category=";
    self.getAllCategories = function (){
        return $http.get("https://davids-restaurant.herokuapp.com/categories.json");

    };
    self.getItemsForCategory = function (categoryShrotName){
        return $http.get(self.categoryULR);

    };
}