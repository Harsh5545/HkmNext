// Button.js
import React from 'react'; // Import Link from react-router-dom
import classNames from 'classnames';

function Button(props) {
  const { className, style, onClick, children,value } = props;
  const defaultStyles = "";

  // Combine default styles and provided className
  const combinedClassName = classNames(defaultStyles, className);


  return (
    <div>
      <button className={combinedClassName} style={style} onClick={onClick}>
        {children} {value}
      </button>
    </div>
  );
}

export default Button;
