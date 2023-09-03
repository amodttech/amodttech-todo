export const dateParser = (dateString) => {
    const strippedFormat = Date.parse(dateString)
    const date = new Date(strippedFormat)
    const options = {year: 'numeric', month: 'long', day: 'numeric'}
    return date.toLocaleDateString('en-US', options)
}


export const BACKEND = `http://localhost:3000/projects`