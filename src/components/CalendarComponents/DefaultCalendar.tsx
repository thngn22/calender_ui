import React from 'react'
import { SelectSingleEventHandler } from 'react-day-picker'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Calendar } from '../ui/calendar'

interface DefaultCalendarProps {
  month: Date
  onSelectDate?: SelectSingleEventHandler
  selectedDate?: Date
  handleDateChangeDefault?: (date: Date, viewMode: 'month' | 'year', direction: 'previous' | 'next') => void
}

const DefaultCalendar: React.FC<DefaultCalendarProps> = ({
  month,
  onSelectDate,
  selectedDate,
  handleDateChangeDefault
}) => {
  return (
    <Calendar
      mode='single'
      month={month}
      selected={selectedDate}
      onSelect={onSelectDate}
      className='w-full border-collapse'
      classNames={{}}
      components={{
        IconLeft: ({ ...props }) => (
          <ChevronLeft onClick={() => handleDateChangeDefault?.(month, 'month', 'previous')} className='h-4 w-4' />
        ),
        IconRight: ({ ...props }) => (
          <ChevronRight onClick={() => handleDateChangeDefault?.(month, 'month', 'next')} className='h-4 w-4' />
        )
      }}
    />
  )
}

export default DefaultCalendar
