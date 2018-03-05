export let DefaultSpys = {
  stateService: jasmine.createSpyObj('StateService', ['getState', 'setState']),
  systemsService: {systems: []},
  entityService: jasmine.createSpyObj('EntityService', ['all', 'get', 'add', 'remove']),
  renderingService: jasmine.createSpyObj('RenderingService', ['onInitEvent', 'getNumberRenderer', 'init']),
  gameWorldService: jasmine.createSpyObj('GameWorldService', ['onInitWorld', 'initWorld']),
  shopService: jasmine.createSpyObj('ShopService', ['buy', 'buyDootClicker', 'getAmount', 'setAmount', 'getShopItems'])
};
