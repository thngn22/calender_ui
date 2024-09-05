import React from 'react'
import { formatTimeRange, formatDate } from '~/utils/date'

interface Event {
  id: string
  title: string
  startDate: string
  endDate: string
}

interface EventDateComponentProps {
  events: Event[]
  currentDate: Date
}

const EventDateComponent: React.FC<EventDateComponentProps> = ({ events, currentDate }) => {
  return (
    <div>
      <div className='mb-4'>
        <p className='text-2xl font-bold text-dark_blue'>Upcoming Events</p>
        <p className='text-lg font-semibold text-gray-400'>{formatDate(currentDate)}</p>
      </div>

      {events.length > 0 ? (
        events.map((event) => (
          <div key={event.id} className='mb-2 p-4 border rounded-md shadow-sm bg-gray-50'>
            <p className='text-lg font-semibold text-dark_blue'>{event.title}</p>
            <p className='text-sm text-gray-500'>
              {formatTimeRange(event.startDate, event.endDate)} {/* Sử dụng hàm định dạng thời gian */}
            </p>
          </div>
        ))
      ) : (
        <p className='text-center text-gray-500'>No events for this date.</p>
      )}
    </div>
  )
}

export default EventDateComponent
