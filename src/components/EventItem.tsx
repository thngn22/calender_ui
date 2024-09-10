import React from 'react'

interface EventItemProps {
  event: {
    id: string
    title: string
    backgroundColor: string
  }
}

const EventItem: React.FC<EventItemProps> = ({ event }) => {
  return (
    <div
      key={event.id}
      className='text-blue-800 text-xs p-1 rounded mt-1 truncate overflow-hidden whitespace-nowrap'
      style={{ backgroundColor: event.backgroundColor }} // Áp dụng mã màu
    >
      {event.title}
    </div>
  )
}

export default EventItem
