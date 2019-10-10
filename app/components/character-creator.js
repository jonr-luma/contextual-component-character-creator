import Component from '@ember/component';

export default Component.extend({
  selectedClass: 'mage',
  name: 'Gonzo',
  actions: {
    changeClass(characterClass) {
      this.set('selectedClass', characterClass);
    },
    changeName(characterName) {
      this.set('name', characterName);
    }
  }
});
