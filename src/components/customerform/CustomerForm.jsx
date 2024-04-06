import { useState } from "react";
import "./CustomerForm.css";

const CustomerForm = ({ addNewCustomer }) => {
  const [customerName, setCustomerName] = useState("");
  const [isValid,setIsValid]=useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(customerName.trim().length ===0){
      setIsValid(false)
      return;

    }
    
    const newCustomer = {
      id: Math.random(),
      customerName,
    };
    addNewCustomer(newCustomer);
    setCustomerName("")
  };
  const changeinpu=(e)=>{
    const namevalue=e.target.value;
    if(namevalue.trim().length > 0 ){
      setIsValid(true);
    }
    setCustomerName(namevalue);
  }

  return (
    <form className="customer-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className={`customer-input ${!isValid ? "invalid" : ""}`}
        placeholder="Add a new customer"
        onChange={changeinpu}
        value={customerName}
        // style={{
        //   backgroundColor:!isValid ? "red" :"",
        // }}
      />
      <button>
        <i className="bi bi-plus-lg"></i>
      </button>
    </form>
  );
};

export default CustomerForm;
