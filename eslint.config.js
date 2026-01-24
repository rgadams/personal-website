let jsdoc = require('eslint-plugin-jsdoc');
let eslint = require('eslint-plugin-import');
let angular_eslint = require('@angular-eslint/eslint-plugin');
let angular_eslint_template = require('@angular-eslint/eslint-plugin-template');
let prefer_arrow = require('eslint-plugin-prefer-arrow');
let typescript_eslint = require('@typescript-eslint/eslint-plugin');
let angular_parser = require('@angular-eslint/template-parser');
let typescript_parser = require('@typescript-eslint/parser');

module.exports = [
    // Angular Template ESLint Rules
    {
        ignores: ["**/index.html"],
        files: ["**/*.html"],
        plugins: {
            "@angular-eslint/template": angular_eslint_template,
        },
        languageOptions: {
            parser: angular_parser
        },
        rules: {
            "@angular-eslint/template/banana-in-box": "error",
            "@angular-eslint/template/eqeqeq": "error",
            "@angular-eslint/template/no-negated-async": "error",
        }
    },
    // Typescript ESLint Rules
    {
        ignores: [
            "**/dist/**",
            "**/docs/**",
            "**/src/polyfills.ts",
            "**/*.spec.ts"
        ],
        files: ["**/*.ts"],
        plugins: {
            "@typescript-eslint": typescript_eslint
        },
        languageOptions: {
            parser: typescript_parser,
            parserOptions: {
                project: true,
                tsconfigRootDir: __dirname,
            }
        },
        rules: {
            "@typescript-eslint/adjacent-overload-signatures": "error",
            "@typescript-eslint/array-type": "off",
            "@typescript-eslint/ban-types": [
                "error",
                {
                    "types": {
                        "Object": {
                            "message": "Avoid using the `Object` type. Did you mean `object`?"
                        },
                        "Function": {
                            "message": "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
                        },
                        "Boolean": {
                            "message": "Avoid using the `Boolean` type. Did you mean `boolean`?"
                        },
                        "Number": {
                            "message": "Avoid using the `Number` type. Did you mean `number`?"
                        },
                        "String": {
                            "message": "Avoid using the `String` type. Did you mean `string`?"
                        },
                        "Symbol": {
                            "message": "Avoid using the `Symbol` type. Did you mean `symbol`?"
                        }
                    }
                }
            ],
            "@typescript-eslint/consistent-type-assertions": "error",
            "@typescript-eslint/dot-notation": "error",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/explicit-member-accessibility": [
                "off",
                {
                    "accessibility": "explicit"
                }
            ],
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/indent": [
                "error",
                4,
                {
                    "FunctionDeclaration": {
                        "parameters": "first"
                    },
                    "FunctionExpression": {
                        "parameters": "first"
                    },
                    "SwitchCase": 1
                },
            ],
            "@typescript-eslint/member-delimiter-style": [
                "error",
                {
                    "multiline": {
                        "delimiter": "semi",
                        "requireLast": true
                    },
                    "singleline": {
                        "delimiter": "semi",
                        "requireLast": false
                    }
                }
            ],
            "@typescript-eslint/member-ordering": "error",
            "@typescript-eslint/naming-convention": [
                "off",
                {
                    "selector": "variable",
                    "format": [
                        "camelCase",
                        "UPPER_CASE",
                        "PascalCase"
                    ],
                    "leadingUnderscore": "forbid",
                    "trailingUnderscore": "forbid"
                }
            ],
            "@typescript-eslint/no-empty-function": "off",
            "@typescript-eslint/no-empty-interface": "error",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-inferrable-types": [
                "error",
                {
                    "ignoreParameters": true
                }
            ],
            "@typescript-eslint/no-misused-new": "error",
            "@typescript-eslint/no-namespace": "error",
            "@typescript-eslint/no-non-null-assertion": "error",
            "@typescript-eslint/no-parameter-properties": "off",
            "@typescript-eslint/no-shadow": [
                "error",
                {
                    "hoist": "all"
                }
            ],
            "@typescript-eslint/no-unused-expressions": "error",
            "@typescript-eslint/no-use-before-define": "off",
            "@typescript-eslint/no-var-requires": "off",
            "@typescript-eslint/prefer-for-of": "error",
            "@typescript-eslint/prefer-function-type": "error",
            "@typescript-eslint/prefer-namespace-keyword": "error",
            "@typescript-eslint/quotes": [
                "error",
                "single"
            ],
            "@typescript-eslint/semi": [
                "error",
                "always"
            ],
            "@typescript-eslint/triple-slash-reference": [
                "error",
                {
                    "path": "always",
                    "types": "prefer-import",
                    "lib": "always"
                }
            ],
            "@typescript-eslint/type-annotation-spacing": "error",
            "@typescript-eslint/typedef": "off",
            "@typescript-eslint/unified-signatures": "error",
        }
    },
    // JSDoc Rules
    {
        ignores: [
            "**/dist/**",
            "**/docs/**",
            "**/src/polyfills.ts",
            "**/*.conf.js",
            "**/assets/**",
            "**/*.spec.ts"
        ],
        files: ["**/*.ts", "**/*.js"],
        plugins: {
            jsdoc: jsdoc,
        },
        rules: {
            "jsdoc/check-alignment": "error",
            "jsdoc/check-indentation": "error",
            "jsdoc/no-types": "error",
        }
    },
    // Other rules
    {
        ignores: [
            "**/dist/**",
            "**/docs/**",
            "**/src/polyfills.ts",
            "**/assets/**",
            "**/*.config.js",
            "**/*.conf.js",
            "**/*.spec.ts"
        ],
        plugins: {
            eslint: eslint,
            "@angular-eslint": angular_eslint,
            "prefer-arrow": prefer_arrow,
        },
        rules: {
            "@angular-eslint/component-class-suffix": "error",
            "@angular-eslint/component-selector": [
                "error",
                {
                    "type": "element",
                    "prefix": "app",
                    "style": "kebab-case"
                }
            ],
            "@angular-eslint/contextual-lifecycle": "error",
            "@angular-eslint/directive-class-suffix": "error",
            "@angular-eslint/directive-selector": [
                "error",
                {
                    "type": "attribute",
                    "prefix": "app",
                    "style": "camelCase"
                }
            ],
            "@angular-eslint/no-conflicting-lifecycle": "error",
            "@angular-eslint/no-host-metadata-property": "error",
            "@angular-eslint/no-input-rename": "error",
            "@angular-eslint/no-inputs-metadata-property": "error",
            "@angular-eslint/no-output-native": "error",
            "@angular-eslint/no-output-on-prefix": "error",
            "@angular-eslint/no-output-rename": "error",
            "@angular-eslint/no-outputs-metadata-property": "error",
            "@angular-eslint/use-lifecycle-interface": "error",
            "@angular-eslint/use-pipe-transform-interface": "error",
            "@angular-eslint/template/prefer-control-flow": "error",
            "arrow-body-style": "error",
            "arrow-parens": [
                "off",
                "always"
            ],
            "comma-dangle": "off",
            "complexity": "off",
            "constructor-super": "error",
            "curly": "error",
            "dot-notation": "off",
            "eol-last": "error",
            "eqeqeq": [
                "error",
                "smart"
            ],
            "guard-for-in": "error",
            "id-denylist": [
                "error",
                "any",
                "Number",
                "number",
                "String",
                "string",
                "Boolean",
                "boolean",
                "Undefined",
                "undefined"
            ],
            "id-match": "error",
            "indent": "off",
            "max-classes-per-file": "off",
            "max-len": [
                "error",
                {
                    "code": 140
                }
            ],
            "new-parens": "error",
            "no-bitwise": "off",
            "no-caller": "error",
            "no-cond-assign": "error",
            "no-console": [
                "error",
                {
                    "allow": [
                        "log",
                        "warn",
                        "dir",
                        "timeLog",
                        "assert",
                        "clear",
                        "count",
                        "countReset",
                        "group",
                        "groupEnd",
                        "table",
                        "dirxml",
                        "error",
                        "groupCollapsed",
                        "Console",
                        "profile",
                        "profileEnd",
                        "timeStamp",
                        "context",
                        "createTask"
                    ]
                }
            ],
            "no-debugger": "error",
            "no-empty": "off",
            "no-empty-function": "off",
            "no-eval": "error",
            "no-fallthrough": "error",
            "no-invalid-this": "off",
            "no-multiple-empty-lines": "off",
            "no-new-wrappers": "error",
            "no-restricted-imports": [
                "error",
                "rxjs/Rx"
            ],
            "no-shadow": "off",
            "no-throw-literal": "error",
            "no-trailing-spaces": "error",
            "no-undef-init": "error",
            "no-underscore-dangle": "error",
            "no-unsafe-finally": "error",
            "no-unused-expressions": "off",
            "no-unused-labels": "error",
            "no-use-before-define": "off",
            "no-var": "error",
            "object-shorthand": "error",
            "one-var": [
                "error",
                "never"
            ],
            "prefer-arrow/prefer-arrow-functions": [
                "error",
                {
                    "allowStandaloneDeclarations": true
                }
            ],
            "prefer-const": "error",
            "quote-props": [
                "error",
                "as-needed"
            ],
            "quotes": "off",
            "radix": "error",
            "semi": "off",
            "space-before-function-paren": [
                "error",
                {
                    "anonymous": "never",
                    "asyncArrow": "always",
                    "named": "never"
                }
            ],
            "spaced-comment": [
                "error",
                "always",
                {
                    "markers": [
                        "/"
                    ]
                }
            ],
            "use-isnan": "error",
            "valid-typeof": "off"
        }
    }
]
