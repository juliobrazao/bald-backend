import { AssetEntity } from './asset.entity';

describe('AssetEntity', () => {
  const mockAssetContent: AssetEntity = {
    name: 'My asset',
    description: 'description with plain text',
    created_at: +new Date(),
  };

  const mockAssetObject = new AssetEntity();

  mockAssetObject.name = mockAssetContent.name;
  mockAssetObject.description = mockAssetContent.description;
  mockAssetObject.created_at = mockAssetContent.created_at;

  it('should be defined', () => {
    expect(mockAssetObject).toBeDefined();
  });
});
