# React+Vite Browser Extension Template

This repository contains the template used for developing a browser extension with React+Vite. You can use this template to develop extensions for both Chrome-based and Firefox-based browsers. this template also uses two separate manifests (MV 2 and 3) for each Chrome and Firefox.

## Building

This template uses Vite building configuration to build the final extension for both Chrome and Firefox, with their respective manifest file. Building can be triggered and done either locally, or by using GitHub Action workflow, which is included in the template.

As you may already know, steps to build locally are:

1. Make sure to have the dependencies installed: `pnpm install`
2. Trigger the build precedure: `pnpm build`
3. Done. Check `/build` path for `/build/chrome` and `/build/firefox` sub-folders.

## License

This template is licensed under the [GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0.en.html).

### Support the creator

My name is [Ali Almasi](https://alialmasi.ir), and I'm a web developer, based in Tehran. I'll be very happy to receive your donations via [Daramet](https://daramet.com/alialmasi).
