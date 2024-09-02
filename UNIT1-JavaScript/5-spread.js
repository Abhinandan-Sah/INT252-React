// Spread in Array
const item1 = ['idly', 'dosa'];
const item2 = [...item1];
item1.push('sambar')
console.log(item1);
console.log(item2);

// Spread in object
const item3 = {"food1":'idly',"food2":'dosa'};
const item4 = {...item3, age:3};
item3["food1"]='sambar'
console.log(item3);
console.log(item4);

