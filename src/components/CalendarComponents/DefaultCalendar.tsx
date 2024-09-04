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
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 justify-center py-8',
        caption_label: 'text-dark_blue text-xl font-bold',
        head_cell: 'text-gray-400 mx-1 w-9 font-medium text-[0.8rem]',
        day: 'h-9 w-9 p-0 font-normal aria-selected:opacity-100'
      }}
      components={{
        IconLeft: ({ ...props }) => (
          <ChevronLeft onClick={() => handleDateChangeDefault?.(month, 'month', 'previous')} className='h-8 w-8' />
        ),
        IconRight: ({ ...props }) => (
          <ChevronRight onClick={() => handleDateChangeDefault?.(month, 'month', 'next')} className='h-8 w-8' />
        )
      }}
    />
  )
}

export default DefaultCalendar
