const Dependency = require('webpack/lib/Dependency');

class MarkTranslationKeys extends Dependency {
  constructor(range, value) {
    super();
    this.range = range;
    this.value = value;
  }
}

MarkTranslationKeys.Template = class ReplaceDependencyTemplate {
  apply(dep, source) {
    source.replace(
      dep.range[0],
      dep.range[1] - 1,
      dep.value
    )
  }
};

module.exports = MarkTranslationKeys
