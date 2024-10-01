# Image Processing API

This project is used to get an image from folder, resize it based on user's specifications and display it.

# Local development setup

To run local, you need to run these following steps:
```shell
npm install
```

# Running local

Running `npm run runprj` to build and run project. Then you can access url http://localhost:3000/api/images?filename=<name_of_image>&width=<width_of_image>&height=<height_of_image>

You can see existance images in folder `images` and converted images in folder `output`

# Checking quality

To run init test:
```shell
npm run test
```

To run eslint:
```shell
npm run lint
```

To run prettier:
```shell
npm run prettier
```
