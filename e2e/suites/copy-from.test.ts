/*global page*/

import { adminLogin, logout } from '../helpers/login';
import proxyMock from '../helpers/proxyMock';
import insertFixtures from '../helpers/insertFixtures';

function delay(time) {
  return new Promise(function(resolve) {
    setTimeout(resolve, time);
  });
}

describe('Copy from', () => {
  beforeAll(async () => {
    await insertFixtures();
    await proxyMock();
    await adminLogin();
  });

  it('Should create new entity, copy its metadata from an existing one and save it as new relationship', async () => {
    await expect(page).toClick(
      '#app > div.content > div > div > div > main > div.documents-list > div > div.item-group.item-group-zoom-0 > div:nth-child(1) > div.item-actions > div > a'
    );
    await expect(page).toClick('.tab-link', { text: 'Connections' });
    await expect(page).toClick('button', { text: 'Edit' });
    await expect(page).toClick('button', { text: 'Add entities / documents' });
    await delay(50); //slide animation delay
    await expect(page).toClick('button', { text: 'Create Entity' });
    await expect(page).toFill('textarea[name="relationships.metadata.title"]', 'Test title');
    await page.select('select', '58ada34c299e826748545061');
    await expect(page).toClick('button', { text: 'Copy From' });
    await page.waitForSelector('div.search-box > div > input');
    await expect(page).toFill('aside.connections-metadata div.search-box > div > input', 'artavia');
    await delay(50); // search delay
    await expect(page).toClick('div.copy-from .item-info', { text: 'Artavia Murillo et al' });
    await expect(page).toClick('button', { text: 'Copy Highlighted' });
    await expect(page).toClick('.side-panel button', { text: 'Save' });
    await expect(page).toClick('button', { text: 'Save' });
    await expect(page).toClick('.item-info', { text: 'Test title' });
    await expect(page).toMatchElement(
      '.side-panel.connections-metadata > div.sidepanel-body > div > dl:nth-child(3) dd',
      {
        text: 'Costa Rica',
      }
    );

    await expect(page).toMatchElement(
      '.side-panel.connections-metadata > div.sidepanel-body > div > dl:nth-child(4) dd',
      {
        text: 'Activo',
      }
    );

    await expect(page).toMatchElement(
      '.side-panel.connections-metadata > div.sidepanel-body > div > dl:nth-child(5) dd',
      {
        text: 'Derechos reproductivos',
      }
    );
    await expect(page).toMatchElement(
      '.side-panel.connections-metadata > div.sidepanel-body > div > dl:nth-child(8) dd',
      {
        text: 'Dec 19, 2011',
      }
    );
  });

  afterAll(async () => {
    await logout();
  });
});
