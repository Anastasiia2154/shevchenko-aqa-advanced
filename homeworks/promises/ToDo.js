import { BaseApi } from "./BaseApi.js";

export class ToDo extends BaseApi {
  constructor(baseUrl, item) {
    super(baseUrl);
    this.item = item;
  }

  get item() {
    return this._item;
  }

  set item(value) {
    if (typeof value !== "number") {
      throw new Error("Item must be a number!");
    }
    this._item = value;
  }

  async getTodo() {
    return await this.sendGetRequest(`/todos/${this.item}`);
  }
}
