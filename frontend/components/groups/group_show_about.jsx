import React from 'react'

class GroupShowAbout extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        if (!this.props.props.group.members){
            return null
        }
        let {group} = this.props.props
        
        return (
            <div className="group-show-main">
                        <div className="group-show-main-left">
                            <p className="group-show-stripe-left-header">What We're About</p>
                            <p className="group-show-stripe-left-description">{group.description}</p>
                        </div>
                        <div className="group-show-main-right">
                            <div className="group-show-main-right-organizers">
                                <p className="group-show-main-right-organizers-title">Captains</p>
                                <div className="group-show-main-right-organizers-info">
                                    <div className="group-show-member-picture-div">
                                        <img src={window[group.members[this.props.organizerIds[0]].imageUrl]} alt="organizer-pic" className="group-show-member-picture"/> 
                                    </div>
                                    <p className="group-show-organizer-info-text">{this.props.organizers[0]} {this.props.organizersNum}</p> 
                                </div>

                            </div>
                            <div className="group-show-main-right-members">
                                <div onClick={this.props.switchPage("members")}>
                                    Members ({this.props.memberships.length})
                                </div>
                                <p onClick={this.props.switchPage("members")}>See All</p>
                            </div>
                            <div className="group-show-main-right-members-list">
                                    {this.props.memberships.map ( (member, i)=> {
                                        if (i < 12) {
                                            let icon = (
                                                <div className="group-show-member-picture-div" key={i} >
                                                    <img key={i} src={window[this.props.members[member.userId].imageUrl]} alt="member-pic" className="group-show-member-picture"/>
                                                </div>
                                            )
                                       return icon
                                        }
                                    })}
                            </div>
                        </div>
                    </div>
        )
    }
}

export default GroupShowAbout