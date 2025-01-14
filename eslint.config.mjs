import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // 继承多个ESLint配置
  ...compat.extends(
    'next/core-web-vitals', // Next.js的核心Web性能规则
    'next/typescript', // Next.js的TypeScript规则
    'eslint-config-prettier', // 关闭所有与Prettier冲突的ESLint规则
    'plugin:prettier/recommended' // 启用prettier推荐的规则集
  ),
  {
    // 自定义规则配置
    rules: {
      '@typescript-eslint/no-explicit-any': ['off'], //允许使用any
      '@typescript-eslint/ban-ts-comment': 'off', //允许使用@ts-ignore
      '@typescript-eslint/no-non-null-assertion': 'off', //允许使用非空断言
      '@typescript-eslint/no-var-requires': 'off', //允许使用CommonJS的写法
      'no-console': [
        //提交时不允许有console.log
        'warn',
        {
          allow: ['warn', 'error'], // 允许使用console.warn和console.error
        },
      ],
      'no-debugger': 'warn', // 使用debugger时给出警告
    },
  },
];

export default eslintConfig;
