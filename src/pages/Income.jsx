import { useState } from "react";
import IncomeDetails from "../components/IncomeDetails";
import Navebar from "./Navebar";
import { incomeData } from "../assets/incomeExpenseData";

const Income = () => {
  const [income, setIncome] = useState(incomeData);
  const [title, setTitle] = useState("");
  const [amaunt, setAmaunt] = useState(0);
  const arrayOfId = income.map((itm) => itm.id);
  const newIdNumber = Math.max(...arrayOfId) + 1;

  const total = () => {
    const arrayOfIncomeAmaunt = income.map((itm) => itm.incomeAmaunt);
    const totalIncome = arrayOfIncomeAmaunt.reduce(
      (ttl, curr) => parseInt(curr) + ttl,
      0
    );
    return totalIncome;
  };

  const addIncomeHandler = () => {
    if (title !== "" && amaunt !== 0) {
      setIncome([...income, { id: newIdNumber, title, incomeAmaunt: amaunt }]);
      setAmaunt(0);
      setTitle("");
    } else {
      alert("Enter Data");
    }
  };
  return (
    <div>
      <div className=" text-center w-auto mx-auto ">
        <Navebar />

        <h1 className=" text-3xl"> Income Tracker Page</h1>
      </div>
      <div className=" w-4/5 mx-auto my-16 shadow h-64">
        <table className=" text-center mx-auto ">
          <tr className=" mx-8 bg-gray-50 hover:bg-gray-100 border-e-blue-400 ">
            <th className=" px-4">Serial No</th>
            <th className=" px-8">Description</th>
            <th className=" px-8">Amaunt</th>
          </tr>
          {income.map((itm) => (
            <IncomeDetails key={itm.id} itm={itm} />
          ))}
        </table>
        <p className="text-center my-10">Total Income : {total()}</p>
        <div className="my-10 w-4/5 mx-auto text-center bg-gray-400 py-9 rounded ">
          <h1 className=" text-2xl p-4">Enter your Income</h1>
          <label className=" m-4" htmlFor="income">
            Income Title:
          </label>
          <br />
          <input
            value={title}
            className=" bg-gray-100 mb-3 p-1"
            id="income"
            type="text"
            placeholder="Incume Details"
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <label className=" m-4" htmlFor="amaunt">
            Inter your Income Amaunt :
          </label>
          <br />
          <input
            value={amaunt}
            className=" bg-gray-100 mb-3 p-1"
            id="amaunt"
            type="number"
            placeholder="Amaunt"
            onChange={(e) => setAmaunt(e.target.value)}
          />
          <br />
          <button
            onClick={addIncomeHandler}
            className=" bg-green-100 p-2 hover:bg-green-200  rounded mt-4"
          >
            Add Income
          </button>
        </div>
      </div>
    </div>
  );
};

export default Income;
