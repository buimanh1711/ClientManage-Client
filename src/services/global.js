import request from '../utils/request'

//AUTH
export const auth = () => {
  return request('/auth', 'GET')
}

export const loginAuth = (userData) => {
  return request('/login', 'POST', userData)
}

export const register = (userData) => {
  return request('/register', 'POST', userData)
}
//productS
export const getAllGuests = (query) => {
  const { address, start, end, page } = query
  var url = `/guests?page=${page || 1}&`
  if (address) url = url + `address=${address}&`
  if (start) url = url + `start=${start}&`
  if (end) url = url + `end=${end}&`

  return request(url, "GET")
}

export const getOneGuest = (_id) => {
  return request(`/guests/${_id}`, 'GET')
}

export const createGuest = (data) => {
  return request('/guests', 'POST', data)
}

export const updateGuest = (_id, data) => {
  return request(`/guests/${_id}`, 'PUT', data)
}

export const deleteGuest = (_id, image) => {
  return request(`/guests/${_id}`, 'DELETE', image )
}

export const searchGuest = (query) => {
  return request(`/search?q=${query}`, 'GET')
}

export const addProduct = (_id, totalMoney, product) => {
  return request(`/guests/${_id}/bought`, 'PUT', { totalMoney, product } )
}

//USER
export const createUser = (data) => {
  return request('/accounts', 'POST', data)
}

export const updateUser = (_id, data) => {
  return request(`/accounts/${_id}`, 'PUT', data)
}

export const updateAvt = (_id, data) => {
  return request(`/${_id}/avt`, 'PUT', data)
}

export const getUser = (_id) => {
  return request(`/accounts/${_id}`, 'GET')
}
