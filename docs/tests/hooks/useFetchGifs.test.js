import { renderHook,waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../../src/hooks/useFetchGifs"

describe('pruebas en usefetchgifs', () => { 
    test('debe regresar el estado inicial', () => { 
       const {result} = renderHook(()=>useFetchGifs('one puncheta'));
       const {images, isLoading } = result.current;
      expect(images.length).toBe(0);
      expect(isLoading).toBeTruthy();
     })
     test('debe regresar  un arreglo de imagenes y el isloadingen false', async() => { 
        const {result} = renderHook(()=>useFetchGifs('one puncheta'));
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
       
        );
      const {images, isLoading } = result.current;
       expect(images.length).toBeGreaterThan(0);
       expect(isLoading).toBeFalsy();
      })
 })