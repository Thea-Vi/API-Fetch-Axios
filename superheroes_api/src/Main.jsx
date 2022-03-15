import React, { useState, useEffect } from 'react'
import axios from 'axios';

// AXIOS - PACKAGE 1 DEPENDENCY 
// WHY USE AXIOS
// AUTOMATIC TRANSFORMS FOR JSON DATA
// npm install axios

// FETCH VS AXIOS
// FETCH REQUIRES RETURN JSON
// AXIOS REQUIRES TO ACCESS .DATA
const Main = () => {

    const [heroes, setHeroes] = useState([])

    // controls
    useEffect(() => {
        axiosHeroes()
    }, [])


    const fetchHeroes = () => {
        fetch("https://akabab.github.io/superhero-api/api//all.json")
            .then(res => {
                return res.json()


            })
            .then(jsonRes => {
                // set the heroes response to setHeroes
                setHeroes(jsonRes)
            })
            .then(someErr => console.log(someErr))
    }

    const axiosHeroes = () => {
        axios.get("https://akabab.github.io/superhero-api/api//all.json")
            .then((res) => {
                setHeroes(res.data)

            })
            .catch(err => console.log(err))

    }

    const content = (
        heroes.length === 0 ?
        <h3>Please wait, fetching for data</h3>
        :
        <table>
            <thead>
                <tr>
                    <th>Hero Name</th>
                    <th>FullName</th>
                    <th>Publisher</th>
                    <th>Images</th>
                </tr>
            </thead>
            <tbody>
                {
                    heroes.length === 0 ?
                        <h3>Fetching data, please wait</h3>
                        :

                        heroes.map((hero) => {
                            return (
                                <tr key={hero.id}>
                                    <td>{hero.name}</td>
                                    <td>{hero.biography.fullName === "" ? "UNKNOWN" : hero.biography.fullName}</td>
                                    <td>{hero.biography.publisher}</td>
                                    <td><img width="100px" src={hero.images.md} alt={`of ${hero.name}`} /></td>
                                </tr>
                            )

                        })

                }

            </tbody>
        </table>
    )

    // TO VIEW THE RESULTS - OPEN NETWORK CLICK ON JSON TO VIEW RESULTS
    return (
        <div>
            <h2>SuperHeroes</h2>
            <hr />
            <button onClick={fetchHeroes}>Fetch SuperHeroes</button>
            <button onClick={axiosHeroes}>Axios SuperHeroes</button>
            <hr />
            {/* {JSON.stringify(heroes)} */}
            {content}

        </div>
    )
}

export default Main