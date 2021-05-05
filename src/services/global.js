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
//GUESTS
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

export const addProduct = (_id, totalMoney, productId,) => {
  return request(`/guests/${_id}/bought`, 'PUT', { totalMoney, productId, quantity: 1 } )
}

//USERS
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

export const getAllUsers = (query) => {
  const { page } = query
  return request(`/accounts?page=${page || 1}`, 'GET')
}

export const deleteUser = (_id) => {
  return request(`/accounts/${_id}`, 'DELETE')
}

//PRODUCTS

export const getAllProducts = (query) => {
  const { page, category } = query || {}
  let url = `/products?page=${page || 1}&`

  if (category) {
    url = url + `category=${category}`
  }

  return request(url, 'GET')
}

export const createProduct = (data) => {
  return request('/products', 'POST', data)
}

export const updateProduct = (_id, data) => {
  return request(`/products/${_id}`, 'PUT', data)
}

export const removeProduct = (_id) => {
  return request(`/products/${_id}`, 'DELETE')
}

//PRODUCT CATEGORIES

export const getAllCategories = () => {
  return request(`/categories`, 'GET')
}