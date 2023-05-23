const app = require('../app');
const session = require('supertest');
const request = session(app);


const character = {
  id: 1997,
  name: 'brian',
  species: 'human',
  gender: 'female',
  status: 'alive',
  origin: {
    name: 'Earth (c-137)'
  },
  image: 'image.jpg'
};


describe('Test de RUTAS', () => {
  it('Responde con status: 200', async () => {
    await request.get('/rickandmorty/character/1').expect(200)
  });

  it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
    const response = await request.get('/rickandmorty/character/1');
  
    expect(response.status).toBe(200);
  
    const characterProperties = Object.keys(character);
    for (const prop of characterProperties) {
      expect(response.body).toHaveProperty(prop);
    }
  });
  it('Si hay un error responde con status: 500', async () => {
    const response = await request.get('/rickandmorty/character/999999').expect(500);
  });
});



describe('GET /rickandmorty/login', () => {
  const access = { access: true };

  it("Responde con un objeto con la propiedad access en true si la informacion del usuario es valida", async () => {
    const response = await request.get('/rickandmorty/login?email=brian@gmail.com&password=123456789');
    expect(response.body).toEqual(access);
  });

  it("Responde con un objeto con la propiedad access en false si la informacion del usuario es invalida", async () => {
    const response = await request.get('/rickandmorty/login?email=345brian@gmail.com&password=123456789werdf');
    access.access = false; // Actualizar el valor de access para el segundo caso
    expect(response.body).toEqual(access);
  });
});



describe('POST /rickandmorty/fav', () => {

  it("debe guardar el personajes en favoritos", async () => {
    const response = await request.post('/rickandmorty/fav').send(character);
    expect(response.body).toContainEqual(character);
  });


  it("debe agregar personajes a favoritos sin eliminar los existentes", async () => {
    character.id = 1923;
    character.name = 'FT 38a'
    const response = await request.post('/rickandmorty/fav').send(character);
    expect(response.body.length).toBe(2);
  })
});



describe("DELETE /rickandmorty/fav/:id", () => {
  it("Si el ID solicitado no existe, deberia retornar un arreglo con todos los favoritos", async () => {
    const response = await request.delete('/rickandmorty/fav/2345gsd');
    expect(response.body.length).toBe(2);
  });

  it('Si el ID enviado existe, deberia eliminarlo de favoritos', async () => {
    const response = await request.delete('/rickandmorty/fav/1923');
    expect(response.body.length).toBe(1);
  })
})