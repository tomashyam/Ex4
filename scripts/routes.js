angular.module('MenuApp')
  .config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('home');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: './templates/home.html',

    })

    .state('categories', {
      url: '/categories',
      component: 'categories',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          console.log('happend');
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('items', {
    url: '/item-detail/{category}',
    component:  'items',
    resolve: {
      category: ['$stateParams', 'MenuDataService',
        function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.category)
        }]
      }
    });
}