import  { useState } from "react";

const Customer = () => {
  const [customer, setCustomer] = useState({
    name: "John",
    age: 25,
    address: {
      city: "LA",
      postalCode: 25366,
    },
    job: "singer",
  });

  const handleButton = () => {
    const newCustomer = {
      ...customer,
      age: 63,
      address: { ...customer.address, postalCode: 56363 },
    };
    setCustomer(newCustomer);
  };

  return (
    <div>
      <button onClick={handleButton}>Click</button>
      <p>
        You Are: {customer.name} from {customer.address.city} , with postal
        code: {customer.address.postalCode}
      </p>
    </div>
  );
};

export default Customer;
