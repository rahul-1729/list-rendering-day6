

function List(){
  

    const fruits =
    [{id:1,name : "apple", calories: 95},
     {id:2,name : "orange", calories: 45},
    {id:3,name : "banana", calories: 105},
    {id: 4,name : "coconut", calories:159},
    {id: 5,name : "pineapple", calories:37}];
     
    // fruits.sort((a,b)=>a.name.localeCompare(b.name));  //Alphabatical

    // fruits.sort((a,b)=>b.name.localeCompare(a.name));  //Reverse Alphabatical

    // fruits.sort((a,b)=>a.calories-b.calories);  // Numeric orderof calories in ascending

    // fruits.sort((a,b)=>b.calories-a.calories);  // Numeric orderof calories in descending

    // const lowCalFruits = fruits.filter(fruit => fruit.calories<100);

  // you can do the same for higher calories

    // const listItems = lowCalFruits.map(lowCalFruits => <li key ={ lowCalFruits.id}>{lowCalFruits.name}: &nbsp; 
    // <b>{ lowCalFruits.calories}</b></li>);

const listItems = fruits.map(fruit => <li key ={ fruit.id}>{fruit.name}: &nbsp; 
    <b>{ fruit.calories}</b></li>);

    return (<ol>{listItems}</ol>);
}

export default List;