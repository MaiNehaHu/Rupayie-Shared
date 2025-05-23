// import React from 'react'
import { formatAmount } from "../utils/formatAmount";
import formatDateTimeSimple from "../utils/formatDate";

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
  people: {
    name: string;
    relation: string;
    contact: number;
    _id: string;
  };
  createdAt: Date;
}

const TransactionsDetails = ({ data }: { data: Transaction[] }) => {
  const totalBalance: number = data
    .reduce((sum, trans) => sum += trans.category.sign == "+"
      ? trans.amount : -trans.amount, 0);

  const totalTaken: number = data
    .reduce((sum: number, trans: Transaction) =>
      sum += trans.category.sign == "+" ? trans.amount : 0, 0);

  const totalGiven: number = data
    .reduce((sum: number, trans: Transaction) =>
      sum += trans.category.sign == "-" ? trans.amount : 0, 0);

  const personName = data[0]?.people.name;
  const contact = data[0]?.people.contact;
  const categoryName = data[0]?.category.name;


  return (
    <div className="flex w-full h-full justify-center font-['Poppins']">
      <div id="print-section" className="max-w-3xl w-full bg-white sm:p-6 p-4 min-h-[90vh] h-full">
        <section className="flex sm:flex-row flex-col w-fill justify-between">
          <div>
            <h1 className="sm:text-xl text-sm font-medium">Name: {personName}</h1>
            <p className="sm:text-sm text-[10px]">+91 {contact}</p>
          </div>

          <div>
            <p className="sm:text-xl text-sm font-medium text-right">Net Balance:</p>
            <p className="text-right sm:text-base text-[10px]">
              <span>{totalBalance > 0 ? "You'll Give: " : "You'll Get: "}</span>
              <span className={`${totalBalance > 0 ? "text-[#fb2c36]" : "text-[#00c951]"} font-medium`}>
                {formatAmount(totalBalance)}
              </span>
            </p>
          </div>
        </section>

        <section className="sm:mt-8 mt-4">
          <p className="font-medium sm:text-base text-xs">Total {data.length} entries
            <span>
              {" "} for "{categoryName}"
            </span>
          </p>
        </section>

        <section className="sm:mt-8 mt-4 w-full">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#99a1af]">
                <th className="text-left sm:text-base text-xs py-2 ">Entry</th>
                <th className="text-left sm:text-base text-xs py-2">You Gave</th>
                <th className="text-left sm:text-base text-xs py-2 ">You Got</th>
              </tr>
            </thead>
            <tbody>
              {data.map((trans) => (
                <tr key={trans._id}>
                  <td className="py-2 sm:text-sm text-xs font-medium">{formatDateTimeSimple(trans.createdAt.toString())}</td>
                  <td className="py-2 sm:text-sm text-xs font-medium text-[#fb2c36]">{trans.category.sign === "-" ? formatAmount(trans.amount) : "-"}</td>
                  <td className="py-2 sm:text-sm text-xs font-medium text-[#00a63e]">{trans.category.sign === "+" ? formatAmount(trans.amount) : "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="sm:mt-10 mt-4 flex flex-row flex-wrap justify-between gap-y-2 sm:gap-x-0 gap-x-2">
          {[
            { price: totalGiven, title: "You Gave" },
            { price: totalTaken, title: "You Got" },
            { price: totalBalance, title: "Net Balance" }
          ].map(({ price, title }) => (
            <div
              key={title}
              className={"sm:p-4 p-3 rounded-xl w-full sm:w-[32%]  flex flex-col sm:gap-3 gap-1 " +
                `${title === "You Gave" ?
                  "bg-[#b9f8cf] light-green-bg" : title === "You Got"
                    ? "bg-[#ffccd3] light-red-bg" : "bg-[#d1d5dc] light-gray-bg"}`
              }>
              <p className="text-center sm:text-sm text-xs">{title}</p>
              <p className="font-medium sm:text-lg text-sm text-center">{formatAmount(price)}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default TransactionsDetails