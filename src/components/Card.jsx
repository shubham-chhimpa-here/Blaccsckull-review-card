import Rating from "./Rating";
import ReviewHighlighter from "./ReviewHighlighter";

export default function Card({review}) {
    const {analytics, content} = review;
    // console.log(review.content.split('.'))

    const x = analytics.forEach(analytic => {
analytic.sentences.forEach(sentence => {
    // console.log(sentence)
}) 
    })

    return <>

        <div className="p-10 max-w-5xl flex gap-2 m-auto ">

            <div className=" w-10 h-10">
                <img src={review.source.icon} alt="" />
            </div>
            <div className=" w-full flex flex-col gap-3">
                <div className="flex justify-between ">
                    <div> <span className="font-bold">{review.reviewer_name}</span> wrote a review at <span className="font-bold">{review.source.name}</span></div>
                    <div> bookmark</div>
                </div>
                <div className="flex gap-2"> <Rating /> {review.date}</div>
                <div>
                   <ReviewHighlighter data = {review}/>
                </div>
            </div>

        </div>
    </>
}