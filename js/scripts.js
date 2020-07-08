console.log('Script is correctly loaded');
var scriptGoogleAnalytics = document.querySelector('#google-analytics-script');

// Handle cookies
console.log('---------- Voici les cookies -------');
console.log(document.cookie);
console.log(document.cookie[0]);
console.log(document.cookie.length);
console.log('---------- Voici les cookies -------');

var userAcceptCookie = document.querySelector('.js-accept-analytics');
var userDontAcceptCookie = document.querySelector('.js-dont-accept-analytics');
var cookieBanner = document.querySelector('.cookie-banner');


console.log('---------- Cookies Length-------');
if(document.cookie.length === 0) {
    console.log('EMPTY COOKIES')
} else {
    console.log('NOT EMPTY');
}
console.log('---------- Cookies Length-------');

userAcceptCookie.addEventListener('click', function() {
    console.log('Cookie OK');
    var cookieDate = new Date();
    console.log(cookieDate);
    console.log(cookieDate + 365);
    
    cookieBanner.classList.add('hide-cookie-banner')
    document.cookie = 'userHasAcceptAnalytics=yes'; // Créé ou met à jour un cookie 'user'
})

userDontAcceptCookie.addEventListener('click', function() {
    console.log('Pas cookie');
    cookieBanner.classList.add('hide-cookie-banner')
    document.cookie = 'userHasAcceptAnalytics=no'; // Créé ou met à jour un cookie 'user'
    document.cookie.remove();

})