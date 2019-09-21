module.exports = {
  name: 'frontend-ui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/frontend/ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
