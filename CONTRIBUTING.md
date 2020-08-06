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

[Your Local Development Environment](#your-local-development-environment)
  * [Fetching Third Party Libraries](#fetching-third-party-libraries)
  * [Building TenSEAL](#building-tenseal)
  * [Testing Your Changes](#testing-your-changes)

[Styleguides](#styleguides)
  * [C++ Styleguide](#c++-styleguide)
  * [Python Styleguide](#python-styleguide)
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

* **Did the problem start happening recently** (e.g. after updating to a new version of TenSEAL) or was this always a problem?
* If the problem started happening recently, **can you reproduce the problem in an older version of TenSEAL?** What's the most recent version in which the problem doesn't happen? You can download older versions of TenSEAL from [the releases page](https://github.com/OpenMined/TenSEAL/releases).
* **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which conditions it normally happens.

Include details about your configuration and environment:

* **Which version of TenSEAL are you using?**
* **What's the name and version of the OS you're using**?

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for TenSEAL, including completely new features and minor improvements to existing functionalities. Following these guidelines helps maintainers and the community understand your suggestion :pencil: and find related suggestions :mag_right:.

Before creating enhancement suggestions, please do a quick search on [the existing issues](https://github.com/OpenMined/TenSEAL/issues/) to make sure no one has already suggested it, as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion) by filling out the required template, and including the steps that you imagine you would take if the feature you're requesting existed.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). We have many types of enhancement suggestions, ranging from documentation to new features, please open the most appropriate one for your need [here](https://github.com/OpenMined/TenSEAL/issues/new/choose)

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Explain why this enhancement would be useful** to most TenSEAL users.
* **Specify which version of TenSEAL you're using.**
* **Specify the name and version of the OS you're using.**

### Your First Code Contribution

Unsure where to begin contributing to TenSEAL? You can start by looking through `Good first issue` issues:

* [Good first issue](https://github.com/OpenMined/TenSEAL/issues?q=is%3Aissue+is%3Aopen+label%3A%22Good+first+issue+%3Amortar_board%3A%22) - issues which doesn't require a prior knowledge of the TenSEAL codebase.

We also suggest starting with the [tutorials](https://github.com/OpenMined/TenSEAL/tree/master/tutorials) to get familiar with the user API and learn about the functionalities of the library.

#### Local development

TenSEAL can be developed locally. Check [this section](#your-local-development-environment) for instructions on how to setup your local development environment.


### Pull Requests

The process described here has several goals:

- Maintain TenSEAL's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible TenSEAL
- Enable a sustainable system for TenSEAL's maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in the pull request template
2. Follow the [styleguides](#styleguides)
3. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing <details><summary>What if the status checks are failing?</summary>If a status check is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will re-run the status check for you. If we conclude that the failure was a false positive, then we will open an issue to track that problem with our status check suite.</details>

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.


## Your Local Development Environment

Before being able to make any code contribution, you need to be able to setup your local environment to make changes, build the new library, as well as running the tests to make sure previous functionalities are still working, and to tests new ones.

> **Note:** You can always use our [Docker images](https://hub.docker.com/r/openmined/tenseal) for a ready to use environment. We provide images for different Python versions on every release or code change in the master branch, so it's also easy to try older non-released versions.


### Fetching Third Party Libraries

After cloning TenSEAL into your machine, or cloning one of your forks, you must make sure to fetch thrid party libraries that TenSEAL depends on, you can do that by running:

```bash
$ git submodule init
$ git submodule update
```


### Building TenSEAL

You can build and install the library (with Python bindings) locally by running:

```bash
$ pip install -r requirements_dev.txt
$ pip install .
```

This will trigger the build of the C++ library as well as the Python bindings. Please refer to [this section](https://github.com/OpenMined/TenSEAL#build-from-source) for more information about the dependencies required to build TenSEAL.

> **Note:** You can skip the building step if you are testing the library using Bazel, as it make sure the library is built before running the tests.


### Testing Your Changes

#### C++

If you use Bazel, you can do that pretty easily by running:

```bash
$ bazel test --test_output=all --spawn_strategy=standalone //tests/cpp/...
```

Otherwise, you can always build the tests using CMake for the C++ test, and run them as follows:

```bash
$ cmake . -D BUILD_TEST=TRUE
$ make && make test
```

#### Python

The Python tests can be ran using pytest:

```bash
$ pytest -v tests/
```

You can also start the tests with Bazel:

```bash
$ bazel test --test_output=all --spawn_strategy=standalone //tests/python/...
```


## Styleguides

### C++ Styleguide

All C++ code must be formatted based on our [clang-format config file](https://github.com/OpenMined/TenSEAL/blob/master/.clang-format). You can easily setup that into your prefered IDE, so that formatting is applied as you code.

### Python Styleguide

All Python code must be formatted using [black](https://github.com/psf/black). You can easily setup that into your prefered IDE, so that formatting is applied as you code.


### Documentation Styleguide

TBD


## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests. Most labels are used across all OpenMined repositories, but some are specific to `OpenMined/TenSEAL`.

[GitHub search](https://help.github.com/articles/searching-issues/) makes it easy to use labels for finding groups of issues or pull requests you're interested in. For example, you might be interested in [open issues across `OpenMined/TenSEAL` which are labeled as bugs](https://github.com/OpenMined/TenSEAL/issues?q=is%3Aissue+label%3A%22Type%3A+Bug+%3Abug%3A%22+) or perhaps [open pull requests in `OpenMined/TenSEAL` which haven't been reviewed yet](https://github.com/OpenMined/TenSEAL/pulls?q=is%3Apr+is%3Aopen+comments%3A0). To help you find issues and pull requests, each label is listed with search links for finding open items with that label in `OpenMined/TenSEAL`. We  encourage you to read about [other search filters](https://help.github.com/articles/searching-issues/) which will help you write more focused queries.

The labels are loosely grouped by their purpose, but it's not required that every issue have a label from every group or that an issue can't have more than one label from the same group.


| Label name | Description |
| --- | --- |
| API | Related to the API |
| Build | Related to the build of the package |
| Good first issue :mortar_board: | Perfect for beginners, welcome to OpenMined! |
| Priority: 1 - Immediate :fire: | Must be fixed immediately and cannot wait |
| Priority: 2 - High :cold_sweat: | Should be fixed as quickly as possible, ideally within the current or following sprint |
| Priority: 3 - Medium :unamused: | Should be fixed soon, but there may be other pressing matters that come first |
| Priority: 4 - Low :sunglasses: | Should only be scheduled if it's important relative to other issues |
| Severity: 1 - Critical :fire: | Causes a failure of the complete software system, subsystem or a program within the system |
| Severity: 2 - High :cold_sweat: | Does not cause a failure, but causes the system to be incorrect, incomplete, or inconsistent |
| Severity: 3 - Medium :unamused: | Does not cause a failure, impair usability, or interfere with the system |
| Severity: 4 - Low :sunglasses: | An aesthetic issue or is the result of non-conformance to a standard |
| Status: Abandoned :sob: | This was assigned to someone but is not in active development |
| Status: Available :wave: | Available for assignment, who wants it? |
| Status: Blocked :heavy_multiplication_x: | Cannot work on this because of some other incomplete work |
| Status: Completed :heavy_check_mark: | Finished with all expected deliverables |
| Status: In Progress :star2: | This is actively being worked on |
| Status: Investigating :mag: | Something we are looking in to, but not currently in active development |
| Status: Review Needed :raising_hand: | This needs someone to approve, deny, comment, or request changes |
| Status: Stale :bread: | Been open for a while with no activity |
| Type: Bug :bug: | Some functionality not working in the codebase as intended |
| Type: Discussion :speaker: | When further discussion and debate is required |
| Type: Documentation :books: | Improvements or additions in documentation for some file, feature, or codebase |
| Type: Epic :call_me_hand: | Describes a large amount of functionality that will likely be broken down into smaller issues |
| Type: Improvement :chart_with_upwards_trend: | Performance improvement not introducing a new feature or requiring a major refactor |
| Type: New Feature :heavy_plus_sign: | Introduction of a completely new addition to the codebase |
| Type: Question :grey_question: | Question about implementation or some technical aspect |
| Type: Refactor :hammer: | A complete overhaul of a file, feature, or codebase |
| Type: Research :microscope: | When further investigation into a subject is required |
| Type: Testing :test_tube: | Add testing or improving existing testing of a file, feature, or codebase |
| duplicate | This issue or pull request already exists |
