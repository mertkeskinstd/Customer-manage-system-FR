import { useState } from "react";
import styled from "styled-components";
import "./CustomerForm.css";


const Form=styled.form`
display: flex;
justify-content: space-between;
align-items: center;
column-gap: 10px;
margin-bottom: 20px;

& input{
  position: relative;
    cursor: text;
    font-size: 14px;
    line-height: 20px;
    padding: 0 16px;
    height: 48px;
    background-color: ${(props)=>(props.invalid ? "red" : "white")};
    border: 1px solid #d6d6e7;
    border-radius: 3px;
    color: rgb(35, 38, 59);
    box-shadow: inset 0 1px 4px 0 rgb(119 122 175 / 30%);
    overflow: hidden;
    transition: all 100ms ease-in-out;
    flex: 1;
}

&::placeholder{
  color: ${(props)=>(props.invalid ? "white":"")};
}

`

const CustomerForm = ({ addNewCustomer }) => {
  const [customerName, setCustomerName] = useState("");
  const [isValid,setIsValid]=useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(customerName.trim().length ===0){
      setIsValid(true)
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
      setIsValid(false);
    }
    setCustomerName(namevalue);
  }

  return (
    <Form className="customer-form" onSubmit={handleSubmit}  invalid={isValid}>
      <input
        type="text"
        className={`customer-input ${isValid ? "invalid" : ""}`}
        placeholder="Add a new customer"
        onChange={changeinpu}
        value={customerName}
        //   style={{
        //   backgroundColor:!isValid ? "red" :"",
        // }}
      />
      <button>
        <i className="bi bi-plus-lg"></i>
      </button>
    </Form>
  );
};

export default CustomerForm;
