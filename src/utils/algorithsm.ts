type ViewMode = 'month' | 'year'
type Direction = 'previous' | 'next'

const handleDateChange = (currentDate: Date, viewMode: ViewMode, direction: Direction): Date => {
  const newDate = new Date(currentDate)

  switch (viewMode) {
    case 'month':
      switch (direction) {
        case 'previous':
          newDate.setMonth(newDate.getMonth() - 1)
          break
        case 'next':
          newDate.setMonth(newDate.getMonth() + 1)
          break
      }
      break
    case 'year':
      switch (direction) {
        case 'previous':
          newDate.setFullYear(newDate.getFullYear() - 1)
          break
        case 'next':
          newDate.setFullYear(newDate.getFullYear() + 1)
          break
      }
      break
  }

  return newDate
}

export { handleDateChange }
