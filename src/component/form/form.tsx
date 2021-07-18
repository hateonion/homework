import React from "react";

export const Form: React.FC = ({ children }) => {
  const childrenArr = React.Children.toArray(children).map((c) => {
    return React.cloneElement(c, { ref: c.props.name });
  });

  return <form>{childrenArr}</form>;
};
