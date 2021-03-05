import { render } from '@testing-library/react';
import Status from './pages/Status';
//Tack Coung för förklaring till mitt problem! 
//Hitta bild som heter load
describe('Find loading image', () => {
  it('profile', () => {
    render(< Status />)
    const displayedImage = document.querySelector("img");
    expect(displayedImage.src).toContain("loader.png");
  })
});