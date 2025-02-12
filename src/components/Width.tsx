'use client';
import React from 'react';

export default function Width() {
  // erro
  const [width, setWidth] = React.useState(
    document.documentElement.clientWidth,
  );

  return <p>Width: {width}</p>;
}