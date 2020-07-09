console.log('External script is correctly loaded');
var scriptGoogleAnalytics = document.querySelector('#google-analytics-script');

// Handle cookies
console.log('---------- Voici les cookies -------');
//console.log( 'Est-ce que le user a accepté les cookies? -> ' + localStorage.getItem(localStorage.key('userHasAcceptAnalytics')) + ' <-----' );
console.log( 'Liste des éléments dans le Local Storage -> ' + localStorage.getItem('userHasAcceptAnalytics') + ' <-----' );
console.log('---------- Voici les cookies -------');

var userAcceptCookie = document.querySelector('.js-accept-analytics');
var userDontAcceptCookie = document.querySelector('.js-dont-accept-analytics');
var cookieBanner = document.querySelector('.cookie-banner');

console.log('---------- Cookies exists?-------');
// Afficher ou pas la bannière de cookie 
// Vérifier si le cookies d'acceptation a été validé
// Vérifier la date de péremption du localStorage : 13 mois max (mettons 12 mois)

if(localStorage.getItem('userHasAcceptAnalytics') !== null) {
    cookieBanner.classList.add('hide-cookie-banner')
    console.log( 'User already made has already clicked on the cookie banner -> ' + localStorage.getItem('userHasAcceptAnalytics') + ' <-----' );

} else {
    cookieBanner.classList.remove('hide-cookie-banner')
    console.log( 'User didnt click on the cookies banner or the localStorage is outdated -> ' + localStorage.getItem('userHasAcceptAnalytics') + ' <-----' );
}
console.log('---------- Cookies exists?-------');

userAcceptCookie.addEventListener('click', function() {
    console.log('User has accept analytics');
    cookieBanner.classList.add('hide-cookie-banner')
    localStorage.setItem("userHasAcceptAnalytics", "yes");
})

userDontAcceptCookie.addEventListener('click', function() {
    console.log('User doesn\'t accept analytics');
    cookieBanner.classList.add('hide-cookie-banner')
    localStorage.setItem("userHasAcceptAnalytics", "no");
})