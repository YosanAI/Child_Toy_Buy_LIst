export function StockListWidget(props: {items: Array<any>,onStockItemClicked:any}): JSX.Element{
    const baughtItemClr='#ff0000';
    const availableItemClr= '#ffffff';
    return(
        
            <div>
           {
               props.items.map((item,index)=>{
                   const bkgClr= item.isAvailable ? availableItemClr : baughtItemClr;
                   return <StockItem index={index} itemName={item.text} bkgColor={bkgClr} onStockItemClicked={props.onStockItemClicked}/>
               })
           }
            </div>
        
    );
}

function StockItem(props: {itemName:string, bkgColor:string,onStockItemClicked:any,index:number}){
    return(
        <div style={{backgroundColor: props.bkgColor}} onClick={()=>{props.onStockItemClicked(props.index)}}>{props.itemName}</div>
    );
}