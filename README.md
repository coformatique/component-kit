
# Coformatique's Component Kit



[![License:](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/Coformatique/component-kit/blob/main/LICENSE)



This is a monorepo created using Nx. It contains a UI package of components built on top of MUI and React Hook Form. The repo uses Storybook to visually test the UI components along with their different variants.



## Table of Contents



- [Structure](#structure)



- [Installation](#installation)



- [Usage](#usage)



- [Drawbacks & Missing Features](#drawbacks--missing-features)



- [Contributing](#contributing)



- [License](#license)



## Structure



The repo contains a folder for _packages_ and a folder for _scripts_.



The packages folder contains one package which is:



1.  **ui** (package containing all UI components along with their stories)



The scripts folder contains Jest testing library configurations.



## Installation



1. Clone the repository

`git clone https://github.com/coformatique/component-kit`

2. Move to the root of the repository

`cd component-kit`

3. Install all necessary packages.

`yarn install`

4. Build the UI library.

`yarn build:ui`

5. Run Storybook to view all stories for all UI components in the **built** UI package locally.

`yarn story`


***Note:** The `yarn story`  command, in the root package.json file, builds Storybook based on the generated build files of the UI library. It will fail if the UI package hasn't been built first. Alternatively, you could run `cd packages/ui && yarn start` which will build Storybook based on the actual files in the source folder of the UI package, this is very helpful for debugging reasons and/or testing changes to the UI package without having to rebuild it every time you make a change.*








## Usage



The UI library is built on top of [MUI library.](https://mui.com/) It has a collection of components which provide additional functionalities and styles to what the basic MUI components offer by default. The UI library also depends on the [React Hook Form library](https://react-hook-form.com/) for the form field components. All the components, functions and types of the MUI and React Hook Form libraries are exported by default from this UI library in addition to the added customized components that it offers.



In order to be able to use the UI library in your React project, you have to wrap your App components with the **UIProvider** component available in the package and then either provide your own theme and give it as a prop to the UIProvider component **OR** you could use the UIProvider without any props and it will use a default theme available in the UI package itself. Here are the steps on how to do this:


1.  Go to the **app.tsx** file as this is the starting point of the react which should contain all React components underneath it in the components tree.



2. In the index.tsx file, import the UIProvider component from **_@component-kit/ui"_** as shown here: `import { UIProvider } from '@component-kit/ui';`



3. Inside the root React element, wrap your components with the UIProvider component. You can either provide your own custom theme to the UIProvider through the **_theme_** prop, but it internally uses its own default MUI theme and when given a custom theme, it merges it with the default theme and overrides any duplicate values. You can also provide some constants through the **_const_** prop. These constants are mainly arbitrary values for border radius of components, width of components, padding for components, etc.



> import { createTheme } from '@component-kit/ui';

> const theme = createTheme({});

> function App() {

> return (

>  <UIProvider  theme  {theme}>

> {/_ your components _/}

> <//UIProvider> );

> }



5. Now you are able to use any component from the UI library. Each component in the UI library has its own props which can be used to provide the styles/functionalities you want. These props are well documented in the Storybook of the UI library which you can view using the "_yarn story_" script. The good part is that you can use any of the MUI and React Hook Form components directly through importing them from "@component-kit/ui". There is no need to install any MUI or React Hook Form packages as they are already bundled within the UI library.



## Drawbacks & Missing Features



1. Missing Jest unit tests for the UI components.



2. Missing documentation and/or examples on how to use some of the more complex UI components such as the form fields components and the dialog components.



## Contributing

  We welcome contributions to our project! Here are some ways you can help:



- Report issues: If you encounter any bugs or issues with the project, please let us know by creating an issue on the GitHub repository.

- Fix issues: If you have identified an issue with the project and would like to fix it, please create a pull request with your proposed changes.

- Add new features: If you have an idea for a new feature or improvement, feel free to create an issue on the GitHub repository to discuss it with the maintainers.

- Improve documentation: If you find that the project's documentation is unclear or incomplete, please help us improve it by creating a pull request with your proposed changes.



Before making any contributions, please read our [Contributing Guidelines](https://github.com/coformatique/component-kit/blob/main/CONTRIBUTING.md) to ensure that your contributions are in line with our project's values and standards.



Thank you for your interest in contributing to our project!





## License

MIT License

Copyright (c) 2023 Coformatique

Permission is hereby granted, free of charge, to any person obtaining a copy

of this software and associated documentation files (the "Software"), to deal

in the Software without restriction, including without limitation the rights

to use, copy, modify, merge, publish, distribute, sublicense, and/or sell

copies of the Software, and to permit persons to whom the Software is

furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all

copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR

IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,

FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE

AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER

LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,

OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE

SOFTWARE.
