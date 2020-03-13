import * as React from 'react';
import './hello-world.css';

export interface TProps {
  title: string;
}

const HelloWorld = ({ title }: TProps) => <div className="hello-world">{title}</div>;

export default HelloWorld;
