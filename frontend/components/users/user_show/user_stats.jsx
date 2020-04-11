import React from 'react';
import UserStatsBar from './user_stats_bar';

const UserStats = props => {
    let {user} = props;
    let {name, imageUrl,createdAt} = user;
    let stats = [
        ["POWER",5],
        ["HEALTH", 2],
        ["SPEED", 5],
        ["GUTS", 5],
        ["TECHNIQUE",3]
    ]
    return (

        <div className="user-stats">
            <img src={window[imageUrl]} 
                className="user-stats-image"/>
            <p className="user-stats-name">
                {name}
            </p>
            <ul className="user-stats-bars">
                {stats.map((stat,i) => 
                <UserStatsBar 
                    key={i}
                    stat={stat}
                    />)}
            </ul>
        </div>
    )
}

export default UserStats;