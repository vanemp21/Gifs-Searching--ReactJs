import { render,screen,fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../../../src/GifExpertApp";

describe('pruebas en el componente', () => { 
    test('prueba', () => { 
        render(<GifExpertApp/>);
        expect(screen.getByText('Pokemon'));
        screen.debug();
     })
     test('should first', () => { 
        render(<GifExpertApp/>);
        const inputValue = 'Saitama';
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        expect(input.value).toBe('');
      })
 })