import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | test-component', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<TestComponent />`);

    assert.equal(this.element.textContent.toLocaleLowerCase().trim(), 'this is weird');

    // Template block usage:
    await render(hbs`
      <TestComponent>
        This is Weird
      </TestComponent>
    `);

    assert.equal(this.element.textContent.toLocaleLowerCase().trim(), 'this is weird')
  });
});
