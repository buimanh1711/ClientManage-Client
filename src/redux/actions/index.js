import * as API from '../../services/global'
import { createBrowserHistory } from 'history'
const browserHistory = createBrowserHistory()

export const auth = () => {
  return dispatch => {
    API.auth()
      .then(res => {
        if (res.data && res.data.status) {
          let payload = {
            login: res.data.login,
            user: res.data.user
          }
          dispatch(authAsync(payload))
        } else {
          console.log('Lỗi xác thực!')
        }
      })
  }
}

export const authAsync = (payload) => {
  return {
    type: 'AUTHENTICATION',
    payload
  }

}

export const toggleLoading = (payload) => {
  return {
    type: 'TOGGLE_LOADING',
    payload
  }
}

export const triggerNotif = (payload) => {
  return {
    type: 'TRIGGER_NOTIF',
    payload
  }
}

export const getAllProductsAsync = (query) => {
  return dispatch => {
    dispatch(toggleLoading(true))

    API.getAllProducts(query)
      .then(res => {
        if (res.data && res.data.status) {
          dispatch(getAllProducts(res.data.products))
        } else {
          triggerNotif({
            type: 'ERROR',
            content: res.data.message
          })
        }
      })
      .catch(err => {
        dispatch(triggerNotif({
          type: 'ERROR',
          content: 'SERVER_ERROR!'
        }))
      })
      .then(() => {
        dispatch(toggleLoading(false))
      })
  }
}

export const getAllProducts = (payload) => {
  return {
    type: 'GET_ALL_PRODUCTS',
    payload
  }
}

export const getAllGuestsAsync = (query) => {
  return dispatch => {
    dispatch(toggleLoading(true))

    API.getAllGuests(query)
      .then(res => {
        if (res.data && res.data.status) {
          dispatch(getAllGuests(res.data.guests))
        } else {
          triggerNotif({
            type: 'ERROR',
            content: res.data.message
          })
        }
      })
      .catch(err => {
        dispatch(triggerNotif({
          type: 'ERROR',
          content: 'SERVER_ERROR!'
        }))
      })
      .then(() => {
        dispatch(toggleLoading(false))
      })
  }
}

export const getAllGuests = (payload) => {
  return {
    type: 'GET_ALL_GUESTS',
    payload
  }
}

export const getAllUsersAsync = (query) => {
  return dispatch => {
    dispatch(toggleLoading(true))

    API.getAllUsers(query)
      .then(res => {
        if (res.data && res.data.status) {
          dispatch(getAllUsers(res.data.staffs))
        } else {
          triggerNotif({
            type: 'ERROR',
            content: res.data.message
          })
        }
      })
      .catch(err => {
        dispatch(triggerNotif({
          type: 'ERROR',
          content: 'SERVER_ERROR!'
        }))
      })
      .then(() => {
        dispatch(toggleLoading(false))
      })
  }
}

export const removeGuestAsync = (_id) => {
  console.log(_id)
  return dispatch => {
    API.deleteGuest(_id)
      .then(res => {
        if (res.data && res.data.status) {
          dispatch(removeGuest(_id))
        } else {
          triggerNotif({
            type: 'ERROR',
            content: res.data.message
          })
        }
      })
      .catch(err => {
        dispatch(triggerNotif({
          type: 'ERROR',
          content: 'SERVER_ERROR!'
        }))
      })
      .then(() => {
        dispatch(toggleLoading(false))
      })
  }
}

export const removeGuest = (payload) => {
  return {
    type: 'REMOVE_GUEST',
    payload
  }
}

export const getAllUsers = (payload) => {
  return {
    type: 'GET_ALL_USERS',
    payload
  }
}

export const getUserData = (userData) => {
  return {
    type: 'GET_USER_DATA',
    payload: userData
  }
}

export const getAllCategoriesAsync = () => {
  return dispatch => {
    API.getAllCategories()
      .then(res => {
        if (res.data && res.data.status) {
          dispatch(getAllCategories(res.data.categories))
        } else {
          triggerNotif({
            type: 'ERROR',
            content: res.data.message
          })
        }
      })
      .catch(err => {
        dispatch(triggerNotif({
          type: 'ERROR',
          content: 'SERVER_ERROR!'
        }))
      })
      .then(() => {
        dispatch(toggleLoading(false))
      })
  }
}

export const removeProduct = (payload) => {
  return {
    type: 'REMOVE_PRODUCT',
    payload
  }
}

export const removeProductAsync = (_id) => {
  return dispatch => {
    API.removeProduct(_id)
      .then(res => {
        if (res.data && res.data.status) {
          dispatch(removeProduct(_id))
        } else {
          triggerNotif({
            type: 'ERROR',
            content: res.data.message
          })
        }
      })
      .catch(err => {
        dispatch(triggerNotif({
          type: 'ERROR',
          content: 'SERVER_ERROR!'
        }))
      })
      .then(() => {
        dispatch(toggleLoading(false))
      })
  }
}

export const updateProductAsync = (_id, data) => {
  return dispatch => {
    API.updateProduct(_id, data)
      .then(res => {
        if (res.data && res.data.status) {
          dispatch(updateProduct(_id, data))
        } else {
          triggerNotif({
            type: 'ERROR',
            content: res.data.message
          })
        }
      })
      .catch(err => {
        dispatch(triggerNotif({
          type: 'ERROR',
          content: 'SERVER_ERROR!'
        }))
      })
      .then(() => {
        dispatch(toggleLoading(false))
      })
  }
}

export const updateProduct = (payload) => {
  return {
    type: 'UPDATE_PRODUCT',
    payload
  }
}

export const getAllCategories = (payload) => {
  return {
    type: 'GET_CATEGORIES',
    payload
  }
}