import { useRef, useState } from "react";

export function ListItemWidget(props: { selectedItemIndex: number,items: Array<string>, onSelect:any }): JSX.Element {
    const [drop, setDrop] = useState(false);
    //const [selectedItemIndex, setSelectedItemIndex]= useState(props.selectedItemIndex);
    //console.log('state Index: ',selectedItemIndex);
    return (
        <div>
            <button onClick={()=>{setDrop(true)}}> {props.items[props.selectedItemIndex]}</button>
            <div style={{display: drop?'block' : 'none'}}>
                {props.items.map((item,index) => {
                    return <Item text={item} index={index} clickHandler={handleClick} key={index}/>
                })}
            </div>
        </div>

    );
    function handleClick(i: number){
        setDrop(false);
        props.onSelect(i);
    }
}

function Item(props: { text: string, clickHandler: any, index: number }): JSX.Element {
    return (
        <div onClick={()=>props.clickHandler(props.index)}>{props.text}</div>
    );
}