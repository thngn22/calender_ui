/**
 * Định dạng ngày tháng năm thành chuỗi.
 * @param date - Ngày tháng năm cần định dạng.
 * @returns - Chuỗi định dạng ngày tháng năm.
 */
const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', { day: '2-digit', month: 'long' })
}

/**
 * Format a time string from a date string.
 * @param dateStr - The date string to format.
 * @returns Formatted time string in "HH:mm" format.
 */
const formatTime = (dateStr: string): string => {
  return new Date(dateStr).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

/**
 * Get the time range between two date strings.
 * @param startDate - The start date string.
 * @param endDate - The end date string.
 * @returns Formatted time range string in "HH:mm - HH:mm" format.
 */
const formatTimeRange = (startDate: string, endDate: string): string => {
  return `${formatTime(startDate)} - ${formatTime(endDate)}`
}

export { formatTime, formatTimeRange, formatDate }
