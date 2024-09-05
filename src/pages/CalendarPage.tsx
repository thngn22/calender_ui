import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select'
import { Button } from '~/components/ui/button'
import DefaultCalendar from '~/components/CalendarComponents/DefaultCalendar'
import MonthCalendar from '~/components/CalendarComponents/MonthCalendar'
import YearCalendar from '~/components/CalendarComponents/YearCalendar'
import EventDateComponent from '~/components/EventDateComponent'

import { handleDateChange } from '~/utils/algorithsm'
import { eventDay } from '~/data'

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
    <div>
      {/* UI cho màn hình nhỏ hơn md */}
      <div className='block md:hidden bg-dark_orange mx-8'>
        <div className='bg-light_blue'>
          <DefaultCalendar
            month={currentDate}
            onSelectDate={handleDateSelect}
            selectedDate={selectedDate}
            handleDateChangeDefault={handleDateChangeDefault}
          />
        </div>

        <div className='w-full bg-light_blue'>
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
                  <SelectItem value='month'>Month</SelectItem>
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
              setCurrentDate={setCurrentDate}
            />
          )}
        </div>
      </div>

      {/* UI cho màn hình lớn hơn hoặc bằng md */}
      <div className='bg-calendar_tile min-h-dvh'>
        <div className='hidden md:grid md:grid-cols-3 md:space-x-4 md:px-28 py-4'>
          <div className='md:col-span-1 bg-white rounded-sm shadow-lg'>
            <DefaultCalendar
              month={currentDate}
              onSelectDate={handleDateSelect}
              selectedDate={selectedDate}
              handleDateChangeDefault={handleDateChangeDefault}
            />
            <hr className='border-none h-1 bg-gray-200' />

            <div className='p-4'>
              <EventDateComponent events={eventDay} currentDate={currentDate} />
            </div>
          </div>

          <div className='md:col-span-2 bg-white rounded-sm shadow-lg pt-4'>
            <div className='flex items-center justify-between px-4'>
              <div className='flex items-center'>
                <Button
                  onClick={() => setCurrentDate(handleDateChange(currentDate, viewMode, 'previous'))}
                  className='border-none px-1'
                  variant='outline'
                >
                  <ChevronLeft className='h-6 w-6 text-light_blue' />
                </Button>
                <Button
                  onClick={() => setCurrentDate(handleDateChange(currentDate, viewMode, 'next'))}
                  className='border-none px-1'
                  variant='outline'
                >
                  <ChevronRight className='h-6 w-6 text-light_blue' />
                </Button>
                <p className='text-2xl font-bold text-dark_blue'>
                  {viewMode === 'month'
                    ? currentDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })
                    : currentDate.getFullYear()}
                </p>
              </div>
              <div>
                <Select value={viewMode} onValueChange={(value: 'month' | 'year') => setViewMode(value)}>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='View mode' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='month'>Month</SelectItem>
                    <SelectItem value='year'>Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {viewMode === 'month' ? (
              <MonthCalendar month={currentDate} onSelectDate={handleDateSelect} selectedDate={selectedDate} />
            ) : (
              <YearCalendar
                year={currentDate.getFullYear()}
                onSelectDate={handleDateSelect}
                selectedDate={selectedDate}
                setCurrentDate={setCurrentDate}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalendarPage
