import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import paper from "../../assets/paper.svg";

const Account = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles); // Handle file upload here
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div className="bg-[#FAFAFA]">
      {/* First Row */}
      <div className="w-[95.91%] p-6 flex gap-6">
        <div className="flex flex-col gap-3 w-[78.63%]">
          <h2 className="text-[#333843] font-inter text-2xl font-bold">
            Account Management
          </h2>
          <p className="text-[#667085] font-inter text-[16px] font-normal leading-[140%] tracking-[0.08px]">
            Add your bank details here
          </p>
        </div>
      </div>

      <div className="pl-14 pr-16 py-5">
        {/* Second row */}
        <div className="flex justify-between ">
          <div className="flex flex-col gap-4 w-[78.63%]">
            <h2 className="text-[#333843] font-inter text-[16px] font-semibold leading-[140%] tracking-[0.08px]">
              Edit Banking Details
            </h2>
            <div className="flex flex-col gap-2 mt-10">
              <label className="text-[#333843] font-inter text-[14px] font-normal leading-[140%] tracking-[0.07px]">
                GSTIN
              </label>
              <input
                type="number"
                className="w-[210px] h-[38px] border border-[#C9C9C9] rounded-md bg-[#FFFFFF] focus:outline-none text-center"
              />
            </div>
            <div className="flex items-center gap-6 mt-6">
              <div className="flex flex-col gap-2">
                <label className="text-[#333843] font-inter text-[14px] font-normal leading-[140%] tracking-[0.07px]">
                  Account number
                </label>

                <input
                  type="number"
                  className="w-[210px] h-[38px] flex-shrink border border-[#C9C9C9] rounded-md bg-[#FFFFFF] focus:outline-none text-center"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#333843] font-inter text-[14px] font-normal leading-[140%] tracking-[0.07px]">
                  Account holder name
                </label>

                <input
                  type="text"
                  className="w-[210px] h-[38px] flex-shrink border border-[#C9C9C9] rounded-md bg-[#FFFFFF] focus:outline-none text-center"
                />
              </div>
            </div>
            <div className="flex items-center gap-6 mt-6">
              <div className="flex flex-col gap-2">
                <label className="text-[#333843] font-inter text-[14px] font-normal leading-[140%] tracking-[0.07px]">
                  IFSC Code
                </label>

                <input
                  type="text"
                  className="w-[210px] h-[38px] flex-shrink border border-[#C9C9C9] rounded-md bg-[#FFFFFF] focus:outline-none text-center"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#333843] font-inter text-[14px] font-normal leading-[140%] tracking-[0.07px]">
                  MICR Code
                </label>

                <input
                  type="text"
                  className="w-[210px] h-[38px] flex-shrink border border-[#C9C9C9] rounded-md bg-[#FFFFFF] focus:outline-none text-center"
                />
              </div>
            </div>
            <div className="flex items-center gap-6 mt-6">
              <div className="flex flex-col gap-2">
                <label className="text-[#333843] font-inter text-[14px] font-normal leading-[140%] tracking-[0.07px]">
                  Bank name
                </label>

                <input
                  type="text"
                  className="w-[210px] h-[38px] flex-shrink border border-[#C9C9C9] rounded-md bg-[#FFFFFF] focus:outline-none text-center"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#333843] font-inter text-[14px] font-normal leading-[140%] tracking-[0.07px]">
                  Branch name
                </label>

                <input
                  type="text"
                  className="w-[210px] h-[38px] flex-shrink border border-[#C9C9C9] rounded-md bg-[#FFFFFF] focus:outline-none text-center"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-12">
              <label className="text-[#333843] font-inter text-[14px] font-normal leading-[140%] tracking-[0.07px]">
                UPI ID
              </label>
              <input
                type="text"
                className="w-[210px] h-[38px] border border-[#C9C9C9] rounded-md bg-[#FFFFFF] focus:outline-none text-center"
              />
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <label className="text-[#333843] font-inter text-[14px] font-normal leading-[140%] tracking-[0.07px]">
                Upload QR Code
              </label>
              <div
                {...getRootProps()}
                className={`w-[210px] h-[210px]  border-2 border-[#00D1FF] rounded-md bg-[#FFFFFF] flex flex-col items-center justify-center cursor-pointer ${
                  isDragActive ? "border-[#1EB386]" : "border-[#00D1FF]"
                }`}
              >
                <input {...getInputProps()} />
                <img src={paper} alt="" className="w-[60px] h-[60px]" />
                {/* SVG Icon */}
                <p className="text-[#667085] text-[12px] text-center">
                  Drag & Drop your image here or{" "}
                  <span className="text-[#E25A26]">Choose file</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-[102px] mb-[185px] gap-5">
          <button className="w-[200px] h-10 flex justify-center items-center gap-[10px] py-[10px] px-4 rounded-lg border border-[#DB4210]">
            <p className="text-[#DB4210] text-center font-inter text-[14px] font-semibold leading-[140%] tracking-[0.07px]">
            Back to Invoice
            </p>
          </button>
          <button className="w-[200px] h-10 flex justify-center items-center gap-[10px] py-[10px] px-4 rounded-lg border border-[#DB4210] bg-[#DB4210]">
            <p className="text-white text-center font-inter text-[14px] font-semibold leading-[140%] tracking-[0.07px]">
              SAVE & CONTINUE
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
