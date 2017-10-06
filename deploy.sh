#!/bin/bash -e

cd dist

if [ "$TRAVIS_PULL_REQUEST" == "false" ] && ([ "$TRAVIS_BRANCH" == "develop" ] || \
  [ "$TRAVIS_BRANCH" == "master" ]); then

  echo "Deploying package to npm..."
  if [ "$TRAVIS_BRANCH" != "master" ]; then
    TS="$(date +%Y%m%d%H%M%S)"
    sed -i -r  "s/(.+version.*\")([^\"-]+)([\"-].*)/\1\2-SNAPSHOT.$TS\3/" package.json || \
    # Try mac version
    sed -i '' -E  "s/(.+version.*\")([^\"-]+)([\"-].*)/\1\2-SNAPSHOT.$TS\3/" package.json
  fi

  # Push artifacts to NPM
  npm publish

else
  echo "Skip deploy"
fi

cd ..