import CatalogPage from './catalog';
import rootsLoaded from './roots/brands';

export default class Brands extends CatalogPage {
    onReady() {
        rootsLoaded();
    }
}
