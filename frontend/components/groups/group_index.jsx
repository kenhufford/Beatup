import React from 'react';
import GroupIndexItem from './group_index_item'
import {Link} from 'react-router-dom'

class GroupIndex extends React.Component{
    constructor(props){
        super(props)
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
        const fetchGroups = this.props.fetchGroups();
        const fetchCategories = this.props.fetchCategories();
        const fetchUser = this.props.fetchUser(this.props.currentUserId);
      
        // Promise.all([ fetchGroups, fetchCategories, fetchUser ]).then(() => {
        //     this.forceUpdate()
        // });
    }


    render(){
        if (!this.props.groups) return null

        let suggestedGroups = (
            <div className="groups-div">
                {Object.values(this.props.groups).map( (group) => (
                    <GroupIndexItem key={group.id} group={group}/>
                ))}
            </div>
        )

        let userGroups;
        let yourGroups;
        if (this.props.currentUsersGroups){
            userGroups = []
            this.props.currentUsersGroups.map(groupIdObj => {
                userGroups.push(groupIdObj["id"])
            })

            yourGroups = userGroups.length ? (
                <div className="groups-div">
                    {userGroups.map( (groupId) => (
                        <GroupIndexItem key={groupId} group={this.props.groups[groupId]}/>
                    ))}
                </div>
            ) :  
            (<div onClick={this.handleSignup} className="groups-signup">Join a group!</div>)
        }

        return(
            <div className="groups-index-div">
                <p className="groups-index-div-titles">YOUR GROUPS</p>
                {yourGroups}
                <p className="groups-index-div-titles">NEARBY GROUPS</p>
                {suggestedGroups}
            </div>

        )

    }
}

export default GroupIndex