import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Logo from "../../assets/Logo.png";
import { BsClockHistory } from "react-icons/bs";
import { LuSendHorizonal } from "react-icons/lu";

const ViewInvoice = () => {
  return (
     <div className="bg-[#FAFAFA]">
      {/* First Row */}
      <div className="w-[95.91%] p-6 flex flex-col lg:flex-row justify-between gap-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-[#333843] font-inter text-2xl font-bold">
            Invoice #2024-09-0001
          </h2>
          <p className="text-[#667085] font-inter text-[16px] font-normal leading-[140%] tracking-[0.08px]">
            Paid on August 27, 2024
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-3 mt-4 lg:mt-0">
          <button className="w-full lg:w-auto flex items-center justify-around py-[10px] px-6 rounded-lg border border-[#E0E2E7] bg-white text-[#333843] font-inter text-[14px] not-italic font-semibold leading-[140%] tracking-[0.07px]">
            <p>More Options</p>
            <MdKeyboardArrowDown className="w-5 h-5 text-[#667085]" />
          </button>

          <button className="w-full lg:w-auto flex items-center justify-around py-[10px] px-4 rounded-lg border border-[#1EB386] bg-white text-[#333843] font-inter text-[14px] not-italic font-semibold leading-[140%] tracking-[0.07px]">
            <p>Record a Payment</p>
          </button>
        </div>
      </div>

      {/* second Row */}
      <div className="flex justify-center items-start gap-6 p-6">
        <div className=" w-[744px] flex p-8 flex-col items-center gap-8 rounded-xl border border-[#F0F1F3] bg-white shadow-custom-normal">
          {/* top */}
          <div className="flex justify-center items-center gap-6 self-stretch">
            <div className="flex items-center gap-5 flex-[1_0_0%]">
              <img src={Logo} alt="Logo" className="w-[130px] h-[130px]" />
              <div className="flex flex-col items-start gap-[6px] flex-[1_0_0%]">
                <p className=" self-stretch text-[#333843] font-inter text-[14px] font-semibold leading-[140%] tracking-[0.07px]">
                  Billing Desk
                </p>
                <div className="flex flex-col items-start gap-[6px] self-stretch">
                  <p className=" self-stretch text-[#667085] font-inter text-[12px] font-normal leading-[132%] tracking-[0.06px]">
                    John Brandon
                  </p>
                  <p className=" self-stretch text-[#667085] font-inter text-[12px] font-normal leading-[132%] tracking-[0.06px]">
                    789/1 Sector-2c, 38200 Gandhinagar, Coimbatore
                  </p>
                  <p className=" self-stretch text-[#667085] font-inter text-[12px] font-normal leading-[132%] tracking-[0.06px]">
                    948172194 | contact@gmail.com
                  </p>
                  <p className=" self-stretch text-[#667085] font-inter text-[12px] font-normal leading-[132%] tracking-[0.06px]">
                    SIRET: 362 521 879 00034
                  </p>
                  <p className=" self-stretch text-[#667085] font-inter text-[12px] font-normal leading-[132%] tracking-[0.06px]">
                    VAT: 842-484021
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between items-end self-stretch">
              <div className="flex py-2 px-3 flex-col justify-center items-center gap-1 rounded-lg bg-[#F4F5F6]">
                <p className="text-[#333843] text-right font-inter text-[12px] font-semibold leading-[132%] tracking-[0.06px]">
                  #2024-09-0001
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <p className=" self-stretch text-[#667085] font-inter text-[12px] font-medium leading-[132%] tracking-[0.06px]">
                  Total Amount
                </p>
                <p className=" self-stretch text-[#333843] font-inter text-[20px] font-bold">
                  Rs. 3,030.00
                </p>
              </div>
            </div>
          </div>
          {/* main */}
          <div className="flex pt-6 pr-6 pb-10 pl-6 flex-col justify-center items-start gap-8 self-stretch rounded-xl border border-[#E0E2E7] bg-white">
            <div className="flex justify-center items-center gap-7 self-stretch">
              <div className="flex w-[200px] p-5 flex-col justify-center items-start gap-4 rounded-lg bg-[#FAFAFA]">
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <p className=" self-stretch text-[#667085] font-inter text-[12px] font-normal leading-[132%] tracking-[0.06px]">
                    Bill Date
                  </p>
                  <p className=" self-stretch text-[#333843] font-inter text-[14px] font-semibold leading-[140%] tracking-[0.07px]">
                    03/09/2024
                  </p>
                </div>

                <div className="flex flex-col items-start gap-1 self-stretch">
                  <p className=" self-stretch text-[#667085] font-inter text-[12px] font-normal leading-[132%] tracking-[0.06px]">
                    Delivery Date
                  </p>
                  <p className=" self-stretch text-[#333843] font-inter text-[14px] font-semibold leading-[140%] tracking-[0.07px]">
                    03/09/2024
                  </p>
                </div>

                <div className="flex flex-col items-start gap-1 self-stretch">
                  <p className=" self-stretch text-[#667085] font-inter text-[12px] font-normal leading-[132%] tracking-[0.06px]">
                    Terms of Payment
                  </p>
                  <p className=" self-stretch text-[#333843] font-inter text-[14px] font-semibold leading-[140%] tracking-[0.07px]">
                    Within 15 days
                  </p>
                </div>

                <div className="flex flex-col items-start gap-1 self-stretch">
                  <p className=" self-stretch text-[#667085] font-inter text-[12px] font-normal leading-[132%] tracking-[0.06px]">
                    Payment Deadline
                  </p>
                  <p className=" self-stretch text-[#333843] font-inter text-[14px] font-semibold leading-[140%] tracking-[0.07px]">
                    09/18/2024
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-6 flex-[1_0_0%]">
                <div className="flex flex-col items-start gap-2 self-stretch">
                  <p className=" self-stretch text-[#667085] font-inter text-[12px] font-normal leading-[132%] tracking-[0.06px]">
                    Billing Address
                  </p>
                  <p className=" self-stretch text-[#333843] font-inter text-[14px] font-semibold leading-[140%] tracking-[0.07px]">
                    John Brandon
                  </p>
                  <div className="flex flex-col items-start gap-[6px] self-stretch">
                    <p className=" self-stretch text-[#667085] font-inter text-[12px] font-normal leading-[132%] tracking-[0.06px]">
                      789/1 Sector-2c, 38200 Gandhinagar, Coimbatore
                    </p>
                    <p className=" self-stretch text-[#667085] font-inter text-[12px] font-normal leading-[132%] tracking-[0.06px]">
                      97223041054 | contact@gmail.com
                    </p>
                    <p className=" self-stretch text-[#667085] font-inter text-[12px] font-semibold leading-[132%] tracking-[0.06px]">
                      SIRET: 362 521 879 00034
                    </p>
                    <p className=" self-stretch text-[#667085] font-inter text-[12px] font-semibold leading-[132%] tracking-[0.06px]">
                      VAT: 842-484021
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-1 self-stretch">
                    <p className=" self-stretch text-[#667085] font-inter text-[12px] font-normal leading-[132%] tracking-[0.06px]">
                      Note
                    </p>
                    <p className=" self-stretch text-[#333843] font-inter text-[12px] font-medium leading-[132%] tracking-[0.06px]">
                      This is a custom message that might be relevant to the
                      customer. It can span up to three or four rows. It can
                      span up to three or four rows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-5 self-stretch">
              <table className="w-full table-auto border-separate border-spacing-0">
                <thead className="bg-[#f9f9f9]">
                  <tr>
                    <th className=" px-4 py-3 text-left text-[#667085] text-[10px] font-medium font-['Inter'] uppercase leading-3 tracking-tight">
                      No.
                    </th>
                    <th className="text-left px-4 py-3 text-[#667085] text-[10px] font-medium font-['Inter'] uppercase leading-3 tracking-tight">
                      Article
                    </th>
                    <th className=" px-4 py-3 text-center text-[#667085] text-[10px] font-medium font-['Inter'] uppercase leading-3 tracking-tight">
                      Quantity
                    </th>
                    <th className="px-4 py-3 text-center text-[#667085] text-[10px] font-medium font-['Inter'] uppercase leading-3 tracking-tight">
                      Unit price
                    </th>
                    <th className=" px-4 py-3 text-center text-[#667085] text-[10px] font-medium font-['Inter'] uppercase leading-3 tracking-tight">
                      VAT
                    </th>
                    <th className="px-4 py-3 text-center text-[#667085] text-[10px] font-medium font-['Inter'] uppercase leading-3 tracking-tight">
                      Amount
                    </th>
                    <th className=" px-4 py-3 text-right text-[#667085] text-[10px] font-medium font-['Inter'] uppercase leading-3 tracking-tight">
                      FINAL Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 text-[#333843] text-xs font-medium font-['Inter'] leading-none tracking-tight">
                      1
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-[#333843] text-xs font-medium font-['Inter'] leading-none tracking-tight">
                        Product Name
                      </div>
                      <div className="text-[#667085] text-xs font-normal font-['Inter'] leading-none tracking-tight">
                        Product Description
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center text-[#333843] text-xs font-medium font-['Inter'] leading-none tracking-tight">
                      <div className="text-[#333843] text-xs font-medium font-['Inter'] leading-none tracking-tight">
                        150
                      </div>
                      <div className="text-[#667085] text-xs font-normal font-['Inter'] leading-none tracking-tight">
                        Unit(s)
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center text-[#333843] text-xs font-medium font-['Inter'] leading-none tracking-tight">
                      Rs. 20
                    </td>
                    <td className="px-4 py-3 text-center text-[#333843] text-xs font-medium font-['Inter'] leading-none tracking-tight">
                      0%
                    </td>
                    <td className="px-4 py-3 text-center text-[#333843] text-xs font-medium font-['Inter'] leading-none tracking-tight">
                      Rs. 3,000
                    </td>
                    <td className="px-4 py-3 text-right text-[#333843] text-xs font-medium font-['Inter'] leading-none tracking-tight">
                      Rs. 3,000
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 text-[#333843] text-xs font-medium font-['Inter'] leading-none tracking-tight">
                      2
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-[#333843] text-xs font-medium font-['Inter'] leading-none tracking-tight">
                        Product Name
                      </div>
                      <div className="text-[#667085] text-xs font-normal font-['Inter'] leading-none tracking-tight">
                        Product Description
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center text-[#333843] text-xs font-medium font-['Inter'] leading-none tracking-tight">
                      <div className="text-[#333843] text-xs font-medium font-['Inter'] leading-none tracking-tight">
                        150
                      </div>
                      <div className="text-[#667085] text-xs font-normal font-['Inter'] leading-none tracking-tight">
                        Unit(s)
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center text-[#333843] text-xs font-medium font-['Inter'] leading-none tracking-tight">
                      Rs. 20
                    </td>
                    <td className="px-4 py-3 text-center text-[#333843] text-xs font-medium font-['Inter'] leading-none tracking-tight">
                      0%
                    </td>
                    <td className="px-4 py-3 text-center text-[#333843] text-xs font-medium font-['Inter'] leading-none tracking-tight">
                      Rs. 3,000
                    </td>
                    <td className="px-4 py-3 text-right text-[#333843] text-xs font-medium font-['Inter'] leading-none tracking-tight">
                      Rs. 3,000
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 text-[#333843] text-xs font-medium font-['Inter'] leading-none tracking-tight">
                      3
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-[#333843] text-xs font-medium font-['Inter'] leading-none tracking-tight">
                        Product Name
                      </div>
                      <div className="text-[#667085] text-xs font-normal font-['Inter'] leading-none tracking-tight">
                        Product Description
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center text-[#333843] text-xs font-medium font-['Inter'] leading-none tracking-tight">
                      <div className="text-[#333843] text-xs font-medium font-['Inter'] leading-none tracking-tight">
                        150
                      </div>
                      <div className="text-[#667085] text-xs font-normal font-['Inter'] leading-none tracking-tight">
                        Unit(s)
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center text-[#333843] text-xs font-medium font-['Inter'] leading-none tracking-tight">
                      Rs. 20
                    </td>
                    <td className="px-4 py-3 text-center text-[#333843] text-xs font-medium font-['Inter'] leading-none tracking-tight">
                      0%
                    </td>
                    <td className="px-4 py-3 text-center text-[#333843] text-xs font-medium font-['Inter'] leading-none tracking-tight">
                      Rs. 3,000
                    </td>
                    <td className="px-4 py-3 text-right text-[#333843] text-xs font-medium font-['Inter'] leading-none tracking-tight">
                      Rs. 3,000
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="flex w-[250px] flex-col items-start gap-3">
                <div className="flex py-0 px-3 justify-center items-center gap-6 self-stretch">
                  <p className="w-[120px] text-[#667085] font-inter text-[12px] font-normal leading-[132%] tracking-[0.06px]">
                    Total HT
                  </p>
                  <p className=" flex-[1_0_0%] text-[#333843] text-right font-inter text-[12px] font-medium leading-[132%] tracking-[0.06px]">
                    Rs. 3,000
                  </p>
                </div>
                <div className="flex py-0 px-3 justify-center items-center gap-6 self-stretch">
                  <p className="w-[120px] text-[#667085] font-inter text-[12px] font-normal leading-[132%] tracking-[0.06px]">
                    Total Disbursements
                  </p>
                  <p className="flex-[1_0_0%]  text-[#333843] text-right font-inter text-[12px] font-medium leading-[132%] tracking-[0.06px]">
                    Rs. 30
                  </p>
                </div>
                <div className="flex py-0 px-3 justify-center items-center gap-6 self-stretch">
                  <p className="w-[120px] text-[#667085] font-inter text-[12px] font-normal leading-[132%] tracking-[0.06px]">
                    Total VAT
                  </p>
                  <p className="flex-[1_0_0%]  text-[#333843] text-right font-inter text-[12px] font-medium leading-[132%] tracking-[0.06px]">
                    Rs. 0
                  </p>
                </div>
                <div className="flex py-0 px-3 justify-center items-center gap-6 self-stretch">
                  <p className="w-[120px] text-[#333843] font-inter text-[12px] font-bold leading-[132%] tracking-[0.06px]">
                    Total Price
                  </p>
                  <p className="flex-[1_0_0%]  text-[#333843] text-right font-inter text-[12px] font-bold leading-[132%] tracking-[0.06px]">
                    Rs. 3,030.00
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* bottom */}
          <div className="flex flex-col items-center gap-1 self-stretch">
            <p className=" self-stretch text-[#667085] font-inter text-[12px] font-normal leading-[132%] tracking-[0.06px]">
              Terms & Conditions
            </p>
            <p className=" self-stretch text-[#333843] font-inter text-[12px] font-medium leading-[132%] tracking-[0.06px]">
              Please pay within 15 days of receiving this invoice.
            </p>
          </div>
        </div>

        {/* Side bar */}
        <div className="flex flex-col items-center gap-4 fex-[1_0_0%]">
          <div className=" flex py-3 px-4 justify-between items-center self-stretch rounded-lg border border-[#FC9736] bg-[#FFF5EB]">
            <div className="flex justify-center items-center gap-[10px] flex-[1_0_0%]">
              <BsClockHistory className="w-4 h-4 text-[#FC9736]" />
              <p className="text-[#FC9736] font-inter text-[14px] font-semibold leading-[140%] tracking-[0.07px]">
                Late
              </p>
            </div>
          </div>
           <div className="flex p-6 flex-col items-center gap-4 self-stretch rounded-xl border border-[#F0F1F3] bg-white shadow-custom-normal">
            <p className=" self-stretch text-[#333843] font-inter text-[16px] font-semibold leading-[140%] tracking-[0.08px] text-center">
              Invoice not yet sent!
            </p>
            <button className="flex py-3 px-4 justify-center items-center gap-2 self-stretch rounded-lg bg-[#DB4210]">
              <LuSendHorizonal className="w-5 h-5 text-white" />
              <p className=" text-white font-inter text-[14px] font-semibold leading-[140%] tracking-[0.07px]">
                Send Invoice
              </p>
            </button>
          </div> 
          {/* summary */}
           <div className="flex flex-col justify-center items-start self-stretch  rounded-xl border border-[#F0F1F3] bg-white shadow-custom-normal">
            <div className="flex py-4 px-6 flex-col justify-center items-start gap-4 self-stretch">
              <p className=" self-stretch text-[#333843] font-inter text-[16px] font-semibold leading-[140%] tracking-[0.08px]">
                Summary
              </p>
            </div>
            <div className="flex py-4 px-6 justify-center items-start gap-4 self-stretch">
              <p className="flex-[1_0_0%] text-[#333843] font-inter text-[14px] font-semibold leading-[140%] tracking-[0.07px]">
                Total
              </p>
              <p className="text-center text-[#333843] font-inter text-[14px] font-semibold leading-[140%] tracking-[0.07px]">
                Rs. 3,030 Incl. VAT
              </p>
            </div>
            <div className="flex pt-6 pr-6 pb-0 pl-6 flex-col items-start self-stretch">
              <div className="flex items-start gap-3 self-stretch">
                <div className="flex pt-1 flex-col items-center self-stretch">
                  <p className="w-3 h-3 rounded-[100px] bg-[#1EB386]"></p>
                </div>
                <div className="flex pb-6 flex-col items-start gap-2 flex-[1_0_0%]">
                  <p className="self-stretch text-[#333843] font-inter text-[14px] font-semibold leading-[140%] tracking-[0.07px]">
                    Deposit No. 2020-04-0006
                  </p>
                  <div className="flex items-center gap-2 self-stretch">
                    <p className="flex-[1_0_0%] text-[#667085] font-inter text-[14px] font-normal leading-[140%] tracking-[0.07px]">
                      Date
                    </p>
                    <p className=" text-[#333843] text-right font-inter text-[14px] font-medium leading-[140%] tracking-[0.07px]">
                      Aug 24, 2024
                    </p>
                  </div>
                  <div className="flex items-center gap-2 self-stretch">
                    <p className="flex-[1_0_0%] text-[#667085] font-inter text-[14px] font-normal leading-[140%] tracking-[0.07px]">
                      Amount
                    </p>
                    <p className=" text-[#333843] text-right font-inter text-[14px] font-medium leading-[140%] tracking-[0.07px]">
                      Rs. 300
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 self-stretch">
                <div className="flex pt-1 flex-col items-center self-stretch">
                  <p className="w-3 h-3 rounded-[100px] bg-[#1EB386]"></p>
                </div>
                <div className="flex pb-6 flex-col items-start gap-2 flex-[1_0_0%]">
                  <p className="self-stretch text-[#333843] font-inter text-[14px] font-semibold leading-[140%] tracking-[0.07px]">
                    Partial Payment
                  </p>
                  <div className="flex items-center gap-2 self-stretch">
                    <p className="flex-[1_0_0%] text-[#667085] font-inter text-[14px] font-normal leading-[140%] tracking-[0.07px]">
                      Date
                    </p>
                    <p className=" text-[#333843] text-right font-inter text-[14px] font-medium leading-[140%] tracking-[0.07px]">
                      Aug 26, 2024
                    </p>
                  </div>
                  <div className="flex items-center gap-2 self-stretch">
                    <p className="flex-[1_0_0%] text-[#667085] font-inter text-[14px] font-normal leading-[140%] tracking-[0.07px]">
                      Amount
                    </p>
                    <p className=" text-[#333843] text-right font-inter text-[14px] font-medium leading-[140%] tracking-[0.07px]">
                      Rs. 400
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 self-stretch">
                <div className="flex pt-1 flex-col items-center self-stretch">
                  <p className="w-3 h-3 rounded-[100px] bg-[#1EB386]"></p>
                </div>
                <div className="flex pb-6 flex-col items-start gap-2 flex-[1_0_0%]">
                  <p className="self-stretch text-[#333843] font-inter text-[14px] font-semibold leading-[140%] tracking-[0.07px]">
                    Partial Payment
                  </p>
                  <div className="flex items-center gap-2 self-stretch">
                    <p className="flex-[1_0_0%] text-[#667085] font-inter text-[14px] font-normal leading-[140%] tracking-[0.07px]">
                      Date
                    </p>
                    <p className=" text-[#333843] text-right font-inter text-[14px] font-medium leading-[140%] tracking-[0.07px]">
                      Aug 27, 2024
                    </p>
                  </div>
                  <div className="flex items-center gap-2 self-stretch">
                    <p className="flex-[1_0_0%] text-[#667085] font-inter text-[14px] font-normal leading-[140%] tracking-[0.07px]">
                      Amount
                    </p>
                    <p className=" text-[#333843] text-right font-inter text-[14px] font-medium leading-[140%] tracking-[0.07px]">
                      Rs. 2,230
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex py-5 px-0 justify-center items-center self-stretch">
                <p className="flex-[1_0_0%] text-[#333843] font-inter text-[14px] font-semibold leading-[140%] tracking-[0.07px]">
                  Remaining Amount
                </p>
                <div className="flex py-1 px-3 flex-col justify-center items-center gap-[10px] rounded-lg bg-[#FEF0F0]">
                  <p className=" text-[#333843] text-center font-inter text-[14px] font-semibold leading-[140%] tracking-[0.07px]">
                    Rs. 100 Incl. VAT
                  </p>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default ViewInvoice
