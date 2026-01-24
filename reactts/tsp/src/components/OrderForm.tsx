import { useState } from "react";

interface OrderFormProps {
  onSubmit(order: { name: string; cups: number }): void;
}

export function OrderForm({ onSubmit }: OrderFormProps) {
  const [name, setName] = useState<string>("Masala Chai");
  const [cups, setCups] = useState<number>(1);



  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    onSubmit({name, cups})
  }


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="chai-name">Chai Name</label>
      <input
        id="chai-name"
        type="text"
        placeholder="Enter chai name"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />

      <label htmlFor="cups">Number of Cups</label>
      <input
        id="cups"
        type="number"
        placeholder="Enter number of cups"
        value={cups}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCups(Number(e.target.value) || 0)
        }
      />
      <button type="submit">Place Order</button>
    </form>
  );
}
