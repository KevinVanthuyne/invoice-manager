export class Customer {
  customerNumber: string;
  name: string;
  email?: string;
  bankAccount?: string;
  address: {
    street?: string;
    houseNumber?: number;
    zipCode?: string;
    city?: string;
  };
  phoneNumber?: string;
  creationDate?: Date;
}

export let createCustomer = ({
  customerNumber,
  name,
  email,
  bankAccount,
  street,
  houseNumber,
  zipCode,
  city,
  phoneNumber,
  creationDate,
}) => {
  const customer = new Customer();
  if (customerNumber) customer.customerNumber = customerNumber;
  if (name) customer.name = name;
  if (email) customer.email = email;
  if (bankAccount) customer.bankAccount = bankAccount;
  if (phoneNumber) customer.phoneNumber = phoneNumber;
  if (creationDate) customer.creationDate = creationDate;

  if (street || houseNumber || zipCode || city) customer.address = {};
  if (street) customer.address.street = street;
  if (houseNumber) customer.address.houseNumber = houseNumber;
  if (zipCode) customer.address.zipCode = zipCode;
  if (city) customer.address.city = city;

  return customer;
};
