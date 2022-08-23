import { globalFilter, arrayWithMovies, orderByLetterA, orderByLetterZ, orderByScoreMinus, orderByScorePlus } from '../src/data.js';

describe("globalFilter", () => {
  it('Es una función', () => {
    expect(typeof globalFilter).toBe('function');
  });

  test("La longitud del filtrado de la selección de los 80s de Miyazaki es de 3", () => {
    expect(globalFilter("80s", "Hayao Miyazaki", "AZ", arrayWithMovies).length).toBe(3)
  });

  test("La longitud del filtrado de la selección de los 90s de Kondō no es de 7, es de 1", () => {
    expect(globalFilter("90s", "Yoshifumi Kondō", "ZA", arrayWithMovies).length === 7).toBe(false)
  })

  test("La longitud del filtrado de los años 2000-2009 es de 5", () => {
    expect(globalFilter("00s", "moviedirector", "plus", arrayWithMovies).length === 5).toBe(true)
    expect(globalFilter("00s", "moviedirector", "plus", arrayWithMovies).length === 5).not.toBe(false)
    expect(globalFilter("00s", "moviedirector", "plus", arrayWithMovies)).toHaveLength(5)
  })

  test("El arreglo que recibe la selección de 2010 a la actualidad del director Isao Takahata es el de película The Tale of the Princess Kaguya", () => {
    expect(globalFilter("10s", "Isao Takahata", "minus", arrayWithMovies)).toStrictEqual([{"description": "A bamboo cutter named Sanuki no Miyatsuko discovers a miniature girl inside a glowing bamboo shoot. Believing her to be a divine presence, he and his wife decide to raise her as their own, calling her 'Princess'.", "director": "Isao Takahata", "id": "578ae244-7750-4d9f-867b-f3cd3d6fecf4", "locations": [{ "climate": "Tropical", "id": "682df5c3-b09e-46af-94d1-ae0d17f9b4b6", "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/ec/Ghibli-kaguya-bamboo-forest.jpg", "name": "Bamboo Forest", "residents": ["TODO"], "surface_water": "10", "terrain": "Forest" }], "people": [{ "age": "Adult", "eye_color": "Black", "gender": "Female", "hair_color": "Navy blue", "id": "a8b338c0-e586-4c1c-8857-f33540d0d4d7", "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d4/Kaguya_shows_off_her_teeth.jpg", "name": "Kaguya", "specie": "Human" }, { "age": "Adult", "eye_color": "Black", "gender": "Male", "hair_color": "Black", "id": "a21fbdd5-16bc-4931-80d0-3ce89ffce778", "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/37/Sutemaru.PNG", "name": "Sutemaru", "specie": "Human" }, { "age": "Adult", "eye_color": "Black", "gender": "Male", "hair_color": "Black", "id": "4c697b7d-4f64-4ac9-ae29-e155eb1693f3", "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/5c/Ghibli-kaguya-ishitsukuri.jpg", "name": "Ishitsukuri", "specie": "Human" }, { "age": "Elder", "eye_color": "Grey", "gender": "Male", "hair_color": "White", "id": "fe1e5acf-e5e4-4769-9755-989cf7a2e961", "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/4a/Sanuki_no_Miyatsuko.jpeg", "name": "Miyatsuko", "specie": "Human" }, { "age": "17", "eye_color": "Black", "gender": "Female", "hair_color": "Navy blue", "id": "839ff5b9-69ba-4d55-ab77-de939b46b18a", "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/22/Menowarawa.jpg", "name": "Menowarawa", "specie": "Human" }, { "age": "Adult", "eye_color": "Black", "gender": "Female", "hair_color": "Black", "id": "1752fc88-c6b7-4fef-8b64-51451d808033", "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/28/Sagami.png", "name": "Lady Sagami", "specie": "Human" }, { "age": "Elder", "eye_color": "Black", "gender": "Male", "hair_color": "White", "id": "942fb1029-b51f-4100-8bee-86547c09b0ff", "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/1c/Ghibli-kaguya-akita.jpg", "name": "Inbe no Akita", "specie": "Human" }, { "age": "Elder", "eye_color": "Black", "gender": "Female", "hair_color": "Grey", "id": "be634b4e-c333-4225-a5f0-2a0aa33d6453", "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/cb/Ouna.jpg", "name": "Ōna", "specie": "Human" }], "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/8/87/The_Tale_of_the_Princess_Kaguya.jpg", "producer": "Yoshiaki Nishimura", "release_date": "2013", "rt_score": "100", "title": "The Tale of the Princess Kaguya", "vehicles": [] }])
  });

});

describe("orderByLetterA", () => {
  it('Es una función', () => {
    expect(typeof orderByLetterA).toBe('function');
  });

  test("Regresa Castle in the Sky", () => {
    expect(arrayWithMovies.sort(orderByLetterA)[0]).toMatchObject({"title": "Castle in the Sky"})
  });

});

describe("orderByLetterZ", () => {
  it('Es una función', () => {
    expect(typeof orderByLetterZ).toBe('function');
  });
  test("Regresa Whisper of the Heart", () => {
    expect(arrayWithMovies.sort(orderByLetterZ)[0]).toMatchObject({"title": "Whisper of the Heart"})
  });

});

describe("orderByScoreMinus", () => {
  it('Es una función', () => {
    expect(typeof orderByScoreMinus).toBe('function');
  });

  test("Regresa Tales from Earthsea", () => {
    expect(arrayWithMovies.sort(orderByScoreMinus)[0]).toMatchObject({"title": "Tales from Earthsea"})
  });

});

describe("orderByScorePlus", () => {
  it('Es una función', () => {
    expect(typeof orderByScorePlus).toBe('function');
  });

  test("Regresa The Tale of the Princess Kaguya", () => {
    expect(arrayWithMovies.sort(orderByScorePlus)[0]).toMatchObject({"title": "The Tale of the Princess Kaguya"})
  });

});