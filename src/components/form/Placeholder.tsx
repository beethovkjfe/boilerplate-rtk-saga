import React from 'react';

function Placeholder(props: any) {
  const { text } = props;
  return <div className="custom-placeholder">{text}</div>;
}

export default Placeholder;
