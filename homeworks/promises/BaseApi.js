export class BaseApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get baseUrl() {
    return this._baseUrl;
  }

  set baseUrl(url) {
    if (typeof url !== "string" || url.trim() === "") {
      throw new Error("Base url is not indicated!");
    }
    this._baseUrl = url;
  }

  async sendGetRequest(path) {
    try {
      const response = await fetch(`${this.baseUrl}${path}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
}
