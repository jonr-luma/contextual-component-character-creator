# ember-contextual-component-test

## Ember Contextual Components
Contextual components are ember components that are wrapped within the context of an outer component.
In it's simplest form, it might look something like this:
```
// app/templates/application.hbs
<CharacterCreator @classes={{this.classes}} >
  <div class="my-awesome-content">
    <p>Hey, I'm a wizard!</p>
  </div>
</CharacterCreator>

// app/templates/character-creator.hbs
<div class="character-creator-content">
  {{yield}}
</div>
```
The syntax seen for the character creator component and it's wrapped content is known the component's
block form. The `{{yield}}` helper tells the component where to put it's wrapped content. 

That's great, but what about sharing data? Let's look at an example.

### Further Reading
[Ember guides on wrapping components](https://guides.emberjs.com/release/components/wrapping-content-in-a-component/)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-contextual-component-test`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
