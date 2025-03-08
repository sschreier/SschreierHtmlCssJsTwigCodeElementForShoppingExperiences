import './module/sw-cms/blocks/html/html-css-js-twig-code';

import './module/sw-cms/elements/html-css-js-twig-code';

import deDE from './module/sw-cms/snippet/de-DE.json';
import enGB from './module/sw-cms/snippet/en-GB.json';

Shopware.Locale.extend('de-DE', deDE);
Shopware.Locale.extend('en-GB', enGB);
