const categories = document.querySelector('ul').children.length;
console.log("Number of categories:", categories);

const items = document.querySelectorAll('.item');
Array.prototype.forEach.call(items, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Category: ${title}`); 
    console.log(`Elements: ${itemsLength}`);
});