#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PREVIEW_ROOT="$ROOT_DIR/.slide-preview-root"
REQUESTED_PORT="${PORT:-4180}"
PORT_CANDIDATES=("$REQUESTED_PORT" 4181 4182 4183 4184)

mkdir -p "$PREVIEW_ROOT"
ln -sfn "$ROOT_DIR/Dashboard & Solution prototype" "$PREVIEW_ROOT/Dashboard & Solution prototype"
ln -sfn "$ROOT_DIR/dashboard/dist" "$PREVIEW_ROOT/dashboard"

for PORT in "${PORT_CANDIDATES[@]}"; do
  if ! lsof -i :"$PORT" >/dev/null 2>&1; then
    echo "Serving slide deck on http://localhost:${PORT}/Dashboard%20%26%20Solution%20prototype/"
    exec python3 -m http.server "$PORT" --directory "$PREVIEW_ROOT"
  fi
done

echo "No free port found in: ${PORT_CANDIDATES[*]}"
echo "Try again with a custom port, for example: PORT=4190 npm run serve"
exit 1
