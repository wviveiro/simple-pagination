import React, {useState} from 'react';
import Pagination from './lib';
import './playgrond.scss';
import './styles/index.scss';

function Playground() {
  const [page, setPage] = useState(1);
  return (
    <div className="playground-area">
      <h1>Component Playgrond</h1>
      <hr />
      <p>Here you can play with you component before publishing it.</p>
      <Pagination total={100} limit={20} page={page} changePage={(page) => setPage(page)} />
    </div>
  );
}

export default Playground;
