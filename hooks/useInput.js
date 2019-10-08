import React, {useState} from "react";

const useInput = (initialVal) => {
    const [value, setValue] = useState(initialVal);
    const onChange = text => {
        setValue(text);
    };
    return {value, onChange, setValue};
};

export default useInput;

