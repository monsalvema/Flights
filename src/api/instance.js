import axios from 'axios';

class InstanceAxios {
  static _instance = null;

  constructor() {
    const headers = {};

    this._instance = axios.create({
      baseURL: 'https://public-api.adsbexchange.com/VirtualRadar/',
      headers,
    });
  }

  get instance() {
    return this._instance;
  }
}

const InstAx = new InstanceAxios();

export default InstAx.instance;
