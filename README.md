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

That's great, but what about sharing data or functions? This is where contextual components really
start to shine. Let's look at an example.

```
<CharacterCreator @classes={{this.model}}>
  <NamePicker @name={{this.name}} />
  <ClassPicker @classes={{this.model}} />
  <ShowCharacter @name={{this.name}} @selectedClass={{this.selectedClass}} />
</CharacterCreator>
```

As you can see above, `this.name` has to get passed into multiple components and managed separately.
Instead of passing this in to each individual component every time we want to use it, we can modify
the character creator component to yield its child components, and pass in the data there. 
Take a look at the contents of `app/templates/components/character-creator.hbs` to see what I mean.

Once we have this set up, we can use the contextual components when we use the parent component.
Have a look at `app/templates/index.hbs`.

Okay, that's all well and good, but what about passing functions down? Handling functions is a 3 step
process.
1. You need to create an action in the parent component that's responsible for what actually happens.
2. You need to pass the parent's function down to the contextual component using the `{{action}}` helper
in the parent component template.
3. You need to create an action in the contextual component that's responsible for calling the function
passed in by the parent.

Once you've done that, you can add the function using the property name in the contextual component template.

One other neat thing I learned along the way - you can use the `{{component}}` helper to dynamically render 
components. `app/templates/components/show-character.hbs` has a great example of that. 


### Further Reading
[Ember guides on wrapping components](https://guides.emberjs.com/release/components/wrapping-content-in-a-component/)
[Article with another example](https://kevink.me/2016/01/19/contextual-components-in-ember/)

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
