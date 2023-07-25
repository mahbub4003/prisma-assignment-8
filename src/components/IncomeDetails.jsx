const IncomeDetails = ({ itm }) => {
  return (
    <>
      <tr className="  bg-gray-50 hover:bg-gray-100 ">
        <td>{itm?.id}</td>
        <td className=" text-start">{itm.title}</td>
        <td>{itm.incomeAmaunt} TK</td>
      </tr>
    </>
  );
};

export default IncomeDetails;
