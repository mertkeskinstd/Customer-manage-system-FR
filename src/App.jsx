
import { useState } from 'react';
import './App.css';
import CustomerForm from './components/customerform/CustomerForm';
import CustomerList from './components/customerlist/CustomerList';

function App() {

  const [customers, setCustomers] = useState([]);


    const addNewCustomer=(newcustomer)=>{
        // setcustomers([...customers,newcustomer])
        setCustomers((prevState)=> [newcustomer,...prevState])
    }
  return (
    <div className="App">
      <h1>Customer Manage System</h1>
      <CustomerForm addNewCustomer={addNewCustomer} />
      {customers.length === 0 && "There are no customers..."}
      <CustomerList customers={customers} setCustomers={setCustomers} />

    </div>
  );
}

export default App;
