import React from "react";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-4 w-full px-20 py-4 gap-3">
        <div className="flex flex-col w-full">
          <label htmlFor="">First Name : </label>
          <input
            type="text"
            placeholder="Enter your Name"
            className="px-1 h-8 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="">Last Name : </label>
          <input
            type="text"
            placeholder="Enter your Name"
            className="px-1 h-8 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="">Email : </label>
          <input
            type="email"
            placeholder="Enter your Email"
            className="px-1 h-8 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="">Password : </label>
          <input
            type="password"
            placeholder="Enter your Password"
            className="px-1 h-8 border border-gray-300 rounded"
          />
        </div>
      </div>

      <div className="flex w-full justify-end px-20">
        <button className="bg-gray-500 hover:bg-gray-600 text-white w-22 h-10 rounded-md cursor-pointer">
          Submit
        </button>
      </div>

      <table className="my-5 mx-5 w-[calc(100%-2.25rem)] border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">
              First Name
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Last Name
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Email
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Password
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">abc</td>
            <td className="border border-gray-300 px-4 py-2">abcd</td>
            <td className="border border-gray-300 px-4 py-2">abc@gmail.com</td>
            <td className="border border-gray-300 px-4 py-2">abc123</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Home;
