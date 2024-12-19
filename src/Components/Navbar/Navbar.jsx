import React, { useEffect, useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { IoIosListBox, IoIosSearch, IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useStore } from "../../store/store";
import { useTranslation } from "react-i18next";
import Cart from "../../pages/Cart/Cart";

const Navbar = () => {
  const {t,i18n}= useTranslation();
  const [language,setLanguage] = useState('ru'); 
  const [darkMode, setdarkMode] = useState(() => {
    const saqlangan = localStorage.getItem("darkMode");
    return saqlangan ? saqlangan : false;
  });
  const { favorite,cart } = useStore();
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  function changeLanguage(){
   if(language==='uz'){
    i18n.changeLanguage("ru")
    setLanguage('ru')
   }else{
    i18n.changeLanguage("uz")
    setLanguage('uz')
   }
  }
  return (
    <div className="py-5">
      <div className=" ">
        <div className="flex justify-between bg-slate-100 dark:bg-dark dark:text-white px-32">
          <div className="flex items-center">
            <CiLocationOn />
            <p className="underline pl">{t('Tashkent')}</p>
            <p className="pl-5 font-semibold">{t('pick-up point')}</p>
          </div>

          <div className="flex justify-between">
            <a
              className="pr-2 text-purple-500 font-semibold border-r-2"
              href=""
            >
             {t('Become a seller')}
            </a>
            <a className="pl-2 text-purple-500 font-semibold" href="">
            {t('Open a pick-up point')}
            </a>
            <a className="pl-4" href="">
            {t('Question and Answer')}
            </a>
            <a className="pl-4" href="">
            {t('My orders')}
            </a>
            <button className="pl-4 flex" onClick={changeLanguage}>
             {language == "uz" ? "Uzbek" : "Russian"}
            </button>
          </div>
        </div>

        <div className="px-32 pt-5 flex items-center dark:bg-dark dark:text-white">
          <Link to={"/"}>
            <img
              className="w-60 "
              src="https://uzum.com/images/services/market-horizontal-logo.png"
              alt=""
            />
          </Link>
          <button className="ml-10 flex items-center gap-2 bg-[#ceccff] text-[#7f4dff] rounded-md p-2">
            <IoIosListBox className="size-5" />
            {t('Catalog')}
          </button>

          <div className="ml-2 h-[42px] border-2 rounded-md  flex justify-between items-center w-[520px]">
            <p className="ml-5 text-gray-500 ">{t('Search products and categories')}</p>
            <div className=" w-20 h-[42px] rounded-md flex items-center justify-center bg-[#edeff2]  ">
              <IoIosSearch className="size-5" />
            </div>
          </div>

          <div className="flex gap-4 pl-10 ">
            <Link
              className="flex items-center gap-2 text-lg hover:bg-gray-100"
              to={"/auth"}
            >
              <VscAccount className="size-5" />
              {t('Login')}
            </Link>
            <Link
              className="flex items-center gap-2 text-l hover:bg-gray-100 relative"
              to={"/favorite"}
            >
              <IoMdHeartEmpty className="size-6" />
              {t('Featured')}
              <span className="absolute -right-1 -top-1 text-sm text-uzum">
                {favorite.length == 0 ? "" : favorite.length}
              </span>
            </Link>
            <Link
              className="flex items-center gap-2 text-lg hover:bg-gray-100 relative" 
              to={"/cart"}
            >
              <MdOutlineShoppingBag className="size-5 " />
              {t('Basket')}
              <span className="absolute -right-1 -top-1 text-sm text-uzum">
                {cart.length == 0 ? "" : cart.length}
              </span>
            </Link>
            <button
              className="flex items-center gap-2 text-lg hover:bg-gray-100 "
              onClick={() => setdarkMode(!darkMode)}
            >
              {darkMode ? (
                <>
                  <BsSunFill className="size-5" />
                  Light
                </>
              ) : (
                <>
                  <BsMoonFill className="size-5" />
                  Dark
                </>
              )}
            </button>
          </div>
        </div>

        <div className="px-32 pt-5 flex justify-center items-center gap-[14px] dark:bg-dark dark:text-white">
          <a className="flex gap-1" href="">
            <img
              className="w-[24px]"
              src="https://static.uzum.uz/fast_categories/every1.png"
              alt=""
            />
            <p>{t('Benefit every day')}</p>
          </a>
          <div className=" flex gap-[14px] text-gray-500 text-sm">
            <a href="">{t('Electronics')}</a>
            <a href="">{t('Household appliances')} </a>
            <a href="">{t('Cloth')}</a>
            <a href="">{t('Shoes')}</a>
            <a href="">{t('Accessories')}</a>
            <a href="">{t('Beauty and care')}</a>
            <a href="">{t('Health')}</a>
            <a href="">{t('Household goods')}</a>
            <a href="">{t('Construction and repair')}</a>
            <button className="flex items-center gap-1">
            {t('More')}
              <FaChevronDown className="size-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
