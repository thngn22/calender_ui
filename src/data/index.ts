// Define the type for an event
interface Event {
  id: string
  type: 'appointment' | 'event'
  title: string
  description: string
  startDate: string
  endDate: string
  backgroundColor: string // Thêm mã màu cho sự kiện
  recurrence: {
    isRecurring: boolean
    repeatFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly' | null
    repeatUntil: string | null
  }
}


// Define the type for eventDates
type EventMonths = {
  date: string
  events: Event[]
}[]
type EventDays = Event[]

// Sample Data for Dates
const eventMonths: EventMonths = [
  {
    date: '2024-09-06T09:00:00',
    events: [
      {
        id: '1',
        type: 'appointment',
        title: 'Meeting with Client A',
        description: 'Discuss project requirements',
        startDate: '2024-09-06T09:00:00',
        endDate: '2024-09-06T10:00:00',
        backgroundColor: '#FFD700', // Mã màu vàng
        recurrence: {
          isRecurring: false,
          repeatFrequency: null,
          repeatUntil: null
        }
      },
      {
        id: '2',
        type: 'appointment',
        title: 'Strategy Session',
        description: 'Brainstorming strategy ideas for Q4.',
        startDate: '2024-09-06T11:00:00',
        endDate: '2024-09-06T12:00:00',
        backgroundColor: '#FF6347', // Mã màu đỏ cam
        recurrence: {
          isRecurring: false,
          repeatFrequency: null,
          repeatUntil: null
        }
      },
      {
        id: '3',
        type: 'appointment',
        title: 'Strategy Session',
        description: 'Brainstorming strategy ideas for Q4.',
        startDate: '2024-09-06T11:00:00',
        endDate: '2024-09-06T12:00:00',
        backgroundColor: '#FF6347', // Mã màu đỏ cam
        recurrence: {
          isRecurring: false,
          repeatFrequency: null,
          repeatUntil: null
        }
      }
    ]
  },
  {
    date: '2024-09-07T14:00:00',
    events: [
      {
        id: '3',
        type: 'event',
        title: 'Webinar: Introduction to JavaScript',
        description: 'Free webinar for beginners',
        startDate: '2024-09-07T14:00:00',
        endDate: '2024-09-07T16:00:00',
        backgroundColor: '#4682B4', // Mã màu xanh dương
        recurrence: {
          isRecurring: true,
          repeatFrequency: 'weekly',
          repeatUntil: '2024-12-07T16:00:00'
        }
      }
    ]
  }
]

const eventDay: EventDays = [
  {
    id: 'event1',
    type: 'appointment',
    title: 'Meeting with Client A',
    description: 'Discuss project updates and next steps.',
    startDate: '2024-09-06T09:00:00',
    endDate: '2024-09-06T10:00:00',
    backgroundColor: '#FFD700', // Màu vàng
    recurrence: {
      isRecurring: false,
      repeatFrequency: null,
      repeatUntil: null
    }
  },
  {
    id: 'event2',
    type: 'event',
    title: 'Team Building Activity',
    description: 'Outdoor team-building activities and games.',
    startDate: '2024-09-06T14:00:00',
    endDate: '2024-09-06T17:00:00',
    backgroundColor: '#32CD32', // Màu xanh lá
    recurrence: {
      isRecurring: false,
      repeatFrequency: null,
      repeatUntil: null
    }
  }
]

export { eventMonths, eventDay }
