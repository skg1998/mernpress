import React from 'react';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';

const DisplayRating = (props) => {
  const { rating, numReviews, caption } = props;
  return (
    <div className="rating">
      <span>
        {rating >= 1
          ? <StarIcon />
          : rating >= 0.5
            ? <StarHalfIcon />
            : <StarBorderOutlinedIcon />
        }
      </span>
      <span>
        {rating >= 2
          ? <StarIcon />
          : rating >= 1.5
            ? <StarHalfIcon />
            : <StarBorderOutlinedIcon />
        }
      </span>
      <span>
        {rating >= 3
          ? <StarIcon />
          : rating >= 2.5
            ? <StarHalfIcon />
            : <StarBorderOutlinedIcon />
        }
      </span>
      <span>
        {rating >= 4
          ? <StarIcon />
          : rating >= 3.5
            ? <StarHalfIcon />
            : <StarBorderOutlinedIcon />
        }
      </span>
      <span>
        {rating >= 5
          ? <StarIcon />
          : rating >= 4.5
            ? <StarHalfIcon />
            : <StarBorderOutlinedIcon />
        }
      </span>
      {caption ? (
        <span>{caption}</span>
      ) : (
        <span title="Reviews">{numReviews}</span>
      )}
    </div>
  );
}

export default DisplayRating;