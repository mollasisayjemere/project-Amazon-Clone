// import React from 'react'
// import numeral from 'numeral'
// function CurrencyFormater{value}{
//   const formatedPrice = numeral(value).format('$0,0.00');

//   return (
//     {formatedPrice}
//     <div>

//     </div>
//   )
// }
// export default CurrencyFormater

import React from "react";
import numeral from "numeral";
function CurrencyFormater  ({ value })  {
  const formattedPrice = numeral(value).format("$0,0.00");

  return (
    <span>{formattedPrice}</span> 
  );
};
export default CurrencyFormater;