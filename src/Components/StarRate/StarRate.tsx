import React from 'react';
import { FaStar } from "react-icons/fa";

interface StarRateProps {
    rating: number; // rating should be between 0 and 5
}

const StarRate: React.FC<StarRateProps> = ({ rating }) => {
    return (
        <div>
            {[...Array(5)].map((_, index) => (
                <FaStar
                    key={index}
                    color={rating > index ? "gold" : "lightgray"}
                />
            ))}
        </div>
    );
};

export default StarRate;
