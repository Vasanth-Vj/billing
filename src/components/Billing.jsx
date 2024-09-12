import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  deleteProduct,
  applyDiscount,
  updateCustomerDetails,
} from "../slices/productSlice";

const Billing = () => {
  const dispatch = useDispatch();
  const { products, totalAmount, discount, billingPrice, customer } =
    useSelector((state) => state.products);

  const [product, setProduct] = useState({
    name: "",
    quantity: "",
    amount: "",
  });

  const [customerName, setCustomerName] = useState(customer.name);
  const [location, setLocation] = useState(customer.location);
  const currentDate = new Date().toLocaleDateString();
  

  const handleAddProduct = () => {
    const totalAmount = product.quantity * product.amount;
    dispatch(addProduct({ ...product, totalAmount }));
    setProduct({ name: "", quantity: "", amount: "" });
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleDiscountChange = (e) => {
    dispatch(applyDiscount(Number(e.target.value)));
  };

  const handleCustomerDetailsSubmit = () => {
    dispatch(
      updateCustomerDetails({ name: customerName, location, date: currentDate })
    );
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white my-12 shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Billing</h1>

      {/* Customer Details Form */}
      <div className="space-y-6 mb-10">
        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
        />

        <button
          onClick={handleCustomerDetailsSubmit}
          className="bg-blue-600 text-white px-5 py-3 rounded-lg w-full hover:bg-blue-700 transition duration-200 ease-in-out"
        >
          Update Customer Details
        </button>
      </div>

      {/*  Customer Details */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8 border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-3">
          Customer Details
        </h3>
        <div className="space-y-3">
          <p className="text-gray-700">
            <strong className="font-medium text-gray-900">Name:</strong>{" "}
            {customer.name}
          </p>
          <p className="text-gray-700">
            <strong className="font-medium text-gray-900">Location:</strong>{" "}
            {customer.location}
          </p>
          <p className="text-gray-700">
            <strong className="font-medium text-gray-900">Date:</strong>{" "}
            {customer.date}
          </p>
        </div>
      </div>

      {/* Add Product Form */}
      <div className="space-y-6 mb-10">
        <input
          type="text"
          placeholder="Product"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
        />
        <input
          type="number"
          placeholder="Quantity"
          value={product.quantity || ""}
          onChange={(e) =>
            setProduct({
              ...product,
              quantity: e.target.value ? Number(e.target.value) : "",
            })
          }
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
        />
        <input
          type="number"
          placeholder="Amount"
          value={product.amount || ""}
          onChange={(e) =>
            setProduct({
              ...product,
              amount: e.target.value ? Number(e.target.value) : "",
            })
          }
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
        />
        <button
          onClick={handleAddProduct}
          className="bg-blue-600 text-white px-5 py-3 rounded-lg w-full hover:bg-blue-700 transition duration-200 ease-in-out"
        >
          Add Product
        </button>
      </div>

      {/* Product List Table */}
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Products Details:
      </h3>
      <table className="min-w-full table-auto bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100 border-b border-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-gray-600">S. No</th>
            <th className="px-6 py-3 text-left text-gray-600">Product</th>
            <th className="px-6 py-3 text-left text-gray-600">Quantity</th>
            <th className="px-6 py-3 text-left text-gray-600">Amount</th>
            <th className="px-6 py-3 text-left text-gray-600">Total</th>
            <th className="px-6 py-3 text-left text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-700">
                  {products.indexOf(product) + 1}
                </td>
                <td className="px-6 py-4 text-gray-700">{product.name}</td>
                <td className="px-6 py-4 text-gray-700">{product.quantity}</td>
                <td className="px-6 py-4 text-gray-700">
                  ${product.amount.toFixed(2)}
                </td>
                <td className="px-6 py-4 text-gray-700">
                  ${product.totalAmount.toFixed(2)}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-200 ease-in-out"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-4 text-gray-600">
                No Products Added
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Discount and Final Billing */}
      <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-md border border-gray-200">
        <label
          htmlFor="discount"
          className="block text-gray-700 font-medium mb-2"
        >
          Discount
        </label>
        <input
          type="number"
          id="discount"
          placeholder="Enter discount"
          onChange={handleDiscountChange}
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
        />
        <div className="mt-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-gray-600 text-lg font-semibold">
              Total Amount:
            </h3>
            <span className="text-gray-800 text-xl font-bold">
              ${totalAmount}
            </span>
          </div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-gray-600 text-lg font-semibold">Discount:</h3>
            <span className="text-gray-800 text-xl font-bold">${discount}</span>
          </div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-gray-600 text-lg font-semibold">
              Billing Price:
            </h3>
            <span className="text-gray-800 text-xl font-bold">
              ${billingPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
