export const generateDateWithMinutes = () => {
    const d = new Date
    const formattedDate = d.getFullYear() + '/' + d.getMonth() + '/' + d.getDate() + ' - ' + d.getHours() + ':' + d.getMinutes()
    return formattedDate
}