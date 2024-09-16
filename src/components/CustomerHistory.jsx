import React, { useState } from "react";
import { useSelector } from "react-redux";

const CustomerHistory = () => {
  const { billingRecords } = useSelector((state) => state.products);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecords = billingRecords.filter(
    (record) =>
      record.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.phone.includes(searchQuery) ||
      record.location.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="p-6 w-full mx-auto bg-white my-12 shadow-lg rounded-lg border border-gray-200">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Billing History
        </h1>
        <div className="mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            className="p-2 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <table className="min-w-full table-auto bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100 border-b border-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-gray-600">S. No</th>
            <th className="px-6 py-3 text-left text-gray-600">Customer</th>
            <th className="px-6 py-3 text-left text-gray-600">Phone</th>
            <th className="px-6 py-3 text-left text-gray-600">Location</th>
            <th className="px-6 py-3 text-left text-gray-600">Products</th>
            <th className="px-6 py-3 text-left text-gray-600">Total Amount</th>
            <th className="px-6 py-3 text-left text-gray-600">Discount</th>
            <th className="px-6 py-3 text-left text-gray-600">Billing Price</th>
            <th className="px-6 py-3 text-left text-gray-600">
              Payment Status
            </th>
            <th className="px-6 py-3 text-left text-gray-600">Date</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {filteredRecords.length > 0 ? (
            filteredRecords.map((record, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-700">{index + 1}</td>
                <td className="px-6 py-4 text-gray-700">
                  {record.customerName}
                </td>
                <td className="px-6 py-4 text-gray-700">{record.phone}</td>
                <td className="px-6 py-4 text-gray-700">{record.location}</td>
                <td className="px-6 py-4 text-gray-700">
                  {record.products.map((product, idx) => (
                    <div key={idx}>
                      {product.name} (x{product.quantity})
                    </div>
                  ))}
                </td>
                <td className="px-6 py-4 text-gray-700">
                  ${record.totalAmount.toFixed(2)}
                </td>
                <td className="px-6 py-4 text-gray-700">
                  ${record.discount.toFixed(2)}
                </td>
                <td className="px-6 py-4 text-gray-700">
                  ${record.billingPrice.toFixed(2)}
                </td>
                <td className="px-6 py-4 text-gray-700">
                  {record.paymentStatus}
                </td>
                <td className="px-6 py-4 text-gray-700">{record.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center py-4 text-gray-600">
                No Billing Records Available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerHistory;
