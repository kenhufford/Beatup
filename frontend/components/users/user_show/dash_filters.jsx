import React from 'react';
import DashFilterCard from './dash_filter_card';

const DashFilters = props => {
    let {groups, events, selectedGroupId, setSelectedGroupId, selectedEventId, setSelectedEventId, selectedStat, setSelectedStat } = props;
    let groupsArray = groups !== undefined ? Object.values(groups) : [];
    let eventsArray = events !== undefined ? Object.values(events) : [];
    let cards = [
        {userItems: groupsArray,
        selectedName: selectedGroupId !== undefined ? groups[selectedGroupId].name : "Filter by squad",
        setSelectedId: setSelectedGroupId,
        setToUndefined: setSelectedEventId
        },

        {userItems: eventsArray,
        selectedName: selectedEventId !== undefined  ? events[selectedEventId].title : "Filter by brawl",
        setSelectedId: setSelectedEventId,
        setToUndefined: setSelectedGroupId
        },

        {userItems: [
            { id: "Power", title:"Power"}, 
            { id: "Speed", title: "Speed"},
            { id: "Guts" , title: "Guts" },
            { id: "Technique", title: "Technique" }
        ],
        selectedName: selectedStat,
        setSelectedId: setSelectedStat,
        },
    ]

    let title = "Select a squad or brawl to see the competition";
    if (selectedGroupId) title = `${selectedStat} ratings of brawlers in ${groups[selectedGroupId].name}`;
    if (selectedEventId) title = `${selectedStat} ratings of brawlers in ${events[selectedEventId].title}`;
    return (
        <div className="filters-div">
            <p className="filters-div-title">{title}</p>
            {cards.map((card,i) => 
                <DashFilterCard
                    key={i}
                    card={card}/>
            )}
        </div>
    )
}

export default DashFilters;