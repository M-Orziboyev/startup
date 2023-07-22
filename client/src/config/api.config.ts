export const API_URL = `${process.env.NEXT_PUBLIC_SERVICE}/api`

export const getAuthUrl = (url:string) => `/auth/${url}`