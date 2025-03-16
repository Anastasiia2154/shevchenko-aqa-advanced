import { Objects } from '../endpoints';

const devices = new Objects('https://api.restful-api.dev');

let invalidId;
const nonExistentId = 5555;

describe('Object endpoints tests', () => {

	test('GET: Should return 404 for non-existing object', async () => {
		const response = await devices.getSingleObject(nonExistentId);
		expect(response.status).toBe(404);
	});

	test('GET: Should return 404 for invalid ID format', async () => {
		invalidId = 'test';
		const response = await devices.getSingleObject(invalidId);
		expect(response.status).toBe(404);
	});

	test('PUT: Should return 404 when updating non-existing object', async () => {
		const updatedObjectData = {
			name: 'Object',
			data: {
				year: 2022,
				price: 1500.99,
				'CPU model': 'Intel i9',
				'Hard disk size': '512 GB',
				color: 'black',
			},
		};
		const response = await devices.updateObject(nonExistentId, updatedObjectData);
		expect(response.status).toBe(404);
	});

	test('PUT: Should return 404 for invalid ID format', async () => {
		invalidId = 'TEST';
		const updatedObjectData = { name: 'Broken Update' };
		const response = await devices.updateObject(invalidId, updatedObjectData);
		expect(response.status).toBe(404);
	});

	test('PATCH: Should return 404 when partially updating non-existing object', async () => {
		nonExistentId = 'test';
		const updatedObjectData = {
			name: 'Updated object',
		};

		const response = await devices.particularUpdateObject(nonExistentId, updatedObjectData);
		expect(response.status).toBe(404);
	});

	test('PATCH: Should return 404 for invalid ID format', async () => {
		invalidId = '!@#wrong-id';
		const updatedObjectData = { name: 'Bad Patch' };
		const response = await devices.particularUpdateObject(invalidId, updatedObjectData);
		expect(response.status).toBe(404);
	});

	test('DELETE: Should return 404 for non-existing object', async () => {
		const response = await devices.deleteObject(nonExistentId);
		expect(response.status).toBe(404);
	});

	test('DELETE: Should return 404 for invalid ID format', async () => {
		invalidId = '!../';
		const response = await devices.deleteObject(invalidId);
		expect(response.status).toBe(404);
	});
});
