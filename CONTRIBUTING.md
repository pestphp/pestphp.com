# Contribution Guide

- [Introduction](#introduction)
	- [Guidelines](#guidelines)
- [Get Started](#get-started)
	- [Setup](#setup)
	- [Updating After Remote Code Changes](#update)

<a name="introduction"></a>
## Introduction

Contributions are welcome, and are accepted via pull requests. Please review these guidelines before submitting any pull requests.

<a name="guidelines"></a>
### Guidelines

* Send a coherent commit history, making sure each individual commit in your pull request is meaningful.
* You may need to [rebase](https://git-scm.com/book/en/v2/Git-Branching-Rebasing) to avoid merge conflicts.

<a name="get-started"></a>
## Get Started

Let's get started

<a name="setup"></a>
### Setup

1. Fork the project
2. Clone your fork by running the following command *with your username placed into the {username} slot*:
	```bash
    git clone https://github.com/{username}/pestphp.com pest
    ```
3. CD into the new directory you just created:
    ```bash
    cd pest
    ```
4. Run the `setup.sh` bin script, which will take all the steps necessary to prepare your local install:
    ```bash
    ./bin/setup.sh
    ```

<a name="update"></a>
### Updating After Remote Code Changes

If you pull down the upstream changes from this repository into your local repository, you'll want to update your Composer and NPM dependencies, as well as update your documentation branches. For convenience, you may run the `bin/update.sh` script to update these things:

```bash
./bin/update.sh
```