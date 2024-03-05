import Toltip from "./Toltip"

export default function ReviewHighlighter({ data }) {
    const { content, topic, analytics } = data
    let x = [], y, sentiment

    let start, end;


    for (let analytic of analytics) {

        x = analytic.highlight_indices?.reduce((acc, cur) => {

            return [...acc, [...cur, analytic.topic]]
        }, x)
    }

    start = x[0]?.[0]
    const length = x.length;
    end = x[length - 1]?.[1]


    x.sort((a, b) => {
        return a[0] - b[0]
    })



    return <>
        <span>
            {content.slice(0, start)}
        </span>
        {
            x?.map((item, i) => {
                return <span key={JSON.stringify(item)}>
                    {
                        <Toltip data={{ content: content.slice(item[0], item[1]), topic: item[3], sentiment: item[2] }} />
                    } {
                        x[i + 1] && content.slice(item[1], x[i + 1]?.[0])

                    }
                </span>
            })
        }
        <span>
            {content.slice(end, -1)}
        </span>

    </>

}