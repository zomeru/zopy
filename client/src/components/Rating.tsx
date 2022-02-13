import React from "react";

interface RatingProps {
  value: number;
  text: string;
  color: string;
}

const Rating = ({ value, text, color }: RatingProps) => {
  return (
    <div className="rating">
      {new Array(5).fill(0).map((_, i) => {
        return (
          <span>
            <i
              style={{ color }}
              className={
                value >= 1 + i
                  ? "fas fa-star"
                  : value >= 0.5 + i
                  ? "fas fa-star-half-alt"
                  : "far fa-star"
              }
            ></i>
          </span>
        );
      })}
      <span>{text && text}</span>
    </div>
  );
};

export default Rating;
