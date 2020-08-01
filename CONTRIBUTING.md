# Contributing to TenSEAL

:tada: Thank you for taking the time to contribute! :tada:

The following is a set of guidelines for contributing to [TenSEAL](https://github.com/OpenMined/TenSEAL) on GitHub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Table Of Contents

[I have a question](#i-have-a-question)

[What should I know before I get started?](#what-should-i-know-before-i-get-started)
  * [TenSEAL Library](#tenseal-library)
  * [Roadmap](#roadmap)

[How Can I Contribute?](#how-can-i-contribute)
  * [Reporting Bugs](#reporting-bugs)
  * [Suggesting Enhancements](#suggesting-enhancements)
  * [Your First Code Contribution](#your-first-code-contribution)
  * [Pull Requests](#pull-requests)

[Styleguides](#styleguides)
  * [Git Commit Messages](#git-commit-messages)
  * [JavaScript Styleguide](#javascript-styleguide)
  * [CoffeeScript Styleguide](#coffeescript-styleguide)
  * [Specs Styleguide](#specs-styleguide)
  * [Documentation Styleguide](#documentation-styleguide)

[Additional Notes](#additional-notes)
  * [Issue and Pull Request Labels](#issue-and-pull-request-labels)


## I have a question!

If you have a question regarding release dates, how to use the library, and things like that, we suggest using the [OpenMined Slack](https://slack.openmined.org), you should get faster results in the slack channels than in a Github issue.

Make sure to ask your questions in the **#lib_tenseal** channel.

## What should I know before I get started?

### TenSEAL Library

TenSEAL is a C++ library, all the core functionalities should be implemented in C++. Bindings to other languages such as Python should only have language specific functionalities. This make sure that the same features are available through all languages.

### Roadmap

The roadmap of the project which can be found [here](https://github.com/OpenMined/Roadmap/blob/master/crypto_team/projects/TenSEAL.md) is mainly drawn by the homomorphic encryption group in the [crypto team](https://github.com/OpenMined/Roadmap/tree/master/crypto_team) at OpenMined.


## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for TenSEAL. Following these guidelines helps maintainers and the community understand your report :pencil:, reproduce the behavior :computer: :computer:, and find related reports :mag_right:.

Before creating bug reports, please do a quick search on [the existing issues](https://github.com/OpenMined/TenSEAL/issues/) to make sure no one has already reported it, as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). Fill out the required template, the information it asks for helps us resolve issues faster.

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). You can create a bug report [here](https://github.com/OpenMined/TenSEAL/issues/new?assignees=&labels=Type%3A+Bug+%3Abug%3A&template=bug.md&title=) and provide the missing information in the provided template.

Explain the problem and include additional details to help maintainers reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible. For example, start by explaining the root cause of the problem, e.g. which line of code is throwing an error, or what command you ran so that the build crashed. If the bug is triggered by a code snippet, please put the whole source code, and not only the part that throws the error.
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**

Provide more context by answering these questions:

* **Can you reproduce the problem in [safe mode](https://flight-manual.atom.io/hacking-atom/sections/debugging/#diagnose-runtime-performance-problems-with-the-dev-tools-cpu-profiler)?**
* **Did the problem start happening recently** (e.g. after updating to a new version of TenSEAL) or was this always a problem?
* If the problem started happening recently, **can you reproduce the problem in an older version of TenSEAL?** What's the most recent version in which the problem doesn't happen? You can download older versions of TenSEAL from [the releases page](https://github.com/OpenMined/TenSEAL/releases).
* **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which conditions it normally happens.

Include details about your configuration and environment:

* **Which version of TenSEAL are you using?**
* **What's the name and version of the OS you're using**?

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for TenSEAL, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion :pencil: and find related suggestions :mag_right:.

Before creating enhancement suggestions, please do a quick search on [the existing issues](https://github.com/OpenMined/TenSEAL/issues/) to make sure no one has already suggested it, as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion) by filling out the required template, and including the steps that you imagine you would take if the feature you're requesting existed.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). We have many types of enhancement suggestions, ranging from documentation to new features, please open the most appropriate one for your need [here](https://github.com/OpenMined/TenSEAL/issues/new/choose)

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Explain why this enhancement would be useful** to most TenSEAL users.
* **Specify which version of TenSEAL you're using.** You can get the exact version by running.
* **Specify the name and version of the OS you're using.**

### Your First Code Contribution

Unsure where to begin contributing to TenSEAL? You can start by looking through `Good first issue` issues:

* [Good first issue](https://github.com/OpenMined/TenSEAL/issues?q=is%3Aissue+is%3Aopen+label%3A%22Good+first+issue+%3Amortar_board%3A%22) - issues which doesn't require a prior knowledge of the TenSEAL codebase.

We also suggest starting with the [tutorials](https://github.com/OpenMined/TenSEAL/tree/master/tutorials) to get familiar with the user API and learn about the functionalities of the library.

#### Local development

TenSEAL can be developed locally. Check [this section](#setup-local-development-environement) for instructions on how to setup your local development environement.


### Pull Requests

The process described here has several goals:

- Maintain Atom's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible Atom
- Enable a sustainable system for Atom's maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in [the template](PULL_REQUEST_TEMPLATE.md)
2. Follow the [styleguides](#styleguides)
3. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing <details><summary>What if the status checks are failing?</summary>If a status check is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will re-run the status check for you. If we conclude that the failure was a false positive, then we will open an issue to track that problem with our status check suite.</details>

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* When only changing documentation, include `[ci skip]` in the commit title
* Consider starting the commit message with an applicable emoji:
    * :art: `:art:` when improving the format/structure of the code
    * :racehorse: `:racehorse:` when improving performance
    * :non-potable_water: `:non-potable_water:` when plugging memory leaks
    * :memo: `:memo:` when writing docs
    * :penguin: `:penguin:` when fixing something on Linux
    * :apple: `:apple:` when fixing something on macOS
    * :checkered_flag: `:checkered_flag:` when fixing something on Windows
    * :bug: `:bug:` when fixing a bug
    * :fire: `:fire:` when removing code or files
    * :green_heart: `:green_heart:` when fixing the CI build
    * :white_check_mark: `:white_check_mark:` when adding tests
    * :lock: `:lock:` when dealing with security
    * :arrow_up: `:arrow_up:` when upgrading dependencies
    * :arrow_down: `:arrow_down:` when downgrading dependencies
    * :shirt: `:shirt:` when removing linter warnings

### JavaScript Styleguide

All JavaScript must adhere to [JavaScript Standard Style](https://standardjs.com/).

* Prefer the object spread operator (`{...anotherObj}`) to `Object.assign()`
* Inline `export`s with expressions whenever possible
  ```js
  // Use this:
  export default class ClassName {

  }

  // Instead of:
  class ClassName {

  }
  export default ClassName
  ```
* Place requires in the following order:
    * Built in Node Modules (such as `path`)
    * Built in Atom and Electron Modules (such as `atom`, `remote`)
    * Local Modules (using relative paths)
* Place class properties in the following order:
    * Class methods and properties (methods starting with `static`)
    * Instance methods and properties
* [Avoid platform-dependent code](https://flight-manual.atom.io/hacking-atom/sections/cross-platform-compatibility/)

### CoffeeScript Styleguide

* Set parameter defaults without spaces around the equal sign
    * `clear = (count=1) ->` instead of `clear = (count = 1) ->`
* Use spaces around operators
    * `count + 1` instead of `count+1`
* Use spaces after commas (unless separated by newlines)
* Use parentheses if it improves code clarity.
* Prefer alphabetic keywords to symbolic keywords:
    * `a is b` instead of `a == b`
* Avoid spaces inside the curly-braces of hash literals:
    * `{a: 1, b: 2}` instead of `{ a: 1, b: 2 }`
* Include a single line of whitespace between methods.
* Capitalize initialisms and acronyms in names, except for the first word, which
  should be lower-case:
  * `getURI` instead of `getUri`
  * `uriToOpen` instead of `URIToOpen`
* Use `slice()` to copy an array
* Add an explicit `return` when your function ends with a `for`/`while` loop and
  you don't want it to return a collected array.
* Use `this` instead of a standalone `@`
  * `return this` instead of `return @`
* Place requires in the following order:
    * Built in Node Modules (such as `path`)
    * Built in Atom and Electron Modules (such as `atom`, `remote`)
    * Local Modules (using relative paths)
* Place class properties in the following order:
    * Class methods and properties (methods starting with a `@`)
    * Instance methods and properties
* [Avoid platform-dependent code](https://flight-manual.atom.io/hacking-atom/sections/cross-platform-compatibility/)

### Specs Styleguide

- Include thoughtfully-worded, well-structured [Jasmine](https://jasmine.github.io/) specs in the `./spec` folder.
- Treat `describe` as a noun or situation.
- Treat `it` as a statement about state or how an operation changes state.

#### Example

```coffee
describe 'a dog', ->
 it 'barks', ->
 # spec here
 describe 'when the dog is happy', ->
  it 'wags its tail', ->
  # spec here
```

### Documentation Styleguide

* Use [AtomDoc](https://github.com/atom/atomdoc).
* Use [Markdown](https://daringfireball.net/projects/markdown).
* Reference methods and classes in markdown with the custom `{}` notation:
    * Reference classes with `{ClassName}`
    * Reference instance methods with `{ClassName::methodName}`
    * Reference class methods with `{ClassName.methodName}`

#### Example

```coffee
# Public: Disable the package with the given name.
#
# * `name`    The {String} name of the package to disable.
# * `options` (optional) The {Object} with disable options (default: {}):
#   * `trackTime`     A {Boolean}, `true` to track the amount of time taken.
#   * `ignoreErrors`  A {Boolean}, `true` to catch and ignore errors thrown.
# * `callback` The {Function} to call after the package has been disabled.
#
# Returns `undefined`.
disablePackage: (name, options, callback) ->
```

## Setup Local Development Environement

TODO

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests. Most labels are used across all OpenMined repositories, but some are specific to `OpenMined/TenSEAL`.

[GitHub search](https://help.github.com/articles/searching-issues/) makes it easy to use labels for finding groups of issues or pull requests you're interested in. For example, you might be interested in [open issues across `OpenMined/TenSEAL` which are labeled as bugs](https://github.com/OpenMined/TenSEAL/issues?q=is%3Aissue+label%3A%22Type%3A+Bug+%3Abug%3A%22+) or perhaps [open pull requests in `OpenMined/TenSEAL` which haven't been reviewed yet](https://github.com/OpenMined/TenSEAL/pulls?q=is%3Apr+is%3Aopen+comments%3A0). To help you find issues and pull requests, each label is listed with search links for finding open items with that label in `OpenMined/TenSEAL`. We  encourage you to read about [other search filters](https://help.github.com/articles/searching-issues/) which will help you write more focused queries.

The labels are loosely grouped by their purpose, but it's not required that every issue have a label from every group or that an issue can't have more than one label from the same group.

#### Type of Issue and Issue State

| Label name | Description |
| --- | --- |
| `API` | Related to the API |
| `Build` | Related to the build of the package |
| `duplicate` | This issue or pull request already exists |
| `Good first issue` | Perfect for beginners, welcome to OpenMined!  |
| `help wanted` | 
Extra attention is needed  |
| `invalid` | 
This doesn't seem right  |
| `Priority: 1 - Immediate` | 
Must be fixed immediately and cannot wait  |
| `` |  |
| `` |  |
| `` |  |
| `` |  |
| `` |  |
| `` |  |
| `` |  |
| `` |  |
| `` |  |
| `` |  |
| `` |  |
| `` |  |
| `` |  |
| `` |  |
| `` |  |
| `` |  |


#### Pull Request Labels

| Label name | Description
| --- | --- | --- | --- |
| `work-in-progress` | Pull requests which are still being worked on, more changes will follow. |

[search-atom-repo-label-enhancement]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Aenhancement
[search-atom-org-label-enhancement]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Aenhancement
[search-atom-repo-label-bug]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Abug
[search-atom-org-label-bug]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Abug
[search-atom-repo-label-question]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Aquestion
[search-atom-org-label-question]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Aquestion
[search-atom-repo-label-feedback]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Afeedback
[search-atom-org-label-feedback]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Afeedback
[search-atom-repo-label-help-wanted]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Ahelp-wanted
[search-atom-org-label-help-wanted]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Ahelp-wanted
[search-atom-repo-label-beginner]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Abeginner
[search-atom-org-label-beginner]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Abeginner
[search-atom-repo-label-more-information-needed]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Amore-information-needed
[search-atom-org-label-more-information-needed]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Amore-information-needed
[search-atom-repo-label-needs-reproduction]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Aneeds-reproduction
[search-atom-org-label-needs-reproduction]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Aneeds-reproduction
[search-atom-repo-label-triage-help-needed]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Atriage-help-needed
[search-atom-org-label-triage-help-needed]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Atriage-help-needed
[search-atom-repo-label-windows]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Awindows
[search-atom-org-label-windows]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Awindows
[search-atom-repo-label-linux]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Alinux
[search-atom-org-label-linux]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Alinux
[search-atom-repo-label-mac]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Amac
[search-atom-org-label-mac]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Amac
[search-atom-repo-label-documentation]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Adocumentation
[search-atom-org-label-documentation]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Adocumentation
[search-atom-repo-label-performance]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Aperformance
[search-atom-org-label-performance]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Aperformance
[search-atom-repo-label-security]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Asecurity
[search-atom-org-label-security]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Asecurity
[search-atom-repo-label-ui]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Aui
[search-atom-org-label-ui]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Aui
[search-atom-repo-label-api]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Aapi
[search-atom-org-label-api]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Aapi
[search-atom-repo-label-crash]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Acrash
[search-atom-org-label-crash]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Acrash
[search-atom-repo-label-auto-indent]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Aauto-indent
[search-atom-org-label-auto-indent]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Aauto-indent
[search-atom-repo-label-encoding]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Aencoding
[search-atom-org-label-encoding]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Aencoding
[search-atom-repo-label-network]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Anetwork
[search-atom-org-label-network]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Anetwork
[search-atom-repo-label-uncaught-exception]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Auncaught-exception
[search-atom-org-label-uncaught-exception]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Auncaught-exception
[search-atom-repo-label-git]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Agit
[search-atom-org-label-git]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Agit
[search-atom-repo-label-blocked]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Ablocked
[search-atom-org-label-blocked]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Ablocked
[search-atom-repo-label-duplicate]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Aduplicate
[search-atom-org-label-duplicate]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Aduplicate
[search-atom-repo-label-wontfix]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Awontfix
[search-atom-org-label-wontfix]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Awontfix
[search-atom-repo-label-invalid]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Ainvalid
[search-atom-org-label-invalid]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Ainvalid
[search-atom-repo-label-package-idea]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Apackage-idea
[search-atom-org-label-package-idea]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Apackage-idea
[search-atom-repo-label-wrong-repo]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Awrong-repo
[search-atom-org-label-wrong-repo]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Awrong-repo
[search-atom-repo-label-editor-rendering]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Aeditor-rendering
[search-atom-org-label-editor-rendering]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Aeditor-rendering
[search-atom-repo-label-build-error]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Abuild-error
[search-atom-org-label-build-error]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Abuild-error
[search-atom-repo-label-error-from-pathwatcher]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Aerror-from-pathwatcher
[search-atom-org-label-error-from-pathwatcher]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Aerror-from-pathwatcher
[search-atom-repo-label-error-from-save]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Aerror-from-save
[search-atom-org-label-error-from-save]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Aerror-from-save
[search-atom-repo-label-error-from-open]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Aerror-from-open
[search-atom-org-label-error-from-open]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Aerror-from-open
[search-atom-repo-label-installer]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Ainstaller
[search-atom-org-label-installer]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Ainstaller
[search-atom-repo-label-auto-updater]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Aauto-updater
[search-atom-org-label-auto-updater]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Aauto-updater
[search-atom-repo-label-deprecation-help]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aatom%2Fatom+label%3Adeprecation-help
[search-atom-org-label-deprecation-help]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Adeprecation-help
[search-atom-repo-label-electron]: https://github.com/search?q=is%3Aissue+repo%3Aatom%2Fatom+is%3Aopen+label%3Aelectron
[search-atom-org-label-electron]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Aelectron
[search-atom-repo-label-work-in-progress]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3Aatom%2Fatom+label%3Awork-in-progress
[search-atom-org-label-work-in-progress]: https://github.com/search?q=is%3Aopen+is%3Apr+user%3Aatom+label%3Awork-in-progress
[search-atom-repo-label-needs-review]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3Aatom%2Fatom+label%3Aneeds-review
[search-atom-org-label-needs-review]: https://github.com/search?q=is%3Aopen+is%3Apr+user%3Aatom+label%3Aneeds-review
[search-atom-repo-label-under-review]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3Aatom%2Fatom+label%3Aunder-review
[search-atom-org-label-under-review]: https://github.com/search?q=is%3Aopen+is%3Apr+user%3Aatom+label%3Aunder-review
[search-atom-repo-label-requires-changes]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3Aatom%2Fatom+label%3Arequires-changes
[search-atom-org-label-requires-changes]: https://github.com/search?q=is%3Aopen+is%3Apr+user%3Aatom+label%3Arequires-changes
[search-atom-repo-label-needs-testing]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3Aatom%2Fatom+label%3Aneeds-testing
[search-atom-org-label-needs-testing]: https://github.com/search?q=is%3Aopen+is%3Apr+user%3Aatom+label%3Aneeds-testing

[beginner]:https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3Abeginner+label%3Ahelp-wanted+user%3Aatom+sort%3Acomments-desc
[help-wanted]:https://github.com/search?q=is%3Aopen+is%3Aissue+label%3Ahelp-wanted+user%3Aatom+sort%3Acomments-desc+-label%3Abeginner
[contributing-to-official-atom-packages]:https://flight-manual.atom.io/hacking-atom/sections/contributing-to-official-atom-packages/
[hacking-on-atom-core]: https://flight-manual.atom.io/hacking-atom/sections/hacking-on-atom-core/
