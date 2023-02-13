import React from "react";
import "../../index.css";
import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDocument } from "../../features/actions/actions";

const SidebarAdd = ({ side, setSide }) => {
  const [document, setDocument] = useState({ title: "", type: "", desc: "" });
//   const user = useSelector(state => state.userReduer.user)
  const [file, setFile] = useState();
  const dispatch = useDispatch()

  const handleChange = (e) => {
    e.preventDefault();
    setDocument({ ...document, [e.target.id]: e.target.value });
  };
 
  const handleImage = (e) => {
    e.preventDefault();
    const file = e.target.files;
    const reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onloadend = () => {
      setFile(reader.result);
    };

  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      await dispatch(createDocument({ ...document,file }));
      setSide(false)

    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div
      className={`w-[100vw] bg-black/40 z-20  fixed top-0 h-screen flex justify-end  ease-in-out duration-500`}
    >
      <div className="bg-white w-[35vw] p-[2rem]">
        <div className="flex items-center my-4">
          <BiArrowBack
            size={25}
            className="text-blue-500 cursor-pointer"
            onClick={() => setSide(false)}
          />
          <h1 className="ml-5 text-2xl">Add New Document</h1>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <input
            type="file"
            className="border border-black/30 p-[20px] rounded-md mt-5 w-full"
            placeholder="Document title"
            required
            onChange={handleImage}
          />
          <input
            className="border border-black/30 p-[20px] rounded-md mt-5 w-full"
            placeholder="Document title"
            onChange={handleChange}
            required
            id="title"
          />
          <select
            className="border text-[#263238] border-black/30 p-[20px] rounded-md  mt-5 w-full bg-white items-center "
            placeholder="Document-type"
            onChange={handleChange}
            id="type"
            required
          >
            <option className="text-black-500">Document Type</option>
            <option className="my-2">Certificate</option>
            <option className="my-2">Discharge Summary</option>
            <option className="my-2">Insurance</option>
            <option className="my-2">Living Will</option>
            <option className="my-2">Passport</option>
            <option className="my-2">Perscription</option>
            <option className="my-2">Travel Document</option>
            <option className="my-2">X-ray</option>
            <option className="my-2">Other</option>
          </select>
          <textarea
            className="border border-black/30 p-[20px] rounded-md mt-5 w-full"
            cols="4"
            rows="4"
            placeholder="Description(optional)"
            onChange={handleChange}
            id="desc"
          />

          <button className="bg-blue-500 text-white p-[15px] rounded-[20px] w-full mt-[3rem]">
            UPLOAD NEW DOCUMENT
          </button>
        </form>
      </div>
    </div>
  );
};

export default SidebarAdd;
