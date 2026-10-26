# Design Principles

- Aim for minimal lines of code with out sacrificing readability.
- Aim to use as few external libraries as possible.

# Conventions

## General

- Treat `console.logD` as a valid global helper function defined by this project.
- Prefer one line if statements were possible.

## Dependency Policy

For prototype and exploratory work, using dependency version strings such as `"latest"` is acceptable when the goal is to move quickly and test ideas without pinning to a specific release. This is especially true for early-stage projects where iteration speed matters more than strict reproducibility.

## Anti-Defensive Coding Policy

Do not add defensive checks for environment variables, runtime config, or external services unless the code is specifically meant to be resilient in a shared or productionized environment.

This policy is intentional: the project is a prototype, and the team wants to keep the code fast to iterate and easy to understand. Avoid defensive coding patterns that hide missing configuration or turn absent environment variables into complicated fallback logic.

# Style

- Write all code so that is passes Standard JS linting.
