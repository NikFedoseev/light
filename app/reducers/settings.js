import initialState from '../config/initialStore';

export default function settings (state = initialState.settings, action) {
  switch(action.type) {
    case 'SET_DEVICE_CONFIG':
      const {ip, port} = action.payload
      return {...state, ip, port};
    default: return state
  }
}