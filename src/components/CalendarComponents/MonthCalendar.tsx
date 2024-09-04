import React from 'react'
import { Calendar } from '../ui/calendar'
import { SelectSingleEventHandler } from 'react-day-picker'
import { cn } from '~/lib/utils'
import { buttonVariants } from '~/components/ui/button'

interface MonthCalendarProps {
  month: Date
  onSelectDate?: SelectSingleEventHandler
  selectedDate?: Date | undefined
}

const MonthCalendar: React.FC<MonthCalendarProps> = ({ month, onSelectDate, selectedDate }) => {
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
        head_row: 'flex w-full',
        head_cell: 'text-gray-400 rounded-md w-full font-medium text-1 flex justify-center',
        row: 'flex w-full',
        cell: 'text-center text-sm p-0 relative focus-within:relative focus-within:z-20 h-20 w-full sm:h-16 md:h-24 border border-gray-200',
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-20 w-full sm:h-16 md:h-24 p-0 pt-2 items-start font-medium aria-selected:opacity-100 rounded-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
        ),
        day_selected:
          'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
        day_today: 'bg-accent text-accent-foreground',
        day_outside: 'text-muted-foreground opacity-50',
        day_disabled: 'text-muted-foreground opacity-50',
        day_range_middle: 'aria-selected:bg-accent aria-selected:text-accent-foreground',
        day_hidden: 'invisible'
      }}
      components={{
        IconLeft: () => null,
        IconRight: () => null
      }}
    />
  )
}

export default MonthCalendar
