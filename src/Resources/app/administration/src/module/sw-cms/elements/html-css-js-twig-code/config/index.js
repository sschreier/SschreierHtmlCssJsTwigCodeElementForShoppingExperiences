import template from './sw-cms-el-config-html-css-js-twig-code.html.twig';
import './sw-cms-el-config-html-css-js-twig-code.scss';

const { Mixin } = Shopware;

export default {
    template,

    emits: ['element-update'],

    mixins: [
        Mixin.getByName('cms-element'),
    ],

    computed: {
        verticalAlignmentOptions() {
            return [
                {
                    id: 1,
                    value: 'flex-start',
                    label: this.$tc('sw-cms.elements.htmlCssJsTwigCode.config.label.verticalAlignTop'),
                },
                {
                    id: 2,
                    value: 'center',
                    label: this.$tc('sw-cms.elements.htmlCssJsTwigCode.config.label.verticalAlignCenter'),
                },
                {
                    id: 3,
                    value: 'flex-end',
                    label: this.$tc('sw-cms.elements.htmlCssJsTwigCode.config.label.verticalAlignBottom'),
                },
            ];
        },

        horizontalAlignmentOptions() {
            return [
                {
                    id: 1,
                    value: 'flex-start',
                    label: this.$tc('sw-cms.elements.htmlCssJsTwigCode.config.label.horizontalAlignLeft'),
                },
                {
                    id: 2,
                    value: 'center',
                    label: this.$tc('sw-cms.elements.htmlCssJsTwigCode.config.label.horizontalAlignCenter'),
                },
                {
                    id: 3,
                    value: 'flex-end',
                    label: this.$tc('sw-cms.elements.htmlCssJsTwigCode.config.label.horizontalAlignRight'),
                },
            ];
        },
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('html-twig-code');
        },

        onBlur(content) {
            this.emitChanges('contentHtml', content);
        },

        onBlurCss(content) {
            this.emitChanges('contentCss', content);
        },

        onBlurJs(content) {
            this.emitChanges('contentJavaScript', content);
        },

        onInput(content) {
            this.emitChanges('contentHtml', content);
        },

        onInputCss(content) {
            this.emitChanges('contentCss', content);
        },

        onInputJs(content) {
            this.emitChanges('contentJavaScript', content);
        },

        emitChanges(type, content) {
            if (type === 'contentHtml') {
                if (content !== this.element.config.contentHtml.value) {
                    this.element.config.contentHtml.value = content;
                    this.$emit('element-update', this.element);
                }
            } else if (type === 'contentCss') {
                if (content !== this.element.config.contentCss.value) {
                    this.element.config.contentCss.value = content;
                    this.$emit('element-update', this.element);
                }
            } else if (type === 'contentJavaScript') {
                if (content !== this.element.config.contentJavaScript.value) {
                    this.element.config.contentJavaScript.value = content;
                    this.$emit('element-update', this.element);
                }
            }
        },
    }
};
