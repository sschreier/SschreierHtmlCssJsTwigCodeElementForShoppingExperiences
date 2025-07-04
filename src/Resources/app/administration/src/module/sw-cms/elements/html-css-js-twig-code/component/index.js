import template from './sw-cms-el-html-css-js-twig-code.html.twig';
import './sw-cms-el-html-css-js-twig-code.scss';

const { Mixin } = Shopware;

export default {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    data() {
        return {
            editorConfig: {
                highlightActiveLine: false,
                cursorStyle: 'slim',
                highlightGutterLine: false,
                showFoldWidgets: false,
            },
        };
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('html-css-js-twig-code');
        },
    }
};
