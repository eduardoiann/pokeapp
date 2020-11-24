import React from 'react';
import loading from '../../utils/loading.gif';
import './loading.scss';

export default function Loading() {
  return <img style={{width: "10rem"}} alt="pikachu running as a loading gif" className="loading" src={loading} />;
}
