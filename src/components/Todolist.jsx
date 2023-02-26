import React from "react";
import Item from "./Item";

const Todolist = (props) => {
    let ItemInfo = props.ItemInfo;
    let checkItem = props.checkItem;
    let deleteItem = props.deleteItem;

    return (
        <div>
            {
                ItemInfo.map((item) => (
                    <Item key={item.id} id={item.id} title={item.text} comped={item.comped} checkItem={checkItem} deleteItem={deleteItem}/>
                ))
            }
        </div>
    )
}

export default Todolist