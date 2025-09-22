# React+Vite Browser Extension Template

This repository contains the template used for developing a browser extension with React+Vite. You can use this template to develop extensions for both Chrome-based and Firefox-based browsers. This template also uses two separate manifests (manifest V2 and V3) for each Chrome and Firefox.

## Building

This template uses [Vite building](https://vite.dev/guide/build) configuration and [Rollup options](https://rollupjs.org/configuration-options/) to build the final extension package for both Chrome and Firefox, with their respective manifest file. Building can be triggered and done either locally, or automatically using GitHub Action workflow, which is included in the template.

### Automated builds

Automated builds are triggered when there's a new release tag. It also can be triggered manually. If triggered manually, the built packages will be uploaded and over-written to the latest release tag.

You can see the [latest release of this repo](https://github.com/AliAlmasi/react-vite-extension-template/releases/latest) and see the `chrome.zip` and `firefox.zip` files, ready to use.

### Building locally

As you may already know, steps to build locally are:

0. Make sure to have `node` and `npm` installed. ([`pnpm` is recommended to use](https://www.freecodecamp.org/news/how-to-use-pnpm/))
1. Make sure to have the dependencies installed: `pnpm install`
2. Trigger the build precedure: `pnpm build`
3. Done. Check `/build` path for `/build/chrome` and `/build/firefox` sub-folders.

## License

This template is licensed under the [GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0.en.html).

### Support the creator

My name is [Ali Almasi](https://alialmasi.ir), and I'm a web developer, based in Tehran. I'll be very happy to receive your donations via [Daramet](https://daramet.com/alialmasi).
