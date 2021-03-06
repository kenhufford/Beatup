export const fetchEvents = () => (
    $.ajax({
        url: '/api/events',
        method: "GET"
    })
)

export const fetchEventsFromGroup = (groupId) => (
    $.ajax({
        url: `/api/groups/${groupId}}/events`,
        method: "GET"
    })
)

export const fetchEventsFromUser = (userId) => (
    $.ajax({
        url: `/api/users/${userId}}/events`,
        method: "GET"
    })
)

export const fetchEventsFromLocation = (locationId) => (
    $.ajax({
        url: `/api/locations/${locationId}}/events`,
        method: "GET"
    })
)

export const fetchEvent = (eventId) => (
    $.ajax({
        url: `/api/events/${eventId}`,
        method: "GET"
    })
)

export const createEvent = (event) => (
    $.ajax({
        url: `/api/events/`,
        method: "POST",
        data: {event}
    })
)

export const updateEvent = (event) => (
    $.ajax({
        url: `/api/events/${event.id}`,
        method: "PATCH",
        data: {event}
    })
)

export const deleteEvent = (eventId) => (
    $.ajax({
        url: `/api/events/${eventId}`,
        method: "DELETE"
    })
)

export const searchEvents = (data) => (
    $.ajax({
      method: "GET",
      url: "/api/events/search",
      data
    })
)
