'use strict';

const
  gulp = require('gulp'),
  clean = require('gulp-clean'),
  rename = require('gulp-rename');


const paths = {
  dist: 'dist',
  artifacts: [
    'modules/totem-v3/provisioning/*.yml',
    'modules/totem-v3-orchestrator/totem-*.yml',
    'modules/totem-v3-config-service/totem-*.yml',
    'package.json',
    'README.md'
  ]

};

gulp.task('clean', () => {
  return gulp.src(paths.dist)
    .pipe(clean());
});

gulp.task('package', ['clean'], () => {
  return gulp.src(paths.artifacts, {base: '.'})
    .pipe(rename(path => {
      path.dirname = path.dirname
        .replace('modules/totem-v3-orchestrator', '/templates/orchestrator')
        .replace('modules/totem-v3/provisioning', '/templates/cluster')
        .replace('modules/totem-v3-config-service', '/templates/config-service');
    }))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('default', ['package']);
