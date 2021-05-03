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
  ],
  products: [],
  productCategories: []
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

    case 'GET_ALL_PRODUCTS': {
      return {
        ...state,
        products: [
          ...action.payload
        ]
      }
    }

    case 'GET_ALL_USERS': {
      return {
        ...state,
        users: [
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
      const { login, fullName, address, _id, image, role, token, email, username, phone } = action.payload
      localStorage.setItem('accessToken', token)
      return {
        ...state,
        login: login,
        user: {
          _id,
          username,
          fullName,
          role,
          userImage: image,
          phone,
          email,
          address,
        }
      }
    }

    case 'AUTHENTICATION': {
      const { login, user } = action.payload
      const { fullName, address, _id, image, role, email, username, phone } = user
      return {
        ...state,
        login: login,
        user: {
          _id,
          username,
          fullName,
          role,
          userImage: image,
          phone,
          email,
          address,
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
          fullName: '',
          role: '',
          userImage: null,
          phone: '',
          email: '',
          address: ''
        }
      }
    }
  }

  return state
}

export default globalReducer