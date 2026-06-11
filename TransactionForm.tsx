"use client";

import { useState } from "react";

interface TransactionFormProps {
  onAdd: (data: { title: string; amount: string }) => void;
}

export default function TransactionForm({ onAdd }: TransactionFormProps) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !amount) return;

    onAdd({ title, amount });
    setTitle("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md mt-5">
      <div className="flex gap-4">
        {/* Title Input */}
        <input
          type="text"
          id="title"          // Unique ID
          name="title"        // Name attribute
          placeholder="Expense title"
          className="border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required            // युजरने काहीच न लिहिता Add दाबले तर एरर दाखवेल
        />
        
        {/* Amount Input */}
        <input
          type="number"
          id="amount"         // Unique ID
          name="amount"       // Name attribute
          placeholder="Amount"
          className="border p-2 rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <button type="submit" className="bg-green-500 text-white p-2 rounded">
          Add
        </button>
      </div>
    </form>
  );
}
