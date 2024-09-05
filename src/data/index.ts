// Define the type for an event
interface Event {
  id: string
  type: 'appointment' | 'event'
  title: string
  description: string
  startDate: string
  endDate: string
  recurrence: {
    isRecurring: boolean
    repeatFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly' | null
    repeatUntil: string | null
  }
}

// Define the type for eventDates
type EventMonths = Record<string, Event[]>
type EventDays = Event[]

// Sample Data for Dates
const eventDates: EventMonths = {
  '2024-09-06T09:00:00': [
    {
      id: '1',
      type: 'appointment',
      title: 'Meeting with Client A',
      description: 'Discuss project requirements',
      startDate: '2024-09-06T09:00:00',
      endDate: '2024-09-06T10:00:00',
      recurrence: {
        isRecurring: false,
        repeatFrequency: null,
        repeatUntil: null
      }
    },
    {
      id: '2',
      type: 'appointment',
      title: 'Meeting with Client A',
      description: 'Discuss project requirements',
      startDate: '2024-09-06T09:00:00',
      endDate: '2024-09-06T10:00:00',
      recurrence: {
        isRecurring: false,
        repeatFrequency: null,
        repeatUntil: null
      }
    }
  ],
  '2024-09-07T14:00:00': [
    {
      id: '3',
      type: 'event',
      title: 'Webinar: Introduction to JavaScript',
      description: 'Free webinar for beginners',
      startDate: '2024-09-07T14:00:00',
      endDate: '2024-09-07T16:00:00',
      recurrence: {
        isRecurring: true,
        repeatFrequency: 'weekly',
        repeatUntil: '2024-12-07T16:00:00'
      }
    }
  ]
}

const eventDay: EventDays = [
  {
    id: 'event1',
    type: 'appointment',
    title: 'Meeting with Client A',
    description: 'Discuss project updates and next steps.',
    startDate: '2024-09-06T09:00:00',
    endDate: '2024-09-06T10:00:00',
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
    recurrence: {
      isRecurring: false,
      repeatFrequency: null,
      repeatUntil: null
    }
  }
]

export { eventDates, eventDay }
