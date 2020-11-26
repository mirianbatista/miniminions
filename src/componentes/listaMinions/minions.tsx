import React, { useState, useEffect } from "react";


function useMinions() {
    const [minions, setMinions] = useState([])

    useEffect(() => {
		fetch("https://bmuxxox1t5.execute-api.sa-east-1.amazonaws.com/dev/minions")
			.then((response) => response.json())
			.then((data) => {
				setMinions(data)
			})
	}, [])

	return minions
}


export default useMinions;