---
description: Project-specific coding rules for autonomous agent
alwaysApply: true
---

## Project Context
This is a production software project. Maintain stability and consistency.

## Development Rules
- Always inspect existing architecture before making changes
- Do not introduce new frameworks unless necessary
- Respect existing folder structure
- Keep changes minimal and safe

## Editing Behavior
- Prefer patch-style small edits
- Modify existing files instead of creating new ones
- Ensure changes do not break existing functionality

## Testing Rules
- If tests exist, ensure they pass after changes
- If no tests exist, suggest minimal test coverage improvements

## Code Style
- Follow existing project style
- Keep readability higher than optimization
- Avoid over-engineering

## Agent Workflow
1. Understand full context
2. Identify relevant files
3. Plan changes mentally
4. Apply minimal edits
5. Validate logic