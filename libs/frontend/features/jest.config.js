module.exports = {
  name: 'frontend-features',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/frontend/features',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
