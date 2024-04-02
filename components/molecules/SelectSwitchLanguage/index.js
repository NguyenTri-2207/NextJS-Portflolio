/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import languageDetector from "../../../lib/languageDetector";
import { RiArrowDropDownLine } from "react-icons/ri";
import Select from "react-select";
import { useRouter } from "next/router";

import i18nextConfig from "next-i18next.config";
import CustomOption from "./CustomOption";
import Dropdown from "./Dropdown";
import { customStyles } from "./CustomStyles";
const options = [
  {
    value: "en",
    label: "English",
    image: "https://test.bbcincorp.com/assets/flags/4x3/gb.svg",
  },
  {
    value: "vi",
    label: "VietNam",
    image: "https://test.bbcincorp.com/assets/flags/4x3/vn.svg",
  },
];

function SelectSwitchLanguage() {
  const router = useRouter();
  const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale; //hk
  const defaultLocale = () => {
    let find = options.filter((item) => item.value === currentLocale);
    return find;
  };
  const optionsDefaultLocale = defaultLocale();

  const [locale, setLocale] = useState(optionsDefaultLocale[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handedOnchange = (e) => {
    setLocale(e);
    setIsOpen(!isOpen);
    if (currentLocale === e.value) {
      return null;
    } else {
      let href = router.asPath; // url current include param  /en/a?abc
      let pName = router.pathname; // url current /en/a

      Object.keys(router.query).forEach((item) => {
        if (item === "locale") {
          pName = pName.replace(`[${item}]`, e.value); //thay thế en bằng vi
          return;
        }
        pName = pName.replace(`[${item}]`, router.query[item]);
      });

      if (e.value) {
        href = pName;
      }

      if (href.indexOf(`/${e.value}`) < 0) {
        href = `/${e.value}${href}`;
      }

      languageDetector.cache(e.value);
      router.push(`/${href}`);
    }
  };

  return (
    <div className="w-full dark:text-white text-black mr-2">
      <Dropdown
        isOpen={isOpen}
        onClose={() => setIsOpen(!isOpen)}
        target={
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex p-2  items-center cursor-pointer select-none  "
          >
            <div className="block">
              <img
                width={10}
                height={10}
                src={locale?.image}
                alt={" flag"}
                className=" h-7 w-7 rounded-full object-cover "
              />
            </div>

            <span className="ml-2 hidden lg:block text-sm font-medium dark:text-white text-black ">
              {locale.label}
            </span>
            <div>
              <RiArrowDropDownLine size={20} />
            </div>
          </div>
        }
      >
        <Select
          menuIsOpen
          options={options}
          value={locale}
          styles={customStyles}
          components={{
            Option: CustomOption,
            IndicatorSeparator: () => null,
          }}
          onChange={handedOnchange}
          //   autoFocus
          //   isClearable={false}
          //   backspaceRemovesValue={false}
          //   isSearchable={false}
          //   controlShouldRenderValue={false}
          //   hideSelectedOptions={false}
          //   tabSelectsValue={false}
        />
      </Dropdown>
    </div>
  );
}

export default SelectSwitchLanguage;
