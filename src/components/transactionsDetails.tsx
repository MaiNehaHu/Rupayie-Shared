// import React from 'react'

interface Transaction {
  _id: string;
  amount: number;
  category: {
    name: string;
    hexColor: string;
    sign: string;
    type: string;
    _id: string;
  };
  note: string;
  pushedIntoTransactions: boolean;
  status: string;
  people: {
    name: string;
    relation: string;
    contact: number;
    _id: string;
  };
  createdAt: Date;
}

const TransactionsDetails = ({ data }: { data: Transaction[] }) => {

  const personName = data[0].people.name

  return (
    <div>
      <h1>{personName}</h1>
    </div>
  )
}

export default TransactionsDetails