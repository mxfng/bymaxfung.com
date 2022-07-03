// Applies the tight layout class to the content div
// Used on templates inheriting the wider content div from base.html
var content = document.getElementsByClassName('content')[0];
console.log('hello world')
console.log(content);
content.classList.add('tight');
content.style.maxWidth = '500px';