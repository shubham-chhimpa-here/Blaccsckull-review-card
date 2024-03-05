import Toltip from "./Toltip"

export default function ReviewHighlighter({ data }) {
    const { content, topic } = data
    let x, y, sentiment
    // const {content, analytics} = data;

    // const x = analytics.forEach(analytic => {
    // analytic.sentences.forEach(sentence => {


    // }) 
    // })
    console.log(data.highlight_indices)
    if (data.highlight_indices) {
        x = (data.highlight_indices[0][0])
        y = (data.highlight_indices[0][1])
        sentiment = data.highlight_indices[0][2]
    }

    return <>
        <>
            
            {content.slice(0, x)}
            {/* <span className={`${sentiment}`}> {content.slice(x, y)} </span> */}
         { data.highlight_indices && <Toltip data = {{content : content.slice(x, y), topic , sentiment}}/>}
            {content.slice(y, -1)}

        </>
    </>
}