export class Customer {
  customerNumber: string;
  name: string;
  email: string;
  bankAccount: string;
  address: {
    street: string;
    houseNumber: number;
    zipCode: string;
    city: string;
  };
  phoneNumber: string;
  creationDate: Date;
}
