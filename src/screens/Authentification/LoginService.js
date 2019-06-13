import axios from 'axios';

const Api = {
  login: function login(user) {
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    };
    console.log('userr', user);
    const data = {
      email: user.email,
      password: user.password,
    };
    return axios.post('http://macqueen.bsamat.com/api/v1/login', data, axiosConfig);
  },
  signUp: function signUp(user) {
    const data = {
      accessKey: 'ZOODd545SD5w0303F2frSchI5MA3el',
      accessPassword: 'ZXg522sFDS22Z00Drb005raWM07medJ',
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.username,
      email: user.email,
      mobile: user.mobile,
      password: user.password,
      passwordConfirmation: user.cnfpassword,
      countryId: user.countryId,
      cityId: user.cityId,
      address: user.address,
      mapLocation: user.mapLocation,
      deviceAccessToken: '98ZD5S14sdD4SDwxuuuudf545yyzoodttt',
    };

    return axios.post('http://bsamat.com/demo/zood/api/clientregister', data);
  },
};

export default Api;
