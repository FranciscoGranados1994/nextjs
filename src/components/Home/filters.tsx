import React, { useState } from 'react';
import style from '../../../styles/Home/filters.module.css';

const Filters: React.FC = () => {
  const [displayButton, setDisplayButton] = useState<boolean>(false);

  function madeSearch() {
    setDisplayButton(false);
  }
  return (
    <section className={style.main_section}>
      <div className={style.div_search}>
        <h2 className={style.title_search}>Buscar por</h2>
        <div className={style.div_bar}>
          <input
            placeholder=" Busca un circulo"
            className={style.input_search}
            onFocus={() => {
              setDisplayButton(true);
            }}
          />
          <button
            className={
              displayButton ? style.button_search : style.button_inactive
            }
            onClick={() => {
              madeSearch();
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className={style.div_checkpoint}>
        <div className={style.div_container}>
          <div className={style.div_input}>
            <label className={style.label} htmlFor="public">
              Public
            </label>
            <input className={style.input} id="public" type="checkbox" />
          </div>
          <div className={style.div_input}>
            <label className={style.label} htmlFor="private">
              Private
            </label>
            <input className={style.input} id="private" type="checkbox" />
          </div>
          <div className={style.div_input}>
            <label className={style.label} htmlFor="all">
              All
            </label>
            <input className={style.input} id="all" type="checkbox" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filters;
