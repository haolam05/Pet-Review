import { useState } from "react";

const PawsRatingInput = ({ rating, disabled, onChange }) => {
  const [activeRating, setActiveRating] = useState(rating);

  function Paw({ val }) {
    return (
      <div
        className={activeRating >= val ? 'filled' : 'empty'}
        onMouseEnter={() => !disabled && setActiveRating(val)}
        onMouseLeave={() => !disabled && setActiveRating(rating)}
        onClick={() => !disabled && onChange(val)}
      >
        <i className="fa fa-paw"></i>
      </div>
    );
  }

  return (
    <div className="rating-input">
      {Array.from(Array(5).keys()).map(n => <Paw key={n + 1} val={n + 1} />)}
    </div>
  );

  // return (
  //   <>
  //     {/* <input
  //       type="number"
  //       disabled={disabled}
  //       value={rating}
  //       onChange={onChange}
  //     /> */}
  //     <div className="rating-input" >
  //       <div className={activeRating >= 1 ? 'filled' : 'empty'} onMouseEnter={() => !disabled && setActiveRating(1)} onMouseLeave={() => !disabled && setActiveRating(rating)} onClick={() => !disabled && onChange(1)} >
  //         <i className="fa fa-paw"></i>
  //       </div>
  //       <div className={activeRating >= 2 ? 'filled' : 'empty'} onMouseEnter={() => !disabled && setActiveRating(2)} onMouseLeave={() => !disabled && setActiveRating(rating)} onClick={() => !disabled && onChange(2)} >
  //         <i className="fa fa-paw"></i>
  //       </div>
  //       <div className={activeRating >= 3 ? 'filled' : 'empty'} onMouseEnter={() => !disabled && setActiveRating(3)} onMouseLeave={() => !disabled && setActiveRating(rating)} onClick={() => !disabled && onChange(3)} >
  //         <i className="fa fa-paw"></i>
  //       </div>
  //       <div className={activeRating >= 4 ? 'filled' : 'empty'} onMouseEnter={() => !disabled && setActiveRating(4)} onMouseLeave={() => !disabled && setActiveRating(rating)} onClick={() => !disabled && onChange(4)} >
  //         <i className="fa fa-paw"></i>
  //       </div>
  //       <div className={activeRating >= 5 ? 'filled' : 'empty'} onMouseEnter={() => !disabled && setActiveRating(5)} onMouseLeave={() => !disabled && setActiveRating(rating)} onClick={() => !disabled && onChange(5)} >
  //         <i className="fa fa-paw"></i>
  //       </div>
  //     </div >
  //   </>
  // );
};

export default PawsRatingInput;
