import React, { useEffect, useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  function handleSignUp() {
    const isValidEmail =
      email.length > 0 && email.includes("@") && email.includes(".");
    if (!isValidEmail) {
      setError(true);
      return;
    }

    const a = document?.querySelector("#loch");
    a?.click();
  }

  return (
    <div className="w-[365px] flex flex-col items-stretch text-grey-900">
      <h2 className="font-medium text-[39px] leading-[46.8px] text-grey-300 mb-8 ml-[13px] mr-[26px]">
        Sign up for exclusive access.
      </h2>
      <div className="relative flex">
        {error && (
          <p className="absolute top-[-20px] ml-4 text-red-500 text-sm font-semibold">
            Please enter a valid email
          </p>
        )}
        <input
          type="email"
          placeholder="Your email address"
          style={{
            boxShadow:
              "0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 4px 10px 0px rgba(0, 0, 0, 0.04)",
          }}
          value={email}
          onChange={(e) => {
            setError(false);
            setEmail(e.target.value);
          }}
          className="grow mb-6 flex ml-[13px] mr-[12px] py-5 px-[24px] border border-grey-100 rounded-lg placeholder:text-medium placeholder:text-grey-200 outline-gray-300 font-medium leading-[19.2px] hover:bg-neutral-50 focus:bg-white"
        />
      </div>
      <button
        onClick={handleSignUp}
        className="mb-6 ml-[13px] mr-[12px] py-[18px] px-[28px] font-semibold leading-[19.2px] bg-grey-900 hover:bg-black text-center text-white rounded-lg"
      >
        Get Started
      </button>
      <p className="font-semibold leading-[19.2px] py-[18px] text-center">
        You’ll receive an email with an invite link to join.
      </p>
      <a id="loch" href="https://app.loch.one/welcome" target="_blank" />
    </div>
  );
};

export default SignUp;
