import template from './sw-cms-block-preview-html-css-js-twig-code.html.twig';
import './sw-cms-block-preview-html-css-js-twig-code.scss';

/**
 * @private
 * @package buyers-experience
 */
export default {
    template,

    compatConfig: Shopware.compatConfig,

    data() {
        return {
            demoValue: `
<h2>Lorem ipsum dolor</h2>
<p>Lorem ipsum dolor sit amet</p>`.trim(),
            editorConfig: {
                highlightActiveLine: false,
                cursorStyle: 'slim',
                highlightGutterLine: false,
                showFoldWidgets: false,
            },
        };
    },
};
