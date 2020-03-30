const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Incidents', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  })

  afterAll(async () => {
    await connection.destroy();
  })

  it('should be able to create a new incidents', async () => {
    const ong_id = generateUniqueId();
    await connection('ongs').insert({
      id: ong_id,
      name: "APAD2",
      email: "contato@apad.com.br",
      whatsapp: "12345678912",
      city: "Campos",
      uf: "RJ"
    });

    const response = await request(app)
      .post('/incidents')
      .set({
        authorization: `${ong_id}`
      })
      .send({
        title: "novo incidente",
        description: "description incident",
        value: 120.00
      });

    expect(response.body).toHaveProperty('id');
    expect(response.status).toEqual(200);
  })

  it('should be able to delete a incident', async () => {

    const ong_id = generateUniqueId();
    await connection('ongs').insert({
      id: ong_id,
      name: "APAD2",
      email: "contato@apad.com.br",
      whatsapp: "12345678912",
      city: "Campos",
      uf: "RJ"
    });

      
    const [id]= await connection('incidents').insert({
      title: "novo incidente",
      description: "description incident",
      value: 120.00,
      ong_id
    });

    const response = await request(app)
      .delete(`/incidents/${id}`)
      .set({
        authorization: `${ong_id}`,
      });

    expect(response.status).toEqual(204);
  })
})