import React, {useState} from "react";
import {FormControl, Container, TextField, Button} from "@mui/material";

const Todoform = (props) => {
    let addNewItem = props.handleClick;
    let [count, setCount] = useState(0)
    let [txt, setTxt] = useState('');
    let handleChange = (event) => {
        setTxt(event.target.value);
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        setTxt('');
        setCount(count + 1);

        let newItem = {
            id: count,
            text: txt,
            comped: false
        };

        addNewItem(newItem);
    };

    return (
        <Container maxWidth={'sm'}>
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth={true}>
                    <TextField label= {"Write a task to do"} required={true} onChange={handleChange} value={txt}/>
                    <Button variant={"contained"} color="primary" type={'submit'} style={{
                        marginTop: 10
                    }}>Submit</Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default Todoform