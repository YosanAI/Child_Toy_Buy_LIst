export function BaughtItemsDisplayWidget(props: {data: Array<{childName: string, baughtItems: Array<string>}>}){
    return(
        <div>
            {props.data.map((childData)=>{
                return <BaughtItem child={childData.childName} baughtItems={childData.baughtItems}/>
            })}
        </div>
    )
}

function BaughtItem(props: {child: string,baughtItems:Array<string>}){
    return(
        <div style={{display: 'flex'}}>
        <div  style={{margin: '5px'}}>{props.child}</div>
        {props.baughtItems.map((item)=>{
            return <div style={{margin: '3px'}}>{' '+item+' '}</div>
        })}
        </div>
    );
}