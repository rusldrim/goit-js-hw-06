const categories = document.querySelector('ul').children.length;
console.log("Number of categories:", categories);


// const ul = Array.from(document.querySelector('#categories').children);
// for (let elem of ul) {
//     let category = elem.firstElementChild.textContent;   
//     let quantityElem = elem.lastElementChild.children.length;
//     console.log(`Category: ${category}`); 
//     console.log(`Elements: ${quantityElem}`);
// };

const items = document.querySelectorAll('.item');
Array.prototype.forEach.call(items, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Category: ${title}`); 
    console.log(`Elements: ${itemsLength}`);
});