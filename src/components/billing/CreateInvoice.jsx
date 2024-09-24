import React from "react";
import { MdOutlineAddBox } from "react-icons/md";
import percentage from "../../assets/percentage-circle.svg";
import pen from "../../assets/pen.svg";
import { Bs1Circle } from "react-icons/bs";
import { Bs2Circle } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ellipse from "../../assets/ellipse.svg";

const CreateInvoice = () => {
  const navigate = useNavigate();

  const PreviewButton = () => {
    navigate("/preview");
  };
  return (
    <div className="bg-[#FAFAFA]">
      {/* First Row */}
      <div className="w-[95.91%] p-6 flex gap-6">
        <div className="flex flex-col gap-3 w-[78.63%]">
          <h2 className="text-[#333843] font-inter text-2xl font-bold">
            Create Invoice
          </h2>
          <p className="text-[#667085] font-inter text-[16px] font-normal leading-[140%] tracking-[0.08px]">
            Welcome to Billing desk
          </p>
        </div>
      </div>

      <div className="pl-14 pr-16 py-5">
        {/* Second row */}

        <div className="flex justify-between ">
          <div className="flex flex-col gap-4 w-[78.63%]">
            <h2 className="text-[#333843] font-inter text-[16px] font-semibold leading-[140%] tracking-[0.08px]">
              Add Invoice Details
            </h2>
            <div className="flex flex-col gap-2">
              <label className="text-[#333843] font-inter text-[14px] font-normal leading-[140%] tracking-[0.07px]">
                Invoice number
              </label>
              <input
                type="number"
                className="w-[209px] h-[38px] border border-[#C9C9C9] rounded-md bg-[#FFFFFF] focus:outline-none text-center"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#333843] font-inter text-[14px] font-normal leading-[140%] tracking-[0.07px]">
                Invoice date
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  className="w-[50px] h-[38px] flex-shrink border border-[#C9C9C9] rounded-md bg-[#FFFFFF] focus:outline-none text-center"
                />
                <input
                  type="number"
                  className="w-[50px] h-[38px] flex-shrink border border-[#C9C9C9] rounded-md bg-[#FFFFFF] focus:outline-none text-center"
                />
                <input
                  type="number"
                  className="w-[85px] h-[38px] flex-shrink border border-[#C9C9C9] rounded-md bg-[#FFFFFF] focus:outline-none text-center"
                />
              </div>
            </div>
          </div>
          <div className="w-[180px] h-[180px] flex-shrink rounded-lg border border-[#E6B2FF] bg-[#F8EAFF] flex justify-center items-center text-[#3338436E]">
            Brand Logo
          </div>
        </div>

        {/* Third Row */}

        <div className="flex justify-between mt-9 gap-5">
          <div className="w-[49.05%] rounded-xl border border-[#E0E2E7] bg-white p-8">
            <div>
              <h2 className="text-[#333843] font-inter text-[16px] font-semibold leading-[140%] tracking-[0.08px]">
                Billed By
              </h2>
            </div>

            <div className="flex flex-col gap-4 mt-5">
              <input
                type="text"
                placeholder="Your Bussiness name"
                className="w-full border-b-[1px] border-b-[#888888] focus:outline-none p-2"
              />
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Mobile Number"
                  className="w-full border-b-[1px] border-b-[#888888] focus:outline-none p-2"
                />
                <input
                  type="email"
                  placeholder="Add Email "
                  className="w-full border-b-[1px] border-b-[#888888] focus:outline-none p-2"
                />
              </div>
              <input
                type="text"
                placeholder="GST Optional"
                className="w-1/2 border-b-[1px] border-b-[#888888] focus:outline-none p-2"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full border-b-[1px] border-b-[#888888] focus:outline-none p-2"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="City optional"
                  className="w-full border-b-[1px] border-b-[#888888] focus:outline-none p-2"
                />
                <input
                  type="number"
                  placeholder="Postal Code "
                  className="w-full border-b-[1px] border-b-[#888888] focus:outline-none p-2"
                />
              </div>
              <input
                type="text"
                placeholder="State "
                className="w-1/2 border-b-[1px] border-b-[#888888] focus:outline-none p-2"
              />
            </div>
            <div className="flex gap-2 mt-9">
              <button type="checkbox" className="w-6 h-6 text-[#888888]">
                <MdOutlineAddBox />
              </button>
              <span className="text-[#9C9C9C] font-inter text-[14px] font-normal leading-[140%] tracking-[0.07px]">
                Add Custom Fields
              </span>
            </div>
          </div>
          <div className="w-[49.05%] rounded-xl border border-[#E0E2E7] bg-white p-8">
            <div>
              <h2 className="text-[#333843] font-inter text-[16px] font-semibold leading-[140%] tracking-[0.08px]">
                Billed To
              </h2>
            </div>

            <div className="flex flex-col gap-4 mt-5">
              <input
                type="text"
                placeholder="Your Bussiness name"
                className="w-full border-b-[1px] border-b-[#888888] focus:outline-none p-2"
              />
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Mobile Number"
                  className="w-full border-b-[1px] border-b-[#888888] focus:outline-none p-2"
                />
                <input
                  type="email"
                  placeholder="Add Email "
                  className="w-full border-b-[1px] border-b-[#888888] focus:outline-none p-2"
                />
              </div>
              <input
                type="text"
                placeholder="GST Optional"
                className="w-1/2 border-b-[1px] border-b-[#888888] focus:outline-none p-2"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full border-b-[1px] border-b-[#888888] focus:outline-none p-2"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="City optional"
                  className="w-full border-b-[1px] border-b-[#888888] focus:outline-none p-2"
                />
                <input
                  type="number"
                  placeholder="Postal Code "
                  className="w-full border-b-[1px] border-b-[#888888] focus:outline-none p-2"
                />
              </div>
              <input
                type="text"
                placeholder="State "
                className="w-1/2 border-b-[1px] border-b-[#888888] focus:outline-none p-2"
              />
            </div>
            <div className="flex gap-2 mt-9">
              <button type="checkbox" className="w-6 h-6 text-[#888888]">
                <MdOutlineAddBox />
              </button>
              <span className="text-[#9C9C9C] font-inter text-[14px] font-normal leading-[140%] tracking-[0.07px]">
                Add Custom Fields
              </span>
            </div>
          </div>
        </div>
        {/* Fourth Row */}
        <div className=" bg-white rounded-xl border border-[#e0e2e7] mt-5">
          <table className="w-full">
            <thead className="bg-[#1EB386]">
              <tr className=" text-white font-inter text-[14px] font-semibold ">
                <th className="w-[10%] text-start p-5">SL No</th>
                <th className="w-[30%] text-start p-5">Item</th>
                <th className="w-[15%] text-start p-5">Qty</th>
                <th className="w-[15%] text-start p-5">Rate</th>
                <th className="w-[15%] text-start p-5">GST</th>
                <th className="w-[15%] text-start p-5">Amount</th>
              </tr>
            </thead>
            <tbody className="text-[14px]">
              <tr>
                <td className=" p-5">
                  <input
                    type="text"
                    placeholder="Add item"
                    className="w-full border-b border-b-[#888888] focus:outline-none "
                  />
                </td>
                <td className="p-5">
                  <input
                    type="text"
                    placeholder="Add item"
                    className="w-full border-b-[1px] border-b-[#888888] focus:outline-none py-2"
                  />
                </td>
                <td className="p-5 w-3">
                  <input
                    type="text"
                    placeholder="Add item"
                    className="w-full border-b-[1px] border-b-[#888888] focus:outline-none py-2"
                  />
                </td>
                <td className="p-5 w-3">
                  <input
                    type="text"
                    placeholder="Add item"
                    className="w-full border-b-[1px] border-b-[#888888] focus:outline-none py-2"
                  />
                </td>
                <td className="p-5">
                  <input
                    type="text"
                    placeholder="Add item"
                    className="w-full border-b-[1px] border-b-[#888888] focus:outline-none py-2"
                  />
                </td>
                <td className="p-5">
                  <input
                    type="text"
                    placeholder="Add item"
                    className="w-full border-b-[1px] border-b-[#888888] focus:outline-none py-2"
                  />
                </td>
              </tr>
              <tr>
                <td className=" p-5">
                  <input
                    type="text"
                    placeholder="Add item"
                    className="w-full border-b border-b-[#888888] focus:outline-none "
                  />
                </td>
                <td className="p-5">
                  <input
                    type="text"
                    placeholder="Add item"
                    className="w-full border-b-[1px] border-b-[#888888] focus:outline-none py-2"
                  />
                </td>
                <td className="p-5 w-3">
                  <input
                    type="text"
                    placeholder="Add item"
                    className="w-full border-b-[1px] border-b-[#888888] focus:outline-none py-2"
                  />
                </td>
                <td className="p-5 w-3">
                  <input
                    type="text"
                    placeholder="Add item"
                    className="w-full border-b-[1px] border-b-[#888888] focus:outline-none py-2"
                  />
                </td>
                <td className="p-5">
                  <input
                    type="text"
                    placeholder="Add item"
                    className="w-full border-b-[1px] border-b-[#888888] focus:outline-none py-2"
                  />
                </td>
                <td className="p-5">
                  <input
                    type="text"
                    placeholder="Add item"
                    className="w-full border-b-[1px] border-b-[#888888] focus:outline-none py-2"
                  />
                </td>
              </tr>
              <tr>
                <td className=" p-5">
                  <input
                    type="text"
                    placeholder="Add item"
                    className="w-full border-b border-b-[#888888] focus:outline-none "
                  />
                </td>
                <td className="p-5">
                  <input
                    type="text"
                    placeholder="Add item"
                    className="w-full border-b-[1px] border-b-[#888888] focus:outline-none py-2"
                  />
                </td>
                <td className="p-5 w-3">
                  <input
                    type="text"
                    placeholder="Add item"
                    className="w-full border-b-[1px] border-b-[#888888] focus:outline-none py-2"
                  />
                </td>
                <td className="p-5 w-3">
                  <input
                    type="text"
                    placeholder="Add item"
                    className="w-full border-b-[1px] border-b-[#888888] focus:outline-none py-2"
                  />
                </td>
                <td className="p-5">
                  <input
                    type="text"
                    placeholder="Add item"
                    className="w-full border-b-[1px] border-b-[#888888] focus:outline-none py-2"
                  />
                </td>
                <td className="p-5">
                  <input
                    type="text"
                    placeholder="Add item"
                    className="w-full border-b-[1px] border-b-[#888888] focus:outline-none py-2"
                  />
                </td>
              </tr>
              <tr>
                <td className=" p-5">
                  <input
                    type="text"
                    placeholder="Add item"
                    className="w-full border-b border-b-[#888888] focus:outline-none "
                  />
                </td>
                <td className="p-5">
                  <input
                    type="text"
                    placeholder="Add item"
                    className="w-full border-b-[1px] border-b-[#888888] focus:outline-none py-2"
                  />
                </td>
                <td className="p-5 w-3">
                  <input
                    type="text"
                    placeholder="Add item"
                    className="w-full border-b-[1px] border-b-[#888888] focus:outline-none py-2"
                  />
                </td>
                <td className="p-5 w-3">
                  <input
                    type="text"
                    placeholder="Add item"
                    className="w-full border-b-[1px] border-b-[#888888] focus:outline-none py-2"
                  />
                </td>
                <td className="p-5">
                  <input
                    type="text"
                    placeholder="Add item"
                    className="w-full border-b-[1px] border-b-[#888888] focus:outline-none py-2"
                  />
                </td>
                <td className="p-5">
                  <input
                    type="text"
                    placeholder="Add item"
                    className="w-full border-b-[1px] border-b-[#888888] focus:outline-none py-2"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex items-center gap-1 p-5">
            <button type="checkbox" className="w-6 h-6 text-[#888888]">
              <MdOutlineAddBox />
            </button>{" "}
            <span className="text-[#9C9C9C] font-inter text-[14px] font-normal leading-[140%] tracking-[0.07px]">
              Add Custom Fields
            </span>
          </div>
        </div>
        {/* Fifth Row */}
        <div className="flex justify-between mt-5">
          <div className="flex gap-5">
            <button className="w-[138px] h-10 flex justify-center items-center gap-[10px] py-[10px] px-4 rounded-[4px] border border-[#7838FF] bg-white">
              <img src={percentage} alt="percentage-icon" className="w-4 h-4" />
              <p className="text-black text-center font-inter text-[14px] font-normal leading-[140%] tracking-[0.07px]">
                Edit GST
              </p>
            </button>
            <button className="h-10 flex justify-center items-center gap-[10px] py-[10px] px-4 rounded-[4px] border border-[#7838FF] bg-white">
              <img src={percentage} alt="percentage-icon" className="w-4 h-4" />
              <p className="text-black text-center font-inter text-[14px] font-normal leading-[140%] tracking-[0.07px]">
                Add Column
              </p>
            </button>
          </div>

          <div className="flex flex-col justify-between items-center">
            <div className="w-[309px] mt-[18px]">
              <div className="flex justify-between">
                <h2 className="text-[#333843] font-inter text-[16px] font-semibold leading-[140%] tracking-[0.08px]">
                  Amount
                </h2>
                <h2 className="text-[#333843] font-inter text-[16px] font-semibold leading-[140%] tracking-[0.08px]">
                  550
                </h2>
              </div>
              <div className="flex justify-between mt-7">
                <h2 className="text-[#333843] font-inter text-[16px] font-semibold leading-[140%] tracking-[0.08px]">
                  GST
                </h2>
                <h2 className="text-[#333843] font-inter text-[16px] font-semibold leading-[140%] tracking-[0.08px]">
                  28%
                </h2>
              </div>
              <div className="flex justify-end mt-[38px]">
                <input
                  placeholder="Enter discount"
                  className="text-[#4C4E52] font-inter font-normal p-2 w-[125px] text-[16px] border-b-2 border-dotted border-[#4C4E52] focus:outline-none text-center"
                />
              </div>
              <hr className="mt-[30px] border border-[#898989]" />
              <div className="flex justify-between mt-5">
                <h2 className="text-[#333843] font-inter text-2xl font-semibold leading-[140%] tracking-[0.08px]">
                  Total
                </h2>
                <h2 className="text-[#333843] font-inter text-2xl font-semibold leading-[140%] tracking-[0.08px]">
                  850
                </h2>
              </div>
              <hr className="mt-5 border border-[#898989]" />
              <div></div>
              <button className="w-full mt-9 h-10 flex justify-center items-center gap-[10px] py-[10px] px-4 rounded-[4px] border border-[#7838FF] bg-white">
                <img src={pen} alt="percentage-icon" className="w-4 h-4" />
                <p className="text-black text-center font-inter text-[14px] font-normal leading-[140%] tracking-[0.07px]">
                  Add Signature
                </p>
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-5 mt-[26px]">
          <button className="w-[200px] h-10 flex justify-center items-center gap-[10px] py-[10px] px-4 rounded-[4px] border border-[#7838FF] bg-white">
            <p className="text-black text-center font-inter text-[14px] font-normal leading-[140%] tracking-[0.07px]">
              Add Placeholder
            </p>
          </button>
          <button className="w-[200px] h-10 flex justify-center items-center gap-[10px] py-[10px] px-4 rounded-[4px] border border-[#7838FF] bg-white">
            <img src={percentage} alt="percentage-icon" className="w-4 h-4" />
            <p className="text-black text-center font-inter text-[14px] font-normal leading-[140%] tracking-[0.07px]">
              Add Attachments
            </p>
          </button>
        </div>

        <div className="flex justify-center items-center mt-20">
          <button className="w-[200px] h-10 flex justify-center items-center gap-[10px] py-[10px] px-4 rounded-lg border border-[#DB4210] bg-[#DB4210]" onClick={PreviewButton}>
            <p className="text-white text-center font-inter text-[14px] font-semibold leading-[140%] tracking-[0.07px]">
              SAVE & CONTINUE
            </p>
          </button>
        </div>

        {/* hr */}
        <hr className="mt-[60px] border border-[#898989]" />
        {/* Bottom Row */}
        <div className="flex justify-center gap-[100px] mt-[50px] mb-[77px]">
          <button className="flex gap-4 items-center">
            <div className="relative w-6 h-6">
              <img src={ellipse} alt="ellipse-icon" className="w-full h-full" />
              <span className="absolute inset-0 flex justify-center items-center text-white text-sm font-bold">
                1
              </span>
            </div>
            <p>Add Invoice details</p>
            <MdKeyboardArrowRight />
          </button>
          <button className="flex gap-4 items-center" onClick={PreviewButton}>
            <Bs2Circle className="w-6 h-6 text-[#9C9C9C]" />
            <p className="text-[#9C9C9C] text-center font-inter text-[14px] font-normal leading-[140%] tracking-[0.07px]">
              Preview and Send
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateInvoice;
