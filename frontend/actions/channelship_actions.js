import * as APIUtils from '../utils/channelship_api_util'

export const RECEIVE_CHANNELSHIPS = "RECEIVE_CHANNELSHIPS";

const receiveChannelships = channelships => ({
    type: RECEIVE_CHANNELSHIPS,
    channelships
})

export const fetchChannelshipsFromUser = () => dispatch => (
    APIUtils.fetchChannelshipsFromUser()
        .then(channelships => dispatch(receiveChannelships(channelships)))
)

export const fetchChannelships= (channel) => dispatch => (
    APIUtils.fetchChannelships(channel)
        .then(channelships => dispatch(receiveChannelships(channelships)))
)

export const createChannelship = (channelship) => dispatch => (
    APIUtils.createChannelship(channelship)
        .then(channelships => dispatch(receiveChannelships(channelships)))
)

export const updateChannelship = (channelship) => dispatch => (
    APIUtils.updateChannelship(channelship)
        .then(channelships => dispatch(receiveChannelships(channelships)))
)

export const deleteChannelship = (channelshipId) => dispatch => (
    APIUtils.deleteChannelship(channelshipId)
        .then(channelships => dispatch(receiveChannelships(channelships)))
)
