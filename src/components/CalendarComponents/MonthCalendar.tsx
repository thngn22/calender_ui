import React from 'react'
import { Calendar } from '../ui/calendar'
import { SelectSingleEventHandler } from 'react-day-picker'
import { cn } from '~/lib/utils'
import { buttonVariants } from '~/components/ui/button'

import { eventDates } from '~/data'
import dayjs from 'dayjs'

interface MonthCalendarProps {
  month: Date
  onSelectDate?: SelectSingleEventHandler
  selectedDate?: Date | undefined
}

const MonthCalendar: React.FC<MonthCalendarProps> = ({ month, onSelectDate, selectedDate }) => {
  const renderEventForDate = (day: Date) => {
    const eventsForDay = Object.keys(eventDates)
      .filter((dateKey) => dayjs(dateKey).isSame(day, 'day'))
      .flatMap((dateKey) => eventDates[dateKey] || [])

    return eventsForDay.map((event) => (
      <div
        key={event.id}
        className='bg-blue-100 text-blue-800 text-xs p-1 rounded mt-1 truncate overflow-hidden whitespace-nowrap'
      >
        {event.title}
      </div>
    ))
  }

  return (
    <Calendar
      mode='single'
      month={month}
      selected={selectedDate}
      onSelect={onSelectDate}
      className='w-full border-collapse p-0'
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4 w-full',
        caption: 'hidden',
        nav: 'hidden',
        table: 'w-full border-collapse',
        head_row: 'grid grid-cols-7',
        head_cell: 'text-gray-400 rounded-md w-full font-medium text-1 flex justify-center',
        row: 'grid grid-cols-7',
        cell: 'text-center text-sm p-0 relative focus-within:relative focus-within:z-20 h-24 w-full sm:h-20 md:h-28 border border-gray-200',
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-24 w-full sm:h-20 md:h-28 p-0 pt-2 items-start font-medium aria-selected:opacity-100 rounded-none hover:bg-calendar_tile hover:text-accent-foreground'
        ),
        day_selected:
          'bg-calendar_tile text-accent-foreground hover:bg-calendar_tile hover:text-accent-foreground focus:bg-calendar_tile focus:text-accent-foreground',
        day_today: 'bg-dark_blue text-primary-foreground hover:bg-dark_blue hover:text-primary-foreground',
        day_outside: 'text-muted-foreground opacity-50',
        day_disabled: 'text-muted-foreground opacity-50',
        day_hidden: 'invisible'
      }}
      components={{
        IconLeft: () => null,
        IconRight: () => null,
        DayContent: ({ date }) => (
          <div className='w-full'>
            <p>{dayjs(date).date()}</p>
            {renderEventForDate(date)}
          </div>
        )
      }}
    />
  )
}

export default MonthCalendar
