import axios from 'axios';

export default class RestClient {
	#axiosInstance;

	constructor(baseUrl, configOverrides) {
		this.baseUrl = baseUrl;
		this.#axiosInstance = axios.create({ baseURL: this.baseUrl, validateStatus: () => true, ...configOverrides });
	}

	async sendPost({ url, data, params }) {
		return this.#sendRequest({ url, method: 'POST', data, params });
	}

	async sendGet({ url, params }) {
		return this.#sendRequest({ url, method: 'GET', params });
	}

	async sendPut({ url, data, params }) {
		return this.#sendRequest({ url, method: 'PUT', data, params });
	}

	async sendPatch({ url, data, params }) {
		return this.#sendRequest({ url, method: 'PATCH', data, params });
	}

	async sendDelete({ url, data, params }) {
		return this.#sendRequest({ url, method: 'DELETE', data, params });
	}

	async #sendRequest({ url, method, data, params }) {
		return this.#axiosInstance.request({ url, method, data, params });
	}
}
