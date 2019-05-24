<h1 align="center">Vue + Bootstrap = Vootstrap</h1>

<p align="center">
  <a href="https://http://www.android.com">
		<img src="https://img.shields.io/badge/Written%20in-JavaScript-orange.svg?style=flat">
	</a>
	<a href="https://tldrlegal.com/license/apache-license-2.0-(apache-2.0)">
		<img src="https://img.shields.io/badge/License-Apache 2.0-blue.svg?style=flat">
	</a>
</p>

## 👓 At a Glance

`Vootstrap` is a carefully thought-out combination of [Vue.js](https://vuejs.org) and [Bootstrap](https://getbootstrap.com) frameworks. `Vootstrap` gives you an incredible simplicity and makes your `Bootstrap` experience much more enjoyable 🎉

It works well for both websites and hybrid mobile apps. You can use popular components from `Bootstrap` filled with the power of reactive programming given by `Vue.js`.

## 🚀 How to Get Started

Copy [vootstrap.js](vootstrap.js) to your project.

## ✔ Requirements

- [Vue.js](https://vuejs.org)
- [Bootstrap](https://getbootstrap.com)

## ⌨ Usage

For now, button is the only component supported by `Vootstrap`. New components will be supported soon.

Also, take a look at [demo app](demo/index.html) which gives the base understanding of amazing `Vootstrap` principles.

### Buttons

Simple primary button:

```html
<vt-button-primary title="My button"></vt-button-primary>
```

The same button outlined:

```html
<vt-button-primary-outline title="My button"></vt-button-primary-outline>
```

You can also change the size:

```html
<vt-button-success-outline-small title="Small button"></vt-button-success-outline-small>
<vt-button-warning-outline-large title="Large button"></vt-button-warning-outline-large>
```

One of the fundamental `Vootstrap` features is ability to swap tag name components. All the examples below are correct:

```html
<vt-button-primary-outline-large title="My button"></vt-button-primary-outline-large>
<vt-button-primary-large-outline title="My button"></vt-button-primary-large-outline>
<vt-button-outline-primary-large title="My button"></vt-button-outline-primary-large>
<vt-button-primary-large title="My button"></vt-button-primary-large>
<vt-button-large-primary title="My button"></vt-button-large-primary>
```

So, you don't need to use CSS classes like `btn-primary`, `btn-lg`, etc. Just put the button's style information in the tag and use it like a regular button.

## ⚖ License

`Vootstrap` is available under the Apache 2.0 license. See the [LICENSE](./LICENSE) file for more info.
