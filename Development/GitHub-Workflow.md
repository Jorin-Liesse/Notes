## GitHub Workflow

- **Feature Procedure** (added feature)
  - Developer create new branch from dev branch
  - Developer create feature and commits to this branch
  - Developer is done with feature
  - Developer creates a push request to dev branch (on github [base: dev branch, compare: feature branch])
  - Project manager check push request (on github none conflict or other problems)
  - Project manager accept merge (on github)
  - Developer checks if feature is working correctly on dev branch
  - Developer deletes this feature branch

- **Fix Procedure** (added feature)
  - Developer create new branch from dev branch
  - Developer create fixes bug and commits to this branch
  - Developer is done with fixes
  - Developer creates a push request to dev branch (on github [base: dev branch, compare: fix branch])
  - Project manager check push request (on github none conflict or other problems)
  - Project manager accept merge (on github)
  - Developer checks if fixes is working correctly on dev branch
  - Developer deletes this fix branch

- **Release Procedure** (version to distribute)
  - Developers have maked all feature needed for that release
  - Project Manager creates a push request to dev branch (on github [base: main branch, compare: dev branch])
  - Developers checks push request (on github none conflict or other problems)
  - Project manager accept merge (on github)
  - Developers checks if feature is working correctly on main branch
  - Project manager makes build
  - Project manager adds new tag (on github tag [name: version])
  - Developers checks if there features working in build (on github tag [name: version])

- **HotFix Procedure** (to fix bug in a release)
  - Developer create new branch from dev main
  - Developer fixes bug and commits to this branch
  - Developer is done with fixes
  - Developer creates a push request to main branch (on github [base: main branch, compare: hotfix branch])
  - Project manager check push request (on github none conflict or other problems)
  - Project manager accept merge (on github)
  - Developer checks if feature is working correctly on main branch
  - Developer deletes this hotfix branch
  - Project manager makes build
  - Project manager adds new tag (on github tag [name: version])
  - Developer checks if bug is fixed in build (on github tag [name: version])