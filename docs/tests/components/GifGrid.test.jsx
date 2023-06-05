import { render,screen } from "@testing-library/react";
import { GifGrid } from "../../../src/components/GifGrid";
import { useFetchGifs } from "../../../src/hooks/useFetchGifs";
jest.mock('../../../src/hooks/useFetchGifs');

describe('pruebas en el componente', () => { 
    const category = 'one punch';
    test('debe de mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        render(<GifGrid category={category}/>);
        screen.debug();
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

     });
     test('debe de mostrar items cuando se cargan las imagenes mediante useFetchGift ', () => { 
        const gifs = [
            {
                id: 'ABC',
                title: 'wow',
                url: 'http://talvez.jpg'
            },
            {
                id: '123',
                title: 'wow2',
                url: 'http://talvez2.jpg'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);
      })
 })