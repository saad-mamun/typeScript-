
import './App.css'
import { ChaiCard } from './components/ChaiCard.tsx'
import { Counter } from './components/Counter.tsx';
import { ChaiList } from './components/ChaiList.tsx';
import type { Chai } from './types.ts';
import { OrderForm } from './components/OrderForm.tsx';
import { Card } from './components/Card.tsx';

function App() {
  const chaiItems: Chai[] = [
    { id: 1, name: "Masala Chai", price: 300 },
    { id: 2, name: "Green Tea", price: 250 },
    { id: 3, name: "Black Tea", price: 30 }
  ];

  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <ChaiCard name="Masala Chai" price={300} />
        <Counter/>
        <ChaiList items={chaiItems} />
        <OrderForm 
        onSubmit={(order) => {
          console.log('Placed:', order.name, order.cups)
        }}
         />
         <Card
         title="Chai with TypeScript"
          footer={<div>Enjoy your tea!</div>}
         />
      </div>
    </>
  );
}

export default App
