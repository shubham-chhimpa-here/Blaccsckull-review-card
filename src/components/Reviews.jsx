import Card from "./Card";
import reviews from '../data/reviews_data.json';

export default function Reviews() {
    // console.log(reviews)
    return <>
        <div>

            {
                reviews.map((review, index) => {
                    return <Card key={index} review={review} />
                })
            }
        </div>
    </>
}