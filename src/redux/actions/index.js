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
          dispatch(getAllGuests(res.data.users))
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

