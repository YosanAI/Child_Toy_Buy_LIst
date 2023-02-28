import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ListItemWidget } from './components/ListItemWidget'
import { StockListWidget } from './components/StockListWdget'
import { BaughtItemsDisplayWidget } from './components/BaughtItemsDisplayWidget'

function App() {
  const [count, setCount] = useState(0)
  const children=['Ruben','Simon','David','Dina'];
  const [selectedChildIndex, setSelectedChildIndex]=useState(0);
  const stockItems=['Car','Bicycle','Piano','Microscope','Adidas Shoes','Laptop','Tablet','Mouse','Kite','Lego','Doll','dress'];
  
  const [inflatedStockItems, setInflatedStockItems]=useState(stockItems.map((item)=>{
    return {text: item,isAvailable: true, baughtForIndex:-1}
  })); 
  const [childData,setChildData]= useState(generateChildData(inflatedStockItems));
  console.log('Inf StockItems: ',inflatedStockItems);
  return (
    <div className="widget_container">
      <ListItemWidget items={children} selectedItemIndex={selectedChildIndex} onSelect={handleChildClick}/>
      <StockListWidget items={inflatedStockItems} onStockItemClicked={handleStockItemClick}/>
      <BaughtItemsDisplayWidget data={childData}/>
    </div>
  )
  function handleStockItemClick(i:number){
    const updatedStockItems=inflatedStockItems.map((item,index)=>{
        if(i==index){
          return {text: item.text,isAvailable: false,baughtForIndex: selectedChildIndex}
        }
        else{
          return item;
        }
    });  
    console.log('Updated Stock Items: ',updatedStockItems);
    setInflatedStockItems(updatedStockItems);
    setChildData(generateChildData(updatedStockItems));
  }
  function handleChildClick(i:number){
      setSelectedChildIndex(i);
  }
  function generateChildData(stockItemData: Array<any>){
      const arr= children.map((child)=>{
          let childAsset: Array<string>=[];
          stockItemData.forEach((item)=>{
            if(item.baughtForIndex==children.indexOf(child)){
              childAsset.push(item.text);
            }
          });
          return {childName: child, baughtItems: childAsset}
      });
      return arr;
  }
}


export default App
