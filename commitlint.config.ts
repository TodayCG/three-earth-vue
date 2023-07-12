export default {
    ignores: [commit => commit.includes('init')], // 忽略带有init的信息
    extends: ['@commitlint/config-conventional'],
    rules: {
        'body-leading-blank': [1, 'always'],
        'footer-leading-blank': [1, 'always'],
        'header-max-length': [2, 'always', 72],
        'subject-empty': [2, 'never'],
        'type-empty': [2, 'never'],
        'subject-case': [0],
        'type-enum': [
            2,
            'always',
            [
                'feat', // 新功能
                'fix', // 修改bug
                'perf', // 性能优化
                'style', // 代码结构化修改
                'docs', // 文档和注释
                'test', // 测试相关
                'refactor', // 重构
                'ci', // 持续集成
                'chore', // 依赖更新/脚手架配置修改等
                'revert', // 撤销修改
                'wip', // 正在开发
                'workflow', // 工作流
                'types' // 类型定义文件更改
            ]
        ]
    },
    prompt: {
        alias: { fd: 'docs: fix typos' },
        messages: {
            type: '选择你要提交的类型 :',
            scope: '选择一个提交范围（可选）:',
            customScope: '请输入自定义的提交范围 :',
            subject: '填写简短精炼的变更描述 :\n',
            body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
            breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
            footerPrefixesSelect: '选择关联issue前缀（可选）:',
            customFooterPrefix: '输入自定义issue前缀 :',
            footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
            confirmCommit: '是否提交或修改commit ?'
        },
        types: [
            { value: 'feat', name: 'feat:     ✨  新增功能 | A new feature' },
            { value: 'fix', name: 'fix:      🐛  修复缺陷 | A bug fix' },
            { value: 'docs', name: 'docs:     📝  文档更新 | Documentation only changes' },
            { value: 'style', name: 'style:    💄  代码格式 | Changes that do not affect the meaning of the code' },
            { value: 'refactor', name: 'refactor: ♻️   代码重构 | A code change that neither fixes a bug nor adds a feature' },
            { value: 'perf', name: 'perf:     ⚡️  性能提升 | A code change that improves performance' },
            { value: 'test', name: 'test:     ✅  测试相关 | Adding missing tests or correcting existing tests' },
            { value: 'build', name: 'build:    📦️  构建相关 | Changes that affect the build system or external dependencies' },
            { value: 'ci', name: 'ci:       🎡  持续集成 | Changes to our CI configuration files and scripts' },
            { value: 'chore', name: 'chore:    🔨  其他修改 | Other changes that do not modify src or test files' },
            { value: 'revert', name: 'revert:   ⏪️  回退代码 | Revert to a commit' }
        ],
        useEmoji: true,
        emojiAlign: 'center',
        themeColorCode: '',
        scopes: ['packages', 'examples', 'utils', 'config', 'other'],
        // 允许自定义范围
        allowCustomScopes: false,
        // 允许空的范围
        allowEmptyScopes: false,
        emptyIssuePrefixAlias: '跳过',
        customIssuePrefixAlias: '自定义前缀'
    }
}