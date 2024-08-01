// render list
import React from "react";
import propTypes from "prop-types"

function List(props){
    const itemCetagories = props.cetagories
    const itemList = props.items;

    const listItem = itemList.map(item => <li key={item.id}>{item.name} : &nbsp; {item.calories}</li> )

    return(<>
            <h2 className="list-category">{itemCetagories}</h2>
            <ol className="list-items">{listItem}</ol>
           </> );




    
    // const fruits = ["Apple", "Orange", "Banana", "Coconut", "Pineapple"]
    // fruits.sort()
    // const listItem = fruits.map(fruit => <li>{fruit}</li> )
    // return (<ol>{listItem}</ol>);


    // const fruits = [
    //     {id:"1", name:"Apple", calories: 95},
    //     {id:"2", name:"Orange", calories: 100},
    //     {id:"3", name:"Banana", calories:105},
    //     {id:"4", name:"Coconut",calories:159 },
    //     {id: "5", name:"Pineapple", calories:37}
    // ]

    // fruits.sort((a, b) => a.name.localeCompare(b.name)) // Alphabatical
    // fruits.sort((a,b) => b.name.localeCompare(a.name)) // Revarse Alphabatical
    // fruits.sort((a,b) => a.calories - b.calories) // Numarical 
    // fruits.sort((a,b)=> b.calories - a.calories) // Revers Numerical 

    // const lowCalFruits = fruits.filter(fruit => fruit.calories <= 100);
    // const heighCalFruits = fruits.filter(fruits => fruits.calories> 100)

    // const listItem = heighCalFruits.map(fruit => <li key={fruit.id}>{fruit.name} : 
    //                                       &nbsp; {fruit.calories}</li> );


    // const listItem = fruits.map(fruit => <li key={fruit.id}>{fruit.name} : 
    //                                       &nbsp; {fruit.calories}</li> );

    // return ( <ol>{listItem}</ol> )

}
List.propTypes = {
    cetagories: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({id: propTypes.number, name: propTypes.string, calories: propTypes.string}))
}

List.defaultProps = {
    cetagories: "cetagories",
    items : []
}
export default List;