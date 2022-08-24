import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { label, classname,background } = config;
  console.log(classname)
  return (
    <button className={classname} onClick={() => selectNextBackground({background: background})}>
      {label}
    </button>
  )
}
export default ColourSelector;
