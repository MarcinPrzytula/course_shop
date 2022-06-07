export const importImage = title => {
  const importAll = require => {
    let images = {};
    require.keys().map(item => {
      return (images[item.replace('./', '')] = require(item));
    });
    return images;
  };

  const allImages = importAll(
    require.context('../assets/images', false, /\.(png|jpe?g|jpg|svg)$/)
  );

  const imagePath = Object.keys(allImages).find(image =>
    image.includes(title.replace(' ', '_').toLowerCase())
  );

  const image = allImages[imagePath].default;

  return image;
};
