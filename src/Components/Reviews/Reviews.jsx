// src/components/Reviews/Reviews.jsx

import React from 'react';
import './Reviews.css';

// Import the image directly if stored in the src directory
import manImage from '../man.png';

function Reviews() {
    const customerFeedback = [
        
            {
                image: manImage,
                customerName: "Jane Doe",
                stars: 5,
                feedback: "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies."
            },
            {
                image: manImage,
                customerName: "John Smith",
                stars: 4,
                feedback: "Good product, but the delivery was a bit slow."
            },
            {
                image: manImage,
                customerName: "Emily Johnson",
                stars: 5,
                feedback: "Fantastic experience! The steak was cooked to perfection and the service was impeccable. Highly recommend!"
            },
            {
                image: manImage,
                customerName: "Michael Brown",
                stars: 3,
                feedback: "The quality was decent, but the portion sizes were smaller than expected."
            },
            {
                image: manImage,
                customerName: "Sarah Wilson",
                stars: 4,
                feedback: "Great atmosphere and the food was tasty. The wait time was a bit longer than anticipated, but worth it."
            },
            {
                image: manImage,
                customerName: "David Lee",
                stars: 2,
                feedback: "The food was cold and the service was not very attentive. Disappointing experience."
            },
            {
                image: manImage,
                customerName: "Sophia Martinez",
                stars: 5,
                feedback: "Absolutely loved the meal! The pasta was delicious and the dessert was the highlight of the evening."
            },
            {
                image: manImage,
                customerName: "James Taylor",
                stars: 4,
                feedback: "The restaurant had a cozy vibe and the food was good. I had the seafood platter which was fresh and well-prepared."
            },
            {
                image: manImage,
                customerName: "Olivia Anderson",
                stars: 3,
                feedback: "The food was average. It lacked flavor and the presentation could use some improvement."
            },
            {
                image: manImage,
                customerName: "Ethan Thomas",
                stars: 5,
                feedback: "Excellent dining experience! The service was quick and the meal was beyond expectations."
            },
            {
                image: manImage,
                customerName: "Isabella Jackson",
                stars: 4,
                feedback: "Good value for money. The burgers were juicy and the fries were crispy. I will come back again."
            },
            {
                image: manImage,
                customerName: "Alexander White",
                stars: 2,
                feedback: "The food was not up to the mark and the staff was unprofessional. I wouldn't recommend this place."
            },
            {
                image: manImage,
                customerName: "Mia Harris",
                stars: 5,
                feedback: "Wonderful dining experience! The ambiance was perfect for a romantic dinner and the food was superb."
            },
            {
                image: manImage,
                customerName: "Benjamin Clark",
                stars: 4,
                feedback: "The food was great, though the service was a bit slow. Overall, a good experience."
            },
            {
                image: manImage,
                customerName: "Ava Lewis",
                stars: 3,
                feedback: "Decent food but the restaurant was too noisy. It affected the overall dining experience."
            },
            {
                image: manImage,
                customerName: "Lucas Robinson",
                stars: 5,
                feedback: "Amazing food and excellent service. The chef's special was delightful and I loved every bite!"
            },
            {
                image: manImage,
                customerName: "Charlotte Walker",
                stars: 4,
                feedback: "Nice place with a great selection of dishes. The only downside was the long wait time for a table."
            },
            {
                image: manImage,
                customerName: "Daniel Hall",
                stars: 2,
                feedback: "The food did not meet my expectations and the service was lacking. I won't be returning."
            },
            {
                image: manImage,
                customerName: "Amelia Young",
                stars: 5,
                feedback: "A top-notch restaurant with delicious food and friendly staff. Highly recommended for a great dining experience."
            },
            {
                image: manImage,
                customerName: "Henry King",
                stars: 4,
                feedback: "Good food and excellent ambiance. The only issue was the parking, which was quite inconvenient."
            },
            {
                image: manImage,
                customerName: "Ella Wright",
                stars: 3,
                feedback: "Average meal. The flavors were lacking and the service was mediocre at best."
            },
            {
                image: manImage,
                customerName: "Oliver Scott",
                stars: 5,
                feedback: "Incredible meal! The dishes were flavorful and the service was top-notch. Will definitely return."
            },
            {
                image: manImage,
                customerName: "Grace Adams",
                stars: 4,
                feedback: "Great food and friendly staff. The only downside was that the place was a bit too crowded."
            },
            {
                image: manImage,
                customerName: "Liam Nelson",
                stars: 2,
                feedback: "Disappointing experience. The food was bland and the service was not attentive."
            },
            {
                image: manImage,
                customerName: "Harper Baker",
                stars: 5,
                feedback: "Fantastic experience! The food was amazing and the service was excellent. Highly recommend!"
            },
            {
                image: manImage,
                customerName: "Evelyn Harris",
                stars: 4,
                feedback: "Good food with a great atmosphere. A bit pricey but worth the visit."
            },
            {
                image: manImage,
                customerName: "Jack Carter",
                stars: 3,
                feedback: "The meal was okay, but the service was slow and the restaurant was quite noisy."
            },
            {
                image: manImage,
                customerName: "Zoe Green",
                stars: 5,
                feedback: "Perfect dining experience! The food was exquisite and the service was impeccable."
            },
        
            {
                image: manImage,
                customerName: "Jane Doe",
                stars: 5,
                feedback: "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies."
            },
            {
                image: manImage,
                customerName: "John Smith",
                stars: 4,
                feedback: "Good product, but the delivery was a bit slow."
            },
            {
                image: manImage,
                customerName: "Emily Johnson",
                stars: 5,
                feedback: "Fantastic experience! The steak was cooked to perfection and the service was impeccable. Highly recommend!"
            },
            {
                image: manImage,
                customerName: "Michael Brown",
                stars: 3,
                feedback: "The quality was decent, but the portion sizes were smaller than expected."
            },
            {
                image: manImage,
                customerName: "Sarah Wilson",
                stars: 4,
                feedback: "Great atmosphere and the food was tasty. The wait time was a bit longer than anticipated, but worth it."
            },
            {
                image: manImage,
                customerName: "David Lee",
                stars: 2,
                feedback: "The food was cold and the service was not very attentive. Disappointing experience."
            },
            {
                image: manImage,
                customerName: "Sophia Martinez",
                stars: 5,
                feedback: "Absolutely loved the meal! The pasta was delicious and the dessert was the highlight of the evening."
            },
            {
                image: manImage,
                customerName: "James Taylor",
                stars: 4,
                feedback: "The restaurant had a cozy vibe and the food was good. I had the seafood platter which was fresh and well-prepared."
            },
            {
                image: manImage,
                customerName: "Olivia Anderson",
                stars: 3,
                feedback: "The food was average. It lacked flavor and the presentation could use some improvement."
            },
            {
                image: manImage,
                customerName: "Ethan Thomas",
                stars: 5,
                feedback: "Excellent dining experience! The service was quick and the meal was beyond expectations."
            },
            {
                image: manImage,
                customerName: "Isabella Jackson",
                stars: 4,
                feedback: "Good value for money. The burgers were juicy and the fries were crispy. I will come back again."
            },
            {
                image: manImage,
                customerName: "Alexander White",
                stars: 2,
                feedback: "The food was not up to the mark and the staff was unprofessional. I wouldn't recommend this place."
            },
            {
                image: manImage,
                customerName: "Mia Harris",
                stars: 5,
                feedback: "Wonderful dining experience! The ambiance was perfect for a romantic dinner and the food was superb."
            },
            {
                image: manImage,
                customerName: "Benjamin Clark",
                stars: 4,
                feedback: "The food was great, though the service was a bit slow. Overall, a good experience."
            },
            {
                image: manImage,
                customerName: "Ava Lewis",
                stars: 3,
                feedback: "Decent food but the restaurant was too noisy. It affected the overall dining experience."
            },
            {
                image: manImage,
                customerName: "Lucas Robinson",
                stars: 5,
                feedback: "Amazing food and excellent service. The chef's special was delightful and I loved every bite!"
            },
            {
                image: manImage,
                customerName: "Charlotte Walker",
                stars: 4,
                feedback: "Nice place with a great selection of dishes. The only downside was the long wait time for a table."
            },
            {
                image: manImage,
                customerName: "Daniel Hall",
                stars: 2,
                feedback: "The food did not meet my expectations and the service was lacking. I won't be returning."
            },
            {
                image: manImage,
                customerName: "Amelia Young",
                stars: 5,
                feedback: "A top-notch restaurant with delicious food and friendly staff. Highly recommended for a great dining experience."
            },
            {
                image: manImage,
                customerName: "Henry King",
                stars: 4,
                feedback: "Good food and excellent ambiance. The only issue was the parking, which was quite inconvenient."
            },
            {
                image: manImage,
                customerName: "Ella Wright",
                stars: 3,
                feedback: "Average meal. The flavors were lacking and the service was mediocre at best."
            },
            {
                image: manImage,
                customerName: "Oliver Scott",
                stars: 5,
                feedback: "Incredible meal! The dishes were flavorful and the service was top-notch. Will definitely return."
            },
            {
                image: manImage,
                customerName: "Grace Adams",
                stars: 4,
                feedback: "Great food and friendly staff. The only downside was that the place was a bit too crowded."
            },
            {
                image: manImage,
                customerName: "Liam Nelson",
                stars: 2,
                feedback: "Disappointing experience. The food was bland and the service was not attentive."
            },
            {
                image: manImage,
                customerName: "Harper Baker",
                stars: 5,
                feedback: "Fantastic experience! The food was amazing and the service was excellent. Highly recommend!"
            },
            {
                image: manImage,
                customerName: "Evelyn Harris",
                stars: 4,
                feedback: "Good food with a great atmosphere. A bit pricey but worth the visit."
            },
            {
                image: manImage,
                customerName: "Jack Carter",
                stars: 3,
                feedback: "The meal was okay, but the service was slow and the restaurant was quite noisy."
            },
            {
                image: manImage,
                customerName: "Zoe Green",
                stars: 5,
                feedback: "Perfect dining experience! The food was exquisite and the service was impeccable."
            }
        ];
        
        // Add other feedback items here


    const renderStars = (numStars) => {
        const totalStars = 5;
        const stars = [];

        for (let i = 0; i < totalStars; i++) {
            const color = i < numStars ? 'gold' : '#ccc'; // Gold for filled stars, gray for empty stars
            stars.push(
                <i
                    key={i}
                    className='fas fa-star'
                    style={{ color: color, fontSize: '15px', marginRight: '2px' }}
                ></i>
            );
        }

        return stars;
    };

    return (
        <div className='ReviewsWrapper'>
            <h2 className='CustomerHeading'>Customer's Feedback</h2>
            <div className='ReviewsContent'> {/* Use this inner container for scrolling */}
                {customerFeedback.map((item, index) => (
                    <div key={index} className='ReviewItem'>
                        <div className='ReviewHeader'>
                            <div>
                                <img src={item.image} alt={`${item.customerName}'s profile`} className='CustomerImage' />
                            </div>
                            <div>
                                <h4 className='CustomerName'>{item.customerName}</h4>
                            </div>
                        </div>
                        <div className='StarRating'>
                            {renderStars(item.stars)}
                        </div>
                        <p className='FeedbackText'>{item.feedback}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reviews;
