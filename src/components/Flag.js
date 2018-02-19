import React from 'react'

const Flag = ( data) => {
  let flagText=' ',flagStyle='flag';
if (data.isSale) {
  flagText = 'Sale';
  flagStyle = 'flag flag__sale';
} else if (data.isExclusive) {
  flagText = 'Exclusive';
  flagStyle = 'flag flag__exclusive';
}
  return (
    <div className={flagStyle}>
      {flagText}
    </div>
  )
}

export default Flag
