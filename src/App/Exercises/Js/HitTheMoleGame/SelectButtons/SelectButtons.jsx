import { Button } from '../Button/Button';
import { useState } from 'react';

export const SelectButtons = (props) => {
  // props.options
  const { options } = props;
  const [newOptions, setNewOptions] = useState(options);

  const handleClick = (value) => {
    //   const tempOptions = newOptions.map((option) => {
    //   return {
    //     ...option,
    //     isActive: option.value === value,
    //   };
    // });

    setNewOptions(
      newOptions.map((option) => {
        return {
          ...option,
          isActive: option.value === value,
        };
      })
    );
  };

  return (
    <>
      {newOptions.map(({ value, isActive, label }) => (
        <Button
          onClick={() => handleClick(value)}
          key={value}
          isActive={isActive}
        >
          {label}
        </Button>
      ))}
    </>
  );
};
