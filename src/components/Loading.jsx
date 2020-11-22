import React from 'react';
import loading from '../utils/loading.gif';
import './loading.scss';

export default function Loading() {
  return <img alt="pikachu running as loading gif" className="loading" src={loading} />;
}
