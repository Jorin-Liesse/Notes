<link rel="stylesheet" href="../style.css">

## Branching Strategy

> **Main Branch**
> - **Purpose**: This branch contains the stable, production-ready code.
> - **Usage**: Only merge code into the main branch when it is fully tested and ready for release. This branch should always be deployable.

---

> **Dev Branch**
> - **Purpose**: This branch is used for integrating features and testing before they are merged into the main branch.
> - **Usage**: Developers should merge their feature branches into the dev branch. It serves as a staging area for features that are ready for testing.

---

> **Feature Branch**
> - **Purpose**: These branches are used for developing new features or making changes.
> - **Usage**: Create a new feature branch from the dev branch for each new feature or bug fix. Once the feature is complete and tested, merge it back into the dev branch.

---

> **Fix Branch**
> - **Purpose**: These branches are used for fixing bugs or making small changes.
> - **Usage**: Create a new fix branch from the dev branch for each bug fix. Once the fix is complete and tested, merge it back into the dev branch.

---

> **HotFix Branch**
> - **Purpose**: These branches are used for fixing critical bugs in the production code.
> - **Usage**: Create a new hotfix branch from the main branch for each critical bug fix. Once the fix is complete and tested, merge it back into the main branch.