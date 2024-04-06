
import styled from "styled-components"
import "./CustomerItem.css"

const DeleteButton = styled.button`
  background-color: red;
  padding: 8px;
  transition: opacity .5s ease;

  &:hover {
    opacity: 0.5;
  }
`;

const CustomerItem = ({ customer, handleDelete }) => {
  return (
    <li className="customer-item">
      <div className="customer-info">
        <img
          src="https://i.pravatar.cc/300"
          alt=""
          className="customer-avatar"
        />
        <span className="customer-name"  >{customer.customerName}</span>
      </div>
      <DeleteButton className="delete-button" onClick={() => handleDelete(customer)}>
        <i className="bi bi-trash3"></i>
      </DeleteButton>
    </li>
  );
};

export default CustomerItem;
