import React from "react";
import { useSelector } from "react-redux";
import {
  selectTodayTotals,
  selectOneMonthTotals,
} from "../slices/productSlice";

const Dashboard = () => {
  const todayTotals = useSelector(selectTodayTotals);
  const oneMonthTotals = useSelector(selectOneMonthTotals);
  return (
    <div className="p-6 w-full lg:w-9/12 mx-auto bg-white my-12 shadow-lg rounded-lg border border-gray-200">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Today's Pay Now Amount
          </h3>
          <p className="text-gray-700 text-2xl font-bold">
            ₹{todayTotals.payNow.toFixed(2)}
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Today's Pay Later Amount
          </h3>
          <p className="text-gray-700 text-2xl font-bold">
            ₹{todayTotals.payLater.toFixed(2)}
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Today's Sales Amount
          </h3>
          <p className="text-gray-700 text-2xl font-bold">
            ₹{todayTotals.total.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="mt-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              This Month's Pay Now Amount
            </h3>
            <p className="text-gray-700 text-2xl font-bold">
              ₹{oneMonthTotals.payNow.toFixed(2)}
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              This Month's Pay Later Amount
            </h3>
            <p className="text-gray-700 text-2xl font-bold">
              ₹{oneMonthTotals.payLater.toFixed(2)}
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              This Month's Sales Amount
            </h3>
            <p className="text-gray-700 text-2xl font-bold">
              ₹{oneMonthTotals.total.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
