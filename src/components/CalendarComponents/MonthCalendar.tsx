import React, { useState } from 'react'
import { Calendar } from '../ui/calendar'
import { SelectSingleEventHandler } from 'react-day-picker'
import { cn } from '~/lib/utils'
import { buttonVariants } from '~/components/ui/button'
import { eventMonths } from '~/data'
import dayjs from 'dayjs'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '~/components/ui/dialog'
import EventItem from '../EventItem' // Import component EventItem

interface MonthCalendarProps {
  month: Date
  onSelectDate?: SelectSingleEventHandler
  selectedDate?: Date | undefined
}

const MonthCalendar: React.FC<MonthCalendarProps> = ({ month, onSelectDate, selectedDate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false) // Trạng thái mở/đóng modal
  const [modalEvents, setModalEvents] = useState<any[]>([]) // Sự kiện sẽ hiển thị trong modal
  const [selectedDateForModal, setSelectedDateForModal] = useState<Date | null>(null) // Lưu trữ ngày hiển thị trong modal

  const renderEventForDate = (day: Date) => {
    const eventsForDay = eventMonths.find((eventDay) => dayjs(eventDay.date).isSame(day, 'day'))?.events || []

    if (eventsForDay.length === 0) return null

    const displayedEvents = eventsForDay.slice(0, 2) // Hiển thị tối đa 2 sự kiện
    const hiddenEvents = eventsForDay.length > 2 ? eventsForDay.length - 2 : 0

    return (
      <>
        {displayedEvents.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
        {hiddenEvents > 0 && (
          <p
            className='text-xs text-gray-500 mt-1 cursor-pointer flex'
            onClick={(e) => {
              e.stopPropagation() // Ngăn sự kiện click lan tỏa lên Calendar
              setModalEvents(eventsForDay) // Cập nhật sự kiện sẽ hiển thị trong modal
              setSelectedDateForModal(day) // Lưu trữ ngày cho modal
              setIsModalOpen(true) // Mở modal khi nhấn vào "x more..."
            }}
          >
            {hiddenEvents} more...
          </p>
        )}
      </>
    )
  }

  return (
    <>
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

      {/* Modal Dialog */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {selectedDateForModal
                ? dayjs(selectedDateForModal).format('DD MMMM') // Hiển thị ngày và tháng đã chọn
                : 'All Events'}
            </DialogTitle>
          </DialogHeader>
          <div className='space-y-2'>
            {modalEvents.length > 0 &&
              modalEvents.map((event) => (
                <EventItem key={event.id} event={event} />
              ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default MonthCalendar
