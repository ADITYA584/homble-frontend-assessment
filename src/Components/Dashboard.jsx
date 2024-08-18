// src/Dashboard.js
import React, { useState, useEffect, useCallback } from "react";
import useAxios from "./Hooks/useAxios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const { data, loading, error, sendRequest } = useAxios();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Fetch initial data
  useEffect(() => {
    sendRequest(
      "https://frontend-assessment-server.onrender.com/api/dashboard"
    );
  }, []);

  // Update products state when data is fetched
  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  const handleSort = (key) => {
    setSortKey(key);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const filteredData = products?.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toString().includes(searchTerm.trim())
  );

  const sortedData = filteredData?.sort((a, b) => {
    if (sortKey === "id" || sortKey === "sellingPrice") {
      // Convert to number for numeric sorting
      const aValue = parseFloat(a[sortKey]);
      const bValue = parseFloat(b[sortKey]);
      return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
    } else {
      // Default string sorting
      if (a[sortKey] < b[sortKey]) return sortOrder === "asc" ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return sortOrder === "asc" ? 1 : -1;
      return 0;
    }
  });

  const handleRemove = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto p-4">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-4 text-center">Product Dashboard</h1>
      <input
        type="text"
        placeholder="Search by ID or Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border rounded"
      />
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th
              onClick={() => handleSort("id")}
              className="p-2 border cursor-pointer"
            >
              ID
            </th>
            <th
              onClick={() => handleSort("name")}
              className="p-2 border cursor-pointer"
            >
              Name
            </th>
            <th
              onClick={() => handleSort("sellingPrice")}
              className="p-2 border cursor-pointer"
            >
              Selling Price
            </th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedData?.map((product) => (
            <tr key={product.id}>
              <td className="p-2 border">{product.id}</td>
              <td className="p-2 border">{product.name}</td>
              <td className="p-2 border text-xl">₹ {product.selling_price}</td>
              <td className="p-2 border flex justify-center">
                <button
                  onClick={() => handleRemove(product.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded "
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
