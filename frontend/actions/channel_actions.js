import * as APIUtils from '../utils/channel_api_util'

export const RECEIVE_GROUP_CHANNELS = "RECEIVE_GROUP_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";

const receiveGroupChannels = channels => ({
    type: RECEIVE_GROUP_CHANNELS,
    channels
})

const receiveChannel = channel => ({
    type: RECEIVE_CHANNEL,
    channel
})

export const fetchGroupChannels = (groupId) => dispatch => (
    APIUtils.fetchGroupChannels(groupId)
        .then(channels => dispatch(receiveGroupChannels(channels)))
)

export const createChannel = (channel) => dispatch => (
    APIUtils.createChannel(channel)
        .then(channel => dispatch(receiveChannel(channel)))
)

export const updateChannel = (channel) => dispatch =>(
    APIUtils.updateChannel(channel)
        .then(channel => dispatch(receiveChannel(channel)))
)

export const deleteChannel = (channel) => dispatch => (
    APIUtils.deleteChannel(channel)
        .then(channels => dispatch(receiveGroupChannels(channels)))
)
