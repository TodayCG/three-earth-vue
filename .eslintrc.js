module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        'vue/setup-compiler-macros': true
    },
    extends: ['plugin:vue/essential', 'standard'],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        'no-console': 0,
        'no-debugger': 0,
        // 禁止尾部使用分号“ ; ”
        semi: [2, 'never'],
        'no-undef': 'off',
        // 禁止使用 var
        'no-var': 'error',
        'eol-last': 0,
        'space-before-function-paren': 0,
        // 缩进2格
        indent: ['error', 4, { SwitchCase: 2 }],
        // 不能空格与tab混用
        'no-mixed-spaces-and-tabs': 'error',
        // 使用单引号
        quotes: [2, 'single'],
        // close js rules
        'no-shadow': 'off',
        // ts
        '@typescript-eslint/no-var-requires': 'warn',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-loss-of-precision': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/ban-types': 'error',
        /**
         * 无重复枚举值
         * https://typescript-eslint.io/rules/no-duplicate-enum-values
         */
        '@typescript-eslint/no-duplicate-enum-values': 'error',
        /**
         * 不允许声明空接口。
         * https://typescript-eslint.io/rules/no-empty-interface
         */
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/ban-ts-comment': 'error',
        // '@typescript-eslint/explicit-function-return-type': ['error', {
        //     allowExpressions: true,
        //     allowTypedFunctionExpressions: true,
        //     allowHigherOrderFunctions: true
        // }],
        // no any
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        // ! operator
        '@typescript-eslint/no-non-null-assertion': 'off',
        'vue/no-unused-vars': 0,
        'vue/require-explicit-emits': 0,
        'vue/no-multiple-template-root': 0,
        'vue/compiler-sfc': 'off',
        'vue/no-v-model-argument': 'off',
        'vue/multi-word-component-names': 0,
        // 限制每行属性/特性的最大数量，以提高可读性。
        'vue/max-attributes-per-line': ['error', {
            singleline: {
                max: 3
            },
            multiline: {
                max: 1
            }
        }],
        // 这一规则的目的是执行一个一致的位置，第一个属性
        'vue/first-attribute-linebreak': ['error', {
            singleline: 'ignore',
            multiline: 'below'
        }],
        /**
         * This rule aims to warn the right angle brackets which are at the location other than the configured location.
         * 这条规则的目的是警告那些在配置位置以外的直角括号。
         * https://eslint.vuejs.org/rules/html-closing-bracket-newline.html
         */
        'vue/html-closing-bracket-newline': ['error', {
            singleline: 'never',
            multiline: 'always'
        }],
        /**
         * This rule aims at removing multiple spaces in tags, which are not used for indentation.
         * 这条规则的目的是删除标签中的多个空格，这些空格不用于缩进
         * https://eslint.vuejs.org/rules/no-multi-spaces.html
         */
        'vue/no-multi-spaces': ['error', {
            ignoreProperties: false
        }],
        /**
         * This rule enforces a consistent indentation style in <template>. The default style is 2 spaces.
         * 这条规则在<template>中执行一致的缩进风格。默认的风格是2个空格。
         * https://eslint.vuejs.org/rules/html-indent.html
         */
        'vue/html-indent': ['error', 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: []
        }],
        'vue/multiline-html-element-content-newline': ['error', {
            ignoreWhenEmpty: true,
            ignores: ['pre', 'textarea'],
            allowEmptyLines: false
        }],
        // 这一规则的目的是强制执行排序的成分的特性
        'vue/attributes-order': ['error', {
            order: [
                'GLOBAL', // e.g. 'id'
                'TWO_WAY_BINDING', // e.g. 'v-model'
                'LIST_RENDERING', // e.g. 'v-for item in items'
                'UNIQUE', // e.g. 'ref', 'key'
                'DEFINITION', // e.g. 'is', 'v-is'
                'CONDITIONALS', // e.g. 'v-if', 'v-else-if', 'v-else', 'v-show', 'v-cloak'
                'RENDER_MODIFIERS', // e.g. 'v-once', 'v-pre'
                'SLOT', // e.g. 'v-slot', 'slot'.
                'OTHER_DIRECTIVES', // e.g. 'v-custom-directive'
                'CONTENT', // e.g. 'v-text', 'v-html'
                'OTHER_ATTR',
                'EVENTS'

            ],
            alphabetical: false
        }],
        // 这条规则发出警告的顺序顶级别标记，如<脚本>,<模板>&<式>.
        'vue/component-tags-order': ['error', {
            order: [['script', 'template'], 'style']
        }],
        'vue/no-lone-template': ['error', {
            ignoreAccessible: false
        }],
        // 这条规则不允许使用的语言比其他那些可在所申请的lang属性的框要素。
        'vue/block-lang': ['error',
            {
                script: {
                    lang: 'ts'
                }
            }
        ],
        // 这个规则的目的是使你用来定义Vue组件的API风格在你的项目中保持一致。
        'vue/component-api-style': ['error',
            ['script-setup'] // "script-setup", "composition", "composition-vue2", or "options"
        ],
        // 这条规则的目的是警告Vue.js模板中配置的套管以外的标签名称
        'vue/component-name-in-template-casing': ['error', 'kebab-case', {
            registeredComponentsOnly: true,
            ignores: []
        }],
        /**
         * This rule will enforce consistency of spacing after the <!-- and before the --> of comment. It also provides several exceptions for various documentation styles.
         * https://eslint.vuejs.org/rules/html-comment-content-spacing.html
         */
        'vue/html-comment-content-spacing': ['error', 'always', { exceptions: ['*'] }],
        /**
         * This rule enforces using hyphenated v-on event names on custom components in Vue templates.
         * https://eslint.vuejs.org/rules/v-on-event-hyphenation.html
         */
        'vue/v-on-event-hyphenation': ['error', 'always', {
            autofix: true,
            ignore: []
        }],
        /**
         * This rule enforces using hyphenated attribute names on custom components in Vue templates.
         * 这条规则强制要求在Vue模板中的自定义组件上使用连字符的属性名称。
         * https://eslint.vuejs.org/rules/attribute-hyphenation.html
         */
        'vue/attribute-hyphenation': 2,
        // import排序规则
        'import/order': [
            'error',
            {
                /**
                     * 内置分组顺序
                     * 内置模块、外部模块、内部引用、兄弟以来、父节点依赖、index文件依赖、未知
                     */
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'sibling',
                    'parent',
                    'index',
                    'unknown'
                ],
                /**
                 * 自定义分组顺序
                 * vue -> 内置模块之后
                 * element-plus -> 内置模块之后
                 * @/** -> 外部模块之后
                 */
                pathGroups: [
                    {
                        pattern: 'vue',
                        group: 'builtin',
                        position: 'after'
                    },
                    {
                        pattern: 'element-plus',
                        group: 'builtin',
                        position: 'after'
                    },
                    {
                        pattern: '@/**',
                        group: 'external',
                        position: 'after'
                    }
                ],
                'newlines-between': 'always'
            }
        ]
    }
}
