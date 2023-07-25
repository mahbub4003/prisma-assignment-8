const ExpenseDetails = ({ itm }) => {
  return (
    <>
      <tr className=" text-red-400 bg-gray-50 hover:bg-gray-100 ">
        <td>{itm?.id}</td>
        <td className=" text-start">{itm.title}</td>
        <td>{itm.expenseAmaunt} TK</td>
      </tr>
    </>
  );
};

export default ExpenseDetails;
