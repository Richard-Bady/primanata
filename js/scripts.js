var pathArray = window.location.pathname.split('/');
var domain = window.location.protocol + '//' + window.location.host + '/' + pathArray[1];

// console.log(window.location.pathname, window.location.hostname);

console.log('Le domaine du site est le suivant ---> ', domain, '<-------');

var ogpImage = document.querySelector('.ogpImage');
var ogpUrl = document.querySelector('.ogpUrl');
console.log('OGP image----> ', ogpImage.content);

ogpImage.content = domain + ogpImage.content;
ogpUrl.content = window.location.href;

console.log('OGP image after modification -> ', ogpImage.content);