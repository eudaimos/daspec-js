Release plan
------------

Release 1
---------

# Enable JS teams and their stakeholders to write markdown executable specs

* doc web site examples for table matching / various options -< show we can do lists, two-dim tables,
* doc web site examples for list matching / various options

Later Releases
--------------

* file/line number reporting on failed assertions
* file/line number reporting on exceptions in parsing
* increment numerical lists in output
* ~~whitespace before step and attachment~~
* beforeEach/All, afterEach/All - technical steps
* beforeEach/All, afterEach/All - business steps (eg a file pattern)
* flexible matcher library support (js hamcrest?)
* support nested lists
* markdown formatter config
	- template for the header line
	- ~~template for skipped marker~~
	- template for attachment markers (tick, question...)

# Enable JS developers to easily install and integrate daspec

* tap output
* grunt integration
* gulp integration
* ~~clean syntax for ~~step definitions~~ and assertions~~
* simple syntax for async expectations

# Enable JS developers to easily get started

* flexible matcher library support (js hamcrest?)
  * try to discover positions from expected values
* generate proposal steps

# Enable JS developers to easily contribute to daspec development

Done
----

* ~~formatters as observers on runner~~
* ~~support for tables~~
* ~~web browser runner~~
* ~~nodejs runner~~
* ~~report successful assertion on tables/lists with ticks~~
* ~~Format whitespace on column headings in the initial report column~~
* ~~npm package/install~~
* ~~bower install~~
* ~~integrated into npm test~~
* ~~color reporting in the console~~
* ~~getting started guide on the web~~
* ~~nice example project to copy/paste from~~
* ~~publish design objectives/guidelines~~
* ~~clean build/test script using npm~~
* ~~clean/simple pipeline for execution so people can easily understand what's going on where~~
* ~~extract formatter module so people can make their own reporters easily~~
* ~~junit XML output~~
* ~~try to discover positions from expected values~~
* mark skipped steps
	- ~~mark skipped lines by default by prepending `skipped`~~
  - ~~allow skipped lines if global config has allowSkipped: true~~
  - ~~use configured skipped line indicator in markdown config~~
* ~~optimistically convert to numbers whatever possible~~
  - ~~make sure conversion in tables works as well~~
* ~~allow expect().toEqualSet to work on lists (as well as arrays)~~
* ~~allow expect().toEqualUnorderedTable to work on simple two-dim arrays (not objects with titles)~~
* ~~concept solution for async -- just to make sure there won't be huge api changes~~
* ~~concept solution for before/after tags~~
* ~~go through TODO items~~
