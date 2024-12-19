import React from "react";
import { useForm } from "react-hook-form";

const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function sendData(formaniMalumoti) {
    console.log(formaniMalumoti);
  }
  return (
    <div className="flex justify-center dark:bg-dark text-xs">
      <form
        onSubmit={handleSubmit(sendData)}
        className="flex flex-col gap-2 p-4"
      >
        <input
          type="email"
          className="p-2 rounded-md"
          {...register("email", { required: true, minLength: 5 })}
        />
        {errors.email && (
          <p className="text-deep-orange-600 m-0 text-center text-xs">
            email kiritilishi shart!
          </p>
        )}
        <input
          type="password"
          className="p-2 rounded-md"
          {...register("password", {
            required: true,
            pattern:
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
          })}
        />
        {errors.password?.type == "required" && (
          <p className="text-deep-orange-600 m-0 text-center text-xs">
            parol kiritilishi shart!
          </p>
        )}
        {errors.password?.type == "pattern" && (
          <>
            <p className="text-deep-orange-600 m-0 text-center text-xs">
              Parol kamida 8 ta harf, 1 ta katta harf
            </p>
            <p className="text-deep-orange-600 m-0 text-center text-xs">
              1 ta son
            </p>
            <p className="text-deep-orange-600 m-0 text-center text-xs">
              1 ta sinvol
            </p>
          </>
        )}
        <input type="submit" className="p-1 rounded-md bg-uzum" />
      </form>
    </div>
  );
};

export default Auth;
