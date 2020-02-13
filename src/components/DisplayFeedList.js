import React, {useState} from "react";
import Data from '../data/data';
import AddFeed from "./AddFeed";

const DisplayFeedList = () => {

    let [getDataButtonStatus, setGetDataButtonStatus] = useState(true);
    let [feed, setFeed] = useState([{
        user: "",
        value: "",
        id: '',
        timestamp: "",
        timeZoneOffset: "",
        likes: ''
    }]);

    const getFeeds = () => {
        Data.feed.map(data => {
            setFeed(prevState => [
                ...prevState, {
                    user: data.user,
                    value: data.value,
                    id: data.id,
                    timestamp: data.timestamp,
                    timeZoneOffset: data.timeZoneOffset,
                    likes: data.likes
                }]);
        });
        setGetDataButtonStatus(!getDataButtonStatus);
    };


    const addFeed = (value, desc, valueID, likesCount) => {
        setFeed(prevState => [
            ...prevState, {
                user: value,
                value: desc,
                id: valueID,
                likes: likesCount,
                timestamp: Date.now(),
                timeZoneOffset: 300,
            }]);
    };

    const style = {
        cursor: "pointer",
        fontSize: 25,
        padding: "0",
        textAlign: "center",
        userSelect: "none",
        color: "Black",
        border: "1px solid black"
    };

    return (
        <> {getDataButtonStatus
            ?
            <div>
                <button onClick={getFeeds}>GET the current Feeds list</button>
            </div>
            :
            <div>
                <table style={style}>
                    <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Value</th>
                        <th>Value ID</th>
                        <th>No of Likes</th>
                        <th>Time zone offset</th>
                        <th>Time Stamp</th>
                    </tr>
                    </thead>
                    <tbody>
                    {feed.map(val => (
                        <tr key={val.user}>
                            <td>{val.user}</td>
                            <td>{val.value}</td>
                            <td>{val.id}</td>
                            <td>{val.likes}</td>
                            <td>{val.timeZoneOffset}</td>
                            <td>{val.timestamp}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <AddFeed addFeed={addFeed}/>
            </div>
        }
        </>
    )
};

export default DisplayFeedList;