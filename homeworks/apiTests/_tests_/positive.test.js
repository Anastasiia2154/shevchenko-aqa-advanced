import { Objects } from '../endpoints';
import { faker } from '@faker-js/faker';

const devices = new Objects('https://api.restful-api.dev');

const objectIds = [];

describe('Object endpoints tests', () => {
	beforeEach(async () => {
		const testObjects = [
			{
				name: 'Apple MacBook Pro 16',
				data: {
					year: faker.date.past().getFullYear(),
					price: faker.commerce.price({ min: 500, max: 3000 }),
					'CPU model': 'Intel i9',
					'Hard disk size': `${faker.number.int({ min: 128, max: 2048 })} GB`,
				},
			},
			{
				name: 'Dell XPS 13',
				data: {
					year: faker.date.past().getFullYear(),
					price: faker.commerce.price({ min: 500, max: 3000 }),
					'CPU model': 'Intel i7',
					'Hard disk size': `${faker.number.int({ min: 128, max: 2048 })} GB`,
				},
			},
			{
				name: 'HP Spectre x360',
				data: {
					year: faker.date.past().getFullYear(),
					price: faker.commerce.price({ min: 500, max: 3000 }),
					'CPU model': 'Intel i7',
					'Hard disk size': `${faker.number.int({ min: 128, max: 2048 })} GB`,
				},
			},
		];

		for (const testObject of testObjects) {
			const response = await devices.addObject(testObject);
			objectIds.push(response.id);
		}
	});

	test('GET: Can get created object', async () => {
		const response = await devices.getSingleObject(objectIds[0]);
		expect(response.status).toBe(200);
		expect(response.data.id).toBe(objectIds[0]);
	});

	test('GET: Can get created object list', async () => {
		const response = await devices.getListOfObjects(objectIds);
		expect(response.status).toBe(200);
		for (let i = 0; i < objectIds.length; i++) {
			expect(response.data[i].id).toBe(objectIds[i]);
		}
	});

	test('PUT: Can update created object', async () => {
		const updatedObjectData = {
			name: 'Apple MacBook Pro 16',
			data: {
				year: 2019,
				price: 2049.99,
				'CPU model': 'Intel Core i9',
				'Hard disk size': '1 TB',
				color: 'silver',
			},
		};
		const response = await devices.updateObject(objectIds[0], updatedObjectData);
		expect(response.status).toBe(200);
		expect(response.data.name).toBe(updatedObjectData.name);
		expect(response.data.data.year).toBe(updatedObjectData.data.year);
		expect(response.data.data['CPU model']).toBe(updatedObjectData.data['CPU model']);
		expect(response.data.data['Hard disk size']).toBe(updatedObjectData.data['Hard disk size']);
		expect(response.data.data.price).toBe(updatedObjectData.data.price);
		expect(response.data.data.color).toBe(updatedObjectData.data.color);
	});

	test('PUT: Can Partially update object', async () => {
		const updatedObjectData = {
			name: 'Apple MacBook Pro 16',
		};

		const response = await devices.particularUpdateObject(objectIds[1], updatedObjectData);
		expect(response.status).toBe(200);
		expect(response.data.name).toBe(updatedObjectData.name);
	});

	test('PUT: Can delete object', async () => {
		const response = await devices.deleteObject(objectIds[2]);
		expect(response.status).toBe(200);

		const getObjectResponse = await devices.getSingleObject(objectIds[2]);
		expect(getObjectResponse.status).toBe(404);
	});

	afterEach(async () => {
		for (const id of objectIds) {
			try {
				await devices.deleteObject(id);
			} catch (error) {
				console.warn(`Failed to delete object with id ${id}:`, error.message);
			}
		}
	});
});
