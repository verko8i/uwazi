import { testingDB } from 'api/utils/testing_db';
import { search } from 'api/search';

jest.mock('api/permissions/permissionsContext', () => ({
  getUserInContext: jest.fn().mockReturnValue({
    _id: 'user1',
    role: 'collaborator',
  }),
}));

describe('access permissions on search', () => {
  describe('if user is contributor with no explicit permissions', () => {
    it('should only have access to public entities', async () => {
      const templateId = testingDB.id();
      await testingDB.clearAllAndLoad(
        {
          settings: [
            {
              languages: [
                {
                  label: 'en',
                  key: 'en',
                  default: true,
                },
              ],
            },
          ],
          templates: [
            {
              _id: templateId,
              properties: [],
            },
          ],
          entities: [
            {
              title: 'entity1',
              language: 'en',
              permissions: [],
              published: true,
              template: templateId,
            },
            {
              title: 'entity2',
              language: 'en',
              permissions: [],
              published: true,
              template: templateId,
            },
            {
              title: 'entity3',
              language: 'en',
              permissions: [],
              published: false,
              template: templateId,
            },
          ],
        },
        'search_permissions_index'
      );

      const user = {
        _id: 'user1',
        role: 'collaborator',
      };

      const searchResults = await search.search({}, 'en', user);
      expect(searchResults.rows).toEqual([
        expect.objectContaining({
          title: 'entity1',
        }),
        expect.objectContaining({
          title: 'entity2',
        }),
      ]);
    });
  });
});
