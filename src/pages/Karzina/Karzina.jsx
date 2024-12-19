import React from "react";

const Karzina = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen dark:bg-dark dark:text-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-32 h-32">
          <img
            src="https://uzum.uz/static/img/shopocat.490a4a1.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-xl font-bold text-gray-800">
          Добавьте то, что понравилось
        </h1>
        <p className="text-center text-gray-600 text-sm">
          Нажмите на ♡ в товаре. Войдите в аккаунт и всё избранное сохранится
        </p>
        <button className="px-6 py-2 text-white bg-purple-600 rounded-lg shadow-lg hover:bg-purple-700">
          Войти в аккаунт
        </button>
      </div>
    </div>
  );
};

export default Karzina;
