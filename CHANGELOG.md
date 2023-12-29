# [2.1.0](https://github.com/knownasnaffy/inner-ink/compare/v2.0.0...v2.1.0) (2023-12-29)


### Bug Fixes

* :lipstick: add gap between border and last line of scrollable editor ([5ff8b08](https://github.com/knownasnaffy/inner-ink/commit/5ff8b08c60fe352fbd6384847f0bb0bee18c6d51))
* :pencil2: typo in settings page ([b56be3d](https://github.com/knownasnaffy/inner-ink/commit/b56be3d49a8d11c6b790183b34f39c53c51a9312))


### Features

* :children_crossing: focus main window after preventing another window from opening ([c40bb72](https://github.com/knownasnaffy/inner-ink/commit/c40bb7235e04f1ab8b71a9a7286bee915e41a4be))
* :lipstick: update all icons with fluent icon set ([8b867ae](https://github.com/knownasnaffy/inner-ink/commit/8b867ae2416807c5648c75062950dc50ce88824a))
* :sparkles: add dynamic version from package.json in settings page ([b5e2396](https://github.com/knownasnaffy/inner-ink/commit/b5e2396a0ce1abedec0828f3f5d8d0d8cf9e1d30))
* :sparkles: add github releases page link in settings and comment out update download skeleton section ([5e1f333](https://github.com/knownasnaffy/inner-ink/commit/5e1f3335811447b40888b4bab87a1cb7ec82ae8c))
* :sparkles: add keyboard shortcuts page ([a75531d](https://github.com/knownasnaffy/inner-ink/commit/a75531dbff976450618abd1d3bc2e9f16fe40114))
* :sparkles: functioning `autostart app on boot` setting ([7d4f78f](https://github.com/knownasnaffy/inner-ink/commit/7d4f78f7ae4822de14da12d03ff05565a71661a1))

# [2.0.0](https://github.com/knownasnaffy/inner-ink/compare/v1.3.0...v2.0.0) (2023-12-26)


### Bug Fixes

* :ambulance: include initDB function in main script ([8f2a168](https://github.com/knownasnaffy/inner-ink/commit/8f2a1682185b85459100f5a94574a19f00e96ccf))
* :bug: application window can now be resized from titlebar edges ([9d336ee](https://github.com/knownasnaffy/inner-ink/commit/9d336ee87d0b881e71bd842ec7e7aaf626c065ce))


### Features

* :sparkles: add toolbar to format editor text with options - `bold`, `italic`, `underline`, `strikethrough` ([fc589e3](https://github.com/knownasnaffy/inner-ink/commit/fc589e3e7b9b905a3c0f9f218f924d39fdee693f))
* :sparkles: replace content textarea with rich text editor ([a3b2f98](https://github.com/knownasnaffy/inner-ink/commit/a3b2f98a8eaedbc2177d03ca4ac53dc538eb2b71)), closes [#36](https://github.com/knownasnaffy/inner-ink/issues/36)
* :sparkles: update edited days based on textContent of editor instead of EditorState ([1eafc89](https://github.com/knownasnaffy/inner-ink/commit/1eafc89ddac15de392775f88dd1650a468ff9e41))
* :sparkles: working reset entries button (be careful!) ([3ae59a6](https://github.com/knownasnaffy/inner-ink/commit/3ae59a6cf18bb9726781735ea1c8f7b9ba7e0570))


### Performance Improvements

* :zap: editedDates only change when the selectedDay is changed instead of title and content ([50e80d7](https://github.com/knownasnaffy/inner-ink/commit/50e80d709c5afd0daa6f04bc451824570e42d14c))


### BREAKING CHANGES

* entries table structure changed in database, delete old $appData/database.db file to upgrade.
* textarea content is not compatible with editorState saved in the content field.

# [1.3.0](https://github.com/knownasnaffy/inner-ink/compare/v1.2.0...v1.3.0) (2023-12-23)


### Bug Fixes

* :passport_control: remove unused permissions ([760fe81](https://github.com/knownasnaffy/inner-ink/commit/760fe813bae9f72278c3826181a63a4632684bc0))


### Features

* :sparkles: add word count in the bottom right of textarea ([76d206a](https://github.com/knownasnaffy/inner-ink/commit/76d206abc170a66d87b1bb935cfd6b59e2b4a0b9))
* :sparkles: sync datepicker settings with application state, settings will now be instantly updated on change ([a891a47](https://github.com/knownasnaffy/inner-ink/commit/a891a47ee19b844100fe7d867594b42422206e9e))

# [1.2.0](https://github.com/knownasnaffy/inner-ink/compare/v1.1.1...v1.2.0) (2023-12-22)


### Features

* :sparkles: styled edited dates in DateSelecter component ([#35](https://github.com/knownasnaffy/inner-ink/issues/35)) ([1dd8e6b](https://github.com/knownasnaffy/inner-ink/commit/1dd8e6b0478a6ad6ff7324b0875a195c49cdc06b))

## [1.1.1](https://github.com/knownasnaffy/inner-ink/compare/v1.1.0...v1.1.1) (2023-12-21)


### Bug Fixes

* **deps:** update tauri monorepo ([b1c044b](https://github.com/knownasnaffy/inner-ink/commit/b1c044b3ec2ab0461ca9b547b89c6cd3970bb0cc))

# [1.1.0](https://github.com/knownasnaffy/inner-ink/compare/v1.0.0...v1.1.0) (2023-12-20)


### Bug Fixes

* :fire: update file names to PascalCase ([d6553f3](https://github.com/knownasnaffy/inner-ink/commit/d6553f3b5558c242396942cbb4c050467499190c))
* :wheelchair: improve themeList accessibility ([d80e71d](https://github.com/knownasnaffy/inner-ink/commit/d80e71d3c47d97d525ce127c7b9c11e88d5e293f))


### Features

* :sparkles: add reset button in settings ([b3530e6](https://github.com/knownasnaffy/inner-ink/commit/b3530e6e2a9a31d5efe06a1d73a1cb85ea18c04b))

# 1.0.0 (2023-12-05)


### Features

* ✨ basic editing with a date picker
* ✨ search through entries
* ✨ multiple themes
* ✨ keyboard friendly interface
* ✨ keyboard shortcuts like `ctrl`+`tab` opens next entry and `ctrl`+`shift`+`tab` opens previous entry
