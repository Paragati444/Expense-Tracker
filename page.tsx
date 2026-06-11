"use client";
import { useState, useEffect } from "react"; 
import Header from "./components/Header";
import TransactionForm from "./components/TransactionForm";

export default function Home() {
  
  const [transactions, setTransactions] = useState<{title: string, amount: string}[]>([]);

  
  useEffect(() => {
    const savedData = localStorage.getItem("myTransactions");
    if (savedData) {
      setTransactions(JSON.parse(savedData));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("myTransactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (newTransaction: {title: string, amount: string}) => {
    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction = (index: number) => {
    setTransactions(transactions.filter((_, i) => i !== index));
  };

  const updateAmount = (index: number) => {
    const newAmount = prompt("नवीन रक्कम टाका:", transactions[index].amount);
    if (newAmount) {
      const updatedList = [...transactions];
      updatedList[index].amount = newAmount;
      setTransactions(updatedList);
    }
  };

  return (
    <main className="max-w-xl mx-auto p-4">
      <Header />
      <TransactionForm onAdd={addTransaction} />
      
      <div className="mt-5">
        <h2 className="text-xl font-bold">Transaction History</h2>
        <ul>
          {transactions.map((t, index) => (
            <li key={index} className="border-b p-2 flex justify-between items-center">
              <span>{t.title} - ${t.amount}</span>
              <div className="flex gap-2">
                <button onClick={() => updateAmount(index)} className="bg-blue-500 text-white px-2 py-1 rounded text-sm">Update</button>
                <button onClick={() => deleteTransaction(index)} className="bg-red-500 text-white px-2 py-1 rounded text-sm">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
