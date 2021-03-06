# Change history for ui-scan

## 1.0.0 IN PROGRESS

* Add support for loan periods in settings (completes UIS-13)
* Upgrade dependencies on Stripes libraries. These had got very out of date: all three of them by one or more major versions. Fixes UIS-26.
* Add okapiInterfaces and permissionSets in `package.json`. Fixes UIS-24.

## [0.5.0](https://github.com/folio-org/ui-scan/tree/v0.5.0) (2017-06-07)
[Full Changelog](https://github.com/folio-org/ui-scan/compare/v0.4.0...v0.5.0)

* Forms now submit when Enter is pressed in a text field (completes UIS-1).
* Better handling of user identifier prefs when not set in Settings.
* User identifier pref select list options now include keys to make React happy.

## [0.4.0](https://github.com/folio-org/ui-scan/tree/v0.4.0)
[Full Changelog](https://github.com/folio-org/ui-scan/compare/v0.3.0...v0.4.0)

* Add settings section, check-in subsection, and preference for user identifier type for user lookups (completes LIBAPP-205)
* In checkout form, uses preference-selected user identifier to do user lookups (completes LIBAPP-207)

## [0.3.0]
* Add validations to check-in and check-out forms

## [0.2.0](https://github.com/folio-org/ui-scan/tree/v0.2.0) (2017-04-12)
[Full Changelog](https://github.com/folio-org/ui-scan/compare/v0.1.0...v0.2.0)

* Upgrade dependencies; stripes-core v0.6.0, stripes-connect v0.3.0, and stripes-components v0.6.0.

## [0.1.0](https://github.com/folio-org/ui-scan/tree/v0.1.0) (2017-04-07)
[Full Changelog](https://github.com/folio-org/ui-scan/compare/v0.0.2...v0.1.0)

* Depend on v0.5.0 of stripes-components: needed so that `<IfPermission>` works correctly. See FOLIO-548.

## [0.0.2](https://github.com/folio-org/ui-scan/tree/v0.0.2) (2017-03-23)
[Full Changelog](https://github.com/folio-org/ui-scan/compare/v0.0.1...v0.0.2)

* Port to react-router v4.x
* Items for checkin are found by barcode rather than UUID.
* Checkins and checkouts now happen immediately rather than all together in a batch.
* Checkin and checkout processes create and modify loan objects as well as items.
* `<Scan>` component keeps state in local stripes-connect resources.
* Convert `<Checkin>` and `<Checkout>` components to functional style.
* Add ESLint configuration.
* Clean up code in accordance with ESLint.
* Add some documentation boilerplate: `LICENSE`, `CONTRIBUTING.md`.

## [0.0.1](https://github.com/folio-org/ui-scan/tree/v0.0.1) (2017-02-27)

* First version to have a documented change-log. Each subsequent version will
  describe its differences from the previous one.
