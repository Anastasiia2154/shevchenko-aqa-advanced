import { BaseApi } from "./BaseApi.js";

export class User extends BaseApi {
  constructor(baseUrl, id) {
    super(baseUrl);
    this.id = id;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    if (typeof value !== "number") {
      throw new Error("Id must be a number!");
    }
    this._id = value;
  }

  async getUser() {
    return await this.sendGetRequest(`/users/${this.id}`);
  }
}
