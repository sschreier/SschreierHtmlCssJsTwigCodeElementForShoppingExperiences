Shopware.Component.register('sw-cms-block-html-css-js-twig-code', () => import('./component'));
Shopware.Component.register('sw-cms-block-preview-html-css-js-twig-code', () => import('./preview'));

Shopware.Service('cmsService').registerCmsBlock({
    name: 'html-css-js-twig-code',
    label: 'sw-cms.blocks.htmlCssJsTwigCode.label',
    category: 'html',
    component: 'sw-cms-block-html-css-js-twig-code',
    previewComponent: 'sw-cms-block-preview-html-css-js-twig-code',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },
    slots: {
        content: 'html-css-js-twig-code',
    }
});
