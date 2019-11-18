const SET_DEVICE_CONFIG: string = 'SET_DEVICE_CONFIG';

export const setDeviceConfig = (ip: string, port: string) => {
  return {
    type: SET_DEVICE_CONFIG,
    payload: {ip, port}
  }
}