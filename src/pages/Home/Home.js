import React, {useState, useEffect} from "react";
import API from "../../utils/API";

function Home () {
    const [user, setUser] = useState({})

    useEffect(()=>{
        API.getUsers()
        .then(res=>{
            setUser(res.data[0])
        })
        .catch(err=>{
            console.log(err)
        })
        // eslint-disable-next-line
    },[])

    return (
        <div className="zs-home d-flex flex-column col-12 p-5">
        <div className="col-lg-9 col-sm-12 mx-auto mb-5">
            <h1>About Me</h1>
            <img src={user.img} className="col-3 my-4 rounded" alt="My Pic"/>
            <p>{user.about}</p>
        </div>
    </div>
    )
}

export default Home