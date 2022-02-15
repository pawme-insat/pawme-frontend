import { PetPicturePipe } from './pet-picture.pipe';

describe('PetPicturePipe', () => {
  it('create an instance', () => {
    const pipe = new PetPicturePipe();
    expect(pipe).toBeTruthy();
  });
});
