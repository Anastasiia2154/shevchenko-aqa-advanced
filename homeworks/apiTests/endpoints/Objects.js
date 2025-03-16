import { RestClient } from '../restClient';

export default class Objects extends RestClient {
	constructor(baseUrl, configOverrides) {
		super(baseUrl, configOverrides);
		this.url = '/objects';
	}

	async getAllObjects() {
		return this.sendGet({ url: `${this.url}` });
	}

	async getListOfObjects(...objectIds) {
		const params = objectIds.map((id) => `id=${id}`).join('&');

		return await this.sendGet({
			url: `${this.url}?${params}`,
		});
	}

	async getSingleObject(objectId) {
		const url = `${this.url}/${objectId}`;
		return await this.sendGet({ url });
	}

	async addObject(objectData) {
		const response = await this.sendPost({ url: `${this.url}`, data: objectData });
		return response.data;
	}

	async updateObject(objectId, objectData) {
		return this.sendPut({ url: `${this.url}/${objectId}`, data: objectData });
	}

	async particularUpdateObject(objectId, objectData) {
		return this.sendPatch({ url: `${this.url}/${objectId}`, data: objectData });
	}

	async deleteObject(objectId) {
		return await this.sendDelete({ url: `${this.url}/${objectId}` });
	}
}
