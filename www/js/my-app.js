var myApp = new Framework7({

    modalTitle: 'My App',
    pushState: false,
    material:true,
    swipePanel:'left',
    // hideNavbarOnPageScroll:true,
    // animatePages:false,

    onAjaxStart: function (xhr) {
        myApp.showIndicator();
    },
    onAjaxComplete: function (xhr) {
        myApp.hideIndicator();
    }
});  

var $$ = Dom7;
var mainView = myApp.addView('.view-main', {domCache:true});



// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('login-screen', function (page) {
    // Do something here for "about" page

    myApp.closePanel();
    // mainView.hideNavbar();

});

myApp.onPageInit('register-screen', function (page) {
    // Do something here for "about" page

    // myApp.closePanel();
    // mainView.hideNavbar();

});

// // Option 2. Using one 'pageInit' event handler for all pages:
// $$(document).on('pageInit', function (e) {
//     // Get page data from event data
//     var page = e.detail.page;

//     if (page.name === 'about') {
//         // Following code will be executed for page with data-page attribute equal to "about"
//         myApp.alert('Here comes About page');
//     }
// })

// // Option 2. Using live 'pageInit' event handlers for each page
// $$(document).on('pageInit', '.page[data-page="about"]', function (e) {
//     // Following code will be executed for page with data-page attribute equal to "about"
//     myApp.alert('Here comes About page');
// })