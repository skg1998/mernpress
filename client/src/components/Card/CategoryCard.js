import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const CategoryCard = (props) => {
  const { name, image, parent } = props;

  return (
    <Card >
      <CardContent>
        <div>Card</div>
      </CardContent>
    </Card>
  );
}

export default CategoryCard;