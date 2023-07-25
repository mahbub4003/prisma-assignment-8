import { useState } from "react";
import Navebar from "./Navebar";
import { expenseData } from "../assets/incomeExpenseData";
import ExpenseDetails from "../components/ExpenseDetails";

const Expense = () => {
  const [expense, setExpense] = useState(expenseData);
  const [title, setTitle] = useState("");
  const [amaunt, setAmaunt] = useState(0);
  const arrayOfId = expense.map((itm) => itm.id);
  const newIdNumber = Math.max(...arrayOfId) + 1;

  const total = () => {
    const arrayOfExpenseAmaunt = expense.map((itm) => itm.expenseAmaunt);
    const totalExpenseAmaunt = arrayOfExpenseAmaunt.reduce(
      (ttl, curr) => curr + ttl,
      0
    );
    return totalExpenseAmaunt;
  };

  const addExpenseHandler = () => {
    if (title !== "" && amaunt !== 0) {
      setExpense([
        ...expense,
        { id: newIdNumber, title, expenseAmaunt: parseInt(amaunt) },
      ]);
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

        <h1 className=" text-3xl text-red-400"> Expense Tracker Page</h1>
      </div>
      <div className=" w-4/5 mx-auto my-16 shadow h-64">
        <table className=" text-center mx-auto ">
          <tr className=" mx-8 bg-gray-50 hover:bg-gray-100 border-e-blue-400 ">
            <th className=" px-4">Serial No</th>
            <th className=" px-8">Description</th>
            <th className=" px-8">Amaunt</th>
          </tr>
          {expense.map((itm) => (
            <ExpenseDetails key={itm.id} itm={itm} />
          ))}
        </table>
        <p className="text-center my-10">Total Expense : {total()}</p>
        <div className=" my-10 w-4/5 mx-auto text-center bg-gray-400 py-9 rounded">
          <h1 className=" text-2xl p-4">Enter your Expense</h1>
          <label className=" " htmlFor="income">
            Expense Title:
          </label>
          <br />
          <input
            required
            value={title}
            className=" bg-gray-100 mb-3 p-1"
            id="income"
            type="text"
            placeholder="Incume Details"
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <label className="" htmlFor="amaunt">
            Inter your Expense Amaunt :
          </label>
          <br />
          <input
            required
            value={amaunt}
            className=" bg-gray-100 mb-3 p-1"
            id="amaunt"
            type="number"
            placeholder="Amaunt"
            onChange={(e) => setAmaunt(e.target.value)}
          />
          <br />
          <button
            onClick={addExpenseHandler}
            className=" bg-green-100 p-2 hover:bg-green-200  rounded mt-4"
          >
            Add Expense
          </button>
        </div>
      </div>
    </div>
  );
};

export default Expense;
