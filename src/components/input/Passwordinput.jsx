import React, { useState } from "react";

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShadowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <>
      <div className="flex items-center bg-transparent border-1[1.5px] px-5 rounded mb-3">
        <input
          value={value}
          onChange={onChange}
          type={isShowPassword ? "text" : "password"}
          placeholder={placeholder || "Password"}
          className="input-box w-full text-md bg-transparent  px-5 py-3 rounded mb-4 bg-primary  p-2  my-1  border-2"
        />
      </div>
    </>
  );
};

export default PasswordInput;
