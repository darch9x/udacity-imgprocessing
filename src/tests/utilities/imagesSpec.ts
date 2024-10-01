import getImagePath from '../../utilities/getImagePath';
import resizeImage from '../../utilities/resizeImage';

describe('getImagePath', () => {
  it('should get a path', (done) => {
    const fileName = 'fanxipang';
    const width = 300;
    const height = 300;

    const image = getImagePath(fileName, width, height);

    expect(image).toBeDefined();
    done();
  });
});
describe('resizeImage', () => {
  it('should create a new image and return its path', (done) => {
    const fileName = 'bavi';
    const width = 200;
    const height = 200;

    const image = resizeImage(fileName, width, height);

    expect(image).toBeDefined();
    done();
  });
});
