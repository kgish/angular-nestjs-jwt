module.exports = {
  name: 'frontend-core',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/frontend/core',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
