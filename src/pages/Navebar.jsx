import { Link } from "react-router-dom";

const Navebar = () => {
  return (
    <div className=" bg-slate-300 text-xl">
      <ul className=" flex text-center mx-auto w-fit ">
        <li className=" m-4 hover:text-white hover:bg-slate-400 rounded p-4 duration-500">
          <Link to="/">Home Page</Link>
        </li>
        <li className=" m-4 hover:text-white hover:bg-slate-400 rounded p-4 duration-500">
          <Link to="/income">Income Page</Link>
        </li>
        <li className=" m-4 hover:text-white hover:bg-slate-400 rounded p-4 duration-500">
          <Link to="/expense">Expense Page</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navebar;
