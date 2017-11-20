import Application, { DOMBuilder, RuntimeCompilerLoader, SyncRenderer } from '@glimmer/application';
import Resolver, { BasicModuleRegistry } from '@glimmer/resolver';
import moduleMap from '../config/module-map';
import resolverConfiguration from '../config/resolver-configuration';

export default class App extends Application {
  constructor() {
    let moduleRegistry = new BasicModuleRegistry(moduleMap);
    let resolver = new Resolver(resolverConfiguration, moduleRegistry);

    super({
      rootName: resolverConfiguration.app.rootName,
      loader: new RuntimeCompilerLoader(resolver),
      renderer: new SyncRenderer(),
      builder: new DOMBuilder({ element: document.body, nextSibling: null }),
      resolver
    });
  }
}
