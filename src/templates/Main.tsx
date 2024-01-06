import React, { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased text-gray-700 bg-gray-200">
    {props.meta}
    {props.children}
  </div>
);

export { Main };
