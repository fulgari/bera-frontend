import React from 'react';

type ListLayoutProps = {
  children: any[];
}
export default function (props: ListLayoutProps) {
  const { children } = props;
  return (<div>
    {children}
  </div>)
}