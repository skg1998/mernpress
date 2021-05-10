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
          ? <StarIcon style={{ color: 'yellow' }} />
          : rating >= 0.5
            ? <StarHalfIcon />
            : <StarBorderOutlinedIcon />
        }
      </span>
      <span>
        {rating >= 2
          ? <StarIcon style={{ color: 'yellow' }} />
          : rating >= 1.5
            ? <StarHalfIcon />
            : <StarBorderOutlinedIcon />
        }
      </span>
      <span>
        {rating >= 3
          ? <StarIcon style={{ color: 'yellow' }} />
          : rating >= 2.5
            ? <StarHalfIcon />
            : <StarBorderOutlinedIcon />
        }
      </span>
      <span>
        {rating >= 4
          ? <StarIcon style={{ color: 'yellow' }} />
          : rating >= 3.5
            ? <StarHalfIcon />
            : <StarBorderOutlinedIcon />
        }
      </span>
      <span>
        {rating >= 5
          ? <StarIcon style={{ color: 'yellow' }} />
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