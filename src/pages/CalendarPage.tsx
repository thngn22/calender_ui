import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select'
import { Button } from '~/components/ui/button'
import DefaultCalendar from '~/components/CalendarComponents/DefaultCalendar'
import MonthCalendar from '~/components/CalendarComponents/MonthCalendar'
import YearCalendar from '~/components/CalendarComponents/YearCalendar'

import { handleDateChange } from '~/utils/algorithsm'

const CalendarPage: React.FC = () => {
  const [currentDate, setCurrentDate] = React.useState(new Date())
  const [viewMode, setViewMode] = React.useState<'month' | 'year'>('month')
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(new Date())

  const handleDateSelect = (day: Date | undefined) => {
    setSelectedDate(day)
  }

  const handleDateChangeDefault = (date: Date, viewMode: 'month' | 'year', direction: 'previous' | 'next') => {
    setCurrentDate(handleDateChange(date, viewMode, direction))
  }

  return (
    <div className='hidden md:flex md:flex-col md:space-y-4'>
      <DefaultCalendar
        month={currentDate}
        onSelectDate={handleDateSelect}
        selectedDate={selectedDate}
        handleDateChangeDefault={handleDateChangeDefault}
      />

      <div className='w-full'>
        <div className='flex items-center'>
          <div>
            <Button
              onClick={() => setCurrentDate(handleDateChange(currentDate, viewMode, 'previous'))}
              variant='outline'
            >
              <ChevronLeft className='h-4 w-4' />
            </Button>
            <Button onClick={() => setCurrentDate(handleDateChange(currentDate, viewMode, 'next'))} variant='outline'>
              <ChevronRight className='h-4 w-4' />
            </Button>
          </div>
          <div className='flex items-center space-x-2'>
            <Select value={viewMode} onValueChange={(value: 'month' | 'year') => setViewMode(value)}>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='View mode' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='month'>Moth</SelectItem>
                <SelectItem value='year'>Year</SelectItem>
              </SelectContent>
            </Select>
            <p className='text-xl font-semibold'>
              {viewMode === 'month'
                ? currentDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })
                : currentDate.getFullYear()}
            </p>
          </div>
        </div>
        {viewMode === 'month' ? (
          <MonthCalendar month={currentDate} onSelectDate={handleDateSelect} selectedDate={selectedDate} />
        ) : (
          <YearCalendar
            year={currentDate.getFullYear()}
            onSelectDate={handleDateSelect}
            selectedDate={selectedDate}
            setCurrentDate={setCurrentDate} // Truyền hàm để cập nhật currentDate
          />
        )}
      </div>
    </div>
  )
}

export default CalendarPage
