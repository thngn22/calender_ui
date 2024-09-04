import React, { useEffect } from 'react'
import { Calendar } from '../ui/calendar'
import { format } from 'date-fns'
import { SelectSingleEventHandler } from 'react-day-picker'

interface YearCalendarProps {
  year: number
  onSelectDate?: SelectSingleEventHandler
  selectedDate?: Date | undefined
  setCurrentDate: (date: Date) => void
}

const YearCalendar: React.FC<YearCalendarProps> = ({ year, onSelectDate, selectedDate, setCurrentDate }) => {
  const months = Array.from({ length: 12 }, (_, i) => new Date(year, i, 1))

  useEffect(() => {
    if (selectedDate && selectedDate.getFullYear() === year) {
      setCurrentDate(selectedDate)
    }
  }, [selectedDate, year, setCurrentDate])

  return (
    <div className='grid xl:grid-cols-3 xl:gap-4 grid-cols-2 gap-2 pt-2'>
      {months.map((month) => (
        <div key={month.toString()} className='flex flex-col justify-center items-center'>
          <p className='font-semibold'>{format(month, 'MMMM')}</p>
          <Calendar
            mode='single'
            month={month}
            fixedWeeks={true}
            selected={selectedDate}
            onSelect={onSelectDate}
            className=''
            classNames={{
              month: 'space-y-1',
              caption: 'hidden',
              nav: 'hidden',
              table: 'w-full border-collapse',
              head_row: 'flex',
              head_cell: 'text-muted-foreground mx-1 w-full font-normal text-[0.6rem]',
              row: 'flex mt-1',
              cell: 'h-6 w-full text-center text-xs mx-1 relative focus-within:relative focus-within:z-20',
              day: 'h-6 w-full px-[0.35rem] font-normal aria-selected:opacity-100 rounded-full',
              day_selected:
                'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
              day_today: 'bg-accent text-accent-foreground',
              day_outside: 'text-muted-foreground opacity-50',
              day_disabled: 'text-muted-foreground opacity-50',
              day_hidden: 'invisible'
            }}
          />
        </div>
      ))}
    </div>
  )
}

export default YearCalendar
