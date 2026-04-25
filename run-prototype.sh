#!/usr/bin/env bash
set -euo pipefail

if lsof -i :3001 >/dev/null 2>&1; then
  echo "Prototype app is already running on http://localhost:3001/"
  exit 0
fi

cd "$(dirname "${BASH_SOURCE[0]}")/../app"
exec npm start
