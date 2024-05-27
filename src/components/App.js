import React, { useEffect, useState } from "react";
import AccountContainer from "./AccountContainer";
import TransactionsList from "./TransactionsList";
import AddTransactionForm from "./AddTransactionForm";
import Search from "./Search";

function App() {
  const [transactions, setTransactions] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then(res => res.json())
      .then(data => setTransactions(data))
      .catch(error => console.log(error));
  }, []);
  
  console.log(transactions);
  
  function handleUpdate(newTransaction) {
    console.log(newTransaction);
    
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newTransaction)
    })
    .then(res => res.json())
    .then(newTransaction => setTransactions(transactions => [...transactions, newTransaction]))
    .catch(error => console.log(error));
  }
  
  function handleSearching(search) {
    setTransactions(transactions => transactions.filter(transaction => transaction.description.includes(search)));
  }

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <Search onSearching={handleSearching} />
      <AccountContainer />
      <TransactionsList transactions={transactions} />
      <AddTransactionForm onSubmission={handleUpdate} />
    </div>
  );
}

export default App;
