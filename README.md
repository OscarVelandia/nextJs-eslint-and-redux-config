This is a [Next.js](https://nextjs.org/) project with RTK (Redux Toolkit), Typescript, Prettier and ESLint (with airbnb style guide) already configured.

If you want to use this config in a production project, have in mind that *RTK Query* is in process of moving to the RTK repo and probably in the short term it will need some migration, this migration could be just delete the RTK Query package, but who knows.

## Getting Started

1. Clone the repository
2. Run `rm -rf .git` to delete the git information of the repository
3. Run `git init` to start a new Git repository
4. Update the package.json name property
5. Run yarn to install dependencies
6. Enjoy

## Project folder config
The resolver of every folder is @folderName, E.G. @features imports the files in the features folder, don't forget add the export of every file in index.tsx  

* ### components
  Folder with every React component with their corresponding *[componentName].module.css*.

* ### features
  Folder with every feature with a RTK slice and feature components slice, as a convention the name of every slice is featureName + Slice suffix, E.G. counterSlice.ts.

  In the counterSlice.ts file is a *slice* example.

* ### hooks
  Folder with the custom react hooks.

* ### pages
  Folder with every *NextJs* page.

* ### services
  Folder with every *RTK Query Api* config and queries, is needed just one file per endpoint.

  In the pokemonApi.ts file is a *service* example.

* ### store
  Folder with the **hooks** to wrap a typed useDispatch and useSelector and the **store** config with *RTK Query* middleware and reducer added.

* ### styles
  Folder with the global CSS file

* ### util
  Folder with the util functions, add one util per file.