const request = require("supertest");
const app = require('../index');
describe('Post Endpoints', () => {
    it('should fetch', async () => {
      const res = await request(app)
        .post('/count/search')
        .send({
            "startDate":"2016-01-26",
            "endDate":"2016-02-26",
            "minCount":2700,
            "maxCount":3000
        })
        expect(res.body.code).toEqual(0)
        expect(res.body).toHaveProperty('records');
    })
  })
describe('Post Endpoints', () => {
    it('should not fetch', async () => {
      const res = await request(app)
        .post('/count/search')
        .send({
            "endDate":"2016-02-26",
            "minCount":2700,
            "maxCount":3000
        })
        expect(res.body.code).toEqual(400)
    })
  })