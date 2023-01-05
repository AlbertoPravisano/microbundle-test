# Showcase of a React component

Using `microbundle-crl@0.13.11` this component renders correctly in both cases, but with `microbundle@0.15.1` the second Placeholder (Component with lines generated) does not render any line.

It seems a problem with globals since `[...Array(nLines).keys()]` does not return an array of increasing numbers but returns an empty object `[{}]` and `[...Array(nLines)].map((_, index) => console.log(index))` prints nothing on console, but both works in the browser's dev tools console and in a project builded with react-scripts

Seems similiar to https://github.com/developit/microbundle/issues/820

## scripts with microbundle-crl

```
"scripts": {
    "build": "microbundle-crl --no-compress --no-css-modules --no-sourcemap --format modern,cjs",
    "start": "microbundle-crl watch --no-compress --no-css-modules --no-sourcemap --format modern,cjs",
  },
```

## scripts with microbundle

```
"scripts": {
    "build": "microbundle --no-compress --no-css-modules --no-sourcemap --format modern,cjs --jsx React.createElement --jsxFragment React.Fragment",
    "start": "microbundle watch --no-compress --no-css-modules --no-sourcemap --format modern,cjs --jsx React.createElement --jsxFragment React.Fragment",
  },
```
