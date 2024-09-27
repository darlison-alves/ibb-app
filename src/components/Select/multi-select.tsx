import React, { useState } from 'react';
import { IOptionMultiSelect } from './types';
import { EPaymentMethod } from '../../common/enums/payment.method.enum';


const list: Array<IOptionMultiSelect> = [
    {
        id: EPaymentMethod.CC,
        label: "Cartão Crédito"
    },
    {
        id: EPaymentMethod.BOL,
        label: "Boleto"
    },
    {
        id: EPaymentMethod.PIX,
        label: "Pix"
    }
]

const MultiSelect = () => {
  const [options] = useState<Array<IOptionMultiSelect>>(list);
  const [selected, setSelected] =  useState<Array<IOptionMultiSelect>>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSelect = (option: IOptionMultiSelect) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((item) => item.id !== option.id));
    } else {
      setSelected([...selected, option]);
    }
  };

  return (
    <div className="relative w-64 text-sm text-gray-700 my-4">
        <label>Formas de pagamento</label>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-wrap border rounded p-2 bg-white cursor-pointer"
      >
        {selected.map((option, index) => (
          <div
            key={index}
            className="bg-blue-500 text-white rounded px-2 mr-2 mb-2 flex items-center"
          >
            <span>{option.label}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelected(selected.filter((item) => item !== option));
              }}
              className="ml-2"
            >
              &times;
            </button>
          </div>
        ))}
        <div className="flex-1"></div>
        <button className="ml-auto">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute mt-2 w-full rounded-md shadow-lg bg-white z-10">
          <ul className="max-h-48 overflow-y-auto p-2">
            {options.map((option, index) => (
              <li
                key={index}
                className={`cursor-pointer select-none p-2 ${
                  selected.includes(option) ? 'bg-gray-100' : ''
                }`}
                onClick={() => toggleSelect(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
