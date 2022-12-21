import React, { useState, useEffect } from "react";


function DateTime() {
    const [date, setDate] = useState(new date())

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date('YYYY-MM-DD')), 1000)

        return function cleanUp() {
            clearInterval(timer)
        }
    })

    return(
        <div>
            <p>{date.toLocalDateString()} {date.toLocalTimeString()}</p>
        </div>
    )
}

export default Date;