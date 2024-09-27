import React, { useState } from 'react';

const FloatingLabelInput = () => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState('Jane Smith');

  return (
    <div className="relative border-2 border-gray-300 rounded-lg focus-within:border-blue-500">
      <input
        type="text"
        id="name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="block w-full px-4 py-2 text-gray-900 bg-transparent appearance-none focus:outline-none"
        placeholder=" "
      />
      <label
        htmlFor="name"
        className={`absolute left-4 top-2 text-gray-500 transition-all transform ${
          focus || value ? 'text-xs -translate-y-4' : 'text-sm'
        }`}
      >
        Name
      </label>
    </div>
  );
};

export default FloatingLabelInput;
