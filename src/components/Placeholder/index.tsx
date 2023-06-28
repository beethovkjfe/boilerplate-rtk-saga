import React from 'react';

import { PlaceholderProps } from './types';

function Placeholder(props: PlaceholderProps) {
  const { text } = props;
  return <div className="custom-placeholder">{text}</div>;
}

export default Placeholder;
