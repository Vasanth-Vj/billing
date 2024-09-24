import React from "react";
import search from "../../assets/search.svg";
import view from "../../assets/view.svg";
import bell from "../../assets/bell.svg";
import tick from "../../assets/tick.svg";
import dots from "../../assets/dots.svg";
import { useNavigate } from "react-router-dom";

const QuotesAndInvoices = () => {
  const navigate = useNavigate();

  const ViewInvoice = () => {
    navigate("/main/view-invoice");
  };
  return (
    <div className="bg-[#FAFAFA]">
      {/* First Row */}
      <div className="w-[95.91%] p-6 flex gap-6">
        <div className="flex flex-col gap-3 w-[78.63%]">
          <h2 className="text-[#333843] font-inter text-2xl font-bold">
            All Quotes and Invoices
          </h2>
          <p className="text-[#667085] font-inter text-[16px] font-normal leading-[140%] tracking-[0.08px]">
            Manage your quotes and invoices
          </p>
        </div>
      </div>

      <div className=" px-[46px] py-5 mb-[500px]">
        {/* Second row */}
        <div className="flex flex-col gap-5">
          <div className="flex justify-between">
            <h2 className="text-[#333843] font-inter text-[16px] font-semibold leading-[140%] tracking-[0.08px]">
              Quotes and Invoices
            </h2>
            <div className="flex gap-4 items-center w-[349px] pt-[10px] pr-[151px] pb-[10px] pl-[10px] rounded-lg border border-[#D7D7D7] bg-white ">
              <img src={search} alt="search-icon" className="w-6 h-6" />
              <input
                type="search"
                placeholder="Search client, invoice no,"
                className="focus:outline-none"
              />
            </div>
          </div>

          <div className="rounded-xl border border-[#D7D7D7] bg-[#FBFBFB]">
            <table className="w-full">
              <thead className="bg-[#F7F7F7] p-5">
                <tr className="py-5 text-[#A3A3A3] font-inter text-[14px] font-bold uppercase ">
                  <th className="text-start p-5">Invoice No #</th>
                  <th className="text-start p-5 ml-[55px]">Billed to</th>
                  <th className="text-start p-5 ml-[95px]">Amount</th>
                  <th className="text-start p-5 ml-[72px]">Status</th>
                  <th className="text-start p-5 ml-[99px]">Due Amount</th>
                  <th className="text-center p-5">Action</th>
                </tr>
              </thead>
              <tbody className="text-[14px]">
                <tr className="border-b-2 border-[#E4E4E4]">
                  <td className=" p-5 ">
                    <p className="text-[#464E5B] font-SfPro text-[14px] font-bold text-start">
                      202409
                    </p>
                  </td>
                  <td className="  p-5">
                    <p className="text-[#464E5B] font-SfPro text-[14px] font-bold text-start">
                      Customer name
                    </p>
                  </td>
                  <td className=" p-5">
                    <p className="text-[#464E5B] font-SfPro text-[14px] font-bold text-start">
                      Rs.89,OOO
                    </p>
                  </td>
                  <td className="p-5 flex justify-start">
                    <button className="text-[#48BB78] font-inter text-[12px] font-bold p-[10px] rounded-[4px] border border-[#48BB78] bg-[#48BB781A]">
                      Paid
                    </button>
                  </td>
                  <td className="  p-5">
                    <p className="text-[#464E5B] font-SfPro text-[14px] font-bold text-start">
                      Rs.89,OOO
                    </p>
                  </td>
                  <td className="  p-5 flex justify-start gap-10">
                    <button
                      className="flex flex-col items-center gap-1 "
                      onClick={ViewInvoice}
                    >
                      <img src={view} alt="view icon" className="w-5 h-5" />
                      <p className="text-[#464E5B] font-SfPro text-[14px] font-normal">
                        View
                      </p>
                    </button>
                    <button className="flex flex-col items-center gap-1">
                      <img src={bell} alt="view icon" className="w-5 h-5" />
                      <p className="text-[#464E5B] font-SfPro text-[14px] font-normal">
                        Remind
                      </p>
                    </button>
                    <button className="flex flex-col items-center gap-1">
                      <img src={tick} alt="view icon" className="w-5 h-5" />
                      <p className="text-[#464E5B] font-SfPro text-[14px] font-normal">
                        Paid
                      </p>
                    </button>
                    <button className="flex flex-col items-center gap-1">
                      <img src={dots} alt="view icon" className="w-5 h-5" />
                      <p className="text-[#464E5B] font-SfPro text-[14px] font-normal">
                        More
                      </p>
                    </button>
                  </td>
                </tr>
                <tr className="border-b-2 border-gray-300">
                  <td className=" p-5 ">
                    <p className="text-[#464E5B] font-SfPro text-[14px] font-bold text-start">
                      202409
                    </p>
                  </td>
                  <td className="  p-5">
                    <p className="text-[#464E5B] font-SfPro text-[14px] font-bold text-start">
                      Customer name
                    </p>
                  </td>
                  <td className=" p-5">
                    <p className="text-[#464E5B] font-SfPro text-[14px] font-bold text-start">
                      Rs.89,OOO
                    </p>
                  </td>
                  <td className="p-5 flex justify-start">
                    <button className="text-[#FE8C5B] font-inter text-[12px] font-bold p-[10px] rounded-[4px] border border-[#FE8C5B] bg-[#FF7C431A]">
                      Pending
                    </button>
                  </td>
                  <td className="  p-5">
                    <p className="text-[#464E5B] font-SfPro text-[14px] font-bold text-start">
                      Rs.89,OOO
                    </p>
                  </td>
                  <td className="  p-5 flex justify-start gap-10">
                    <button
                      className="flex flex-col items-center gap-1 "
                      onClick={ViewInvoice}
                    >
                      <img src={view} alt="view icon" className="w-5 h-5" />
                      <p className="text-[#464E5B] font-SfPro text-[14px] font-normal">
                        View
                      </p>
                    </button>
                    <button className="flex flex-col items-center gap-1">
                      <img src={bell} alt="view icon" className="w-5 h-5" />
                      <p className="text-[#464E5B] font-SfPro text-[14px] font-normal">
                        Remind
                      </p>
                    </button>
                    <button className="flex flex-col items-center gap-1">
                      <img src={tick} alt="view icon" className="w-5 h-5" />
                      <p className="text-[#464E5B] font-SfPro text-[14px] font-normal">
                        Paid
                      </p>
                    </button>
                    <button className="flex flex-col items-center gap-1">
                      <img src={dots} alt="view icon" className="w-5 h-5" />
                      <p className="text-[#464E5B] font-SfPro text-[14px] font-normal">
                        More
                      </p>
                    </button>
                  </td>
                </tr>
                <tr className="border-b-2 border-[#E4E4E4]">
                  <td className=" p-5 ">
                    <p className="text-[#464E5B] font-SfPro text-[14px] font-bold text-start">
                      202409
                    </p>
                  </td>
                  <td className="  p-5">
                    <p className="text-[#464E5B] font-SfPro text-[14px] font-bold text-start">
                      Customer name
                    </p>
                  </td>
                  <td className=" p-5">
                    <p className="text-[#464E5B] font-SfPro text-[14px] font-bold text-start">
                      Rs.89,OOO
                    </p>
                  </td>
                  <td className="p-5 flex justify-start">
                    <button className="text-[#2189DA] font-inter text-[12px] font-bold p-[10px] rounded-[4px] border border-[#2189DA] bg-[#0078D51A]">
                      Partialy Paid
                    </button>
                  </td>
                  <td className="  p-5">
                    <p className="text-[#464E5B] font-SfPro text-[14px] font-bold text-start">
                      Rs.89,OOO
                    </p>
                  </td>
                  <td className="  p-5 flex justify-start gap-10">
                    <button
                      className="flex flex-col items-center gap-1 "
                      onClick={ViewInvoice}
                    >
                      <img src={view} alt="view icon" className="w-5 h-5" />
                      <p className="text-[#464E5B] font-SfPro text-[14px] font-normal">
                        View
                      </p>
                    </button>
                    <button className="flex flex-col items-center gap-1">
                      <img src={bell} alt="view icon" className="w-5 h-5" />
                      <p className="text-[#464E5B] font-SfPro text-[14px] font-normal">
                        Remind
                      </p>
                    </button>
                    <button className="flex flex-col items-center gap-1">
                      <img src={tick} alt="view icon" className="w-5 h-5" />
                      <p className="text-[#464E5B] font-SfPro text-[14px] font-normal">
                        Paid
                      </p>
                    </button>
                    <button className="flex flex-col items-center gap-1">
                      <img src={dots} alt="view icon" className="w-5 h-5" />
                      <p className="text-[#464E5B] font-SfPro text-[14px] font-normal">
                        More
                      </p>
                    </button>
                  </td>
                </tr>
                <tr className="border-b-2 border-[#E4E4E4]">
                  <td className=" p-5 ">
                    <p className="text-[#464E5B] font-SfPro text-[14px] font-bold text-start">
                      202409
                    </p>
                  </td>
                  <td className="  p-5">
                    <p className="text-[#464E5B] font-SfPro text-[14px] font-bold text-start">
                      Customer name
                    </p>
                  </td>
                  <td className=" p-5">
                    <p className="text-[#464E5B] font-SfPro text-[14px] font-bold text-start">
                      Rs.89,OOO
                    </p>
                  </td>
                  <td className="p-5 flex justify-start">
                    <button className="text-[#8E8E8E] font-inter text-[12px] font-bold p-[10px] rounded-[4px] border border-[#8E8E8E] bg-[#C5C5C51A]">
                      Draft
                    </button>
                  </td>
                  <td className="  p-5">
                    <p className="text-[#464E5B] font-SfPro text-[14px] font-bold text-start">
                      -
                    </p>
                  </td>
                  <td className="  p-5 flex justify-start gap-10">
                    <button
                      className="flex flex-col items-center gap-1 "
                      onClick={ViewInvoice}
                    >
                      <img src={view} alt="view icon" className="w-5 h-5" />
                      <p className="text-[#464E5B] font-SfPro text-[14px] font-normal">
                        View
                      </p>
                    </button>
                    <button className="flex flex-col items-center gap-1">
                      <img src={bell} alt="view icon" className="w-5 h-5" />
                      <p className="text-[#464E5B] font-SfPro text-[14px] font-normal">
                        Remind
                      </p>
                    </button>
                    <button className="flex flex-col items-center gap-1">
                      <img src={tick} alt="view icon" className="w-5 h-5" />
                      <p className="text-[#464E5B] font-SfPro text-[14px] font-normal">
                        Paid
                      </p>
                    </button>
                    <button className="flex flex-col items-center gap-1">
                      <img src={dots} alt="view icon" className="w-5 h-5" />
                      <p className="text-[#464E5B] font-SfPro text-[14px] font-normal">
                        More
                      </p>
                    </button>
                  </td>
                </tr>
                <tr className="border-b-2 border-[#E4E4E4]">
                  <td className=" p-5 ">
                    <p className="text-[#464E5B] font-SfPro text-[14px] font-bold text-start">
                      202409
                    </p>
                  </td>
                  <td className="  p-5">
                    <p className="text-[#464E5B] font-SfPro text-[14px] font-bold text-start">
                      Customer name
                    </p>
                  </td>
                  <td className=" p-5">
                    <p className="text-[#464E5B] font-SfPro text-[14px] font-bold text-start">
                      Rs.89,OOO
                    </p>
                  </td>
                  <td className="p-5 flex justify-start">
                    <button className="text-[#FE3737] font-inter text-[12px] font-bold p-[10px] rounded-[4px] border border-[#FE4141] bg-[#FF1A1A1A]">
                      Overdue
                    </button>
                  </td>
                  <td className="  p-5">
                    <p className="text-[#464E5B] font-SfPro text-[14px] font-bold text-start">
                      Rs.89,OOO
                    </p>
                  </td>
                  <td className="  p-5 flex justify-start gap-10">
                    <button
                      className="flex flex-col items-center gap-1 "
                      onClick={ViewInvoice}
                    >
                      <img src={view} alt="view icon" className="w-5 h-5" />
                      <p className="text-[#464E5B] font-SfPro text-[14px] font-normal">
                        View
                      </p>
                    </button>
                    <button className="flex flex-col items-center gap-1">
                      <img src={bell} alt="view icon" className="w-5 h-5" />
                      <p className="text-[#464E5B] font-SfPro text-[14px] font-normal">
                        Remind
                      </p>
                    </button>
                    <button className="flex flex-col items-center gap-1">
                      <img src={tick} alt="view icon" className="w-5 h-5" />
                      <p className="text-[#464E5B] font-SfPro text-[14px] font-normal">
                        Paid
                      </p>
                    </button>
                    <button className="flex flex-col items-center gap-1">
                      <img src={dots} alt="view icon" className="w-5 h-5" />
                      <p className="text-[#464E5B] font-SfPro text-[14px] font-normal">
                        More
                      </p>
                    </button>
                  </td>
                </tr>
                <tr className="border-b-2 border-[#E4E4E4]">
                  <td className=" p-5 ">
                    <p className="text-[#464E5B] font-SfPro text-[14px] font-bold text-start">
                      202409
                    </p>
                  </td>
                  <td className="  p-5">
                    <p className="text-[#464E5B] font-SfPro text-[14px] font-bold text-start">
                      Customer name
                    </p>
                  </td>
                  <td className=" p-5">
                    <p className="text-[#464E5B] font-SfPro text-[14px] font-bold text-start">
                      Rs.89,OOO
                    </p>
                  </td>
                  <td className="p-5 flex justify-start">
                    <button className="text-[#48BB78] font-inter text-[12px] font-bold p-[10px] rounded-[4px] border border-[#48BB78] bg-[#48BB781A]">
                      Paid
                    </button>
                  </td>
                  <td className="  p-5">
                    <p className="text-[#464E5B] font-SfPro text-[14px] font-bold text-start">
                      Rs.89,OOO
                    </p>
                  </td>
                  <td className="  p-5 flex justify-start gap-10">
                    <button
                      className="flex flex-col items-center gap-1 "
                      onClick={ViewInvoice}
                    >
                      <img src={view} alt="view icon" className="w-5 h-5" />
                      <p className="text-[#464E5B] font-SfPro text-[14px] font-normal">
                        View
                      </p>
                    </button>
                    <button className="flex flex-col items-center gap-1">
                      <img src={bell} alt="view icon" className="w-5 h-5" />
                      <p className="text-[#464E5B] font-SfPro text-[14px] font-normal">
                        Remind
                      </p>
                    </button>
                    <button className="flex flex-col items-center gap-1">
                      <img src={tick} alt="view icon" className="w-5 h-5" />
                      <p className="text-[#464E5B] font-SfPro text-[14px] font-normal">
                        Paid
                      </p>
                    </button>
                    <button className="flex flex-col items-center gap-1">
                      <img src={dots} alt="view icon" className="w-5 h-5" />
                      <p className="text-[#464E5B] font-SfPro text-[14px] font-normal">
                        More
                      </p>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotesAndInvoices;
