import { getGif } from "../../../src/components/helpers/getGifs"
describe('test en getGifs()', () => { 

    test('should debe de retornar un arreglo de gifs', async() => { 
        const gifs = await getGif('world of wacraft');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title:expect.any(String),
            url:expect.any(String)
        })
     })
 })