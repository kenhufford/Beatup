import {connect} from 'react-redux'
import CreateGroupForm from './create_group_form'
import {createGroup} from '../../actions/group_actions'
import {createMembership, updateMembership, createType} from '../../actions/group_actions'
import {fetchCategories} from '../../actions/category_actions'
import {fetchLocations} from '../../actions/location_actions'

const mstp = (state) => {
    let locations = Object.values(state.entities.locations)
    let categories = Object.values(state.entities.categories)
    for (let i = 0; i < locations.length; i++){
        locations[i].key = 'location';
        locations[i].selected = false;
    }
    for (let i = 0; i < categories.length; i++){
        categories[i].key = 'category';
        categories[i].selected = false;
    }
    return {
        group: {
            name: '',
            description: '',
            lat: '',
            long: '',
            imageUrl: '',
            selectedLocationId: '',
            selectedLocation: "Select Location"
        },
        locations: locations,
        categories: categories
    }
}

const mdtp = dispatch => ({
    action: (group) => dispatch(createGroup(group)),
    createMembership: (groupId) => dispatch(createMembership(groupId)),
    updateMembership: (membership) => dispatch(updateMembership(membership)),
    createType: (type) => dispatch(createType(type)),
    fetchCategories: () => dispatch(fetchCategories()),
    fetchLocations: () => dispatch(fetchLocations())
})

export default connect(mstp, mdtp)(CreateGroupForm)