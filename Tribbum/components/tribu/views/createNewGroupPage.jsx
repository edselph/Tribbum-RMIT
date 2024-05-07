// ./components/tribu/views/createNewGroupPage.jsx
// Marking this component as a Client Component
// use client
"use client"
import React, { useState } from "react";
import { render } from "@react-email/render";

const createNewGroupPage = () => {
  const[group , setGroup] = useState("");
  const[loading , setLoading] = useState(false);
  const[submitted , setSubmitted] = useState(false);
  const[submittedMessage , setSubmittedMessage] = useState("");
  const[errorText , setErrorText] = useState("");

  const resetForm = () => {
    setGroup("");
    setErrorText("");
  };

  const validateField = (field) => {
    if (field === "" || field === null || field === undefined) {
      return false;
    } else {
      return true;
    }
  };
  const validateForm = () => {
    if (!validateField(group)) {
      setErrorText(`group name required`);
      return false;
    }
    return true;
  };

  const sendFormData = () => {
    const data = {
      group: group,
    };
    const result = true;
    return { data: data, valid: result };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const valid = validateForm();
    if (valid) {
      setLoading(true);
      const result = sendFormData();
      if (result.valid) {
        await sendMailAdmin(result.data);
      }
    }
  };
  
  const sendMailAdmin = async (formData) => {
    const subject = "New group request to create";
    const message = `A new group name: ${formData.group} want to be create.`;
    const email = ""; //email of receipent 
    const mailFlag = true;
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },

        body: JSON.stringify({
          subject,
          message,
          email,
          mailFlag,
          formData,
        }),
      });
      if (response?.ok) {
        resetForm();
        setLoading(false);
        setSubmitted(true);
        setSubmittedMessage("success");
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        setLoading(false);
        setSubmitted(true);
        setSubmittedMessage("error");
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      console.log(await response.json());
    }
  };

  return (
    <div className='flex flex-col w-full h-auto pt-12 md:pt-20 px-4 items-center relative z-10'>
      <h1 className='hidden md:flex text-2xl font-light text-primary-500 text-center'>
        Create New group
      </h1>
      <div className="flex flex-col w-full max-w-[760px] h-auto gp-2
        mt-8 mb-12 py-8 px-4 bg-tertiary-100 shadow-xl rounded-3xl border border-gray-200">
        <form onSubmit={handleSubmit}>
          <label className="flex text-lg text-primary-500 font-medium">
            Group Topic:
          </label>
          <input
            onChange={(e) => setGroup(e.target.value)} 
            value ={group}
            className="flex w-full h-auto p-2 mb-4 text-lg border-[1px] 
            border-gray-300 rounded-lg focus:outline-none focus:ring-2 
            focus:ring-secondary-500/50"
            type="text"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="flex w-auto h-auto py-2 px-4 text-gray-50 right-1
            bg-tertiary-500 hover:bg-secondary-500 rounded-full cursor-pointer active:scale-95">
            Submit
          </button>
        </form>
      </div>
    </div>
  );

};

export default createNewGroupPage;
