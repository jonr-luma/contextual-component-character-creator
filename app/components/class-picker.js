import Component from '@ember/component';

export default Component.extend({
  actions: {
    didPickClass(selectedClass) {
      this.onClassSelection(selectedClass);
    }
  }
});
