json.old_channel do
    json.extract! old_channel, :id, :name, :channel_icon, :group_id, :hash_string, :updated_at, :dm
end

json.memberIds do
    json.array! old_channel.users.pluck(:id)
end