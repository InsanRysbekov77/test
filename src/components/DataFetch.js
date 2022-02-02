import { useState, useEffect } from 'react'
import classes from './DataFetch.module.css'
const  DataFetch = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <>
            <div className={classes.container}>
                {users.map((users) => (
                    <div className={classes.users}>
                        <h5>{users.id}</h5>
                        <img src={users.thumbnailUrl} />
                        <h3>{users.title}</h3>
                    </div>
                ))}
            </div>
        </>
    )
}
export default DataFetch;









