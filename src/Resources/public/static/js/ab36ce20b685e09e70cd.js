(window["webpackJsonpPluginsschreier-html-css-js-twig-code-element-for-shopping-experiences"]=window["webpackJsonpPluginsschreier-html-css-js-twig-code-element-for-shopping-experiences"]||[]).push([[225],{56:function(){},225:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}}),t(387);let{Mixin:s}=Shopware;var l={template:'{% block sw_cms_el_config_html_css_js_twig_code %}\n    <div class="sw-cms-el-config-html-css-js-twig-code">\n        {% block sw_cms_el_config_html_css_js_twig_code_tabs %}\n            <sw-tabs\n                position-identifier="sw-cms-element-config-html-css-js-twig-code"\n                class="sw-cms-el-config-html-css-js-twig-code__tabs"\n                default-item="content"\n            >\n\n                <template #default="{ active }">\n                    \n                    {% block sw_cms_el_config_html_css_js_twig_code_tab_content %}\n                        <sw-tabs-item\n                            :title="$tc(\'sw-cms.elements.htmlCssJsTwigCode.config.tab.content\')"\n                            name="content"\n                            :active-tab="active"\n                        >\n                            {{ $tc(\'sw-cms.elements.htmlCssJsTwigCode.config.tab.content\') }}\n                        </sw-tabs-item>\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_el_config_html_css_js_twig_code_tab_settings %}\n                        <sw-tabs-item\n                            :title="$tc(\'sw-cms.elements.htmlCssJsTwigCode.config.tab.settings\')"\n                            name="settings"\n                            :active-tab="active"\n                        >\n                            {{ $tc(\'sw-cms.elements.htmlCssJsTwigCode.config.tab.settings\') }}\n                        </sw-tabs-item>\n                    {% endblock %}\n                </template>\n\n                <template\n                    #content="{ active }"\n                >\n                    \n                    {% block sw_cms_el_config_html_css_js_twig_code_content %}\n                        <sw-container\n                            v-if="active === \'content\'"\n                            class="sw-cms-el-config-html-css-js-twig-code__tab-content"\n                        >\n                            \n                            {% block sw_cms_el_config_html_css_js_twig_code_content_enable_twig_in_content_html %}\n                                <sw-switch-field\n                                    :label="$tc(\'sw-cms.elements.htmlCssJsTwigCode.config.label.enableTwigInContentHtml\')"\n                                    v-model:value="element.config.enableTwigInContentHtml.value"\n                                    class="sw-cms-el-config-html-css-js-twig-code-switch"\n                                />\n\n                                <sw-alert variant="info">\n                                    {{ $tc(\'sw-cms.elements.htmlCssJsTwigCode.config.label.warningEnableTwigInContentHtml\') }}\n                                </sw-alert>\n                            {% endblock %}\n\n                            \n                            {% block sw_cms_el_config_html_css_js_twig_code_content_content_html %}\n                                <sw-code-editor\n                                    :label="$tc(\'sw-cms.elements.htmlCssJsTwigCode.config.label.contentHtml\')"\n                                    :value="element.config.contentHtml.value"\n                                    :set-focus="true"\n                                    @update:value="onInput"\n                                    @blur="onBlur"\n                                    class="sw-cms-el-config-html-css-js-twig-code-content-html"\n                                />\n\n                                <sw-alert variant="warning">\n                                    {{ $tc(\'sw-cms.elements.html.config.warning\') }}\n                                </sw-alert>\n                            {% endblock %}\n\n                            \n                            {% block sw_cms_el_config_html_css_js_twig_code_content_content_css %}\n                                <sw-code-editor\n                                        :label="$tc(\'sw-cms.elements.htmlCssJsTwigCode.config.label.contentCss\')"\n                                        :value="element.config.contentCss.value"\n                                        :set-focus="true"\n                                        @update:value="onInputCss"\n                                        @blur="onBlurCss"\n                                        class="sw-cms-el-config-html-css-js-twig-code-content-css"\n                                />\n                            {% endblock %}\n\n                            \n                            {% block sw_cms_el_config_html_css_js_twig_code_content_content_js %}\n                                <sw-code-editor\n                                        :label="$tc(\'sw-cms.elements.htmlCssJsTwigCode.config.label.contentJavaScript\')"\n                                        :value="element.config.contentJavaScript.value"\n                                        :set-focus="true"\n                                        @update:value="onInputJs"\n                                        @blur="onBlurJs"\n                                        class="sw-cms-el-config-html-css-js-twig-code-content-js"\n                                />\n                            {% endblock %}\n                        </sw-container>\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_el_config_html_css_js_twig_code_settings %}\n                        <sw-container\n                            v-if="active === \'settings\'"\n                            class="sw-cms-el-config-html-css-js-twig-code__tab-settings"\n                        >\n                            \n                            {% block sw_cms_el_config_html_css_js_twig_code_settings_vertical_align %}\n                                <sw-select-field\n                                    :label="$tc(\'sw-cms.elements.htmlCssJsTwigCode.config.label.verticalAlign\')"\n                                    v-model:value="element.config.verticalAlign.value"\n                                    :placeholder="$tc(\'sw-cms.elements.htmlCssJsTwigCode.config.label.verticalAlign\')"\n                                >\n                                    <option value="flex-start">\n                                        {{ $tc(\'sw-cms.elements.htmlCssJsTwigCode.config.label.verticalAlignTop\') }}\n                                    </option>\n                                    <option value="center">\n                                        {{ $tc(\'sw-cms.elements.htmlCssJsTwigCode.config.label.verticalAlignCenter\') }}\n                                    </option>\n                                    <option value="flex-end">\n                                        {{ $tc(\'sw-cms.elements.htmlCssJsTwigCode.config.label.verticalAlignBottom\') }}\n                                    </option>\n                                </sw-select-field>\n                            {% endblock %}\n\n                            \n                            {% block sw_cms_el_config_html_css_js_twig_code_settings_horizontal_align %}\n                                <sw-select-field\n                                    :label="$tc(\'sw-cms.elements.htmlCssJsTwigCode.config.label.horizontalAlign\')"\n                                    v-model:value="element.config.horizontalAlign.value"\n                                    :placeholder="$tc(\'sw-cms.elements.htmlCssJsTwigCode.config.label.horizontalAlign\')"\n                                >\n                                    <option value="flex-start">\n                                        {{ $tc(\'sw-cms.elements.htmlCssJsTwigCode.config.label.horizontalAlignLeft\') }}\n                                    </option>\n                                    <option value="center">\n                                        {{ $tc(\'sw-cms.elements.htmlCssJsTwigCode.config.label.horizontalAlignCenter\') }}\n                                    </option>\n                                    <option value="flex-end">\n                                        {{ $tc(\'sw-cms.elements.htmlCssJsTwigCode.config.label.horizontalAlignRight\') }}\n                                    </option>\n                                </sw-select-field>\n                            {% endblock %}\n                        </sw-container>\n                    {% endblock %}\n                </template>\n            </sw-tabs>\n        {% endblock %}\n    </div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,emits:["element-update"],mixins:[s.getByName("cms-element")],created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("html-twig-code")},onBlur(e){this.emitChanges("contentHtml",e)},onBlurCss(e){this.emitChanges("contentCss",e)},onBlurJs(e){this.emitChanges("contentJavaScript",e)},onInput(e){this.emitChanges("contentHtml",e)},onInputCss(e){this.emitChanges("contentCss",e)},onInputJs(e){this.emitChanges("contentJavaScript",e)},emitChanges(e,n){"contentHtml"===e?n!==this.element.config.contentHtml.value&&(this.element.config.contentHtml.value=n,this.$emit("element-update",this.element)):"contentCss"===e?n!==this.element.config.contentCss.value&&(this.element.config.contentCss.value=n,this.$emit("element-update",this.element)):"contentJavaScript"===e&&n!==this.element.config.contentJavaScript.value&&(this.element.config.contentJavaScript.value=n,this.$emit("element-update",this.element))}}}},387:function(e,n,t){var s=t(56);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),t(346).Z("60989bb2",s,!0,{})},346:function(e,n,t){"use strict";function s(e,n){for(var t=[],s={},l=0;l<n.length;l++){var c=n[l],o=c[0],i={id:e+":"+l,css:c[1],media:c[2],sourceMap:c[3]};s[o]?s[o].parts.push(i):t.push(s[o]={id:o,parts:[i]})}return t}t.d(n,{Z:function(){return _}});var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c={},o=l&&(document.head||document.getElementsByTagName("head")[0]),i=null,a=0,m=!1,r=function(){},g=null,d="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function _(e,n,t,l){m=t,g=l||{};var o=s(e,n);return h(o),function(n){for(var t=[],l=0;l<o.length;l++){var i=c[o[l].id];i.refs--,t.push(i)}n?h(o=s(e,n)):o=[];for(var l=0;l<t.length;l++){var i=t[l];if(0===i.refs){for(var a=0;a<i.parts.length;a++)i.parts[a]();delete c[i.id]}}}}function h(e){for(var n=0;n<e.length;n++){var t=e[n],s=c[t.id];if(s){s.refs++;for(var l=0;l<s.parts.length;l++)s.parts[l](t.parts[l]);for(;l<t.parts.length;l++)s.parts.push(w(t.parts[l]));s.parts.length>t.parts.length&&(s.parts.length=t.parts.length)}else{for(var o=[],l=0;l<t.parts.length;l++)o.push(w(t.parts[l]));c[t.id]={id:t.id,refs:1,parts:o}}}}function u(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function w(e){var n,t,s=document.querySelector("style["+d+'~="'+e.id+'"]');if(s){if(m)return r;s.parentNode.removeChild(s)}if(f){var l=a++;n=v.bind(null,s=i||(i=u()),l,!1),t=v.bind(null,s,l,!0)}else n=b.bind(null,s=u()),t=function(){s.parentNode.removeChild(s)};return n(e),function(s){s?(s.css!==e.css||s.media!==e.media||s.sourceMap!==e.sourceMap)&&n(e=s):t()}}var p=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}();function v(e,n,t,s){var l=t?"":s.css;if(e.styleSheet)e.styleSheet.cssText=p(n,l);else{var c=document.createTextNode(l),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(c,o[n]):e.appendChild(c)}}function b(e,n){var t=n.css,s=n.media,l=n.sourceMap;if(s&&e.setAttribute("media",s),g.ssrId&&e.setAttribute(d,n.id),l&&(t+="\n/*# sourceURL="+l.sources[0]+" */\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}}]);