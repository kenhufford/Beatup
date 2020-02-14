import React from 'react';
import EventIndexItem from './event_index_item'
import { formatDate, addWeek, addMonth, formatDateWithMonth } from '../../utils/date_util'
import {Link} from 'react-router-dom'

class EventIndex extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loaded: false
        }
    this.handleSignup = this.handleSignup.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
}

    handleSignup(){
        if (this.props.currentUserId === ""){
            document.location.href = '#/signup'
        } else {
            return null
        }
        
    }

    componentDidMount(){
        const fetchEvents = this.props.fetchEvents();
        const fetchGroups = this.props.fetchGroups();
        const fetchLocations = this.props.fetchLocations();
        const fetchReservations = this.props.fetchReservations(0);
        Promise.all([fetchEvents, fetchGroups, fetchReservations, fetchLocations])
            .then( () => this.setState({loaded:true}))
    }

    render(){
        if(this.state.loaded){
            let noUserBrawls = true;
            let { events, locations } = this.props;
            let allBrawls = [];
            let userBrawls = [];
            let userEventIds = this.props.reservations.userReservations.map(reservation => {
                return reservation.eventId
            })
            Object.values(events).map(brawl => {
                switch (brawl.recurringType) {
                    case "Weekly":
                        for (let i = 1; i < 8; i++) {
                            let brawl1 = Object.assign({}, brawl);
                            brawl1.startTime = addWeek(brawl.startTime, i);
                            brawl1.endTime = addWeek(brawl.endTime, i);
                            allBrawls.push(brawl1);
                            if (userEventIds.includes(brawl.id)) userBrawls.push(brawl);
                        }
                        break
                    case "Monthly":
                        for (let i = 1; i < 4; i++) {
                            let brawl1 = Object.assign({}, brawl);
                            brawl1.startTime = addMonth(brawl.startTime, i);
                            brawl1.endTime = addMonth(brawl.endTime, i);
                            allBrawls.push(brawl1);
                            if (userEventIds.includes(brawl.id)) userBrawls.push(brawl);
                        }
                    default:
                        allBrawls.push(brawl);
                        if (userEventIds.includes(brawl.id)) userBrawls.push(brawl);
                        break;
                }
            })
            if (userBrawls.length >0) noUserBrawls = false;
            let lastMonth;
            allBrawls.sort(function (a, b) {
                return new Date(a.startTime) - new Date(b.startTime)
            })
            userBrawls.sort(function (a, b) {
                return new Date(a.startTime) - new Date(b.startTime)
            })

            let userlist = (
                (<ul className="group-show-events-list">

                    {userBrawls.map((brawl, i) => {
                        let thisMonth = formatDateWithMonth(brawl.startTime);
                        let diffMonth = thisMonth !== lastMonth;
                        lastMonth = thisMonth;
                        let { title, locationId, groupId, imageUrl, startTime, endTime, address, id, reservationIds, recurringType } = brawl
                        let recurring = (recurringType === "None") ? (<p>One Time Brawl</p>) : (<p>Brawl Occurring {recurringType}</p>)
                        return (
                            <div key={i} >
                                {diffMonth ? (<div className="group-show-event-datedivider">
                                    {thisMonth}
                                </div>) :
                                    <div> </div>}
                                <li className="group-show-events-li">

                                    <div className="group-show-events-event-div">
                                        <div className="group-show-events-event-div-top">
                                            <p>{formatDate(startTime)}</p>
                                        </div>
                                        {recurring}
                                        <div className="group-show-events-event-div-bottom">
                                            <div className="group-show-events-event-info">
                                                <span className="group-show-events-event-title">{title}</span>
                                                <Link to={`/search/?location%20${locationId}`}>{locations[locationId].name}</Link>
                                                <p>{reservationIds.length} challengers</p>
                                            </div>
                                            <div className="group-show-events-event-link">
                                                <Link to={`/groups/${groupId}/events/${id}`} >
                                                    <img src={window[imageUrl]} alt="event-img" className="group-show-events-img" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </div>

                        )
                    })}
                </ul>)
            )
            let list =
                (<ul className="group-show-events-list">

                    {allBrawls.map((brawl, i) => {
                        let thisMonth = formatDateWithMonth(brawl.startTime);
                        let diffMonth = thisMonth !== lastMonth;
                        lastMonth = thisMonth;
                        let { title, locationId, groupId, imageUrl, startTime, endTime, address, id, reservationIds, recurringType } = brawl
                        let recurring = (recurringType === "None") ? (<p>One Time Brawl</p>) : (<p>Brawl Occurring {recurringType}</p>)
                        return (
                            <div key={i} >
                                {diffMonth ? (<div className="group-show-event-datedivider">
                                    {thisMonth}
                                </div>) :
                                    <div> </div>}
                                <li className="group-show-events-li">

                                    <div className="group-show-events-event-div">
                                        <div className="group-show-events-event-div-top">
                                            <p>{formatDate(startTime)}</p>
                                        </div>
                                        {recurring}
                                        <div className="group-show-events-event-div-bottom">
                                            <div className="group-show-events-event-info">
                                                <span className="group-show-events-event-title">{title}</span>
                                                <Link to={`/search/?location%20${locationId}`}>{locations[locationId].name}</Link>
                                                <p>{reservationIds.length} challengers</p>
                                            </div>
                                            <div className="group-show-events-event-link">
                                                <Link to={`/groups/${groupId}/events/${id}`} >
                                                    <img src={window[imageUrl]} alt="event-img" className="group-show-events-img" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </div>

                        )
                    })}
                </ul>)

            return (

                <div className="event-index-div">
                    <div className="event-index-header">
                        <div className="index-switch-div">
                            <div className="index-switch-not">
                                <Link className="index-switch-text-not" to="/groups">SQUADS</Link>
                            </div>
                            <div className="index-switch-selected">
                                <Link className="index-switch-text-selected" to="/events">BRAWLS</Link>
                            </div>
                            <div className="index-switch-not">
                                <Link className="index-switch-text-not" to="/categories">STYLES</Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="group-show-events-main">
                        {noUserBrawls ? <p className="index-div-titles">GO SIGN UP FOR A BRAWL</p> : <p className="index-div-titles">YOUR BRAWLS</p>}
                        {userlist}
                        <p className="index-div-titles">UPCOMING BRAWLS</p>
                        {list}
                    </div>
                </div>

            )

        } else {
            return (
                <div></div>
            )
        }
        
    }
        
}

export default EventIndex