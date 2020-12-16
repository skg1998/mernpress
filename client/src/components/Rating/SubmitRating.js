import React, { Component } from 'react';
import DisplayRating from './DisplayRating'
import {withStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom'
import { Card ,CardHeader } from '@material-ui/core';

class SubmitRating extends Component {
  constructor() {
    super()
    this.state = {
     
    }
  }
  
  submitHandler={

  }

  render(){
    return (
      <div>
          <Card>
            <CardHeader title="User Review" />
            <div>
              {/* {product.reviews.length === 0 && (
                <h2>There is no review</h2>
              )} */}
              <ul>
                {/* {product.reviews.map((review) => (
                  <li key={review._id}>
                    <strong>{review.name}</strong>
                    <DisplayRating rating={review.rating} caption=" " />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </li>
                ))} */}
                <li>
                  {true ? (
                    <form className="form" onSubmit={this.submitHandler}>
                      <div>
                        <label htmlFor="rating">Rating</label>
                        <select
                          id="rating"
                        >
                          <option value="">Select...</option>
                          <option value="1">1- Poor</option>
                          <option value="2">2- Fair</option>
                          <option value="3">3- Good</option>
                          <option value="4">4- Very good</option>
                          <option value="5">5- Excelent</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="comment">Comment</label>
                        <textarea
                          id="comment"
                        ></textarea>
                      </div>
                      <div>
                        <label />
                        <button className="primary" type="submit">
                          Submit
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div>
                      Please <Link to="/signin">Sign In</Link> to write a review
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </Card>
      </div>
    );
  }
}

export default SubmitRating;