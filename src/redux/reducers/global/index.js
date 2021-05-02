const initialState = {
  login: false,
  auth: {},
  popup: {
    active: false,
    content: ''
  },
  user: {
    _id: '',
    fullName: '',
    role: null,
    userImage: null,
    email: '',
    address: '',
    phone: '',
  },
  loading: false,
  users: [],
  guests: [],
  guest: {},
  profile: {},
  categories: [
    {
      type: 'Vãng lai',
      range: [0, 5000000]
    },
    {
      type: 'Tiềm năng',
      range: [5000000, 10000000]
    },
    {
      type: 'VIP',
      range: [10000000, 50000000]
    },
    {
      type: 'VIP',
      range: [50000000, null]
    },
  ]
}

const globalReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'GET_ONE_GUEST': {
      return {
        ...state,
        guest: {
          ...action.payload
        }
      }
    }

    case 'GET_ALL_GUESTS': {
      return {
        ...state,
        guests: [
          ...action.payload
        ]
      }
    }

    case 'TOGGLE_LOADING': {
      return {
        ...state,
        loading: action.payload
      }
    }

    case 'GET_USER_DATA': {
      const { login, firstName, request, _id, credit, image, lastName, coins, role, token, notif, bought, username, phone } = action.payload
      localStorage.setItem('accessToken', token)
      return {
        ...state,
        login: login,
        user: {
          _id,
          username,
          request,
          firstName,
          lastName,
          role,
          credit,
          coins,
          userNotif: notif,
          userBought: bought,
          userImage: image,
          phone
        }
      }
    }

    case 'AUTHENTICATION': {
      const { login, user } = action.payload
      const { firstName, request, image, _id, credit, lastName, coins, role, notif, bought, username, phone } = user
      return {
        ...state,
        login: login,
        user: {
          _id,
          username,
          firstName,
          lastName,
          role,
          coins,
          credit,
          request,
          userNotif: notif,
          userBought: bought,
          userImage: image,
          phone
        }
      }
    }

    case 'CLEAR_DATA': {
      return {
        ...state,
        login: false,
        user: {
          _id: '',
          username: '',
          firstName: '',
          lastName: '',
          role: '',
          coins: 0,
          credit: {
            number: '',
            bank: ''
          },
          request: [],
          userNotif: [],
          userBought: [],
          userImage: null,
          phone: ''
        }
      }
    }
  }

  return state
}

export default globalReducer