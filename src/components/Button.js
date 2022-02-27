import React from "react";

export default function Button({ children, className, href, ...rest }) {
  if (href) {
    return (
      <a
        {...rest}
        href={href}
        className={`button is-danger is-rounded button ${className}`}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      {...rest}
      className={`button is-danger is-rounded button ${className}`}
    >
      {children}
    </button>
  );
}
