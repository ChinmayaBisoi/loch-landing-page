import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");

  function handleSignUp() {
    if (!email || !(email.includes("@") && email.includes("."))) {
      // toast
    }
  }

  return (
    <div className="w-[365px] flex flex-col items-stretch text-grey-900">
      <h2 className="font-medium text-[39px] leading-[46.8px] text-grey-300 mb-8 ml-[13px] mr-[26px]">
        Sign up for exclusive access.
      </h2>
      <input
        type="email"
        placeholder="Your email address"
        style={{
          boxShadow:
            "0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 4px 10px 0px rgba(0, 0, 0, 0.04)",
        }}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="mb-6 flex ml-[13px] mr-[12px] py-5 px-[24px] border border-grey-100 rounded-lg placeholder:text-medium placeholder:text-grey-200 outline-gray-300 font-medium leading-[19.2px] hover:bg-neutral-50 focus:bg-white"
      />
      <button
        onClick={handleSignUp}
        className="mb-6 ml-[13px] mr-[12px] py-[18px] px-[28px] font-semibold leading-[19.2px] bg-grey-900 hover:bg-black text-center text-white rounded-lg"
      >
        Get Started
      </button>
      <p className="font-semibold leading-[19.2px] py-[18px] text-center">
        You’ll receive an email with an invite link to join.
      </p>
    </div>
  );
};

export default SignUp;
