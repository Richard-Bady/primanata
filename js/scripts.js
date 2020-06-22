var domain = window.location.protocol + '//' + window.location.host;

console.log('Le domaine du site est le suivant ---> ', domain, '<-------');

var ogpImage = document.querySelector('.ogpImage');
console.log('OGP image----> ', ogpImage.content);

ogpImage.content = domain + ogpImage.content;

console.log('OGP image after modification -> ', ogpImage.content);