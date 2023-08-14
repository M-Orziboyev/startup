export const API_URL = `${process.env.NEXT_PUBLIC_API_SERVICE}/api`

console.log(API_URL)
export const getAuthUrl = (url:string) => `/auth/${url}`
export const getMailUrl = (url:string) => `/mail/${url}`
export const getUserUrl = (url:string) => `/user/${url}`