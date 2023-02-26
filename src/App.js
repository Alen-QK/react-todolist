import React, {useState} from "react";
import Todoform from "./components/Todoform";
import Todolist from "./components/Todolist";
import Bigtitle from "./components/Bigtitle";

function App() {
    let [ItemInfo, setItemInfo] = useState([])

    function addNewItem (newItem) {
        setItemInfo(prevItemInfo => ([
                ...prevItemInfo,
                newItem
        ]))
    }

    function checkItem (id) {
        setItemInfo(ItemInfo.map((item) => {
            if (item.id === id) {
                item.comped = !item.comped;
            }

            return item
        }))
    }

    function deleteItem (id) {
        setItemInfo(ItemInfo.filter(item => item.id !== id));
    }

    return (
        <div>
            <Bigtitle>a</Bigtitle>
            <Todoform handleClick={addNewItem}/>
            <Todolist ItemInfo={ItemInfo} checkItem={checkItem} deleteItem={deleteItem}/>
        </div>
    );
}

export default App;
