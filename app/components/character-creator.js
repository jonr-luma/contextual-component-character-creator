import Component from '@ember/component';

export default Component.extend({
  selectedClass: '',
  name: 'Gonzo',
  actions: {
    changeClass(characterClass) {
      this.set('selectedClass', characterClass);
    }
  }
});
