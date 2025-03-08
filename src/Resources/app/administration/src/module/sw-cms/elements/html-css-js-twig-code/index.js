/**
 * @private
 * @package buyers-experience
 */
Shopware.Component.register('sw-cms-el-preview-html-css-js-twig-code', () => import('./preview'));
/**
 * @private
 * @package buyers-experience
 */
Shopware.Component.register('sw-cms-el-config-html-css-js-twig-code', () => import('./config'));
/**
 * @private
 * @package buyers-experience
 */
Shopware.Component.register('sw-cms-el-html-css-js-twig-code', () => import('./component'));

/**
 * @private
 * @package buyers-experience
 */
Shopware.Service('cmsService').registerCmsElement({
    name: 'html-css-js-twig-code',
    label: 'sw-cms.elements.htmlCssJsTwigCode.label',
    component: 'sw-cms-el-html-css-js-twig-code',
    configComponent: 'sw-cms-el-config-html-css-js-twig-code',
    previewComponent: 'sw-cms-el-preview-html-css-js-twig-code',
    defaultConfig: {
        enableTwigInContentHtml: {
            source: 'static',
            value: true,
        },
        contentHtml: {
            source: 'static',
            value: `
<h2>Lorem ipsum dolor</h2>
<p class="blue">Lorem ipsum dolor sit amet</p>`.trim(),
        },
        contentCss: {
            source: 'static',
            value: `
.blue {
    color: #004080;
}`.trim(),
        },
        contentJavaScript: {
            source: 'static',
            value: `
console.log("test");`.trim(),
        },
        verticalAlign: {
            source: 'static',
            value: null
        },
        horizontalAlign: {
            source: 'static',
            value: null
        }
    }
});
